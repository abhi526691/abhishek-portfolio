"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

const COLORS = {
  paper: "#f3efe6",
  paper2: "#ece6d9",
  ink: "#1b1813",
  ink2: "#736b5d",
  ink3: "#a39a88",
  accent: "#9c4a35",
  line: "rgba(27,24,19,0.14)",
  line2: "rgba(27,24,19,0.07)",
};

const SERIF = "var(--font-instrument-serif), serif";
const MONO = "var(--font-jetbrains-mono), monospace";

const CV_URL =
  "https://drive.google.com/file/d/1f0oZLFr8vq9aGNEVU2BmW8xiFALEbdDR/view";

const PORTRAIT_SRC =
  "https://abhishekpandey2000.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAbhishekPandeyPhoto.f9022457.jpg&w=1080&q=80";

const BUILD_WORDS = [
  "agents that act.",
  "RAG that retrieves.",
  "guardrails that hold.",
  "evals that catch.",
  "LoRA that adapts.",
  "systems that ship.",
];

const CHAPTERS = [
  { n: "00", id: "chap-00", label: "Frontispiece" },
  { n: "01", id: "chap-01", label: "The Fork" },
  { n: "02", id: "chap-02", label: "The Choice" },
  { n: "03", id: "chap-03", label: "First Production" },
  { n: "04", id: "chap-04", label: "The Awakening" },
  { n: "05", id: "chap-05", label: "Crossing Over" },
  { n: "06", id: "chap-06", label: "Now" },
  { n: "07", id: "chap-07", label: "The Work" },
  { n: "08", id: "chap-08", label: "Get in touch" },
];

const AWAKENING_STACK = [
  { name: "GPT", role: "first contact" },
  { name: "Ada", role: "embeddings" },
  { name: "davinci", role: "completion" },
  { name: "Pinecone", role: "vector store" },
];

const DISCIPLINES = [
  {
    tag: "Agentic RAG",
    project: "ResearchIQ",
    status: "Live",
    thumb: "demo — paper Q&A",
    thesis:
      "OCR ingests scanned + native PDFs; a transformer pipeline extracts structured insight; a RAG layer answers questions over your personal corpus in natural language.",
    stack: ["LangChain", "Mistral", "MongoDB", "FastAPI"],
    demoUrl: "https://www.loom.com/share/1b2c76b98aff4cb8bac37735f1212109",
    demoLabel: "Watch demo ↗",
    sourceUrl: "https://github.com/abhi526691/ResearchIQ",
  },
  {
    tag: "Guardrails",
    project: "SuperLLM",
    status: "Live",
    thumb: "demo — NL → SQL",
    thesis:
      "Natural-language-to-SQL that treats schema as first-class context — and blocks destructive queries before they ever reach the database. Sub-second on Groq.",
    stack: ["Groq", "ChromaDB", "SQL", "FastAPI"],
    demoUrl: "https://www.loom.com/share/2bf92ff9c0364b3abba1be2cf03bf815",
    demoLabel: "Watch demo ↗",
    sourceUrl: "https://github.com/abhi526691/SuperLLM",
  },
  {
    tag: "Agents",
    project: "Orchestrator",
    status: "Building",
    thumb: "demo coming",
    thesis:
      "A tool-using, memory-keeping agent with a human in the loop — it updates my tracker files and drafts email replies, but never sends without my confirmation.",
    stack: ["LangGraph", "Tools", "Memory", "HITL"],
    demoUrl: "",
    demoLabel: "Demo soon",
    sourceUrl: "https://github.com/abhi526691",
  },
  {
    tag: "LLMOps",
    project: "Serving & Observability",
    status: "Building",
    thumb: "demo coming",
    thesis:
      "The boring infra that keeps AI up: containerized inference, cost-aware serving, tracing and monitoring — the stack I run under Creatiz on Azure.",
    stack: ["Docker", "Azure AKS", "Tracing", "CI/CD"],
    demoUrl: "",
    demoLabel: "Demo soon",
    sourceUrl: "https://github.com/abhi526691",
  },
  {
    tag: "Evals",
    project: "LogForge",
    status: "Building",
    thumb: "demo coming",
    thesis:
      "A tool that mines real production logs to generate grounded test sets — so evaluation reflects what users actually do, not what I imagined they would.",
    stack: ["Python", "Eval", "Datasets", "LLM-judge"],
    demoUrl: "",
    demoLabel: "Demo soon",
    sourceUrl: "https://github.com/abhi526691",
  },
  {
    tag: "Fine-tuning",
    project: "LoRA Pipeline",
    status: "Building",
    thumb: "demo coming",
    thesis:
      "A reproducible LoRA pipeline: take a base model, adapt it on a domain dataset, and benchmark the lift — from data prep to evaluation, end to end.",
    stack: ["PyTorch", "LoRA", "HF", "Benchmarks"],
    demoUrl: "",
    demoLabel: "Demo soon",
    sourceUrl: "https://github.com/abhi526691",
  },
];

