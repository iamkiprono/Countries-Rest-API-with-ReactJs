import React, { useEffect } from "react";
import "../Components/Homepage.css";
import { useState } from "react";

const Homepage = () => {
    const [countries, setCountries] = useState("Loading...")

    const getCountries = () => {
        fetch("data.json")
        .then(res=> res.json())
        .then(data=>{
            const countrys = data.map((country) => {
                return (    <div className="country-card">
                <img
                  src={country.flags.png}
                  alt=""
                />
                <div className="details">
                <h3 className="countryName">Country: {country.name}</h3>
                <p>Poulation: {country.population}</p>
                <p>Region: {country.region}</p>
                <p>Capital: {country.capital}</p>
                </div>
              </div>)
            })
            setCountries(countrys)
        })
    }
    useEffect(getCountries,[])

  return (
    <div className="homepage">
      <nav>
        <h3>Where in the world?</h3>
        <div className="theme">
          <p>Dark Mode</p>
        </div>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search for a country..." />
      </div>
      <div className="country-wrapper">
        {countries}
        {/* <div className="country-card">
          <img
            src="https://media.gettyimages.com/id/657672288/vector/flag-of-belgium.jpg?s=612x612&w=gi&k=20&c=KctGYXY1cVHL2vNc0KZWCiKXZNtCxxCewRFVCHp70U4="
            alt=""
          />
          <div className="details">
          <h3 className="countryName">Country: Germany</h3>
          <p>Poulation: 8100000</p>
          <p>Region: Europe</p>
          <p>Capital: Berlin</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Homepage;