import icons from "../../img/icons.svg";

export default class View {
    _data;
    render(data) {
        if (!data || (Array.isArray(data) && data.length === 0))
            return this.renderError();
        this._data = data;
        this._clear();
        const markup = this._generateMarkup();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    _clear() {
        this._parentElement.innerHTML = "";
    }
    renderSpinner() {
        const spinnerMarkup = `
    <div class="spinner">
        <svg>
        <use href="${icons}_icon-loader"></use>
        </svg>
    </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", spinnerMarkup);
    }
    renderError(message = this._errorMessage) {
        const markup = `
        <div class="error">
            <div>
            <svg>
                <use href="${icons}#icon-alert-triangle"></use>
            </svg>
            </div>
            <p>${message}</p>
        </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
}
