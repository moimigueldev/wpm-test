import { Injectable } from '@angular/core';
import * as randomWords from 'random-words'

@Injectable({
  providedIn: 'root'
})
export class WordService {
  words: string[];
  constructor() {
    this.generateWords();
  }

  generateWords(): void {
    this.words = randomWords(500);

  }

}
