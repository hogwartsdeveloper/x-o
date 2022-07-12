import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-neon-title',
  templateUrl: './neon-title.component.html',
  styleUrls: ['./neon-title.component.scss']
})
export class NeonTitleComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
