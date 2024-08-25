// RecipeList component
  import {useRecipeStore} from './recipeStore';
  import { Link } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';



  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);

    return (
      <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipe/${recipe.id}`}>View Details</Link>
          <Link to={`/edit/${recipe.id}`} style={{ marginLeft: '10px' }}>Edit</Link>
          <DeleteRecipeButton id={recipe.id} />
        </div>
      ))}
    </div>
  );
      <div>
        {recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    
  };

  // AddRecipeForm component
  import { useState } from 'react';
  import { useRecipeStore } from './recipeStore';

  const AddRecipeForm = () => {
    const addRecipe = useRecipeStore(state => state.addRecipe);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      addRecipe({ id: Date.now(), title, description });
      setTitle('');
      setDescription('');
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <button type="submit">Add Recipe</button>
      </form>
    );
  };

  import { useRecipeStore } from '../recipeStore';
import { Link } from 'react-router-dom';
import DeleteRecipeButton from './DeleteRecipeButton';

  return (
    <div>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
            <Link to={`/edit/${recipe.id}`} style={{ marginLeft: '10px' }}>Edit</Link>
            <DeleteRecipeButton id={recipe.id} />
          </div>
        ))
      )}
    </div>
  );
;


import { useRecipeStore } from '../recipeStore';
import { Link } from 'react-router-dom';
import DeleteRecipeButton from './DeleteRecipeButton';


export default RecipeList;