const SOCIALS = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/abhishekpandey--/" },
  { label: "GitHub", url: "https://github.com/abhi526691" },
  { label: "Email", url: "mailto:abhi526691shek@gmail.com" },
];

function ChapterSection({
  id,
  screenLabel,
  chapterLabel,
  n,
  meta,
  title,
  numColor = COLORS.ink3,
  children,
}: {
  id: string;
  screenLabel: string;
  chapterLabel: string;
  n: string;
  meta: string;
  title: ReactNode;
  numColor?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      data-chapter={n}
      data-screen-label={screenLabel}
      style={{ padding: "clamp(70px,11vh,150px) 0", borderTop: `1px solid ${COLORS.line}` }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "170px 1fr",
          gap: "clamp(20px,4vw,56px)",
          alignItems: "start",
        }}
      >
        <div style={{ position: "sticky", top: 120 }}>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 11,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: COLORS.accent,
              display: "block",
            }}
          >
            {chapterLabel}
          </span>
          <span
            style={{
              fontFamily: SERIF,
              fontSize: 54,
              lineHeight: 1,
              color: numColor,
              display: "block",
              marginTop: 6,
            }}
          >
            {n}
          </span>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 11,
              color: COLORS.ink2,
              display: "block",
              marginTop: 10,
            }}
          >
            {meta}
          </span>
        </div>
        <div>
          <h2
            style={{
              fontFamily: SERIF,
              fontWeight: 400,
              fontSize: "clamp(30px,3.6vw,46px)",
              lineHeight: 1.1,
              margin: "0 0 26px",
            }}
          >
            {title}
          </h2>
          {children}
        </div>
      </div>
    </section>
  );
}

const pBody: CSSProperties = { fontSize: 18, lineHeight: 1.72, color: COLORS.ink, maxWidth: "60ch", margin: "0 0 22px" };
const pMuted: CSSProperties = { fontSize: 18, lineHeight: 1.72, color: COLORS.ink2, maxWidth: "60ch", margin: 0 };

