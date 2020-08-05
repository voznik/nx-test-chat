import { NgModule } from '@angular/core';
import { CovalentDialogsModule } from '@covalent/core/dialogs';
import { CovalentExpansionPanelModule } from '@covalent/core/expansion-panel';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentMenuModule } from '@covalent/core/menu';
import { CovalentMessageModule } from '@covalent/core/message';
import { CovalentNotificationsModule } from '@covalent/core/notifications';

@NgModule({
  exports: [
    CovalentDialogsModule,
    CovalentExpansionPanelModule,
    CovalentLayoutModule,
    CovalentMenuModule,
    CovalentMessageModule,
    CovalentNotificationsModule,
  ],
})
export class CovalentModule {}
