import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
  ErrorHandler,
} from '@angular/core';
import { environment } from './environments/environment';
import { HttpService, Logger, LoggerLevel, LOGGER_LEVEL } from './services';

const CORE_PROVIDERS = [HttpService, Logger];

const isDev = !environment.production;

@NgModule({
  imports: [CommonModule, HttpClientModule],
  exports: [HttpClientModule],
})
export class CoreModule {
  static forRoot(options?: any): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        // { provide: BASE_URL, useValue: options.baseUrl || '' },
        {
          provide: LOGGER_LEVEL,
          useValue: (options && options.loggerLevel) || LoggerLevel.DEBUG,
        },
        // { provide: ErrorHandler, useClass: AppErrorHandler },
        ...CORE_PROVIDERS,
      ],
    };
  }

  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule already loaded. Import in root module only.');
    }
  }
}
