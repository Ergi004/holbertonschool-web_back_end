/*eslint-disable*/

export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      throw new TypeError('Cannot instantiate from abstract class.');
    }
    if (!this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    if (typeof sqft !== 'number') {
      throw new TypeError("SFQT must be a number")
    }
    this._sqft = sqft;
  }

  evacuationWarningMessage() {
    throw new TypeError('Class extending Building must override evacuationWarningMessage');
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
