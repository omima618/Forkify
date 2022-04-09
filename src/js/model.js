import { async } from "regenerator-runtime";
import { API_URL } from "./config.js";
import { getJSON } from "./helpers.js";
export const state = {
    recipe: {},
    search: {
        query: "",
        results: [],
    },
};
export const loadRecipe = async function (id) {
    try {
        const data = await getJSON(`${API_URL}${id}`);
        const { recipe } = data.data;
        state.recipe = {
            id: recipe.id,
            title: recipe.title,
            image: recipe.image_url,
            publisher: recipe.publisher,
            cookingTime: recipe.cooking_time,
            servings: recipe.servings,
            ingredients: recipe.ingredients,
            source: recipe.source_url,
        };
        console.log(state.recipe);
    } catch (err) {
        throw err;
    }
};
export const loadSearchResult = async function (query) {
    try {
        state.search.query = query;
        const data = await getJSON(`${API_URL}?search=${query}`);
        console.log(data);
        state.search.results = data.data.recipes.map((recipe) => {
            return {
                id: recipe.id,
                title: recipe.title,
                image: recipe.image_url,
                publisher: recipe.publisher,
            };
        });
        console.log(state.search.results);
    } catch (err) {
        throw err;
    }
};
