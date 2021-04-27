export interface GetSubscribedOrganizationsRequest {
  habitatId: string;
  instrumentId: string;
}

export interface Tumelo {
  setAuthToken(): Promise<void>;
  getSubscribedOrganizations(req: GetSubscribedOrganizationsRequest): Promise<any>;
  /* getUpcomingAGM(): Promise<any>;
  getProposals(): Promise<any>; */
}
