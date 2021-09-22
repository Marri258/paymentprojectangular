import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Transaction } from 'src/transaction';
import { AckComponent } from './ack/ack.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  {path:" ",redirectTo:"transact"},
  {path:"transact",component:TransactionComponent},
  {path:"ack",component:AckComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
