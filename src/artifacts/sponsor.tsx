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

const SPONSOR_EMAIL = 'irina@pauseai.info';

const valueProps = [
  {
    title: 'Support the AI safety movement',
    body: 'PauseAI is one of the few organisations advocating regulation of AI companies. Sponsoring PauseCon would help us take further steps towards urgently-needed regulation. Your contribution would help us to train the volunteers who return to their countries with the skills, connections and motivation to grow the PauseAI movement and move us closer to a pause.',
  },
  {
    title: 'PauseCon fuels the PauseAI movement',
    body: 'PauseCon is the only event centring on catastrophic risk that convenes AI-safety advocates, researchers, journalists and leaders. PauseCon Brussels attracted 80 attendees while PauseCon London will attract even more. Sponsorship enables PauseAI to bring more people to PauseCon, including those who otherwise would not have the means to attend.',
  },
  {
    title: 'Align your brand with the most credible voice in AI safety',
    body: 'Sponsoring PauseCon boosts credibility. PauseAI is a trusted voice, supported by experts like Stuart Russell, numerous politicians and an ever-growing body of public support. Your brand will be prominently displayed before, during and after the event, on marketing materials and across various media channels, increasing your visibility. This is your chance to be associated with a democratic, people-centred movement that represents concerned citizens throughout the globe and has AI safety at its core.',
  },
  {
    title: 'Measurable impact',
    body: 'PauseCon is the catalyst for action. Participants return to their countries with ideas and action plans, and they have an impact. PauseCon Brussels 2026 directly led to the establishment of a chapter in Belgium, the revival of PauseAI’s Italian chapter, and public campaigns in multiple countries. Sponsors support the capacity building of the volunteers who propel the movement in their own countries.',
  },
];

type Tier = {
  name: string;
  price: string;
  tagline?: string;
  highlighted?: boolean;
  perks: string[];
};

const tiers: Tier[] = [
  {
    name: 'Gold',
    price: '£10,000',
    tagline: 'Position your organisation as one of the leading sponsors of PauseCon.',
    highlighted: true,
    perks: [
      'A 30-minute session (presentation or workshop) during the conference (content to be agreed by organisers)',
      '1 social media post mentioning the sponsor - content to be agreed by the host and the sponsor',
      '5 individual registrations (including accommodation) for all PauseCon sessions over the two days',
      'Pre- and post-event branding - the sponsor’s logo will be included on all marketing materials including social media and the official PauseCon website',
      'Onsite branding - the sponsor’s logo will be included on all slides and any printed materials',
    ],
  },
  {
    name: 'Silver',
    price: '£5,000',
    perks: [
      'Pre- and post-event branding - the sponsor’s logo will be included on all marketing materials including social media and the official PauseCon website',
      '3 individual registrations (including accommodation) for all PauseCon sessions over the two days',
      'Onsite branding - the sponsor’s logo will be included on all slides and any printed materials',
    ],
  },
  {
    name: 'Bronze',
    price: '£2,500',
    perks: [
      'Pre- and post-event branding - the sponsor’s logo will be included on all marketing materials including social media and the official PauseCon website',
      '1 individual registration (including accommodation) for all PauseCon sessions over the two days',
      'Onsite branding - the sponsor’s logo will be included on all slides and any printed materials',
    ],
  },
];

const otherOptions = [
  'Events (such as breakfast, lunch, dinner and the drinks reception)',
  'A stand or table to promote your organisation',
  'The PauseCon website',
  'Conference goodie bags',
  'PauseAI t-shirts and other protest materials',
  'Photography and videography',
];

