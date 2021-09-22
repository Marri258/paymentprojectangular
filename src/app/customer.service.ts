import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url="http://localhost:8282/cust/";

  constructor(private http:HttpClient) {     }

  public getcustomer(custid:string) : Observable<Customer>
  {
    return this.http.get<Customer>(this.url+custid);
    //.pipe(tap(data=>console.log(JSON.stringify(data))));
  }
}
