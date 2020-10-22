import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryPageRoutingModule } from './category-routing.module';

import { CategoryItemComponent } from '../component/category-item/category-item.component';
import { CategoryPage } from './category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryPageRoutingModule
  ],
  declarations: [CategoryPage, CategoryItemComponent]
})
export class CategoryPageModule { }