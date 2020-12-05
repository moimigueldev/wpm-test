import { Injectable } from '@angular/core';
import * as randomWords from 'random-words'

@Injectable({
  providedIn: 'root'
})
export class WordService {
  words: string[];
  constructor() {
    this.words = randomWords(500);
  }
}
