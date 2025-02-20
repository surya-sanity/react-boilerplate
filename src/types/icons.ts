import { FunctionComponent, SVGProps } from "react";

export type IconComponentType = FunctionComponent<
  SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }
> | null;
