import React, { useEffect, useState } from "react";
import Tags from "./Tags";

const PopularTags = ({ ttag }) => {
  const [dog, setDog] = useState(0);
  const [water, setWater] = useState(0);
  const [nature, setNature] = useState(0);
  const [winter, setWinter] = useState(0);
  const [infoReq, setInfoReq] = useState(0);

  useEffect(() => {
    
    const answer = ttag && ttag.data.join(" ");
    const forDogs = answer && answer.match(/dog/g).length;
    const forNature = answer && answer.match(/nature/g).length;
    const forWinter = answer && answer.match(/winter/g).length;
    const forWater = answer && answer.match(/water/g).length;
    setDog(forDogs || 0);
    setNature(forNature || 0);
    setWinter(forWinter || 0);
    setWater(forWater || 0);
  }, [ttag]);

  return (
    <div className="flex flex-col space-y-4 rounded-lg bg-white shadow-md h-full p-6">
      <h1 className="text-xl font-semibold">Popular Tags</h1>
      <div className="grid grid-cols-2 gap-2 w-full">
       
        <Tags string={"Dog"} number={dog} />
        <Tags string={"Water"} number={water} />
        <Tags string={"Nature"} number={nature} />
        <Tags string={"Privte info requests"} number={infoReq} />
        <Tags string={"Winter"} number={winter} />
      </div>
    </div>
  );
};

export default PopularTags;
