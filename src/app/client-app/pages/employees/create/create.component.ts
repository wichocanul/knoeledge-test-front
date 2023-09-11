import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  statusWindow: boolean = false;
  @ViewChild('asModalWindow') modalWindow! : ElementRef;

  constructor( private render2: Renderer2 ) {}

  ngOnInit() {
  }

  statusModal() {
    const status = this.modalWindow.nativeElement;

    if(this.statusWindow) {
      this.render2.addClass(status, 'hidden');
      this.render2.removeClass(status, 'modalWindow');
      this.statusWindow = false;
    } else {
      this.render2.removeClass(status, 'hidden');
      this.render2.addClass(status, 'modalWindow');
      this.statusWindow = true;
    }
  }

}
