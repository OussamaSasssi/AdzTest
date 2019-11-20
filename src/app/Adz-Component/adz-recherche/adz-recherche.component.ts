import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'adz-recherche',
  templateUrl: './adz-recherche.component.html',
  styleUrls: ['./adz-recherche.component.css']
})
export class AdzRechercheComponent implements OnInit {

  search:string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  lire(){
    this.router.navigate(['recherche/',this.search]);
  }

}
