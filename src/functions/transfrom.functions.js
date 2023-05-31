import { ClipBoard } from '../utils/clip-board.js';
import { Replace } from '../utils/replace.util.js';

const $textarea1 = document.querySelector('#textarea1');
const $textarea2 = document.querySelector('#textarea2');

export function transfrom() {
  const value = $textarea1.value;
  const response = Replace.remove(value).space().commas().emptyLine().exec();
  $textarea2.value = response;
  ClipBoard.copy(response);
  alert('Copied to clip-bord');
}
