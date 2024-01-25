import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {CarModel, ColorModel, carData} from './../interfaces/car.model'
import { DataServiceService } from '../data-service.service';
@Component({
  selector: 'app-step-first',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './step-first.component.html',
  styleUrl: './step-first.component.scss',  
})
export class StepFirstComponent implements OnInit{
  imgPath: string ='';
  constructor(
    private dataService: DataServiceService
    ) { 
      this.selectedCarData = {
        selectedModelCode: undefined,
        selectedModelDesc: undefined,
        selectedConfigId: null,
        selectedColorDesc: undefined,
        selectedColorCode: undefined,
        selectedColorPrice: 0,
        selectedConfigDesc: undefined,
        selectedConfigPrice: 0,
        selectedConfigRange: 0,
        selectedConfigSpeed: 0,
        selectedTowHitch: false,
        selectedYoke: false,
        colorList: [],
        configList: []
      }
     }
  selectedCarData : carData;
  firstFormData: CarModel[] = [];
  ngOnInit(): void {
    this.dataService.getItems().subscribe((result: CarModel[])=>{
      this.firstFormData = result;
    })
    this.dataService.currentCarData.subscribe((data) => {
      this.selectedCarData = data;
      this.getImgPath();
    })
  }
  onChangeModel(){
    this.resetObject();
    let modelObj = this.firstFormData.find(model => model.code === this.selectedCarData?.selectedModelCode);
    this.selectedCarData.selectedModelDesc = modelObj?.description;
    this.selectedCarData.colorList = modelObj?.colors || [];
    this.dataService.updateSecondStepDisable(true);  // disabled step 2
    this.dataService.updateThirdStepDisable(true); // disabled step 3
  }
  onChangeColor(){
    let colorObj = this.selectedCarData.colorList.find(model => model.code === this.selectedCarData?.selectedColorCode);
    this.selectedCarData.selectedColorDesc = colorObj?.description;
    this.selectedCarData.selectedColorPrice = colorObj?.price || 0;
    this.getImgPath();
    this.resetNextObject();
    this.dataService.updateSecondStepDisable(false);   
  }
  resetObject(){
    this.selectedCarData.selectedModelDesc= undefined;
    this.selectedCarData.selectedColorDesc= undefined;
    this.selectedCarData.selectedColorCode= undefined;
    this.selectedCarData.selectedColorPrice= 0;
    this.selectedCarData.selectedConfigId=null;
    this.selectedCarData.selectedConfigDesc= undefined;
    this.selectedCarData.selectedConfigPrice= 0;
    this.selectedCarData.selectedConfigRange= 0;
    this.selectedCarData.selectedConfigSpeed= 0;
    this.selectedCarData.selectedTowHitch= false;
    this.selectedCarData.selectedYoke= false;
    this.selectedCarData.colorList= [];
    this.selectedCarData.configList= [];
  }
  resetNextObject(){
    this.selectedCarData.selectedConfigId=null;
    this.selectedCarData.selectedConfigDesc= undefined;
    this.selectedCarData.selectedConfigPrice= 0;
    this.selectedCarData.selectedConfigRange= 0;
    this.selectedCarData.selectedConfigSpeed= 0;
    this.selectedCarData.selectedTowHitch= false;
    this.selectedCarData.selectedYoke= false;
    this.selectedCarData.configList= [];
  }
  getImgPath(){
    this.imgPath = `assets/images/${this.selectedCarData?.selectedModelCode}/${this.selectedCarData?.selectedColorCode}.jpg`;
  }

}
