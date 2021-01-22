import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'home.html',
  styleUrls: ['home.css'],
})
export class HomePage {

  inches: number;
  feet: number;
  inches1: number;
  height: number;
  height1: number;
  gender: string;
  idealWeight: number;
  robinsonF: number;
  millerF: number;
  hamwiF: number;
  devineF: number;
   constructor(public navCtrl: NavController) {
    
  }
calculateIdealWeight(){
  this.inches1 = this.feet*12
  this.height = +this.inches+(+this.inches1);
  this.height1 = this.height-60;

  if (this.gender == "m"){
    this.robinsonF = Math.round(52+(1.9*this.height1));
    this.millerF = Math.round(56.2+(1.41*this.height1));
    this.hamwiF = Math.round(48.0+(2.7*this.height1));
    this.devineF = Math.round(50.0+(2.3*this.height1));
  } else if (this.gender == "f"){
    this.robinsonF = Math.round(49+(1.7*this.height1));
    this.millerF = Math.round(53.1+(1.36*this.height1));
    this.hamwiF = Math.round(45.5+(2.2*this.height1));
    this.devineF = Math.round(45.5+(2.3*this.height1));
  }
}
  




}