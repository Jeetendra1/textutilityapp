import { Component, OnChanges, SimpleChanges, OnInit, DoCheck, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  // ngAfterContentInit(): void {
  //   alert("4. after content init called");
  // }
  // ngDoCheck(): void{
  //   alert('3: ng do check')
  // }
  
  // ngOnInit(): void {
  //   alert('2: Initialize component');
  // }
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('on changes');
  // }
  title = 'my-app';
  constructor(){
  }

}
