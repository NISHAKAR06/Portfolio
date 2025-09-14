import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about creating intelligent solutions that bridge the gap between 
            artificial intelligence and real-world applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6 animate-slide-up">
            <div>
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As an AI/ML engineering student at Sri Shakthi Institute of Engineering and Technology, 
                I'm passionate about developing innovative solutions that combine artificial intelligence 
                with practical applications. My expertise spans across machine learning, deep learning, 
                natural language processing, and full-stack web development.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in creating end-to-end AI systems, from data preprocessing and model 
                development to deployment and integration. My projects include real-time AI applications, 
                robotic control systems, and intelligent web platforms that solve real-world problems.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Future Goals</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm actively seeking internship opportunities to apply my skills in real-world scenarios 
                and contribute to cutting-edge AI research and development. My goal is to create 
                impactful AI solutions that make technology more accessible and beneficial for society.
              </p>
            </div>
          </div>

          {/* Education & Achievements */}
          <div className="space-y-6 animate-fade-in">
            <Card className="portfolio-card hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">
                      B.Tech in Artificial Intelligence and Machine Learning
                    </h4>
                    <p className="text-muted-foreground mb-1">
                      Sri Shakthi Institute of Engineering and Technology
                    </p>
                    <p className="text-sm text-muted-foreground">2023 - 2027 | Coimbatore</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="portfolio-card hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">
                      Higher Secondary Certificate
                    </h4>
                    <p className="text-muted-foreground mb-1">
                      St. Francis Xavier's Higher Secondary School
                    </p>
                    <p className="text-sm text-muted-foreground">2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="portfolio-card hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-success/10 rounded-lg">
                    <Target className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">
                      Specializations
                    </h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• End-to-End AI Systems</li>
                      <li>• Natural Language Processing</li>
                      <li>• Computer Vision & Deep Learning</li>
                      <li>• Full-Stack Web Development</li>
                      <li>• Robotics Integration</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;