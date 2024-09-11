import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = data.find((r) => r.id === parseInt(id));
    if (selectedRecipe) {
      setRecipe(selectedRecipe);
    }
  }, [id]);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg"> {/* shadow-lg added here */}
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      
      {/* Recipe Image with shadow */}
      <img 
        src={recipe.image} 
        alt={recipe.title} 
        className="w-full h-64 object-cover rounded-lg shadow-md mb-6" 
      />

      <p className="text-gray-700 mb-6">{recipe.summary}</p>
      
      {/* Ingredients section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc pl-5">
          {recipe.ingredients && recipe.ingredients.split('\n').map((ingredient, index) => (
            <li key={index} className="text-gray-600">{ingredient}</li>
          ))}
        </ul>
      </div>

      {/* Preparation steps section */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">Preparation Steps</h2>
        <ol className="list-decimal pl-5 space-y-2">
          {recipe.steps && recipe.steps.split('\n').map((step, index) => (
            <li key={index} className="text-gray-600">{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
