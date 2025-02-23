import React, { type SyntheticEvent } from "react";
import { useState } from "react";

export default function CreateRecipePage() {
  interface Ingredient {
    name: string;
    amount: string;
    unit: string;
  }
  let [ingredients, setIngredients] = useState<Ingredient[]>([]);
  let [newIngredient, setNewIngredient] = useState<Ingredient>({
    name: "",
    amount: "",
    unit: "",
  });

  interface Instruction {
    name: string;
    detail: string;
  }
  let [instructions, setInstructions] = useState<Instruction[]>([]);
  let [newInstruction, setNewInstruction] = useState<Instruction>({
    name: "",
    detail: "",
  });

  function handleAddIngredient(e: SyntheticEvent) {
    e.preventDefault();
    if (!newIngredient.name || !newIngredient.amount || !newIngredient.unit)
      return;
    setIngredients((ingredients) => [...ingredients, newIngredient]);
    setNewIngredient({ name: "", amount: "", unit: "" });
  }
  function handleAddInstruction(e: SyntheticEvent) {
    setInstructions((instructions) => [...instructions, newInstruction]);
    setNewInstruction({ name: "", detail: "" });
  }

  function handleSubmit() {
    return;
  }

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">Create a recipe</div>
        </header>

        <div className="flex items-center justify-center pt-16 pb-4">
          <div className="w-[500px] max-w-[100vw] p-4">
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="name"
                placeholder="Name your recipe"
              ></input>

              <label htmlFor="description">Description</label>
              <textarea
                className="bg-gray-50 border border-gray-300 text-gray-900 textarea text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="description"
                placeholder="Describe your recipe"
              ></textarea>

              <label>Add Ingredient:</label>
              <div className="flex flex-row gap-2">
                <input
                  id="ingredient-name"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={newIngredient.name}
                  placeholder="e.g. Flour"
                  onChange={(e) =>
                    setNewIngredient({
                      name: e.target.value,
                      amount: newIngredient.amount,
                      unit: newIngredient.unit,
                    })
                  }
                ></input>
                <input
                  id="ingredient-amount"
                  placeholder="e.g. 2 1/2"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={newIngredient.amount}
                  onChange={(e) =>
                    setNewIngredient({
                      name: newIngredient.name,
                      amount: e.target.value,
                      unit: newIngredient.unit,
                    })
                  }
                ></input>
                <input
                  id="ingredient-unit"
                  placeholder="e.g. Cups"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={newIngredient.unit}
                  onChange={(e) =>
                    setNewIngredient({
                      name: newIngredient.name,
                      amount: newIngredient.amount,
                      unit: e.target.value,
                    })
                  }
                ></input>
                <button
                  id="add-ingredient"
                  type="button"
                  onClick={(e) => handleAddIngredient(e)}
                  className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add
                </button>
              </div>
              {ingredients.length > 0 && (
                <div className="ingredients-list block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ">
                  <label>Ingredient List:</label>
                  <ul className="max-w-md space-y-1 space-x-2 text-gray-500 list-disc list-inside dark:text-gray-400">
                    {ingredients.map(({ name, amount, unit }) => (
                      <li key={name} className="">
                        <span>
                          <strong>{name}</strong>&nbsp;
                        </span>
                        <span>
                          {amount}&nbsp;{unit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <label>Add Instruction:</label>
              <div className="flex flex-row gap-2">
                <input
                  id="instruction-name"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={newInstruction.name}
                  placeholder="e.g. Mix ingredients"
                  onChange={(e) =>
                    setNewInstruction({
                      name: e.target.value,
                      detail: newInstruction.detail,
                    })
                  }
                ></input>
                <input
                  id="instruction-amount"
                  placeholder="e.g. Use a stand mixer or your hands until just incorporated."
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={newInstruction.detail}
                  onChange={(e) =>
                    setNewInstruction({
                      name: newInstruction.name,
                      detail: e.target.value,
                    })
                  }
                ></input>
                <button
                  id="add-instruction"
                  type="button"
                  onClick={(e) => handleAddInstruction(e)}
                  className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add
                </button>
              </div>
              {instructions.length > 0 && (
                <div className="instructions-list block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ">
                  <label>Instructions List:</label>
                  <ol className="max-w-md list-decimal space-y-1 space-x-2 text-gray-500 list-inside dark:text-gray-400">
                    {instructions.map(({ name, detail }) => (
                      <li key={name} className="">
                        <strong>{name}</strong>
                        <br />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
              <input
                type="submit"
                className="cursor-pointer rounded-full text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                value="Create!"
              />
            </form>
          </div>
        </div>
      </div>

      <footer></footer>
    </main>
  );
}
