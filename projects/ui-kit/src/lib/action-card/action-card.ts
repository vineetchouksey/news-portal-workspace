import { Component, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'lib-action-card',
  imports: [ButtonModule, CardModule],
  host: { 'some-binding': 'some-value' },
  templateUrl: './action-card.html',
  styleUrl: './action-card.css',
})
export class ActionCard {
  title = input.required<string>();
  content = input<string>('Default content');
  actioned = output<void>();
}
