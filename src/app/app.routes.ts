import { Routes } from '@angular/router';
import { homedir } from 'node:os';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { GalleryComponent } from './gallery/gallery.component';

export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'contact', component:ContactComponent},
    {path:'portfolio', component:PortfolioComponent},
    {path:'gallery', component:GalleryComponent},
];
