import { useState, useEffect } from "react";

const C = {
  bg: "#F8F6F2",
  bgDark: "#1A1A1A",
  bgForest: "#1B2B24",
  text: "#1C1C1C",
  muted: "#6B6B6B",
  accent: "#2D5A3D",
  accentLight: "#3A7A52",
  gold: "#B8944F",
  cream: "#F0EBE1",
  border: "#E5E0D8",
  white: "#FFFFFF",
};

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

const ventures = [
  {
    name: "Fix Plug",
    desc: "Trusted skilled services for Nigerian homes and businesses. Verified providers. Transparent pricing. Starting in Abuja.",
    status: "Active \u2014 Accepting Early Sign-Ups",
    statusColor: C.accentLight,
    cta: "Visit Fix Plug",
    href: "https://fixplug.org",
  },
  {
    name: "Belmak Consults",
    desc: "Strategic advisory and consulting for organisations navigating growth, structure, and transformation.",
    status: "In Development",
    statusColor: C.gold,
    cta: "Learn More",
    href: "#belmak",
  },
  {
    name: "Haven Estates & Suites",
    desc: "Premium hospitality and property services built around trust, comfort, and modern Nigerian living.",
    status: "Coming Soon",
    statusColor: C.muted,
    cta: "Register Interest",
    href: "#haven",
  },
  {
    name: "Future Ventures",
    desc: "HorizonBond is always evaluating new sectors and opportunities. If you have an idea, a partnership, or a market worth entering \u2014 we are listening.",
    status: "Open to Proposals",
    statusColor: C.muted,
    cta: "Talk to Us",
    href: "#contact",
  },
];

const principles = [
  { title: "Credibility First", body: "Every venture we build must earn trust before it earns revenue. We do not launch what we cannot stand behind." },
  { title: "Operational Discipline", body: "Ideas are not enough. We build with structure, process, and commercial clarity \u2014 from the first version to full scale." },
  { title: "Premium Standards", body: "Every product, service, and communication that carries the HorizonBond name must meet a professional standard." },
  { title: "Long-Term Thinking", body: "We build for durability. Every decision considers what serves the business five years from now." },
];

const fpFeatures = [
  "Every provider is verified before being listed",
  "Pricing is confirmed before work begins",
  "Three service tiers: Standard, Priority, Premier",
  "Customer ratings and accountability after every job",
  "Built for Abuja first, open to Nigeria",
];

function useIsMobile() {
  const [m, setM] = useState(false);
  useEffect(() => {
    const check = () => setM(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return m;
}
function AnnouncementBar() {
  return (
    <div style={{ background: C.bgDark, padding: "10px 24px", textAlign: "center" }}>
      <p style={{ fontFamily: sans, color: C.cream, fontSize: 13, margin: 0, letterSpacing: "0.02em" }}>
        Fix Plug is now live \u2014 our first venture is accepting early sign-ups in Abuja.
      </p>
    </div>
  );
}

function Nav({ mobile }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: scrolled ? C.white : "transparent",
      boxShadow: scrolled ? "0 1px 8px rgba(0,0,0,0.06)" : "none",
      transition: "all 0.3s ease",
    }}>
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: mobile ? "14px 20px" : "16px 48px",
        maxWidth: 1200, margin: "0 auto",
      }}>
        <span style={{ fontFamily: serif, fontWeight: 700, fontSize: mobile ? 20 : 22, color: C.text, letterSpacing: "-0.02em" }}>
          HorizonBond
        </span>
        {mobile ? (
          <button onClick={() => setOpen(!open)} style={{
            background: "none", border: "none", fontSize: 24, cursor: "pointer", color: C.text, padding: 4,
          }}>
            {open ? "\u2715" : "\u2630"}
          </button>
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            {["About", "Ventures", "Contact"].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} style={{
                fontFamily: sans, color: C.text, textDecoration: "none", fontSize: 14, fontWeight: 500,
              }}>{l}</a>
            ))}
            <a href="#ventures" style={{
              fontFamily: sans, background: C.accent, color: C.white, padding: "10px 22px",
              borderRadius: 8, textDecoration: "none", fontSize: 14, fontWeight: 600,
            }}>Explore Our Ventures</a>
          </div>
        )}
      </div>
      {mobile && open && (
        <div style={{
          background: C.white, padding: "16px 20px 24px", borderTop: `1px solid ${C.border}`,
          display: "flex", flexDirection: "column", gap: 16,
        }}>
          {["About", "Ventures", "Contact"].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} style={{
              fontFamily: sans, color: C.text, textDecoration: "none", fontSize: 16, fontWeight: 500,
            }}>{l}</a>
          ))}
          <a href="#ventures" onClick={() => setOpen(false)} style={{
            fontFamily: sans, background: C.accent, color: C.white, padding: "12px 22px",
            borderRadius: 8, textDecoration: "none", fontSize: 15, fontWeight: 600, textAlign: "center",
          }}>Explore Our Ventures</a>
        </div>
      )}
    </nav>
  );
}

