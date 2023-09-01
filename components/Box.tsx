import { twMerge } from "tailwind-merge";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

function Box(props: BoxProps) {
  return (
    <div
      className={twMerge(
        `bg-neutral-900 rounded-lg h-fit w-full`,
        props.className
      )}
    >
      {props.children}
    </div>
  );
}

export default Box;
