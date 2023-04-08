import { Replace } from '../utils/replace.util.js';

const $textarea1 = document.querySelector('#textarea1');
const $textarea2 = document.querySelector('#textarea2');

export function transfrom() {
  const value = $textarea1.value;
  const response = Replace.remove(value).space().commas().exec();
  $textarea2.value = response;
}
