import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  rentalPriceUrl:string="http://localhost:8083/fetch/rental/price"
  bookingUrl:string="http://localhost:8083/add/booking"
  bookingDetailUrl:string="http://localhost:8083/api/get/booking"
  getBookingDetailUrl:string="http://localhost:8083/api/get/booking/detail"
  constructor(private http:HttpClient) { }

  getPrice(carid:any):Observable<any>{
    const HttpOptions=
    {
      headers: new HttpHeaders({
        Authorization: 'Bearer '+ localStorage.getItem('token')
     })
    
    }
    return this.http.get(this.rentalPriceUrl+'/'+carid,HttpOptions)
  }


  getBooking(booking: any):Observable<any>{
    const HttpOptions=
    {
      headers: new HttpHeaders({
        Authorization: 'Bearer '+ localStorage.getItem('token')
     })
    
    }
    return this.http.post(this.bookingUrl,booking,HttpOptions)

  }
  getBookingDetail(userId:any):Observable<any>{

 const HttpOptions=
    {
      headers: new HttpHeaders({
        Authorization: 'Bearer '+ localStorage.getItem('token')
     })
    
    }
    return this.http.get(this.bookingDetailUrl+'/'+userId,HttpOptions)
  }


  getUserDetail(id:any):Observable<any>{
    const HttpOptions=
    {
      headers: new HttpHeaders({
        Authorization: 'Bearer '+ localStorage.getItem('token')
     })
    
    }
    return this.http.get(this.getBookingDetailUrl+'/'+id,HttpOptions)
  }
}
