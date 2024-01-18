/*eslint-disable*/

export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('SQFT must be a number');
    }
    this._sqft = sqft;
  }

  get sqft(){
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('SQFT must be a number');
    }
    this._sqft = sqft;
  }

  evacuationWarningMessag() {
    if (!evacuationWarningMessage() instanceof Building) {
      throw new TypeError('Class extending Building must override evacuationWarningMessage');
    }
  }
}