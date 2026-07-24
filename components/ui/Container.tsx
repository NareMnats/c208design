import type { HTMLAttributes, ReactNode } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export default function Container({
  children,
  className = "",
  ...props
}: ContainerProps) {
  return (
    <div
      {...props}
      className={`mx-auto w-full max-w-[1400px] px-[22px] sm:px-[31px] md:px-11 lg:px-12 ${className}`}
    >
      {children}
    </div>
  );
}
