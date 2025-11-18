import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            A passionate developer with a love for creating elegant solutions to complex problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-card border-border card-shadow hover:glow transition-smooth animate-slide-up">
            <h3 className="text-xl font-semibold mb-4 text-primary">My Story</h3>
            <p className="text-muted-foreground leading-relaxed">
             I’m an enthusiastic and dedicated developer, passionate about building clean, user-friendly, and impactful web experiences. As a fresher, I’ve developed several projects through internships and personal learning, working with real-world concepts like full-stack development, UI design, and machine learning applications.
            </p>
          </Card>

          <Card className="p-8 bg-card border-border card-shadow hover:glow transition-smooth animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-xl font-semibold mb-4 text-primary">What I Do</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">▹</span>
                <span>Full-stack web application development</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">▹</span>
                <span>Modern UI/UX design and implementation</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">▹</span>
                <span>API design and backend architecture</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">▹</span>
                <span>Performance optimization and scalability</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};
