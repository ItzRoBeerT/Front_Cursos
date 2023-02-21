import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {

  constructor(private httpService: HttpService) { }

  cursos!: Curso[];
  ngOnInit() {
  }

  ionViewDidEnter(){
    this.httpService.getCursoDemas().subscribe((data: Curso[]) => {
  
      this.cursos = data;
      console.log(this.cursos[0]._id);
    }); 
  }

}
