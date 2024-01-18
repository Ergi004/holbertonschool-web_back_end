/*eslint-disable*/

export default class Building {
  constructor(sqft) {
    if (!this.evacuationWarningMessag) {
      throw new TypeError('Class extending Building must override evacuationWarningMessage');
    }
    if (typeof sqft !== 'number') {
      throw new TypeError("SFQT must be a number")
    }
    this._sqft = sqft;
  }

  get sqft(){
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError("SFQT must be a number")
    }
    this._sqft = sqft
  }
}