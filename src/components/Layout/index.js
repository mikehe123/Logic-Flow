import React from "react";
import Editor from "../Editor";
import EditorHistory from "../Conclusions";
import {
 Container,
 LayoutHorizontal,
 LayoutLeftWrapper,
 LayoutTop,
 LayoutResizer,
 LayoutBottom,
 LayoutHorizontalResizer,
 LayoutRight
} from "./LayoutElements";
import "./layoutResizers";
const Layout = () => {
  return (
    <>
    <Container>
<LayoutHorizontal>
  <LayoutLeftWrapper>
    <LayoutTop>
      <EditorHistory/>
    </LayoutTop>
    <LayoutResizer id="dragMeVert"/>
    <LayoutBottom>
<Editor/>
    </LayoutBottom>
  </LayoutLeftWrapper>
  <LayoutHorizontalResizer id="dragMeHori"/>
  <LayoutRight>

  </LayoutRight>
</LayoutHorizontal>
    </Container>
    </>
  );
};

export default Layout;

