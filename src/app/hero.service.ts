import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROES } from './mock-heros';
import { Hero } from './hero';
import { MessageService } from "./service/message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heros = of(HEROES);
    this.messageService.add('HeroServies: fetched heroes')
    return heros;
  }
}
