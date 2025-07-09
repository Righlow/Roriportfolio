import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  ExternalLink,
  Github,
  Linkedin,
  Download,
  Star,
  Award,
  GraduationCap,
  Code,
  Palette,
  Play,
  Send,
  Menu,
  X,
  Zap,
} from "lucide-react";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "education",
        "skills",
        "projects",
        "contact",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Zap className="w-8 h-8 text-primary" />
              <span className="text-2xl font-tourney font-bold text-gradient">
                Rorisang
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                "Home",
                "About",
                "Education",
                "Skills",
                "Projects",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.toLowerCase()
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item}
                </button>
              ))}
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href =
                    "https://cdn.builder.io/o/assets%2F384e71305b0542f2abb089275d66bb58%2F9b9e00928f234b5f85e923b836def29f?alt=media&token=a3909855-76e1-4b2a-94eb-4bb44e1439e3&apiKey=384e71305b0542f2abb089275d66bb58";
                  link.download = "Rorisang_Kedijang_CV.pdf";
                  link.target = "_blank";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border">
              <div className="flex flex-col space-y-3 pt-4">
                {[
                  "Home",
                  "About",
                  "Education",
                  "Skills",
                  "Projects",
                  "Contact",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-left text-sm font-medium text-muted-foreground hover:text-primary"
                  >
                    {item}
                  </button>
                ))}
                <Button
                  size="sm"
                  className="w-fit"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href =
                      "https://cdn.builder.io/o/assets%2F384e71305b0542f2abb089275d66bb58%2F9b9e00928f234b5f85e923b836def29f?alt=media&token=a3909855-76e1-4b2a-94eb-4bb44e1439e3&apiKey=384e71305b0542f2abb089275d66bb58";
                    link.download = "Rorisang_Kedijang_CV.pdf";
                    link.target = "_blank";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-20"
      >
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-primary/20 hover-lift overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F384e71305b0542f2abb089275d66bb58%2Ff68510cd15f24ca69c0100a91ed912a0?format=webp&width=400"
                  alt="Rorisang Kedijang"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-tourney font-black mb-6 text-header">
              UI/UX Developer
            </h1>

            <p className="text-xl text-content-muted mb-8 max-w-2xl mx-auto leading-relaxed">
              I blend technology and creativity to build meaningful, interactive
              web solutions that users actually want to engage with. Currently
              specializing in web technologies and driven by the belief that
              great design makes complex things feel simple.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
                asChild
              >
                <a href="mailto:Rorisangkedijang14@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => scrollToSection("projects")}
              >
                <Play className="w-5 h-5 mr-2" />
                View My Work
              </Button>
            </div>

            <div className="mt-12 flex justify-center space-x-6">
              <a
                href="https://github.com/Righlow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/rorisang-kedijang-459302295"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:rorisangkedijang14@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-tourney font-bold mb-4 text-header">
              About Me
            </h2>
            <p className="text-xl text-content-muted max-w-2xl mx-auto">
              Watching people struggle with unnecessarily complex interfaces
              drives my mission to create digital experiences that feel
              effortless and intuitive. I believe users shouldn't need lengthy
              tutorials to navigate apps and platforms—they should just know
              what to do. Through thoughtful design and creative
              problem-solving, I'm committed to crafting interfaces that users
              can master in minutes, not months. Let's make technology that
              actually makes sense.
            </p>
          </div>

          <div className="flex justify-center items-center mb-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-card/50 p-8 rounded-2xl border border-border backdrop-blur-sm hover-lift">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F384e71305b0542f2abb089275d66bb58%2Fdd6a4ae07dba46f891497f7de6842365?format=webp&width=800"
                  alt="RIGHTOPIA - Creative Brand Identity"
                  className="w-full max-w-md mx-auto h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Skills Word Cloud */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-tourney font-bold mb-4 text-header">
                Skills & Capabilities
              </h3>
              <p className="text-content-muted">
                Technologies, tools, and skills I work with
              </p>
            </div>

            <div className="relative bg-card/30 rounded-2xl p-8 border border-border overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
              <div className="relative">
                <div className="flex flex-wrap justify-center items-center gap-4 max-w-4xl mx-auto">
                  {[
                    {
                      text: "JavaScript",
                      size: "text-4xl",
                      weight: "font-black",
                      color: "text-header",
                    },
                    {
                      text: "React Native",
                      size: "text-3xl",
                      weight: "font-bold",
                      color: "text-content",
                    },
                    {
                      text: "MongoDB",
                      size: "text-2xl",
                      weight: "font-semibold",
                      color: "text-header",
                    },
                    {
                      text: "HTML/CSS",
                      size: "text-3xl",
                      weight: "font-bold",
                      color: "text-content",
                    },
                    {
                      text: "Node.js",
                      size: "text-xl",
                      weight: "font-medium",
                      color: "text-header",
                    },
                    {
                      text: "Figma",
                      size: "text-3xl",
                      weight: "font-bold",
                      color: "text-content",
                    },
                    {
                      text: "C++",
                      size: "text-2xl",
                      weight: "font-semibold",
                      color: "text-header",
                    },
                    {
                      text: "Adobe Creative Illustrator",
                      size: "text-lg",
                      weight: "font-medium",
                      color: "text-content",
                    },
                    {
                      text: "React Native",
                      size: "text-2xl",
                      weight: "font-semibold",
                      color: "text-header",
                    },
                    {
                      text: "Creative Coding p.js5",
                      size: "text-xl",
                      weight: "font-medium",
                      color: "text-content",
                    },
                    {
                      text: "Unity",
                      size: "text-2xl",
                      weight: "font-semibold",
                      color: "text-header",
                    },
                    {
                      text: "Teachable Machine-Machine Learning",
                      size: "text-lg",
                      weight: "font-medium",
                      color: "text-content",
                    },
                    {
                      text: "Bitsy Game",
                      size: "text-3xl",
                      weight: "font-bold",
                      color: "text-header",
                    },
                    {
                      text: "C++ Programming",
                      size: "text-xl",
                      weight: "font-medium",
                      color: "text-content",
                    },
                    {
                      text: "Illustrator",
                      size: "text-xl",
                      weight: "font-medium",
                      color: "text-header",
                    },
                    {
                      text: "Graphic design",
                      size: "text-lg",
                      weight: "font-medium",
                      color: "text-content",
                    },
                    {
                      text: "Mobile Development",
                      size: "text-2xl",
                      weight: "font-semibold",
                      color: "text-header",
                    },
                    {
                      text: "API Integration",
                      size: "text-lg",
                      weight: "font-medium",
                      color: "text-content",
                    },
                    {
                      text: "Expo Go",
                      size: "text-xl",
                      weight: "font-medium",
                      color: "text-header",
                    },
                    {
                      text: "Digital Art",
                      size: "text-2xl",
                      weight: "font-semibold",
                      color: "text-content",
                    },
                    {
                      text: "Steam VR",
                      size: "text-lg",
                      weight: "font-medium",
                      color: "text-header",
                    },
                    {
                      text: "Twine Digital Storytelling",
                      size: "text-xl",
                      weight: "font-medium",
                      color: "text-content",
                    },
                    {
                      text: "OpenFrameWorks",
                      size: "text-lg",
                      weight: "font-medium",
                      color: "text-header",
                    },
                    {
                      text: "Problem Solving",
                      size: "text-2xl",
                      weight: "font-semibold",
                      color: "text-content",
                    },
                  ].map((skill, index) => (
                    <div
                      key={index}
                      className={`${skill.size} ${skill.weight} ${skill.color} font-tourney cursor-pointer transition-all duration-300 hover:scale-110 hover:text-primary transform animate-pulse-slow`}
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        transform: `rotate(${((index % 3) - 1) * 5}deg)`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = `scale(1.2) rotate(0deg)`;
                        e.currentTarget.style.textShadow =
                          "0 0 20px currentColor";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = `scale(1) rotate(${((index % 3) - 1) * 5}deg)`;
                        e.currentTarget.style.textShadow = "none";
                      }}
                    >
                      {skill.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-tourney font-bold mb-4 text-header">
              Education Journey
            </h2>
            <p className="text-xl text-content-muted max-w-2xl mx-auto">
              My academic Journey and key learning experiences
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Bath Spa University */}
              <Card className="hover-lift bg-card border-border">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <GraduationCap className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-tourney font-bold mb-2 text-header">
                        Bath Spa University, UK
                      </h3>
                      <div className="flex items-center space-x-4 mb-4">
                        <Badge
                          variant="secondary"
                          className="bg-primary/10 text-primary"
                        >
                          October 2023 - Present
                        </Badge>
                        <Badge variant="outline">Current</Badge>
                      </div>
                      <p className="text-lg mb-4">
                        BSc (Hons) – Creative Computing – Web Technologies
                      </p>
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-header">
                          Key Modules and Focus Areas:
                        </h4>
                        <ul className="grid md:grid-cols-2 gap-2 text-content">
                          <li>• Responsive Web Design and Creative Coding</li>
                          <li>
                            • App Development with React Native and JavaScript
                          </li>
                          <li>
                            • UX/UI Design, App prototyping and Interactive
                            Media
                          </li>
                          <li>
                            • Programming Graphic User Interfaces with C++
                          </li>
                          <li>
                            • Virtual Reality development of games for
                            Interactive Media
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Eastern Mediterranean University */}
              <Card className="hover-lift bg-card border-border">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <Palette className="w-8 h-8 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-tourney font-bold mb-2 text-header">
                        Eastern Mediterranean University, North Cyprus
                      </h3>
                      <div className="flex items-center space-x-4 mb-4">
                        <Badge
                          variant="secondary"
                          className="bg-secondary/10 text-secondary"
                        >
                          February 2022 - June 2023
                        </Badge>
                        <Badge variant="outline">Completed</Badge>
                      </div>
                      <p className="text-lg mb-4">
                        BSc Game Design (Year 1 completed)
                      </p>
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-header">
                          Key Modules:
                        </h4>
                        <ul className="grid md:grid-cols-2 gap-2 text-content">
                          <li>• Vector drawing with Adobe Illustrator</li>
                          <li>
                            • Computer graphics using Photoshop Illustrator
                          </li>
                          <li>• Perception and design concepts</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Hilton College */}
              <Card className="hover-lift bg-card border-border">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Award className="w-8 h-8 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-tourney font-bold mb-2 text-header">
                        Hilton College, South Africa
                      </h3>
                      <div className="flex items-center space-x-4 mb-4">
                        <Badge
                          variant="secondary"
                          className="bg-accent/10 text-accent"
                        >
                          January 2017 - November 2021
                        </Badge>
                        <Badge variant="outline">NSC</Badge>
                      </div>
                      <p className="text-lg mb-4">
                        National Senior Certificate (IEB)
                      </p>
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-header">
                          Subjects:
                        </h4>
                        <ul className="grid md:grid-cols-2 gap-2 text-content">
                          <li>• Art[5], English[5], isiZulu[5]</li>
                          <li>• Life Orientation[5], Life Science[4]</li>
                          <li>• Mathematics[3], Physical Science[3]</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-tourney font-bold mb-4 text-header">
              Technical and Creative Skills
            </h2>
            <p className="text-xl text-content-muted max-w-2xl mx-auto">
              Technologies and tools I work with
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-lift bg-card border-border">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Code className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-tourney font-bold">
                    Programming
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>C++</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-header text-header"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>React & React Native</span>
                    <div className="flex space-x-1">
                      {[...Array(4)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-header text-header"
                        />
                      ))}
                      <Star className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Html/CSS & JavaScript</span>
                    <div className="flex space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-header text-header"
                        />
                      ))}
                      {[...Array(2)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-muted-foreground"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-card border-border">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Palette className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-tourney font-bold">Design</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Figma</span>
                    <div className="flex space-x-1">
                      {[...Array(4)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-header text-header"
                        />
                      ))}
                      <Star className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Adobe Illustrator</span>
                    <div className="flex space-x-1">
                      {[...Array(4)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-header text-header"
                        />
                      ))}
                      <Star className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Photoshop</span>
                    <div className="flex space-x-1">
                      {[...Array(4)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-header text-header"
                        />
                      ))}
                      <Star className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-card border-border">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-tourney font-bold">Other</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Digital Visual design</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-header text-header"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Game Development</span>
                    <div className="flex space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-header text-header"
                        />
                      ))}
                      {[...Array(2)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-muted-foreground"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>VR Development</span>
                    <div className="flex space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-header text-header"
                        />
                      ))}
                      {[...Array(2)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-muted-foreground"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-tourney font-bold mb-4 text-header">
              Featured Projects
            </h2>
            <p className="text-xl text-content-muted max-w-2xl mx-auto">
              A showcase of my creative and technical work
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Sneaker Reseller - Multi-Device Application",
                description:
                  "Single-page web application with responsive front-end written in HTML/CSS and back-end created using Node.js. Features comprehensive product catalog and user management system.",
                tech: ["HTML/CSS", "Node.js", "Responsive Design"],
                category: "Web Development",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F384e71305b0542f2abb089275d66bb58%2F98a96424ce8347988999e68a376cdff9?format=webp&width=800",
                fitStyle: "cover",
                link: "https://righlow.github.io/Sneaker-MDA/"
              },
               {
                title: "CarWash App - Service Booking Platform",
                description:
                  "Mobile application making car washing more convenient by enabling users to book services. Mirrors existing service apps like Uber and Deliveroo but for car wash services.",
                tech: ["Mobile Development", "Service Design", "Asynchronous storage"],
                category: "Mobile Development",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F384e71305b0542f2abb089275d66bb58%2F70f924998fbc402cbb6d880cfbc6e881?format=webp&width=800",
                fitStyle: "contain",
                link: "https://github.com/Righlow/myWashApp",
              },
               {
                title: "Daily Affirmation Generator - Mobile App",
                description:
                  "Mobile app that generates daily affirmations to promote positive thinking and mental well-being.",
                tech: ["React Native", "Mobile UI", "Wellness App"],
                category: "Mobile Development",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F384e71305b0542f2abb089275d66bb58%2Fc55a966432564c00a9e293ec4eb4b82d?format=webp&width=800",
                fitStyle: "contain",
                link: "https://github.com/Righlow/app-1-Righlow"
              },
               {
                title: "Age UK Live Client Brief - Gamified Web-app prototype",
                description:
                  "Gamified web-app for Age UK where I had to make a platform that educates the elderly on digital literacy and how to navigate the digital world, incorporating interactive gaming elements to engage users and promote social interaction.",
                tech: [
                  "Web Development",
                  "Gamification",
                  "Educational Platform",
                ],
                category: "Web Development",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F384e71305b0542f2abb089275d66bb58%2Fe606decda82741f0b75fed567883e7c8?format=webp&width=800",
                fitStyle: "contain",
                link: "https://www.figma.com/proto/kp1pIdA9Q4zRKSjfBxNqaf/Age-Uk?node-id=0-1&t=qJTJK9pdEMdTaIzD-1",
              },
               {
                title: "UX/UI - Experience Portfolio",
                description:
                  "Comprehensive Experience Design Portfolio charting the development of a digital app from idea inception to high-fidelity prototype, including user research and testing.",
                tech: ["UX Research", "UI Design", "Prototyping"],
                category: "UX/UI Design",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F384e71305b0542f2abb089275d66bb58%2F00928c8c506f403582e11e4de21a4e3b?format=webp&width=800",
                fitStyle: "contain",
                link: "https://www.figma.com/proto/kp1pIdA9Q4zRKSjfBxNqaf/Age-Uk?node-id=436-426&t=GPYclocno0Xm5l8y-1"
              },
              {
                title: "Data Driven App - Music Genre Platform",
                description:
                  "Interactive music discovery application allowing users to choose their vibe for the day. Features genre selection with modern UI and engaging user experience.",
                tech: ["Interactive Design", "UI/UX", "Music Platform"],
                category: "Software Development",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F384e71305b0542f2abb089275d66bb58%2F814afb32c1b34fe1bb0abf0b5435b191?format=webp&width=800",
                fitStyle: "cover",
              },
           
              {
                title: "Machine Learning - Volume Variation",
                description:
                  "AI/ML project implementing Teachable Machine for gesture and pose recognition. Demonstrates understanding of machine learning concepts and practical implementation.",
                tech: ["Machine Learning", "AI", "Computer Vision"],
                category: "Data Science",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F384e71305b0542f2abb089275d66bb58%2F18c36aadb1a94e22983bb576c88196ac?format=webp&width=800",
                fitStyle: "cover",
                link: "https://github.com/Righlow/My-Coding-Blog/blob/main/_posts/2024-05-30-Posenet.md"
              },
               {
                title: "Stop Motion Animation-Digital storytellings",
                description:
                  "3D character modeling and animation project demonstrating skills in 3D graphics, character design, and interactive media development.",
                tech: ["3D Modeling", "Animation", "Character Design"],
                category: "Digital storytelling",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F384e71305b0542f2abb089275d66bb58%2F9024a6679468498e8dc65a0edfa18ef1?format=webp&width=800",
                fitStyle: "cover",
                link: "https://sway.cloud.microsoft/2UlHBXRAMgrxUYdM?ref=Link&loc=mysways"
              },
              {
                title: "Bitsy game - Retro Game Development",
                description:
                  "Retro-style game with pixel art graphics and interactive gameplay. Features maze navigation, character movement, and engaging visual storytelling.",
                tech: ["Game Development", "Pixel Art", "Interactive Design"],
                category: "Game Development",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F384e71305b0542f2abb089275d66bb58%2F373c8ae1e51149389ef3d3b577044c5d?format=webp&width=800",
                fitStyle: "cover",
                link: "https://sway.cloud.microsoft/2UlHBXRAMgrxUYdM?ref=Link&loc=mysways"
              },
              {
                title: "Data Bending Project - Digital Art",
                description:
                  "Experimental digital art project employing data bending techniques using Audacity demonstrates creative coding and digital manipulation skills.",
                tech: ["Data Bending", "Digital Art", "Creative Coding"],
                category: "Digital Art",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F384e71305b0542f2abb089275d66bb58%2F09c4aa09003147bc910e7d5e331fcb91?format=webp&width=800",
                fitStyle: "cover",
              },
             
             
              {
                title: "Flyer project - Event Poster Design",
                description:
                  "Digital visual design project creating a high-impact event flyer. Designed to appeal to specific audience and subculture with bold typography and striking visual identity.",
                tech: ["Poster Design", "Event Branding", "Visual Design"],
                category: "Graphic Design",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F384e71305b0542f2abb089275d66bb58%2Fd4336b0eb6b843d6be9f1370add82a77?format=webp&width=800",
                fitStyle: "contain",
                link: "https://sway.cloud.microsoft/4sMWVol3Yq8ygpOw?ref=Link&loc=mysways"
              },
              {
                title: "Algorithmic Art-creative coding",
                description:
                  "Interactive art project using p5.js to create dynamic visualizations based on user input. Combines programming and artistic expression to generate unique digital artworks.",
                tech: [
                  "API Integration",
                  "Object-Oriented Programming",
                  "Data Processing",
                ],
                category: "Creative Coding",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F384e71305b0542f2abb089275d66bb58%2F103fb4e4496b4ce4a8c07ae7d2fe6158?format=webp&width=800",
                fitStyle: "cover",
                link: "https://github.com/Righlow/My-Coding-Blog"
              },
             
            ].map((project, index) => (
              <Card
                key={index}
                className="hover-lift bg-card border-border group"
              >
                <CardContent className="p-6">
                  <div
                    className={`rounded-lg mb-4 project-image-container aspect-video ${project.fitStyle === "contain" ? "bg-white/5" : ""}`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full group-hover:scale-105 transition-transform duration-300 ${
                        project.fitStyle === "contain"
                          ? "object-contain object-center"
                          : "object-cover object-center"
                      }`}
                      loading="lazy"
                    />
                  </div>
                  <Badge variant="outline" className="mb-3">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-tourney font-bold mb-3 text-header group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-content mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-muted"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      View Project <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  ) : (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-0 h-auto font-medium text-primary hover:text-primary/80"
                    >
                      View Project <ExternalLink className="w-4 h-4 ml-1" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Service Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-tourney font-bold mb-4 text-header">
              Community Impact
            </h2>
            <p className="text-xl text-content max-w-2xl mx-auto">
              Giving back to the community through education and support
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="hover-lift bg-card border-border">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <GraduationCap className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-tourney font-bold mb-2">
                      Community Service, South Africa
                    </h3>
                    <div className="flex items-center space-x-4 mb-4">
                      <Badge
                        variant="secondary"
                        className="bg-secondary/10 text-secondary"
                      >
                        20+ Hours Completed
                      </Badge>
                      <Badge variant="outline">Volunteer</Badge>
                    </div>
                    <p className="text-lg mb-4">
                      Completed 20+ hours of outreach at Orphanage where I
                      assisted pupils with homework and provided educational
                      support to underprivileged children.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-content">
                      <div>• Educational support and tutoring</div>
                      <div>• Homework assistance</div>
                      <div>• Mentoring and guidance</div>
                      <div>• Community outreach programs</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-tourney font-bold mb-4 text-header">
              Get In Touch
            </h2>
            <p className="text-xl text-content-muted max-w-2xl mx-auto">
              Let's connect and discuss opportunities to work together
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-tourney font-bold mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-content">
                      Rorisangkedijang14@gmail.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-content">+44 7826984001</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-content">Bath, United Kingdom</div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-4">Find me on</h4>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a
                      href="https://github.com/Righlow"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a
                      href="https://www.linkedin.com/in/rorisang-kedijang-459302295"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href="mailto:rorisangkedijang14@gmail.com">
                      <Mail className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-tourney font-bold mb-6">
                  Send a Message
                </h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block text-white">
                        Name
                      </label>
                      <Input
                        placeholder="Your name"
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block text-white">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        className="bg-background border-border"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block text-white">
                      Subject
                    </label>
                    <Input
                      placeholder="Project inquiry"
                      className="bg-background border-border"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block text-white">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="bg-background border-border resize-none"
                    />
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/50 border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Zap className="w-8 h-8 text-primary" />
              <span className="text-2xl font-tourney font-bold text-gradient">
                Rorisang
              </span>
            </div>

            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Creative Computing student passionate about building meaningful
              digital experiences through technology and creativity.
            </p>

            <div className="flex justify-center space-x-6 mb-6">
              <a
                href="https://github.com/Righlow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/rorisang-kedijang-459302295"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:rorisangkedijang14@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>

            <div className="border-t border-border pt-6">
              <p className="text-sm text-white">
                © 2024 Rorisang Kedijang. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
