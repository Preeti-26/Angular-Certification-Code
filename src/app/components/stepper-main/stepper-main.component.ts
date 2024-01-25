import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';
import { CommonModule } from '@angular/common';
import { DataServiceService } from '../data-service.service';
import { carData } from '../interfaces/car.model';

@Component({
  selector: 'app-stepper-main',
  standalone: true,
  imports: [RouterOutlet, RouterModule, MatStepperModule, CommonModule ],
  templateUrl: './stepper-main.component.html',
  styleUrl: './stepper-main.component.scss',
})
export class StepperMainComponent implements OnInit {
  constructor(private dataService: DataServiceService){
  }
  isStepSecondDisable: boolean = true;
  isStepThirdDisable: boolean = true;
  ngOnInit(): void {
    this.dataService.setStapeTwoBtn.subscribe((data) => {
      this.isStepSecondDisable = data;
    })
    this.dataService.setStapeThirdBtn.subscribe((data) => {
      this.isStepThirdDisable = data;
    })
  }
}
  

