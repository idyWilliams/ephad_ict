// ─── PRODUCT LINE 1: KIDS & TEENS ────────────────────────────────────────────
export const youthPrograms = [
  {
    id: "kids-ict-club",
    title: "Coding Foundations & ICT Fundamentals for Kids",
    ageRange: "Ages 7 – 12",
    format: "Term-based · Holiday · Bootcamp",
    duration: "4–6 weeks",
    price: "₦70,000",
    description: "A safe, fun, and structured introduction to computers, the internet, and visual coding. Kids build confidence with technology while creating interactive games and digital stories.",
    outcomes: ["Confident computer use", "Visual block programming (Scratch)", "Digital citizenship & online safety", "Problem-solving & logical thinking"],
  },
  {
    id: "teens-coding-web",
    title: "Coding & Web Starter for Teens",
    ageRange: "Ages 13 – 17",
    format: "Term-based · Holiday · Bootcamp",
    duration: "6–8 weeks",
    price: "₦100,000",
    description: "A rigorous but accessible first step into real-world web development. Teens ship their first actual website while learning HTML, CSS, JavaScript, and Python fundamentals.",
    outcomes: ["Build and publish a real website", "HTML5, CSS3 & JavaScript basics", "Introduction to Python", "Portfolio-ready mini projects"],
  },
];

// ─── PRODUCT LINE 2: ADULTS – FOUNDATIONAL ────────────────────────────────────
export const foundationalCourses = [
  {
    id: "basic-computer",
    title: "Basic Computer Studies",
    duration: "4 weeks",
    price: "₦60,000",
    description: "Master everyday computer skills: Word, Excel, PowerPoint, email, internet browsing, and file management. Perfect for anyone starting from scratch.",
    outcomes: ["Create professional documents & spreadsheets", "Email & online communication", "File management & internet safety"],
  },
  {
    id: "kids-ict-foundations",
    title: "Coding Foundations & ICT Fundamentals for Kids",
    duration: "4–6 weeks",
    price: "₦70,000",
    description: "A safe, fun, and structured introduction to computers, the internet, and visual coding. Kids build confidence with technology while creating interactive games and digital stories.",
    outcomes: ["Confident computer use", "Visual block programming (Scratch)", "Digital citizenship & online safety", "Problem-solving & logical thinking"],
  },
  {
    id: "teens-coding-starter",
    title: "Coding & Web Starter for Teens",
    duration: "6–8 weeks",
    price: "₦100,000",
    description: "A rigorous but accessible first step into real-world web development. Teens ship their first actual website while learning HTML, CSS, JavaScript, and Python fundamentals.",
    outcomes: ["Build and publish a real website", "HTML5, CSS3 & JavaScript basics", "Introduction to Python", "Portfolio-ready mini projects"],
  },
];

// ─── PRODUCT LINE 3: ADULTS – CAREER TECH ─────────────────────────────────────
export const careerCourses = [
  { id: "frontend-engineering", title: "Frontend Engineering", duration: "12 weeks", price: "₦250,000", description: "React, Next.js, and modern CSS to build production-ready, responsive user interfaces." },
  { id: "mobile-app-dev", title: "Mobile App Development (Cross Platform)", duration: "12 weeks", price: "₦250,000", description: "Learn to build cross-platform mobile apps for iOS and Android using modern frameworks like React Native or Flutter." },
  { id: "backend-engineering", title: "Backend Engineering", duration: "12 weeks", price: "₦300,000", description: "Node.js, databases, REST APIs, and server architecture to build scalable backend systems." },
  { id: "product-design", title: "Product Design (UI/UX)", duration: "8 weeks", price: "₦200,000", description: "Figma, user research, wireframing, and prototyping to design beautiful, conversion-focused products." },
  { id: "data-analysis", title: "Data Analysis/Science", duration: "12 weeks", price: "₦250,000", description: "Python, SQL, Pandas, and data visualisation to extract insights and build decision-ready dashboards." },
  { id: "ethical-hacking", title: "Ethical Hacking Fundamentals", duration: "12 weeks", price: "₦300,000", description: "CEH-aligned curriculum: network security, vulnerability assessment, and pentesting methodologies." },
  { id: "ai-automation", title: "AI Automation", duration: "12 weeks", price: "₦250,000", description: "Harness AI tools and frameworks to automate processes, build intelligent workflows, and scale operations efficiently." },
];

// ─── LEGACY FLAT LIST (used in registration dropdowns) ─────────────────────────
export const courses = [
  ...foundationalCourses,
  ...careerCourses,
];

// ─── FAQS ─────────────────────────────────────────────────────────────────────
export const faqs = [
  { question: "Where are you located?", content: "We are located in Kubwa, Abuja, Nigeria. We offer both in-person and selected online/hybrid sessions depending on the program." },
  { question: "Do I need prior experience to join?", content: "Not at all. Our Foundational programs are designed for absolute beginners. We also have structured entry points for every level." },
  { question: "Are laptops provided?", content: "We have fully equipped laboratory PCs for in-class sessions. We recommend students bring their own device for continuous practice at home." },
  { question: "Do I get a certificate?", content: "Yes. You receive a verifiable certificate of completion after successfully defending your final project." },
  { question: "What format are the Kids & Teens programs?", content: "Youth programs run in three modes: term-based (school-year schedule), holiday intensives (school break periods), and bootcamp sprints. Parents can choose the format that suits their child's schedule." },
];

// ─── TESTIMONIALS ──────────────────────────────────────────────────────────────
export const testimonials = [
  { name: "Amaka N.", role: "Frontend Developer", quote: "EPHAD completely changed my career trajectory. The hands-on approach and mentorship were exactly what I needed to land my first tech role.", rating: 5 },
  { name: "Samuel O.", role: "UI/UX Designer", quote: "The Product Design class was phenomenal. We didn't just learn tools—we learned how to solve real user problems. Highly recommend.", rating: 5 },
  { name: "Ibrahim D.", role: "Parent", quote: "My son enrolled in the Kids Coding Club and hasn't stopped building mini-games since. The instructors are incredibly patient and skilled.", rating: 5 },
];
