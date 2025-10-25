import { Card } from "@/components/ui/card";
import { Heart, Lightbulb, Rocket } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Getting to know the person behind the code
          </p>

          <Card className="p-8 md:p-12 shadow-soft gradient-card border-0 mb-8">
            <p className="text-lg leading-relaxed text-foreground mb-6">
              Hey there! I'm Rogem Lanuza, an IT student at Lapu-Lapu City College with a passion
              for technology and problem-solving. My journey into tech started with curiosity and
              has evolved into a deep love for creating solutions that make a difference.
            </p>
            <p className="text-lg leading-relaxed text-foreground mb-6">
              As I pursue my degree in Information Technology, I'm constantly learning new skills
              and working on projects that challenge me to grow. What drives me isn't just writing
              code—it's understanding how technology can improve people's lives and solve real-world problems.
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              When I'm not studying or coding, you'll find me on the road with my motorcycle,
              exploring new places and enjoying the freedom of travel. I believe in balancing hard
              work with adventure and making the most of every opportunity to learn and grow.
            </p>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center shadow-soft hover:shadow-glow transition-smooth gradient-card border-0">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mb-4">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Passionate</h3>
              <p className="text-muted-foreground">
                Dedicated to crafting experiences that users love
              </p>
            </Card>

            <Card className="p-6 text-center shadow-soft hover:shadow-glow transition-smooth gradient-card border-0">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mb-4">
                <Lightbulb className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Creative</h3>
              <p className="text-muted-foreground">
                Always finding innovative solutions to complex problems
              </p>
            </Card>

            <Card className="p-6 text-center shadow-soft hover:shadow-glow transition-smooth gradient-card border-0">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full mb-4">
                <Rocket className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ambitious</h3>
              <p className="text-muted-foreground">
                Constantly learning and pushing boundaries
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
