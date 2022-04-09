// https://forkify-api.herokuapp.com/v2
import "core-js/stable";
import "regenerator-runtime/runtime";
import * as model from "./model.js";
import recipeView from "./views/reciprView.js";

const controlRecipes = async function () {
    try {
        const id = window.location.hash.slice(1);
        if (!id) return;
        // render spinner
        recipeView.renderSpinner();
        // load recipe
        await model.loadRecipe(id);
        // render recipe
        recipeView.render(model.state.recipe);
    } catch (err) {
        recipeView.renderError();
    }
};
const controlSearchResult = async function () {
    await model.loadSearchResult("steak");
};
const init = function () {
    recipeView.addHandlerRender(controlRecipes);
};
init();
controlSearchResult();
