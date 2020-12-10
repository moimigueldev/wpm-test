import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SlideUpModalService } from 'src/app/services/slide-up-modal.service';
import { WordService } from '../../services/word.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  word: string;
  typedWord = ``;
  timer;

  timeRemaining = 60;
  wordsTyped = 0;
  charsPerMin = 0;
  accuracy = 0;

  results = {
    wpm: 0,
    charsPerMin: 0,
    accuracy: 0,
    level: ''
  }

  timerStarted = false;





  @ViewChild('inputContainer') inputContainer: ElementRef;
  @ViewChild('wordTypedParagraph') wordTypedParagraph: ElementRef;
  @ViewChild('wordContainer') wordContainer: ElementRef;
  @ViewChild('wordsTypedContainer') wordsTypedContainer: ElementRef;
  @ViewChild('startIndicator') startIndicator: ElementRef;
  @ViewChild('modalBody') modalBody: ElementRef;
  @ViewChild('modal') modal: ElementRef;

  constructor(
    public wordService: WordService,
    public slideupService: SlideUpModalService
  ) { }

  ngAfterViewInit(): void {
    this.inputContainer.nativeElement.focus();

    setTimeout(() => {
      this.inputContainer.nativeElement.classList.add('show')
      this.startIndicator.nativeElement.classList.remove('stop');

    }, 100)


  }

  ngOnInit(): void {
    this.inializeWords();
  }

  inializeWords(): void {
    this.wordService.generateWords();
    this.word = this.wordService.words.join(' ');

  }

  reset(): void {
    this.timeRemaining = 60;
    this.timerStarted = false;
    this.startIndicator.nativeElement.classList.add('stop');
    this.charsPerMin = 0;
    this.wordsTyped = 0;
    this.typedWord = '';

    this.inializeWords();
    this.inputContainer.nativeElement.focus();
  }

  calculate(): void {
    this.results.wpm = this.wordsTyped;
    this.results.charsPerMin = this.charsPerMin;
    this.results.accuracy = this.accuracy;
    this.results.level = this.calculateLevel();
  }

  calculateLevel(): string {
    if (this.wordsTyped >= 40) {
      return 'fast'
    } else if (this.wordsTyped >= 80) {
      return 'pro'
    } else {
      return 'slow'
    }
  }

  startTimer(): void {
    this.startIndicator.nativeElement.classList.add('stop')
    this.timer = setInterval(() => {
      this.timeRemaining--;

      if (this.timeRemaining === 0) {
        this.calculate();
        this.slideupService.showModal();
        setTimeout(() => {
          this.reset();
        }, 1000);
        this.stopTimer();
      }
    }, 1000)



  }

  stopTimer(): void {
    clearInterval(this.timer)
  }


  onKeydown(e): void {
    if (!this.timerStarted) {
      this.timerStarted = true;
      this.startTimer();

    }

    if (e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode === 32) {
      const key = e.key;
      if (key === this.word[0]) {
        this.word = this.word.substring(1);
        this.charsPerMin++;
        if (this.word[0] === ' ') {
          this.wordContainer.nativeElement.style.marginLeft = '10px';
          this.wordsTyped++;

        } else {
          this.wordContainer.nativeElement.style.marginLeft = '0px';
        }
      } else {
        this.typedWord += e.key;
        this.wordsTypedContainer.nativeElement.scrollLeft = this.wordsTypedContainer.nativeElement.scrollWidth
      }
      const totalCharsTyped = this.charsPerMin + this.typedWord.length
      this.accuracy = Math.floor((this.charsPerMin / totalCharsTyped) * 100);
    } else {
    }

  }


}
