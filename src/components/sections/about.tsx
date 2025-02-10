import { SkillsCarousel } from "@/components/skills-carousel";
import { Typography } from "@/components/typography";
import { education, experience } from "@/data";

export const About = () => {
  return (
    <section className="flex flex-col space-y-8 py-4">
      <Typography variant="h1" underline>
        📝 About Me
      </Typography>
      <div className="flex flex-col space-y-6">
        <Typography variant="h2">Summary</Typography>
        <p className="text-lg text-muted-foreground">
          Enthusiastic and results-driven freelance developer with a solid background in web development. Passionate
          about crafting responsive and efficient web solutions, dedicated to delivering high-quality work. Seeking
          opportunities to leverage my skills and expertise in innovative projects.
        </p>
      </div>
      <div className="flex flex-col space-y-6">
        <Typography variant="h2">Education</Typography>
        <div className="flex flex-col gap-3">
          {education.map(item => (
            <div key={item.title} className="flex flex-col space-y-2 border-l-4 border-blue-deep pl-4">
              <Typography variant="h3">{item.title}</Typography>
              <p className="text-md text-muted-foreground">{item.subtitle}</p>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col space-y-6">
        <Typography variant="h2">Work Experience</Typography>
        <div className="flex flex-col gap-3">
          {experience.map(item => (
            <div key={item.title} className="flex flex-col space-y-2 border-l-4 border-blue-deep pl-4">
              <Typography variant="h3">{item.title}</Typography>
              <p className="text-md text-muted-foreground">{item.subtitle}</p>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col space-y-6">
        <Typography variant="h2">My Skills</Typography>
        <SkillsCarousel />
      </div>
    </section>
  );
};
