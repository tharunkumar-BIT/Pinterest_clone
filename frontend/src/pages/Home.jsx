import React from "react";
import { PinData } from "../context/PinContext";

const Home = () => {
  const { pins, loading } = PinData();

  return (
    <div>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex flex-wrap m-4">
            {pins && pins.length > 0 ? (
              pins.map((e, i) => <p key={i}>{e.title}</p>)
            ) : (
              <p>No Pins Yets</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