function Hero({ mobile }) {
  return (
    <section style={{
      minHeight: mobile ? "70vh" : "80vh",
      display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
      textAlign: "center", padding: mobile ? "60px 20px 60px" : "100px 24px 80px", background: C.bg,
    }}>
      <h1 style={{
        fontFamily: serif, fontSize: mobile ? 36 : "clamp(42px, 5vw, 64px)",
        fontWeight: 700, color: C.text, lineHeight: 1.1, maxWidth: 700,
        margin: "0 0 24px", letterSpacing: "-0.03em",
      }}>
        Building Businesses That Earn Trust.
      </h1>
      <p style={{
        fontFamily: sans, fontSize: mobile ? 16 : 19, color: C.muted,
        lineHeight: 1.7, maxWidth: 600, margin: "0 0 40px",
      }}>
        HorizonBond is a multi-venture company developing credible, scalable businesses across selected sectors in Nigeria \u2014 starting with skilled services, advisory, and hospitality.
      </p>
      <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
        <a href="#ventures" style={{
          fontFamily: sans, display: "inline-block", background: C.accent, color: C.white,
          padding: "14px 32px", borderRadius: 8, textDecoration: "none", fontSize: 15, fontWeight: 700,
        }}>See Our Ventures</a>
        <a href="#contact" style={{
          fontFamily: sans, display: "inline-block", background: "transparent", color: C.text,
          padding: "14px 32px", borderRadius: 8, textDecoration: "none", fontSize: 15, fontWeight: 600,
          border: `1.5px solid ${C.border}`,
        }}>Partner With Us</a>
      </div>
    </section>
  );
}

