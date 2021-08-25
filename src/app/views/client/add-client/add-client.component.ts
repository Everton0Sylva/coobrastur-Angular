import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Client } from 'src/app/models/client';
import { AlertService } from 'src/app/services/alert.service';
import { CoobrasturService } from 'src/app/services/coobrastur.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  public client: Client;
  public invalidField = '';

  constructor(
    private alertService: AlertService,
    private router: Router,
    public translate: TranslateService,
    private coobrasturService: CoobrasturService,) { }

  ngOnInit(): void {
    this.client = new Client()
  }


  onCancel() {
    this.alertService.onConfirmDialogStyle(this.translate.instant('general.alerts.cancel'), this.translate.instant('general.alerts.cancelMsg'), 'warning').then((result) => {
      if (result.value) {
        this.router.navigate(['/clients'])
      }
    })
  }
  onSave() {
    this.invalidField = '';
    if (this.client.name == null || this.client.name == undefined || this.client.name == '') {
      this.invalidField = 'name'
    } else if (this.client.job == null || this.client.job == undefined || this.client.job == '') {
      this.invalidField = 'job'
    } else {
      this.alertService.onConfirmDialogStyle(this.translate.instant('general.alerts.cancel'), this.translate.instant('general.alerts.cancelMsg'), 'success').then((result) => {
        if (result.value) {
          this.coobrasturService.onSaveClient(this.client).then((data: any) => {
            let newClient = new Client();
            newClient.fromObj(data);
            this.alertService.onDialogStyle(this.translate.instant('general.alerts.successMsg'), 'success').then(() => {
              console.log(newClient);
              this.router.navigate(['/clients']);
            })
          })
        }
      })
    }

  }
}
