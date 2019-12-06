import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { Validator, UserService, CommonService } from './services';
import { ScrollDirective } from './directive/scroll.directive';

@NgModule({
  declarations: [ScrollDirective],
  imports: [
    CommonModule
  ],
  exports: [ScrollDirective]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [Validator, UserService, CommonService]
    };
  }
}
