import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
logo: string="Netflix" ;
navbarLinks: string[]=['Home','Movies','Tv shows','about'];
}
