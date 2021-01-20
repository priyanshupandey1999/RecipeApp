import React from 'react'

const Recipe = ({title,calories,image,ingredients}) => {
    return (
        <div className="recipe">
            <img src={image} alt="" />
            <h1 className="center">{title}</h1>
            <ol >
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calories - {calories}</p>
        </div>
    )
}

export default Recipe
