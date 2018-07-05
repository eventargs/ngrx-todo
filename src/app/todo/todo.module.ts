import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '@app/shared';
import { reducers } from './reducers';
import { TodoEffects } from './effects';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';

@NgModule({
  imports: [
    SharedModule,
    StoreModule.forFeature('todo', reducers),
    EffectsModule.forFeature([TodoEffects]),
    TodoRoutingModule
  ],
  declarations: [TodoComponent]
})
export class TodoModule { }
