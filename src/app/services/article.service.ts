import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ArticleMeta, Article } from '../models/article';

@Injectable({ providedIn: 'root' })
export class ArticleService {
  constructor(private readonly http: HttpClient) {}

  getMetas(): Observable<ArticleMeta[]> {
    return this.http.get<ArticleMeta[]>('assets/articles/_source.json');
  }

  get(id: string): Observable<Article> {
    return this.http
      .get(`assets/articles/${id}.md`, { responseType: 'text' })
      .pipe(
        map((markdown) => {
          console.log(markdown);
          return {
            title: 'a',
            date: new Date(),
            article: 'Nasa: <a href="http://nasa.gov">Nasa</a>',
          };
        })
      );
  }
}
