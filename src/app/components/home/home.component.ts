import { Component, OnInit, ViewChild } from '@angular/core';
import { tap } from 'rxjs';
import { ArticleMetasDirective } from '../../directives/article-metas.directive';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild(ArticleMetasDirective, { static: true })
  appArticleMetas!: ArticleMetasDirective;

  constructor(private readonly articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService
      .getMetas()
      .pipe(tap((metas) => this.appArticleMetas.addArticles(metas)))
      .subscribe();
  }
}
