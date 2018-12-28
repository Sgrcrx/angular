import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
	title = '阿斯蒂芬三大法';
  constructor() { }

  ngOnInit() {
  }

}
