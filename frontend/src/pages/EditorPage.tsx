import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RichTextEditor from "../components/RichTextEditor";
import api from "../api/api";

export default function EditorPage() {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    loadDocument();
  }, []);

  useEffect(() => {
  const timeout = setTimeout(async () => {
    if (!id) return;

    await api.patch(`/documents/${id}`, {
      title,
      content,
    });
  }, 2000);

  return () => clearTimeout(timeout);
}, [title, content]);

  const loadDocument = async () => {
    const response = await api.get(`/documents/${id}`);

    setTitle(response.data.title);
    setContent(response.data.content);
  };

  const saveDocument = async () => {
    await api.patch(`/documents/${id}`, {
      title,
      content,
    });

    console.log("Saved");
  };

  const shareDocument = async () => {
    await api.post(
      `/documents/${id}/share`,
      {
        email,
      }
    );

    alert("Shared");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Editor</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Document Title"
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <RichTextEditor
        content={content}
        onChange={setContent}
      />

      <br />
      <br />

      <hr />

      <h3>Share Document</h3>

      <input
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
        placeholder="bob@example.com"
      />

      <button onClick={shareDocument}>
        Share
      </button>

      <br />
      <br />

      <button onClick={saveDocument}>
        Save
      </button>
    </div>
  );
}