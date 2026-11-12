export const profile = {
  name: "Lonnis Johnson",
  role: "Software Tester",
  location: "Kochi, Kerala, India",
  email: "lonnisjohnson@gmail.com",
  phone: "+91 9633155080",
  phoneDisplay: "+91 96331 55080",
  linkedin: "https://www.linkedin.com/in/lonnisjohnson",
  github: "https://github.com/lonnisjohnson",
  resume: "/Lonnis_Johnson_Resume.pdf",
}

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
]

export const interests = [
  {
    title: "Software testing",
    text: "Requirement analysis, functional test cases, defect reporting, and API checks across the software testing life cycle.",
  },
  {
    title: "Test automation",
    text: "Automated UI scripts with Playwright and TypeScript, plus request and response validation.",
  },
  {
    title: "Full-stack development",
    text: "Responsive products with React.js, Node.js, Express.js, PHP, Laravel, Django, and MySQL.",
  },
]

export const experience = [
  {
    id: "testing-mavens",
    company: "Testing Mavens",
    role: "Software Tester Intern",
    dates: "Oct 2026 — Present",
    dateTime: "2026-10",
    current: true,
    points: [
      "Performing manual testing by analyzing requirements, preparing test cases, and executing functional test scenarios.",
      "Developing and executing automated UI test scripts using Playwright and TypeScript.",
      "Performing API testing and validating request and response data.",
    ],
    stack: ["Playwright", "TypeScript", "Manual Testing", "API Testing"],
  },
  {
    id: "simtechon",
    company: "SimtechON",
    role: "Freelance Full Stack Developer",
    dates: "Apr 2026 — Sep 2026",
    dateTime: "2026-04",
    location: "Ireland, Remote",
    points: [
      "Developed and maintained a responsive company website using React.js, with reusable UI components and modern frontend practices.",
      "Built web functionality for a company job portal, including candidate applications and role-based employer and employee portals.",
      "Developed REST APIs using Express.js and MySQL to manage job postings, candidate registrations, and application data.",
    ],
    stack: ["React.js", "Express.js", "MySQL", "REST APIs"],
  },
  {
    id: "cubet",
    company: "Cubet Techno Labs Pvt Ltd",
    role: "React Developer Intern",
    dates: "Jan 2026 — Mar 2026",
    dateTime: "2026-01",
    location: "Kakkanad",
    points: [
      "Developed and deployed a responsive React.js website for a houseboat business using reusable components and modern frontend practices.",
      "Built reusable React components and interactive UI workflows for responsive booking interfaces.",
      "Integrated booking functionality with backend data handling and automated email notifications using Google Apps Script.",
    ],
    stack: ["React.js", "Google Apps Script"],
  },
  {
    id: "revstar",
    company: "Revstar Solutions",
    role: "Web Development Intern",
    dates: "Apr 2025 — May 2025",
    dateTime: "2025-04",
    location: "Bangalore",
    points: [
      "Developed and deployed a responsive company website using HTML, CSS, and modern web development technologies.",
      "Implemented basic SEO optimizations to improve search engine visibility and indexing.",
    ],
    stack: ["HTML", "CSS", "SEO"],
  },
]

export const skillGroups = [
  {
    title: "Programming Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript", "PHP", "C", "C++", "OOP"],
  },
  {
    title: "Frontend Development",
    items: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    items: ["Node.js", "Express.js", "Django", "Laravel", "REST APIs"],
  },
  {
    title: "Databases",
    items: ["MySQL", "PostgreSQL", "SQLite", "DBMS"],
  },
  {
    title: "Software Testing & Automation",
    items: [
      "Manual Testing",
      "API Testing",
      "Automation Testing",
      "Playwright",
      "Postman",
      "STLC",
      "SDLC",
      "Test Case Design",
      "Defect Reporting",
    ],
  },
  {
    title: "Tools & Technologies",
    items: ["Git", "GitHub", "VS Code", "Docker", "Linux", "Windows"],
  },
]

