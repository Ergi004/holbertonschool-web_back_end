/*eslint-disable*/

export default class Building {
  constructor(sqft) {
    if(this.constructor !== Building) {
      if (this.evacuationWarningMessage === undefined) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      };
    }
    if (typeof sqft !== 'number') {
      throw TypeError("Sqrt must be a number");
    }
    this._sqft = sqft;
  }
  
  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    this._sqft = sqft;
 }
}
