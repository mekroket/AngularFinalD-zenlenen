import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FbServisService } from 'src/app/services/fbServis.service';

@Component({
  selector: 'app-kirala',
  templateUrl: './kirala.component.html',
  styleUrls: ['./kirala.component.css']
})
export class KiralaComponent implements OnInit {
  returnUrl = "";
  constructor(
    public fbServis : FbServisService,
    public router : Router,
    public toast : ToastrService
  ) { }

  ngOnInit(): void {
  }
  Kirala(){
    alert("Aracınız Kiralandı")
    this.router.navigateByUrl(this.returnUrl);

  }
  ToastUygula(){
    this.toast.success("Aracınız Başarıyla Kiralandı","Başarılı");
    this.router.navigateByUrl(this.returnUrl);
  }

}
