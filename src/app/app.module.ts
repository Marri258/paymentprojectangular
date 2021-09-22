import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TransactionService } from './transaction.service'; 
import { FormsModule } from '@angular/forms';
import { AckComponent } from './ack/ack.component';
@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent,
    AckComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
