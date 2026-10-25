export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: 'Full Stack' | 'Frontend' | 'Web Apps' | 'Creative';
  image: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  features: string[];
  techStack: { category: string; items: string[] }[];
}

export interface SkillItem {
  name: string;
  description: string;
  level: number;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  status: string;
  cgpa?: string;
  details: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Achievement {
  id: string;
  title: string;
  issuedBy: string;
  partner: string;
  course: string;
  score: string;
  scoreBreakdown: { label: string; score: string }[];
  duration: string;
  rollNo: string;
  credits: string;
  certificatePdf: string;
  certificateImage: string;
  description: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Irfana S",
    monogram: "I",
    role: "Computer Science and Engineering Student",
    tagline: "B.E. Computer Science & Engineering student at Nadar Saraswathi College of Engineering (Anna University) with an 8.41 CGPA.",
    shortBio: "I am a Computer Science and Engineering student at Nadar Saraswathi College of Engineering and Technology (Anna University) with an 8.41 CGPA, working as a Web Developer at SAM AI Technologies.",
    email: "irfyyyds.12@gmail.com",
    phone: "90XXXXXX08",
    avatarImage: "/assets/aistudio/image_473274ad.png",
    resumePdfUrl: "/IRFANA_RESUME.pdf",
    resumePreviewImage: "/assets/aistudio/irfana_resume_preview.png",
    social: {
      github: "https://github.com/irfana-08",
      linkedin: "https://www.linkedin.com/in/irfana-ibrahim-81301a3b0",
    }
  },

  about: {
    lead: "I am currently pursuing a Bachelor of Engineering in Computer Science & Engineering at Anna University, maintaining an academic CGPA of 8.41.",
    paragraphs: [
      "I am currently pursuing a Bachelor of Engineering in Computer Science & Engineering at Anna University, maintaining an academic CGPA of 8.41. Throughout my academic coursework, I have developed a deep fascination with frontend web technologies and software problem-solving.",
      "I enjoy turning concepts into working software, such as TaskFlow—a personalized task manager with Google authentication and automatic deadline urgency calculation.",
      "In addition to my academics, I am actively building real-world web experience as a Web Developer at SAM AI Technologies."
    ],
    facts: [
      { label: "Name", value: "Irfana S" },
      { label: "College", value: "Nadar Saraswathi College of Engineering and Technology, Theni" },
      { label: "University", value: "Anna University" },
      { label: "Academic CGPA", value: "8.41 CGPA" },
      { label: "Current Experience", value: "Web Developer at SAM AI Technologies" },
      { label: "Schooling", value: "Scism Matriculation Higher Secondary School, Bodinayakanur" },
      { label: "Core Skills", value: "HTML, CSS, JavaScript, React, DBMS" },
      { label: "Phone", value: "90XXXXXX08" },
      { label: "Email", value: "irfyyyds.12@gmail.com" },
    ]
  },

  experience: [
    {
      company: "SAM AI Technologies",
      role: "Web Developer",
      period: "October 2026 – Present (1 month)",
      description: "Developing modern web interfaces, responsive frontend components, and user-centric features."
    }
  ] as Experience[],

  education: [
    {
      degree: "Bachelor of Engineering in Computer Science and Engineering (B.E. CSE)",
      institution: "Nadar Saraswathi College of Engineering and Technology, Theni (Anna University)",
      period: "2025 – Present",
      status: "Currently Studying (Undergraduate)",
      cgpa: "8.41 CGPA",
      details: "Core subjects: Data Structures, Algorithms, Web Development, Object-Oriented Programming, Database Management Systems, Computer Networks."
    },
    {
      degree: "Higher Secondary Education (HSC)",
      institution: "Scism Matriculation Higher Secondary School, Bodinayakanur, Theni",
      period: "2023 – 2025",
      status: "Completed",
      details: "Higher secondary education with mathematics and computer science fundamentals."
    }
  ] as Education[],

  softSkills: [
    "Great interpersonal skills",
    "Problem-solving ability",
    "Independent thinker",
    "Creative and imaginative",
    "Efficient Speaker"
  ],

