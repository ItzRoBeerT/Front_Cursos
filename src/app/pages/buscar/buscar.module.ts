import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarPageRoutingModule } from './buscar-routing.module';

import { BuscarPage } from './buscar.page';
import { CardCursoComponent } from 'src/app/components/card-curso/card-curso.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarPageRoutingModule
  ],
  declarations: [BuscarPage, CardCursoComponent]
})
export class BuscarPageModule {}