export default function Portfolio() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [activeChapter, setActiveChapter] = useState("00");
  const [buildIndex, setBuildIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setBuildIndex((i) => (i + 1) % BUILD_WORDS.length);
    }, 2200);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const c = e.target.getAttribute("data-chapter");
            if (c) setActiveChapter(c);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    const els = (root ?? document).querySelectorAll("[data-chapter]");
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const t = document.getElementById(id);
    if (t) {
      const y = t.getBoundingClientRect().top + window.scrollY - 18;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div
      ref={rootRef}
      style={{
        background: COLORS.paper,
        color: COLORS.ink,
        fontFamily: "var(--font-inter), sans-serif",
        WebkitFontSmoothing: "antialiased",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      {/* ===== TOP BAR ===== */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px clamp(20px,4vw,52px)",
          pointerEvents: "none",
        }}
      >
        <a
          href="#chap-00"
          onClick={(e) => handleNavClick(e, "chap-00")}
          style={{
            pointerEvents: "auto",
            textDecoration: "none",
            color: COLORS.ink,
            display: "flex",
            alignItems: "baseline",
            gap: 10,
          }}
        >
          <span style={{ fontFamily: SERIF, fontSize: 21, letterSpacing: 0.2 }}>Abhishek Pandey</span>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 10,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              color: COLORS.ink2,
            }}
          >
            AI Engineer
          </span>
        </a>
        <a
          href={CV_URL}
          target="_blank"
          rel="noreferrer"
          style={{
            pointerEvents: "auto",
            textDecoration: "none",
            fontFamily: MONO,
            fontSize: 11,
            letterSpacing: 1,
            textTransform: "uppercase",
            color: COLORS.ink,
            border: `1px solid ${COLORS.line}`,
            borderRadius: 999,
            padding: "8px 16px",
            background: "rgba(243,239,230,0.7)",
            backdropFilter: "blur(6px)",
          }}
        >
          CV ↗
        </a>
      </header>

      {/* ===== CHAPTER RAIL ===== */}
      <nav
        style={{
          position: "fixed",
          left: "clamp(14px,2.4vw,34px)",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 55,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {CHAPTERS.map((ch) => {
          const on = ch.n === activeChapter;
          return (
            <a
              key={ch.id}
              href={`#${ch.id}`}
              onClick={(e) => handleNavClick(e, ch.id)}
              title={ch.label}
              style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", height: 17 }}
            >
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: 10,
                  letterSpacing: 0.5,
                  color: on ? COLORS.accent : COLORS.ink3,
                  transition: "color .3s",
                  width: 16,
                }}
              >
                {ch.n}
              </span>
              <span
                style={{
                  height: on ? 2 : 1,
                  width: on ? 26 : 11,
                  background: on ? COLORS.accent : COLORS.line,
                  transition: "all .3s",
                }}
              />
            </a>
          );
        })}
      </nav>

      {/* ===== 00 · FRONTISPIECE / HERO ===== */}
      <section
        id="chap-00"
        data-chapter="00"
        data-screen-label="00 Frontispiece"
        style={{
          minHeight: "100vh",
          display: "grid",
          gridTemplateColumns: "1.15fr 0.85fr",
          gap: "clamp(20px,4vw,60px)",
          alignItems: "center",
          padding: "120px clamp(24px,6vw,96px) 64px clamp(56px,8vw,150px)",
          maxWidth: 1500,
          margin: "0 auto",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 34 }}>
            <span
              style={{
                fontFamily: MONO,
                fontSize: 11,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: COLORS.accent,
              }}
            >
              § 00 — Frontispiece
            </span>
            <span style={{ height: 1, width: 46, background: COLORS.line }} />
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                fontFamily: MONO,
                fontSize: 11,
                letterSpacing: 0.5,
                color: COLORS.ink2,
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#3f7d5a" }} />
              Open to senior AI roles
            </span>
          </div>
          <h1
            style={{
              fontFamily: SERIF,
              fontWeight: 400,
              fontSize: "clamp(38px,5.6vw,82px)",
              lineHeight: 1.02,
              letterSpacing: -0.5,
              margin: "0 0 28px",
            }}
          >
            I took the long way to&nbsp;AI&nbsp;—
            <br />
            <span style={{ fontStyle: "italic" }}>through a biology textbook</span>
            {" I never wanted, and a question I couldn't put down."}
          </h1>
          <p style={{ maxWidth: "50ch", fontSize: 17, lineHeight: 1.65, color: COLORS.ink2, margin: "0 0 18px" }}>
            I&apos;m Abhishek, an AI Engineer in Toronto. This isn&apos;t a résumé — it&apos;s the story of how a
            kid pushed toward medicine ended up architecting LLM systems that ship. The work is at the end. The{" "}
            <em style={{ fontStyle: "italic", color: COLORS.ink }}>why</em> is everything before it.
          </p>
          <p style={{ fontFamily: MONO, fontSize: 13, color: COLORS.ink, margin: "0 0 38px" }}>
            I build{" "}
            <span style={{ color: COLORS.accent, borderBottom: `1px solid ${COLORS.accent}`, paddingBottom: 1 }}>
              {BUILD_WORDS[buildIndex]}
            </span>
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <a
              href="#chap-01"
              onClick={(e) => handleNavClick(e, "chap-01")}
              style={{
                textDecoration: "none",
                background: COLORS.ink,
                color: COLORS.paper,
                fontFamily: MONO,
                fontSize: 12,
                letterSpacing: 1,
                textTransform: "uppercase",
                padding: "14px 22px",
                borderRadius: 2,
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              Read the story <span style={{ fontFamily: "var(--font-inter), sans-serif" }}>↓</span>
            </a>
            <a
              href="#chap-07"
              onClick={(e) => handleNavClick(e, "chap-07")}
              style={{
                textDecoration: "none",
                color: COLORS.ink,
                fontFamily: MONO,
                fontSize: 12,
                letterSpacing: 1,
                textTransform: "uppercase",
                padding: "14px 22px",
                border: `1px solid ${COLORS.line}`,
                borderRadius: 2,
              }}
            >
              Skip to the work
            </a>
          </div>
        </div>
        <figure style={{ margin: 0, position: "relative" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={PORTRAIT_SRC}
            alt="Portrait of Abhishek Pandey"
            style={{
              width: "100%",
              aspectRatio: "4/5",
              display: "block",
              objectFit: "cover",
              filter: "grayscale(0.18) contrast(1.02)",
            }}
          />
          <figcaption
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 12,
              fontFamily: MONO,
              fontSize: 11,
              letterSpacing: 0.5,
              color: COLORS.ink2,
              borderTop: `1px solid ${COLORS.line}`,
              paddingTop: 9,
            }}
          >
            <span>Plate I — A. Pandey</span>
            <span>Toronto · 2026</span>
          </figcaption>
        </figure>
      </section>

      {/* ===== STORY CHAPTERS ===== */}
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 clamp(24px,6vw,40px) 0 clamp(56px,8vw,120px)" }}>
        <ChapterSection
          id="chap-01"
          screenLabel="01 The Fork"
          chapterLabel="Chapter I"
          n="01"
          meta="~2014 · Patna, IN"
          title="The fork I didn't choose."
        >
          <p style={pBody}>
            In high school, my parents drew a straight line to medicine. To keep the peace, I took{" "}
            <span style={{ background: "linear-gradient(transparent 62%, rgba(156,74,53,0.18) 62%)" }}>
              biology and mathematics
            </span>{" "}
            as my electives — one for the future they wanted, one I actually liked.
          </p>
          <p style={pMuted}>
            I learned the Krebs cycle. I dissected things. But the question that kept me up at night had nothing
            to do with any of it.
          </p>
          <blockquote style={{ margin: "44px 0 0", padding: "30px 0 30px 32px", borderLeft: `2px solid ${COLORS.accent}` }}>
            <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "clamp(24px,3vw,34px)", lineHeight: 1.3, margin: 0, color: COLORS.ink }}>
              How does a simple computer send a message to a person on the other side of the planet — and solve a
              whole problem from inside a little box?
            </p>
          </blockquote>
        </ChapterSection>

        <ChapterSection
          id="chap-02"
          screenLabel="02 The Choice"
          chapterLabel="Chapter II"
          n="02"
          meta="CS Degree"
          title="So I chose the box."
        >
          <p style={pBody}>
            I picked Computer Science instead of a stethoscope. Somewhere in those years the conviction hardened
            into something I&apos;d stake a career on:{" "}
            <span style={{ color: COLORS.ink, borderBottom: `1px solid ${COLORS.accent}` }}>
              AI was going to shape the future
            </span>{" "}
            — and I wanted to be the one building it, not watching it.
          </p>
          <p style={pMuted}>
            I didn&apos;t have the vocabulary for &quot;AI Engineer&quot; yet. I just knew which direction the
            curiosity pointed, and I started walking.
          </p>
        </ChapterSection>

        <ChapterSection
          id="chap-03"
          screenLabel="03 First Production"
          chapterLabel="Chapter III"
          n="03"
          meta="2021 · Ameex"
          title="Where everyone should start: shipping."
        >
          <p style={pBody}>
            My first tour was as an <strong style={{ fontWeight: 600 }}>Associate Software Engineer at Ameex Technologies</strong> —
            backend APIs for a patient-monitoring platform. Medication adherence, automated safety alerts, real
            people on the other end.
          </p>
          <p style={pMuted}>
            No demo-ware. It taught me the thing models can&apos;t: how to make something other people depend on,
            and keep it up.
          </p>
        </ChapterSection>

        {/* 04 · The Awakening */}
        <section
          id="chap-04"
          data-chapter="04"
          data-screen-label="04 The Awakening"
          style={{ padding: "clamp(80px,13vh,170px) 0", borderTop: `1px solid ${COLORS.line}` }}
        >
          <div style={{ textAlign: "center", marginBottom: 54 }}>
            <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: COLORS.accent }}>
              Chapter IV — 2022·2023 · Dimensionless
            </span>
            <h2
              style={{
                fontFamily: SERIF,
                fontWeight: 400,
                fontSize: "clamp(34px,5vw,64px)",
                lineHeight: 1.06,
                margin: "18px auto 0",
                maxWidth: "18ch",
              }}
            >
              The moment everything tilted.
            </h2>
          </div>
          <div style={{ maxWidth: "64ch", margin: "0 auto" }}>
            <p style={{ fontSize: 19, lineHeight: 1.74, color: COLORS.ink, margin: "0 0 24px" }}>
              At <strong style={{ fontWeight: 600 }}>Dimensionless Technologies</strong> I went full-stack on AI and
              grew into a tech lead. I shipped GenAI for construction bidding and pharma reconciliation —
              proposal-writing time cut by 95%, 50K+ monthly requests on Azure.
            </p>
            <p style={{ fontSize: 19, lineHeight: 1.74, color: COLORS.ink, margin: "0 0 24px" }}>
              Then came the moment that decided the rest of my life. My first hands-on with OpenAI&apos;s GPT — all
              of{" "}
              <span style={{ fontFamily: MONO, fontSize: "0.86em", background: COLORS.paper2, padding: "2px 7px", borderRadius: 3 }}>
                4,000 tokens
              </span>{" "}
              to work with.
            </p>
            <p style={{ fontSize: 19, lineHeight: 1.74, color: COLORS.ink2, margin: 0 }}>
              I generated embeddings with <span style={{ color: COLORS.ink }}>Ada</span> and{" "}
              <span style={{ color: COLORS.ink }}>davinci</span>, stored the vectors in{" "}
              <span style={{ color: COLORS.ink }}>Pinecone</span>, and watched a machine retrieve{" "}
              <em style={{ fontStyle: "italic", color: COLORS.ink }}>meaning</em> on demand. That was it. The
              curiosity from a teenage bedroom finally had hardware. I was hooked for good.
            </p>
          </div>
          <figure
            style={{
              margin: "54px auto 0",
              maxWidth: 760,
              border: `1px solid ${COLORS.line}`,
              borderRadius: 4,
              background: COLORS.paper2,
              overflow: "hidden",
            }}
          >
            <figcaption
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "11px 18px",
                borderBottom: `1px solid ${COLORS.line}`,
                fontFamily: MONO,
                fontSize: 11,
                letterSpacing: 0.5,
                color: COLORS.ink2,
              }}
            >
              <span>Specimen — the stack that hooked me</span>
              <span style={{ color: COLORS.accent }}>circa 2022</span>
            </figcaption>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
              {AWAKENING_STACK.map((s) => (
                <div key={s.name} style={{ padding: "22px 16px", borderRight: `1px solid ${COLORS.line2}`, textAlign: "center" }}>
                  <div style={{ fontFamily: SERIF, fontSize: 26, color: COLORS.ink }}>{s.name}</div>
                  <div style={{ fontFamily: MONO, fontSize: 10, letterSpacing: 0.5, textTransform: "uppercase", color: COLORS.ink2, marginTop: 6 }}>
                    {s.role}
                  </div>
                </div>
              ))}
            </div>
          </figure>
        </section>

        <ChapterSection
          id="chap-05"
          screenLabel="05 Crossing Over"
          chapterLabel="Chapter V"
          n="05"
          meta="Canada · Postgrad"
          title="Strong enough to move countries."
        >
          <p style={pBody}>
            The pull was strong enough to cross an ocean. I came to{" "}
            <strong style={{ fontWeight: 600 }}>Canada for a postgraduate degree in AI &amp; Data Science</strong> —
            to turn instinct into rigor, and intuition into something I could defend with math.
          </p>
          <p style={pMuted}>Same question as the teenager had. Better tools to answer it.</p>
        </ChapterSection>

        <ChapterSection
          id="chap-06"
          screenLabel="06 Now"
          chapterLabel="Chapter VI"
          n="06"
          meta="2026 · Creatiz"
          title="Now: founding the AI from zero."
          numColor={COLORS.accent}
        >
          <p style={pBody}>
            Today I&apos;m <strong style={{ fontWeight: 600 }}>Founding AI Engineer at Creatiz</strong>, building a
            tool that helps LinkedIn creators and founders write in their own voice — generating posts from their{" "}
            <em style={{ fontStyle: "italic" }}>DNA</em>, scheduling them, and analyzing what actually lands.
          </p>
          <p style={pMuted}>
            Multi-modal pipelines, an agentic research-and-draft layer, and the eval + observability stack
            underneath — all owned end to end.
          </p>
        </ChapterSection>
      </div>

      {/* ===== 07 · THE WORK ===== */}
      <section
        id="chap-07"
        data-chapter="07"
        data-screen-label="07 The Work"
        style={{
          background: COLORS.ink,
          color: COLORS.paper,
          padding: "clamp(70px,10vh,130px) clamp(24px,6vw,40px) clamp(80px,11vh,150px) clamp(56px,8vw,120px)",
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ maxWidth: "62ch", marginBottom: "clamp(42px,6vh,72px)" }}>
            <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "#d98a72" }}>
              § 07 — The Work
            </span>
            <h2
              style={{
                fontFamily: SERIF,
                fontWeight: 400,
                fontSize: "clamp(34px,4.6vw,60px)",
                lineHeight: 1.06,
                margin: "18px 0 22px",
                color: COLORS.paper,
              }}
            >
              Six disciplines of an AI&nbsp;engineer.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "#b8b0a2", margin: 0 }}>
              One honest way to read an AI engineer is by the disciplines they&apos;ve had to master. Here are six —
              each mapped to something I&apos;ve actually shipped or am building now. Live demos embed here as each
              project goes up on Vercel.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(340px,1fr))", gap: 18 }}>
            {DISCIPLINES.map((d) => {
              const live = d.status === "Live";
              const statusStyle: CSSProperties = {
                fontFamily: MONO,
                fontSize: 10,
                letterSpacing: 0.5,
                textTransform: "uppercase",
                color: live ? "#7fc79b" : "#c9a06b",
                border: `1px solid ${live ? "rgba(127,199,155,0.4)" : "rgba(201,160,107,0.4)"}`,
                borderRadius: 999,
                padding: "2px 9px",
              };
              const demoBtnStyle: CSSProperties = live
                ? {
                    flex: 1,
                    textAlign: "center",
                    textDecoration: "none",
                    fontFamily: MONO,
                    fontSize: 11,
                    letterSpacing: 0.5,
                    textTransform: "uppercase",
                    color: "#1b1813",
                    background: "#f3efe6",
                    borderRadius: 2,
                    padding: "9px 0",
                  }
                : {
                    flex: 1,
                    textAlign: "center",
                    textDecoration: "none",
                    fontFamily: MONO,
                    fontSize: 11,
                    letterSpacing: 0.5,
                    textTransform: "uppercase",
                    color: "rgba(243,239,230,0.4)",
                    background: "rgba(243,239,230,0.04)",
                    borderRadius: 2,
                    padding: "9px 0",
                    pointerEvents: "none",
                  };
              return (
                <article
                  key={d.project}
                  style={{
                    border: "1px solid rgba(243,239,230,0.16)",
                    borderRadius: 5,
                    background: "rgba(243,239,230,0.025)",
                    padding: "24px 24px 22px",
                    display: "flex",
                    flexDirection: "column",
                    minHeight: 330,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
                    <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase", color: "#d98a72" }}>
                      {d.tag}
                    </span>
                    <span style={statusStyle}>{d.status}</span>
                  </div>
                  <div
                    style={{
                      border: "1px solid rgba(243,239,230,0.12)",
                      borderRadius: 3,
                      aspectRatio: "16/8",
                      marginBottom: 20,
                      backgroundImage:
                        "repeating-linear-gradient(135deg, rgba(243,239,230,0.05) 0 8px, transparent 8px 16px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span style={{ fontFamily: MONO, fontSize: 10, letterSpacing: 1, textTransform: "uppercase", color: "rgba(243,239,230,0.4)" }}>
                      {d.thumb}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: 27, lineHeight: 1.05, margin: "0 0 4px", color: COLORS.paper }}>
                    {d.project}
                  </h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#b8b0a2", margin: "0 0 18px", flex: 1 }}>{d.thesis}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
                    {d.stack.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: MONO,
                          fontSize: 10,
                          color: "#9a9284",
                          border: "1px solid rgba(243,239,230,0.14)",
                          borderRadius: 999,
                          padding: "3px 9px",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: 8, borderTop: "1px solid rgba(243,239,230,0.12)", paddingTop: 16 }}>
                    <a href={d.demoUrl || undefined} target="_blank" rel="noreferrer" style={demoBtnStyle}>
                      {d.demoLabel}
                    </a>
                    <a
                      href={d.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        flex: 1,
                        textAlign: "center",
                        textDecoration: "none",
                        fontFamily: MONO,
                        fontSize: 11,
                        letterSpacing: 0.5,
                        textTransform: "uppercase",
                        color: "#b8b0a2",
                        border: "1px solid rgba(243,239,230,0.18)",
                        borderRadius: 2,
                        padding: "9px 0",
                      }}
                    >
                      Source ↗
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== 08 · CONTACT / COLOPHON ===== */}
      <section
        id="chap-08"
        data-chapter="08"
        data-screen-label="08 Contact"
        style={{ padding: "clamp(80px,12vh,160px) clamp(24px,6vw,40px) 64px clamp(56px,8vw,120px)", maxWidth: 1240, margin: "0 auto" }}
      >
        <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: COLORS.accent }}>
          § 08 — Get in touch
        </span>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr",
            gap: "clamp(24px,5vw,72px)",
            alignItems: "end",
            marginTop: 22,
            borderBottom: `1px solid ${COLORS.line}`,
            paddingBottom: "clamp(40px,6vh,68px)",
          }}
        >
          <h2 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(40px,6.5vw,92px)", lineHeight: 0.98, margin: 0 }}>
            The story&apos;s still
            <br />
            being written.
            <br />
            <span style={{ fontStyle: "italic", color: COLORS.accent }}>Want in?</span>
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div>
              <div style={{ fontFamily: MONO, fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", color: COLORS.ink2, marginBottom: 6 }}>
                Email — best for hiring
              </div>
              <a
                href="mailto:abhi526691shek@gmail.com"
                style={{ textDecoration: "none", color: COLORS.ink, fontFamily: SERIF, fontSize: 23, borderBottom: `1px solid ${COLORS.accent}` }}
              >
                abhi526691shek@gmail.com
              </a>
            </div>
            <div style={{ display: "flex", gap: 40 }}>
              <div>
                <div style={{ fontFamily: MONO, fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", color: COLORS.ink2, marginBottom: 6 }}>
                  Based in
                </div>
                <div style={{ fontSize: 15, color: COLORS.ink }}>Toronto, ON · remote-friendly</div>
              </div>
              <div>
                <div style={{ fontFamily: MONO, fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", color: COLORS.ink2, marginBottom: 6 }}>
                  Replies in
                </div>
                <div style={{ fontSize: 15, color: COLORS.ink }}>Under 24 hours</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecoration: "none",
                    fontFamily: MONO,
                    fontSize: 11,
                    letterSpacing: 0.5,
                    textTransform: "uppercase",
                    color: COLORS.ink,
                    border: `1px solid ${COLORS.line}`,
                    borderRadius: 2,
                    padding: "9px 15px",
                  }}
                >
                  {s.label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 16,
            marginTop: 30,
            fontFamily: MONO,
            fontSize: 11,
            letterSpacing: 0.5,
            color: COLORS.ink2,
          }}
        >
          <span>© 2026 Abhishek Pandey</span>
          <span>Set in Instrument Serif, Inter &amp; JetBrains Mono.</span>
          <span style={{ color: COLORS.accent }}>The best models run quietly in production.</span>
        </div>
      </section>
    </div>
  );
}
