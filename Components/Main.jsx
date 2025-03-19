export default function Main() {
    return (
        <main>
            <form className="addIngredientForm">
                <input 
                    type="text" 
                    area-label="Add ingredient"
                    placeholder="e.g. oregano"
                />
                <button>Add ingredient</button>
            </form>
        </main>
    )
}