import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { carData } from '../interfaces/car.model';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RangeWithUnitsPipe } from '../range-with-units.pipe';

@Component({
  selector: 'app-step-third',
  standalone: true,
  imports: [CommonModule],
  viewProviders: [RangeWithUnitsPipe],
  providers: [CurrencyPipe],
  templateUrl: './step-third.component.html',
  styleUrl: './step-third.component.scss'
})

export class StepThirdComponent implements OnInit {
  totalCost : number = 0;
  selectedCarData : carData={
    selectedModel: { code: '', description: '', colors: [] },
    selectedColor: { code: '', description: '', price: 0 },
    selectedConfig: { id: 0, description: '', range: 0, speed: 0, price: 0 },
    selectedTowHitch: false,
    selectedYoke: false
  };
  constructor( private dataService: DataServiceService
  ){}
  ngOnInit(): void {
    this.dataService.currentCarData.subscribe((data) => {
      this.selectedCarData = data;
      console.log(this.selectedCarData);
    })
    this.calculateTotal();
  }

  calculateTotal(){
    this.totalCost = this.selectedCarData?.selectedConfig?.price + this.selectedCarData.selectedColor?.price;
    this.totalCost+= this.selectedCarData?.selectedTowHitch ? 1000 : 0;
    this.totalCost+= this.selectedCarData?.selectedYoke ? 1000 : 0;
  }
}
