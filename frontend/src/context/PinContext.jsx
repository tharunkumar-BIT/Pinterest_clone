import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
const PinContext = createContext();

export const PinProvider = ({ children }) => {
  const [pins, setPins] = useState([]);
  const [loading, setLoading] = useState(true);
  async function fetchPins() {
    try {
      const { data } = axios.get("/api/pin/all");
      setPins(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchPins();
  }, []);
  return (
    <PinContext.Provider value={{ pins, loading }}>
      {children}
    </PinContext.Provider>
  );
};

export const PinData = () => useContext(PinContext);
