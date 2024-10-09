import { Card, Skeleton } from '@nextui-org/react';

import { cn } from '@/lib/utils';

import { HStack } from '../h-stack';
import { VStack } from '../v-stack';

interface Props {
  className?: string;
}
export default function CardSkeleton({ className }: Props) {
  return (
    <Card className={cn('rounded-[1.25rem] overflow-hidden bg-background2 aspect-[330/469]', className)}>
      <Skeleton className="w-full aspect-[330/295]  bg-default-300"></Skeleton>
      <VStack className="bg-background2 px-[1.875rem] pt-5 pb-[1.5625rem] gap-[1.5625rem]">
        <VStack className="gap-[.3125rem]">
          <Skeleton className="w-full h-[30.81px] rounded-lg"></Skeleton>
          <HStack spacing={12} className="h-6">
            <Skeleton className="w-6 aspect-square rounded-full bg-default-300"></Skeleton>
            <Skeleton className="w-3/5 h-[1.4rem] rounded-lg"></Skeleton>
          </HStack>
        </VStack>
        <HStack pos={'apart'}>
          <Skeleton className="w-2/5 h-11 rounded-lg"></Skeleton>
          <Skeleton className="w-2/5 h-11 rounded-lg"></Skeleton>
        </HStack>
      </VStack>
    </Card>
  );
}
