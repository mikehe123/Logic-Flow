import { RecoilRoot } from "recoil";
import "./App.css";
import Interface from "./components/Layout";
import Navbar from "./components/Navbar";
import Page from "./components/Page";

function App() {
  return (
    <>
      <RecoilRoot>
        <Page />
      </RecoilRoot>
    </>
  );
}

export default App;
