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

  constructor(private helloService: HelloService) { }

  ngOnInit() {

  }
}
