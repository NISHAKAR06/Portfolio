import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star } from "lucide-react";

const Project = () => {
  const featuredProjects = [
    {
      title: "AI-Powered Mental Wellness Platform",
      description:
        "AI-driven mental wellness platform for Indian youth, offering confidential, real-time AI voice sessions with 3D AI psychologist avatars that specialize in areas like academic stress and career anxiety, providing empathetic, personalized support.",
      technologies: [
        "React",
        "TypeScript",
        "Django",
        "FastAPI",
        "PostgreSQL",
        "Google Gemini AI",
      ],
      features: [
        "Real-time AI voice sessions",
        "3D AI psychologist avatars",
        "Emotion analysis and support",
        "Confidential mental health support",
        "Stigma-free access for Indian youth",
      ],
      githubUrl: "https://github.com/NISHAKAR06/Mental_Wellness_AI",
      demoUrl: "https://mentalwellnessai.vercel.app/",
      status: "AI/ML",
      gradient: "from-primary to-accent",
    },
    {
      title: "VoiceFusion AI",
      description:
        "AI-powered video dubbing system with Hindi lip-sync technology. Advanced neural networks for accurate voice synthesis and facial animation synchronization.",
      technologies: ["Python", "TensorFlow", "OpenCV", "Deep Learning", "NLP"],
      features: [
        "Real-time lip-sync generation",
        "Multi-language voice synthesis",
        "Facial animation mapping",
        "Advanced neural networks",
      ],
      githubUrl: "https://github.com/NISHAKAR06/VoiceFusionAi-ML",
      demoUrl: "#",
      status: "Featured",
      gradient: "from-accent to-success",
    },
    {
      title: "6-Axis Robotic Arm Control",
      description:
        "Real-time robotic control system with web interface. Built using React, Django, and WebSockets for seamless robot-human interaction.",
      technologies: ["React.js", "Django", "WebSockets", "Python", "Robotics"],
      features: [
        "Real-time control interface",
        "WebSocket communication",
        "3D visualization",
        "Safety protocols integration",
      ],
      githubUrl: "https://github.com/MITHRAN-BALACHANDER/6-axis",
      demoUrl: "#",
      status: "Engineering",
      gradient: "from-accent to-success",
    },
    {
      title: "AI Scholarship Portal",
      description:
        "Full-stack scholarship approval and monitoring system with Flask, MongoDB, and secure authentication. Intelligent matching algorithms for scholarship recommendations.",
      technologies: ["Flask", "MongoDB", "React", "Python", "Machine Learning"],
      features: [
        "Intelligent matching system",
        "Secure authentication",
        "Real-time monitoring",
        "Automated approval workflows",
      ],
      githubUrl:
        "https://github.com/NISHAKAR06/AI-POWERED-SCHOLARSHIP-APPROVAL-AND-MONITORING-SYSTEM-FOR-PMSSS",
      demoUrl: "#",
      status: "Full-Stack",
      gradient: "from-success to-primary",
    },
  ];

  return (
    <section id="project" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of innovative AI solutions and full-stack applications
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card
              key={project.title}
              className="portfolio-card hover-lift group animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                {/* Project Header */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.gradient} text-white`}
                  >
                    {project.status}
                  </div>
                  <Star className="w-4 h-4 text-accent" />
                </div>

                {/* Project Title & Description */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="space-y-2 mb-4">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-xs text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-background/50 border border-border rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 hover-lift"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 hover-lift bg-gradient-to-r from-primary to-accent text-white"
                    asChild
                  >
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More Projects Section */}
        <div className="text-center animate-fade-in">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-semibold mb-4">
              Explore More Projects
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Check out my complete portfolio on GitHub to see more innovative
              projects, contributions, and experimental work in AI, machine
              learning, and web development.
            </p>
            <Button
              size="lg"
              className="hero-gradient text-white hover-lift px-8 py-3"
              asChild
            >
              <a
                href="https://github.com/NISHAKAR06?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                View All Projects
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
