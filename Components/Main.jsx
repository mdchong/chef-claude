export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient"); // this is why you need name for input!!
        
    }

    console.log(ingredients)

    return (
        <main>
            <form onSubmit={handleSubmit} className="addIngredientForm">
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