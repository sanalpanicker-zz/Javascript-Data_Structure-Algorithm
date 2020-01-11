class Set {


  constructor() {
    this._values = {};
  }

  add(input) {
    if (!this._values.hasOwnProperty(input)) {
      this._values[input] = input;
    }
  }

  remove(input) {
    if (this._values.hasOwnProperty(input)) {
      delete this._values[input];
    }
  }

  size() {
    return Object.keys(this._values).length;
  }

  contains(value) {
    return typeof this._values[value] != "undefined";
  }
}

const name = new Set();
name.add("1");
name.add("2");
name.add("3");
name.add("3");
console.log(name.size());
console.log(name.contains('3'));
console.log(name.remove('3'));
console.log(name.contains('3'));
console.log(name.size());
console.table(name);

const hey = new Set();
console.table(hey);
