import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-elenco',
  templateUrl: './elenco.component.html',
  styleUrls: ['./elenco.component.css']
})
export class ElencoComponent implements OnInit {

  users!: Observable<any[]>;

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.users = 
      this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }

}
