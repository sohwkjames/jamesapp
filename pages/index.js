import Head from "next/head";
import Image from "next/image";
import Notes from "../components/Notes";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import noteService from "../services/notes";
import Layout from "../components/layout/Layout";

export default function Home() {
  const [notes, setNotes] = useState();
  useEffect(() => {
    noteService.getAll().then((data) => {
      console.log(data);
      setNotes(data);
    });
    // fetchData();
  }, []);

  return (
    <div> 
      {notes && <Notes notes={notes} />}
      <div className="p-2">
        <div className="border-2 m-2 p-2 border-black">Homepage</div>
        <div className="border-2 m-2 p-2 border-black">Homepage</div>
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
