import React, { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle, ArrowUp, Menu, X, ArrowUpRight } from "lucide-react";
import "./index.css";

const GH = "https://github.com/shivamsahu0108";
const LI = "https://linkedin.com/in/shivam-sahu-bb506b345";
const EMAIL = "sahushivam2564@gmail.com";
const WA = import.meta.env.VITE_WHATSAPP;
const FORM = import.meta.env.VITE_FORM_ENDPOINT;

const projects = [
  { name: "Zosh E-commerce", repo: "zosh-ecommerce", color: "#A3FFBF", tags: ["React", "Spring Boot", "MySQL"], blurb: "Online store with product catalogue, cart and secure checkout flow." },
  { name: "Hospital Management System", repo: "Hospital-Mangement-System", color: "#9D8CFF", tags: ["Java", "Spring Boot", "MySQL"], blurb: "Manages patients, doctors and appointments through a role-based backend." },
  { name: "Go Taxi Service", repo: "go-taxi-service", live: "https://gotaxiservice.netlify.app/", shot: "https://image.thum.io/get/https://gotaxiservice.netlify.app/", color: "#FFD27A", tags: ["React", "REST API"], blurb: "Ride booking application with a clean request-and-track experience." },
  { name: "VibeShare", repo: "social-vibe-app", color: "#FF8FB1", tags: ["React", "Spring Boot", "WebSocket"], blurb: "Social sharing app with user interactions and real-time chat." },
  { name: "EstateVision AI", repo: "EstateVision-AI", color: "#7AD7FF", tags: ["React", "TypeScript", "Django REST"], blurb: "Real-estate platform concept for builder projects and customer enquiries." },
  { name: "Splitr", repo: "split-clone", color: "#A3FFBF", tags: ["Next.js", "TypeScript"], blurb: "Split shared expenses and track balances with friends." },
  { name: "SecureChatApp", repo: "SecureChatApp", color: "#9D8CFF", tags: ["Java", "Spring Boot", "JWT", "WebSocket"], blurb: "Messaging application with token-based authentication and real-time chat." },
  { name: "LearnSphere", repo: "learnsphere", color: "#FFD27A", tags: ["Node.js", "Express", "MongoDB"], blurb: "Learning platform with course pages and content management." },
  { name: "Job Board Platform", repo: "CodeAlpha_JobboardPlatform", live: "https://codealphajobplatform.netlify.app/", color: "#FF8FB1", tags: ["Django REST", "React", "PostgreSQL"], blurb: "Job portal with employer and candidate accounts, resumes and applications." },
  { name: "Restaurant Management System", repo: "CodeAlpha_RestaurantManagement", live: "https://codealpharestaurantmanagement.onrender.com", color: "#7AD7FF", tags: ["Python", "Django REST", "PostgreSQL"], blurb: "API for menus, reservations, orders, inventory and daily sales." },
  { name: "URL Shortener", repo: "CodeAlpha_URLShortener", color: "#A3FFBF", tags: ["Python", "Flask", "SQLite"], blurb: "Create short links and redirect visitors to their original URLs." },
  { name: "Klimate Weather", repo: "Klimate-Weather", color: "#FFD27A", tags: ["React", "TypeScript"], blurb: "Weather dashboard with forecasts by city." }
];
const repoUrl = p => `${GH}/${p.repo}`;
const skills = {
  "Frontend": ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML & CSS"],
  "Backend": ["Java", "Spring Boot", "Spring Security", "JWT Authentication", "REST APIs", "Python", "Django REST Framework"],
  "Database": ["MySQL", "PostgreSQL"],
  "Tools": ["Git & GitHub", "Maven", "Vite", "Netlify", "Postman"]
};
const services = [
  ["Custom website development", "Fast, accessible sites designed around your content."],
  ["React frontend development", "Component-driven interfaces that stay maintainable."],
  ["Full-stack web applications", "From database to UI, built and shipped by one person."],
  ["Java & Spring Boot backends", "Structured, secure services for production use."],
  ["REST API development", "Clear, documented endpoints your apps can rely on."],
  ["Database integration", "MySQL and PostgreSQL schemas that fit your data."],
  ["Authentication & authorization", "Login, roles and JWT-secured access."],
  ["Improvements & bug fixes", "Take over an existing site and make it better."]
];
const steps = [["Discover", "Understand the client's requirements."], ["Plan", "Choose the right architecture and technologies."], ["Build", "Develop the frontend and backend."], ["Test", "Validate functionality and user experience."], ["Deploy", "Launch and support the application."]];
const links = ["Home", "About", "Skills", "Projects", "Services", "Contact"];

