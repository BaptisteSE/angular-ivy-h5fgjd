import { Injectable } from '@angular/core';
import { Hero } from './hero'; // importation de la class hero pour manipuler les héros
import { HEROES } from './mock-heroes'; // importation d'un tableau des héros
import { Observable, of } from 'rxjs'; // importation des modules nécessaires pour utiliser les observables
import { MessageService } from './message.service'; // importation du service de message pour ajouter des messages

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  // injecter le service de message
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    // utilisation de la fonction "of" de RxJS pour créer un Observable à partir d'un tableau de héros appelé HEROES
    const heroes = of(HEROES);
    // utilisation du service "messageService" pour ajouter un message à la file de messages
    this.messageService.add('HeroService : fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((h) => h.id === id)!;
    return of(hero);
  }
}
