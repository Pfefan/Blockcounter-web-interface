import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlocklistComponent } from './blocklist/blocklist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BlocklistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
