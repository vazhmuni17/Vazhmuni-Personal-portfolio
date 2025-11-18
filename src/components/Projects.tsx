import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
  {
  title: "Movie Ticket Booking System",
  description:
    "A full-stack movie ticket booking platform with secure authentication, movie search, ticket reservations, and integrated online payments.",
  tags: ["Java", "Spring Boot", "MySQL", "JWT", "Stripe API"],
  github: "#",
  demo: "#"
},
{
  title: "COVID-19 Data Analysis Platform",
  description:
    "A Spring Boot web application that collects, stores, and visualizes COVID-19 data using REST APIs and MySQL for statistical insights.",
  tags: ["Java", "Spring Boot", "Spring Data JPA", "REST API", "MySQL"],
  github: "#",
  demo: "#"
},
{
  title: "Student Success Prediction (ML)",
  description:
    "Machine learning models built to identify factors influencing students' academic outcomes using classification algorithms and feature engineering.",
  tags: ["Python", "Scikit-learn", "Pandas", "TensorFlow", "Matplotlib"],
  github: "#",
  demo: "#"
}

  ];

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Some of my recent work and side projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="p-6 bg-card border-border card-shadow hover:glow transition-smooth group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-border hover:bg-secondary transition-smooth"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
