import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserProfile = ({ user: loggedInUser }) => {
  const params = useParams();
  const [user, setUser] = useState([]);

  async function fetchUser() {
    try {
      const { data } = await axios.get(`/api/user/${params.id}`);
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);
  return <div>UserProfile</div>;
};

export default UserProfile;
