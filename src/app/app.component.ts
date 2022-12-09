import { Component } from '@angular/core';



@Component({

 selector: 'app-root',

 templateUrl: './app.component.html',

 styleUrls: ['./app.component.css']

})

export class AppComponent {

 userInput1 = "";

 userInput2 = "";

 userInput3 = "";

 onInputReceiverName(vada: Event) {

  this.userInput1 = (vada.target as HTMLInputElement).value

  console.log(this.userInput1)

 }

 onInputPaymentDate(vada: Event) {

  this.userInput2 = (vada.target as HTMLInputElement).value

  console.log(this.userInput2)

 }

 onInputAmount(vada: Event) {

  this.userInput3 = (vada.target as HTMLInputElement).value

  console.log(this.userInput3)

 }

}