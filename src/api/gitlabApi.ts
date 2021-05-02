import { createApiRef } from "@backstage/core";

export const GitlabApiRef = createApiRef<GitlabApi>({
    id: "plugin.gitlab.service",
    description: "Used by the Gitlab plugin to make requests"
});

export type GitlabApi = {
    getPipelines(): Promise<any>;
    // getPipelines(): Promise<Pipelines | undefined>;
};

export interface Pipelines {
    pipelines: any;
}
