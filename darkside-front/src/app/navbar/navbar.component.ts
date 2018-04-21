import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  redirectToAbout(): void {
    window.location.href = 'http://localhost:4200/accueil#about';
  }

  redirectToSalles(): void {
    window.location.href = 'http://localhost:4200/accueil#salles';
  }

  redirectToTarif(): void {
    window.location.href = 'http://localhost:4200/accueil#price';
  }

  redirectToContact(): void {
    window.location.href = 'http://localhost:4200/accueil#contact';
  }
}
