import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "primary" | "secondary" | "text";

type BaseProps = {
  variant: ButtonVariant;
  iconAfter?: ReactNode;
  className?: string;
  children?: ReactNode;
};

type ButtonProps = BaseProps & { href?: string } & Omit<
    AnchorHTMLAttributes<HTMLAnchorElement> &
      ButtonHTMLAttributes<HTMLButtonElement>,
    keyof BaseProps
  >;

const Button = (props: ButtonProps) => {
  const { className, children, variant, iconAfter, ...rest } = props;

  const classes = twMerge(
    "h-11 px-6 rounded-xl border border-lavender-500 uppercase inline-flex items-center gap-2 transition duration-500 relative group/button",
    variant === "primary" && "bg-lavender-500 text-white",
    variant === "secondary" && "hover:bg-lavender-500 hover:text-white",
    variant === "text" &&
      "h-auto px-0 border-transparent after:transition-all after:duration-500 after:content-[''] after:h-px after:w-0 after:absolute after:top-full after:bg-lavender-500 hover:after:w-full",
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {iconAfter && <span>{iconAfter}</span>}
    </>
  );

  if (props.href !== undefined) {
    return (
      <a href={props.href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
};

export default Button;
