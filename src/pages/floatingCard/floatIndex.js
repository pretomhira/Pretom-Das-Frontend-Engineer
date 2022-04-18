import React, { useEffect, useState } from "react";
import axios from "axios";
import FloatPannel from "../../components/indivitualsComponent/floatIndex";

export default function FloatIndex() {
  const [fact, setFact] = useState("");

  const getData = async () => {
    try {
      const res = await fetch("https://catfact.ninja/fact");
      const data = await res.json();

      setFact(data.fact);
      console.log(data.fact);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
    const intervalCall = setInterval(() => {
      getData();
    }, 60000);
    return () => {
      // clean up
      clearInterval(intervalCall);
    };
  }, []);

  return (
    <div className=" max-w-7xl mx-auto h-full">
      <FloatPannel fact={fact} />
    </div>
  );
}
