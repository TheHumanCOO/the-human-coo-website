import {
  ArrowDownRight,
  ArrowRight,
  Check,
  CircleDot,
  Menu,
  Sparkles,
} from "lucide-react";

const problems = [
  "Admin is taking over your week",
  "Your systems are not connected",
  "Important follow ups are being missed",
  "You do not have a clear view of what is happening",
  "You are paying for software you barely use",
  "Growth has created more work, rather than making things easier",
];

const services = [
  {
    number: "01",
    title: "Quick Fix",
    description:
      "One specific process, system or admin problem that needs sorting without turning it into a huge project.",
    ideal: "Best for a focused problem and a fast practical outcome.",
  },
  {
    number: "02",
    title: "Operations Project",
    description:
      "A defined piece of work such as improving a process, building a dashboard or connecting the tools you already use.",
    ideal: "Best when you know what needs to change but need help making it happen.",
  },
  {
    number: "03",
    title: "Fractional COO Support",
    description:
      "Ongoing operational thinking and hands on support without the commitment of hiring a full time COO.",
    ideal: "Best for growing businesses that need experienced support alongside the founder.",
  },
];

const capabilities = [
  {
    title: "Process improvement",
    description:
      "Simplifying workflows, handovers, responsibilities and ways of working.",
  },
  {
    title: "Automation and AI agents",
    description:
      "Practical automations and AI agents that reduce repetitive work, monitor activity, organise information and support faster follow up.",
  },
  {
    title: "Lead tracking and follow up",
    description:
      "Creating a clear process for capturing enquiries, assigning actions and following up.",
  },
  {
    title: "Dashboards and reporting",
    description:
      "Turning scattered information into useful, decision ready reporting.",
  },
  {
    title: "Tech stack simplification",
    description:
      "Reviewing, connecting or consolidating tools, including Microsoft 365 and Google Workspace.",
  },
  {
    title: "Practical operational support",
    description:
      "Hands on help with a particular problem, project or period of change.",
  },
];

const steps = [
  {
    number: "1",
    title: "Tell me what is getting in the way",
    text: "You do not need to arrive with a perfect brief. Start with the thing that is frustrating you or taking too much time.",
  },
  {
    number: "2",
    title: "We work out what you actually need",
    text: "I look at the people, process and systems around the problem before recommending a solution.",
  },
  {
    number: "3",
    title: "We make it easier to run",
    text: "You get a practical fix, a clear plan or ongoing support that fits the business you have now.",
  },
];

