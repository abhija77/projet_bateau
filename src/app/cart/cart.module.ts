import { NgModule } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { CartModalComponent } from './cart-modal/cart-modal.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CartComponent,CartModalComponent],
  providers: [UpperCasePipe]
})
export class CartModule {}
