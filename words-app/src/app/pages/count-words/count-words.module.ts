import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WelcomeRoutingModule } from './count-words-routing.module';
import { CountWordsComponent } from './count-words.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NzBadgeModule } from 'ng-zorro-antd/badge';

@NgModule({
  imports: [
    WelcomeRoutingModule,
    NzCardModule,
    NzInputModule,
    NzListModule,
    CommonModule,
    NzButtonModule,
    FormsModule,
    ScrollingModule,
    NzBadgeModule
  ],
  declarations: [CountWordsComponent],
  exports: [CountWordsComponent]
})
export class CountWordsModule { }
