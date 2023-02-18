import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  myForm!: FormGroup;
  email!: FormControl;
  password!: FormControl;
  constructor(
    private alertController: AlertController,
    private router: Router,
    private htppService: HttpService,
    private storage: StorageService,
    private menuCtrl: MenuController
  ) {}

  ngOnInit() {

    this.menuCtrl.enable(false);
    this.validar();
    this.myForm = new FormGroup({
      email: this.email,
      password: this.password,
    });
  }

  validar() {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]);
  }

  login() {
    var texto = '';
    if (this.myForm.invalid) {
      if (this.email.invalid) {
        texto = 'El correo es invalido';
        this.presentAlert(texto);
      } else {
        texto = 'La contraseña es invalida';
        this.presentAlert(texto);
      }
    }

    if (this.myForm.valid) {
      this.htppService
        .loginUsuario(this.email.value, this.password.value)
        .subscribe((data: TokenUsuario) => {
            this.myForm.reset();
            if(data.token == null){
              texto = 'El correo o la contraseña son incorrectos';
              this.presentAlert(texto)
            }else{
              this.storage.setToken(data.token);
              this.router.navigate(['/inicio']);
            }
        });
    }
  }

  async presentAlert(texto: string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: texto,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
