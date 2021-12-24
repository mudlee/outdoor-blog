import { Component, Input } from '@angular/core';

export interface ArticleMetaComponentInputMap {
  id: string;
  title: string;
  date: Date;
  meta: string;
}

@Component({
  selector: 'app-article-meta',
  templateUrl: './article-meta.component.html',
  styleUrls: ['./article-meta.component.scss'],
})
export class ArticleMetaComponent {
  @Input() id!: string;
  @Input() title!: string;
  @Input() date!: Date;
  @Input() meta!: string;
}
