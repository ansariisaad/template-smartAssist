import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Fixed typo `styleUrl` to `styleUrls`
})
export class HeaderComponent implements OnInit {

  guestDetails: any;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Safe to access localStorage
      const loginType = localStorage.getItem('login_type');
      console.log(loginType);

      const userDetails1 = localStorage.getItem('userDetails');
      if (userDetails1) {
        this.guestDetails = JSON.parse(userDetails1);
      }
    }
  }

  view(page: any): void {
    this.router.navigate([`../Admin/${page}`]);
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.clear();
    }
    this.guestDetails = null;
    this.router.navigate(['/']);
  }
}
