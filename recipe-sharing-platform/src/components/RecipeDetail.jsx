import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((recipe) => recipe.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch((error) => console.error('Error fetching recipe details:', error));
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <p className="text-lg text-gray-700 mb-4">{recipe.summary}</p>

      <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-4">
        {recipe.ingredients?.map((ingredient, index) => (
          <li key={index} className="text-gray-600">{ingredient}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Cooking Instructions</h2>
      <ol className="list-decimal list-inside">
        {recipe.instructions?.map((instruction, index) => (
          <li key={index} className="text-gray-600 mb-2">{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;
