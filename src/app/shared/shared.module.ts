import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';


@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    MatIconModule
  ],
})
export class SharedModule {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    matIconRegistry.addSvgIconSet(
      domSanitizer.bypassSecurityTrustResourceUrl("/assets/symbol-defs.svg")
    );
  }
}
