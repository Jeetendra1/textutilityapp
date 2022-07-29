import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  // templateUrl: './user.component.html',
  template: `<h2> Jeetendra </h2>`,
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnChanges(): void {
    console.log('ngOnChanges');
    
  }
  ngOnInit(): void {
    console.log('ngOnIT');
  }

  ngDoCheck(): void {
    console.log('ngDo Check');
    
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

}
