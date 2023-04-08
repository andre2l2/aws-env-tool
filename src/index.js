const textarea1 = document.querySelector("#textarea1");
const textarea2 = document.querySelector("#textarea2");
const transfromButton = document.querySelector("#button-transfrom");

class Replace {
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

transfromButton.addEventListener("click", () => {
  const value = textarea1.value;
  const response = Replace.remove(value).space().commas().exec();
  textarea2.value = response;
});
