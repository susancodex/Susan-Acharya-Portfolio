import { useEffect, useState } from "react";
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, Download, ExternalLink, BarChart3, CheckSquare2, Code2, Database, Globe, LineChart, ListTodo, Server, ShieldCheck, Sparkles, Star, Trophy, BookOpen, GraduationCap, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation, useStaggerAnimation } from "@/hooks/useScrollAnimation";

// About Section Component with scroll animations
const AboutSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [textRef, textVisible] = useScrollAnimation({ threshold: 0.5 });

  return (
    <>
      <h2 
        ref={titleRef as any}
        className={`text-4xl font-bold mb-8 transition-all duration-1000 ${
          titleVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
        }`}
      >
        About Me
      </h2>
      <div 
        className={`w-20 h-1 bg-primary mx-auto mb-8 transition-all duration-1000 delay-300 ${
          titleVisible ? 'animate-scale-in opacity-100' : 'opacity-0 scale-x-0'
        }`}
      />
      <p 
        ref={textRef as any}
        className={`text-lg leading-relaxed text-muted-foreground transition-all duration-1000 ${
          textVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
        }`}
      >
        Motivated junior Python and web developer with hands-on experience building scalable, 
        user-friendly web applications using Django and Python. Skilled in RESTful API design, 
        modern web technologies, and responsive design. Strong problem solver and team player. 
        Currently pursuing an undergraduate degree in BSc. CSIT. Seeking opportunities to 
        contribute and grow as a developer.
      </p>
    </>
  );
};

