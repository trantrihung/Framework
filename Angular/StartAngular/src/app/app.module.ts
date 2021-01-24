import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Two-way binding

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import {Baitap1Module} from './baitap1/baitap1.module';
import { Baitap2Module } from './baitap2/baitap2.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { CardComponent } from './card/card.component';
import { HighlightDirective } from './custom-directives/highlight.directive';
import { InteractionModule } from './interaction/interaction.module';

// Module: là 1 group quản lý các component,directives, pipe,... ta cót thể gom các thành phần
// có cùng chức năng lại trong 1 module

// NgModule: khai báo cho angular biết class AppModule là 1 module
@NgModule({
  // declerations: nơi kháo báo các component do module quản lý
  // 1 component bắt buộc phải đc 1 module quản lý
  declarations: [
    AppComponent,
    DataBindingComponent,
    StructuralDirectivesComponent,
    AttributeDirectivesComponent,
    CardComponent,
    HighlightDirective,
  ],

  // imports: nơi khai báo các module cần sử dụng
  // HomeModule: HeaderComponent, FooterComponent, SidebarComponent, ContetnComponent
  // => Để sử dụng các component trên trong AppComponent cần gắn HomeModule vào mảng import
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Baitap1Module,
    Baitap2Module,
    FormsModule,
    InteractionModule,
  ],
  providers: [],
  // providers: Nơi khai báo các servies
  bootstrap: [AppComponent],
  // bootstrap: Khai báo AppComponent là component khởi chạy đầu tiền
})
export class AppModule {}
