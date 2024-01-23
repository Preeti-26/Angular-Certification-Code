import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { CarConfiguration, CarConfigurationDesc, CarModel, carData } from '../interfaces/car.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-step-second',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './step-second.component.html',
  styleUrl: './step-second.component.scss'
})
export class StepSecondComponent implements OnInit {
  secondFormData: CarConfiguration | null = null;
  // selectedConfig: CarConfigurationDesc | null = null;
  configList: CarConfigurationDesc[] = [];
  // selectedTowHitch: boolean = false;
  // selectedYoke: boolean = false;
  selectedCarData : carData={
    selectedModel: { code: '', description: '', colors: [] },
    selectedColor: { code: '', description: '', price: 0 },
    selectedConfig: { id: 0, description: '', range: 0, speed: 0, price: 0 },
    selectedTowHitch: false,
    selectedYoke: false
  };
  constructor(private dataService: DataServiceService){ 
    this.dataService.currentCarData.subscribe((data) => {
      this.selectedCarData = data;
    })
   }
   ngOnInit(): void {
    this.dataService.getConfigItems(this.selectedCarData?.selectedModel?.code).subscribe((result: CarConfiguration)=>{
      this.secondFormData = result;
      this.configList = this.secondFormData.configs;
    })
    
   }
   onChangeConfig(){

   }

}
