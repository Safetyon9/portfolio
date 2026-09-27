import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { ProjectCard } from './project-card';

describe('Project card controls', () => {
  it('has one native button and separate repository links', async () => {
    const fixture = TestBed.createComponent(ProjectCard);
    fixture.componentRef.setInput('project', {
      title: 'Project', image: '', description: 'Description', technologies: [],
      repositories: [{ name: 'Frontend', url: 'https://example.com/front' }, { name: 'Backend', url: 'https://example.com/back' }],
    });
    await fixture.whenStable();
    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelectorAll('button').length).toBe(1);
    const button = element.querySelector('button')!;
    button.click();
    await fixture.whenStable();
    expect(button.getAttribute('aria-expanded')).toBe('true');
    expect(element.querySelectorAll('a').length).toBe(2);
    expect(element.querySelector('button a, button button')).toBeNull();
    button.click();
    await fixture.whenStable();
    expect(element.querySelectorAll('a').length).toBe(0);
  });

  it('does not present a button when the project has no links', async () => {
    const fixture = TestBed.createComponent(ProjectCard);
    fixture.componentRef.setInput('project', {
      title: 'Private project', image: '', description: '', technologies: [],
    });
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('button')).toBeNull();
  });
});
