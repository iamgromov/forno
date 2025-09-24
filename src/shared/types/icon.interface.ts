import { type DetailedHTMLProps, type HTMLAttributes } from 'react';

export interface Icon extends DetailedHTMLProps<HTMLAttributes<SVGSVGElement>, SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  variant?: string;
}
