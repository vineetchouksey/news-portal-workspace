import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActionCard, DataTable } from 'ui-kit';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ActionCard, DataTable, MenubarModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('shell');

  readonly items = signal<MenuItem[]>([
    {
      label: 'Dashboard',
      icon: 'pi pi-fw pi-home',
      routerLink: ['/dashboard'],
    },
    {
      label: 'News',
      icon: 'pi pi-fw pi-globe',
      routerLink: ['/news'],
    },
    {
      label: 'Stock',
      icon: 'pi pi-fw pi-chart-line',
      routerLink: ['/stock'],
    },
    {
      label: 'Books',
      icon: 'pi pi-fw pi-book',
      routerLink: ['/books'],
    },
  ]);

  onReadMore() {
    console.log('ActionCard: read more clicked');
  }
}
