import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent implements OnInit {
  @Output() onAdd = new EventEmitter();
  form: any = {
    name: '',
    price: '',
    img: '',
  };
  handleSelecFile(evt: any) {
    // Chi can gui file cho BE xu ly
    console.log(evt.target.files);
    const file = evt.target.files[0];

    // Chuyen File thanh base64 de co the su dung trong src cua tag img
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (evt) => {
      this.form.img = evt.target?.result;
    };
  }
  handleAddMovie() {
    // Day du lieu them phim len component interaction
    console.log(this.form);
    const movie = {
      ...this.form,
      id: Math.floor(Math.random() * 100),
    };
    this.onAdd.emit(movie);
  }
  constructor() {}

  ngOnInit(): void {}
}
