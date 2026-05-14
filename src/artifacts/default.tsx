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

const SPEAKER_INTEREST_EMAIL = 'maxime@pauseia.fr';

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

  const speakerMailto = `mailto:${SPEAKER_INTEREST_EMAIL}?subject=PauseCon%20London%202026%20%E2%80%94%20Speaker%20Interest&body=Hi%2C%0A%0AI%27d%20like%20to%20register%20interest%20in%20speaking%20at%20PauseCon%20London%202026.%0A%0AName%3A%0AOrganization%3A%0AShort%20bio%2Flink%3A%0AProposed%20topic%3A%0A%0AThanks%21`;

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
              {['About', 'Speakers', 'Past Editions'].map((item) => {
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
                href={speakerMailto}
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
                Register Speaker Interest
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
            {['About', 'Speakers', 'Past Editions'].map((item) => {
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
              href={speakerMailto}
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
              Register Speaker Interest
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
        <div style={{
          display: 'inline-block',
          padding: '0.4rem 1rem',
          marginBottom: '1.75rem',
          borderRadius: '999px',
          border: '1px solid rgba(255, 152, 30, 0.35)',
          backgroundColor: 'rgba(255, 152, 30, 0.08)',
          fontSize: '0.75rem',
          fontWeight: '600',
          letterSpacing: '0.12em',
          color: colors.primary,
          textTransform: 'uppercase'
        }}>
          Next Edition
        </div>
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
          London — September 2026
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
          The strategic summit for those building the global movement to pause the development of superintelligence. Exact date, venue, and programme to be announced soon.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href={speakerMailto}
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
            Register Speaker Interest
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
            border: `1px solid ${colors.cardBorder}`
          }}>
            <p style={{ marginBottom: '1.25rem', lineHeight: '1.75', fontSize: '1rem', color: colors.subtext }}>
              PauseCon is the gathering for activists, researchers, policymakers and organizers working to prevent the development of unsafe superintelligent AI. It is part conference, part organising workshop, and part public action.
            </p>
            <p style={{ marginBottom: 0, lineHeight: '1.75', fontSize: '1rem', color: colors.subtext }}>
              Past editions brought together leading voices in AI safety, members of the European Parliament, and a growing international community of organizers. London 2026 will be our third edition.
            </p>
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
                    marginBottom: '0.75rem'
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
        <div style={{ marginBottom: '1rem' }}>
          <a href="/Pause Logo.svg" onClick={(e) => e.preventDefault()} style={{ display: 'inline-block' }}>
            <img src="/Pause Logo.svg" alt="PauseAI" style={{ width: '40px', height: '40px', opacity: 0.7 }} />
          </a>
        </div>
        <p style={{ marginBottom: '0.5rem' }}>
          Organized by <a href="https://pauseai.info" target="_blank" rel="noopener noreferrer" style={{ color: colors.primary, textDecoration: 'none' }}>PauseAI</a>
        </p>
        <p style={{ marginBottom: 0 }}>© {currentYear} PauseAI</p>
      </footer>
    </div>
  );
}
