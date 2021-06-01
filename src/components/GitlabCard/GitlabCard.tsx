import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import {
  InfoCard,
  Page,
  Content,
  useApi,
} from '@backstage/core';
import { PipelinesTable } from '../PipelinesTable';
import { useAsync } from 'react-use';
import { GitlabApiRef } from '../../api';
import { useProjectIDFromEntity } from './useProjectIDFromEntity';


export const GitlabCard = () => {
  const gitlabApi = useApi(GitlabApiRef);

  const projectID = useProjectIDFromEntity();
  

  const { value, error, loading } = useAsync(
    async () => gitlabApi.getPipelines(projectID),
    [gitlabApi],
  );

  return (
  <Page themeId="tool">
    {/* <Header title="Welcome to gitlab!" subtitle="Jobs are listed here">
      <HeaderLabel label="Owner" value="Eteration" />
      <HeaderLabel label="Lifecycle" value="Alpha" />
    </Header> */}
    <Content>
      {/* <ContentHeader title="Plugin title">
        <SupportButton>A description of your plugin goes here.</SupportButton>
      </ContentHeader> */}
      <Grid container spacing={3} direction="column">
        <Grid item>
          <InfoCard title="Information card">
            <Typography variant="body1">
              Previous Jobs
            </Typography>
          </InfoCard>
        </Grid>
        <Grid item>
            <PipelinesTable pipelines={value?.pipelines} loading={loading} error={error} />
        </Grid>
      </Grid>
    </Content>
  </Page>
)};
