import { Directive, ViewContainerRef } from '@angular/core';
import {
  ArticleMetaComponent,
  ArticleMetaComponentInputMap,
} from '../components/article-meta/article-meta.component';
import { ArticleMeta } from '../models/article';

@Directive({
  selector: '[appArticleMetas]',
})
export class ArticleMetasDirective {
  constructor(private readonly viewContainerRef: ViewContainerRef) {}

  addArticles(metas: ArticleMeta[]): void {
    metas.forEach((m) => {
      const componentRef =
        this.viewContainerRef.createComponent<ArticleMetaComponentInputMap>(
          ArticleMetaComponent
        );
      componentRef.instance.id = m.id;
      componentRef.instance.title = m.title;
      componentRef.instance.date = m.date;
      componentRef.instance.meta = m.meta;
    });
  }
}
