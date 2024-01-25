import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { CarConfiguration, CarConfigurationDesc, CarModel, carData } from '../interfaces/car.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-step-second',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './step-second.component.html',
  styleUrl: './step-second.component.scss'
})
export class StepSecondComponent implements OnInit {
  secondFormData: CarConfiguration | null = null;
  configList: CarConfigurationDesc[] = [];
  selectedCarData : carData;
  constructor(private dataService: DataServiceService){ 
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
      this.dataService.getConfigItems(this.selectedCarData?.selectedModelCode).subscribe((result: CarConfiguration)=>{
        this.secondFormData = result;
        this.selectedCarData.configList = result?.configs;
      })        
   }
   onChangeConfig(){
    let configObj = this.secondFormData?.configs.find(config => config.id === this.selectedCarData?.selectedConfigId);
    this.selectedCarData.selectedConfigDesc = configObj?.description;
    this.selectedCarData.selectedConfigPrice = configObj?.price || 0;
    this.selectedCarData.selectedConfigRange = configObj?.range || 0;
    this.selectedCarData.selectedConfigSpeed = configObj?.speed || 0;
    this.dataService.updateThirdStepDisable(false);
   }

}
