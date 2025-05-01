import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PinData } from "../context/PinContext";

const PinPage = () => {
  const params = useParams();
  const { loading, fetchPin, pin } = PinData();
  console.log(pin);
  useEffect(() => {
    fetchPin(params.id);
  }, [params.id]);
  return <div>PinPage</div>;
};

export default PinPage;
