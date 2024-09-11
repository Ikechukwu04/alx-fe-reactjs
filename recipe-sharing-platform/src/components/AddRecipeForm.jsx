import React, { useState } from 'react';

const AddRecipeForm = () => {
  // State to track form inputs
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  
  // State to track validation errors
  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    let tempErrors = {};
    if (!title) tempErrors.title = 'Recipe title is required';
    if (!ingredients || ingredients.split('\n').length < 2) tempErrors.ingredients = 'At least two ingredients are required';
    if (!steps) tempErrors.steps = 'Preparation steps are required';
    return tempErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // If no errors, submit the form (in this case, log the data)
      console.log('Recipe Submitted:', { title, ingredients, steps });

      // Clear the form
      setTitle('');
      setIngredients('');
      setSteps('');
      setErrors({});
    } else {
      // Set errors to display them on the form
      setErrors(validationErrors);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg md:max-w-2xl"> {/* md:max-w-2xl for larger form on medium screens */}
      <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Add a New Recipe</h2> {/* md:text-left for alignment on medium screens */}
      <form onSubmit={handleSubmit}>
        {/* Recipe Title Input */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Recipe Title</label>
          <input
            type="text"
            id="title"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients Input */}
        <div className="mb-4 md:mb-6">
          <label htmlFor="ingredients" className="block text-gray-700 font-medium mb-2">Ingredients (separate each ingredient by a new line)</label>
          <textarea
            id="ingredients"
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        {/* Preparation Steps Input */}
        <div className="mb-4 md:mb-6">
          <label htmlFor="steps" className="block text-gray-700 font-medium mb-2">Preparation Steps</label>
          <textarea
            id="steps"
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200 md:w-1/3 md:mx-auto"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
