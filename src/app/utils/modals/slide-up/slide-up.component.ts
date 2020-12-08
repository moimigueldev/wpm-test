import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SlideUpModalService } from '../../../services/slide-up-modal.service'

@Component({
  selector: 'app-slide-up',
  templateUrl: './slide-up.component.html',
  styleUrls: ['./slide-up.component.scss'],
  providers: []
})
export class SlideUpComponent implements OnInit, AfterViewInit {

  @ViewChild('modal') modal: ElementRef;
  @ViewChild('modalBody') modalBody: ElementRef;



  constructor(
    public slideupService: SlideUpModalService
  ) { }

  ngAfterViewInit(): void {
    this.slideupService.initializeModal(this.modal, this.modalBody)
  }

  ngOnInit(): void {
  }

}
