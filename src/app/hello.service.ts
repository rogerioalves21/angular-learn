import { OnInit, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class HelloService implements OnInit {

  constructor(private http: HttpClient) { }
  ngOnInit() { }

  listar() {
    return this.http.get<any>('/api');
  }
}
