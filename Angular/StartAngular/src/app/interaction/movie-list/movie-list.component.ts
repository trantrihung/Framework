import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit, OnChanges {
  @Input() newMovie: any;
  movieList: any[] = [
    {
      id: 1,
      name: 'Iron-man',
      price: 50000,
      img: 'assets/img/iron.jpg',
    },
    {
      id: 2,
      name: 'Captain America',
      price: 60000,
      img: 'assets/img/captain.jpg',
    },
    {
      id: 1,
      name: 'Hulk',
      price: 70000,
      img: 'assets/img/hulk.jpg',
    },
  ];

  constructor() {}

  //ngOnChanges: Chay khi Input thay doi
  ngOnChanges(changes: any): void {
    console.log(changes);
    const movie = changes.newMovie.currentValue;
    if (
      movie &&
      changes.newMovie.currentValue.id !== changes.newMovie.prevValue.id
    ) {
      this.movieList.push(movie);
    }
  }

  ngOnInit(): void {}
  handleDeleteMovie(movieId: number) {
    this.movieList = this.movieList.filter((movie) => movie.id !== movieId);
  }
}
