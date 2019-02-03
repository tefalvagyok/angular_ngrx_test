import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Feed } from './feed';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const feeds = [
      { id: 1, name: 'Első' },
      { id: 2, name: 'Második' },
      { id: 3, name: 'Harmadik' },
      { id: 4, name: 'Negyedik' },
      { id: 5, name: 'Ötödik' },
      { id: 6, name: 'Hatodik' },
      { id: 7, name: 'Hetedik' },
      { id: 8, name: 'Nyolcadik' },
      { id: 9, name: 'Kilencedik' },
      { id: 10, name: 'Tizedik' }
    ];
    return {feeds};
  }

  // Overrides the genId method to ensure that a feed always has an id.
  // If the feeds array is empty,
  // the method below returns the initial number (11).
  // if the feeds array is not empty, the method below returns the highest
  // feed id + 1.
  genId(feeds: Feed[]): number {
    return feeds.length > 0 ? Math.max(...feeds.map(feed => feed.id)) + 1 : 11;
  }
}
