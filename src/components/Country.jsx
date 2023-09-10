import React, { useState } from "react";

const Country = ({ country, visitCount }) => {
  const { name, flags, area, population, cca3 } = country;
  const [visited, setVisited] = useState(false);
  function toggleFun() {
    setVisited(!visited)
    console.log(visited)
  }
  return (
    <>
      <div className={`w-[360px] rounded-md border ${visited && "bg-teal-400"}`}>
        <img
          src={flags.png}
          alt="country"
          className="h-[200px] w-full rounded-t-md object-cover"
        />
        <div className="p-4 space-y-3">
          <h1 className="inline-flex items-center text-2xl font-semibold">
            {name.common}
          </h1>
          <div className="font-medium flex justify-between">
            <span>Population: {population}</span> <span>Area:{area}</span>
          </div>
          <div className="mt-4 space-x-1 flex justify-between">
            <button className={`btn btn-outline  ${visited ? "btn-warning": "btn-success"}`}
            onClick={()=>visitCount(country)}>
              Mark Visited
            </button>
            <button onClick={toggleFun} className="btn btn-outline btn-primary">{`${!visited ? "Going": "visited"}`}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Country;
