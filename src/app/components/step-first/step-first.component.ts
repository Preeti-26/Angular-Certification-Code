import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {CarModel, ColorModel, carData} from './../interfaces/car.model'
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';
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
    private dataService: DataServiceService,
    private router: Router,
    ) {  }
  selectedCarData : carData={
    selectedModel: { code: '', description: '', colors: [] },
    selectedColor: { code: '', description: '', price: 0 },
    selectedConfig: { id: 0, description: '', range: 0, speed: 0, price: 0 },
    selectedTowHitch: false,
    selectedYoke: false
  };
  firstFormData: CarModel[] = [];
  // selectedModel: CarModel | null = null;
  // selectedColor: ColorModel | null = null;
  ngOnInit(): void {
    this.dataService.getItems().subscribe((result: CarModel[])=>{
      this.firstFormData = result;
    })
    this.dataService.currentCarData.subscribe((data) => {
      this.selectedCarData = data;
    })
  }
  onChangeModel(){
    this.selectedCarData.selectedColor = { code: '', description: '', price: 0 };
  }
  onChangeColor(){
    this.imgPath = `assets/images/${this.selectedCarData?.selectedModel?.code}/${this.selectedCarData?.selectedColor?.code}.jpg`
  }

}
