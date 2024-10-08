import { Logo } from "./Logo";
import {
  BarChart,
  CheckSquare,
  Cog,
  FlagIcon,
  HomeIcon,
  LifeBuoy,
  Search,
  SquareStack,
  Users,
} from "lucide-react";
import { NavItem } from "./MainNavigation/Navitem";
import { UsedSpaceWidget } from "./usedSpaceWidget";
import { Profile } from "./Profile";
import { InputControl, InputPrefix, InputRoot } from "../Input";

export function Sidebar() {
  return (
    <>
      <aside className=" space-y-6 mx-1 flex-col border-r border-zinc-200 px-5 py-8 ">
        <Logo />

        <InputRoot>
          <InputPrefix>
            <Search className="w-5 h-5  text-zinc-500" />
          </InputPrefix>
          <InputControl placeholder="search" />
        </InputRoot>
        <nav className="space-y-0.5">
          <NavItem text="Home" icon={HomeIcon} />
          <NavItem text="Dashboard" icon={BarChart} />
          <NavItem text="Projects" icon={SquareStack} />
          <NavItem text="Tasks" icon={CheckSquare} />
          <NavItem text="Reporting" icon={FlagIcon} />
          <NavItem text="Users" icon={Users} />
        </nav>
        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
            <NavItem text="Support" icon={LifeBuoy} />
            <NavItem text="Settings" icon={Cog} />
          </nav>
        </div>
        <UsedSpaceWidget />
        <div className="h-px bg-zinc-200"></div>
        <Profile />
      </aside>
    </>
  );
}
