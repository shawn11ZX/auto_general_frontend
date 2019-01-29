import {Component, Input, OnInit} from '@angular/core';
import {Hit} from '../hit';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  @Input() hits: Hit[];

  constructor() { }

  ngOnInit() {
  }

}
