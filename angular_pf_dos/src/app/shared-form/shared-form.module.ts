import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    FormsModule, ReactiveFormsModule, MatButtonModule, MatInputModule, MatFormFieldModule
  ]
})
export class SharedFormModule { }
