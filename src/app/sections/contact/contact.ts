import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  copied = false;

copyEmail() {
  navigator.clipboard.writeText('vinrusso.dev@proton.me');

  this.copied = true;

  setTimeout(() => {
      this.copied = false;
    }, 2000);
  }
}