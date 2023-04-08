export class Replace {
  #value = "";

  constructor(value) {
    this.#value = value;
  }

  static remove(value) {
    return new Replace(value);
  }

  commas() {
    this.#value = this.#value.replace(/\"/g, "");
    return this;
  }

  space() {
    this.#value = this.#value.replace(/\ /g, "");
    return this;
  }

  exec() {
    return this.#value;
  }
}
