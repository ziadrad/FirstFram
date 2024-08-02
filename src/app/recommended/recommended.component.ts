import { Component } from '@angular/core';
import { Product } from '../gallery/gallery.component';

@Component({
  selector: 'app-recommended',
  standalone: true,
  imports: [],
  templateUrl: './recommended.component.html',
  styleUrl: './recommended.component.css'
})
export class RecommendedComponent {

  recomendedList:Product[]=[
    {pname:'Kia',pprice:50000,pcat:"Car",pimg:"assets/imgs/4.jpg"},
    {pname:'Bmw',pprice:40000,pcat:"Car",pimg:"assets/imgs/1.jpg"},
    {pname:'Mercedes',pprice:70000,pcat:"Car",pimg:"assets/imgs/2.jpg"},
    {pname:'Jaguar',pprice:60000,pcat:"Car",pimg:"assets/imgs/3.jpg"},
    {pname:'Kia',pprice:50000,pcat:"Car",pimg:"assets/imgs/4.jpg"},
    {pname:'Bmw',pprice:40000,pcat:"Car",pimg:"assets/imgs/1.jpg"},
    {pname:'Mercedes',pprice:70000,pcat:"Car",pimg:"assets/imgs/2.jpg"},
    {pname:'Jaguar',pprice:60000,pcat:"Car",pimg:"assets/imgs/3.jpg"},
    {pname:'Kia',pprice:50000,pcat:"Car",pimg:"assets/imgs/4.jpg"},
  ]

}
