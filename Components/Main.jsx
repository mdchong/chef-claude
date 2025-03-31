import React from 'react'

export default function Main() {
    const [ingredients, setIngredients] = React.useState(["Chicken", "Oregano", "Tomatoes"])

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function ingredientForm (formData) {
        const newIngredient = formData.get("ingredient"); // this is why you need name for input!!

        setIngredients(prev => [
            ...prev, 
            newIngredient
        ])
    }

    console.log(ingredients)

    return (
        <main>
            <form action={ingredientForm} className="addIngredientForm">
                <input 
                    type="text" 
                    area-label="Add ingredient"
                    placeholder="e.g. oregano"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}