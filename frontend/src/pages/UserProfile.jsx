import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PinData } from "../context/PinContext";
import PinCard from "../components/PinCard";
import { UserData } from "../context/UserContext";

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

  const [isfollow, setIsFollow] = useState(false);
  const { followUser } = UserData();
  const followHandler = () => {
    setIsFollow(!isfollow);
    followUser(user._id, fetchUser);
  };

  const followers = user.followers;
  useEffect(() => {
    if (followers && followers.includes(loggedInUser._id)) {
      setIsFollow(true);
    }
  }, [user]);

  const { pins } = PinData();
  let userPins;
  if (pins) {
    userPins = pins.filter((pin) => pin.owner === user._id);
  }

  useEffect(() => {
    fetchUser();
  }, [params.id]);
  return (
    <div>
      {user && (
        <div className="flex flex-col items-center justify-center">
          <div className="p-6 w-full">
            <div className="flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-3xl text-gray-700">
                  {user.name?.slice(0, 1)}
                </span>
              </div>
            </div>

            <h1 className="text-center text-2xl font-bold mt-4">{user.name}</h1>
            <p className="text-center text-gray-600 mt-2">{user.email}</p>
            <div className="flex justify-center items-center text-center gap-3 text-gray-600 mt-2">
              <p>{user.followers?.length} Followers</p>
              <p>{user.following?.length} Followings</p>
            </div>
            {user && user._id === loggedInUser._id ? (
              ""
            ) : (
              <div className="flex justify-center mt-4 space-x-2">
                <button
                  onClick={followHandler}
                  className="bg-gray-200 px-4 py-2 rounded"
                >
                  {isfollow ? "Unfollow" : "Follow"}
                </button>
              </div>
            )}

            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 mt-5 px-4 space-y-4">
              {userPins && userPins.length > 0 ? (
                userPins.map((e) => <PinCard key={e._id} pin={e} />)
              ) : (
                <p>No Pin Yet</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
