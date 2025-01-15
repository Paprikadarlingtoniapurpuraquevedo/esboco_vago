import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  fullName: String = "Tomé Teixeira";
  number: Number = 123;
  isActive: Boolean = true;
  date: Date = new Date();
  myPlace: String = "Indicar local";
  divClass: String ="bg-primary"

  constructor(){
    console.log(this.fullName);
    this.isActive = false;
    console.log(this.isActive)
  }

  showMessage() {
    alert("Olá, olá!")
  }

  colorChoice() {
    alert("Cor escolhida.")
  }
}
