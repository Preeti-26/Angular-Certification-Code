// import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stepper-main',
  standalone: true,
  imports: [RouterOutlet, RouterModule, MatStepperModule, CommonModule ],
  templateUrl: './stepper-main.component.html',
  styleUrl: './stepper-main.component.scss',
  
})
export class StepperMainComponent {
  constructor(public router:Router){

  }

  // public selectedStepIndex: number = 0;
  // public loadingStep: boolean = false;
  // public steps = [{title: 'Step 1'},{title: 'Step 2'},{title: 'Step 3'}]

// selectionChanged(event: any) {
//     this.selectedStepIndex = event.selectedIndex;
//     if (event.previouslySelectedIndex > event.selectedIndex) {
//         this.loadingStep = true;
//         //Wait 1 sec. before showing the step
//         setTimeout(() => {
//             this.navigate();
//             this.loadingStep = false;
//         }, 1000);
//     } else {
//         this.navigate();
//     }
// }

// private navigate(): void {
//     const url = 'step' + this.selectedStepIndex;
//     this.router.navigateByUrl(url, {state : { id:100 , name:'Maya' }} );
// }

}
