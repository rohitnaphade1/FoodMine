import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor() { }
     getFoodById(id:number):Food{
      return this.getAll().find(Food=> Food.id == id)!;
     }  

  getAllFoodsBySearchTerm(searchTerm:string) :Food[]{
    return this.getAll().filter(Food =>
      Food.name.toLowerCase().includes(searchTerm.toLowerCase()
        ));
  }
 
  getAllTags():Tag[]{
    return[
      {name:'All', count:6},
      {name:'FastFood',count:4},
      {name: 'Pizza',count:1},
      {name: 'Burger',count:1},
      {name: 'Fries',count:1},
      {name: 'soup',count:1},

    ];

  }

  getAllFoodsByTag(tag:string):Food[]{
 return tag =="All"? 
 this.getAll():
 this.getAll().filter(Food => Food.tags?.includes(tag))

  }
  getAll(): Food[] {
    return[
      {
        id: 1,
        name:'Meat Balls',
        cookTime:'10-20',
        price: 200,
        favorite: false,
        origins:  ['italy','india'],
        stars:4.5,
        imageUrl :'/assets/images/food1.png',
        tags: ['Lunch'],


      },
      {
        id: 2,
        name:'fries',
        cookTime:'10-20',
        price: 250,
        favorite: true,
        origins: ['italy','usa'],
        stars:4.5,
        imageUrl :'/assets/images/food2.jpg',
        tags: ['FastFood','Lunch','Fries'],
      },

      {
        id: 3,
        name:'Pizza',
        cookTime:'15-20',
        price: 550,
        favorite: true,
        origins: ['italy','india','Ujain'],
        stars:4.2,
        imageUrl :'/assets/images/food3.jpg',
        tags: ['Pizza','FastFood']
      },

      {
        id: 4,
        name:'Chicken Soup',
        cookTime:'10-15',
        price: 50,
        favorite: true,
        origins: ['italy','China','India'],
        stars:3.5,
        imageUrl :'/assets/images/food4.jpg',
        tags: ['Lunch','soup'],
      },

      {
        id: 5,
        name:'Burger',
        cookTime:'20-25',
        price: 650,
        favorite: true,
        origins: ['italy','USa'],
        stars:4.5,
        imageUrl :'/assets/images/food5.jpg',
        tags: ['FastFood','Burger'],
      },

      {
        id: 6,
        name:'Hot-Dog',
        cookTime:'10-20',
        price: 250,
        favorite: true,
        origins: ['italy','japan'],
        stars:4.5,
        imageUrl :'/assets/images/food6.jpg',
        tags: ['FastFood'],
      },
      {
        id: 7,
        name:'Sushi',
        cookTime:'10-20',
        price: 1500,
        favorite: true,
        origins: ['italy','japan'],
        stars:4.5,
        imageUrl :'/assets/images/food7.jpg',
        tags: ['FastFood','Lunch'],
      },
      {
        id: 8,
        name:'cake',
        cookTime:'10-20',
        price: 1100,
        favorite: true,
        origins: ['italy','japan'],
        stars:4.5,
        imageUrl :'/assets/images/food8.jpg',
        tags: ['FastFood',],
      },

      {
        id: 11,
        name:'VadaPav',
        cookTime:'10-20',
        price: 50,
        favorite: true,
        origins: ['India'],
        stars:4.5,
        imageUrl :'/assets/images/food11.jpg',
        tags: ['FastFood'],
      }
    
      
    ]
  }
}
