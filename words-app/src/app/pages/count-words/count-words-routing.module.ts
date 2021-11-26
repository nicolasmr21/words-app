import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountWordsComponent } from './count-words.component';

const routes: Routes = [
  { path: '', component: CountWordsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
