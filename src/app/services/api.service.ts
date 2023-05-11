import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactSchema } from 'models/contactSchema';
import { catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASE_URL="https://contact-app-z30m.onrender.com"

  

  constructor(private http:HttpClient) { }

  //handle errors
  handleError(error:HttpErrorResponse){
    let errorMsg:string=''
    if(error.error){
      //client error 
      errorMsg = `Error:${error.message}`
    }
    else{
      errorMsg =`Status:${error.status} \n Error: ${error.message}`
    }
    return throwError(()=>errorMsg)

  }

  //get all contacts api
  getAllContacts(){
    //api call:url=http:localhost:3000/contacts req: get
    return this.http.get(`${this.BASE_URL}/contacts`)
  }

  // view a contact
  viewContact(id:any){
    //api call:url=http"//localhost:3000/contacts/call req: get
    return this.http.get(`${this.BASE_URL}/contacts/${id}`)
  }
  
  //get a particular group
  getGroup(id:any){
    //api call:url=http://localhost:3000/group/3 req:get
    return this.http.get(`${this.BASE_URL}/groups/${id}`)
  }

  //get all groups
  getGroups(){
  //api call - http://localhost:3000/groups
  return this.http.get(`${this.BASE_URL}/groups`)
  }
  // add contact 
  addContact(contact:ContactSchema){
    //api call
    return this.http.post(`${this.BASE_URL}/contacts`,contact)

  }
  //delete contact
  deleteContact (id:any){
    //api call to server
    return this.http.delete(`${this.BASE_URL}/contacts/${id}`)
  }
  editContact( id: any,contact: ContactSchema)
{    return this.http.put(`${this.BASE_URL}/contacts/${id}`,contact)
}  
}