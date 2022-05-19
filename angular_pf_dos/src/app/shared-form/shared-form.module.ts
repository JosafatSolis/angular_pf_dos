import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    FormsModule, ReactiveFormsModule, MatButtonModule, MatInputModule,
    MatFormFieldModule, MatSelectModule, MatCardModule
  ]
})
export class SharedFormModule { }
