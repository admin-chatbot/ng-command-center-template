import { Component } from '@angular/core';
import { horizontialListData } from '../../../../shared/data/data/ui-kits/list';

@Component({
  selector: 'app-horizontal-lists',
  templateUrl: './horizontal-lists.component.html',
  styleUrls: ['./horizontal-lists.component.scss']
})

export class HorizontalListsComponent {

  public horizontialListData = horizontialListData;

}
