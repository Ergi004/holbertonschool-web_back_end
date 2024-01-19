class System {
  constructor(name, email, privileges) {
    console.log("Constructor----")
    this.name = name;
    this.email = email;
    this.privileges = privileges;    
  }

  // getSystem() {
  //   console.log("getSystem----")
  //   return this._name_+ '' + this._email + '' + this._privileges
  // }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get email(){
    return this._email;
  }

  set email(newEmail){
    this._email = newEmail;
  }

  get privileges() {
    return this._privileges;
  }

  set privileges(newPrivileges) {
    this._privileges = newPrivileges;
  }
}

class User extends System {
  constructor(name, email, privileges) {
    super(name, email, privileges)
  }

  getUser() {
    return this.getSystem()
  }
}

const system = new System("Ergi", "ergilama98@gmail.com", "admin")
console.log("User:", system.name);
console.log("Email:", system.email);
console.log("Privileges:", system.privileges);
