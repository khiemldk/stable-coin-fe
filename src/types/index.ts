import { FC, PropsWithChildren, type SVGProps } from 'react';

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
export type FCC<P = {}> = FC<PropsWithChildren<P>>;
