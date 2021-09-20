import { Component, OnInit } from '@angular/core';
import { Order } from '../model/order.model';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  model: Order = new Order();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // form submitted
    console.log(this.model);
  }

}
