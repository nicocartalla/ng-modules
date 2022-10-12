import { Injectable } from '@angular/core';
import { Pic } from '../models/pic';
import { PicsService } from './pics.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private pics: PicsService) { }


  searchPics(search: string): Pic[] {
    var pics: Pic[] = [];
    // get image from pics service and add to pics array if the title or description contains the search string
    this.pics.getPics().subscribe((data) => {
      data.forEach((pic) => {
        if (pic.description.includes(search) || pic.imageSrc.includes(search)) {
          
          pics.push(pic);
        }
      });
    });
    
    return pics;
  }
}
