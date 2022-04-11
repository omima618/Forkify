// https://forkify-api.herokuapp.com/v2
import "core-js/stable";
import "regenerator-runtime/runtime";
import * as model from "./model.js";
import recipeView from "./views/reciprView.js";
import searchView from "./views/searchView.js";
import resultView from "./views/resultView.js";

if (module.hot) {
    module.hot.accept();
}

const controlRecipes = async function () {
    try {
        const id = window.location.hash.slice(1);
        if (!id) return;
        recipeView.renderSpinner();
        await model.loadRecipe(id);
        recipeView.render(model.state.recipe);
    } catch (err) {
        recipeView.renderError();
    }
};

const controlSearchResult = async function () {
    try {
        resultView.renderSpinner();
        const query = searchView.getQuery();
        if (!query) return;
        await model.loadSearchResult(query);
        resultView.render(model.state.search.results);
    } catch (err) {
        // console.log(err);
    }
};

const init = function () {
    recipeView.addHandlerRender(controlRecipes);
    searchView.addHandlerSearch(controlSearchResult);
};
init();
