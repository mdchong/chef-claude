import React from 'react'
import IngredientsList from './IngredientsList';
import ClaudeRecipe from './ClaudeRecipe';
import {getRecipeFromMistral} from '../ai.js';

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
    const [recipeShown, setRecipeShown] = React.useState("")

    async function getRecipe() {
        let generatedRecipe = await getRecipeFromMistral(ingredients);
        setRecipeShown(generatedRecipe);
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
                    getRecipe={getRecipe}
                />
            }

        {recipeShown ? 
            <ClaudeRecipe recipeShown={recipeShown}/> : null}
        </main>
    )
}