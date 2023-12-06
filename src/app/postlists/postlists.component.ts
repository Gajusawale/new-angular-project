import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-postlists',
  templateUrl: './postlists.component.html',
  styleUrls: ['./postlists.component.css']
})
export class PostlistsComponent {

  constructor(){}


  @Input()
  fromPostParent: string | undefined;

}
