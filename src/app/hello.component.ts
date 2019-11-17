import { Component, Input, Injectable, OnInit } from '@angular/core';
import { HelloService } from './hello.service';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; }`],
  providers: [ HelloService ]
})
export class HelloComponent implements OnInit {
  @Input() name: string;

  conteudo = {};

  constructor(private helloService: HelloService) { }

  ngOnInit() {
    this.helloService.getDados().subscribe(dados => {
      console.log(dados);
      this.conteudo = dados;
    });
  }
}
