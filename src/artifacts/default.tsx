import React, { useState, useEffect } from 'react';

export default function PauseConLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const currentYear = new Date().getFullYear();
  
  const speakers = [
    { name: 'Joep Meindertsma', title: 'founder of PauseAI', image: '/JoepMeindertsma.jpg' },
    { name: 'Connor Leahy', title: 'CEO of Conjecture', image: '/ConnorLeahy.png' },
    { name: 'Robert Miles', title: 'YouTuber', image: '/RobertMiles.png' },
    { name: 'David Kreuger', title: 'Assistant Professor at the University of Montreal', image: '/DavidKrueger.png' },
    { name: 'Tara Steele', title: 'Director of The Safe AI for Children Alliance', image: '/TaraSteele.jpeg' },
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

  return (
    <div style={{ backgroundColor: '#1D1D1D', color: '#F1F1F1', minHeight: '100vh', fontFamily: 'Red Hat Display, sans-serif' }}>
      {/* Navigation */}
      <nav style={{ position: 'fixed', width: '100%', top: 0, left: 0, backgroundColor: '#000000', padding: '1rem', zIndex: 1000 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')} style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: '#F1F1F1' }}>
            <img src="/Pause Logo.svg" alt="PauseCon Logo" style={{ width: '36px', height: '36px' }} />
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>PauseCon</span>
          </a>
          
          {/* Desktop Menu */}
          {!isMobile && (
            <div style={{ 
              display: 'flex', 
              gap: '2rem', 
              alignItems: 'center' 
            }}>
              <a href="#about" onClick={(e) => scrollToSection(e, 'about')} style={{ color: '#F1F1F1', textDecoration: 'none' }}>About</a>
              <a href="#speakers" onClick={(e) => scrollToSection(e, 'speakers')} style={{ color: '#F1F1F1', textDecoration: 'none' }}>Speakers</a>
              <a href="#schedule" onClick={(e) => scrollToSection(e, 'schedule')} style={{ color: '#F1F1F1', textDecoration: 'none' }}>Schedule</a>
              <a 
                href="https://lu.ma/hmrkdm0u" 
                target="_blank" 
                rel="noopener noreferrer"
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#FE9415';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(254, 148, 21, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#FE9415';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                style={{ 
                  backgroundColor: '#FE9415', 
                  color: '#000000', 
                  padding: '0.5rem 1.5rem', 
                  borderRadius: '0.5rem', 
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
                color: '#F1F1F1',
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
            backgroundColor: '#000000',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} style={{ color: '#F1F1F1', textDecoration: 'none' }}>About</a>
            <a href="#speakers" onClick={(e) => scrollToSection(e, 'speakers')} style={{ color: '#F1F1F1', textDecoration: 'none' }}>Speakers</a>
            <a href="#schedule" onClick={(e) => scrollToSection(e, 'schedule')} style={{ color: '#F1F1F1', textDecoration: 'none' }}>Schedule</a>
            <a 
              href="https://lu.ma/hmrkdm0u" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                backgroundColor: '#FE9415', 
                color: '#000000', 
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

      {/* Hero Section */}
      <section id="home" style={{ paddingTop: '10rem', paddingBottom: '5rem', textAlign: 'center', backgroundColor: '#1D1D1D', padding: '10rem 1rem 5rem' }}>
        <h1 style={{ fontSize: isMobile ? '3rem' : '6rem', fontWeight: '900', marginBottom: '1rem' }}>PauseCon</h1>
        <h2 style={{ fontSize: isMobile ? '2rem' : '3rem', fontWeight: '600', marginBottom: '2rem' }}>London 2025</h2>
        
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
            src="https://www.youtube.com/embed/NpEaa2P7qZI"
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
            e.currentTarget.style.backgroundColor = '#FE9415';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(254, 148, 21, 0.4)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#FE9415';
            e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          style={{ 
            display: 'inline-block',
            backgroundColor: '#FE9415', 
            color: '#000000', 
            padding: isMobile ? '1rem 2rem' : '1.25rem 4rem', 
            fontSize: isMobile ? '1.25rem' : '1.5rem',
            borderRadius: '0.5rem', 
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
      <section id="about" style={{ padding: '5rem 2rem', backgroundColor: '#1A1A1A' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: isMobile ? '2rem' : '3rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center' }}>
            About PauseCon
          </h2>
          <div style={{ 
            backgroundColor: '#333333', 
            padding: '2rem', 
            borderRadius: '1rem',
            borderLeft: '4px solid #FE9415'
          }}>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
              PauseCon is a development and training event for anyone interested in volunteering for PauseAI, 
              ending with our largest protest to date.
            </p>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Attendees at PauseCon London will receive training in community building, social media strategy 
              and digital organizing. Connor Leahy, founder of Conjecture, will give a talk on AI governance 
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
            backgroundColor: '#FE9415', 
            color: '#000000', 
            padding: '1.5rem', 
            marginTop: '2rem',
            borderRadius: '0.5rem',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
              We can provide accommodation in London for up to 50 attendees.
            </p>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" style={{ padding: '5rem 2rem', backgroundColor: '#000000' }}>
        <h2 style={{ fontSize: isMobile ? '2rem' : '3rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center', color: '#F1F1F1' }}>
          Featured Speakers
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 
            window.innerWidth > 1200 ? 'repeat(5, 1fr)' : 
            window.innerWidth > 900 ? 'repeat(3, 1fr)' : 
            window.innerWidth > 600 ? 'repeat(2, 1fr)' : 
            '1fr',
          gap: '1.5rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {speakers.map((speaker, index) => (
            <div 
              key={index} 
              style={{ 
                backgroundColor: '#222222', 
                padding: '1.5rem', 
                borderRadius: '0.5rem',
                border: '2px solid #444444',
                textAlign: 'center',
                minWidth: '0', // Prevent grid item from overflowing
                overflow: 'hidden'
              }}
            >
              <div style={{ 
                width: '120px', 
                height: '120px', 
                borderRadius: '50%',
                margin: '0 auto 0.5rem',
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
                color: '#F1F1F1'
              }}>
                {speaker.name}
              </h3>
              <p style={{ 
                fontSize: '0.875rem', 
                color: '#B0B0B0',
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
      <section id="schedule" style={{ padding: '5rem 2rem', backgroundColor: '#0F0F0F' }}>
        <h2 style={{ fontSize: isMobile ? '2rem' : '3rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center', color: '#F1F1F1' }}>
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
            backgroundColor: '#1A1A1A', 
            padding: '2rem', 
            borderRadius: '0.5rem',
            borderTop: '4px solid #FE9415'
          }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#F1F1F1' }}>Training Sessions</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ 
                backgroundColor: '#2A2A2A', 
                padding: '1rem', 
                marginBottom: '1rem',
                borderRadius: '0.25rem',
                border: '1px solid #444444'
              }}>
                Community Building Workshops
              </li>
              <li style={{ 
                backgroundColor: '#2A2A2A', 
                padding: '1rem', 
                marginBottom: '1rem',
                borderRadius: '0.25rem',
                border: '1px solid #444444'
              }}>
                Social Media Strategy
              </li>
              <li style={{ 
                backgroundColor: '#2A2A2A', 
                padding: '1rem', 
                borderRadius: '0.25rem',
                border: '1px solid #444444'
              }}>
                Digital Organizing Techniques
              </li>
            </ul>
          </div>
          <div style={{ 
            backgroundColor: '#1A1A1A', 
            padding: '2rem', 
            borderRadius: '0.5rem',
            borderTop: '4px solid #FE9415'
          }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#F1F1F1' }}>Key Events</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ 
                backgroundColor: '#2A2A2A', 
                padding: '1rem', 
                marginBottom: '1rem',
                borderRadius: '0.25rem',
                border: '1px solid #444444'
              }}>
                AI Governance Talk by Connor Leahy
              </li>
              <li style={{ 
                backgroundColor: '#2A2A2A', 
                padding: '1rem', 
                marginBottom: '1rem',
                borderRadius: '0.25rem',
                border: '1px solid #444444'
              }}>
                Panel: Public Communication of AI Risks
              </li>
              <li style={{ 
                backgroundColor: '#2A2A2A', 
                padding: '1rem', 
                borderRadius: '0.25rem',
                border: '1px solid #444444'
              }}>
                Largest PauseAI Protest to Date
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '5rem 2rem', textAlign: 'center', backgroundColor: '#1D1D1D' }}>
        <h2 style={{ fontSize: isMobile ? '2rem' : '3rem', fontWeight: 'bold', marginBottom: '2rem', color: '#F1F1F1' }}>Join Us in London</h2>
        <p style={{ fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem', color: '#F1F1F1' }}>
          Be part of the movement to ensure AI development is safe. 
        </p>
        <a 
          href="https://lu.ma/hmrkdm0u" 
          target="_blank" 
          rel="noopener noreferrer"
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#FE9415';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(254, 148, 21, 0.4)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#FE9415';
            e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          style={{ 
            display: 'inline-block',
            backgroundColor: '#FE9415', 
            color: '#000000', 
            padding: isMobile ? '1rem 2rem' : '1.25rem 4rem', 
            fontSize: isMobile ? '1.25rem' : '1.5rem',
            borderRadius: '0.5rem', 
            fontWeight: 'bold',
            textDecoration: 'none',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease'
          }}
        >
          Apply Now
        </a>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#000000', padding: '2rem', textAlign: 'center' }}>
        {/* <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>PauseCon</p> */}
        <p style={{ fontSize: '0.875rem', color: '#B0B0B0' }}>© {currentYear} PauseCon</p>
      </footer>
    </div>
  );
}