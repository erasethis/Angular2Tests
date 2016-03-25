import { Component } from 'angular2/core';

@Component({
  selector: 'my-story',
  template: '<h1>Hello World</h1>'  
})

export class StoryComponent {
    story = { id: 100, name: ' The Force Awakens' };
    color = 'blue';
}