import { configApiRef, createApiFactory, createPlugin, createRoutableExtension, discoveryApiRef } from '@backstage/core';
import { GitlabApiRef, GitlabClient } from './api';

import { rootRouteRef } from './routes';


export const gitlabPlugin = createPlugin({
  id: 'gitlab',
  apis: [
    createApiFactory({
      api: GitlabApiRef,
      deps: { configApi: configApiRef, discoveryApi: discoveryApiRef },
      factory: ({ configApi, discoveryApi }) => new GitlabClient({
        discoveryApi,
        baseUrl: configApi.getOptionalString("gitlab.baseUrl"),
        accessToken: configApi.getString("gitlab.accessToken"),
        projectId: configApi.getString("gitlab.projectId"),
      })
    })
  ],
  routes: {
    root: rootRouteRef,
  },
});

export const GitlabPage = gitlabPlugin.provide(
  createRoutableExtension({
    component: () =>
      import('./components/GitlabCard').then(m => m.GitlabCard),
    mountPoint: rootRouteRef,
  }),
);
