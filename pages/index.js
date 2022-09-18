import Head from "next/head";
import Image from "next/image";
import Notes from "../components/Notes";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import noteService from "../services/notes";

export default function Home() {
  const [notes, setNotes] = useState();
  useEffect(() => {
    noteService.getAll().then((data) => {
      console.log(data);
      setNotes(data);
    });
    // fetchData();
  }, []);
  return <div>{notes && <Notes notes={notes} />}</div>;
}
