import React from 'react';
import Image from 'next/image';

import { cn } from '@/lib/utils';

interface Props {
  src: string;
  className?: string;
}
export const Avatar = ({ src, className }: Props) => {
  return <Image className={cn('rounded-full', className)} width={40} height={40} src={src} alt="" />;
};
