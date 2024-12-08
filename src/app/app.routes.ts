import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthComponent } from './pages/auth/auth.component';
import { SighnUpPageComponent } from './pages/sighn-up-page/sighn-up-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UpdateComponent } from './components/update/update.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { BookingHistoryComponent } from './components/booking-history/booking-history.component';
import { Component } from '@angular/core';
import { AddCarComponent } from './pages/add-car/add-car.component';
import { CarPicsComponent } from './components/car-pics/car-pics.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { AvailabilityComponent } from './components/availability/availability.component';
import { CarComponent } from './pages/car/car.component';
import { DetailComponent } from './components/detail/detail.component';
import { BookingComponent } from './components/booking/booking.component';

export const routes: Routes = [
    {
        path:"",  component:AuthComponent
    
    },
    {
        path:"login" , component:LoginPageComponent
    
    },
    {
        path:"sign-up", component:SighnUpPageComponent
    },
    {
        path:"home-page",component:HomePageComponent,children:[
            {
                path:'', component : CarListComponent
            },
            {
                path:'available',component:AvailabilityComponent
            },
            {
                path:'booking',component:BookingComponent
            },
            {
                path:'detail',component:DetailComponent
            },
            {
                path:'update', component : UpdateComponent
            },
            {
                path:'booking-history', component : BookingHistoryComponent
            },
            {
                path:'add-car', component : AddCarComponent,children:[{
                    path:'', component :CarDetailsComponent
                },
                {
                    path:'upload-photos',component:CarPicsComponent
                }]
            }
        ]

    }
   
];
