import styled from "styled-components";

export const ConclusionsContainer = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 0.5rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  /* scroll-behavior: smooth; */
`;

export const ConclusionItem = styled.div`
  font-size: 1.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
`;
