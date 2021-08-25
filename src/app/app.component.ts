import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import pt from 'src/app/i18n/pt-BR.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  
  constructor(private translateService: TranslateService){}


  ngOnInit() {
    this.translateService.setTranslation('pt-BR', pt);
    this.translateService.setDefaultLang('pt-BR');
    this.translateService.use('pt-BR');

    // this.router.navigateByUrl('/home');
  }
}
