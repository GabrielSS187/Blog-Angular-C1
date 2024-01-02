import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  photoCover: string = '';
  contentTitle: string = '';
  description: string = '';
  #id: string = '0';

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.#id = value.get('id')!
    );

    this.setValuesToComponent(this.#id);
  }

  setValuesToComponent(id: string): void {
    const result = dataFake.find((article) => {
      return article.id === Number(id);
    })

    if (result) {
      this.photoCover = result.photo;
      this.contentTitle = result.title;
      this.description = result.description;
    }
  };

}
