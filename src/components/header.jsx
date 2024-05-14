import { useEffect, useState } from 'react';

export default function Header({ setSelectedCuisine }) {
    const [recipes, setRecipes] = useState([]);

    const fetchRecipesData = async () => {
        const response = await fetch("https://dummyjson.com/recipes");
        const resjson = await response.json();
        return resjson.recipes;
    };

    useEffect(() => {
        const loadRecipes = async () => {
            const recipesData = await fetchRecipesData();
            const uniqueCuisine = Array.from(new Set(recipesData.map(recipe => recipe.cuisine))).map(cuisine => recipesData.find(recipe => recipe.cuisine === cuisine))
            setRecipes(uniqueCuisine);
        };
        loadRecipes();
    }, []);

    const handleCuisineChange = (e) => {
        setSelectedCuisine(e.target.value);
    };

    return (
        <header className="containers">
            <div className="logosheader">
                <select onChange={handleCuisineChange} defaultValue="">
                    <option value="">Select a cuisine</option>
                    {recipes.map(recipe => (
                        <option key={recipe.id} value={recipe.cuisine}>
                            {recipe.cuisine}
                        </option>
                    ))}
                </select>
            </div>
        </header>
    );
}
