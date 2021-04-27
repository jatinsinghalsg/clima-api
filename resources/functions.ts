export default {
  token: {
    handler: 'handler.getSubscribedOrganizations',
    events: [
      {
        http: {
          method: 'GET',
          path:
            'habitats/{habitatId}/instruments/{instrumentId}/organizationBreakdown',
          cors: true,
        },
      },
    ],
  },
};
