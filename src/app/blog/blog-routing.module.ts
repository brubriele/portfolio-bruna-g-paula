import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogLandingComponent } from './blog-landing/blog-landing.component';
import { BlogComponent } from './blog/blog.component';

// To view posts that are still unpublished, you can use the slug property on MD post file
// slug: alternate-url-for-blog-post-1


const routes: Routes = [
  {
    path: ':slug',
    component: BlogComponent,
  },
  {
    path: '**',
    component: BlogComponent,
  },
  {
    path: '',
    component: BlogLandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule { }

