export default {
  getSubscribedOrganizations: {
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
  upcomingAGM: {
    handler: 'handler.upcomingAGM',
    events: [
      {
        http: {
          method: 'GET',
          path: 'organizations/{organizationId}/generalMeetings',
          cors: true,
        },
      },
    ],
  },
};
