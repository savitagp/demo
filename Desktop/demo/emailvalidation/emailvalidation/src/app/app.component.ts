
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';
import { HttpClient, HttpClientModule} from '@angular/common/http';
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
  name = 'Angular';
  phoneNumber!: Number;
    registerForm!: FormGroup;
    submitted = false;
   
    constructor(private formBuilder: FormBuilder,
                 private http:HttpClient) {}
    
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            Name: ['', Validators.required],
            dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
            email: ['', [Validators.required, Validators.email,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ )]],
            phoneNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
   
    numberTransform(){
      let value = this.registerForm.get('phoneNumber').value;
      var x = value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
      // 
      this.registerForm.controls['phoneNumber'].setValue(value);
  }

    onSubmit(data: any) {
      let data1={"name":"savita","id":5}
      // this.http.post('https://612dd47be579e1001791dddc.mockapi.io/v1/users',data).subscribe(res=>console.log(res));
      this.http.post('http://localhost:3000/register',data).subscribe(res=>console.log(res));
     console.warn(data);
      // this.registerForm.value;
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value,null,4));
    }
    onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }
}
