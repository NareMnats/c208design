import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[1400px] px-[22px] sm:px-[31px] md:px-11 lg:px-12 ${className}`}
    >
      {children}
    </div>
  );
}
