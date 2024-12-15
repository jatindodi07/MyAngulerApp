import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-booking-history',
  imports: [NgFor,RouterLink],
  templateUrl: './booking-history.component.html',
  styleUrl: './booking-history.component.css'
})
export class BookingHistoryComponent implements OnInit{
  bookingData:any
  constructor(private bookingService:BookingService){ }
  ngOnInit(): void {
    this.bookingService.getBookingDetail(localStorage.getItem('user_id')).subscribe({
      next:(data)=>{
        this.bookingData=data
        console.log(this.bookingData)
      },
      error:(err)=>{}
    })
  }
  saveBookingId(id:any){
    console.log(id)
    localStorage.setItem('booking_id',id)
  }

}
