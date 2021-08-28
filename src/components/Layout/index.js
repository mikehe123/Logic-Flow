import React from "react";
import Editor from "../Editor";
import EditorHistory from "../Conclusions";
import {
  LayoutContainer,
  LayoutResizer,
  LayoutWrapperBottom,
  LayoutWrapperTop,
} from "./LayoutElements";
const Layout = () => {
  return (
    <>
      <LayoutContainer>
        <LayoutWrapperTop>
          <EditorHistory />
        </LayoutWrapperTop>
        <LayoutResizer id="dragMe" />
        <LayoutWrapperBottom>
          <Editor />
        </LayoutWrapperBottom>
      </LayoutContainer>
    </>
  );
};

export default Layout;

document.addEventListener("DOMContentLoaded", function () {
  // Query the element
  const resizer = document.getElementById("dragMe");
  const prevSibling = resizer.previousElementSibling;
  const nextSibling = resizer.nextElementSibling;

  // The current position of mouse

  let y = 0;
  let prevSiblingHeight = 0;

  // Handle the mousedown event
  // that's triggered when user drags the resizer
  const mouseDownHandler = function (e) {
    // Get the current mouse position

    y = e.clientY;
    const rect = prevSibling.getBoundingClientRect();
    prevSiblingHeight = rect.height;

    // Attach the listeners to `document`
    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };

  const mouseMoveHandler = function (e) {
    // How far the mouse has been moved

    const dy = e.clientY - y;

    const h =
      ((prevSiblingHeight + dy) * 100) /
      resizer.parentNode.getBoundingClientRect().height;
    prevSibling.style.height = `${h}%`;

    const cursor = "row-resize";
    resizer.style.cursor = cursor;
    document.body.style.cursor = cursor;

    prevSibling.style.userSelect = "none";
    prevSibling.style.pointerEvents = "none";

    nextSibling.style.userSelect = "none";
    nextSibling.style.pointerEvents = "none";
  };

  const mouseUpHandler = function () {
    resizer.style.removeProperty("cursor");
    document.body.style.removeProperty("cursor");

    prevSibling.style.removeProperty("user-select");
    prevSibling.style.removeProperty("pointer-events");

    nextSibling.style.removeProperty("user-select");
    nextSibling.style.removeProperty("pointer-events");

    // Remove the handlers of `mousemove` and `mouseup`
    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);

    // Remove the handlers of `mousemove` and `mouseup`
    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
  };

  // Attach the handler
  resizer.addEventListener("mousedown", mouseDownHandler);
});
