import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  percentage: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      skills: [
        { name: "Java", percentage: 95 },
        { name: "Python", percentage: 85 },
        { name: "HTML/CSS", percentage: 95 },
        { name: "SQL", percentage: 80 },
        { name: "JavaScript", percentage: 65 },
        { name: "TypeScript", percentage: 35 },
        
        
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "Spring", percentage: 80},
        { name: "Spring Boot", percentage:80 },
        { name: "hibernate" , percentage: 70},
        { name: "JSP", percentage: 70},
        { name: "Servlet", percentage: 70},
        { name: "Boostrap", percentage: 70},
        { name: "JDBC", percentage:75},
        { name: "React", percentage: 30 },
        { name: "Node.js", percentage: 50 },
        { name: "Express", percentage: 45 },

      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", percentage: 50 },
        { name: "MySQL", percentage: 75 },
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", percentage: 90 },
        { name: "RESTful APIs", percentage: 90 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            My technical skills and proficiency levels across various technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className="p-6 bg-card border-border card-shadow hover:glow transition-smooth animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-6 text-primary flex items-center">
                <span className="w-1 h-6 bg-primary rounded-full mr-3" />
                {category.title}
              </h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className="space-y-2 animate-fade-in"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm font-semibold text-primary">
                        {skill.percentage}%
                      </span>
                    </div>
                    <Progress 
                      value={skill.percentage} 
                      className="h-2"
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
