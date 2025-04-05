import React from 'react'
import IngredientsList from './IngredientsList';
import ClaudeRecipe from './ClaudeRecipe';

export default function Main() {
    // For Ingredients
    const [ingredients, setIngredients] = React.useState([])

    function ingredientForm (formData) {
        const newIngredient = formData.get("ingredient"); // this is why you need name for input!!

        setIngredients(prev => [
            ...prev, 
            newIngredient
        ])
    }

    // Get Recipe
    const [recipeShown, setRecipeShown] = React.useState(false)

    function toggleRecipeShown() {
        setRecipeShown(prevShown => !prevShown)
    }

    return (
        <main>
            <form action={ingredientForm} className="add-ingredient-form">
                <input 
                    type="text" 
                    aria-label="Add ingredient"
                    placeholder="e.g. oregano"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {ingredients.length > 0 && 
                <IngredientsList 
                    ingredients={ingredients}
                    toggleRecipeShown={toggleRecipeShown}
                />
            }

        {recipeShown ? 
            <ClaudeRecipe /> : null}
        </main>
    )
}