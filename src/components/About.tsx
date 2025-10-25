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
              Hey there! I'm a passionate developer who believes that great software is built with
              both technical excellence and genuine care. My journey into tech started with curiosity
              and has evolved into a deep love for creating solutions that make people's lives better.
            </p>
            <p className="text-lg leading-relaxed text-foreground mb-6">
              With a background in full-stack development, I've had the privilege of working on
              projects ranging from small startups to large-scale applications. What drives me isn't
              just writing clean code—it's the impact that code has on real people.
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or sharing what I've learned with the developer community. I
              believe in continuous learning and the power of collaboration to solve complex problems.
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
