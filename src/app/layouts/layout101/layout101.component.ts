import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MDCTopAppBar } from '@material/top-app-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

const GITHUB_ICON = `
  <svg focusable="false" viewBox="0 0 51.8 50.4" xmlns="http://www.w3.org/2000/svg">
    <path d="M25.9,0.2C11.8,0.2,0.3,11.7,0.3,25.8c0,11.3,7.3,20.9,17.5,24.3c1.3,0.2,1.7-0.6,1.7-1.2c0-0.6,0-2.6,0-4.8c-7.1,1.5-8.6-3-8.6-3c-1.2-3-2.8-3.7-2.8-3.7c-2.3-1.6,0.2-1.6,0.2-1.6c2.6,0.2,3.9,2.6,3.9,2.6c2.3,3.9,6,2.8,7.5,2.1c0.2-1.7,0.9-2.8,1.6-3.4c-5.7-0.6-11.7-2.8-11.7-12.7c0-2.8,1-5.1,2.6-6.9c-0.3-0.7-1.1-3.3,0.3-6.8c0,0,2.1-0.7,7,2.6c2-0.6,4.2-0.9,6.4-0.9c2.2,0,4.4,0.3,6.4,0.9c4.9-3.3,7-2.6,7-2.6c1.4,3.5,0.5,6.1,0.3,6.8c1.6,1.8,2.6,4.1,2.6,6.9c0,9.8-6,12-11.7,12.6c0.9,0.8,1.7,2.4,1.7,4.7c0,3.4,0,6.2,0,7c0,0.7,0.5,1.5,1.8,1.2c10.2-3.4,17.5-13,17.5-24.3C51.5,11.7,40.1,0.2,25.9,0.2z">
    </path>
  </svg>
`;


@Component({
  selector: 'app-layout101',
  templateUrl: './layout101.component.html',
  styleUrls: ['./layout101.component.scss']
})
export class Layout101Component implements OnInit, AfterViewInit {

  @ViewChild('topAppBarEl')
  topAppBarEl!: ElementRef

  private topAppBar!: MDCTopAppBar

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral('github', sanitizer.bypassSecurityTrustHtml(GITHUB_ICON));
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.topAppBar = new MDCTopAppBar(this.topAppBarEl.nativeElement)
  }

  ngOnDestroy() {
    this.topAppBar.destroy();
  }

}
