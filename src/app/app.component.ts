import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private static readonly DARK_THEME_CLASS = 'dark-theme';
  theme: 'dark' | 'light';

  constructor(@Inject(DOCUMENT) private readonly document: Document, private readonly router: Router) {
    this.theme = this.isDarkTheme() ? 'dark' : 'light';
  }

  ngOnInit(): void {
    if (new Date().getHours() >= 19) {
      this.setDark();
    }
  }

  toggleTheme(): void {
    if (this.isDarkTheme()) {
      this.setLight();
    } else {
      this.setDark();
    }
  }

  onHeaderClick(): void {
    this.router.navigateByUrl('/');
  }

  private setDark(): void {
    this.document.documentElement.classList.add(AppComponent.DARK_THEME_CLASS);
    this.theme = 'dark';
  }

  private setLight(): void {
    this.document.documentElement.classList.remove(
      AppComponent.DARK_THEME_CLASS
    );
    this.theme = 'light';
  }

  private isDarkTheme(): boolean {
    return this.document.documentElement.classList.contains(
      AppComponent.DARK_THEME_CLASS
    );
  }
}
