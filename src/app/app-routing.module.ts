import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'mf1',
    loadChildren: () => import('mf1/Mf1Module').then(m => m.Mf1Module)
  },
  {
    path: 'mf2',
    loadChildren: () => import('mf2/Mf2Module').then(m => m.Mf2Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
