import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { CarModel, CarConfiguration, carData } from './interfaces/car.model';
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
  getConfigItems(model: string | undefined): Observable<CarConfiguration> {
    let url = 'options/'+model;
    return this.http.get<CarConfiguration>(url);
  }

  private carData = new BehaviorSubject<Object>({});
  currentCarData = this.carData.asObservable();

  private disableStepperSecond = new Subject<boolean>();
  setStapeTwoBtn = this.disableStepperSecond.asObservable();
  updateSecondStepDisable(data: boolean) {
    this.disableStepperSecond.next(data);
  }

  private disableStepperThird = new Subject<boolean>();
  setStapeThirdBtn = this.disableStepperThird.asObservable();
  updateThirdStepDisable(data: boolean) {
    this.disableStepperThird.next(data);
  }
}
