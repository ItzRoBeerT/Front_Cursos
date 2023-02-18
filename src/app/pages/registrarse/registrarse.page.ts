import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

  myForm!: FormGroup;
  nombre!: FormControl;
  email!: FormControl;
  password!: FormControl;

  constructor( private alertController: AlertController, private router: Router, private httpService: HttpService) { }

  ngOnInit() {
    this.validar();
    this.myForm = new FormGroup({
      nombre: this.nombre,
      email: this.email,
      password: this.password
    });
  }

  validar(){
    this.nombre = new FormControl('',[Validators.required]);
    this.email = new FormControl('',[Validators.required, Validators.email]);
    this.password = new FormControl('',[Validators.required, Validators.minLength(6)]);
  }

  registrarse(){
    var texto="";
    if(this.myForm.invalid){
      if(this.email.invalid){
        texto = "El correo es invalido";
        this.presentAlert(texto);
      }else if(this.password.invalid){
        texto = "La contraseña es invalida";
        this.presentAlert(texto);
      }else {
        texto = "El nombre es invalido";
        this.presentAlert(texto);
      }
    }else{
      this.httpService.signUpUsuario(this.nombre.value, this.email.value, this.password.value).subscribe((data)=>{
        if(!data){
          texto = "error al crear Usuario";
          this.presentAlert(texto);
        }
      });
      this.router.navigate(['/login']);
    }
  }

  async presentAlert(texto:string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: texto,
      buttons: ['OK'],
    });

    await alert.present();
  }

}
