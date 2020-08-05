import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Network } from '@test-chat/web/core';
import { MatSnackBar } from '@angular/material/snack-bar';

const DEFAULT_DURATION = 1500;

@Component({
  selector: 'ui-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  constructor(
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer,
    private _network: Network,
    private _snackBar: MatSnackBar
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

  ngOnInit(): void {
    this._network.onlineChanges.subscribe((online) =>
      this.openSnackBar(`You're ${online ? 'On' : 'Off'}line now`)
    );
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK', {
      duration: DEFAULT_DURATION,
    });
  }
}