  skills: [
    {
      name: "HTML",
      description: "Semantic markup, accessibility (a11y), clean document structure, and modern HTML5 APIs.",
      level: 95
    },
    {
      name: "CSS",
      description: "Responsive layouts, Flexbox, Grid, custom styling, animations, and modern CSS architecture.",
      level: 92
    },
    {
      name: "JavaScript",
      description: "Modern ES6+ syntax, asynchronous programming, DOM manipulation, and dynamic state logic.",
      level: 90
    },
    {
      name: "React",
      description: "Functional components, state hooks, props flow, modular architecture, and interactive user interfaces.",
      level: 92
    }
  ] as SkillItem[],

  projects: [
    {
      id: "taskflow-app",
      title: "TaskFlow — Personalized To-Do Lists with Google Sign-In",
      tagline: "Sign in with your Google account to create, manage, and color-code your tasks with automatic deadline urgency.",
      description: "An intuitive web application featuring Google OAuth authentication, automatic deadline urgency categorization (Urgent Red, Upcoming Blue, Later Yellow), interactive summary counters, and Excel database integration.",
      longDescription: "TaskFlow solves task overload by automatically computing deadline urgency whenever a task is created or updated. Tasks with less than 3 days remaining are color-coded in Urgent Red, upcoming tasks (3–10 days) in Blue, and future tasks (>10 days) in Yellow. The application features full Google Sign-In integration for personalized task persistence, instant status toggling, and Excel DB synchronization.",
      category: "Full Stack",
      image: "/assets/aistudio/todo_196f44b1.png",
      tags: ["React", "HTML", "CSS", "JavaScript", "Google OAuth", "Excel DB"],
      metrics: [
        { label: "Deadline Urgency", value: "Automatic" },
        { label: "Google Sign-In", value: "OAuth 2.0" },
        { label: "Database Sync", value: "Excel DB" },
      ],
      liveUrl: "http://localhost:8000",
      githubUrl: "https://github.com/irfana-08",
      featured: true,
      features: [
        "Personalized To-Do Lists with Google Account Sign-In",
        "Automatic deadline urgency highlighting (< 3 Days: Urgent Red, 3-10 Days: Upcoming Blue, > 10 Days: Later Yellow, Done: Completed Green)",
        "Real-time visual counters for Total Works, Urgent, Upcoming, Later, and Completed tasks",
        "Excel DB integration for structured task tracking and export",
        "Responsive AntiqueWhite & clean interface designed for maximum productivity"
      ],
      techStack: [
        { category: "Frontend Architecture", items: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"] },
        { category: "Authentication & Data", items: ["Google Sign-In (OAuth 2.0)", "Excel DB Sync", "Local Storage"] },
        { category: "Workflow Rules", items: ["Deadline Urgency Highlighting Engine", "Task Completion Tracker"] },
      ]
    }
  ] as Project[],

  achievements: [
    {
      id: "nptel-os",
      title: "NPTEL Online Certification",
      course: "Introduction to Operating Systems",
      issuedBy: "NPTEL (Funded by MoE, Govt. of India)",
      partner: "Indian Institute of Technology Madras (IIT Madras) & Swayam",
      score: "51% (Consolidated Score)",
      scoreBreakdown: [
        { label: "Online Assignments", score: "20.42 / 25" },
        { label: "Proctored Exam", score: "30 / 75" }
      ],
      duration: "Jul - Sep 2026 (8-week course)",
      rollNo: "NPTEL26CS123S369800002",
      credits: "3 Credits Recommended",
      certificatePdf: "/assets/aistudio/NOC26CS123S369800002_66ccb62b.pdf",
      certificateImage: "/assets/aistudio/nptel_certificate.png",
      description: "Successfully certified in Introduction to Operating Systems course mentored and examined by IIT Madras faculty. Evaluated on process synchronization, concurrency, virtual memory management, CPU scheduling, and file system architecture."
    }
  ] as Achievement[],
};
