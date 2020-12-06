import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WordService } from '../../services/word.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  word: string;
  charIndex = 0;
  typedWord = ``;
  @ViewChild('inputContainer') inputContainer: ElementRef;

  constructor(
    public wordService: WordService
  ) { }

  ngOnInit(): void {
    this.word = this.wordService.words.join(' ')



  }


  onKeydown(e) {

    console.log(this.inputContainer.nativeElement.querySelector('.start-indicator').classList.add('stop'))

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
      this.typedWord += e.key
      console.log(document.getElementById('bad').scrollWidth)
      console.log(document.getElementById('bad').scrollLeft)
      document.getElementById('bad').scrollLeft = document.getElementById('bad').scrollWidth

    }

  }

}
