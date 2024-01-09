import React from "react";
import BestService from "../servicepage/BestService";
import Header from "../common/header";
import Footer from "../common/footer";
import Enquiry from "../common/enquiry";
import { useParams } from "react-router-dom";
import Four from "../404";

const WebService = () => {
  const { id } = useParams();

  const validPaths = ["Websites", "Seo", "Application", "Designing"];
  return (
    <div>
      {validPaths.includes(id) ? (
        <>
          <Header />
          <BestService />
          <Enquiry />
          <Footer />
        </>
      ) : (
        <Four />
      )}
    </div>
  );
};

export default WebService;
