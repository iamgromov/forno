import { type DetailedHTMLProps, type HTMLAttributes } from 'react';

export interface IconProps extends DetailedHTMLProps<HTMLAttributes<SVGSVGElement>, SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  variant?: string;
}
