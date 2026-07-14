import React, { useState, useEffect, useRef } from 'react';

const colors = {
  primary: 'rgb(255 152 30)',
  accent: '#3E6990',
  background: '#000000',
  navBackground: 'rgba(0, 0, 0, 0.8)',
  text: '#F5F5F5',
  subtext: '#D1D5DB',
  cardBackground: 'rgba(24, 24, 27, 0.8)',
  cardBorder: 'rgba(255, 255, 255, 0.08)',
  white: '#FFFFFF',
  darkSection: '#0A0A0A',
  cardDark: '#18181B',
};

const SIGNUP_URL = 'https://luma.com/4be2eqz9?utm_source=pausecon-website';
const APPLY_TO_SPEAK_URL = 'https://pauseai-global.notion.site/32e5529b1fb34be887a2deb34f7b459b?pvs=105';

const whatToExpect = [
  {
    title: 'Strategy workshops',
    description: 'Take part in exercises and discussions to learn from PauseAI and from your peers. Workshops will focus on communicating catastrophic risk, building and sustaining local chapters and groups, and coalition strategy and campaign planning.',
  },
  {
    title: 'High-level talks',
    description: 'Hear from experts in the AI safety field about technology and policy. This is your chance to learn from those at the forefront of AI safety.',
  },
  {
    title: 'Community and networking',
    description: 'Connect with other volunteers, organisers and concerned citizens — it is these who are at the centre of the PauseAI movement.',
  },
];

const logistics = [
  {
    title: 'Dates',
    description: 'Saturday 5 and Sunday 6 September 2026, beginning at 9am on both days. On Monday 7 September, there will be a panel event featuring prominent UK politicians with legislative expertise on AI.',
  },
  {
    title: 'Location',
    description: 'London. The exact location will be communicated to approved attendees.',
  },
  {
    title: 'Accommodation',
    description: 'Accommodation is provided for three nights, from Friday 4 to Monday 7 September, in Greenwich, London, for up to 70 attendees. We recommend arriving on Friday night and planning to leave on Monday afternoon or evening.',
  },
  {
    title: 'Cost',
    description: 'Participation and accommodation are free of charge, but we encourage participants to make a donation if they are able. We do not want cost to be a barrier to participation.',
  },
  {
    title: 'Transportation',
    description: 'Attendees must arrange their own transportation to London.',
  },
  {
    title: 'How to apply',
    description: 'When you register, you will be asked several questions which will serve as your application. If approved, you will receive an email with a link to confirm your accommodation needs. Applications are reviewed on a rolling basis and earlier applications are more likely to be accepted — we may need to close registration early if we reach capacity.',
  },
];

const pastSpeakers = [
  { name: 'Stuart Russell', title: 'Professor of Computer Science', org: 'UC Berkeley', image: '/StuartRussell.jpeg', edition: 'Brussels 2026' },
  { name: 'Connor Leahy', title: 'CEO', org: 'Conjecture', image: '/ConnorLeahy.jpg', edition: 'London 2025' },
  { name: 'Brando Benifei', title: 'Member of European Parliament', org: 'Lead architect of the EU AI Act', image: '/BrandoBenifei.jpg', edition: 'Brussels 2026' },
  { name: 'Robert Miles', title: 'YouTuber & AI Safety Communicator', org: '', image: '/RobertMiles.jpg', edition: 'London 2025' },
  { name: 'Saskia Bricmont', title: 'Member of European Parliament', org: 'Greens/EFA', image: '/SaskiaBricmont.jpg', edition: 'Brussels 2026' },
  { name: 'Kat Woods', title: 'Founder', org: 'Nonlinear & Charity Entrepreneurship', image: '/KatWoods.jpg', edition: 'London 2025' },
  { name: 'Victor Negrescu', title: 'Vice-President', org: 'European Parliament', image: '/VictorNegrescu.jpg', edition: 'Brussels 2026' },
  { name: 'David Krueger', title: 'Assistant Professor', org: 'University of Montreal', image: '/DavidKrueger.jpg', edition: 'London 2025' },
  { name: 'Liron Shapira', title: 'Host of Doom Debates', org: '', image: '/LironShapira.jpg', edition: 'Brussels 2026' },
  { name: 'Tara Steele', title: 'Director', org: 'Safe AI for Children Alliance', image: '/TaraSteele.jpg', edition: 'London 2025' },
];

