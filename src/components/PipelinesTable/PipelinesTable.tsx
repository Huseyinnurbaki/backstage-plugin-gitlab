import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableColumn, Progress } from '@backstage/core';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles({
  avatar: {
    height: 32,
    width: 32,
    borderRadius: '50%',
  },
});

type Pipeline = {
  pipeline: {
    id: number;
  };
  user: {
    id: number;
    name: string;
    avatar_url: string;
  };
  commit: {
    title: string;
    id: number;
  };
  status: string;
  id: number;
  finished_at: string;
};

type DenseTableProps = {
  pipelines: Pipeline[];
};

export const DenseTable = ({ pipelines }: DenseTableProps) => {
  const classes = useStyles();

  const columns: TableColumn[] = [
    { title: 'Avatar', field: 'avatar' },
    { title: 'Author', field: 'author' },
    { title: 'Status', field: 'status' },
    { title: 'ID', field: 'id' },
    { title: 'Finished At', field: 'finished_at' },
    { title: 'Commit Message', field: 'message' },
  ];

  const data = pipelines?.map(pipeline => {
    return {
      avatar: (
        <img
          src={pipeline.user?.avatar_url}
          className={classes.avatar}
          alt={pipeline.user?.name}
        />
      ),
      author: pipeline.user?.name,
      status: pipeline.status,
      id: pipeline.id,
      message: pipeline.commit?.title,
      finished_at: pipeline.finished_at,
    };
  });

  return (
    <Table
      title="Pipelines"
      options={{ search: false, paging: false }}
      columns={columns}
      data={data}
    />
  );
};

export const PipelinesTable = (props: any) => {
  if (props?.loading) {
    return <Progress />;
  } else if (props?.error) {
    return <Alert severity="error">{props?.error?.message}</Alert>;
  }

  return <DenseTable pipelines={props?.pipelines} />;
};