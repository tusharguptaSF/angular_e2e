import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import { User} from '../../model/user';
import { AuthService } from '../../service/auth.service';
import { RouterService } from '../../service/router.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//  loginform:FormGroup;
  loginUser : User = new User() ;
  errorMsg:string = "";
  
  constructor(private formBuilder : FormBuilder,
              private authService : AuthService,
              private routerService:RouterService) {
    // this.loginform = this.formBuilder.group({
    //   username : ["",[Validators.required,Validators.minLength(3)]],
    //   password: ["",[Validators.required,Validators.minLength(5)]]
    // })
   }
  loginForm = new FormGroup(
    {
      username : new FormControl("",[Validators.required,Validators.minLength(3)]),
      password : new FormControl("",[Validators.required,Validators.minLength(5)])
    }
  )
  ngOnInit(): void {
  }
  userInfo(){
    this.loginUser = this.loginForm.value;
    this.authService.authenticateUser(this.loginUser)
    .subscribe(data => {
     
      this.authService.addToken(data);
      this.routerService.routeToDashboard();
    },error => {
      console.log("Invalid user");
      this.errorMsg = "Invalid User";
      this.routerService.routeToLogin();

      
    });
  }
    getUserName(){
      return this.loginForm.get('username');
    }
    getPassword(){
      return this.loginForm.get('password');
    }
    getUserNameErrorMessage(){
      if(this.getUserName()?.invalid && (this.getUserName()?.dirty || this.getUserName()?.touched)){
        if(this.getUserName()?.hasError("required"))
        return "Username should not be left blank"
      else if(this.getUserName()?.hasError('minlength'))
        return "Username should not be less the 3 chars"
      else 
        return ""
      }
      else
        return "";
    }
    getPasswordErrorMessage(){
      if(this.getPassword()?.invalid &&(this.getPassword()?.dirty || this.getPassword()?.touched)){
        if(this.getPassword()?.hasError("required"))
          return "Password should not be left blank"
        else if(this.getPassword()?.hasError('minlength'))
          return "Password should not be less the 5 char"
        else 
        return "";
      }
        
        else
          return "";
    }
    
  

}
