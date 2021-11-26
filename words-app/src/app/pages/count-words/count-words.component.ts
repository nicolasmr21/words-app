import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-words',
  templateUrl: './count-words.component.html',
  styleUrls: ['./count-words.component.less']
})
export class CountWordsComponent {

  userText: string = '';
  wordsMap: Map<string, number> = new Map<string, number>();

  constructor(
  ) { }

  onProcess(): void {
    const wordArray = this.userText.trim().split(' ');
    wordArray.forEach((word) => {
      const withoutFormat = this.removeFormat(word);
      const item = this.wordsMap.get(withoutFormat);
      this.wordsMap.set(withoutFormat, item ? item + 1 : 1);
    });
  }

  removeFormat(word: string): string {
    const letters = word.toLocaleLowerCase().split('');
    return letters.reduce((prev, curr) => prev += curr === '.' || curr === ',' ? '' : curr, '');
  }

  displayKey(key: string): string {
    return `${key[0].toUpperCase()}${key.slice(1)}`;
  }
}
