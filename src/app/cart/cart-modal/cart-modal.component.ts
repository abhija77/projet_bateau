import { UpperCasePipe } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss'],
})
export class CartModalComponent implements OnInit {

  form: FormGroup = null;
  @Input() total: number;

  constructor(private upper: UpperCasePipe,
              public toastController: ToastController,
              public modalControler: ModalController,
              private router: Router) {

  }

  getCapitalized(value: string){
      return this.upper.transform(value.charAt(0)) + value.substr(1);
  }

  getKeys(): string[]{
    return Object.keys(this.form.controls);
  }


  goToHome(){
    this.router.navigate(["/home"]);
  }

  payer(){
    this.presentToast();
    this.modalControler.dismiss({
      'isCanceled' : false
    });
  }

  cancel(){
    this.modalControler.dismiss({
      'isCanceled' : true
    })
  }

  async presentToast(){
    const toast = await this.toastController.create({
      message: 'Votre commande a bien été effectuée.',
      duration: 1000,
      color: "green"
    });
    toast.present();
  }

  ngOnInit() {
    this.form = new FormGroup({
      lastName: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required)
    });    
  }

}
