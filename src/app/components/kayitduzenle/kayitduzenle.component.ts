import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Kayit } from 'src/app/models/kayit';



@Component({
  selector: 'app-kayitduzenle',
  templateUrl: './kayitduzenle.component.html',
  styleUrls: ['./kayitduzenle.component.css']
})
export class KayitduzenleComponent implements OnInit {

  key:string;
secKayit:Kayit= new Kayit;
  fbServis: any;
  adsoyad:string;
  uid:string;
  kayitlar:Kayit[];
  
  constructor(
    public route : ActivatedRoute,
    public router : Router
  ) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(p=>{
      
      this.key = p.key;
      this.KayitGetir();
      
    });
  }
  KayitGetir(){
    this.fbServis.KayıtByKey(this.key).snapshotChanges().subscribe(data=>{
     const y ={...data.payload.toJSON(),key:this.key};
      this.secKayit =(y as Kayit)
    })
  }
  Kaydet(){
    this.fbServis.KayıtDuzenle(this.secKayit).then(d=>{
      this.router.navigate(['/'])
    });
  }
  OturumKapat(){
    this.fbServis.OturumKapat().then(d=>{
      localStorage.removeItem("user")
      this.router.navigate(['/login'])
    })
  }
  

}
