import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { tap } from 'rxjs';
import { ArticleMetasDirective } from './directives/article-metas.directive';
import { ArticleService } from './services/article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private static readonly DARK_THEME_CLASS = 'dark-theme';

  @ViewChild(ArticleMetasDirective, { static: true })
  appArticleMetas!: ArticleMetasDirective;

  title = 'outdoor-mudlee-hu';
  theme: 'dark' | 'light';

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly articleService: ArticleService
  ) {
    this.theme = this.isDarkTheme() ? 'dark' : 'light';
  }

  ngOnInit(): void {
    if (new Date().getHours() >= 19) {
      this.setDark();
    }

    this.articleService
      .getMetas()
      .pipe(tap((metas) => this.appArticleMetas.addArticles(metas)))
      .subscribe();

    this.articleService.get('test').subscribe((a) => console.log(a));
  }

  toggleTheme(): void {
    if (this.isDarkTheme()) {
      this.setLight();
    } else {
      this.setDark();
    }
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
