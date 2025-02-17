import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})

export class ProfileComponent {

  public isShow: boolean = false;

  constructor(public router: Router) {}

  logOut() {
    localStorage.clear();
    this.router.navigateByUrl("/auth/login");
  }
  
}
