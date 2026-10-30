import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Code2, Database, Server, Layers3, Github, Linkedin, Mail, MessageCircle, ExternalLink } from "lucide-react";
import "./style.css";

// Personalize before publishing: add your WhatsApp number and confirm project links.
const profile = {
  email: "sahushivam2564@gmail.com",
  github: "https://github.com/shivamsahu0108",
  linkedin: "https://linkedin.com/in/shivam-sahu-bb506b345",
  whatsapp: "", // International format, digits only: e.g. 919876543210
  resume: "" // Public URL to your PDF resume, if available
};

const projects = [
  { n:"01", name:"Zosh E-commerce", type:"E-commerce platform", desc:"A commerce project focused on product discovery, shopping flows and order management.", stack:["React","Spring Boot","MySQL"], repo:"https://github.com/shivamsahu0108/zosh-ecommerce", demo:"", color:"mint" },
  { n:"02", name:"Hospital Management System", type:"Healthcare management system", desc:"A hospital management project designed to organize core workflows through a structured application.", stack:["Java","Spring Boot","Microservices"], repo:"https://github.com/shivamsahu0108/Hospital-Mangement-System", demo:"", color:"purple" },
  { n:"03", name:"Go Taxi Service", type:"Business website", desc:"A responsive taxi service website with travel information, destination highlights and customer enquiry flows.", stack:["React","Vite","Tailwind CSS"], repo:"https://github.com/shivamsahu0108/go-taxi-service", demo:"https://gotaxiservice.netlify.app/", demoLabel:"Live website", color:"orange" },
  { n:"04", name:"VibeShare", type:"Social application", desc:"A social application project with user interactions and real-time chat capabilities.", stack:["React","Spring Boot","WebSocket"], repo:"https://github.com/shivamsahu0108/social-vibe-app", demo:"", color:"blue" },
  { n:"05", name:"EstateVision AI", type:"Real estate technology", desc:"An AI-oriented real estate platform concept for builder projects, plot information, customer enquiries and layout-processing workflows.", stack:["React","TypeScript","Django REST","PostgreSQL"], repo:"https://github.com/shivamsahu0108/EstateVision-AI", demo:"", color:"mint" },
  { n:"06", name:"Splitr", type:"Expense splitting application", desc:"A group expense application for recording shared costs, tracking balances and managing settlements between friends or groups.", stack:["Next.js","React","Convex","Clerk"], repo:"https://github.com/shivamsahu0108/split-clone", demo:"", color:"purple" },
  { n:"07", name:"SecureChatApp", type:"Real-time messaging platform", desc:"A messaging application with JWT-based authentication, WebSocket chat and a Flutter mobile client backed by Spring Boot.", stack:["Java","Spring Boot","Flutter","WebSocket"], repo:"https://github.com/shivamsahu0108/SecureChatApp", demo:"", color:"blue" },
  { n:"08", name:"LearnSphere", type:"Learning platform", desc:"A learning platform with course pages, admin workflows and a REST backend designed around learner and course content management.", stack:["Node.js","Express","MongoDB","JWT"], repo:"https://github.com/shivamsahu0108/learnsphere", demo:"", color:"orange" },
  { n:"09", name:"Job Board Platform", type:"Recruitment web application", desc:"A full-stack job portal with candidate and employer accounts, job listings, resume uploads and application tracking.", stack:["Django REST","React","TypeScript","PostgreSQL"], repo:"https://github.com/shivamsahu0108/CodeAlpha_JobboardPlatform", demo:"https://codealphajobplatform.netlify.app/", demoLabel:"Live website", color:"mint" },
  { n:"10", name:"Restaurant Management System", type:"Restaurant operations API", desc:"A REST API for menu management, table reservations, orders, inventory deduction and daily sales reporting.", stack:["Python","Django REST","PostgreSQL"], repo:"https://github.com/shivamsahu0108/CodeAlpha_RestaurantManagement", demo:"https://codealpharestaurantmanagement.onrender.com", demoLabel:"Live API", color:"purple" },
  { n:"11", name:"URL Shortener", type:"Backend API project", desc:"A Flask API that creates unique short codes, stores URL mappings and redirects short links to their original destinations.", stack:["Python","Flask","SQLite","REST API"], repo:"https://github.com/shivamsahu0108/CodeAlpha_URLShortener", demo:"", color:"orange" },
  { n:"12", name:"Background Remover", type:"AI image utility", desc:"A web tool combining a React interface and Flask image-processing backend to remove image backgrounds and prepare edited outputs.", stack:["React","Flask","Python","rembg"], repo:"https://github.com/shivamsahu0108/backgroundRemover", demo:"", color:"blue" },
  { n:"13", name:"Klimate Weather", type:"Weather dashboard", desc:"A weather-focused frontend project built with React and TypeScript, using modern data-fetching and charting libraries.", stack:["React","TypeScript","TanStack Query","Recharts"], repo:"https://github.com/shivamsahu0108/Klimate-Weather", demo:"", color:"mint" }
];

