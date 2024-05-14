import { useEffect, useState } from 'react';

export default function Main({ selectedCuisine }) {
    const [recipes, setRecipes] = useState([]);

    const fetchRecipesData =async () => {
      const response = await fetch("https://dummyjson.com/recipes");
      const resjson = await response.json();
      return resjson.recipes;
    };

    useEffect(() => {
      const loadRecipes = async() => {
        let recipesData = await fetchRecipesData();
        if (selectedCuisine) {
          recipesData = recipesData.filter(recipe => recipe.cuisine === selectedCuisine);
        }
        setRecipes(recipesData);
      };
      loadRecipes();
    }, [selectedCuisine]);

    return (
      <div className='containers'>
        <div className="recipiesGrid">
          {recipes.map(food => 
          <div className='recipies-box' key={food.id}>
            <img src={food.image} alt={food.title} />
          </div>)}
        </div>
      </div>
    );
}
