import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CarModel, CarConfiguration } from './interfaces/car.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  constructor(private http: HttpClient) { }
  getItems(): Observable<CarModel[]> {
    let url = 'models';
    return this.http.get<CarModel[]>(url);
  }
  getConfigItems(model: string): Observable<CarConfiguration> {
    let url = 'options/'+model;
    return this.http.get<CarConfiguration>(url);
  }

  private carData = new BehaviorSubject<any>({});
  currentCarData = this.carData.asObservable();

  updatecarData(data: any) {
    this.carData.next(data);
    console.log( this.carData.next(data))
  }

}
