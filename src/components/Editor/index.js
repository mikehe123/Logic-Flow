import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { EditorContainer } from "./EditorElements";

export default function Editor() {
  const [text, setText] = React.useState({ value: null });

  const textChange = (value) => {
    setText({ value });
  };

  return (
    <>
      <EditorContainer>
        <ReactQuill
          value={text.value}
          onChange={textChange}
          modules={{ toolbar: false }}
        />
      </EditorContainer>
    </>
  );
}
