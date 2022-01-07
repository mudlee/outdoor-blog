import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Converter } from 'showdown';
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
      .pipe(map((markdown) => this.parseMarkdown(markdown)));
  }

  private parseMarkdown(md: string): Article {
    const parts = md.split('----------------------------------');
    return {
      title: parts[0],
      date: new Date(parts[1]),
      tags: parts[2].split(','),
      article: new Converter().makeHtml(parts[3]),
    };
  }
}
