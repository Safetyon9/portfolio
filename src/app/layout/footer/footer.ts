import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button';
import { Badge } from '../../shared/components/badge/badge';

@Component({
  selector: 'app-footer',
  imports: [
    ButtonComponent,
    Badge
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {}