export const projects = [
  {
    id: "simtechon-site",
    index: "01",
    title: "SimtechON Company Website",
    featured: true,
    summary:
      "Full-stack company website with an integrated job portal for candidate applications, employer review, and employee workflows.",
    points: [
      "REST APIs with Express.js and MySQL for job postings, candidate registration, and application management.",
      "Separate employer and employee portals for applicant tracking and hiring workflows.",
      "Responsive React.js interface focused on reusable components.",
    ],
    stack: ["React.js", "Express.js", "MySQL", "REST API", "Tailwind CSS"],
    live: "https://simtechon.com",
    liveLabel: "simtechon.com",
    github: "https://github.com/lonnisjohnson/Simtechon_react",
  },
  {
    id: "houseboat",
    index: "02",
    title: "Houseboat Website",
    featured: true,
    summary:
      "Responsive React website for a houseboat business, with reusable components and a booking flow tied to Google Sheets.",
    points: [
      "Modern UI built with React and Tailwind CSS.",
      "Booking data handled through Google Apps Script and Google Sheets.",
      "Automated email notifications for user bookings.",
    ],
    stack: ["React", "Tailwind CSS", "Google Apps Script", "Google Sheets"],
    live: "https://galileahouseboat.com",
    liveLabel: "galileahouseboat.com",
  },
  {
    id: "gesture-controller",
    index: "03",
    title: "Gesture-Based Game Controller",
    summary:
      "Real-time hand gesture recognition that controls PC gameplay through a webcam. Hand landmarks are tracked with MediaPipe and mapped to keyboard actions, with cooldown logic for stable controls.",
    stack: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI"],
  },
  {
    id: "ecommerce",
    index: "04",
    title: "E-Commerce Website",
    summary:
      "E-commerce platform using Laravel’s MVC architecture, with user authentication, product management, a shopping cart, and order processing in MySQL.",
    stack: ["Laravel", "PHP", "MySQL"],
  },
  {
    id: "student-management",
    index: "05",
    title: "Student Management System",
    summary:
      "Desktop student management system built with Java and SQLite. Complete CRUD for student records through a graphical interface.",
    stack: ["Java", "SQLite"],
  },
  {
    id: "apartment-rental",
    index: "06",
    title: "Apartment Rental Management System",
    summary:
      "Apartment rental management system built with Django and MySQL, with CRUD for listings, tenant management, and rental agreements.",
    stack: ["Python", "Django", "MySQL"],
    github: "https://github.com/lonnisjohnson/Apartment-rental",
  },
  {
    id: "light-store",
    index: "07",
    title: "Light Store",
    summary:
      "Store management system built with PHP and MySQL, with CRUD for products, inventory, and sales tracking.",
    stack: ["PHP", "MySQL"],
  },
]

export const education = [
  {
    id: "mca",
    degree: "Master of Computer Applications",
    short: "MCA",
    school: "Rajagiri College of Social Science (Autonomous)",
    dates: "2024 — 2026",
    score: "76.6%",
    location: "Kalamassery, Ernakulam",
  },
  {
    id: "bca",
    degree: "Bachelor of Computer Applications",
    short: "BCA",
    school: "Rajagiri College of Management and Applied Science",
    dates: "2021 — 2024",
    score: "80.1%",
    location: "Kakkanad, Ernakulam",
  },
]

export const certifications = [
  {
    title: "AI Aware",
    detail: "AI For All (Intel & Digital India)",
    date: "June 2025",
  },
  {
    title: "AI Appreciate",
    detail: "AI For All (Intel & Digital India)",
    date: "June 2025",
  },
  {
    title: "Advanced AI Program",
    detail: "Hands-on ML",
    date: "June 2025",
  },
  {
    title: "Database Administration Workshop",
    detail: "Design & Security",
    date: "Oct 2024",
  },
  {
    title: "Power Communication Workshop",
    detail: "Professional communication",
    date: "July 2024",
  },
  {
    title: "Core Python & Data Science",
    detail: "Value added course",
    date: "March 2023",
  },
]
