import React, { useState, useEffect, useRef } from 'react';

const colors = {
  primary: 'rgb(255 152 30)', // Warm orange accent
  accent: '#3E6990', // Blue gradient color
  background: '#000000', // Pure black
  navBackground: 'rgba(0, 0, 0, 0.8)', // Semi-transparent for blur
  text: '#F5F5F5', // Softer white text
  subtext: '#9CA3AF', // Refined gray for subtitles
  cardBackground: 'rgba(24, 24, 27, 0.8)', // Subtle transparency
  cardBorder: 'rgba(255, 255, 255, 0.08)', // Very subtle border
  white: '#FFFFFF', // Pure white
  darkSection: '#0A0A0A', // Slightly softer dark
  cardDark: '#18181B', // Zinc-900 equivalent
};

export default function PauseConLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const currentYear = new Date().getFullYear();
  
  // const speakers = [
  //   { name: 'Joep Meindertsma', title: 'Founder of PauseAI', image: '/JoepMeindertsma.jpg' },
  //   { name: 'Connor Leahy', title: 'CEO of Conjecture', image: '/ConnorLeahy.jpg' },
  //   { name: 'Robert Miles', title: 'YouTuber', image: '/RobertMiles.jpg' },
  //   { name: 'Kat Woods', title: 'Founder of Nonlinear and Charity Entrepreneurship', image: '/KatWoods.jpg' },
  //   { name: 'David Krueger', title: 'Assistant Professor at the University of Montreal', image: '/DavidKrueger.jpg' },
  //   { name: 'Tara Steele', title: 'Director of The Safe AI for Children Alliance', image: '/TaraSteele.jpg' },
  //   { name: 'Rufo Guerreschi', title: 'Director of the Coalition for a Baruch Plan for AI', image: '/RufoGuerreschi.jpg' },
  //   { name: 'Max Winga', title: 'Creator outreach at ControlAI', image: '/MaxWinga.jpg' },
  // ];

  const team = [
    { name: 'Joseph Miller', title: 'Director', org: 'PauseAI UK', image: '/JosephMiller.jpg' },
    { name: 'Didier Coeurnelle', title: 'Co-organizer', org: 'PauseCon', image: '/DidierCoeurnelle.jpg' },
    { name: 'Ella Hughes', title: 'Organizing Director', org: 'PauseAI Global', image: '/EllaHughes.jpg' },
    { name: 'Tom Bibby', title: 'Communications Director', org: 'PauseAI Global', image: '/TomBibby.jpg' },
    // { name: 'Patricio Vercesi', title: 'Online Coordinator', org: 'PauseAI Global', image: '/PatricioVercesi.jpg' },
  ];

  const speakers = [
    { name: 'Stuart Russell', title: 'Professor of Computer Science', org: 'UC Berkeley', image: '/StuartRussell.jpeg', bio: 'Author of the standard AI textbook used in over 1,500 universities worldwide.' },
    { name: 'Brando Benifei', title: 'Member of European Parliament', org: 'European Parliament', image: '/BrandoBenifei.jpg', bio: 'Lead architect of the EU AI Act, the world\'s first comprehensive AI law.' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (isMobile) {
        setIsMenuOpen(false);
      }
    }
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Dynamically set nav height for spacer
  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
    const handleResize = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.offsetHeight);
      }
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
          
          {/* Desktop Menu */}
          {!isMobile && (
            <div style={{
              display: 'flex',
              gap: '2.5rem',
              alignItems: 'center'
            }}>
              {['About', 'Speakers', 'Photos', 'Team'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => scrollToSection(e, item.toLowerCase())}
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
              ))}
              <a
                href="https://lu.ma/wtuyu7zy"
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
                Apply Now
              </a>
            </div>
          )}
          
          {/* Mobile Menu Button */}
          {isMobile && (
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ 
                background: 'none',
                border: 'none',
                color: colors.text,
                fontSize: '1.5rem',
                cursor: 'pointer'
              }}
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          )}
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && isMobile && (
          <div style={{
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            padding: '1.5rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            borderTop: `1px solid ${colors.cardBorder}`
          }}>
            {['About', 'Speakers', 'Photos', 'Team'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => scrollToSection(e, item.toLowerCase())}
                style={{ color: colors.subtext, textDecoration: 'none', fontSize: '1rem', fontWeight: '500' }}
              >
                {item}
              </a>
            ))}
            <a
              href="https://lu.ma/wtuyu7zy"
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
              Apply Now
            </a>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navbar */}
      <div style={{ height: navHeight }} />

      {/* Hero Section */}
      <section id="home" style={{
        paddingTop: isMobile ? '6rem' : '9rem',
        paddingBottom: isMobile ? '4rem' : '5rem',
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
          marginBottom: '2.5rem',
          color: colors.subtext,
          letterSpacing: '0.05em'
        }}>
          Brussels 2026
        </h2>

        <p style={{
          fontSize: isMobile ? '1.1rem' : '1.25rem',
          fontWeight: '500',
          marginBottom: '3rem',
          color: colors.text,
          letterSpacing: '0.02em'
        }}>
          21-23 February 2026
        </p>

        <a
          href="https://lu.ma/wtuyu7zy"
          target="_blank"
          rel="noopener noreferrer"
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = colors.primary;
            e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 152, 30, 0.3)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          style={{
            display: 'inline-block',
            backgroundColor: 'transparent',
            color: colors.primary,
            padding: isMobile ? '0.875rem 2rem' : '1rem 3rem',
            fontSize: isMobile ? '1rem' : '1.1rem',
            borderRadius: '0.5rem',
            border: '2px solid ' + colors.primary,
            fontWeight: '600',
            textDecoration: 'none',
            transition: 'all 0.2s ease',
            letterSpacing: '0.02em'
          }}
        >
          Apply Now
        </a>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: isMobile ? '3rem 1.5rem' : '4rem 2rem' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: isMobile ? '1.75rem' : '2.5rem',
            fontWeight: '600',
            marginBottom: '1rem',
            textAlign: 'center',
            lineHeight: '1.3',
            letterSpacing: '-0.02em'
          }}>
            From Risk to Responsibility: Join the Strategic Summit for a Global AI Pause
          </h2>
          <h3 style={{
            fontSize: isMobile ? '1.1rem' : '1.25rem',
            fontWeight: '500',
            marginBottom: '3rem',
            textAlign: 'center',
            color: colors.primary,
            letterSpacing: '0.01em'
          }}>
            A 3-Day Summit to Build Strategy and Drive Political Action at the Heart of the EU
          </h3>

          <div style={{
            backgroundColor: colors.cardBackground,
            padding: isMobile ? '1.5rem' : '2rem',
            borderRadius: '0.75rem',
            marginBottom: '2.5rem',
            border: `1px solid ${colors.cardBorder}`
          }}>
            <p style={{ marginBottom: '1.25rem', lineHeight: '1.75', fontSize: '1rem', color: colors.subtext }}>
              The uncontrolled race for superintelligence continues, posing a significant risk of human extinction. But the political window to act is opening. This February, we are bringing our demand for a global, verifiable moratorium to the place where European law is made: Brussels.
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: '1.75', fontSize: '1rem', color: colors.subtext }}>
              PauseCon 2 is <strong style={{ color: colors.text }}>not a typical conference</strong>. It is a <strong style={{ color: colors.text }}>high-impact, 3-day strategic summit</strong> designed to move the needle and position the European Union as a global initiator for an AI Pause.
            </p>
            <p style={{ lineHeight: '1.75', fontSize: '1rem', color: colors.subtext, marginBottom: 0 }}>
              This event is not just about training, it's about <strong style={{ color: colors.text }}>real-world impact</strong>. If you are ready to move beyond discussion and contribute to tangible political change, this is your event.
            </p>
          </div>

          <h3 style={{
            fontSize: isMobile ? '1.5rem' : '1.75rem',
            fontWeight: '600',
            marginBottom: '1.5rem',
            textAlign: 'center',
            letterSpacing: '-0.01em'
          }}>
            What to Expect
          </h3>

          <div style={{
            display: 'grid',
            gap: '1rem',
            marginBottom: '2.5rem'
          }}>
            {[
              { title: 'Exclusive Access & Direct Lobbying', desc: 'The summit\'s centerpiece is a public conference held inside the European Parliament. This is a unique platform to present our policy proposals and engage directly with EU policymakers, their staff, and the Brussels political community.' },
              { title: 'Strategic Workshops', desc: 'This is a participatory event. You won\'t just be briefed; you will co-create the strategy. We will draft the AI Moratorium Charter, finalise the policy documents for MEPs, and plan our public actions.' },
              { title: 'High-Visibility Public Action', desc: 'We will hold a major, coordinated demonstration at the Place du Luxembourg, directly in front of the Parliament. Our goal is to gain maximum media and political attention.' },
              { title: 'Community & Networking', desc: 'Connect with the dedicated experts, activists, and organisers who form the core of the PauseAI movement. Forge the alliances we need for the long-term international campaign.' }
            ].map((item, index) => (
              <div key={index} style={{
                backgroundColor: colors.cardBackground,
                padding: isMobile ? '1.25rem' : '1.5rem',
                borderRadius: '0.5rem',
                border: `1px solid ${colors.cardBorder}`
              }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem', color: colors.text }}>
                  {item.title}
                </h4>
                <p style={{ lineHeight: '1.65', fontSize: '0.95rem', color: colors.subtext, marginBottom: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            backgroundColor: 'rgba(255, 152, 30, 0.08)',
            padding: isMobile ? '1.5rem' : '2rem',
            marginBottom: '1.5rem',
            borderRadius: '0.5rem',
            textAlign: 'center',
            border: '1px solid rgba(255, 152, 30, 0.2)'
          }}>
            <p style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.75rem', color: colors.text }}>
              Your commitment matters.
            </p>
            <p style={{ fontSize: '1rem', margin: 0, color: colors.subtext, lineHeight: '1.65' }}>
              Participation is <strong style={{ color: colors.primary }}>free of charge</strong>. We provide <strong style={{ color: colors.primary }}>accommodation</strong> and cover part of the catering costs.
            </p>
          </div>

          <p style={{
            fontSize: '1rem',
            lineHeight: '1.7',
            textAlign: 'center',
            color: colors.subtext,
            fontStyle: 'italic'
          }}>
            We are removing the barriers so that we can focus on what matters most: achieving maximum impact.
          </p>
        </div>
      </section>

      {/* Speakers Section - Brussels 2026 */}
      <section id="speakers" style={{ padding: isMobile ? '3rem 1.5rem' : '4rem 2rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: isMobile ? '1.75rem' : '2.25rem',
            fontWeight: '600',
            marginBottom: '0.75rem',
            textAlign: 'center',
            color: colors.text,
            letterSpacing: '-0.02em'
          }}>
            Speakers
          </h2>
          <p style={{ fontSize: '1rem', textAlign: 'center', marginBottom: '3rem', color: colors.subtext }}>
            Leading voices on AI safety and policy.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: '1.5rem',
            justifyItems: 'center'
          }}>
            {speakers.map((speaker, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: colors.cardBackground,
                  borderRadius: '0.75rem',
                  overflow: 'hidden',
                  border: `1px solid ${colors.cardBorder}`,
                  maxWidth: '320px',
                  width: '100%'
                }}
              >
                <div style={{
                  width: '100%',
                  aspectRatio: '4 / 5',
                  overflow: 'hidden'
                }}>
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top'
                    }}
                  />
                </div>
                <div style={{ padding: '1.25rem', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.25rem', color: colors.text }}>
                    {speaker.name}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: colors.subtext, marginBottom: '0.125rem' }}>
                    {speaker.title}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: colors.primary, fontWeight: '500', marginBottom: '0.75rem' }}>
                    {speaker.org}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: colors.subtext, lineHeight: '1.5', fontStyle: 'italic', marginBottom: 0 }}>
                    {speaker.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photos Section - London 2025 */}
      <section id="photos" style={{ padding: isMobile ? '3rem 1.5rem' : '4rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: isMobile ? '1.75rem' : '2.25rem',
            fontWeight: '600',
            marginBottom: '0.75rem',
            textAlign: 'center',
            color: colors.text,
            letterSpacing: '-0.02em'
          }}>
            London 2025
          </h2>
          <p style={{
            fontSize: '1rem',
            textAlign: 'center',
            marginBottom: '2.5rem',
            color: colors.subtext,
            maxWidth: '600px',
            margin: '0 auto 2.5rem'
          }}>
            Highlights from our inaugural conference.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1rem'
          }}>
            {[
              'DSC01736.jpg',
              'DSC01851.jpg',
              'DSC01877.jpg',
              'DSC01893.jpg',
              'DSC01941.jpg',
              'DSC01943 (2).jpg'
            ].map((photo, index) => (
              <div
                key={index}
                onClick={() => setSelectedPhoto(photo)}
                style={{
                  borderRadius: '0.5rem',
                  overflow: 'hidden',
                  transition: 'transform 0.2s ease, opacity 0.2s ease',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                  e.currentTarget.style.opacity = '0.9';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.opacity = '1';
                }}
              >
                <img
                  src={`/london-2025-photos/${photo}`}
                  alt={`PauseCon London 2025 - Photo ${index + 1}`}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      {/* <section id="speakers" style={{ padding: '5rem 2rem', background: 'rgba(0, 0, 0, 0.4)' }}>
        <h2 style={{ fontSize: isMobile ? '2rem' : '3rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center', color: colors.text }}>
          Featured Speakers
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 
            window.innerWidth > 1200 ? 'repeat(4, 1fr)' :
            window.innerWidth > 900 ? 'repeat(2, 1fr)' :
            window.innerWidth > 600 ? 'repeat(2, 1fr)' :
            '1fr',
          gap: '1.5rem',
          maxWidth: '1600px',
          margin: '0 auto'
        }}>
          {speakers.map((speaker, index) => (
            <div 
              key={index} 
              style={{ 
                backgroundColor: colors.cardBackground, 
                padding: '1.5rem', 
                borderRadius: '0.5rem',
                border: '2px solid ' + colors.cardBorder,
                textAlign: 'center',
                minWidth: '0', // Prevent grid item from overflowing
                overflow: 'hidden'
              }}
            >
              <div style={{ 
                width: '120px', 
                height: '120px', 
                borderRadius: '50%',
                margin: '0 auto 0.75rem',
                overflow: 'hidden'
              }}>
                <img 
                  src={speaker.image} 
                  alt={speaker.name}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    filter: 'grayscale(100%)'
                  }} 
                />
              </div>
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: 'bold', 
                marginBottom: '0.5rem',
                overflow: 'hidden',
                wordWrap: 'break-word',
                textAlign: 'center',
                color: colors.text
              }}>
                {speaker.name}
              </h3>
              <p style={{ 
                fontSize: '0.875rem', 
                color: colors.subtext,
                overflow: 'hidden',
                wordWrap: 'break-word',
                textAlign: 'center',
                display: 'block'
              }}>
                {speaker.title}
              </p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Schedule Section */}
      {/* <section id="schedule" style={{ padding: '5rem 2rem', background: 'rgba(15, 15, 15, 0.3)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: isMobile ? '2rem' : '3rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center', color: colors.text }}>
            Our Schedule is Built to Maximise Impact
          </h2>
          <p style={{ fontSize: '1.1rem', textAlign: 'center', marginBottom: '3rem', color: colors.subtext, maxWidth: '800px', margin: '0 auto 3rem' }}>
            Three intensive days of strategy, policymaking, and public action at the heart of European power.
          </p>
        </div>
      </section> */}

      {/* CTA Section */}
      <section style={{
        padding: isMobile ? '3rem 1.5rem' : '4rem 2rem',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: isMobile ? '1.75rem' : '2.25rem',
          fontWeight: '600',
          marginBottom: '1rem',
          color: colors.text,
          letterSpacing: '-0.02em'
        }}>
          Join Us in Brussels
        </h2>
        <p style={{
          fontSize: '1rem',
          marginBottom: '2rem',
          maxWidth: '500px',
          margin: '0 auto 2rem',
          color: colors.subtext,
          lineHeight: '1.6'
        }}>
          Be part of the movement to ensure AI development is safe.
        </p>
        <a
          href="https://lu.ma/wtuyu7zy"
          target="_blank"
          rel="noopener noreferrer"
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = colors.primary;
            e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 152, 30, 0.3)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          style={{
            display: 'inline-block',
            backgroundColor: 'transparent',
            color: colors.primary,
            padding: isMobile ? '0.875rem 2rem' : '1rem 3rem',
            fontSize: isMobile ? '1rem' : '1.1rem',
            borderRadius: '0.5rem',
            border: '2px solid ' + colors.primary,
            fontWeight: '600',
            textDecoration: 'none',
            transition: 'all 0.2s ease',
            letterSpacing: '0.02em'
          }}
        >
          Apply Now
        </a>
      </section>

      {/* Team Section */}
      <section id="team" style={{ padding: isMobile ? '3rem 1.5rem' : '4rem 2rem' }}>
        <h2 style={{
          fontSize: isMobile ? '1.75rem' : '2.25rem',
          fontWeight: '600',
          marginBottom: '2.5rem',
          textAlign: 'center',
          color: colors.text,
          letterSpacing: '-0.02em'
        }}>
          Team
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {team.map((member, index) => (
            <div
              key={index}
              style={{
                backgroundColor: colors.cardBackground,
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: `1px solid ${colors.cardBorder}`,
                textAlign: 'center'
              }}
            >
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                margin: '0 auto 1rem',
                overflow: 'hidden'
              }}>
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.25rem', color: colors.text }}>{member.name}</h3>
              <p style={{ fontSize: '0.85rem', color: colors.subtext, marginBottom: '0.125rem' }}>{member.title}</p>
              <p style={{ fontSize: '0.85rem', color: colors.primary }}>{member.org}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '2rem 1.5rem',
        textAlign: 'center',
        borderTop: `1px solid ${colors.cardBorder}`
      }}>
        <p style={{ fontSize: '0.8rem', color: colors.subtext }}>© {currentYear} PauseCon</p>
      </footer>

      {/* Photo Modal */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            padding: '2rem',
            animation: 'fadeIn 0.3s ease-in-out'
          }}
        >
          <style>
            {`
              @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
              }
              @keyframes zoomIn {
                from { transform: scale(0.8); opacity: 0; }
                to { transform: scale(1); opacity: 1; }
              }
            `}
          </style>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              position: 'relative',
              animation: 'zoomIn 0.3s ease-in-out'
            }}
          >
            <img
              src={`/london-2025-photos/${selectedPhoto}`}
              alt="PauseCon London 2025"
              style={{
                maxWidth: '100%',
                maxHeight: '90vh',
                width: 'auto',
                height: 'auto',
                display: 'block',
                borderRadius: '0.5rem',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
              }}
            />
            <button
              onClick={() => setSelectedPhoto(null)}
              style={{
                position: 'absolute',
                top: '-1rem',
                right: '-1rem',
                backgroundColor: colors.white,
                color: colors.background,
                border: 'none',
                borderRadius: '50%',
                width: '2.5rem',
                height: '2.5rem',
                fontSize: '1.5rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}