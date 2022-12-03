import Head from "next/head";
import Image from "next/image";
import Notes from "../components/Notes";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ticketService from "../services/tickets";
import Layout from "../components/layout/Layout";
import { useQueryClient, useQuery } from "react-query";

export default function Home() {
  const { data, isLoading } = useQuery("tickets", ticketService.getAll);

  console.log("data", data);

  return (
    <div>
      <div className="p-2">
        <div className="border-2 m-2 p-2 border-black">Homepage</div>
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
