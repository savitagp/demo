import { Component } from '@angular/core';
import { DataserviceService} from './dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 item:any = {}
  data:any = []
 constructor(private user: DataserviceService)
  {
    this.user.getData().subscribe(data=>{
          console.warn(data)
     this.data=data
      })


  }

}

