import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { getLocaleDateFormat } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http:HttpClient) {}
  
    getData(){
     let url ='https://jsonplaceholder.typicode.com/todos/';
     //let url = 'https://venushrms.azurewebsites.net/department/';
      return this.http.get(url);
    }
   



  }

