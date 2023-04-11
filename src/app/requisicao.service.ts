import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class RequisicaoService {

  constructor(private httpclient: HttpClient) { }

  cert = "certificado";
  enviarRequisicao() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: new HttpParams(),
      tls: {
        key: '/caminho/para/a/chave/privada/do/cliente',
        cert: '/caminho/para/o/certificado/do/cliente',
        ca: '/caminho/para/o/certificado/da/autoridade/certificadora',
        passphrase: 'senha-para-desbloquear-a-chave-privada-do-cliente'
      }
    };
    return this.httpclient.post(`${API_PATH}`, null, httpOptions).toPromise();
  }
}
