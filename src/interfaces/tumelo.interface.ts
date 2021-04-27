export interface Tumelo {
  setAuthToken(): Promise<void>;
  getSubscribedOrganizations(): Promise<any>;
  /* getUpcomingAGM(): Promise<any>;
  getProposals(): Promise<any>; */
}