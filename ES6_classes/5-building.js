/*eslint-disable*/

export default class Building {
    constructor(sqft) {
        if (this._constructor === Building) {
            throw new TypeError('Abstract class "Building" cannot be instantiated directly');
        }
        if (this._evacuationWarningMessage === undefined) {
            throw new TypeError('Class extending Building must override evacuationWarningMessage');
        }
        this._sqft = sqft;
    }

    get sqft() {
        return this._sqft;
    }
}
