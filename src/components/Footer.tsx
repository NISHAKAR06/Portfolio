import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-gradient mb-4">Nishakar T</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              AI/ML Engineering Student passionate about creating intelligent
              solutions that bridge technology and real-world applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Skills", "Services", "Portfolio", "Contact"].map(
                (link) => (
                  <button
                    key={link}
                    onClick={() => {
                      const element = document.getElementById(
                        link.toLowerCase()
                      );
                      if (element)
                        element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Me</h4>
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              <a
                href="https://github.com/NISHAKAR06"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted/50 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors hover-lift"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/nishakar314"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted/50 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors hover-lift"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:nishakarnishakar06@gmail.com"
                className="p-2 bg-muted/50 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors hover-lift"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-muted-foreground text-sm">
              📍 Coimbatore, Tamil Nadu, India
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex justify-center items-center text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <span>© {currentYear} NISHAKAR T, Built with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>and React</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
