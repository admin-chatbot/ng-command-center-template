import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkComponent } from './bookmark.component';

const routes: Routes = [

  {
    path: '',
    component: BookmarkComponent,
    data: {
      title: "Bookmarks",
      breadcrumb: "Bookmarks",
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookmarksRoutingModule { }
