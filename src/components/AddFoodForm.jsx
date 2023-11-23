import React, { useState } from 'react'

function AddFoodForm({foodsToShow, setFoodsToShow}) {

    const [ formValues, setFormValues ] = useState ({

            name: "",
            image: "",
            calories: 0,
            servings: 0,




    })


    const handleInputChange = (event) => {

        const clone = JSON.parse(JSON.stringify(formValues))
        clone[event.target.name] = event.target.values
        setFormValues (clone)


    }


    const handleSubmit = (event) =>{

        event.preventDefault()
        setFoodsToShow([formValues, ...foodsToShow, ])


    }


  return (
   <form action="">


    <label htmlFor="name">NAme</label>
    <input type="text" name="name" value ={formValues.name} onChange={handleInputChange} />

    <label htmlFor="image">Image</label>
    <input type="text" name="image"value ={formValues.image}  onChange={handleInputChange} />

    <label htmlFor="calories">Calories</label>
    <input type="number" name="calories" value ={formValues.calories} onChange={handleInputChange} />

    <label htmlFor="servings">Servings</label>
    <input type="text" name="servings"value ={formValues.servings}  onChange={handleInputChange} />


    <button onClick={handleSubmit}> Create</button>







   </form>
  )
}

export default AddFoodForm