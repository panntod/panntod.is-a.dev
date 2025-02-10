import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { links } from "@/data";
import { Link } from "react-router-dom";

export const MobileNav = () => {
  return (
    <div className="flex items-center md:hidden space-x-1">
      <ModeToggle />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <span className="icon-[tabler--align-right] size-5" />
            <span className="sr-only">Dropdown Menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-[150px]">
          {links.map(link => (
            <Link key={link.path} to={link.path}>
              <DropdownMenuItem>{link.label}</DropdownMenuItem>
            </Link>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link to="https://github.com/panntod/Personal-Website" target="_blank" aria-label="GitHub repository">
              View on GitHub
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
