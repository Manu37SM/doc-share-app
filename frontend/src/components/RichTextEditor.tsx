import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";

interface Props {
  content: string;
  onChange: (value: string) => void;
}

export default function RichTextEditor({
  content,
  onChange,
}: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],

    content,

    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
  if (editor && content !== editor.getHTML()) {
    editor.commands.setContent(content);
  }
  }, [content, editor]);

  if (!editor) {
    return null;
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "10px",
        }}
      >
        <button
          onClick={() =>
            editor.chain().focus().toggleBold().run()
          }
        >
          Bold
        </button>

        <button
          onClick={() =>
            editor.chain().focus().toggleItalic().run()
          }
        >
          Italic
        </button>

        <button
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleHeading({ level: 1 })
              .run()
          }
        >
          H1
        </button>

        <button
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleHeading({ level: 2 })
              .run()
          }
        >
          H2
        </button>

        <button
          onClick={() =>
            editor.chain().focus().toggleBulletList().run()
          }
        >
          Bullet
        </button>

        <button
          onClick={() =>
            editor.chain().focus().toggleOrderedList().run()
          }
        >
          Numbered
        </button>
      </div>

      <EditorContent
        editor={editor}
        style={{
          border: "1px solid #ccc",
          minHeight: "400px",
          padding: "10px",
        }}
      />
    </div>
  );
}