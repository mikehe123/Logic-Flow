import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
height: 100%;
width: 100%;
background-color: #f3f1f2;
// background-color: pink;
`
export const LayoutHorizontal = styled.div`
  height: 100%;
  display:flex;
  flex-direction: row;
`;


export const LayoutLeftWrapper = styled.div`
width: 35%;
  min-width: 20%;
  max-width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
`


export const LayoutTop = styled.div`
  background-color: yellowgreen;
  height: 50%;
  min-height: 30%;
  margin-top: 1rem;
  margin-left: 1rem;
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: 0.5rem;
`;

export const LayoutResizer = styled.div`
  background-color: #f3f1f2;
  cursor: ns-resize;
  height: 0.9rem;
`;

export const LayoutBottom = styled.div`
  background-color: yellowgreen;
  min-height: 30%;
  max-height: 70%;
  margin-bottom: 1rem;
  margin-left: 1rem;


  flex: 1;
  align-items: center;
  display: flex;
  justify-content: center;

  border-radius: 0.5rem;
`;


export const LayoutHorizontalResizer = styled.div`
width: 1.0rem;
background-color: #f3f1f2;

cursor: ew-resize;
`

export const LayoutRight = styled.div`
width: 65%;
min-width: 20%;
flex:1;
margin-top: 1rem;
margin-right: 1rem;
margin-bottom: 1rem;
margin-left: 0rem;
border-radius: 0.5rem;
background-color:white;
display:flex;
align-items: center;
justify-content: center;
`


