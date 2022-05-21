import {Component, ElementRef, Injectable, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ModalService} from '../../service/modal.service';
import {ModalDirective} from 'ng-uikit-pro-standard';
import {TokenStorageService} from "../../service/token-storage.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id: string | undefined;
  @Input() title: string | undefined;
  private element: any;
  @Input() isLoginFailed: boolean | undefined;
  @Input() errorMessage: string | undefined;
  @ViewChild('basicModal' , {static: false}) basicModal: ModalDirective | undefined;
  constructor(private modalService: ModalService, private el: ElementRef, private tokenStorage: TokenStorageService) {
    this.element = el.nativeElement;
  }
  ngOnInit() {
    if (!this.id) {
      console.error('Modal must have an id');
      return;
    }
    this.modalService.add(this);
  }
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }
  open(): void {
    if (this.basicModal != undefined) {
      this.basicModal.show();
    }
  }
  close(): void {
    if (this.basicModal != undefined) {
      this.basicModal.hide();
    }
  }
  onError(errorMessage: string): void {
    this.isLoginFailed = true;
    this.errorMessage = errorMessage;
  }
}
