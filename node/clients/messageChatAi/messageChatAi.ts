import { ExternalClient, InstanceOptions, IOContext } from '@vtex/api'



export class MessageChatAi extends ExternalClient {
    constructor(ctx: IOContext, options?: InstanceOptions) {
        super(``,
            ctx,
            {
                ...(options ?? {}),
                headers: {
                    ...(options?.headers ?? {}),
                    'X-Vtex-Use-Https': 'true',
                },
            })
    }


    public async sendMessageChatAi(request: any) {
        try {
            const URI = "https://txm8z41l82.execute-api.us-east-1.amazonaws.com/dev/send-message";
            console.log(`POST of MessageChatAi at ${URI}`)
            const responseAPI: any = await this.http.post(URI, request);
            console.log(await responseAPI)

            return responseAPI
        } catch (e) {
            console.log(e.response?.data)
            const response = e.response?.data

            return response
        }
    }

};