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

  counter = 0;
  incr() {
    this.counter++;
  }

  onKeyPress(e:any) {
    console.log(e.target.value);
  }
}
