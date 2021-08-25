import { CommonModule } from "@angular/common";
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

export class HttpsRequestInterceptor implements HttpInterceptor {

    constructor() {
    }

    cont: any = 0;
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>> {
        const self = this;
        const dupReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('_access_token'))), });
        dupReq.headers.set('Access-Control-Allow-Origin', '*');
        dupReq.headers.set('Access-Control-Allow-Method', 'GET,POST,OPTIONS,DELETE,PUT');

        return next
            .handle(dupReq)
            .pipe()

    }
}

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpsRequestInterceptor,
            multi: true,
        },
    ]
})
export class InterceptorModule {
}
