import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
import { CardCursoComponent } from 'src/app/components/card-curso/card-curso.component';
import { SharedModule } from 'src/app/services/sharedModules';

@NgModule({
    declarations: [InicioPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        InicioPageRoutingModule
    ]
})
export class InicioPageModule {}
