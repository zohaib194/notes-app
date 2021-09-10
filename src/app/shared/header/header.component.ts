import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ColorActionTypes, SetColor } from 'src/app/state/store/actions/color.action';
import { ColorState } from 'src/app/state/store/reducers/color.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  showColors: boolean;

  colors: string[] = ['Yellow', 'Blue', 'Green', 'Red'];

  constructor(public store: Store<ColorState>) { }

  ngOnInit(): void {
  }

  onColorChange(event: any): void {
    this.store.dispatch(new SetColor(event.target.value));
  }

}
