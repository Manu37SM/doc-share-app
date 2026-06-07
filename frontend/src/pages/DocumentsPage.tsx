import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

export default function DocumentsPage() {
  const navigate = useNavigate();

  const [ownedDocs, setOwnedDocs] = useState<any[]>([]);
  const [sharedDocs, setSharedDocs] = useState<any[]>([]);

  const user = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const docsResponse =
      await api.get("/documents");

    console.log(
  "First Doc",
  docsResponse.data[0]
);

    setOwnedDocs(docsResponse.data);

    const sharedResponse =
      await api.get(
        `/documents/shared/${user.id}`
      );

    setSharedDocs(sharedResponse.data);
  };

  const createDocument = async () => {
    const response = await api.post(
      "/documents",
      {
        title: "Untitled Document",
        ownerId: user.id,
      }
    );

    navigate(
      `/documents/${response.data.id}`
    );
  };

  const uploadFile = async (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      const file = e.target.files?.[0];

      if (!file) return;

      const formData = new FormData();

      formData.append("file", file);

      formData.append(
        "ownerId",
        String(user.id)
      );

      const response = await api.post(
        "/documents/import",
        formData
      );

      navigate(
        `/documents/${response.data.id}`
      );
    };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Documents</h1>

      <button onClick={createDocument}>
        New Document
      </button>

      <hr />

      <input
        type="file"
        accept=".txt,.md"
        onChange={uploadFile}
      />

      <h2>My Documents</h2>

      {ownedDocs.map((doc) => (
        <div
          key={doc.id}
          style={{ cursor: "pointer" }}
          onClick={() =>
            navigate(`/documents/${doc.id}`)
          }
        >
          👑 {doc.title}
        </div>
      ))}

      <hr />

      <h2>Shared With Me</h2>

      {sharedDocs.map((item) => (
        <div
          key={item.id}
          style={{ cursor: "pointer" }}
          onClick={() =>
            navigate(
              `/documents/${item.document.id}`
            )
          }
        >
          🤝 {item.document.title}
        </div>
      ))}
    </div>
  );
}