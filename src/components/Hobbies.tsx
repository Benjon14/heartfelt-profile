import { Card } from "@/components/ui/card";
import { Camera, Coffee, Music, Plane, Book, Dumbbell } from "lucide-react";

const Hobbies = () => {
  const hobbies = [
    {
      icon: Camera,
      title: "Photography",
      description: "Capturing moments and exploring the world through my lens",
    },
    {
      icon: Coffee,
      title: "Coffee Enthusiast",
      description: "Always on the hunt for the perfect brew and cozy cafes",
    },
    {
      icon: Music,
      title: "Music Production",
      description: "Creating beats and exploring different genres in my free time",
    },
    {
      icon: Plane,
      title: "Travel",
      description: "Exploring new cultures and collecting stories from around the world",
    },
    {
      icon: Book,
      title: "Reading",
      description: "Diving into sci-fi novels and tech philosophy books",
    },
    {
      icon: Dumbbell,
      title: "Fitness",
      description: "Staying active with gym sessions and outdoor adventures",
    },
  ];

  return (
    <section id="hobbies" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Hobbies & Interests
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            What I love doing when I'm not coding
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => {
              const Icon = hobby.icon;
              return (
                <Card
                  key={index}
                  className="p-6 shadow-soft hover:shadow-glow transition-smooth gradient-card border-0 group text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary via-secondary to-accent rounded-full mb-4 group-hover:scale-110 transition-smooth">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{hobby.title}</h3>
                  <p className="text-muted-foreground">{hobby.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
