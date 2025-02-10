import { Layout } from "@/components/layout";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Layout>
      <section className="flex flex-col-reverse items-center justify-between space-x-6 py-12 lg:flex-row">
        <div className="flex flex-col items-center space-y-6 text-center lg:items-start lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-none tracking-tight">Pandhu A. Munjalindra</h1>
          <p className="text-xl text-muted-foreground">
            Software Engineer crafting innovative and impactful solutions.
          </p>

          <div className="flex space-x-4">
            <Link to="/projects">
              <Button className="text-primary-foreground" aria-label="View Projects">
                View Projects
              </Button>
            </Link>
            <Link to="mailto:munjalindra.pandhu@gmail.com">
              <Button variant="outline" className="gap-2" aria-label="Contact Me">
                Contact Me
                <span className="icon-[tabler--mail-fast] size-6" />
              </Button>
            </Link>
          </div>
        </div>

        <figure className="mb-4 w-full max-w-[260px] lg:max-w-[360px]">
          <img
            src="/brick-by-brick.gif"
            alt="Brick By Brick"
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
        </figure>
      </section>
      <About />
      <Projects featured />
    </Layout>
  );
};

export default HomePage;
