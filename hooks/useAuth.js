import { useState, useContext } from "react";

import axios from "axios";
import { Usercontext } from "./UserContext";

export default function useAuth() {
  const { setUser } = useContext(UserContext);

  // Sets user in context, push them to homepage.
  const setUserContext = async () => {
    return 
  }

  
}