const skills = [
  { icon:Code2, title:"Frontend", desc:"React.js · Next.js · JavaScript · TypeScript · Tailwind CSS" },
  { icon:Server, title:"Backend", desc:"Java · Spring Boot · Spring Security · REST APIs · JWT" },
  { icon:Database, title:"Databases", desc:"MySQL · PostgreSQL · JPA · Hibernate" },
  { icon:Layers3, title:"Tools & workflow", desc:"Git · GitHub · Maven · Vite · Postman · Netlify" }
];

const reveal = { hidden:{opacity:0,y:24}, show:{opacity:1,y:0,transition:{duration:.65}} };

function App() {
  const wa = profile.whatsapp
    ? `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent("Hi Shivam, I'd like to discuss a web development project.")}`
    : "";
  return <div className="shell">
    <div className="glow g1" /><div className="glow g2" />
    <header className="top">
      <a className="brand" href="#home"><b>S<span>.</span></b><small>SHIVAM SAHU</small></a>
      <nav><a href="#about">About</a><a href="#skills">Skills</a><a href="#work">Work</a><a href="#contact" className="navbtn">Let's talk ↗</a></nav>
    </header>

    <main>
      <section className="hero wrap" id="home">
        <div className="heroText">
          <div className="eyebrow"><i /> INDEPENDENT DEVELOPER · OPEN TO PROJECTS</div>
          <motion.h1 initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{duration:.8}}>I build digital<br/><em>things that work.</em></motion.h1>
          <p>Hey, I'm <b>Shivam</b> — an independent full-stack web developer focused on building <span>web applications that solve real problems.</span></p>
          <div className="actions">
            <a className="primary" href="#work">Explore my work <ArrowDownRight size={16}/></a>
            <a className="secondary" href={`mailto:${profile.email}?subject=Freelance%20project%20enquiry`}>Start a project <ArrowUpRight size={16}/></a>
          </div>
          <div className="social">
            <a href={profile.github} target="_blank" rel="noreferrer"><Github/> GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin/> LinkedIn</a>
            <a href={`mailto:${profile.email}`}><Mail/> Email</a>
            {wa && <a href={wa} target="_blank" rel="noreferrer"><MessageCircle/> WhatsApp</a>}
          </div>
        </div>
        <motion.div className="visual" initial={{opacity:0,scale:.9}} animate={{opacity:1,scale:1}} transition={{delay:.25}}>
          <div className="orbit o1"/><div className="orbit o2"/>
          <div className="code">
            <div className="codehead"><span>● ● ●</span> developer.ts</div>
            <pre><i>01</i> <b>const</b> developer = {"{"}
