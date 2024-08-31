import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Lister from "./components/Lister.js";
import Logo from "./components/Logo.js";
const App = () => {
  return (
    <>
      <section className="container herobanner ">

        <div className="hero-text">
        <Logo/>
          <h1 className="py-4">
            <span> Discover</span>, Compare, and <span>Savor</span>: Your
            <span>Perfect</span> <span>Dish</span> Awaits!
          </h1>
          <p>
            Welcome to our food discovery platform, where your taste buds lead
            the way! With our intuitive search and comparison tool, finding your{" "}
            <span>favorite dishes</span> has never been easier. Simply type in a
            keyword, like "<span>pizza</span>," and instantly explore dishes
            from top restaurants like <span>Domino’s</span> and{" "}
            <span>Pizza Hut</span>. Our <span>real-time filtering</span> feature
            lets you compare dishes side by side, complete with{" "}
            <span>prices</span>, <span>ratings</span>, and mouth-watering{" "}
            <span>images</span>. Whether you’re craving a classic or something
            new, our platform ensures you find exactly what you’re looking for.
            Discover your next meal, compare your options, and savor every bite—
            <span>your perfect dish</span> is just a search away!
          </p>
        </div>
      </section>
      <section className="container my-5 py-5">
        <Lister />
      </section>
    </>
  );
};

export default App;
