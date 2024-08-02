import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RecommendedComponent } from '../recommended/recommended.component';

export interface Product {
  pname:string;
  pprice:number;
  pcat:string;
  pimg:string;

}
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RecommendedComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})

export class GalleryComponent {
  
  constructor(private titleService:Title) {
    this.titleService.setTitle("Gallery");
  }
  
  productList:Product[]=[
    {pname:'Bmw',pprice:40000,pcat:"Car",pimg:"assets/imgs/1.jpg"},
    {pname:'Mercedes',pprice:70000,pcat:"Car",pimg:"assets/imgs/2.jpg"},
    {pname:'Jaguar',pprice:60000,pcat:"Car",pimg:"assets/imgs/3.jpg"},
    {pname:'Kia',pprice:50000,pcat:"Car",pimg:"assets/imgs/4.jpg"},
    {pname:'Bmw',pprice:40000,pcat:"Car",pimg:"assets/imgs/1.jpg"},
    {pname:'Mercedes',pprice:70000,pcat:"Car",pimg:"assets/imgs/2.jpg"},
    {pname:'Jaguar',pprice:60000,pcat:"Car",pimg:"assets/imgs/3.jpg"},
    {pname:'Kia',pprice:50000,pcat:"Car",pimg:"assets/imgs/4.jpg"},
    {pname:'Bmw',pprice:40000,pcat:"Car",pimg:"assets/imgs/1.jpg"},
    {pname:'Mercedes',pprice:70000,pcat:"Car",pimg:"assets/imgs/2.jpg"},
    {pname:'Jaguar',pprice:60000,pcat:"Car",pimg:"assets/imgs/3.jpg"},
    {pname:'Kia',pprice:50000,pcat:"Car",pimg:"assets/imgs/4.jpg"},
    {pname:'Bmw',pprice:40000,pcat:"Car",pimg:"assets/imgs/1.jpg"},
    {pname:'Mercedes',pprice:70000,pcat:"Car",pimg:"assets/imgs/2.jpg"},
    {pname:'Jaguar',pprice:60000,pcat:"Car",pimg:"assets/imgs/3.jpg"},
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
