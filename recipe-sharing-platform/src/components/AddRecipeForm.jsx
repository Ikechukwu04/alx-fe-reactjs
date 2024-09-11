import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!title) newErrors.title = 'Title is required';
    if (!ingredients) newErrors.ingredients = 'Ingredients are required';
    if (!steps) newErrors.steps = 'Preparation steps are required';
    if (ingredients.split('\n').length < 2) newErrors.ingredients = 'At least two ingredients required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const newRecipe = { title, ingredients, steps };
      console.log('New Recipe Submitted:', newRecipe);

      setTitle('');
      setIngredients('');
      setSteps('');
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Add a New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="title">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="ingredients">
            Ingredients (separate by new lines)
          </label>
          <textarea
            id="ingredients"
            className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.ingredients ? 'border-red-500' : 'border-gray-300'}`}
            rows="5"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="steps">
            Preparation Steps (separate by new lines)
          </label>
          <textarea
            id="steps"
            className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.steps ? 'border-red-500' : 'border-gray-300'}`}
            rows="5"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
