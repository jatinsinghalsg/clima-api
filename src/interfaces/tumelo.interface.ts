export interface GetSubscribedOrganizationsRequest {
  habitatId: string;
  instrumentId: string;
}

export interface UpcomingAGMRequest {
  organizationId: string;
}

export interface GetAMGProposalsRequest {
  organizationId: string;
  meetingId: string;
}
export interface Tumelo {
  setAuthToken(): Promise<void>;
  getSubscribedOrganizations(
    req: GetSubscribedOrganizationsRequest
  ): Promise<any>;
  upcomingAGM(req: UpcomingAGMRequest): Promise<any>;
  getAGMProposals(req: GetAMGProposalsRequest): Promise<any>;
}
