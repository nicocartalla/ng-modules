import { Injectable } from '@angular/core';
import {InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  
  createDb() {
    const cards = [
      {
        id: 1,
        title: 'Card 1',
        description: 'Contenido de la tarjeta 1'
      },
      {
        id: 2,
        title: 'Card 2',
        description: 'Contenido de la tarjeta 2'
      },
      {
        id: 3,
        title: 'Card 3',
        description: 'Contenido de la tarjeta 3'
      },
      {
        id: 1,
        title: 'Card 4',
        description: 'Contenido de la tarjeta 4'
      },
      {
        id: 2,
        title: 'Card 5',
        description: 'Contenido de la tarjeta 5'
      },
      {
        id: 3,
        title: 'Card 6',
        description: 'Contenido de la tarjeta 6'
      },
      {
        id: 1,
        title: 'Card 7',
        description: 'Contenido de la tarjeta 7'
      },
      {
        id: 2,
        title: 'Card 8',
        description: 'Contenido de la tarjeta 8'
      },
      {
        id: 3,
        title: 'Card 9',
        description: 'Contenido de la tarjeta 9'
      }
    ]

    const pics = [
      {
        id: 1,
        imageSrc: '../../assets/img/alan-king-KZv7w34tluA-unsplash.jpg',
        description: 'alan-king-KZv7w34tluA-unsplash'
      },
      {
        id: 2,
        imageSrc: '../../assets/img/alvan-nee-9M0tSjb-cpA-unsplash.jpg',
        description: 'alvan-nee-9M0tSjb-cpA-unsplash'
      },
      {
        id: 3,
        imageSrc: '../../assets/img/charlesdeluvio-Mv9hjnEUHR4-unsplash.jpg',
        description: 'charlesdeluvio-Mv9hjnEUHR4-unsplash'
      },
      {
        id: 4,
        imageSrc: '../../assets/img/hannah-lim-U6nlG0Y5sfs-unsplash.jpg',
        description: 'hannah-lim-U6nlG0Y5sfs-unsplash'
      },
      {
        id: 5,
        imageSrc: '../../assets/img/jamie-street-uNNCs5kL70Q-unsplash.jpg',
        description: 'jamie-street-uNNCs5kL70Q-unsplash'
      },
      {
        id: 6,
        imageSrc: '../../assets/img/joshua-j-cotten-g1XMkqwN4po-unsplash.jpg',
        description: 'joshua-j-cotten-g1XMkqwN4po-unsplash'
      },
      {
        id: 7,
        imageSrc: '../../assets/img/klaus-steinberg-hcjG82lNTwg-unsplash.jpg',
        description: 'klaus-steinberg-hcjG82lNTwg-unsplash'
      },
      {
        id: 8,
        imageSrc: '../../assets/img/karen-lau-2EmW_HIy6Ns-unsplash.jpg',
        description: 'karen-lau-2EmW_HIy6Ns-unsplash'
      },
      {
        id: 9,
        imageSrc: '../../assets/img/svitlana-kg7gcQtp4N8-unsplash.jpg',
        description: 'svitlana-kg7gcQtp4N8-unsplash'
      },
      {
        id: 10,
        imageSrc: '../../assets/img/rachael-gorjestani-HLt6jQLf_J0-unsplash.jpg',
        description: 'rachael-gorjestani-HLt6jQLf_J0-unsplash'
      },
      {
        id: 11,
        imageSrc: '../../assets/img/kelsey-curtis-dIs-MqalSSE-unsplash.jpg', 
        description: 'kelsey-curtis-dIs-MqalSSE-unsplash'
      },
      {
        id: 12,
        imageSrc: '../../assets/img/kenta-kikuchi-LZ6BTZnizD8-unsplash.jpg',
        description: 'kenta-kikuchi-LZ6BTZnizD8-unsplash'
      }
    ];

    const login = [
      {
        id: 1,
        username: 'admin',
        password: 'admin'
      }
    ]

    return {cards, pics, login};
  }
}
