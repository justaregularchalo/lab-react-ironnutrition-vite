import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";


import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {


  const [foodToShow, setFoodToShow] = useState (foodsJson)

  

 return (
  <div>

    <AddFoodForm

    foodToShow = {foodToShow} 
    setFoodToShow = {setFoodToShow}

      
    />

{foodToShow.map((eachFood)=>{

  return (

    <FoodBox  

    key= {eachFood.id}
    food= {eachFood} 
    setFoodToShow = {setFoodToShow}
    foodToShow= {foodToShow}

    />

  
    

  )


})}
    </div>
  );
  }


export default App;