<i>02</i>   name: <strong>'Shivam Sahu'</strong>,
<i>03</i>   role: <strong>'Full-Stack Dev'</strong>,
<i>04</i>   frontend: <label>'React'</label>,
<i>05</i>   backend: <label>'Spring Boot'</label>,
<i>06</i>   available: <b>true</b>
<i>07</i> {"}"};<br/><i>08</i> <small>// Turning ideas into products.</small>
<i>09</i> build(<strong>'something great'</strong>);<u>_</u></pre>
          </div>
          <span className="chip c1">⚛ React.js</span><span className="chip c2">☕ Java</span><span className="chip c3">✳ Spring Boot</span>
          <div className="visualfoot">— BASED IN INDIA · WORKING WORLDWIDE</div>
        </motion.div>
        <a className="scroll" href="#about">— SCROLL TO EXPLORE</a>
      </section>

      <section className="wrap section" id="about">
        <div className="kicker">01 / ABOUT ME</div>
        <div className="about">
          <motion.h2 variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}}>Curious mind.<br/><span>Practical builder.</span></motion.h2>
          <div>
            <p className="big">I’m an independent full-stack developer who enjoys turning ideas into clean, useful web experiences.</p>
            <p>I work across the stack — from crafting responsive interfaces with React to building backend services and REST APIs with Java and Spring Boot. I care about readable code, thoughtful user experience and solutions that make everyday work easier.</p>
            <div className="facts"><span><b>01</b> Frontend to backend</span><span><b>02</b> Build with purpose</span><span><b>03</b> Always learning</span></div>
          </div>
        </div>
      </section>

      <section className="wrap section" id="skills">
        <div className="heading"><div><div className="kicker">02 / WHAT I USE</div><h2>My toolkit<span>.</span></h2></div><p>Tools I use to design, build<br/>and ship dependable products.</p></div>
        <div className="skills">{skills.map((s,i)=>{const Icon=s.icon;return <motion.article variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}} key={s.title}><Icon/><h3>{s.title}</h3><p>{s.desc}</p><small>0{i+1}</small></motion.article>})}</div>
      </section>

      <section className="wrap section" id="work">
        <div className="heading"><div><div className="kicker">03 / SELECTED WORK</div><h2>Things I've built<span>.</span></h2></div><p>A selection of projects where<br/>ideas meet implementation.</p></div>
        <div className="projects">{projects.map(p=><motion.article className={`project ${p.color}`} variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}} key={p.n}>
          <small>{p.n}</small><div><label>{p.type}</label><h3>{p.name}</h3><p>{p.desc}</p><div className="tags">{p.stack.map(t=><span key={t}>{t}</span>)}</div>
          <div className="links">{p.demo&&<a href={p.demo} target="_blank" rel="noreferrer">{p.demoLabel || "Live preview"} <ExternalLink/></a>}{p.repo&&<a href={p.repo} target="_blank" rel="noreferrer">Source code <Github/></a>}</div></div>
          <div className="mock"><div className="mockwindow"><div>● ● ●</div><hr/><span/><span/><span/><b/></div><strong>✳</strong></div>
        </motion.article>)}</div>
      </section>

      <section className="wrap section" id="services">
        <div className="heading"><div><div className="kicker">04 / HOW I CAN HELP</div><h2>What I can build<span>.</span></h2></div><p>Direct collaboration, clear scope<br/>and useful outcomes.</p></div>
        <div className="services">
          <article><b>01</b><div><h3>Websites & interfaces</h3><p>Responsive websites, landing pages and polished React frontends.</p></div><ArrowUpRight/></article>
          <article><b>02</b><div><h3>Full-stack applications</h3><p>Frontend, backend, authentication and database-connected applications.</p></div><ArrowUpRight/></article>
          <article><b>03</b><div><h3>APIs & integrations</h3><p>REST APIs, third-party integrations, backend features and bug fixes.</p></div><ArrowUpRight/></article>
        </div>
        <p className="note">Every project is scoped individually. Share your requirements for a clear estimate before work begins.</p>
      </section>

      <section className="wrap section contact" id="contact">
        <div className="contactbox">
          <div className="kicker">05 / HAVE A PROJECT?</div>
          <h2>Let's make<br/><em>it happen.</em></h2>
          <p>Have an idea, a feature to build or a project that needs a developer? Tell me what you're working on. Let's talk.</p>
          <a className="primary" href={`mailto:${profile.email}?subject=Project%20enquiry%20for%20Shivam`}>Tell me about your project <ArrowUpRight/></a>
          <div className="contactlinks">
            <a href={`mailto:${profile.email}`}><Mail/> Email ↗</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin/> LinkedIn ↗</a>
            <a href={profile.github} target="_blank" rel="noreferrer"><Github/> GitHub ↗</a>
            {wa ? <a href={wa} target="_blank" rel="noreferrer"><MessageCircle/> WhatsApp ↗</a> : <span><MessageCircle/> Add WhatsApp number in config</span>}
            {profile.resume && <a href={profile.resume} target="_blank" rel="noreferrer">Resume ↗</a>}
          </div>
        </div>
      </section>
    </main>
    <footer className="wrap footer"><a className="brand" href="#home"><b>S<span>.</span></b><small>SHIVAM SAHU</small></a><span>Designed & built with care · © {new Date().getFullYear()} Shivam Sahu</span><a href="#home">Back to top ↑</a></footer>
  </div>;
}
createRoot(document.getElementById("root")).render(<App/>);