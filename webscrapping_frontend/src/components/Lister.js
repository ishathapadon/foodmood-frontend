import React, { useEffect, useState } from "react";
import axios from "axios";
import Logo from "./Logo";

const Lister = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/scraped-data", {
        headers: {
          "Cache-Control": "no-cache",
        },
      })
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data:", error);
      });
  }, []);
console.log(data)
  return (
    <div className="lister-container">
      <div className="text-center">
        <Logo />
      </div>
      <h1 className="text-center py-5">
        Scrapped data of jimbu thakali kitchen
      </h1>
      <div className="data-container">
        {data.map((thakali) => {
          return (
            <>
              <div className="py-3 d-flex align-items-center gap-2">
                <div className="img-container">
                  <img
                    src={thakali.imageUrl}
                    alt=""
                    width="100px"
                    height="100px"
                  />
                </div>
                <div className="info-container">
                  <div className="py-2">{thakali.name}</div>
                  <div>{thakali.price}</div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Lister;
