import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Feed }         from '../feed';
import { FeedService }  from '../feed.service';
import { Observable } from 'rxjs/Rx';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/Rx';

@Component({
  selector: 'app-feed-detail',
  templateUrl: './feed-detail.component.html',
  styleUrls: [ './feed-detail.component.css' ]
})

export class FeedDetailComponent implements OnInit {
  @Input() feed: Feed;


  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private feedService: FeedService,
    private location: Location
  ) {}

  private _url: string = "https://www.reddit.com/r/gifs/top/.json?limit=105sort=hot";

  ngOnInit(): void {
    this.getFeed();
    this.getJSON().subscribe(data => data, error => console.log(error));
  }

  getJSON(): Observable<any> {
    return this.http.get<any>(this._url).pipe(
        tap(_ => console.log('siker'))
      );   
  }

  getFeed(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.feedService.getFeed(id)
      .subscribe(feed => this.feed = feed);
  }
  
  goBack(): void {
    this.location.back();
  }
}
