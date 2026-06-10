// Centralized Resume Data - Update here for all changes
export const resumeData = {
  personal: {
    firstName: "Nattakit",
    lastName: "Ploytrakul",
    title: "",
    email: "crystalza55@gmail.com",
    phone: "+66 064 689 5412",
    location: "Chiang Mai, Thailand",
    profileImage: "/image/Profile.jpg",
  },
  summary:
    "Customer-oriented professional with experience in IT support and web application development. Skilled in communication, problem-solving, and assisting users in resolving technical issues. Passionate about delivering excellent customer experience and ensuring user satisfaction.",

  skills: {
    technical: [
      "Web Application (React, Node.js)",
      " Database Handling (MySQL, Firebase)",
      "API Integration (REST API, LINE Notify)",
      "Basic Frontend & UI (HTML, CSS, Tailwind)",
      "Version Control (Git, GitHub)",
      "Troubleshooting and resolving user issues",
    ],
    soft: [
      "Communication & Teamwork",
      "Problem resolution",
      "Adaptability & Fast Learning",
      "Attention to Detail",
      "Technical support",
    ],
    tools: [
      "VS Code",
      "GitHub",
      "Postman",
      "MySQL Workbench",
      "Office 365",
    ],
  },

  experience: [
    {
      position: "Full Stack Developer Intern",
      company: "Faculty of Pharmacy, CMU",
      period: "Jun – Sep 2025",
      highlights: [
        "Assisted staff in submitting and tracking repair requests through a web application system used by faculty staff daily",
        "Improved user experience to make the system easier for non-technical users enabling non-technical staff to self-manage content",
        "Implemented MySQL database with statistics dashboard & reporting",
        "Integrated LINE Notify API for real-time maintenance alerts",
      ],
    },
    {
      position: "IT Support Intern",
      company: "Dara Academy, Chiang Mai",
      period: "Jul – Sep 2023",
      highlights: [
        "Diagnosed and resolved hardware, software & network issues",
        "Maintained and updated systems across campus devices",
        "Provided clear technical guidance and training to staff",
      ],
    },
  ],

  projects: [
    {
      title: "Repair Request Management System",
      tech: "React · Node.js · MySQL · LINE API",
      description:
        "Full-stack maintenance tracking platform for Faculty of Pharmacy, CMU with role-based access and real-time notifications.",
      achievements: [
        "Role-based access control (admin / staff)",
        "Real-time LINE Notify alerts on status changes",
        "Statistics dashboard with exportable reports",
      ],
    },
    {
      title: "Task Management App",
      tech: "React · Firebase · Tailwind CSS",
      description:
        "Collaborative task board with drag-and-drop interface and real-time cloud sync.",
      achievements: [
        "Drag & drop Kanban board",
        "Real-time sync via Firebase",
        "Responsive design for mobile & desktop",
      ],
    },
  ],

  education: [
    {
      degree: "Higher Vocational Certificate (ปวส.) – Information Technology",
      school: "Polytechnic Lanna Chiang Mai",
      year: "2024 – Present",
      gpa: "3.5X",
    },
    {
      degree: "Vocational Certificate (ปวช.) – Information Technology",
      school: "Polytechnic Lanna Chiang Mai",
      year: "2020 – 2023",
      gpa: "3.5X",
    },
  ],
};
