import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
//
import { CovalentModule } from './covalent.module';
import { MaterialModule } from './material.module';
//
import { ShellComponent } from './components/shell/shell.component';

const UI_MODULES = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  MaterialModule,
  CovalentModule,
];

@NgModule({
  imports: UI_MODULES,
  exports: [...UI_MODULES, ShellComponent],
  declarations: [ShellComponent],
})
export class UiModule {}
