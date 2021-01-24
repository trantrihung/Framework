import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent implements OnInit {
  // Khai bao Input de nhan du lieu tu component cha
  @Input() movie: any;

  // EventEmitter: tao ra 1 custom event
  // Output: day event len component cha
  @Output() onDelete = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleDeleteMovie() {
    // can day id cua phim can xoa len component movie-list
    // emit event kem data len component cha
    this.onDelete.emit(this.movie.id);
  }
}
