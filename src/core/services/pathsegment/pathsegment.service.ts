import { Injectable } from '@angular/core';
import { PRIMARY_OUTLET, Router, UrlSegment, UrlSegmentGroup, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PathsegmentService {

  constructor(private router: Router) { }

  getPath() {
    let body: any = [];
    const tree: UrlTree = this.router.parseUrl(this.router.url);
    const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
    const s: UrlSegment[] = g.segments;
    s.forEach(value => {
      body.push(value.path)
    })
    return body;
  }
}
