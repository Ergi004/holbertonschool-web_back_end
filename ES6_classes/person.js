class Person {
  constructor(name, lastname, age) {
    this._name = name;
    this._lastname= lastname;
    this._age = age;    
  }

  get info() {
    return this._name_+ '' + this._lastname + '' + this._age
  }
}

const person = new Person('Arlind', 'Hasimi', 18.5);
console.log(person);