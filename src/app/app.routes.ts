import { Routes } from '@angular/router';
import { StepperMainComponent } from './components/stepper-main/stepper-main.component';

export const routes: Routes = [
    {
        path: '',
        component: StepperMainComponent,
        loadChildren: () => import('./components/stepper.routes')
                                   .then(c => c.STEPPER_ROUTE)
    },
    { path: '**', redirectTo: 'step1', pathMatch: 'full' },
];
