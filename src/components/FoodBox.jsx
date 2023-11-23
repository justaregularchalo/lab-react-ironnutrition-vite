import React from 'react'





function FoodBox(props) {
    
const {id,name,image,calories,servings} = props.food
const {foodToShow, setFoodToShow} = props

const handleDelete = ()=>{

    console.log("deleteing",id)
    const filterFoodToShow = foodToShow.filter ((eachFood) => {

        if(eachFood.id === id) {

            return false
        } else {

            return true
        }


    })

    setFoodToShow(filterFoodToShow)



}



  return (



    <div>
    
    
    <h2><strong>{name}</strong></h2>
    <img src={image} width= {"200px"} />
    <p>Calories: {calories} </p>
    <p>Servings: <strong>{servings}</strong> </p>
    <p> <strong>Total Calories:</strong> {servings} {calories} kcal.</p>

    <button onClick={ handleDelete}>Delete</button>
    


    </div>
  )
}

export default FoodBox