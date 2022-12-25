import { useEffect, useState } from "react";
import ticketService from "../services/tickets";
import Layout from "../components/layout/Layout";
import { useAuth } from "../context/AuthContext";
import TightContainer from "../components/layout/TightContainer";
import Countdown from "../components/countdown/Countdown";
export default function Home() {
  const authContext = useAuth();
  console.log("authContext", authContext);
  // const authDispatchContext = useAuthDispatch();

  // Check if cookie exist

  return (
    <div>
      <div className="p-2">
        <div className="border-2 m-2 p-2 border-black">
          <Countdown></Countdown>
        </div>
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <TightContainer>{page}</TightContainer>
    </Layout>
  );
};
