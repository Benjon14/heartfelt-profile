import { Card } from "@/components/ui/card";
import { Camera, Coffee, Music, Plane, Book, Bike } from "lucide-react";

const Hobbies = () => {
  const hobbies = [
    {
      icon: Bike,
      title: "Motorcycle Riding",
      description: "Hitting the open road and feeling the freedom on two wheels",
    },
    {
      icon: Plane,
      title: "Travel & Adventure",
      description: "Exploring new places and discovering hidden gems across the country",
    },
    {
      icon: Camera,
      title: "Road Photography",
      description: "Capturing beautiful landscapes and memories from my travels",
    },
    {
      icon: Coffee,
      title: "Coffee Stops",
      description: "Finding the best local cafes during my road trips",
    },
    {
      icon: Music,
      title: "Riding Playlists",
      description: "Curating the perfect soundtrack for every journey",
    },
    {
      icon: Book,
      title: "Tech Learning",
      description: "Constantly expanding my IT knowledge through books and courses",
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
