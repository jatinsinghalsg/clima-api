export default {
    token: {
        handler: 'handler.token',
        events: [
            {
                http: {
                    method: 'GET',
                    path: 'token/generate',
                    cors: true
                }
            }
        ]
    },
}
