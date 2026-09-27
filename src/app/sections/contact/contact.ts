import { Component, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnDestroy {
  readonly copying = signal(false);
  readonly copyStatus = signal('Click to copy');
  private resetTimer?: ReturnType<typeof setTimeout>;
  private destroyed = false;

  async copyEmail(): Promise<void> {
    if (this.copying()) return;
    clearTimeout(this.resetTimer);
    this.copying.set(true);
    this.copyStatus.set('Copying…');

    try {
      await navigator.clipboard.writeText('vinrusso.dev@proton.me');
      if (this.destroyed) return;
      this.copyStatus.set('Email copied to clipboard');
      this.resetTimer = setTimeout(() => this.copyStatus.set('Click to copy'), 2000);
    } catch {
      if (!this.destroyed) {
        this.copyStatus.set('Could not copy. Please select and copy the email.');
      }
    } finally {
      this.copying.set(false);
    }
  }

  ngOnDestroy(): void {
    this.destroyed = true;
    clearTimeout(this.resetTimer);
  }
}
