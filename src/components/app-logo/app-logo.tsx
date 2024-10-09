import { HTMLAttributes, memo } from "react";
import AppLogo from "app/assets/images/logo.png";
import { APP_NAME } from "app/env/env";

interface LogoProps extends HTMLAttributes<HTMLImageElement> {}

/**
 *
 * Logo, reusable logo component
 *
 */
const Logo: React.FunctionComponent<LogoProps> = memo((props: LogoProps) => {
  // props
  const { className, ...restProps } = props;

  return <img alt={APP_NAME ?? "logo"} src={AppLogo} {...restProps} />;
});

export default Logo;