const pastEditions = [
  {
    title: 'PauseCon Brussels',
    date: 'February 2026',
    summary: 'A 3-day strategic summit at the European Parliament, bringing the demand for a global AI moratorium to the heart of EU policymaking.',
    image: '/PauseConBrusselsEU.jpg',
    href: '/brussels-2026',
  },
  {
    title: 'PauseCon London',
    date: 'June 2025',
    summary: 'The first PauseCon — a development and training conference for volunteers, culminating in our largest public protest to date.',
    image: '/london-2025-photos/LondonProtest2025.jpg',
    href: '/london-2025',
  },
];

export default function PauseConHome() {
  const [isMobile, setIsMenuMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (isMobile) setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMenuMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (navRef.current) setNavHeight(navRef.current.offsetHeight);
    const handleResize = () => {
      if (navRef.current) setNavHeight(navRef.current.offsetHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen, isMobile]);

  return (
    <div style={{
      background: 'radial-gradient(circle at top right, #3E6990 0%, #000000 60%)',
      backgroundAttachment: 'fixed',
      color: colors.text,
      minHeight: '100vh',
      fontFamily: 'Red Hat Display, sans-serif'
    }}>
      {/* Navigation */}
      <nav ref={navRef} style={{
        position: 'fixed',
        width: '100%',
        top: 0,
        left: 0,
        backgroundColor: colors.navBackground,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        padding: '1rem 1.5rem',
        zIndex: 1000,
        borderBottom: `1px solid ${colors.cardBorder}`
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', color: colors.text }}>
            <img src="/Pause Logo.svg" alt="PauseCon Logo" style={{ width: '32px', height: '32px' }} />
            <span style={{ fontSize: '1.5rem', fontWeight: '600' }}>PauseCon</span>
          </a>

          {!isMobile && (
            <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
              {['About', 'Conference', 'Speakers', 'Past Editions'].map((item) => {
                const id = item.toLowerCase().replace(' ', '-');
                return (
                  <a
                    key={item}
                    href={`#${id}`}
                    onClick={(e) => scrollToSection(e, id)}
                    onMouseOver={(e) => { e.currentTarget.style.color = colors.white; }}
                    onMouseOut={(e) => { e.currentTarget.style.color = colors.subtext; }}
                    style={{
                      color: colors.subtext,
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      transition: 'color 0.2s ease',
                      letterSpacing: '0.01em'
                    }}
                  >
                    {item}
                  </a>
                );
              })}
              <a
                href={APPLY_TO_SPEAK_URL}
                target="_blank"
                rel="noopener noreferrer"
                onMouseOver={(e) => { e.currentTarget.style.color = colors.white; }}
                onMouseOut={(e) => { e.currentTarget.style.color = colors.subtext; }}
                style={{
                  color: colors.subtext,
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  transition: 'color 0.2s ease',
                  letterSpacing: '0.01em'
                }}
              >
                Apply to Speak
              </a>
              <a
                href="/sponsor"
                onMouseOver={(e) => { e.currentTarget.style.color = colors.white; }}
                onMouseOut={(e) => { e.currentTarget.style.color = colors.subtext; }}
                style={{
                  color: colors.subtext,
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  transition: 'color 0.2s ease',
                  letterSpacing: '0.01em'
                }}
              >
                Sponsor
              </a>
              <a
                href={SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 152, 30, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(255, 152, 30, 0.5)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(255, 152, 30, 0.3)';
                }}
                style={{
                  backgroundColor: 'transparent',
                  color: colors.primary,
                  padding: '0.5rem 1.25rem',
                  borderRadius: '0.375rem',
                  border: '1px solid rgba(255, 152, 30, 0.3)',
                  fontWeight: '500',
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                Sign up
              </a>
            </div>
          )}

          {isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ background: 'none', border: 'none', color: colors.text, fontSize: '1.5rem', cursor: 'pointer' }}
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          )}
        </div>

        {isMenuOpen && isMobile && (
          <div style={{
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            padding: '1.5rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            borderTop: `1px solid ${colors.cardBorder}`
          }}>
            {['About', 'Conference', 'Speakers', 'Past Editions'].map((item) => {
              const id = item.toLowerCase().replace(' ', '-');
              return (
                <a
                  key={item}
                  href={`#${id}`}
                  onClick={(e) => scrollToSection(e, id)}
                  style={{ color: colors.subtext, textDecoration: 'none', fontSize: '1rem', fontWeight: '500' }}
                >
                  {item}
                </a>
              );
            })}
            <a
              href={APPLY_TO_SPEAK_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: colors.subtext, textDecoration: 'none', fontSize: '1rem', fontWeight: '500' }}
            >
              Apply to Speak
            </a>
            <a
              href="/sponsor"
              style={{ color: colors.subtext, textDecoration: 'none', fontSize: '1rem', fontWeight: '500' }}
            >
              Sponsor
            </a>
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: 'transparent',
                color: colors.primary,
                padding: '0.75rem 1.5rem',
                borderRadius: '0.375rem',
                border: '1px solid rgba(255, 152, 30, 0.3)',
                fontWeight: '500',
                textDecoration: 'none',
                textAlign: 'center'
              }}
            >
              Sign up
            </a>
          </div>
        )}
      </nav>

      <div style={{ height: navHeight }} />

      {/* Hero */}
      <section id="home" style={{
        paddingTop: isMobile ? '6rem' : '9rem',
        paddingBottom: isMobile ? '4rem' : '6rem',
        textAlign: 'center',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem'
      }}>
        <h1 style={{
          fontSize: isMobile ? '3.5rem' : '5.5rem',
          fontWeight: '600',
          marginBottom: '0.5rem',
          letterSpacing: '-0.03em',
          lineHeight: '1.1'
        }}>
          PauseCon
        </h1>
        <h2 style={{
          fontSize: isMobile ? '1.5rem' : '2rem',
          fontWeight: '400',
          marginBottom: '2rem',
          color: colors.subtext,
          letterSpacing: '0.05em'
        }}>
          London — 5–7 September 2026
        </h2>
        <p style={{
          fontSize: isMobile ? '1.05rem' : '1.2rem',
          fontWeight: '400',
          maxWidth: '640px',
          margin: '0 auto 2.5rem',
          color: colors.subtext,
          lineHeight: '1.65',
          letterSpacing: '0.01em'
        }}>
          PauseAI's flagship training event: three days of workshops, talks and direct action for those building the global movement to pause the development of superintelligence.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = colors.primary;
              e.currentTarget.style.color = colors.background;
              e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 152, 30, 0.3)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = colors.primary;
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            style={{
              display: 'inline-block',
              backgroundColor: 'transparent',
              color: colors.primary,
              padding: isMobile ? '0.875rem 1.75rem' : '1rem 2.5rem',
              fontSize: isMobile ? '1rem' : '1.05rem',
              borderRadius: '0.5rem',
              border: '2px solid ' + colors.primary,
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              letterSpacing: '0.02em'
            }}
          >
            Sign up
          </a>
          <a
            href={APPLY_TO_SPEAK_URL}
            target="_blank"
            rel="noopener noreferrer"
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)';
              e.currentTarget.style.color = colors.white;
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
              e.currentTarget.style.color = colors.subtext;
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            style={{
              display: 'inline-block',
              backgroundColor: 'transparent',
              color: colors.subtext,
              padding: isMobile ? '0.875rem 1.75rem' : '1rem 2.5rem',
              fontSize: isMobile ? '1rem' : '1.05rem',
              borderRadius: '0.5rem',
              border: '2px solid rgba(255, 255, 255, 0.25)',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              letterSpacing: '0.02em'
            }}
          >
            Apply to Speak
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ padding: isMobile ? '3rem 1.5rem' : '4rem 2rem' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: isMobile ? '1.75rem' : '2.25rem',
            fontWeight: '600',
            marginBottom: '1.5rem',
            textAlign: 'center',
            letterSpacing: '-0.02em'
          }}>
            What is PauseCon?
          </h2>
          <div style={{
            backgroundColor: colors.cardBackground,
            padding: isMobile ? '1.5rem' : '2rem',
            borderRadius: '0.75rem',
            border: `1px solid ${colors.cardBorder}`,
            marginBottom: '1.5rem'
          }}>
            <p style={{ marginBottom: '1.25rem', lineHeight: '1.75', fontSize: '1rem', color: colors.subtext }}>
              PauseCon is PauseAI's flagship training event: a three-day gathering for volunteers who want to take meaningful action on one of the most urgent issues of our time — ensuring that AI development does not outpace humanity's ability to keep it safe.
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: '1.75', fontSize: '1rem', color: colors.subtext }}>
              The conference will start with a packed weekend of workshops, talks and direct action. Attendees will receive training in community building, social media strategy and digital organising, along with a canvassing session to put those skills into practice. On Monday 7 September, attendees will have an opportunity to attend a panel discussion featuring prominent UK politicians with legislative expertise on AI.
            </p>
            <p style={{ marginBottom: 0, lineHeight: '1.75', fontSize: '1rem', color: colors.subtext }}>
              Past editions brought together leading voices in AI safety, members of the European Parliament, and a growing international community of organisers. London 2026 will be our third edition.
            </p>
          </div>
          <div style={{
            backgroundColor: colors.cardBackground,
            padding: isMobile ? '1.5rem' : '2rem',
            borderRadius: '0.75rem',
            border: `1px solid ${colors.cardBorder}`
          }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem', letterSpacing: '-0.01em' }}>
              Who is PauseCon for?
            </h3>
            <p style={{ marginBottom: '1.25rem', lineHeight: '1.75', fontSize: '1rem', color: colors.subtext }}>
              If you are concerned about the catastrophic risks posed by AI and are keen to do something about it, PauseCon is for you. We are looking for people who are willing and able to commit their time as a volunteer.
            </p>
            <p style={{ marginBottom: 0, lineHeight: '1.75', fontSize: '1rem', color: colors.subtext }}>
              PauseCon is about preparing volunteers to make an impact in their communities. If you are ready to move beyond discussion and contribute to tangible political change, PauseCon is for you.
            </p>
          </div>
        </div>
      </section>

      {/* Conference */}
      <section id="conference" style={{ padding: isMobile ? '3rem 1.5rem' : '5rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: isMobile ? '1.75rem' : '2.25rem',
            fontWeight: '600',
            marginBottom: '2.5rem',
            textAlign: 'center',
            letterSpacing: '-0.02em'
          }}>
            What to expect
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '1.5rem',
            marginBottom: isMobile ? '3rem' : '4rem'
          }}>
            {whatToExpect.map((item) => (
              <div key={item.title} style={{
                backgroundColor: colors.cardBackground,
                padding: isMobile ? '1.5rem' : '2rem',
                borderRadius: '0.75rem',
                border: `1px solid ${colors.cardBorder}`
              }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '600', marginBottom: '0.75rem', color: colors.primary, letterSpacing: '-0.01em' }}>
                  {item.title}
                </h3>
                <p style={{ marginBottom: 0, fontSize: '0.95rem', color: colors.subtext, lineHeight: '1.7' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <h2 style={{
            fontSize: isMobile ? '1.75rem' : '2.25rem',
            fontWeight: '600',
            marginBottom: '2.5rem',
            textAlign: 'center',
            letterSpacing: '-0.02em'
          }}>
            Useful information
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: '1.5rem',
            marginBottom: '2.5rem'
          }}>
            {logistics.map((item) => (
              <div key={item.title} style={{
                backgroundColor: colors.cardBackground,
                padding: isMobile ? '1.5rem' : '2rem',
                borderRadius: '0.75rem',
                border: `1px solid ${colors.cardBorder}`
              }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: '600', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>
                  {item.title}
                </h3>
                <p style={{ marginBottom: 0, fontSize: '0.95rem', color: colors.subtext, lineHeight: '1.7' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            textAlign: 'center',
            backgroundColor: 'rgba(255, 152, 30, 0.08)',
            border: '1px solid rgba(255, 152, 30, 0.35)',
            borderRadius: '0.75rem',
            padding: isMobile ? '1.5rem' : '2rem'
          }}>
            <p style={{ marginBottom: '1.25rem', fontSize: '1.05rem', fontWeight: '600', color: colors.text }}>
              Application deadline: 21 August 2026
            </p>
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = colors.primary;
                e.currentTarget.style.color = colors.background;
                e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 152, 30, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = colors.primary;
                e.currentTarget.style.boxShadow = 'none';
              }}
              style={{
                display: 'inline-block',
                backgroundColor: 'transparent',
                color: colors.primary,
                padding: '0.875rem 2rem',
                borderRadius: '0.5rem',
                border: '2px solid ' + colors.primary,
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                letterSpacing: '0.02em'
              }}
            >
              Apply to attend
            </a>
          </div>
        </div>
      </section>

      {/* Past Speakers */}
      <section id="speakers" style={{ padding: isMobile ? '3rem 1.5rem' : '5rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: isMobile ? '1.75rem' : '2.25rem',
            fontWeight: '600',
            marginBottom: '0.5rem',
            textAlign: 'center',
            letterSpacing: '-0.02em'
          }}>
            Past speakers have included
          </h2>
          <p style={{
            textAlign: 'center',
            color: colors.subtext,
            fontSize: '0.95rem',
            marginBottom: '3rem'
          }}>
            A selection of voices from previous editions. The London 2026 lineup will be announced in due course.
            {' '}Want to be part of it?{' '}
            <a
              href={APPLY_TO_SPEAK_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: colors.primary, textDecoration: 'none', fontWeight: '600' }}
            >
              Apply to speak →
            </a>
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(5, 1fr)',
            gap: isMobile ? '1rem' : '1.25rem'
          }}>
            {pastSpeakers.map((person) => (
              <div key={person.name} style={{
                backgroundColor: colors.cardBackground,
                padding: '1.25rem 1rem',
                borderRadius: '0.75rem',
                border: `1px solid ${colors.cardBorder}`,
                textAlign: 'center'
              }}>
                <img
                  src={person.image}
                  alt={person.name}
                  style={{
                    width: isMobile ? '80px' : '100px',
                    height: isMobile ? '80px' : '100px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    display: 'block',
                    margin: '0 auto 0.75rem'
                  }}
                />
                <h3 style={{ fontSize: isMobile ? '0.9rem' : '0.95rem', fontWeight: '600', marginBottom: '0.25rem', lineHeight: '1.3' }}>
                  {person.name}
                </h3>
                <p style={{ fontSize: '0.75rem', color: colors.subtext, lineHeight: '1.4', marginBottom: '0.5rem' }}>
                  {person.title}{person.org ? `, ${person.org}` : ''}
                </p>
                <span style={{
                  display: 'inline-block',
                  fontSize: '0.65rem',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: colors.primary,
                  opacity: 0.85
                }}>
                  {person.edition}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Editions */}
      <section id="past-editions" style={{ padding: isMobile ? '3rem 1.5rem' : '5rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: isMobile ? '1.75rem' : '2.25rem',
            fontWeight: '600',
            marginBottom: '2.5rem',
            textAlign: 'center',
            letterSpacing: '-0.02em'
          }}>
            Past Editions
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: '1.5rem'
          }}>
            {pastEditions.map((edition) => (
              <a
                key={edition.href}
                href={edition.href}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'block',
                  backgroundColor: colors.cardBackground,
                  borderRadius: '0.75rem',
                  border: `1px solid ${colors.cardBorder}`,
                  overflow: 'hidden',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 152, 30, 0.4)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = colors.cardBorder;
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ aspectRatio: '16 / 9', overflow: 'hidden', backgroundColor: '#111' }}>
                  <img
                    src={edition.image}
                    alt={edition.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <p style={{
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: colors.primary,
                    marginBottom: '0.5rem'
                  }}>
                    {edition.date}
                  </p>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>
                    {edition.title}
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: colors.subtext, lineHeight: '1.6', marginBottom: '1rem' }}>
                    {edition.summary}
                  </p>
                  <span style={{ color: colors.primary, fontSize: '0.9rem', fontWeight: '600' }}>
                    View edition →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: isMobile ? '3rem 1.5rem' : '4rem 2rem',
        borderTop: `1px solid ${colors.cardBorder}`,
        textAlign: 'center',
        color: colors.subtext,
        fontSize: '0.9rem'
      }}>
        <p style={{ marginBottom: '1rem' }}>Organised by</p>
        <div style={{ marginBottom: '1.5rem' }}>
          <a href="https://pauseai.info" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block' }}>
            <img src="/PauseAI-logo-white.svg" alt="PauseAI" style={{ height: '48px', width: 'auto' }} />
          </a>
        </div>
        <p style={{ marginBottom: 0 }}>© {currentYear} PauseAI</p>
      </footer>
    </div>
  );
}
