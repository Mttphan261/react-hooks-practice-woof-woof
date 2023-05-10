import React from "react";

function DogInfo({ dog, updateDog }) {

//**** Conditional to return a message on mount since dog(selectedDog) will not be defined yet ****/
    if (!dog) {
    return <div>Please select a doggie</div>;
  }


  function handleClick() {
    fetch(`http://localhost:3001/pups/${dog.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...dog,
        'isGoodDog': dog.isGoodDog ? false : true
      })
    })
    .then((r) => r.json())
    .then((data) => updateDog(data))
  }

  return (
    <div id="dog-summary-container">
      <h1>DOGGO:</h1>
      <div id="dog-info">
        <img src={dog.image} alt={dog.name} />
        <h2>{dog.name}</h2>
        <button onClick={handleClick}>{dog.isGoodDog ? "Good Dog!" : "Bad Dog!"}</button>
      </div>
    </div>
  );
}

export default DogInfo;
