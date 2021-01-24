import { Component } from '@angular/core';
// Component: khao báo AppComponent là 1 component

@Component({
  selector: 'app-root',
  // selector: tên component sẽ nhúng vào file html
  templateUrl: './app.component.html',
  // templateUrl: liên kết file html vào trong component
  styleUrls: ['./app.component.scss']
  // styleUrls: liên kế file css/scss vào trong component
})
export class AppComponent {
  title = 'StartAngular';
}
