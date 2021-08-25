import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,) { }

  public value: number = 0

  ngOnInit(): void {
    let prgBar = setInterval(() => {
      this.value += 25;
      if (this.value >= 100) {
        clearInterval(prgBar);
        this.router.navigate(['/clients'])
      }
    }, 1000)
  }

}
