import { ChevronDown } from "lucide-react";
import { ElementType } from "react";

export interface NavItemProps {
  text: string;
  icon: ElementType;
}
export function NavItem({ text, icon: Icon }: NavItemProps) {
  return (
    <a
      href=""
      className="flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50"
    >
      <Icon className="h-5 w-5 text-zinc-500" />
      <span className="font-medium text-sm group-hover:text-violet-500">
        {text}
      </span>
      <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-300" />
    </a>
  );
}
