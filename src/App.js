import Autocomplete from "./Autocomplete";
import React from "react";

const App = () => {
  return (
    <div className="App">
      <Autocomplete
        options={[
          "Papaya",
          "Persimmon",
          "Paw Paw",
          "Prickly Pear",
          "Peach",
          "Pomegranate",
          "Pineapple"
        ]}
      />
    </div>
  );
};

export default App;
