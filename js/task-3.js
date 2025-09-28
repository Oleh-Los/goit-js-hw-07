class StringBuilder {
  #str;
  constructor(str) {
    this.#str = str;
  }
  getValue() {
    return this.#str;
  }
  padEnd(str) {
    this.#str += str;
    return this.#str;
  }

  padStart(str) {
    this.#str = str + this.#str;
    return this.#str;
  }
  padBoth(str) {
    this.#str = str + this.#str + str;
    return this.#str;
  }
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
