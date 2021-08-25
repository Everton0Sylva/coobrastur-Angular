import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { User } from 'src/app/models/user';
import { AlertService } from 'src/app/services/alert.service';
import { CoobrasturService } from 'src/app/services/coobrastur.service';

@Component({
  selector: 'app-panel-client',
  templateUrl: './panel-client.component.html',
  styleUrls: ['./panel-client.component.scss']
})
export class PanelClientComponent implements OnInit {

  public loadingIndicator = false;

  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild('editUser', { static: false }) editModal: any

  private modalOption: NgbModalOptions = {
    backdrop: 'static',
    keyboard: false,
    size: 'lg'
  }
  public defaultImage = '/assets/default-image.png'

  public dataRowsfilter = [];
  public dataRows = [];

  public selectedUser: User

  constructor(private coobrasturService: CoobrasturService, private modalService: NgbModal, private alertService: AlertService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.coobrasturService.onGetUsers().then((data: any) => {
      let dUsers = data.map((eData) => {
        let nUser = new User();
        nUser.fromObj(eData);
        return nUser;
      })
      this.dataRows = [...dUsers];
      this.onSetDatatable();
    })
  }

  onSetDatatable() {
    this.loadingIndicator = false;
    this.dataRowsfilter = JSON.parse(JSON.stringify(this.dataRows));
    this.loadingIndicator = true;
  }

  onEditClient(user) {
    if (user != null && user != undefined) {
      this.selectedUser = new User;
      this.selectedUser.fromObj(user);
      this.modalService.open(this.editModal, this.modalOption);
    }
  }


  onFileSelect(event): void {
    let value = event.target;
    var file: File = value.files[0];
    var myReader: FileReader = new FileReader();
    myReader.onloadend = (e) => {
      let filecontent: any = myReader.result;
      this.selectedUser.avatar = filecontent;
    }
    myReader.readAsDataURL(file);
  }

  onCancel() {
    this.alertService.onConfirmDialogStyle('Cancelar', "Cancelar alteração?", 'secondary').then((result) => {
      if (result.value) {
        this.selectedUser = null;
        this.modalService.dismissAll();
      }
    })
  }

  onSave() {
    this.alertService.onConfirmDialogStyle('Salvar', "Deseja salvar as alterações?", 'success').then(async (result) => {
      if (result.value) {
        let prom = this.dataRows.map(async (elem) => {
          if (elem.id == this.selectedUser.id) return this.selectedUser
          else return elem;
        })
        this.dataRows = await Promise.all(prom);
        this.selectedUser = null;
        this.modalService.dismissAll();
        this.onSetDatatable();
      }
    })
  }

}
