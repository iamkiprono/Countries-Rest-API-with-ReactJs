import "../Components/Homepage.css";
import { useEffect, useState } from "react";

const Homepage = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filterQuery, setFilterQuery] = useState("");
const getCountries = async () => {
   try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.log("Error fetching countries:", error);
    } 
  
}
  

useEffect(()=> {
  getCountries()
},[])

  return (
    <div className="homepage">
      <nav>
        <h3>Where in the world?</h3>
        
      </nav>
      <div className="search-bar">
        <input type="search" placeholder="Search for a country..." onChange={(e)=>setSearch(e.target.value)} />
        <div className="dropdown">
        <label for="region">Filter by Region</label>
        <select onChange={(e) => setFilterQuery(e.target.value)}>
          <option value="">All</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
        </div>
      </div>

      <div className="country-wrapper">
        {countries
          .filter((country) =>
            country.name.common.toLowerCase().includes(search.toLowerCase())
          ).filter((country) => country.region.toLowerCase().includes(filterQuery.toLowerCase()))
          .map((country) => {
            return (
              <div className="country-card" key={country.name.common}>
                <img src={country.flags.png} alt="" />
                <div className="details">
                  <h3
                    className="countryName"
                    onClick={() => console.log(country.name.common)}
                  >
                    Country: {country.name.common}
                  </h3>
                  <p>Poulation: {country.population.toLocaleString()}</p>
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
