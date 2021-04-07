import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  apiUrl:string = "https://969rgz78f9.execute-api.us-east-1.amazonaws.com/dev";
  categorias;
  productos;
  tiendas;
  promos;

  constructor(private http:HttpClient) { }

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
