import {animate, animation, sequence, style} from "@angular/animations";

export const flashAnimation = animation([
  sequence([
    animate('{{ time }}',style({
      'background-color': '{{ flashColor }}'//'#BD8270'
    })),
    animate('{{ time }}',style({
      'background-color': 'white',
    })),
  ]),
])
