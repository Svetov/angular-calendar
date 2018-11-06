import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-nav',
  templateUrl: './button-nav.component.html',
  styleUrls: ['./button-nav.component.css']
})
export class ButtonNavComponent implements OnInit {
  @Input() herf_back: string;
  @Input() herf_forward: string;
  @Input() disabled_forward: boolean = false

  constructor() { }

  ngOnInit() {
  }

}
