import { Component, input } from '@angular/core';
import { Table, TableModule } from 'primeng/table';

@Component({
  selector: 'lib-data-table',
  imports: [TableModule],
  templateUrl: './data-table.html',
  styleUrl: './data-table.css',
})
export class DataTable<T> {
  data = input.required<T[]>();
  tableColumns = input.required<{ field: string; header: string }[]>();
}
