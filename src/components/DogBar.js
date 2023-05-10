import React, { useState } from "react";

function DogBar({ dogs, handleSelected }) {
  
  const [goodboys, setGoodBoys] = useState(false);

  const displayedDogs = [...dogs].filter((el) => {
    if (goodboys === true) {
      return el.isGoodDog === true;
    } else {
      return true;
    }
  });

  return (
    <>
      <div id="filter-div">
        <button
          id="good-dog-filter"
          onClick={() => setGoodBoys(prev => !prev)}
        >
          Filter for good dogs: {goodboys === true ? 'ON' : 'OFF'}
          
        </button>
      </div>
      <div id="dog-bar">
        {displayedDogs.map((dog) => {
          return (
            <>
              <span key={dog.id} onClick={() => handleSelected(dog.id)}>
                {dog.name}
              </span>
            </>
          );
        })}
      </div>
    </>
  );
}

export default DogBar;
