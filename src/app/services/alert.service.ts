import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Injectable({
    providedIn: 'root'
})

export class AlertService {

    constructor(public translate: TranslateService) { }

    public toast: any = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: false,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    async onConfirmDialogStyle(title, text, style = null) {
        let choice;
        switch (style) {
            case 'info': {
                choice = Swal.mixin({
                    customClass: {
                        confirmButton: 'btn btn-info ms-3',
                        cancelButton: 'btn btn-secondary ms-3',
                    },
                    buttonsStyling: false,
                });
                debugger
            } break;

            case 'success': {
                choice = Swal.mixin({
                    customClass: {
                        confirmButton: 'btn btn-success ms-3',
                        cancelButton: 'btn btn-danger ms-3',
                    },
                    buttonsStyling: false,
                });
            } break;

            case 'danger': {
                choice = Swal.mixin({
                    customClass: {
                        confirmButton: 'btn btn-danger ms-3',
                        cancelButton: 'btn btn-dark ms-3',
                    },
                    buttonsStyling: false,
                });
            } break;


            case 'warning': {
                choice = Swal.mixin({
                    customClass: {
                        confirmButton: 'btn btn-warning ms-3',
                        cancelButton: 'btn btn-secondary ms-3',
                    },
                    buttonsStyling: false,
                });
            } break;


            case 'secondary': {
                choice = Swal.mixin({
                    customClass: {
                        confirmButton: 'btn btn-secondary ms-3',
                        cancelButton: 'btn btn-outline-secondary ms-3',
                    },
                    buttonsStyling: false,
                });
            } break;



            default: {
                choice = Swal.mixin()
            }
                break;
        }

        return choice.fire({
            title: title,
            text: text,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('general.button.yes'),
            cancelButtonText: this.translate.instant('general.button.no')
        })
    }



    onConfirmDialog(title, text) {
        return Swal.fire({
            title: title,
            text: text,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('general.button.yes'),
            cancelButtonText: this.translate.instant('general.button.no')
        })
    }



    onDialogStyle(text, style = 'question') {
        return Swal.fire({
            icon: style,
            title: text,
            showCloseButton: true,
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
        })
    }

}