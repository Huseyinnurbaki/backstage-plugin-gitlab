import { DiscoveryApi } from "@backstage/core";
import { GitlabApi } from "./gitlabApi";
import { useProjectIDFromEntity } from '../useProjectIDFromEntity';




export class GitlabClient implements GitlabApi {
  discoveryApi: DiscoveryApi;
  baseUrl: string;
  accessToken: string;
  projectId: string;
constructor({
  discoveryApi,
  baseUrl = "gitlab.com",
  accessToken = "123",
}: {
  discoveryApi: DiscoveryApi;
  baseUrl?: string;
  accessToken?: string;
  projectId?: string;
  }) {
  this.discoveryApi = discoveryApi;
  this.baseUrl = baseUrl;
  this.accessToken = accessToken;
  this.projectId = useProjectIDFromEntity();;
}


  async getPipelines() {
    
    const path = `${this.baseUrl}/api/v4/projects/${this.projectId}/jobs`

      const response = await fetch(path, {
        headers: {
          'PRIVATE-TOKEN': this.accessToken,
        },
      });
      const data = await response.json();

      return {pipelines: data};
  }
}