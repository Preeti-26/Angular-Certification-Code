import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { carData } from '../interfaces/car.model';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RangeWithUnitsPipe } from '../range-with-units.pipe';
import { constObj } from '../car.constant'

@Component({
  selector: 'app-step-third',
  standalone: true,
  imports: [CommonModule],
  providers: [CurrencyPipe ],
  templateUrl: './step-third.component.html',
  styleUrl: './step-third.component.scss'
})

export class StepThirdComponent implements OnInit {
  totalCost : number = 0;
  towHitchPrice = constObj.TOWHITCH_PRICE;
  towHitchYoke = constObj.YOKE_PRICE;
  selectedCarData : carData;
  constructor( private dataService: DataServiceService
  ){
    this.selectedCarData = {
      selectedModelCode: undefined,
      selectedModelDesc: undefined,
      selectedColorDesc: undefined,
      selectedColorCode: undefined,
      selectedColorPrice: 0,
      selectedConfigId: null,
      selectedConfigDesc: undefined,
      selectedConfigPrice: 0,
      selectedConfigRange: 0,
      selectedConfigSpeed: 0,
      selectedTowHitch: false,
      selectedYoke: false,
      colorList: [],
      configList: []
    }
    this.dataService.currentCarData.subscribe((data) => {
      this.selectedCarData = data;
      console.log(this.selectedCarData);
    })
  }
  ngOnInit(): void {    
    this.calculateTotal();
  }

  calculateTotal(){
    if(this.selectedCarData){
      this.totalCost+= this.selectedCarData?.selectedConfigPrice + this.selectedCarData?.selectedColorPrice | 0;
      this.totalCost+= this.selectedCarData?.selectedTowHitch ? this.towHitchPrice : 0;
      this.totalCost+= this.selectedCarData?.selectedYoke ? this.towHitchYoke : 0;
      console.log(this.totalCost);
      console.log(this.selectedCarData);
    }

  }
}