function Reveal({ children, delay = 0, y = 28, as = "div", ...rest }) {
  const reduce = useReducedMotion();
  const M = motion[as];
  return <M initial={reduce ? false : { opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .7, delay, ease: [.2, .7, .2, 1] }} {...rest}>{children}</M>;
}
function Glow() {
  const [pos, setPos] = useState({ x: -400, y: -400 });
  const [fine, setFine] = useState(false);
  useEffect(() => {
    const ok = window.matchMedia("(hover:hover) and (pointer:fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setFine(ok);
    if (!ok) return;
    const m = e => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("pointermove", m, { passive: true });
    return () => window.removeEventListener("pointermove", m);
  }, []);
  return fine ? <div className="glow" aria-hidden style={{ transform: `translate(${pos.x - 250}px, ${pos.y - 250}px)` }} /> : null;
}
function Nav() {
  const [open, setOpen] = useState(false);
  const go = () => setOpen(false);
  return <header className="nav"><a className="logo" href="#home">SHIVAM SAHU</a><nav className={open ? "open" : ""} aria-label="Main">{links.map(l => <a key={l} href={`#${l.toLowerCase()}`} onClick={go}>{l}</a>)}<a className="pill" href="#contact" onClick={go}>Let's Talk</a></nav><button className="burger" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={22}/> : <Menu size={22}/>}</button></header>;
}
function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, reduce ? 0 : -60]);
  const orbit = ["Java", "React", "Spring", "Next.js", "SQL"];
  const code = ["const developer = {", "  name: 'Shivam Sahu',", "  stack: ['Java', 'Spring Boot', 'React'],", "  status: 'open to freelance',", "};"];
  return <section id="home" className="hero"><div className="hero-copy"><p className="avail"><span className="dot"/> Available for freelance projects</p><p className="kicker">Independent full-stack developer</p><h1>Turning ideas into <span className="grad">digital experiences.</span></h1><p className="lead">I build modern digital experiences, scalable backend systems and beautiful web applications.</p><div className="row"><a className="btn primary" href="#projects">Explore my work</a><a className="btn" href="#contact">Let's collaborate</a></div><div className="row social"><a href={GH} aria-label="GitHub" target="_blank" rel="noreferrer"><Github/></a><a href={LI} aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin/></a><a href={`mailto:${EMAIL}`} aria-label="Email"><Mail/></a></div></div><motion.div className="visual" style={{ y }} aria-hidden>{orbit.map((t,i)=><motion.span key={t} className="chip" style={{ "--i":i }} animate={reduce ? {} : { y:[0,-10,0] }} transition={{ duration:4+i, repeat:Infinity, ease:"easeInOut" }}>{t}</motion.span>)}<div className="editor"><div className="bar"><i/><i/><i/><b>developer.js</b></div><pre>{code.map((line,i)=><motion.div key={line} initial={reduce ? false : {opacity:0,x:-8}} animate={{opacity:1,x:0}} transition={{delay:.8+i*.35}}><span className="kw">{i===0 ? "const" : ""}</span>{i===0 ? line.slice(5) : line}</motion.div>)}</pre><div className="term"><span>$</span> whoami<br/><em>B.Tech CSE · Class of 2027 · India</em><span className="caret"/></div></div></motion.div><a className="scroll" href="#about" aria-label="Scroll to About"><span/></a></section>;
}
function About() {
  const facts = [["Location","India"],["Education","B.Tech CSE · 2027"],["Status","Open to freelance projects"],["Primary stack","Java + React + Spring Boot"]];
  return <section id="about" className="sec about"><Reveal as="h2">More than writing code. I build solutions.</Reveal><div className="about-grid"><Reveal className="prose" delay={.1}><p>I like software that is easy to use on the surface and well organised underneath. My philosophy is simple: understand the problem first, then pick the smallest design that solves it properly.</p><p>I enjoy both sides of the stack: shaping interfaces in React and Next.js, and building secure, structured services with Spring Boot, JWT and relational databases.</p><p>When something breaks, I break it down: reproduce it, isolate it, fix the cause. I keep learning by building real projects and reading other people's code.</p></Reveal><Reveal as="dl" className="facts" delay={.2}>{facts.map(([k,v])=><div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</Reveal></div></section>;
}
function Skills() {
  return <section id="skills" className="sec"><Reveal as="h2">Tools I build with</Reveal><div className="skills">{Object.entries(skills).map(([cat,list],i)=><Reveal key={cat} delay={i*.08} className="skill-col"><h3>{cat}</h3><ul>{list.map(s=><li key={s} tabIndex={0}>{s}</li>)}</ul></Reveal>)}</div></section>;
}
// Preview priority: custom screenshot in /public/shots -> thum.io live-site capture -> initials fallback.
const autoShot = (url) => `https://image.thum.io/get/width/1200/crop/750/noanimate/${url}`;