// Skills Section Component with category animations
const SkillsSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [containerRef, visibleItems] = useStaggerAnimation(6, 200);
  const skillDelayClasses = ["[animation-delay:0ms]", "[animation-delay:100ms]", "[animation-delay:200ms]", "[animation-delay:300ms]"];

  const skillCategories = [
    {
      title: "💻 Frontend",
      skills: [
        { name: "HTML5", icon: "https://img.icons8.com/color/48/html-5--v1.png" },
        { name: "CSS3", icon: "https://img.icons8.com/color/48/css3.png" },
        { name: "JavaScript", icon: "https://img.icons8.com/color/48/javascript--v1.png" },
        { name: "Bootstrap", icon: "https://img.icons8.com/color/48/bootstrap.png" },
        { name: "Responsive Design", icon: "https://img.icons8.com/fluency/48/responsive.png" }
      ]
    },
    {
      title: "🛠️ Backend Engineering",
      skills: [
        { name: "Python", icon: "https://img.icons8.com/color/48/python--v1.png" },
        { name: "Django", icon: "https://img.icons8.com/color/48/django.png" },
        { name: "Django REST Framework", icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-shadow-tal-revivo.png" },
        { name: "Authentication", icon: "https://img.icons8.com/ios-filled/48/password.png" },
        { name: "Serializers", icon: "https://img.icons8.com/ios-filled/48/data-transfer.png" },
        { name: "RESTful APIs", icon: "https://img.icons8.com/ios-filled/48/api-settings.png" }
      ]
    },
    {
      title: "🗄️ Databases",
      skills: [
        { name: "MySQL", icon: "https://img.icons8.com/color/48/mysql-logo.png" },
        { name: "SQLite3", icon: "https://img.icons8.com/color/48/sqlite.png" }
      ]
    },
    {
      title: "🧰 Tools",
      skills: [
        { name: "Git", icon: "https://img.icons8.com/color/48/git.png" },
        { name: "GitHub", icon: "https://img.icons8.com/ios-glyphs/48/github.png" },
        { name: "Visual Studio Code", icon: "https://img.icons8.com/color/48/visual-studio-code-2019.png" },
        { name: "PyCharm", icon: "https://img.icons8.com/color/48/pycharm.png" }
      ]
    },
    {
      title: "🔐 API Design",
      skills: [
        { name: "REST API Design", icon: "https://img.icons8.com/ios-filled/48/api-settings.png" },
        { name: "Permissions", icon: "https://img.icons8.com/ios-filled/48/lock-2.png" },
        { name: "JWT Auth", icon: "https://img.icons8.com/ios-filled/48/key.png" },
        { name: "API Integration", icon: "https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/48/external-api-user-interface-icongeek26-linear-colour-icongeek26.png" }
      ]
    },
    {
      title: "💡 Soft Skills",
      skills: [
        { name: "Problem Solving", icon: "🧠" },
        { name: "Team Collaboration", icon: "🤝" },
        { name: "Communication", icon: "🗣️" },
        { name: "Adaptability", icon: "🔄" }
      ]
    }
  ];

  return (
    <>
      <h2 
        ref={titleRef as any}
        className={`text-4xl font-bold text-center mb-12 transition-all duration-1000 ${
          titleVisible ? 'animate-fade-in-down opacity-100' : 'opacity-0 -translate-y-8'
        }`}
      >
        Skills & Technologies
      </h2>
      <div ref={containerRef as any} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <Card 
            key={category.title} 
            className={`transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${
              visibleItems[index] 
                ? 'animate-fade-in-up opacity-100' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <CardHeader>
              <CardTitle className="text-lg font-bold mb-4">{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className={`flex items-center space-x-3 p-3 rounded-lg bg-background/50 hover:bg-muted transition-all duration-300 hover:scale-105 ${
                      visibleItems[index] ? 'animate-fade-in' : 'opacity-0'
                    } ${skillDelayClasses[skillIndex % skillDelayClasses.length]}`}
                  >
                    {skill.icon.startsWith('http') ? (
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-8 h-8 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <span className="text-2xl">{skill.icon}</span>
                    )}
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

// Education Section Component
const EducationSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [containerRef, containerVisible] = useScrollAnimation({ threshold: 0.3 });

  return (
    <>
      <h2 
        ref={titleRef as any}
        className={`text-4xl font-bold text-center mb-12 transition-all duration-1000 ${
          titleVisible ? 'animate-fade-in-down opacity-100' : 'opacity-0 -translate-y-8'
        }`}
      >
        🎓 Education
      </h2>
      
      <div ref={containerRef as any} className="max-w-4xl mx-auto">
        <Card className={`transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${
          containerVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
        }`}>
          <CardHeader>
            <CardTitle className="flex items-center space-x-3 text-2xl">
              <GraduationCap className="h-8 w-8 text-primary animate-bounce-gentle" />
              <span>BSc. Computer Science and Information Technology</span>
            </CardTitle>
            <CardDescription className="text-lg">
              Bhaktapur Multiple Campus, Tribhuvan University (IOST) • 📍 Currently Pursuing
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border-l-4 border-primary pl-6 py-4 bg-primary/5 rounded-r-lg">
              <p className="text-base leading-relaxed mb-4">
                The BSc. CSIT program is a four-year undergraduate degree blending theoretical knowledge and practical skills in computing, software development, and IT. It prepares students for both advanced studies and professional careers in the tech industry.
              </p>
              
              <div>
                <h4 className="font-bold text-lg mb-4 text-primary">Core Subjects:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    "Data Structures & Algorithms",
                    "Web Technologies", 
                    "Database Management Systems",
                    "Operating Systems",
                    "Software Engineering",
                    "Object-Oriented Programming",
                    "Computer Networks",
                    "C Programming",
                    "Microprocessor",
                    "Java",
                    ".NET",
                    "Computer Architecture"
                  ].map((subject, index) => (
                    <div key={subject} className="flex items-center space-x-2 p-2 rounded-lg bg-background/50 hover:bg-muted transition-all duration-300">
                      <span className="text-primary">•</span>
                      <span className="text-sm font-medium">{subject}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="border-l-4 border-secondary pl-6 py-4 bg-secondary/5 rounded-r-lg">
              <h4 className="font-bold text-lg mb-2">+2 Science</h4>
              <p className="text-muted-foreground">Sudurpaschimanchal Academy</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

// Certificates Section Component
const CertificatesSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [containerRef, visibleItems] = useStaggerAnimation(4, 200);

  return (
    <>
      <h2 
        ref={titleRef as any}
        className={`text-4xl font-bold text-center mb-12 transition-all duration-1000 ${
          titleVisible ? 'animate-fade-in-down opacity-100' : 'opacity-0 -translate-y-8'
        }`}
      >
        📜 Certificates
      </h2>
      
      <div ref={containerRef as any} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <Card className={`transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${
          visibleItems[0] ? 'animate-fade-in-left opacity-100' : 'opacity-0 -translate-x-8'
        }`}>
          <CardHeader>
            <CardTitle className="flex items-center space-x-3 text-xl">
              <span className="text-2xl">✅</span>
              <span>Python For Beginners – Learn All The Basics Of Python</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              This course covers Python essentials like variables, data types, operators, conditional statements, loops, functions, and key data structures such as lists, tuples, dictionaries, and sets.
            </p>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => window.open("https://www.udemy.com/certificate/UC-fa0f1b21-29d8-4950-b675-abeaf438dbc7/", "_blank")}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              View Certificate
            </Button>
          </CardContent>
        </Card>

        <Card className={`transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${
          visibleItems[1] ? 'animate-fade-in-right opacity-100' : 'opacity-0 translate-x-8'
        }`}>
          <CardHeader>
            <CardTitle className="flex items-center space-x-3 text-xl">
              <span className="text-2xl">✅</span>
              <span>Python For Data Science – Real Time Exercises</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Learn Python for Data Science through real-time exercises. Practice with variables, control flow, data structures, NumPy, and basic statistics to analyze and manipulate data efficiently.
            </p>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => window.open("https://www.udemy.com/certificate/UC-175f7a52-2f5f-486c-a9d4-039f953669ef/", "_blank")}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              View Certificate
            </Button>
          </CardContent>
        </Card>

        <Card className={`transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${
          visibleItems[2] ? 'animate-fade-in-left opacity-100' : 'opacity-0 -translate-x-8'
        }`}>
          <CardHeader>
            <CardTitle className="flex items-center space-x-3 text-xl">
              <span className="text-2xl">✅</span>
              <span>Python Programming : Python Bootcamp For Beginners</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              An introductory course covering core Python concepts including variables, data types, operators, control flow, functions, and data structures to build a solid foundation in programming.
            </p>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => window.open("https://www.udemy.com/certificate/UC-0bffe5ad-cd58-40fd-ab5d-a536fd3c6837/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com", "_blank")}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              View Certificate
            </Button>
          </CardContent>
        </Card>

        <Card className={`transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${
          visibleItems[3] ? 'animate-fade-in-right opacity-100' : 'opacity-0 translate-x-8'
        }`}>
          <CardHeader>
            <CardTitle className="flex items-center space-x-3 text-xl">
              <span className="text-2xl">🏆</span>
              <span>Hackathon Certificate</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Participated in a 48-hour hackathon organized by Code Yantra at Himalayan College of Engineering, showcasing problem-solving and teamwork skills under time constraints
            </p>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => window.open("https://www.linkedin.com/in/susan-acharya1618?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank")}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              LinkedIn Proof
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

// Languages & Achievements Section Component
const LanguagesAchievementsSection = () => {
  const [containerRef, visibleItems] = useStaggerAnimation(2, 300);

  return (
    <div ref={containerRef as any} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Languages */}
      <Card className={`transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${
        visibleItems[0] ? 'animate-fade-in-left opacity-100' : 'opacity-0 -translate-x-8'
      }`}>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Globe className="h-5 w-5 text-primary animate-float" />
            <span>Languages</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center hover:scale-105 transition-transform duration-300">
              <span>English</span>
              <Badge className="animate-scale-in">Fluent</Badge>
            </div>
            <div className="flex justify-between items-center hover:scale-105 transition-transform duration-300">
              <span>Nepali</span>
              <Badge className="animate-scale-in [animation-delay:100ms]">Native</Badge>
            </div>
            <div className="flex justify-between items-center hover:scale-105 transition-transform duration-300">
              <span>Hindi</span>
              <Badge variant="secondary" className="animate-scale-in [animation-delay:200ms]">Intermediate</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card className={`transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${
        visibleItems[1] ? 'animate-fade-in-right opacity-100' : 'opacity-0 translate-x-8'
      }`}>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Trophy className="h-5 w-5 text-primary animate-wiggle" />
            <span>Achievements</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start space-x-2 hover:scale-105 transition-transform duration-300">
              <Star className="h-4 w-4 text-primary mt-0.5 animate-pulse-slow" />
              <span className="text-sm">Participated in a 48-hour hackathon organized by CodeYaatra</span>
            </div>
            <div className="flex items-start space-x-2 hover:scale-105 transition-transform duration-300">
              <Star className="h-4 w-4 text-primary mt-0.5 animate-pulse-slow [animation-delay:200ms]" />
              <span className="text-sm">Successfully built and deployed multiple web applications using Django</span>
            </div>
            <div className="flex items-start space-x-2 hover:scale-105 transition-transform duration-300">
              <Star className="h-4 w-4 text-primary mt-0.5 animate-pulse-slow [animation-delay:400ms]" />
              <span className="text-sm">Contributed to open-source projects on GitHub</span>
            </div>
            <div className="flex items-start space-x-2 hover:scale-105 transition-transform duration-300">
              <Star className="h-4 w-4 text-primary mt-0.5 animate-pulse-slow [animation-delay:600ms]" />
              <span className="text-sm">Completed Python and Django certification programs</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Featured Projects Section Component
type ProjectTheme = "finance" | "api" | "todo";

type FeaturedProject = {
  title: string;
  description: string;
  github: string;
  liveDemo: string | null;
  badge: string;
  stack: string[];
  theme: ProjectTheme;
};

const ProjectBanner = ({ project }: { project: FeaturedProject }) => {
  if (project.theme === "finance") {
    return (
      <div className="relative overflow-hidden bg-gradient-to-br from-sky-950 via-blue-900 to-cyan-700 px-6 py-6 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(125,211,252,0.35),transparent_28%),linear-gradient(135deg,rgba(15,23,42,0.24),rgba(15,23,42,0.08))]" />
        <div className="absolute -right-10 top-6 h-32 w-32 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute -left-8 bottom-0 h-28 w-28 rounded-full bg-blue-300/20 blur-3xl" />

        <div className="relative rounded-[1.75rem] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-cyan-50/80">{project.badge}</p>
              <h3 className="mt-3 text-2xl font-bold text-white">{project.title}</h3>
              <p className="mt-2 max-w-sm text-sm leading-6 text-cyan-50/80">
                Track cash flow, budgets, and goals from a clean analytics dashboard.
              </p>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/15 shadow-lg">
              <Wallet className="h-7 w-7 text-cyan-50" />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-3 backdrop-blur-sm">
              <p className="text-[0.65rem] uppercase tracking-[0.28em] text-cyan-50/70">Income</p>
              <p className="mt-2 text-lg font-semibold">$12.4k</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-3 backdrop-blur-sm">
              <p className="text-[0.65rem] uppercase tracking-[0.28em] text-cyan-50/70">Expenses</p>
              <p className="mt-2 text-lg font-semibold">$7.1k</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-3 backdrop-blur-sm">
              <p className="text-[0.65rem] uppercase tracking-[0.28em] text-cyan-50/70">Budget</p>
              <p className="mt-2 text-lg font-semibold">82%</p>
            </div>
          </div>

          <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-slate-950/35 p-4 backdrop-blur-sm">
            <div className="flex items-center justify-between text-xs text-cyan-50/75">
              <span>Monthly overview</span>
              <span>Balanced growth</span>
            </div>
            <div className="mt-4 flex h-32 items-end gap-3">
              {[
                "h-[38%]",
                "h-[58%]",
                "h-[44%]",
                "h-[76%]",
                "h-[54%]",
                "h-[90%]",
                "h-[68%]",
              ].map((heightClass, index) => (
                <div key={index} className="flex flex-1 items-end justify-center">
                  <div className={`w-full rounded-t-xl bg-gradient-to-t from-cyan-300 via-white to-blue-200 shadow-[0_0_24px_rgba(125,211,252,0.35)] ${heightClass}`} />
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-cyan-50/70">
              <div className="flex items-center gap-2"><BarChart3 className="h-4 w-4" /> Analytics</div>
              <div className="flex items-center gap-2"><LineChart className="h-4 w-4" /> Trend line</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.theme === "api") {
    return (
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-6 py-6 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:24px_24px] opacity-50" />
        <div className="absolute left-6 top-8 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl" />
        <div className="absolute bottom-4 right-6 h-28 w-28 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="relative rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-5 shadow-2xl backdrop-blur-xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-slate-300/80">{project.badge}</p>
              <h3 className="mt-3 text-2xl font-bold text-white">{project.title}</h3>
              <p className="mt-2 max-w-sm text-sm leading-6 text-slate-300/80">
                Production-style backend architecture with auth, serializers, and structured REST endpoints.
              </p>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 shadow-lg shadow-cyan-500/10">
              <Code2 className="h-7 w-7 text-cyan-300" />
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between text-xs text-slate-300/80">
                <span>GET /api/tasks</span>
                <span className="rounded-full bg-emerald-400/15 px-2 py-1 text-emerald-300">200 OK</span>
              </div>
              <div className="mt-4 space-y-2 font-mono text-[0.72rem] leading-6 text-slate-200/90">
                <div className="rounded-lg bg-slate-900/80 px-3 py-2">{"{"} "id": 12, "title": "Ship sprint" {"}"}</div>
                <div className="rounded-lg bg-slate-900/80 px-3 py-2">{"{"} "status": "in progress" {"}"}</div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-xs text-slate-300/80">
                <Server className="h-4 w-4 text-cyan-300" />
                Backend stack
              </div>
              <div className="mt-4 space-y-3">
                <div className="rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 text-sm">Django REST Framework</div>
                <div className="rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 text-sm">Token auth, permissions, serializers</div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Database className="h-4 w-4 text-indigo-300" />
                  Reliable database layer and structured responses
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-3 text-xs text-slate-300/80">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-300" /> Secure endpoints</div>
            <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-cyan-300" /> Clean backend workflows</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-lime-50 to-teal-100 px-6 py-6 text-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.18),transparent_28%)]" />
      <div className="absolute left-4 top-8 h-20 w-20 rounded-full bg-white/40 blur-2xl" />
      <div className="absolute right-8 bottom-4 h-24 w-24 rounded-full bg-emerald-200/60 blur-3xl" />

      <div className="relative rounded-[1.75rem] border border-emerald-200/70 bg-white/85 p-5 shadow-2xl backdrop-blur-xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-emerald-700/80">{project.badge}</p>
            <h3 className="mt-3 text-2xl font-bold text-slate-900">{project.title}</h3>
            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">
              A clean task board for registering, logging in, and managing personal to-dos with ease.
            </p>
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 shadow-lg">
            <ListTodo className="h-7 w-7 text-emerald-700" />
          </div>
        </div>

        <div className="mt-6 rounded-[1.5rem] border border-emerald-100 bg-gradient-to-br from-white to-emerald-50 p-4">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Today&apos;s focus</span>
            <span>5 tasks completed</span>
          </div>
          <div className="mt-4 space-y-3">
            {[
              "Review pending items",
              "Update personal task list",
              "Mark completed work",
            ].map((item, index) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-emerald-100 bg-white px-3 py-3 shadow-sm">
                <div className={`flex h-7 w-7 items-center justify-center rounded-full ${index === 0 ? "bg-emerald-500 text-white" : "bg-emerald-100 text-emerald-700"}`}>
                  <CheckSquare2 className="h-4 w-4" />
                </div>
                <div className="flex-1 text-sm text-slate-700">{item}</div>
                {index === 0 ? (
                  <Sparkles className="h-4 w-4 text-emerald-500" />
                ) : (
                  <div className="h-2 w-2 rounded-full bg-emerald-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedProjectsSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [containerRef, visibleItems] = useStaggerAnimation(3, 200);

  const projects: FeaturedProject[] = [
    {
      title: "Finance Tracker",
      description:
        "A full-stack personal finance management web application built with React + Vite (frontend) and Django REST Framework (backend). Track income and expenses, manage categories, set monthly budget limits, and work toward financial goals — all from a clean, mobile-friendly interface.",
      github: "https://github.com/susancodex/Finance_Tracker.git",
      liveDemo: "https://finance-tracker-frontend-zeid.onrender.com",
      badge: "Full Stack Finance App",
      stack: ["React + Vite", "Django REST", "Analytics UI"],
      theme: "finance",
    },
    {
      title: "Task Manager API",
      description:
        "A RESTful API built with Django REST Framework for task creation, management, authentication, and status tracking with clean backend architecture.",
      github: "https://github.com/susancodex/task-manager-api.git",
      liveDemo: "https://task-manager-api-x87n.onrender.com",
      badge: "REST API Backend",
      stack: ["Django REST", "Authentication", "Task Tracking"],
      theme: "api",
    },
    {
      title: "To Do List",
      description:
        "A simple, user-authenticated To-Do List web application built with Django. Users can register, log in, and manage their personal tasks with a clean and responsive interface.",
      github: "https://github.com/susancodex/todo-list.git",
      liveDemo: null,
      badge: "Productivity App",
      stack: ["Django", "Authentication", "Responsive UI"],
      theme: "todo",
    },
  ];

  return (
    <>
      <h2
        ref={titleRef as any}
        className={`text-4xl font-bold text-center mb-4 transition-all duration-1000 ${
          titleVisible ? "animate-fade-in-down opacity-100" : "opacity-0 -translate-y-8"
        }`}
      >
        Featured Projects
      </h2>
      <div
        className={`w-20 h-1 bg-primary mx-auto mb-12 transition-all duration-1000 delay-300 ${
          titleVisible ? "animate-scale-in opacity-100" : "opacity-0 scale-x-0"
        }`}
      />

      <div ref={containerRef as any} className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={`group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-border/70 bg-card/80 shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)] ${
              visibleItems[index] ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="transition-transform duration-700 group-hover:scale-[1.02]">
              <ProjectBanner project={project} />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-2xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <Badge key={tag} variant="secondary" className="border border-border/60 bg-secondary/70 px-2.5 py-1 text-xs font-medium text-secondary-foreground/90">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Button asChild variant="outline" size="sm" className="w-full rounded-full border-border/70 bg-background/80 px-5 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                </Button>
                {project.liveDemo && (
                  <Button asChild size="sm" className="w-full rounded-full px-5 py-2.5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-primary/30">
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

// Contact Section Component
const ContactSection = ({ handleContactSubmit }: { handleContactSubmit: (e: React.FormEvent) => void }) => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [containerRef, visibleItems] = useStaggerAnimation(2, 300);

  return (
    <>
      <h2 
        ref={titleRef as any}
        className={`text-4xl font-bold text-center mb-12 transition-all duration-1000 ${
          titleVisible ? 'animate-fade-in-down opacity-100' : 'opacity-0 -translate-y-8'
        }`}
      >
        Get In Touch
      </h2>
      
      <div ref={containerRef as any} className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className={`transition-all duration-700 ${
          visibleItems[0] ? 'animate-fade-in-left opacity-100' : 'opacity-0 -translate-x-8'
        }`}>
          <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
          <p className="text-muted-foreground mb-8">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to discuss a project or just say hello!
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
              <Mail className="h-5 w-5 text-primary animate-bounce-gentle" />
              <span>susanacharya.sp@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
              <Phone className="h-5 w-5 text-primary animate-bounce-gentle [animation-delay:200ms]" />
              <span>+977 9824562967</span>
            </div>
            <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
              <MapPin className="h-5 w-5 text-primary animate-bounce-gentle [animation-delay:400ms]" />
              <span>Nepal</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <Card className={`transition-all duration-700 hover:shadow-xl ${
          visibleItems[1] ? 'animate-fade-in-right opacity-100' : 'opacity-0 translate-x-8'
        }`}>
          <CardHeader>
            <CardTitle>Send Message</CardTitle>
            <CardDescription>I'll get back to you as soon as possible</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                  placeholder="Your Name" 
                  required 
                  className="hover:border-primary/50 focus:border-primary transition-colors"
                />
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  required 
                  className="hover:border-primary/50 focus:border-primary transition-colors"
                />
              </div>
              <Input 
                placeholder="Subject" 
                required 
                className="hover:border-primary/50 focus:border-primary transition-colors"
              />
              <Textarea 
                placeholder="Your Message" 
                rows={5} 
                required 
                className="hover:border-primary/50 focus:border-primary transition-colors"
              />
              <Button 
                type="submit" 
                className="w-full hover:scale-105 transition-transform duration-300 animate-button-glow"
              >
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const [typewriterText, setTypewriterText] = useState("");
  const { toast } = useToast();
  
  const fullText = "Susan Acharya";
  
  useEffect(() => {
    setIsVisible(true);
    
    // Typewriter effect
    let currentIndex = 0;
    const typewriterInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypewriterText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typewriterInterval);
      }
    }, 100);
    
    return () => clearInterval(typewriterInterval);
  }, []);

  const skills = {
    Frontend: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Design"],
    Backend: ["Python", "Django", "Django REST Framework", "RESTful APIs"],
    Databases: ["MySQL", "SQLite3"],
    Tools: ["Git", "GitHub", "VS Code"],
    "Soft Skills": ["Problem Solving", "Team Collaboration", "Communication", "Adaptability"]
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-primary">Susan Acharya</h1>
            <div className="hidden md:flex space-x-6">
              {["about", "projects", "skills", "education", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-muted-foreground hover:text-primary transition-colors capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden hero-gradient">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-[hsl(var(--accent-blue))]/20 rounded-full floating-animation [animation-delay:-1s]"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-[hsl(var(--accent-emerald))]/20 to-primary/20 rounded-full floating-animation [animation-delay:-2s]"></div>
          <div className="absolute bottom-32 left-20 w-20 h-20 bg-gradient-to-br from-[hsl(var(--accent-pink))]/20 to-[hsl(var(--gradient-middle))]/20 rounded-full floating-animation [animation-delay:-3s]"></div>
          <div className="absolute bottom-20 right-10 w-36 h-36 bg-gradient-to-br from-[hsl(var(--accent-orange))]/15 to-primary/15 rounded-full floating-animation [animation-delay:-4s]"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-primary/25 to-[hsl(var(--gradient-end))]/25 rounded-full floating-animation [animation-delay:-5s]"></div>
          <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-gradient-to-br from-[hsl(var(--gradient-middle))]/20 to-[hsl(var(--accent-blue))]/20 rounded-full floating-animation [animation-delay:-6s]"></div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.2)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-[hsl(var(--accent-blue))]/10" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Photo */}
            <div className="mb-12">
              <div className="relative w-56 h-56 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-[hsl(var(--gradient-middle))] to-[hsl(var(--gradient-end))] p-1 animate-spin [animation-duration:8s]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-background">
                    <img 
                      src="/lovable-uploads/5058cdc6-c2f4-4cb1-b8cc-303bca9df609.png"
                      alt="Susan Acharya" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none"></div>
              </div>
            </div>

            {/* Name with Typewriter */}
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="gradient-text">{typewriterText}</span>
              <span className="animate-pulse text-primary">|</span>
            </h1>
            
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 animate-fade-in [animation-delay:500ms]">
              <span className="bg-gradient-to-r from-[hsl(var(--accent-blue))] to-[hsl(var(--accent-emerald))] bg-clip-text text-transparent">
                Junior Django & Python Developer
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in [animation-delay:700ms]">
              Motivated Python developer building scalable web applications with Django. 
              Passionate about clean code and innovative solutions.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-8 animate-fade-in [animation-delay:900ms]">
              <a 
                href="https://www.linkedin.com/in/susan-acharya1618?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                title="LinkedIn profile"
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://github.com/susanacharya12" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                title="GitHub profile"
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="mailto:susanacharya.sp@gmail.com"
                aria-label="Send email"
                title="Send email"
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
            
            <div className="flex justify-center gap-6 animate-fade-in [animation-delay:1100ms]">
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg" 
                className="btn-primary shadow-2xl hover:shadow-primary/40"
              >
                Get In Touch <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline"
                size="lg" 
                onClick={() => window.open('https://drive.google.com/file/d/1PlTp-izUra0ZMO5jMdZZltMj5J-DxgxU/view?usp=share_link', '_blank')}
                className="glass-card border-primary/30 hover:border-primary/60 hover:bg-primary/10 hover:scale-105 transition-all duration-500"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AboutSection />
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <FeaturedProjectsSection />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <SkillsSection />
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-4">
          <EducationSection />
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <CertificatesSection />
        </div>
      </section>

      {/* Languages & Achievements */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <LanguagesAchievementsSection />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <ContactSection handleContactSubmit={handleContactSubmit} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Susan Acharya. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
