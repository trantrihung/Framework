import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss'],
})
export class StructuralDirectivesComponent implements OnInit {
  isActive: boolean = false;
  isLogin: boolean = false;
  color: string = 'primary';
  movieList: any[] = [
    { name: 'Avangers', price: 50000 },
    { name: 'Captain American', price: 60000 },
    { name: 'Batman', price: 70000 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
