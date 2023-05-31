export class ClipBoard {
  static copy(text = '') {
    navigator.clipboard.writeText(text);
  }
}
