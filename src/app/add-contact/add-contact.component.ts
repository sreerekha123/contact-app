import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { ContactSchema } from 'models/contactSchema';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit{

contact:ContactSchema = {}
groups:any=[]

constructor (private api:ApiService,private addContactRouter:Router){
  this.contact.groupId = "Select A Group"

}
  ngOnInit(): void {
    this.api.getGroups().subscribe({
      next:(Response:any)=>{
        console.log(Response);
        this.groups = Response
      },
      error:(err:any)=>{
        console.log(err.message);
        
      }
    })
  }

  addContact(contact:ContactSchema){
    //call api in service
    this.api.addContact(contact).subscribe({
      next:(response:any)=>{
        console.log(response);
        this.addContactRouter.navigateByUrl('')
      
        
      },error:(err:any)=>{
        console.log(err);
        
      }
     
    })

  }
}