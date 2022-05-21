import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {
  private modals: any[] = [];
  add(modal: any) {
    this.modals.push(modal);
  }

  remove(id: string | undefined) {
    this.modals = this.modals.filter(x => x.id !== id);
  }
  open(id: string) {
    const modal: any = this.modals.filter(x => x.id === id)[0];
    modal.open();
  }
  close(id: string) {
    const modal: any = this.modals.filter(x => x.id === id)[0];
    modal.close();
  }
  onError(id: string, errorMessage: string) {
    const modal: any = this.modals.filter(x => x.id === id)[0];
    modal.onError(errorMessage);
  }
}
