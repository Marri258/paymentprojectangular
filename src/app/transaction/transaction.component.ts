import { analyzeAndValidateNgModules, ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, publish } from 'rxjs/operators';
import { Transaction } from 'src/transaction';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transaction : Transaction = new Transaction(100,Date.now(),"","","","","",0.00,"","");
  transresp : Transaction = new Transaction(100,Date.now(),"","","","","",0.00,"","");
  message : any;
  custmsg:any;
  customer : Customer = new Customer();
  constructor(private service:TransactionService, private custser:CustomerService ){  }

  ngOnInit()
  {
    
  }
  public addTransaction()
  {
    console.log(this.transaction.status);
    //prompt(this.transaction.status);
    
    this.service.addtransaction(this.transaction).subscribe( item => {this.transresp = new Transaction
      ( item.id,item.tdate,item.custid,item.bic,item.code,item.receivername,item.recaccnumber,item.amount,item.status,item.reason)});
    //response.subscribe(
      //(data)=>this.message = data);

    //console.log(response);
    console.log(this.transresp);
    
  }
  public getCustomer()
  {

    this.custser.getcustomer(this.transaction.custid).subscribe( item => {this.customer = new Customer
      ( item.customerid,item.accountholdername, item.overdraft, item.clearbalance)});
    }
    
    
    //(this.transaction.custid).pipe(
      //map(res => {
        //return res.results.map((item: { accountholdername: string; customerid: string; clearbalance: string; overdraft: number; }) => {
          //return new Customer(
            //item.accountholdername,
            //item.customerid,
            //item.clearbalance,
            //item.overdraft
          //);
        //});; 
    //}));
}
//console.log(resp);
//resp.subscribe(value => console.log(value));
//console.log(resp);
//console.log(this.custmsg);
//}