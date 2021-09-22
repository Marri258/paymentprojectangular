package com.main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.main.beans.Customer;
import com.main.service.ICustomerService;

@RestController
public class CustomerController {
	
	@Autowired
	ICustomerService customerService;
	
	@GetMapping(value="customer")
	public ResponseEntity<List<Customer>> getCustomers() {
		List<Customer> cust = customerService.findAll();
		return new ResponseEntity<List<Customer>>(cust, HttpStatus.OK);
	}
	
	@GetMapping(value="cust/{id}")
	public ResponseEntity<Customer> getCustomer(@PathVariable("id") String id){
		System.out.println(id);
		Customer cust = customerService.findById(id);
		return new ResponseEntity<>(cust,HttpStatus.OK);
	}
	@PutMapping(value="customer")
	public ResponseEntity<Customer> updateCustomer(@RequestBody Customer customer) {
		Customer resEmp = customerService.updateCustomer(customer);
		return new ResponseEntity<Customer>(resEmp, HttpStatus.OK);
	}
	
	
	

}
