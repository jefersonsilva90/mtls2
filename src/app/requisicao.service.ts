import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpParams, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';


const httpOptions = {
    Headers: {
      'Content-Type': 'application/json',
    },
    tls: {
      key: '',
      cert: ''
    }
};

@Injectable({
  providedIn: 'root'
})

export class RequisicaoService {

  constructor(private httpclient: HttpClient) { }

  cert = "certificado";
  enviarRequisicao(){
    return this.httpclient.post(`${API_PATH}`, httpOptions).toPromise();
  }
}
