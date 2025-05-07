import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss',
})
export class DataBindingComponent {
  name: string = 'Learn';
  topic: string = 'Data Binding';
  image: string =
    'https://yt3.ggpht.com/vDRk9yJj6aeYBq_1fa66x-QayYqsW3XS6xG-yFVODBQyEFVY5YigauGG8ibCgALGoYvdvWek7hk=s48-c-k-c0x00ffffff-no-rj';
  random = '';

  onSave() {
    alert('Data Saved !');
  }

  onChange() {
    alert('Country has changed !');
  }
}
