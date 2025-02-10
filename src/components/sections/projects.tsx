import { Typography } from "@/components/typography";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { projects } from "@/data";
import cn from "@/lib/clsx";
import { Link } from "react-router-dom";

export interface ProjectsSectionProps {
  featured?: boolean;
}

export const Projects = ({ featured }: ProjectsSectionProps) => {
  return (
    <section className="flex flex-col space-y-8 py-4">
      <div className="flex items-center justify-between border-b pb-4">
        <Typography variant="h1">🚀 {featured && "Featured "}Projects</Typography>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>View on GitHub</TooltipTrigger>
            <TooltipContent aria-label="View on GitHub">
              <Link
                to="https://github.com/panntod?tab=repositories"
                className="flex items-center space-x-2"
                target="_blank"
                aria-label="View on GitHub"
              >
                <p className="hidden text-sm md:block">View on GitHub</p>
                <span className="icon-[tabler--arrow-right] size-6" />
              </Link>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <h2 className="text-lg text-muted-foreground">
        Here are some of the projects I&apos;ve worked on. You can find more on my GitHub profile.
      </h2>

      <div className="flex h-full w-full flex-wrap justify-between gap-4">
        {projects
          .filter(project => (featured ? project.isFeatured : true))
          .map(project => (
            <Card key={project.title} className={project.isFullWidth ? "w-full" : "md:basis-[calc(50%-0.5rem)]"}>
              <div className={cn(`flex h-full flex-col justify-between`, project.isFullWidth && "md:flex-row")}>
                <div className={cn(project.isFullWidth && "basis-1/2")}>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>{project.title}</CardTitle>
                    {project.note && (
                      <Badge variant="secondary" className="rounded-full">
                        {project.note}
                      </Badge>
                    )}
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{project.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="flex gap-4">
                    {project.status.map(({ icon, link, text }, index) =>
                      link ? (
                        <Link
                          key={index}
                          to={link}
                          target="_blank"
                          className="flex items-center gap-1 hover:underline hover:text-blue-deep"
                        >
                          <p>{text}</p>
                          {icon && <span className={icon} />}
                        </Link>
                      ) : (
                        <div key={index} className="flex items-center gap-1">
                          <p>{text}</p>
                          {icon && <span className={icon} />}
                        </div>
                      )
                    )}
                  </CardFooter>
                </div>

                <figure
                  className={cn(
                    `px-6 w-full max-w-[480px] md:max-w-[600px]`,
                    project.isFullWidth ? "basis-1/2 py-6 md:pr-6" : "pb-6"
                  )}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    width={1960}
                    height={868}
                    className="rounded object-contain w-full h-full"
                  />
                </figure>
              </div>
            </Card>
          ))}
      </div>
    </section>
  );
};
