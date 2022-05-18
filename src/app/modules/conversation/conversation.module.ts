import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversationComponent } from './conversation/conversation.component';
import { MessageViewComponent } from './message-view/message-view.component';
import { AttachmentViewComponent } from './attachment-view/attachment-view.component';
import { SendConversationComponent } from './send-conversation/send-conversation.component';
import { SharedModule } from 'app/shared/shared.module';



@NgModule({
  declarations: [
    ConversationComponent,
    MessageViewComponent,
    AttachmentViewComponent,
    SendConversationComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    ConversationComponent
  ]
})
export class ConversationModule { }
