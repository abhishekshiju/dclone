import { style, state, trigger, animate, transition } from '@angular/animations';

export const widthExpandCollapse = trigger('expandCollapse', [
  state('collapsed', style({ width: '0px' })),
  state('expanded', style({ width: '350px' })),
  transition('collapsed <=> expanded', [ animate('300ms ease') ]),
]);
