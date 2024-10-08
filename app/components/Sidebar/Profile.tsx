import { LogOut } from "lucide-react";

export function Profile() {
  return (
    <div className="grid-cols-profile">
      <img
        src="https://github.com/jose15000.png"
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold ">José Henrique</span>
        <span className="truncate text-sm text-zinc-500">
          jose15000henrique@outlook.com
        </span>
      </div>
      <button type="button" className="ml-auto rounded-md p-2">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  );
}
