import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  cursos!: Curso[];
  constructor( private httpService: HttpService) { 
  }

  ngOnInit() {
   
  }

  ionViewDidEnter(){
   
    this.httpService.getAllCursos().subscribe((data: Curso[]) => {
      console.log(data);
      this.cursos = data;
    }); 
  }

}
