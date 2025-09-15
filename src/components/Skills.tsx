import { Card, CardContent } from "@/components/ui/card";
import { 
  Code2, Database, Brain, Globe, Server, GitBranch, 
  Layers, Cpu, Eye, MessageSquare, Zap, Users 
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["Python", "JavaScript", "TypeScript", "C", "SQL", "HTML", "CSS"],
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "AI/ML Frameworks",
      icon: Brain,
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Pandas", "NumPy"],
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: ["React.js", "Django", "FastAPI"],
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
      color: "text-destructive",
      bgColor: "bg-destructive/10"
    },
    {
      title: "Tools & Platforms",
      icon: GitBranch,
      skills: ["Git", "GitHub", "VS Code", "Google Colab", "Jupyter", "Docker"],
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "Cloud & DevOps",
      icon: Server,
      skills: ["AWS", "Google Cloud", "Azure", "Vercel"],
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      title: "Data Science",
      icon: Layers,
      skills: ["Matplotlib", "Seaborn", "Plotly", "Data Visualization", "Statistical Analysis"],
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      title: "AI Specializations",
      icon: Cpu,
      skills: ["NLP", "Computer Vision", "Deep Learning", "Neural Networks", "Model Deployment"],
      color: "text-destructive",
      bgColor: "bg-destructive/10"
    }
  ];

  const softSkills = [
    { name: "Leadership", icon: Users },
    { name: "Problem Solving", icon: Zap },
    { name: "Teamwork", icon: Users },
    { name: "Communication", icon: MessageSquare },
    { name: "Adaptability", icon: Eye },
    { name: "Time Management", icon: Cpu }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent, scalable, and impactful solutions
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="portfolio-card hover-lift animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-2 rounded-lg ${category.bgColor}`}>
                    <category.icon className={`w-5 h-5 ${category.color}`} />
                  </div>
                  <h3 className="font-semibold text-sm">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="text-sm text-muted-foreground bg-background/50 px-3 py-1 rounded-full border"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="animate-fade-in">
          <h3 className="text-2xl font-semibold text-center mb-8">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {softSkills.map((skill, index) => (
              <Card 
                key={skill.name} 
                className="portfolio-card hover-lift text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4">
                  <skill.icon className="w-8 h-8 mx-auto mb-2 text-primary group-hover:text-accent transition-colors" />
                  <p className="text-sm font-medium">{skill.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
