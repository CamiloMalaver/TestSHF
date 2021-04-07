import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router' 
import {AppComponent} from '../app.component'
import {HomeServiceService} from '../services/home-service.service'
import {HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  apiUrl:string = "https://969rgz78f9.execute-api.us-east-1.amazonaws.com/dev";
  userData;
  categorias;
  productos;
  tiendas;
  promos;

  constructor(private router:Router, private dataService:HomeServiceService, private http:HttpClient) { 
    
    if(!AppComponent.userIn){
      this.router.navigate(['/']);
    }
    this.userData = AppComponent.userIn;
   
    this.getCategorias();
    this.getProductos();
    this.getTiendas();
    this.getPromos();

  }

  ngOnInit(): void { }

  async getCategorias(){
    let dir = this.apiUrl + "/api/categories";
    this.categorias = await this.http.get<any>(dir).toPromise();
  }

  async getProductos(){
    let dir = this.apiUrl + "/api/products";
    this.productos = await this.http.get<any>(dir).toPromise();
  }

  async getTiendas(){
    let dir = this.apiUrl + "/api/stores";
    this.tiendas =await this.http.get<any>(dir).toPromise();
  }

  async getPromos(){
    let dir = this.apiUrl + "/api/promos";
    this.promos = await this.http.get<any>(dir).toPromise();
  }


}
