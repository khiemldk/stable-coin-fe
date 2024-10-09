import React from 'react';

export const Show = (props: { when: boolean; children: React.ReactNode }) => {
  return <>{props.when ? <>{props.children}</> : null}</>;
};
