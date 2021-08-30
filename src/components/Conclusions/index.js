import React from "react";
import { useRecoilValue } from "recoil";
import { argumentIds, argumentsAtomFamily } from "../../atom.js";
import { ConclusionItem, ConclusionsContainer } from "./ConclusionsElements.js";

const Conclusion = ({ id }) => {
  const argumentContent = useRecoilValue(argumentsAtomFamily(id));

  return (
    <ConclusionItem>
      {/* {argumentContent.content.map((content, index) => {
        return <div key={index}>{content.selected}</div>;
      })} */}
      {argumentContent.selected}
    </ConclusionItem>
  );
};

const Conclusions = () => {
  const allArgids = useRecoilValue(argumentIds);
  return (
    <>
      <ConclusionsContainer>
        {allArgids.map((id, index) => {
          if (index < allArgids.length - 1) {
            return <Conclusion key={id} id={id} />;
          } else {
            return <div key={-999}></div>;
          }
        })}
      </ConclusionsContainer>
    </>
  );
};

export default Conclusions;
