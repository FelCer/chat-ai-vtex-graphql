import { ExternalClient, InstanceOptions, IOContext } from '@vtex/api'



export class getQuestion extends ExternalClient {
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


    public async getQuestion(request: any) {
        try {
            const URI = "https://txm8z41l82.execute-api.us-east-1.amazonaws.com/dev/get-questions";
            console.log(`Get of getQuestion at ${URI}`)
            const responseAPI: any = await this.http.get(URI, request);
            console.log(await responseAPI)

            return responseAPI
        } catch (e) {
            console.log(e.response?.data)
            const response = e.response?.data

            return response
        }
    }

};