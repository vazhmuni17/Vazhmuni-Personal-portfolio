import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

export const Education = () => {
  const education = [
    {
      degree: "MCA",
      institution: "Thiruvalluvar College of engineering and technology",
      duration: "2023 - 2025",
      achievements: [
        "Dean's List all semesters",
        "Best Final Year Project Award",
        "GPA: 9.0/10.0"
      ]
    },
    {
      degree: "BCA",
      institution: "King Nandhivaruman arts & science College",
      duration: "2020 - 2023",
	achievements: [
        "Dean's List all semesters",
        "Best Final Year Project Award",
        "GPA: 9.5/10.0"
      
     
      ]
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-lg transition-smooth animate-fade-in border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                      <CardDescription className="text-base font-medium text-foreground/80">
                        {edu.institution}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{edu.duration}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{edu.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground">Key Achievements:</p>
                  <ul className="list-disc list-inside space-y-1">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};