export const sendMessageChatAi = async (
  _: any,
  { data }: { data: any },
  { clients: { clientChatAi: clientChatAi } }: Context
) => clientChatAi.sendMessageChatAi(data)
