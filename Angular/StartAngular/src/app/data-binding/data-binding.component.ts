import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent implements OnInit {
  message: string = 'hello';
  student: any = {
    name: 'Hung',
    age: 25,
  };
  isActive: boolean = false;
  userName: string = '';
  email: string = '';
  address: string = '';
  district: string = '';

  changeMessage() {
    this.message = 'hello Cybersoft';
    console.log(this.message);
  }

  changeUserName(event: any) {
    this.userName = event.target.value;
  }

  changeEmail(emailRef: HTMLInputElement) {
    console.log(emailRef);
    this.email = emailRef.value;
  }

  constructor() {}

  ngOnInit(): void {}
}
