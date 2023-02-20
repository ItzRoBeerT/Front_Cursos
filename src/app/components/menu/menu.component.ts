import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router, private http: HttpService) {}

  ngOnInit() {}

  logout() {
    this.http.logoutUsuario().subscribe();
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
