import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Message } from '@test-chat/data';

@Component({
  selector: 'ui-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  constructor(
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer
  ) {
    // Register svgs
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'teradata',
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/teradata.svg'
      )
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'angular',
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/angular.svg'
      )
    );
  }

  ngOnInit(): void {}
}