function About({ mobile }) {
  return (
    <section id="about" style={{ padding: mobile ? "64px 20px" : "100px 24px", background: C.white }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <Label>Who We Are</Label>
        <Heading>A Company That Builds Companies.</Heading>
        <Body>
          HorizonBond is not a single product or a single service. It is a company-building platform \u2014 a deliberate system for identifying high-potential sectors, designing credible ventures, and building them with operational discipline and long-term vision.
        </Body>
        <Body>
          Every venture under HorizonBond is held to the same standard: it must be commercially sound, trustworthy in its market, and capable of earning real traction \u2014 not just attention.
        </Body>
        <Body style={{ color: C.text, fontWeight: 500 }}>
          We do not chase trends. We build businesses that work.
        </Body>
      </div>
    </section>
  );
}

function Principles({ mobile }) {
  return (
    <section style={{ padding: mobile ? "64px 20px" : "100px 24px", background: C.bg }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Label style={{ textAlign: "center" }}>What Defines Us</Label>
        <Heading style={{ textAlign: "center" }}>Built on Principles. Not Hype.</Heading>
        <div style={{
          display: "grid",
          gridTemplateColumns: mobile ? "1fr" : "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 20, marginTop: 40,
        }}>
          {principles.map((p, i) => (
            <div key={i} style={{
              background: C.white, borderRadius: 12, padding: mobile ? 24 : 32,
              border: `1px solid ${C.border}`,
            }}>
              <h3 style={{ fontFamily: sans, fontSize: 17, fontWeight: 700, color: C.text, margin: "0 0 10px" }}>
                {p.title}
              </h3>
              <p style={{ fontFamily: sans, fontSize: 15, color: C.muted, lineHeight: 1.65, margin: 0 }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VenturesSection({ mobile }) {
  const [hovered, setHovered] = useState(null);
  return (
    <section id="ventures" style={{ padding: mobile ? "64px 20px" : "100px 24px", background: C.white }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Label style={{ textAlign: "center" }}>Our Ventures</Label>
        <Heading style={{ textAlign: "center" }}>Building Across Sectors. One Venture at a Time.</Heading>
        <Body style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 40px" }}>
          Each HorizonBond venture operates independently within its market \u2014 but all are held to the same standard of trust, quality, and execution.
        </Body>
        <div style={{
          display: "grid",
          gridTemplateColumns: mobile ? "1fr" : "repeat(2, 1fr)",
          gap: 20,
        }}>
          {ventures.map((v, i) => (
            <div key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: C.bg, borderRadius: 14, padding: mobile ? 24 : 32,
                border: `1px solid ${C.border}`,
                display: "flex", flexDirection: "column", justifyContent: "space-between",
                minHeight: mobile ? "auto" : 240,
                boxShadow: hovered === i ? "0 6px 24px rgba(0,0,0,0.06)" : "none",
                transform: hovered === i ? "translateY(-2px)" : "none",
                transition: "all 0.2s ease",
              }}
            >
              <div>
                <h3 style={{ fontFamily: sans, fontSize: 19, fontWeight: 700, color: C.text, margin: "0 0 8px" }}>
                  {v.name}
                </h3>
                <span style={{
                  display: "inline-block", fontFamily: sans, fontSize: 12, fontWeight: 600,
                  color: v.statusColor, background: `${v.statusColor}14`,
                  padding: "4px 10px", borderRadius: 20, marginBottom: 14, letterSpacing: "0.02em",
                }}>
                  {v.status}
                </span>
                <p style={{ fontFamily: sans, fontSize: 15, color: C.muted, lineHeight: 1.65, margin: 0 }}>
                  {v.desc}
                </p>
              </div>
              <a href={v.href} style={{
                fontFamily: sans, display: "inline-block", marginTop: 18,
                fontSize: 14, fontWeight: 600, color: C.accent, textDecoration: "none",
              }}>
                {v.cta} \u2192
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedVenture({ mobile }) {
  return (
    <section id="fixplug" style={{ padding: mobile ? "64px 20px" : "100px 24px", background: C.bgForest }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <Label style={{ color: C.gold }}>Featured Venture</Label>
        <Heading style={{ color: C.white }}>Fix Plug \u2014 Our First Venture. Now Live.</Heading>
        <p style={{
          fontFamily: sans, fontSize: mobile ? 16 : 17,
          color: "rgba(255,255,255,0.75)", lineHeight: 1.7, margin: "0 0 14px", maxWidth: 700,
        }}>
          Fix Plug is a trusted skilled-services platform connecting Nigerian homes and businesses to verified, professional service providers. It launches in Abuja with four core categories: electrical, plumbing, AC repair, and generator support.
        </p>
        <p style={{
          fontFamily: sans, fontSize: 16, color: "rgba(255,255,255,0.55)",
          lineHeight: 1.7, margin: "0 0 32px", maxWidth: 700,
        }}>
          Fix Plug exists because finding a reliable skilled worker in Nigeria should not feel like a risk. We are building the operating layer that the market has been missing.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 36 }}>
          {fpFeatures.map((f, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <span style={{ color: C.gold, fontSize: 14, marginTop: 3, flexShrink: 0 }}>\u2726</span>
              <span style={{ fontFamily: sans, color: "rgba(255,255,255,0.8)", fontSize: 15, lineHeight: 1.6 }}>{f}</span>
            </div>
          ))}
        </div>
        <a href="https://fixplug.org" target="_blank" rel="noopener noreferrer" style={{
          fontFamily: sans, display: "inline-block", background: C.gold, color: C.bgDark,
          padding: "14px 32px", borderRadius: 8, textDecoration: "none", fontSize: 15, fontWeight: 700,
        }}>
          Explore Fix Plug \u2192
        </a>
      </div>
    </section>
  );
}

function WhySection({ mobile }) {
  return (
    <section style={{ padding: mobile ? "64px 20px" : "100px 24px", background: C.bg }}>
      <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
        <Label style={{ textAlign: "center" }}>Why Us</Label>
        <Heading style={{ textAlign: "center" }}>Why Build With HorizonBond?</Heading>
        <Body style={{ textAlign: "center" }}>
          Whether you are a potential customer of one of our ventures, a professional looking to partner, or an investor evaluating what we are building \u2014 the answer is the same.
        </Body>
        <Body style={{ textAlign: "center" }}>
          HorizonBond exists to build businesses that people can trust. Not businesses that look impressive on a pitch deck but fall apart in practice. Businesses that work \u2014 for customers, for providers, for partners, and for the markets they serve.
        </Body>
        <Body style={{ textAlign: "center", color: C.text, fontWeight: 500 }}>
          We are early. We are deliberate. And we are building something that lasts.
        </Body>
      </div>
    </section>
  );
}

function ContactCTA({ mobile }) {
  return (
    <section id="contact" style={{ padding: mobile ? "64px 20px" : "100px 24px", background: C.bgDark, textAlign: "center" }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <h2 style={{
          fontFamily: serif, fontSize: mobile ? 28 : "clamp(30px, 4vw, 42px)",
          fontWeight: 700, color: C.white, lineHeight: 1.15, margin: "0 0 16px", letterSpacing: "-0.02em",
        }}>
          Let\u2019s Build Something Worth Trusting.
        </h2>
        <p style={{
          fontFamily: sans, fontSize: 17, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, margin: "0 0 36px",
        }}>
          Whether you want to partner with HorizonBond, invest in a venture, or join one of our teams \u2014 we would like to hear from you.
        </p>
        <a href="mailto:horizonbondcorp@gmail.com" style={{
          fontFamily: sans, display: "inline-block", background: C.white, color: C.bgDark,
          padding: "14px 36px", borderRadius: 8, textDecoration: "none", fontSize: 15, fontWeight: 700,
        }}>
          Get in Touch
        </a>
        <p style={{ fontFamily: sans, marginTop: 18, fontSize: 14, color: "rgba(255,255,255,0.35)" }}>
          horizonbondcorp@gmail.com
        </p>
      </div>
    </section>
  );
}

function Footer({ mobile }) {
  return (
    <footer style={{
      padding: mobile ? "28px 20px" : "36px 48px", background: C.bgDark,
      borderTop: "1px solid rgba(255,255,255,0.08)",
      display: "flex", flexDirection: mobile ? "column" : "row",
      justifyContent: "space-between", alignItems: mobile ? "flex-start" : "center",
      gap: 16,
    }}>
      <span style={{ fontFamily: serif, fontWeight: 700, fontSize: 16, color: "rgba(255,255,255,0.45)" }}>
        HorizonBond
      </span>
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {[
          { label: "About", href: "#about" },
          { label: "Ventures", href: "#ventures" },
          { label: "Fix Plug", href: "https://fixplug.org" },
          { label: "Contact", href: "#contact" },
        ].map(l => (
          <a key={l.label} href={l.href} {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} style={{
            fontFamily: sans, color: "rgba(255,255,255,0.35)", textDecoration: "none", fontSize: 13,
          }}>{l.label}</a>
        ))}
      </div>
      <span style={{ fontFamily: sans, fontSize: 12, color: "rgba(255,255,255,0.25)" }}>
        \u00A9 2025 HorizonBond. All rights reserved.
      </span>
    </footer>
  );
}

function Label({ children, style: s }) {
  return (
    <p style={{
      fontFamily: sans, fontSize: 13, fontWeight: 600, color: C.accent,
      textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 12px", ...s,
    }}>{children}</p>
  );
}

function Heading({ children, style: s }) {
  return (
    <h2 style={{
      fontFamily: serif, fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 700,
      color: C.text, lineHeight: 1.15, margin: "0 0 24px", letterSpacing: "-0.02em", ...s,
    }}>{children}</h2>
  );
}

function Body({ children, style: s }) {
  return (
    <p style={{
      fontFamily: sans, fontSize: 17, color: C.muted, lineHeight: 1.7, margin: "0 0 16px", ...s,
    }}>{children}</p>
  );
}

export default function App() {
  const mobile = useIsMobile();
  return (
    <div style={{ fontFamily: sans, color: C.text, background: C.bg }}>
      <AnnouncementBar />
      <Nav mobile={mobile} />
      <Hero mobile={mobile} />
      <About mobile={mobile} />
      <Principles mobile={mobile} />
      <VenturesSection mobile={mobile} />
      <FeaturedVenture mobile={mobile} />
      <WhySection mobile={mobile} />
      <ContactCTA mobile={mobile} />
      <Footer mobile={mobile} />
    </div>
  );
}

