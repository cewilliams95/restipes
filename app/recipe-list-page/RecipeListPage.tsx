import React from "react";
import "./recipe-list-page.css";
import { Link } from "react-router";
const recipes = [
  { id: 1, name: "Name is here", description: "Description goes here" },
  { id: 2, name: "Name is here", description: "Description goes here" },
  { id: 3, name: "Name is here", description: "Description goes here" },
];
export default function home() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">Recipe List</div>
        </header>
        <div className="flex items-center justify-center pt-16 pb-4">
          <div className="w-[500px] max-w-[100vw] p-4">
            <ul className="recipe-list flex flex-col">
              {recipes.map(({ id, name, description }) => (
                <li className="recipe flex flex-col" key={id}>
                  <h2>{name}</h2>
                  <span>{description}</span>
                </li>
              ))}
            </ul>
            <Link to="/create">
              <button
                style={{ cursor: "pointer" }}
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                + Add Recipe
              </button>
            </Link>
          </div>
        </div>
      </div>

      <footer></footer>
    </main>
  );
}
