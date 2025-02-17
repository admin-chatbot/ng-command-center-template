import { Component, TemplateRef, ViewChild } from '@angular/core';
 import * as data from '../../../../shared/data/data/contacts/contacts';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})


export class PrintComponent {

  public closeResult: string;
  public modalOpen: boolean = false;
  public printData: data.lastDataList;

  @ViewChild("printModal", { static: false }) printModal: TemplateRef<data.lastDataList>;

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal) { }

  ngOnInit() { }

  async openModal(data: data.lastDataList) {
    this.printData = data;
    this.modalOpen = true;
    this.modalService.open(this.printModal, {
      ariaLabelledBy: 'Confirmation-Modal',
      centered: true,
      windowClass: 'modal-md modal-dialog-centered'
    }).result.then((result) => {
      `Result ${result}`
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: ModalDismissReasons): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