export default function PauseConSponsor() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);

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
      setIsMobile(window.innerWidth <= 768);
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

  const sponsorMailto = `mailto:${SPONSOR_EMAIL}?subject=PauseCon%20sponsorship%20enquiry`;

  const navItems = [
    { label: 'Why sponsor', id: 'why-sponsor' },
    { label: 'Packages', id: 'packages' },
    { label: 'Other options', id: 'other-options' },
  ];

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
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', color: colors.text }}>
            <img src="/Pause Logo.svg" alt="PauseCon Logo" style={{ width: '32px', height: '32px' }} />
            <span style={{ fontSize: '1.5rem', fontWeight: '600' }}>PauseCon</span>
          </a>

          {!isMobile && (
            <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
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
                  {item.label}
                </a>
              ))}
              <a
                href={sponsorMailto}
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
                Become a sponsor
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
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                style={{ color: colors.subtext, textDecoration: 'none', fontSize: '1rem', fontWeight: '500' }}
              >
                {item.label}
              </a>
            ))}
            <a
              href={sponsorMailto}
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
              Become a sponsor
            </a>
          </div>
        )}
      </nav>

      <div style={{ height: navHeight }} />

      {/* Hero */}
      <section style={{
        paddingTop: isMobile ? '4rem' : '6rem',
        paddingBottom: isMobile ? '3rem' : '5rem',
        paddingLeft: isMobile ? '1.5rem' : '2rem',
        paddingRight: isMobile ? '1.5rem' : '2rem',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{
            fontSize: '0.8rem',
            fontWeight: '600',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: colors.primary,
            marginBottom: '1.25rem'
          }}>
            Sponsorship
          </p>
          <h1 style={{
            fontSize: isMobile ? '2.25rem' : '3.5rem',
            fontWeight: '700',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: '1.5rem'
          }}>
            Sponsor PauseCon
          </h1>
          <p style={{
            fontSize: isMobile ? '1.05rem' : '1.2rem',
            color: colors.subtext,
            lineHeight: 1.6,
            marginBottom: '2rem'
          }}>
            PauseCon is PauseAI Global’s flagship international conference and primary
            capacity-building event. It is held twice a year and attracts around 100
            attendees from more than 15 countries. It combines intensive organiser
            training, presentations from experts in the field, and culminates in a
            large, coordinated, peaceful protest.
          </p>
          <a
            href={sponsorMailto}
            style={{
              display: 'inline-block',
              backgroundColor: colors.primary,
              color: '#000',
              padding: '0.85rem 1.75rem',
              borderRadius: '0.5rem',
              fontWeight: '600',
              fontSize: '1rem',
              textDecoration: 'none',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(255, 152, 30, 0.25)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Become a sponsor →
          </a>
        </div>
      </section>

      {/* Why sponsor */}
      <section id="why-sponsor" style={{
        padding: isMobile ? '3rem 1.5rem' : '5rem 2rem',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: isMobile ? '1.75rem' : '2.25rem',
            fontWeight: '600',
            marginBottom: '3rem',
            textAlign: 'center',
            letterSpacing: '-0.02em'
          }}>
            Why sponsor PauseCon
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: '1.5rem'
          }}>
            {valueProps.map((prop) => (
              <div
                key={prop.title}
                style={{
                  backgroundColor: colors.cardBackground,
                  borderRadius: '0.75rem',
                  border: `1px solid ${colors.cardBorder}`,
                  padding: isMobile ? '1.5rem' : '2rem',
                }}
              >
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  marginBottom: '0.85rem',
                  letterSpacing: '-0.01em',
                  color: colors.white,
                }}>
                  {prop.title}
                </h3>
                <p style={{
                  fontSize: '0.95rem',
                  color: colors.subtext,
                  lineHeight: 1.65,
                  margin: 0,
                }}>
                  {prop.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship packages */}
      <section id="packages" style={{
        padding: isMobile ? '3rem 1.5rem' : '5rem 2rem',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: isMobile ? '1.75rem' : '2.25rem',
            fontWeight: '600',
            marginBottom: '0.75rem',
            textAlign: 'center',
            letterSpacing: '-0.02em'
          }}>
            Sponsorship packages
          </h2>
          <p style={{
            textAlign: 'center',
            color: colors.subtext,
            fontSize: '0.95rem',
            maxWidth: '640px',
            margin: '0 auto 3rem',
            lineHeight: 1.6,
          }}>
            All packages are customisable and can be tailored to meet your specific
            goals and budget.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '1.5rem',
            alignItems: 'stretch',
          }}>
            {tiers.map((tier) => {
              const highlighted = !!tier.highlighted;
              return (
                <div
                  key={tier.name}
                  style={{
                    backgroundColor: colors.cardBackground,
                    borderRadius: '0.85rem',
                    border: highlighted
                      ? `1px solid rgba(255, 152, 30, 0.55)`
                      : `1px solid ${colors.cardBorder}`,
                    padding: isMobile ? '1.75rem' : '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: highlighted ? '0 10px 40px rgba(255, 152, 30, 0.08)' : 'none',
                    position: 'relative',
                  }}
                >
                  {highlighted && (
                    <span style={{
                      position: 'absolute',
                      top: '-0.65rem',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: colors.primary,
                      color: '#000',
                      fontSize: '0.7rem',
                      fontWeight: '700',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      padding: '0.3rem 0.7rem',
                      borderRadius: '999px',
                    }}>
                      Most visibility
                    </span>
                  )}
                  <p style={{
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: highlighted ? colors.primary : colors.subtext,
                    marginBottom: '0.4rem',
                  }}>
                    {tier.name}
                  </p>
                  <p style={{
                    fontSize: isMobile ? '2rem' : '2.25rem',
                    fontWeight: '700',
                    letterSpacing: '-0.02em',
                    margin: 0,
                    color: colors.white,
                  }}>
                    {tier.price}
                  </p>
                  {tier.tagline && (
                    <p style={{
                      marginTop: '0.85rem',
                      fontSize: '0.95rem',
                      color: colors.subtext,
                      lineHeight: 1.55,
                    }}>
                      {tier.tagline}
                    </p>
                  )}
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '1.5rem 0 0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.85rem',
                    flexGrow: 1,
                  }}>
                    {tier.perks.map((perk, idx) => (
                      <li
                        key={idx}
                        style={{
                          fontSize: '0.92rem',
                          color: colors.subtext,
                          lineHeight: 1.55,
                          paddingLeft: '1.4rem',
                          position: 'relative',
                        }}
                      >
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          top: '0.15rem',
                          color: colors.primary,
                          fontWeight: '700',
                        }}>
                          ✓
                        </span>
                        {perk}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={sponsorMailto}
                    style={{
                      display: 'block',
                      marginTop: '1.75rem',
                      textAlign: 'center',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      fontWeight: '600',
                      fontSize: '0.95rem',
                      textDecoration: 'none',
                      backgroundColor: highlighted ? colors.primary : 'transparent',
                      color: highlighted ? '#000' : colors.primary,
                      border: highlighted ? '1px solid transparent' : `1px solid rgba(255, 152, 30, 0.4)`,
                      transition: 'all 0.2s ease',
                    }}
                    onMouseOver={(e) => {
                      if (highlighted) {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      } else {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 152, 30, 0.12)';
                      }
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      if (!highlighted) e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    Choose {tier.name}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other options */}
      <section id="other-options" style={{
        padding: isMobile ? '3rem 1.5rem' : '5rem 2rem',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: isMobile ? '1.75rem' : '2.25rem',
            fontWeight: '600',
            marginBottom: '1rem',
            textAlign: 'center',
            letterSpacing: '-0.02em',
          }}>
            Other sponsorship options
          </h2>
          <p style={{
            textAlign: 'center',
            color: colors.subtext,
            fontSize: '0.95rem',
            lineHeight: 1.6,
            marginBottom: '2.5rem',
          }}>
            Want to sponsor something specific? We are open to bespoke arrangements,
            including any of the following:
          </p>
          <div style={{
            backgroundColor: colors.cardBackground,
            border: `1px solid ${colors.cardBorder}`,
            borderRadius: '0.75rem',
            padding: isMobile ? '1.5rem' : '2rem',
          }}>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: '0.9rem 1.5rem',
            }}>
              {otherOptions.map((option) => (
                <li
                  key={option}
                  style={{
                    fontSize: '0.95rem',
                    color: colors.subtext,
                    lineHeight: 1.55,
                    paddingLeft: '1.4rem',
                    position: 'relative',
                  }}
                >
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    top: '0.15rem',
                    color: colors.primary,
                    fontWeight: '700',
                  }}>
                    •
                  </span>
                  {option}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section style={{
        padding: isMobile ? '3rem 1.5rem 4rem' : '4rem 2rem 6rem',
      }}>
        <div style={{
          maxWidth: '700px',
          margin: '0 auto',
          textAlign: 'center',
          backgroundColor: colors.cardBackground,
          border: `1px solid ${colors.cardBorder}`,
          borderRadius: '0.85rem',
          padding: isMobile ? '2rem 1.5rem' : '3rem',
        }}>
          <h2 style={{
            fontSize: isMobile ? '1.5rem' : '1.85rem',
            fontWeight: '600',
            marginBottom: '0.75rem',
            letterSpacing: '-0.01em',
          }}>
            Let’s talk
          </h2>
          <p style={{
            color: colors.subtext,
            fontSize: '1rem',
            lineHeight: 1.6,
            marginBottom: '1.75rem',
          }}>
            Contact Irina for more information or to discuss a tailored sponsorship.
          </p>
          <a
            href={sponsorMailto}
            style={{
              display: 'inline-block',
              backgroundColor: colors.primary,
              color: '#000',
              padding: '0.85rem 1.75rem',
              borderRadius: '0.5rem',
              fontWeight: '600',
              fontSize: '1rem',
              textDecoration: 'none',
            }}
          >
            {SPONSOR_EMAIL}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: isMobile ? '2rem 1.5rem' : '3rem 2rem',
        borderTop: `1px solid ${colors.cardBorder}`,
        textAlign: 'center',
        color: colors.subtext,
        fontSize: '0.9rem',
      }}>
        <a href="/" style={{ color: colors.primary, textDecoration: 'none' }}>
          ← Back to PauseCon
        </a>
      </footer>
    </div>
  );
}
