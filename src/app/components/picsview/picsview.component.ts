import { Component, Input, OnInit } from '@angular/core';
import { Pic } from 'src/app/models/pic';
import { PicsService } from 'src/app/services/pics.service';

@Component({
  selector: 'app-picsview',
  templateUrl: './picsview.component.html',
  styleUrls: ['./picsview.component.css']
})
export class PicsviewComponent implements OnInit {
  @Input() picsInput: Pic[] = [];
  pics: Pic[] = []
  constructor(private picService: PicsService) { }

  ngOnInit(): void {
    this.getPics();
  }


  //get pics from pics service and add to pics array
  getPics(): void {
    if (this.picsInput.length == 0) {
      this.picService.getPics().subscribe((data) => {
        this.pics = data;
      });
    }
    else {
      this.pics = this.picsInput;
    }
    // this.picService.getPics().subscribe((data) => {
    //   data.forEach((pic) => {
    //     this.pics.push(pic);
    //   }
    //   );
    // });
  }

  //show pics from input
  showPics(pics: Pic[]): void {
    this.pics = pics;
    this.ngOnInit();
  }

}
