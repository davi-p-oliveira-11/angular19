import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directives-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-directives-component.component.html',
  styleUrl: './attribute-directives-component.component.scss'
})
export class AttributeDirectivesComponentComponent {
  //1
  
  textColor : string = 'text-success';

  changeColor(color : string) {
    this.textColor = color;
  }
  
  styleColor: string = "orange";
  updateColor(ngStyleColor : string) {
    this.styleColor = ngStyleColor;
  }

  //2

  isTextGreen : boolean = false;

  isTextOrange : boolean = false;

  //3
  userClass : string = '';

  customClass : any = {
    'color': 'purple',
    'height' : '150px',
    'width' : '400px',
    'border' : '2px solid black'
  }

}
