export default {
  token: {
    handler: 'handler.getSubscribedOrganizations',
    events: [
      {
        http: {
          method: 'GET',
          path: 'tumelo/subscribed/organizations',
          cors: true,
        },
      },
    ],
  },
};
