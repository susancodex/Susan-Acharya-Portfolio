import { useEffect, useState } from "react";
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, Download, ExternalLink, Globe, Star, Trophy, GraduationCap, Menu, X } from "lucide-react";
import financeTrackerImg from "@/assets/finance-tracker-project.jpg";
import taskManagerImg from "@/assets/task-manager-api.png";
import todoListImg from "@/assets/enhanced-todo-list-project.jpg";
import hospitalManagementImg from "@/assets/hospital-management-system.svg";
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
   Motivated developer with hands-on experience building scalable and user-friendly web applications. 
  Skilled in RESTful API design, modern web technologies, and responsive design. Strong problem solver and collaborative 
  team player with a focus on writing clean and efficient code. Currently pursuing a Bachelor’s degree in BSc. CSIT and 
  seeking opportunities to contribute, learn, and grow as a develope
      </p>
    </>
  );
};


// Featured Projects Section Component
const FeaturedProjectsSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [containerRef, visibleItems] = useStaggerAnimation(3, 200);

   const projects = [
     {
       image: financeTrackerImg,
       title: "Finance Tracker",
       description:
         "A full-stack personal finance management web application built with React + Vite (frontend) and Django REST Framework (backend). Track income and expenses, manage categories, set monthly budget limits, and work toward financial goals — all from a clean, mobile-friendly interface.",
       github: "https://github.com/susancodex/Finance_Tracker.git",
       liveDemo: "https://finance-tracker-frontend-zeid.onrender.com",
       tags: ["React", "Vite", "Django REST", "Full-Stack"],
     },
     {
       image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800&h=400",
       title: "Hospital Management System",
       description:
         "Comprehensive healthcare management platform featuring patient records, appointment scheduling, doctor management, billing system, and admin dashboard. Built with Django REST Framework backend and React frontend with role-based authentication.",
       github: "https://github.com/susancodex/Hospital_Management_System.git",
       liveDemo: null,
       tags: ["Django", "React", "REST API", "Healthcare"],
     },
     {
       image: taskManagerImg,
       title: "Task Manager API",
       description:
         "A RESTful API built with Django REST Framework for task creation, management, authentication, and status tracking with clean backend architecture.",
       github: "https://github.com/susancodex/task-manager-api.git",
       liveDemo: "https://task-manager-api-x87n.onrender.com",
       tags: ["Django REST", "Python", "API", "Backend"],
     },
     {
       image: todoListImg,
       title: "To Do List",
       description:
         "A simple, user-authenticated To-Do List web application built with Django. Users can register, log in, and manage their personal tasks with a clean and responsive interface.",
       github: "https://github.com/susancodex/todo-list.git",
       liveDemo: null,
       tags: ["Django", "Python", "Authentication", "Web App"],
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

       <div ref={containerRef as any} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {projects.map((project, index) => (
           <div
             key={project.title}
             className={`group relative flex flex-col glass-card rounded-2xl overflow-hidden card-glow ${
               visibleItems[index] ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
             }`}
           >
            {/* Project Image */}
            <div className="relative overflow-hidden h-48 bg-muted">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Card Content */}
            <div className="flex flex-col flex-1 p-6">
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs px-2 py-1">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-105"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </Button>
                {project.liveDemo ? (
                  <Button
                    size="sm"
                    className="flex-1 hover:scale-105 transition-transform duration-300"
                    onClick={() => window.open(project.liveDemo!, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    disabled
                    className="flex-1 bg-sky-100 text-sky-700 hover:bg-sky-100 hover:text-sky-700 opacity-100 cursor-default"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Coming Soon
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};


// Skills Section Component with category animations
const SkillsSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [containerRef, visibleItems] = useStaggerAnimation(6, 200);
  const skillDelayClasses = [
    "",
    "[animation-delay:100ms]",
    "[animation-delay:200ms]",
    "[animation-delay:300ms]",
    "[animation-delay:400ms]",
    "[animation-delay:500ms]",
  ];

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
      title: "🛠️ Backend",
      skills: [
        { name: "Python", icon: "https://img.icons8.com/color/48/python--v1.png" },
        { name: "Django", icon: "https://img.icons8.com/color/48/django.png" },
        { name: "Django REST Framework", icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-shadow-tal-revivo.png" },
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
      title: "🔗 APIs",
      skills: [
        { name: "REST API Design", icon: "https://img.icons8.com/ios-filled/48/api-settings.png" },
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
       <div ref={containerRef as any} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
           <Card 
             key={category.title} 
             className={`glass-card transition-all duration-700 hover:shadow-xl hover:-translate-y-2 ${
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
                    } ${skillDelayClasses[skillIndex] ?? skillDelayClasses[skillDelayClasses.length - 1]}`}
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
       <Card className={`glass-card transition-all duration-700 hover:shadow-xl hover:-translate-y-2 ${
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
      
       <div ref={containerRef as any} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
         <Card className={`glass-card transition-all duration-700 hover:shadow-xl hover:-translate-y-2 ${
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

         <Card className={`glass-card transition-all duration-700 hover:shadow-xl hover:-translate-y-2 ${
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
               <span>Kathmandu, Nepal</span>
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
       <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border/50 shadow-sm">
         <div className="container mx-auto px-4 py-4">
           <div className="flex justify-between items-center">
             <h1 className="text-xl font-bold gradient-text">Susan Acharya</h1>
             
             {/* Desktop Navigation */}
             <div className="hidden md:flex items-center gap-8">
               {["about", "skills", "projects", "education", "contact"].map((item) => (
                 <button
                   key={item}
                   onClick={() => scrollToSection(item)}
                   className="text-muted-foreground hover:text-foreground transition-all duration-300 capitalize relative group"
                 >
                   {item}
                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                 </button>
               ))}
             </div>
             
             {/* Mobile Menu Button */}
             <button 
               className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
             >
               {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
             </button>
           </div>
           
           {/* Mobile Navigation */}
           <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
             <div className="flex flex-col gap-2 pb-4">
               {["about", "skills", "projects", "education", "contact"].map((item) => (
                 <button
                   key={item}
                   onClick={() => {
                     scrollToSection(item);
                     setMobileMenuOpen(false);
                   }}
                   className="text-left px-4 py-3 rounded-xl hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-all duration-300 capitalize"
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
         <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute top-[5%] left-[5%] w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-blue-400/10 rounded-full bg-orb blur-3xl"></div>
           <div className="absolute top-[15%] right-[10%] w-96 h-96 bg-gradient-to-br from-purple-400/15 to-cyan-400/10 rounded-full bg-orb-2 blur-3xl"></div>
           <div className="absolute bottom-[20%] left-[15%] w-72 h-72 bg-gradient-to-br from-cyan-400/12 to-emerald-400/8 rounded-full bg-orb-3 blur-3xl"></div>
           <div className="absolute bottom-[10%] right-[5%] w-64 h-64 bg-gradient-to-br from-pink-400/10 to-indigo-400/8 rounded-full bg-orb-4 blur-3xl"></div>
           <div className="absolute top-[40%] left-[40%] w-48 h-48 bg-gradient-to-br from-blue-400/10 to-purple-400/6 rounded-full bg-orb blur-2xl" style={{animationDelay: '-4s'}}></div>
           
           {/* Rising Bubbles */}
           <div className="bubble w-4 h-4 left-[10%]" style={{animationDelay: '0s'}}></div>
           <div className="bubble w-6 h-6 left-[25%]" style={{animationDelay: '2s'}}></div>
           <div className="bubble w-3 h-3 left-[40%]" style={{animationDelay: '4s'}}></div>
           <div className="bubble w-5 h-5 left-[60%]" style={{animationDelay: '6s'}}></div>
           <div className="bubble w-4 h-4 left-[75%]" style={{animationDelay: '8s'}}></div>
           <div className="bubble w-6 h-6 left-[90%]" style={{animationDelay: '10s'}}></div>
           <div className="bubble w-3 h-3 left-[15%]" style={{animationDelay: '12s'}}></div>
           <div className="bubble w-5 h-5 left-[50%]" style={{animationDelay: '14s'}}></div>
           <div className="bubble w-4 h-4 left-[85%]" style={{animationDelay: '16s'}}></div>
           <div className="bubble w-3 h-3 left-[30%]" style={{animationDelay: '18s'}}></div>
         </div>
         
         <div className="container mx-auto px-4 pt-20 relative z-10 flex flex-col items-center">
           {/* Profile Section Background Bubbles */}
           <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] pointer-events-none overflow-hidden rounded-full opacity-30">
             <div className="absolute w-3 h-3 top-[20%] left-[30%] bg-primary/40 rounded-full animate-pulse" style={{animationDelay: '0s'}}></div>
             <div className="absolute w-2 h-2 top-[35%] left-[60%] bg-blue-400/50 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
             <div className="absolute w-4 h-4 top-[50%] left-[25%] bg-indigo-400/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
             <div className="absolute w-2 h-2 top-[65%] left-[70%] bg-cyan-400/40 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
             <div className="absolute w-3 h-3 top-[40%] left-[45%] bg-purple-400/35 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
             <div className="absolute w-2 h-2 top-[75%] left-[40%] bg-blue-300/45 rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>
           </div>
           {/* Profile Image */}
           <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
             <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-6">
               <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-[hsl(var(--gradient-middle))] to-[hsl(var(--gradient-end))] p-1 animate-spin [animation-duration:15s]">
                 <div className="w-full h-full rounded-full overflow-hidden bg-background">
                   <img 
                     src="/lovable-uploads/5058cdc6-c2f4-4cb1-b8cc-303bca9df609.png"
                     alt="Susan Acharya" 
                     className="w-full h-full object-cover"
                   />
                 </div>
               </div>

             </div>
           </div>
           
           {/* Name */}
           <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-3 gradient-text transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{animation: 'gradient-text 3s ease infinite'}}>
             Susan Acharya
           </h1>
           
           {/* Title */}
           <h2 className={`text-xl md:text-2xl font-medium text-muted-foreground mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{animation: 'text-float 4s ease-in-out infinite'}}>
             Full Stack Web Developer
           </h2>

           {/* Tech Stack */}
           <div className={`grid grid-cols-3 gap-4 max-w-md mx-auto mb-10 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
             <div className="glass-card p-4 text-center hover:scale-105 transition-all duration-300">
               <div className="text-xl font-bold gradient-text">React</div>
               <div className="text-sm text-muted-foreground">Frontend</div>
             </div>
             <div className="glass-card p-4 text-center hover:scale-105 transition-all duration-300">
               <div className="text-xl font-bold gradient-text">Django</div>
               <div className="text-sm text-muted-foreground">Backend</div>
             </div>
             <div className="glass-card p-4 text-center hover:scale-105 transition-all duration-300">
               <div className="text-xl font-bold gradient-text">DRF</div>
               <div className="text-sm text-muted-foreground">APIs</div>
             </div>
           </div>



           {/* Description */}
           <div className={`max-w-2xl mx-auto text-center mb-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
             <p className="text-lg text-muted-foreground leading-relaxed mb-4">
               I design and develop scalable, high-performance web applications with a strong focus on clean architecture, usability, and modern user experience.
             </p>
             <p className="text-base text-muted-foreground leading-relaxed">
               Currently exploring opportunities to contribute to real-world projects, collaborate with teams, and grow as a full-stack developer.
             </p>
           </div>

           {/* CTA Buttons */}
           <div className={`flex flex-wrap justify-center gap-4 mb-10 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
             <Button 
               onClick={() => scrollToSection('projects')}
               size="lg" 
               className="btn-primary shadow-2xl hover:shadow-primary/30"
             >
               View My Work
             </Button>
             <Button 
               variant="outline"
               size="lg" 
               onClick={() => window.open('https://drive.google.com/file/d/1qv1Ax8rl2FfuTZMncyP7CHbPUFV688YU/view?usp=sharing', '_blank')}
               className="glass-card border-primary/30 hover:border-primary/60 hover:bg-primary/10 hover:scale-105 transition-all duration-500"
             >
               <Download className="mr-2 h-4 w-4" />
               Download CV
             </Button>
           </div>

           {/* Social Links */}
           <div className={`flex justify-center gap-4 mb-8 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
             <a 
               href="https://github.com/susancodex" 
               target="_blank" 
               rel="noopener noreferrer"
               className="p-3 rounded-xl bg-white/70 backdrop-blur-sm border border-border hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1"
               title="GitHub"
             >
               <Github className="h-5 w-5" />
             </a>
             <a 
               href="https://www.linkedin.com/in/susan-acharya1618" 
               target="_blank" 
               rel="noopener noreferrer"
               className="p-3 rounded-xl bg-white/70 backdrop-blur-sm border border-border hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1"
               title="LinkedIn"
             >
               <Linkedin className="h-5 w-5" />
             </a>
             <a 
               href="mailto:susanacharya.sp@gmail.com"
               className="p-3 rounded-xl bg-white/70 backdrop-blur-sm border border-border hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1"
               title="Email"
             >
               <Mail className="h-5 w-5" />
             </a>
           </div>

           {/* Scroll Indicator */}
           <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
             <button 
               onClick={() => scrollToSection('about')} 
               className="p-2 rounded-full bg-white/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110"
             >
               <ChevronDown className="h-6 w-6 text-muted-foreground" />
             </button>
           </div>
         </div>
       </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-sky-50/70">
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
      <section id="skills" className="py-20 bg-sky-50/70">
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
      <section className="py-20 bg-sky-50/70">
        <div className="container mx-auto px-4">
          <CertificatesSection />
        </div>
      </section>

      {/* Languages & Achievements */}
      <section className="py-20 bg-sky-50/70">
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
      <footer className="bg-white border-t border-sky-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Susan Acharya. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
