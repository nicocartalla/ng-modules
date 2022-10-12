import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pic } from 'src/app/models/pic';
import { PicsService } from 'src/app/services/pics.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() picsOutput = new EventEmitter<Pic[]>();
  pics: Pic[] = []
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchPics("");
  }

  //get pics from search service and add to pics array
  searchPics(search: string): void {
    this.pics = this.searchService.searchPics(search)
    this.picsOutput.emit(this.pics);

  }

}
