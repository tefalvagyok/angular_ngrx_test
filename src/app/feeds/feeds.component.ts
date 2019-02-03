import { Component, OnInit } from '@angular/core';

import { Feed } from '../feed';
import { FeedService } from '../feed.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {
  feeds: Feed[];

  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.getFeeds();
  }

  getFeeds(): void {
    this.feedService.getFeeds()
    .subscribe(feeds => this.feeds = feeds);
  }
}
