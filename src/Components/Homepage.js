import "../Components/Homepage.css";
import { useState } from "react";

const Homepage = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      setCountries(data);
    });

  return (
    <div className="homepage">
      <nav>
        <h3>Where in the world?</h3>
        <div className="theme">
          <p>Dark Mode</p>
        </div>
      </nav>
      <div className="search-bar" onChange={(e) => setSearch(e.target.value)}>
        <input type="text" placeholder="Search for a country..." />
      </div>

      <div className="country-wrapper">
        {countries
          .filter((country) => {
            return search.toLocaleLowerCase() === ""
              ? country
              : country.name
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase());
          })
          .map((country) => {
            return (
              <div className="country-card" key ={country.name}>
                <img src={country.flags.png} alt="" />
                <div className="details">
                  <h3 className="countryName">Country: {country.name}</h3>
                  <p>Poulation: {country.population}</p>
                  <p>Region: {country.region}</p>
                  <p>Capital: {country.capital}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Homepage;
