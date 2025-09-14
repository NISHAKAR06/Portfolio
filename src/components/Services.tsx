import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Code, Zap, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "AI Model Building",
      icon: Brain,
      description: "Custom AI/ML solutions including NLP models, computer vision systems, and real-time AI applications tailored to your specific needs.",
      features: [
        "Natural Language Processing",
        "Computer Vision & Image Recognition",
        "Deep Learning & Neural Networks",
        "Real-time AI Solutions",
        "Model Optimization & Deployment"
      ],
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20"
    },
    {
      title: "Full-Stack Development",
      icon: Code,
      description: "End-to-end web application development with modern technologies, creating scalable and secure solutions from frontend to backend.",
      features: [
        "React.js & Modern Frontend",
        "Django & FastAPI Backend",
        "Database Design & Integration",
        "API Development & Integration",
        "Responsive Web Design"
      ],
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/20"
    },
    {
      title: "AI Integration & Automation",
      icon: Zap,
      description: "Seamlessly integrate AI capabilities into existing systems and automate complex processes with intelligent solutions.",
      features: [
        "AI-Powered Automation",
        "Robotic Control Systems",
        "IoT Integration",
        "Real-time Data Processing",
        "System Integration & APIs"
      ],
      color: "text-success",
      bgColor: "bg-success/10",
      borderColor: "border-success/20"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive AI and development services to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`portfolio-card hover-lift group border-2 ${service.borderColor} animate-scale-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className={`inline-flex p-4 rounded-2xl ${service.bgColor} mb-4`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${service.bgColor}`}></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  onClick={scrollToContact}
                  className={`w-full group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:text-white transition-all duration-300`}
                  variant="outline"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's collaborate to create innovative AI solutions and robust applications 
              that meet your specific requirements and exceed your expectations.
            </p>
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="hero-gradient text-white hover-lift px-8 py-3"
            >
              Let's Work Together
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;