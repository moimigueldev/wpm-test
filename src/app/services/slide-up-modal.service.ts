import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlideUpModalService {

  constructor() { }

  modal: ElementRef;
  modalBody: ElementRef;

  initializeModal(modal: ElementRef, modalBody: ElementRef): void {
    this.modal = modal;
    this.modalBody = modalBody;
  }

  showModal(): void {
    this.modal.nativeElement.style.display = 'flex';
    setTimeout(() => {
      this.modalBody.nativeElement.classList.add('show')
    }, 100);
  }

  closeModal(): void {
    this.modalBody.nativeElement.classList.remove('show')
    setTimeout(() => {
      this.modal.nativeElement.style.display = 'none';
    }, 300);
  }

}
