import React, { useEffect, useState } from "react";
import DogBar from "./DogBar";
import DogInfo from './DogInfo';


function App() {

  const [dogs, setDogs] = useState([]) //creating state for dogs, since we want to change over time and situation.
  const [selected, setSelected] = useState(null); //set state for selected dog

  function handleSelected(doggo) { //function to select a dog
    setSelected(doggo) //set select setter for dog that will be passed in
  } //pass as cb to DogBar, 

//make function to updateDog

function updateDog(doggo) {
  setDogs( //use setter function updating dog data array
    [...dogs].map(el => { //.map over destructured array, for every el...
      return el.id === doggo.id ? doggo : el;  //return either doggo(the updated dog) or the original object, using a === op and ternary to find the match 
    })
  )
} //passing cb func to DogInfo, which has the individual dog objects 

//** GET REQUEST**/
  useEffect(() => {
    fetch("http://localhost:3001/pups/")
      .then((r) => r.json())
      .then((data) => setDogs(data)); //set data to empty array state
  }, []); //Dependency Array 

  const selectedDog = dogs.find((dog) => dog.id === selected)

  return (
    <div className="App">
      <DogBar dogs={dogs} handleSelected={handleSelected}/>
      <DogInfo dog={selectedDog} updateDog={updateDog}/>
    </div>
  );
}

export default App;
