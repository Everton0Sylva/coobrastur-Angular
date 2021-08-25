import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AlertService } from 'src/app/services/alert.service';
import { CoobrasturService } from 'src/app/services/coobrastur.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public invalidField = '';

  nForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private coobrasturService: CoobrasturService,
    private router: Router,
    private alertService: AlertService) {
    this.nForm = this.formBuilder.group({
      user: [null, [Validators.required, Validators.maxLength(128)]],
      password: [null, [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.nForm.get('user')!.setValue("eve.holt@reqres.in");
    this.nForm.get('password')!.setValue("pistol");
  }

  onFocus(ev) {
    this.nForm.get(ev.currentTarget.id)!.setErrors({ valid: true });
  }


  onSubmit() {
    if (this.nForm.get('user').value == null) {
      this.nForm.get('user')!.setErrors({ valid: false });
    } else if (this.nForm.get('password').value == null) {
      this.nForm.get('password')!.setErrors({ valid: false });
    } else {
      this.coobrasturService.onLogin(this.nForm.get('user').value, this.nForm.get('password').value).then(() => {
        this.alertService.toast.fire({
          icon: 'success',
          title: 'Login realizado com sucesso!'
        })
        this.router.navigate(['/home'])
      }).catch((error) => {
        this.alertService.toast.fire({
          icon: 'error',
          title: 'Login não realizado!'
        })
      })
    }

  }
}
