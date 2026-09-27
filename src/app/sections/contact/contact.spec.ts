import { afterEach, describe, expect, it, vi } from 'vitest';
import { Contact } from './contact';

describe('Contact clipboard feedback', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('waits for the clipboard before confirming success', async () => {
    let finish!: () => void;
    vi.stubGlobal('navigator', { clipboard: {
      writeText: vi.fn(() => new Promise<void>((resolve) => { finish = resolve; })),
    } });
    const contact = new Contact();
    const pending = contact.copyEmail();
    expect(contact.copying()).toBe(true);
    expect(contact.copyStatus()).toBe('Copying…');
    finish();
    await pending;
    expect(contact.copyStatus()).toBe('Email copied to clipboard');
    expect(contact.copying()).toBe(false);
    contact.ngOnDestroy();
  });

  it('reports failure instead of claiming the email was copied', async () => {
    vi.stubGlobal('navigator', { clipboard: {
      writeText: vi.fn().mockRejectedValue(new Error('Permission denied')),
    } });
    const contact = new Contact();
    await contact.copyEmail();
    expect(contact.copyStatus()).toContain('Could not copy');
    expect(contact.copying()).toBe(false);
    contact.ngOnDestroy();
  });
});

