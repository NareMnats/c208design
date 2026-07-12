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
      className={`mx-auto w-full max-w-[1400px] px-5 sm:px-7 md:px-10 lg:px-12 ${className}`}
    >
      {children}
    </div>
  );
}