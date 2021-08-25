import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { CoobrasturService } from 'src/app/services/coobrastur.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

  constructor(private alertService: AlertService, private router: Router,
    private cService: CoobrasturService) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.alertService.onConfirmDialog('Sair', "Deseja realmente sair do Sistema?").then(() => {
      this.cService.onLogout().then(() => {
        this.router.navigate(['/login'])
      })
    })
  }

}
