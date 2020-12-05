import { Component, OnInit } from '@angular/core';
import { WordService } from '../../services/word.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  word: string;

  constructor(
    public wordService: WordService
  ) { }

  ngOnInit(): void {
    this.word = this.wordService.words.join(' ')
    console.log(this.word)

  }

}