function Project({ p, i, big }) {
  const [failed, setFailed] = useState(false);
  const src = p.shot || (p.live ? autoShot(p.live) : null);
  return <Reveal as="article" className={`proj ${big ? "big" : ""} ${i % 2 ? "flip" : ""}`} style={{ "--c": p.color }}>
    <div className="shot">
      {src && !failed
        ? <img src={src} alt={`${p.name} website preview`} loading="lazy" width="1200" height="750" onError={() => setFailed(true)} />
        : <span aria-hidden>{p.name.split(" ").map(w => w[0]).join("").slice(0, 3)}</span>}
      {p.live && <a className="badge" href={p.live} target="_blank" rel="noreferrer"><i /> Live</a>}
    </div>
    <div className="info"><h3>{p.name}</h3><p>{p.blurb}</p><ul className="tags">{p.tags.map(t => <li key={t}>{t}</li>)}</ul>
      <div className="row"><a className="link" href={repoUrl(p)} target="_blank" rel="noreferrer"><Github size={16}/> Source code</a>{p.live && <a className="link" href={p.live} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={16}/></a>}</div>
    </div>
  </Reveal>;
}
function Projects() {
  const [all,setAll] = useState(false);
  return <section id="projects" className="sec"><Reveal as="h2">Selected projects</Reveal><div className="plist">{projects.slice(0,3).map((p,i)=><Project key={p.name} p={p} i={i} big/>)}{all && projects.slice(3).map((p,i)=><Project key={p.name} p={p} i={i+3}/>)}</div><button className="btn wide" onClick={()=>setAll(!all)} aria-expanded={all}>{all ? "Show fewer projects" : `View all ${projects.length} projects`}</button></section>;
}
function Services() {
  return <section id="services" className="sec"><Reveal as="h2">How I can help</Reveal><div className="services">{services.map(([t,d],i)=><Reveal key={t} delay={(i%2)*.08} className="svc"><h3>{t}</h3><p>{d}</p></Reveal>)}</div><ol className="steps">{steps.map(([t,d],i)=><Reveal as="li" key={t} delay={i*.1}><b>0{i+1}</b><h3>{t}</h3><p>{d}</p></Reveal>)}</ol></section>;
}
function Contact() {
  const [state,setState] = useState({s:"idle",msg:""});
  async function submit(e) {
    e.preventDefault();
    if (!FORM) return setState({s:"error",msg:`Form service isn't configured yet. Email me at ${EMAIL} instead.`});
    setState({s:"sending",msg:""});
    try {
      const r = await fetch(FORM,{method:"POST",headers:{Accept:"application/json"},body:new FormData(e.target)});
      if (!r.ok) throw new Error();
      e.target.reset(); setState({s:"ok",msg:"Message sent. I'll reply by email."});
    } catch { setState({s:"error",msg:`Couldn't send your message. Please email ${EMAIL}.`}); }
  }
  return <section id="contact" className="sec contact"><Reveal as="h2">Have an idea? Let's build something great.</Reveal><div className="contact-grid"><div className="channels"><a href={`mailto:${EMAIL}`}><Mail/> {EMAIL}</a>{WA && <a href={`https://wa.me/${WA}`} target="_blank" rel="noreferrer"><MessageCircle/> WhatsApp</a>}<a href={LI} target="_blank" rel="noreferrer"><Linkedin/> LinkedIn</a><a href={GH} target="_blank" rel="noreferrer"><Github/> GitHub</a></div><form onSubmit={submit}><label>Name<input name="name" required autoComplete="name"/></label><label>Email<input name="email" type="email" required autoComplete="email"/></label><label>Project type<select name="project_type" defaultValue=""><option value="" disabled>Select one</option>{["Website","Frontend","Full-stack app","Backend / API","Fixes & improvements"].map(o=><option key={o}>{o}</option>)}</select></label><label>Budget<input name="budget" placeholder="e.g. ₹10,000"/></label><label className="full">Project description<textarea name="message" rows={5} required/></label><button className="btn primary" disabled={state.s==="sending"}>{state.s==="sending" ? "Sending…" : "Send message"}</button><p role="status" className={`status ${state.s}`}>{state.msg}</p></form></div></section>;
}
function Footer() {
  return <footer className="foot"><div><a className="logo" href="#home">SHIVAM SAHU</a><p>Independent full-stack developer building web applications and backend systems.</p></div><nav aria-label="Footer">{links.map(l=><a key={l} href={`#${l.toLowerCase()}`}>{l}</a>)}</nav><div className="row social"><a href={GH} aria-label="GitHub" target="_blank" rel="noreferrer"><Github/></a><a href={LI} aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin/></a><a href={`mailto:${EMAIL}`} aria-label="Email"><Mail/></a></div><small>© {new Date().getFullYear()} Shivam Sahu</small><a className="top" href="#home" aria-label="Back to top"><ArrowUp/></a></footer>;
}
export default function App() { return <><Glow/><Nav/><main><Hero/><About/><Skills/><Projects/><Services/><Contact/></main><Footer/></>; }
