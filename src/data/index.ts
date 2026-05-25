// ─── PRODUCT LINE 1: KIDS & TEENS ────────────────────────────────────────────
export const youthPrograms = [
  {
    id: "kids-ict-club",
    title: "Coding Foundations & ICT Fundamentals for Kids",
    ageRange: "Ages 7 – 12",
    format: "Term-based · Holiday · Bootcamp",
    duration: "4–6 weeks",
    price: "₦70,000",
    description: "A fun and engaging introduction to the world of technology. Kids build confidence with computers while creating their own interactive games and digital stories in a safe, supportive environment.",
    outcomes: ["Confidence in using computers", "Visual coding with Scratch", "Understanding online safety", "Creative problem-solving"],
  },
  {
    id: "teens-coding-web",
    title: "Coding & Web Starter for Teens",
    ageRange: "Ages 13 – 17",
    format: "Term-based · Holiday · Bootcamp",
    duration: "6–8 weeks",
    price: "₦100,000",
    description: "An inspiring first step into real-world web development. Teens learn to build and publish their own websites using the same tools used by professionals, including HTML, CSS, and JavaScript.",
    outcomes: ["Build and publish a personal website", "Master HTML5 & CSS3 basics", "Introduction to JavaScript & Python", "Create a portfolio of projects"],
  },
];

// ─── PRODUCT LINE 2: ADULTS – FOUNDATIONAL ────────────────────────────────────
export const foundationalCourses = [
  {
    id: "basic-computer",
    title: "Basic Computer Studies",
    duration: "4 weeks",
    price: "₦60,000",
    description: "Gain essential digital skills for the modern world. Master Word, Excel, PowerPoint, and the internet. Perfect for anyone looking to build a strong foundation in computer use.",
    outcomes: ["Create professional documents & spreadsheets", "Confident email & online communication", "Safe internet browsing & file management"],
  },
  {
    id: "kids-ict-foundations",
    title: "Coding Foundations & ICT Fundamentals for Kids",
    duration: "4–6 weeks",
    price: "₦70,000",
    description: "A fun and engaging introduction to the world of technology. Kids build confidence with computers while creating their own interactive games and digital stories in a safe, supportive environment.",
    outcomes: ["Confidence in using computers", "Visual coding with Scratch", "Understanding online safety", "Creative problem-solving"],
  },
  {
    id: "teens-coding-starter",
    title: "Coding & Web Starter for Teens",
    duration: "6–8 weeks",
    price: "₦100,000",
    description: "An inspiring first step into real-world web development. Teens learn to build and publish their own websites using the same tools used by professionals, including HTML, CSS, and JavaScript.",
    outcomes: ["Build and publish a personal website", "Master HTML5 & CSS3 basics", "Introduction to JavaScript & Python", "Create a portfolio of projects"],
  },
];

// ─── PRODUCT LINE 3: ADULTS – CAREER TECH ─────────────────────────────────────
export const careerCourses = [
  { id: "frontend-engineering", title: "Frontend Engineering", duration: "12 weeks", price: "₦250,000", description: "Learn to build beautiful, responsive websites using React and Next.js. Master modern CSS and user interface design for production-ready apps." },
  { id: "mobile-app-dev", title: "Mobile App Development (Cross Platform)", duration: "12 weeks", price: "₦250,000", description: "Build apps for both iOS and Android from a single codebase. Master React Native or Flutter to bring your mobile ideas to life." },
  { id: "backend-engineering", title: "Backend Engineering", duration: "12 weeks", price: "₦300,000", description: "Build the engines behind modern applications. Master Node.js, databases, and APIs to create scalable and secure backend systems." },
  { id: "product-design", title: "Product Design (UI/UX)", duration: "8 weeks", price: "₦200,000", description: "Design digital products that people love. Learn user research, wireframing, and high-fidelity prototyping using tools like Figma." },
  { id: "data-analysis", title: "Data Analysis/Science", duration: "12 weeks", price: "₦250,000", description: "Turn data into insights. Master Python, SQL, and data visualization to build dashboards and help organizations make better decisions." },
  { id: "ethical-hacking", title: "Ethical Hacking Fundamentals", duration: "12 weeks", price: "₦300,000", description: "Learn to protect digital assets. Explore network security, vulnerability assessment, and the fundamentals of cybersecurity in a safe environment." },
  { id: "ai-automation", title: "AI Automation", duration: "12 weeks", price: "₦250,000", description: "Leverage the power of AI to work smarter. Learn to use AI tools and frameworks to automate tasks and build intelligent workflows." },
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
