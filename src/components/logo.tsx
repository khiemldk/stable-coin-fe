import * as React from 'react';
import Image, { type ImageProps } from 'next/image';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export interface LogoProps extends Omit<ImageProps, 'src' | 'width' | 'height' | 'alt'> {
  src?: string;
  width?: number;
  height?: number;
  alt?: string;
}

export const Logo: React.FC<LogoProps> = ({ className, ...props }) => (
  <p className={cn('!text-logo !bg-gradient-1 text-transparent !bg-clip-text  w-fit', className)}>LuxBid</p>
);
