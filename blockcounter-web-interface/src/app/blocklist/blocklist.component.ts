import { Component } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'app-blocklist',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './blocklist.component.html',
  styleUrl: './blocklist.component.css'
})
export class BlocklistComponent {
  blockdata: any;

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const contents = e.target?.result;
        if (contents) {
          this.processData(contents as string);
        }
      };
      reader.readAsText(file);
    }
  }

  processData(data: string) {
    this.blockdata = JSON.parse(data);
  }
}
