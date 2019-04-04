import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MenuToggleComponent } from './components/menu-toggle/menu-toggle.component';

@NgModule({
  declarations: [MenuToggleComponent],
  imports: [IonicModule],
  exports: [CommonModule, ReactiveFormsModule, IonicModule, MenuToggleComponent]
})
export class SharedModule {}
