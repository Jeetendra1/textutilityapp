import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() hero!: String;
  @Input() name = '';
  @Output() voted = new EventEmitter<boolean>();
  didVote = false;
  constructor() { }

  ngOnInit(): void {
  }
  vote(agreed: boolean) {
    this.voted.emit(agreed);
    this.didVote = true;
  }


}
