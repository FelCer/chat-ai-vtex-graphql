import { IOClients } from '@vtex/api'

import { MessageChatAi } from './messageChatAi/messageChatAi'
import { getQuestion } from './getQuestion/getQuestion'

export class Clients extends IOClients {

  public get clientChatAi() {
    return this.getOrSet('clientChatAi', MessageChatAi)
  }

  public get clientGetQuestion() {
    return this.getOrSet('clientGetQuestion', getQuestion)
  }

}
