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
      className={`site-container mx-auto w-full max-w-[1400px] ${className}`}
    >
      {children}
    </div>
  );
}
