import {
  trigger,
  animate,
  transition,
  style,
  query,
} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* => *', [
    query(':enter', [style({ opacity: 0, position: 'absolute' })], {
      optional: true,
    }),
    query(
      ':leave',
      [
        style({ opacity: 1, position: 'absolute' }),
        animate('0s ease-out', style({ opacity: 0 })),
      ],
      { optional: true }
    ),
    query(
      ':enter',
      [
        style({ opacity: 0, position: 'relative' }),
        animate('0.25s ease-in', style({ opacity: 1 })),
      ],
      { optional: true }
    ),
  ]),
]);
