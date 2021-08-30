import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f3f1f2;
`;

export const LayoutResizer = styled.div`
  background-color: #f3f1f2;
  cursor: ns-resize;
  height: 1rem;
  margin: 0 1rem;
`;

export const LayoutWrapperTop = styled.div`
  background-color: yellowgreen;
  height: 50%;
  min-height: 30%;
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: 5px;
`;

export const LayoutWrapperBottom = styled.div`
  background-color: yellowgreen;
  min-height: 30%;
  max-height: 70%;
  margin-bottom: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;

  flex: 1;
  align-items: center;
  display: flex;
  justify-content: center;

  border-radius: 5px;
`;
