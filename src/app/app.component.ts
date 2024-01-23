import {Component, importProvidersFrom} from '@angular/core';
import {AsyncPipe, JsonPipe} from '@angular/common';
import { RouterOutlet } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, JsonPipe,RouterOutlet],
  templateUrl:'app.component.html',
  styleUrls:['app.component.scss'],
})
export class AppComponent {
  name = 'Angular';

}
