import { NgModule } from '@angular/core';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentDialogsModule } from '@covalent/core/dialogs';
import { CovalentExpansionPanelModule } from '@covalent/core/expansion-panel';
import { CovalentNotificationsModule } from '@covalent/core/notifications';
import { CovalentMenuModule } from '@covalent/core/menu';

@NgModule({
  exports: [
    CovalentLayoutModule,
    CovalentDialogsModule,
    CovalentExpansionPanelModule,
    CovalentNotificationsModule,
    CovalentMenuModule,
  ],
})
export class CovalentModule {}
