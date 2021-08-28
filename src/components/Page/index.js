import React from "react";
import Layout from "../Layout";
import Navbar from "../Navbar";
import { PageContainer } from "./PageElement";

const Page = () => {
  return (
    <>
      <PageContainer>
        <Navbar />
        <Layout />
      </PageContainer>
    </>
  );
};

export default Page;
