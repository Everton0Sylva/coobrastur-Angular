import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoobrasturService {

  public baseURL = 'https://reqres.in/api/'

  private token;

  constructor(private http: HttpClient) { }


  public onLogin(user, passwd): Promise<any> {
    const uri = this.baseURL + 'login';
    const body = {
      email: user,
      password: passwd
    }
    return new Promise((onResolve, onReject) => {
      this.http.post(uri, body)
        .subscribe((data: any) => {
          if (data.token) {
            this.token = data.token;
            onResolve(data);
          }
        },
          error => {
            onReject(error);
          }
        );
    });
  }

  onLogout() {
    return new Promise((onResolve, onReject) => {
      this.token = null;
      onResolve(true);
    });
  }

  onGetUsers() {
    return new Promise((onResolve, onReject) => {
      let waiting = false
      let page = 1
      let nData = [];
      let interval = setInterval(() => {
        if (!waiting) {
          waiting = true;
          this.GET('users?page=' + page).then((data: any) => {
            waiting = false;
            if (Array.isArray(data.data)) {
              nData.push(...data.data);
              if (page == data.total_pages) {
                clearInterval(interval);
                onResolve(nData);
              } else {
                page++;
              }
            }
          })
        }
      }, 50);
    })
  }

  GET(param) {
    return new Promise((onResolve, onReject) => {
      const url = this.baseURL + param;
      this.http.get(url, {
      }).subscribe((data: any) => {
        onResolve(data);
      },
        error => {
          onReject(error);
        }
      );
    })
  }

  onSaveClient(body) {
    return new Promise((onResolve, onReject) => {
      this.POST('users', body).then((data: any) => {
        if (data.id) onResolve(data);
      }).catch(error => {
        onReject(error);
      })
    })
  }


  POST(param, body) {
    return new Promise((onResolve, onReject) => {
      const url = this.baseURL + param;
      this.http.post(url, body).subscribe((data: any) => {
        onResolve(data);
      },
        error => {
          onReject(error);
        }
      );
    })
  }


  ///api/users/
}
