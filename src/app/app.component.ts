import { Component } from '@angular/core';
import { RequisicaoService } from './requisicao.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mtls2';

  constructor(private requisicaoservice: RequisicaoService){}

  enviarRequisicao(){
    this.requisicaoservice.enviarRequisicao()
      .then(req => console.log(req))
      .catch(erro => console.log(erro));
  }

}
