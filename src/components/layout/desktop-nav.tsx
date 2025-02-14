import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { links } from "@/data";
import cn from "@/lib/clsx";
import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

export const DesktopNav = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const isActive = useMemo(
    () => (path: string) => {
      return pathname === path;
    },
    [pathname]
  );

  return (
    <div className="hidden items-center space-x-4 md:flex">
      <nav className="flex space-x-6 font-medium">
        {links.map(link => (
          <Link
            key={link.path}
            to={link.path}
            className={cn(isActive(link.path) && "text-blue-atlantic", "hover:text-blue-deep")}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <Separator orientation="vertical" className="h-8" />
      <div className="flex items-center space-x-1">
        <ModeToggle />
        <Link to="https://github.com/panntod" target="_blank" aria-label="GitHub repository">
          <Button variant="ghost" size="icon" aria-label="GitHub repository">
            <span className="icon-[tabler--brand-github] size-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
};
