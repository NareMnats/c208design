import Link from "next/link";

type ProjectCardProps = {
  title: string;
  category: string;
  href: string;
  imageClassName?: string;
};

export default function ProjectCard({
  title,
  category,
  href,
  imageClassName = "",
}: ProjectCardProps) {
  return (
    <Link href={href} className="group block">
      <div
        className={`aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-[#f3f3f3] sm:rounded-[1.5rem] ${imageClassName}`}
      >
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.02]" />
      </div>

      <div className="mt-4 flex items-end justify-between gap-4 sm:mt-5">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-[#111111] sm:text-2xl">
            {title}
          </h3>

          <p className="mt-1 text-sm text-black/55">{category}</p>
        </div>

        <span
          aria-hidden="true"
          className="shrink-0 pb-1 text-xl transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      </div>
    </Link>
  );
}