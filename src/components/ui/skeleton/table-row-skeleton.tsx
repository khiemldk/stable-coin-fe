import React from 'react';
import { Skeleton } from '@nextui-org/skeleton';

export const TableRowSkeleton = () => {
  return [1, 2, 3, 4, 5].map((row, index) => (
    <Skeleton className="w-full  bg-background2 h-[3.375rem] py-3 px-5 rounded-[1.25rem]"></Skeleton>
  ));
};
