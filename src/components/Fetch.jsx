import React, { useEffect, useState } from "react";
import Country from "./country";

const Fetch = () => {
  const [fetchData, setFetchData] = useState([]);
  const [visitCount, setVisitCount] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setFetchData(data));
  }, []);

  function visitedCountry(country) {
    const newCountry = [...visitCount, country];
    setVisitCount(newCountry);
  }

  function removeItem(id) {
    const newVisitCount = visitCount.filter((e) =>  e.area !== id)
    console.log(newVisitCount)
    setVisitCount(newVisitCount)
  }

  return (
    <>
      <div className="space-y-4">
        <h2 className="text-2xl font-medium mb-4">
          Countries: {fetchData.length}
        </h2>
        <h2 className="text-2xl font-medium">
          Visited countries: {visitCount.length}
        </h2>

        <div className="flex flex-wrap gap-2">
          {visitCount.map((country, index) => {
            return (
                <li className="alert alert-info w-fit text-2xl" key={index}>
                {country.name.common}
                <img src={country.flags.png} alt="country-flag" className="h-10" />

                <button className="btn btn-square btn-outline btn-error btn-sm"
                onClick={()=>{removeItem(country.area)}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                </li>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {fetchData.map((country, index) => (
            <Country
              key={index}
              country={country}
              visitCount={visitedCountry}
            ></Country>
          ))}
        </div>
      </div>
    </>
  );
};

export default Fetch;
