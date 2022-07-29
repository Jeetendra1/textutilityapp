import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heros';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }
  msg = 'Passing the data from parent child';
  agreed = 0;
  disAgreed = 0;
  voters = ['Jeet', 'Sangya', 'Dheeru'];
  ngOnInit(): void {
  }

  onVoted(agreed: boolean){
    if (this.agreed){
      this.agreed++;
    } else {
      this.disAgreed++;
    }
  }

}
