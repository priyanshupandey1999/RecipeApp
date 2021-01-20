import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";
import Navbar from "./Navbar";
import Connect from "./Connect";

const App = () => {
  const APP_ID = "1b5b303c";
  const APP_KEY = "894b45f005631d225e1a8a4c492d6004";

  const [recipes, setRecipes] = useState([]);
  const [search,setSearch] = useState("");
  const [query, setQuery] = useState("random");

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
    };
    
    getRecipes();
  }, [query]);



  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <div className="header">
        <Navbar />
        <div className="text-heading center">
          Be your own chef.
        </div>
        <div className="text-heading-2 center">
          Find your favourite recipe
        </div>
      </div>
      <div className="text-heading-2 center">
          Try something new , just one search away.
      </div>
      <form onSubmit={getSearch} className="search-form center" >
        <input className="search-bar" type="text"
        value={search}
        onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          <img src="images/search.svg" alt="" />
        </button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      
      </div>
      <Connect />
    </div>
  );
};

export default App;
