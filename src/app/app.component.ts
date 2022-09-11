import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuItem } from './menu-item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  menuItems: MenuItem[] = [
    {
      label: 'File',
      children: [
        {
          label: 'New',
          children: [
            {
              label: 'From Template',
            },
            { label: 'New File' },
          ],
        },
      ],
    },
    {
      label: 'Edit',
      children: [
        { label: 'Undo' },
        { label: 'Redo' },
        { label: 'Cut' },
        { label: 'Copy' },
        { label: 'Paste' },
      ],
    },
  ];
}
