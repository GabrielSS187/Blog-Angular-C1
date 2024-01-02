import { Component, OnInit } from '@angular/core';
import { TNews } from 'src/dtos/types';
import { dataFake } from 'src/data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    this.#getMainNews();
    this.#getSecondaryNews();
  }

  mainNews: TNews | undefined;
  secondaryNews:  TNews[] | undefined;
  #idMainNews = 1;

  #getMainNews(): void {
    this.mainNews =
    dataFake.find(data => Number(data.id) === this.#idMainNews);
  };

  #getSecondaryNews(): void {
    this.secondaryNews =
    dataFake.filter(data => Number(data.id) !== this.#idMainNews);
  };
}
