import { Component, OnInit } from '@angular/core';
import { WordService } from '../../services/word.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  words = 'sdfasdfasdf'

  constructor(
    private wordService: WordService
  ) { }

  ngOnInit(): void {

  }

}
