import { DiscoveryApi } from "@backstage/core";
import { GitlabApi } from "./gitlabApi";


export class GitlabClient implements GitlabApi {
  discoveryApi: DiscoveryApi;
  baseUrl: string;
  accessToken: string;
constructor({
  discoveryApi,
  baseUrl = "gitlab.com",
  accessToken = "123",
}: {
  discoveryApi: DiscoveryApi;
  baseUrl?: string;
  accessToken?: string;
  }) {
  this.discoveryApi = discoveryApi;
  this.baseUrl = baseUrl;
  this.accessToken = accessToken;
}


  async getPipelines(projectID: string) {
    if(!projectID) {
      return []
    };
    
    const path = `${this.baseUrl}/api/v4/projects/${projectID}/jobs`

      const response = await fetch(path, {
        headers: {
          'PRIVATE-TOKEN': this.accessToken,
        },
      });
      const data = await response.json();

      return {pipelines: data};
  }
}