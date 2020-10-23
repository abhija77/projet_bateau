import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartRoutingModule
  ],
  declarations: [CartComponent]
})
export class CartModule {}
