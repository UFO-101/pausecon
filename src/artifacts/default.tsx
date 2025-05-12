import React, { useState, useEffect, useRef } from 'react';

const colors = {
  primary: 'rgb(255 144 11)', // Orange accent color
  accent: '#3E6990', // Blue gradient color
  background: '#000000', // Pure black
  navBackground: '#000000', // Pure black for nav
  text: '#F1F1F1', // Light gray text
  subtext: '#B0B0B0', // Gray text for subtitles
  cardBackground: 'rgb(21 21 21)', // Dark gray for cards
  cardBorder: '#444444', // Border color for cards
  white: '#FFFFFF', // Pure white
  darkSection: '#0F0F0F', // Dark section background
  cardDark: '#2A2A2A', // Darker card background
};

export default function PauseConLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);
  const currentYear = new Date().getFullYear();
  
  const speakers = [
    { name: 'Joep Meindertsma', title: 'Founder of PauseAI', image: '/JoepMeindertsma.jpg' },
    { name: 'Connor Leahy', title: 'CEO of Conjecture', image: '/ConnorLeahy.jpg' },
    { name: 'Robert Miles', title: 'YouTuber', image: '/RobertMiles.jpg' },
    { name: 'Kat Woods', title: 'Founder of Nonlinear and Charity Entrepreneurship', image: '/KatWoods.jpg' },
    { name: 'David Krueger', title: 'Assistant Professor at the University of Montreal', image: '/DavidKrueger.jpg' },
    { name: 'Tara Steele', title: 'Director of The Safe AI for Children Alliance', image: '/TaraSteele.jpg' },
  ];

  const team = [
    { name: 'Joseph Miller', title: 'Director', org: 'PauseAI UK', image: '/JosephMiller.jpg' },
    { name: 'Ella Hughes', title: 'Organizing Director', org: 'PauseAI Global', image: '/EllaHughes.jpg' },
    { name: 'Tom Bibby', title: 'Communications Director', org: 'PauseAI Global', image: '/TomBibby.jpg' },
    { name: 'Patricio Vercesi', title: 'Online Coordinator', org: 'PauseAI Global', image: '/PatricioVercesi.jpg' },
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
        padding: '1rem', 
        zIndex: 1000,
        borderBottom: `1px solid ${colors.cardBorder}`
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')} style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: colors.text }}>
            <img src="/Pause Logo.svg" alt="PauseCon Logo" style={{ width: '36px', height: '36px' }} />
            <span style={{ fontSize: '1.5rem', fontWeight: '600' }}>PauseCon</span>
          </a>
          
          {/* Desktop Menu */}
          {!isMobile && (
            <div style={{ 
              display: 'flex', 
              gap: '2rem', 
              alignItems: 'center' 
            }}>
              <a href="#about" onClick={(e) => scrollToSection(e, 'about')} style={{ color: colors.text, textDecoration: 'none' }}>About</a>
              <a href="#speakers" onClick={(e) => scrollToSection(e, 'speakers')} style={{ color: colors.text, textDecoration: 'none' }}>Speakers</a>
              <a href="#schedule" onClick={(e) => scrollToSection(e, 'schedule')} style={{ color: colors.text, textDecoration: 'none' }}>Schedule</a>
              <a href="#team" onClick={(e) => scrollToSection(e, 'team')} style={{ color: colors.text, textDecoration: 'none' }}>Team</a>
              <a 
                href="https://lu.ma/hmrkdm0u" 
                target="_blank" 
                rel="noopener noreferrer"
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(45deg, #000000 0%, #000000 70%, #3E6990 100%)';
                  e.currentTarget.style.backgroundClip = 'padding-box';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(62, 105, 144, 0.4)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(45deg, #000000 0%, #000000 70%, #3E6990 100%)';
                  e.currentTarget.style.backgroundClip = 'padding-box';
                  e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                style={{ 
                  background: 'linear-gradient(45deg, #000000 0%, #000000 70%, #3E6990 100%)',
                  backgroundClip: 'padding-box',
                  color: colors.white, 
                  padding: '0.5rem 1.5rem', 
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
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
            backgroundColor: colors.background,
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} style={{ color: colors.text, textDecoration: 'none' }}>About</a>
            <a href="#speakers" onClick={(e) => scrollToSection(e, 'speakers')} style={{ color: colors.text, textDecoration: 'none' }}>Speakers</a>
            <a href="#schedule" onClick={(e) => scrollToSection(e, 'schedule')} style={{ color: colors.text, textDecoration: 'none' }}>Schedule</a>
            <a href="#team" onClick={(e) => scrollToSection(e, 'team')} style={{ color: colors.text, textDecoration: 'none' }}>Team</a>
            <a 
              href="https://lu.ma/hmrkdm0u" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                backgroundColor: colors.primary, 
                color: colors.white, 
                padding: '0.5rem 1.5rem', 
                borderRadius: '0.5rem', 
                fontWeight: 'bold',
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

      {/* Accommodation Deadline Banner */}
      <div style={{
        backgroundColor: colors.cardBackground,
        padding: '0.75rem 0',
        textAlign: 'center',
        borderBottom: `1px solid ${colors.cardBorder}`,
      }}>
        <p style={{ 
          margin: 0, 
          fontSize: '1.1rem',
          color: colors.text
        }}>
          <span style={{ fontWeight: 700, fontStyle: 'italic' }}>
            Application deadline for accommodation: end-of-day Monday 19th May
          </span>
        </p>
      </div>

      {/* Hero Section */}
      <section id="home" style={{ paddingTop: '10rem', paddingBottom: '5rem', textAlign: 'center', padding: '10rem 1rem 5rem', background: 'rgba(0, 0, 0, 0.2)' }}>
        <h1 style={{ fontSize: isMobile ? '3rem' : '6rem', fontWeight: '600', marginBottom: '0rem' }}>PauseCon</h1>
        <h2 style={{ fontSize: isMobile ? '2rem' : '3rem', fontWeight: '400', marginBottom: '2rem' }}>London 2025</h2>
        
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto 3rem', 
          aspectRatio: '16 / 9', 
          border: '4px solid rgba(241, 241, 241, 0.3)',
          borderRadius: '1rem',
          overflow: 'hidden'
        }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/kWUZw1TFjbQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        
        <p style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>27-30th June 2025</p>
        
        <a 
          href="https://lu.ma/hmrkdm0u" 
          target="_blank" 
          rel="noopener noreferrer"
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'linear-gradient(45deg, #000000 0%, #000000 70%, #3E6990 100%)';
            e.currentTarget.style.backgroundClip = 'padding-box';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(62, 105, 144, 0.4)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'linear-gradient(45deg, #000000 0%, #000000 70%, #3E6990 100%)';
            e.currentTarget.style.backgroundClip = 'padding-box';
            e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          style={{ 
            display: 'inline-block',
            background: 'linear-gradient(45deg, #000000 0%, #000000 70%, #3E6990 100%)',
            backgroundClip: 'padding-box',
            color: colors.white, 
            padding: isMobile ? '1rem 2rem' : '1.25rem 4rem', 
            fontSize: isMobile ? '1.25rem' : '1.5rem',
            borderRadius: '0.5rem',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            fontWeight: 'bold',
            textDecoration: 'none',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease'
          }}
        >
          Apply Now
        </a>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: '5rem 2rem', background: 'rgba(26, 26, 26, 0.3)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: isMobile ? '2rem' : '3rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center' }}>
            About PauseCon
          </h2>
          <div style={{ 
            backgroundColor: colors.cardBackground, 
            padding: '2rem', 
            borderRadius: '1rem',
            borderLeft: '4px solid ' + colors.primary
          }}>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
              PauseCon is a development and training event for anyone interested in volunteering for PauseAI, 
              ending with our largest protest to date.
            </p>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Attendees at PauseCon London will receive training in community building, social media strategy 
              and digital organizing. Connor Leahy, Founder of Conjecture, will give a talk on AI governance 
              and there will be a panel of 5 leaders in AI governance, discussing public communication of AI risks.
            </p>
            <p style={{ lineHeight: '1.6' }}>
              We will use the opportunity of having so many of us together in one place to do flyering and 
              recruitment for the London chapter, and also to hold our biggest ever protest. This should be 
              an excellent opportunity to build our numbers, and attract the attention of the public, the 
              media and British politicians.
            </p>
          </div>
          <div style={{ 
            backgroundColor: colors.cardBackground,
            padding: '1.5rem', 
            marginTop: '2rem',
            borderRadius: '0.5rem',
            textAlign: 'center',
            borderLeft: '4px solid ' + colors.primary
          }}>
            <p style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: 0, color: colors.text }}>
              We can provide accommodation in London for up to 50 attendees.
            </p>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" style={{ padding: '5rem 2rem', background: 'rgba(0, 0, 0, 0.4)' }}>
        <h2 style={{ fontSize: isMobile ? '2rem' : '3rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center', color: colors.text }}>
          Featured Speakers
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 
            window.innerWidth > 1200 ? 'repeat(6, 1fr)' : 
            window.innerWidth > 900 ? 'repeat(3, 1fr)' : 
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
      </section>

      {/* Schedule Section */}
      <section id="schedule" style={{ padding: '5rem 2rem', background: 'rgba(15, 15, 15, 0.3)' }}>
        <h2 style={{ fontSize: isMobile ? '2rem' : '3rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center', color: colors.text }}>
          What to Expect
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: '2rem',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <div style={{ 
            backgroundColor: colors.cardBackground, 
            padding: '2rem', 
            borderRadius: '0.5rem',
            borderTop: '4px solid ' + colors.primary
          }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: colors.text }}>Training Sessions</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ 
                backgroundColor: colors.cardDark, 
                padding: '1rem', 
                marginBottom: '1rem',
                borderRadius: '0.25rem',
                border: '1px solid ' + colors.cardBorder
              }}>
                Community Building Workshops
              </li>
              <li style={{ 
                backgroundColor: colors.cardDark, 
                padding: '1rem', 
                marginBottom: '1rem',
                borderRadius: '0.25rem',
                border: '1px solid ' + colors.cardBorder
              }}>
                Social Media Strategy
              </li>
              <li style={{ 
                backgroundColor: colors.cardDark, 
                padding: '1rem', 
                borderRadius: '0.25rem',
                border: '1px solid ' + colors.cardBorder
              }}>
                Digital Organizing Techniques
              </li>
            </ul>
          </div>
          <div style={{ 
            backgroundColor: colors.cardBackground, 
            padding: '2rem', 
            borderRadius: '0.5rem',
            borderTop: '4px solid ' + colors.primary
          }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: colors.text }}>Key Events</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ 
                backgroundColor: colors.cardDark, 
                padding: '1rem', 
                marginBottom: '1rem',
                borderRadius: '0.25rem',
                border: '1px solid ' + colors.cardBorder
              }}>
                AI Governance Talk by Connor Leahy
              </li>
              <li style={{ 
                backgroundColor: colors.cardDark, 
                padding: '1rem', 
                marginBottom: '1rem',
                borderRadius: '0.25rem',
                border: '1px solid ' + colors.cardBorder
              }}>
                Panel: Public Communication of AI Risks
              </li>
              <li style={{ 
                backgroundColor: colors.cardDark, 
                padding: '1rem', 
                borderRadius: '0.25rem',
                border: '1px solid ' + colors.cardBorder
              }}>
                Largest PauseAI Protest to Date
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '5rem 2rem', textAlign: 'center', background: 'rgba(0, 0, 0, 0.2)' }}>
        <h2 style={{ fontSize: isMobile ? '2rem' : '3rem', fontWeight: 'bold', marginBottom: '2rem', color: colors.text }}>Join Us in London</h2>
        <p style={{ fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem', color: colors.text }}>
          Be part of the movement to ensure AI development is safe. 
        </p>
        <a 
          href="https://lu.ma/hmrkdm0u" 
          target="_blank" 
          rel="noopener noreferrer"
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'linear-gradient(45deg, #000000 0%, #000000 70%, #3E6990 100%)';
            e.currentTarget.style.backgroundClip = 'padding-box';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(62, 105, 144, 0.4)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'linear-gradient(45deg, #000000 0%, #000000 70%, #3E6990 100%)';
            e.currentTarget.style.backgroundClip = 'padding-box';
            e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          style={{ 
            display: 'inline-block',
            background: 'linear-gradient(45deg, #000000 0%, #000000 70%, #3E6990 100%)',
            backgroundClip: 'padding-box',
            color: colors.white, 
            padding: isMobile ? '1rem 2rem' : '1.25rem 4rem', 
            fontSize: isMobile ? '1.25rem' : '1.5rem',
            borderRadius: '0.5rem',
            border: '1px solid rgba(255, 255, 255, 0.2)', 
            fontWeight: 'bold',
            textDecoration: 'none',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease'
          }}
        >
          Apply Now
        </a>
      </section>

      {/* Team Section */}
      <section id="team" style={{ padding: '5rem 2rem', background: 'rgba(0, 0, 0, 0.4)' }}>
        <h2 style={{ fontSize: isMobile ? '2rem' : '3rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center', color: colors.text }}>
          Our Team
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 
            window.innerWidth > 1200 ? 'repeat(4, 1fr)' : 
            window.innerWidth > 900 ? 'repeat(2, 1fr)' : 
            '1fr',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {team.map((member, index) => (
            <div 
              key={index}
              style={{ 
                backgroundColor: colors.cardBackground, 
                padding: '1.5rem', 
                borderRadius: '0.5rem',
                border: '2px solid ' + colors.cardBorder,
                textAlign: 'center'
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
                  src={member.image} 
                  alt={member.name}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    filter: 'grayscale(100%)'
                  }} 
                />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: colors.text }}>{member.name}</h3>
              <p style={{ fontSize: '1rem', color: colors.subtext }}>{member.title}</p>
              <p style={{ fontSize: '1rem', color: colors.subtext }}>{member.org}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: colors.background, padding: '2rem', textAlign: 'center' }}>
        {/* <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>PauseCon</p> */}
        <p style={{ fontSize: '0.875rem', color: colors.subtext }}>© {currentYear} PauseCon</p>
      </footer>
    </div>
  );
}