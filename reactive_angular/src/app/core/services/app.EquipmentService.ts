
import { Equipment } from "../models/app.Equipment";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class EquipementService{
    constructor(private http: HttpClient ) { }
    getEquipments(): Observable<Equipment> {
        const apiUrl = 'http://localhost:8080/api/v1/products/list-reactive2';
       return this.http.get<Equipment>(apiUrl);
      }
}