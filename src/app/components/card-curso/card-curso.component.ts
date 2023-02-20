import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card-curso',
  templateUrl: './card-curso.component.html',
  styleUrls: ['./card-curso.component.scss'],
})
export class CardCursoComponent implements OnInit {

  @Input() curso!: Curso;
  
  constructor() { }

  ngOnInit() {}

}
