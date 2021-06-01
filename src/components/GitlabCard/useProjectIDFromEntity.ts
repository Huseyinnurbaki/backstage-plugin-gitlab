import { useEntity } from '@backstage/plugin-catalog-react';

export const useProjectIDFromEntity = () => {
  const { entity } = useEntity();
  const annotations = entity?.metadata?.annotations;
  return annotations?.["gitlab/projectID"] ?? '';


  // return entity.metadata.annotations?.["gitlab/projectID"] ?? '';
};