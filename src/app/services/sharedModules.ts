import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


import { CardCursoComponent } from '../components/card-curso/card-curso.component';

@NgModule({
  declarations: [ CardCursoComponent],
  imports: [CommonModule, IonicModule],
  exports: [CardCursoComponent],
})
export class SharedModule {}
