import { Card } from "@/components/ui/card";
import { Code2, Database, Palette, Smartphone, Globe, GitBranch } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
      color: "from-primary to-secondary",
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: ["Node.js", "PostgreSQL", "REST APIs", "GraphQL"],
      color: "from-secondary to-accent",
    },
    {
      icon: Palette,
      title: "Design & UI/UX",
      skills: ["Figma", "Responsive Design", "Animations", "Accessibility"],
      color: "from-accent to-primary",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: ["React Native", "PWA", "iOS", "Android"],
      color: "from-primary to-accent",
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: ["HTML5", "CSS3", "JavaScript", "Webpack"],
      color: "from-secondary to-primary",
    },
    {
      icon: GitBranch,
      title: "Tools & Workflow",
      skills: ["Git", "CI/CD", "Docker", "Agile"],
      color: "from-accent to-secondary",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Technologies and tools I work with
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className="p-6 shadow-soft hover:shadow-glow transition-smooth gradient-card border-0 group"
                >
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl mb-4 group-hover:scale-110 transition-smooth`}
                  >
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-sm bg-muted rounded-full text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
