import { Component } from '@angular/core';


@Component({
  selector: 'people',
  template: `
  <h1>{{title}}</h1>
`
})

export class PeopleComponent {
  title = 'Power to the people!!';
}
