import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PinData } from "../context/PinContext";
import { Loading } from "../components/Loading";

const PinPage = () => {
  const params = useParams();
  const { loading, fetchPin, pin } = PinData();
  console.log(pin);
  useEffect(() => {
    fetchPin(params.id);
  }, [params.id]);
  return (
    <div>
      {pin && (
        <div className="flex flex-col items-center bg-gray-100 p-4 min-h-screen">
          {loading ? (
            <Loading />
          ) : (
            <div className="bg-white rounded-lg shadow-lg flex flex-wrap w-full max-w-4xl">
              <div className="w-full md:w-1/2 bg-gray-200 rounded-t-lg md:rounded-l-lg md:rounded-t-none flex items-center justify-center">
                <img
                  src={pin.image.url}
                  alt=""
                  className="object-cover w-full rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PinPage;
