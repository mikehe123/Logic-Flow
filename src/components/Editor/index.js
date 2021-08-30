import {
  EditorContainer,
  QuillContainer,
  QuillCustomStyledWrapper,
} from "./EditorElements";
import { useEffect, useState } from "react";
import { useQuill } from "react-quilljs";
import { useRecoilValue, useSetRecoilState } from "recoil";
import "./quillStyleSheet.css";

import quillConfig from "./quillConfigure";
import { argumentIds, argumentsAtomFamily } from "../../atom";

const QuillEditor = ({ argid, className }) => {
  console.log(className);
  console.log(argid);
  const { quill, quillRef } = useQuill(quillConfig);
  const setArgument = useSetRecoilState(argumentsAtomFamily(argid));
  const setArgId = useSetRecoilState(argumentIds);
  const [isUp, setIsUp] = useState(false);

  useEffect(() => {
    if (quill) {
      function onTextChange() {
        let argCursorAt = 0;
        let argContentBlock;
        let argSelectText;
        argCursorAt = quill.getSelection().index;
        argContentBlock = quill.getLines().map((line) => {
          let type = line.children.constructor.name;
          let content = line.children.head.text;
          return { type, content };
        });
        argSelectText = quill.getLines(argCursorAt)[0].children.head.text;
        setArgument({
          cursorAt: argCursorAt,
          content: argContentBlock,
          selected: argSelectText,
        });
      }
      quill.on("text-change", onTextChange);
      const handleUp = (event) => {
        if (9 === event.keyCode) {
          console.log("editor last id is:" + argid);
          setArgId((oldIds) => [...oldIds, oldIds[oldIds.length - 1] + 1]);
          if (isUp) {
            quill.off("text-change", onTextChange);
            quill.setContents("");
            setIsUp(false);
          } else {
            quill.off("text-change", onTextChange);
            quill.setContents("");
            setIsUp(true);
          }
        }
      };
      window.addEventListener("keyup", handleUp);

      return () => {
        window.removeEventListener("keyup", handleUp);
      };
    }
  }, [quill, isUp]);

  return (
    <QuillCustomStyledWrapper className={className}>
      <QuillContainer>
        <div ref={quillRef} />
      </QuillContainer>
    </QuillCustomStyledWrapper>
  );
};

const Editor = () => {
  console.log("quill container render times");
  const argid = useRecoilValue(argumentIds);
  let lastId = argid[argid.length - 1];

  return (
    <EditorContainer>
      <QuillEditor argid={lastId} />
    </EditorContainer>
  );
};

export default Editor;
