import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, LoginRoutingModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  declarations: [LoginComponent]
})
export class LoginModule {}
