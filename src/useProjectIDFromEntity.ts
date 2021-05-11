import { useEntity } from '@backstage/plugin-catalog-react';

export const useProjectIDFromEntity = () => {
  const { entity } = useEntity();
  return  entity.metadata.annotations["gitlab/projectID"];
};