function BrandMark() {
  return (
    <span className="brand-mark" aria-label="The Human COO">
      <img
        src="/human-coo-logo.png"
        alt="The Human COO. People first. Systems that work. Business made easier."
        width={2000}
        height={620}
      />
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a href="#top" className="logo-link" aria-label="The Human COO home">
          <BrandMark />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#support">Ways to work together</a>
          <a href="#about">About</a>
          <a href="#contact" className="nav-cta">
            Let&apos;s talk <ArrowDownRight size={16} />
          </a>
        </nav>
        <a className="mobile-contact" href="#contact" aria-label="Go to contact section">
          <Menu size={22} />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><CircleDot size={14} /> People first. Systems that work. Business made easier.</p>
          <h1>Making business <em>easier</em> to run.</h1>
          <p className="hero-intro">
            I help founders, growing teams and established organisations simplify
            operations, improve processes and make better use of the systems they
            already have.
          </p>
          <div className="hero-actions">
            <a
              href="https://tally.so/r/XxbQ54"
              className="button button-primary"
              data-tally-open="XxbQ54"
              data-tally-layout="modal"
              data-tally-width="700"
            >
              Tell me what&apos;s getting in your way <ArrowRight size={18} />
            </a>
            <a href="#support" className="text-link">
              See how I can help <ArrowDownRight size={16} />
            </a>
          </div>
        </div>
        <div className="hero-note" aria-label="The Human COO approach">
          <div className="note-topline"><Sparkles size={18} /> A human approach</div>
          <p>
            Understand the problem first. Then find the simplest practical way
            to fix it.
          </p>
          <svg viewBox="0 0 270 58" aria-hidden="true">
            <path d="M4 31c20-28 38 25 60 0s41 22 65 0 43 15 68 0c20-12 42-6 69-4" />
          </svg>
          <span>Support that meets your business where it is now.</span>
        </div>
      </section>

      <section className="about-section section" id="about">
        <div className="about-label">The human behind the operations</div>
        <div className="about-copy">
          <p className="kicker">Hello, I&apos;m Jemma</p>
          <h2>I make complicated things feel more manageable.</h2>
          <div className="about-columns">
            <p>
              I have spent my career helping businesses improve the way they
              operate, from leading workplace and facilities operations to
              delivering technology enabled change across large, complex organisations.
            </p>
            <p>
              The Human COO brings that experience to founders, growing teams and
              established organisations in a practical and accessible way. I
              listen, understand what is really happening and help you create a
              business that works better for the people running it.
            </p>
          </div>
        </div>
      </section>

      <section className="problem-section section" id="problems">
        <div className="section-heading">
          <p className="kicker">Does this sound familiar?</p>
          <h2>Your business has outgrown the way it runs.</h2>
        </div>
        <div className="problem-grid">
          {problems.map((problem) => (
            <div className="problem-item" key={problem}>
              <span><Check size={15} /></span>
              <p>{problem}</p>
            </div>
          ))}
        </div>
        <p className="section-closing">
          These are not always technology problems. Often, it is about making
          the process clearer and using what you already have properly.
        </p>
      </section>

      <section className="services-section section" id="support">
        <div className="section-heading split-heading">
          <div>
            <p className="kicker light">Ways to work together</p>
            <h2>Support that fits the problem.</h2>
          </div>
          <p>
            You might need one thing fixed, a project delivered or someone to
            help you think through the bigger operational picture.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-number">{service.number}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span>{service.ideal}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="capabilities-section section">
        <div className="section-heading">
          <p className="kicker">What I can help with</p>
          <h2>Practical improvements, not unnecessary complexity.</h2>
        </div>
        <div className="capability-list">
          {capabilities.map((capability, index) => (
            <details key={capability.title}>
              <summary>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{capability.title}</p>
                <ArrowDownRight className="capability-arrow" size={20} />
              </summary>
              <p className="capability-description">{capability.description}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="process-section section">
        <div className="section-heading">
          <p className="kicker">How it starts</p>
          <h2>You do not need to know the solution yet.</h2>
        </div>
        <div className="steps">
          {steps.map((step) => (
            <article key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <p className="kicker light">Start with the problem</p>
          <h2>What&apos;s getting in your way?</h2>
          <p>
            Tell me what is happening, what is taking too much time or what you
            wish worked better. We&apos;ll work out the right next step together.
          </p>
          <div className="contact-actions">
            <a
              className="button button-light"
              href="https://tally.so/r/XxbQ54"
              data-tally-open="XxbQ54"
              data-tally-layout="modal"
              data-tally-width="700"
            >
              Tell me about your business <ArrowRight size={18} />
            </a>
            <a
              className="button button-outline-light"
              href="https://calendly.com/hello-thehumancoo/30min"
            >
              Book an introductory call <ArrowRight size={18} />
            </a>
          </div>
          <small>
            Prefer email? <a href="mailto:hello@thehumancoo.co.uk">hello@thehumancoo.co.uk</a>
          </small>
        </div>
      </section>

      <footer>
        <BrandMark />
        <p>People first. Systems that work. Business made easier.</p>
        <div className="social-links">
          <a
            href="https://www.instagram.com/thehumancoo/"
            aria-label="The Human COO on Instagram"
            target="_blank"
            rel="noreferrer"
          >
            <span aria-hidden="true">IG</span>
          </a>
          <a
            href="https://www.tiktok.com/@thehumancoo"
            aria-label="The Human COO on TikTok"
            target="_blank"
            rel="noreferrer"
          >
            <span aria-hidden="true">TT</span>
          </a>
        </div>
        <span>© {new Date().getFullYear()} The Human COO</span>
      </footer>
    </main>
  );
}
