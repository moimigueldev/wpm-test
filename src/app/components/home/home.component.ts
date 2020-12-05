import { Component, OnInit } from '@angular/core';
import { WordService } from '../../services/word.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  word: string;
  charIndex = 0;


  constructor(
    public wordService: WordService
  ) { }

  ngOnInit(): void {
    this.word = this.wordService.words.join(' ')



  }


  onKeydown(e) {



    if (e.key === this.word[0]) {
      this.word = this.word.substring(1)


      if (this.word[0] === ' ') {
        document.getElementById('word').style.marginLeft = '10px'
        console.log('yes')
      } else {
        document.getElementById('word').style.marginLeft = '0px'

      }

    } else {
      console.log('no')
    }

  }

}
