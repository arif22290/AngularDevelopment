import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'MyAngularApp';

  inputValue: string = 'Hello';
  isDisabled: boolean = false;

  imgSrc: string = "/assets/Angular.png";
}
