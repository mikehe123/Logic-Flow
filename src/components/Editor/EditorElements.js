import styled from "styled-components";
export const QuillContainer = styled.div`
  height: 100%;
  width: 100%;
`;
export const EditorContainer = styled.div`
  height: 100%;

  width: 100%;
  border-radius: 5px;
  background-color: white;
`;

export const QuillCustomStyledWrapper = styled(QuillContainer)`
  /* .ql-editor {
    /* Scroll setting for editor */
    scrollbar-width: none;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    /* scroll-behavior: smooth; */
  }
  .ql-editor::-webkit-scrollbar {
    display: none;
  } */
`;
