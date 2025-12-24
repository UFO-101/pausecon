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
              {/* <a href="#schedule" onClick={(e) => scrollToSection(e, 'schedule')} style={{ color: colors.text, textDecoration: 'none' }}>Schedule</a> */}
              <a href="#photos" onClick={(e) => scrollToSection(e, 'photos')} style={{ color: colors.text, textDecoration: 'none' }}>Photos</a>
              <a href="#team" onClick={(e) => scrollToSection(e, 'team')} style={{ color: colors.text, textDecoration: 'none' }}>Team</a>
              <a 
                href="https://lu.ma/wtuyu7zy" 
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
            {/* <a href="#schedule" onClick={(e) => scrollToSection(e, 'schedule')} style={{ color: colors.text, textDecoration: 'none' }}>Schedule</a> */}
            <a href="#photos" onClick={(e) => scrollToSection(e, 'photos')} style={{ color: colors.text, textDecoration: 'none' }}>Photos</a>
            <a href="#team" onClick={(e) => scrollToSection(e, 'team')} style={{ color: colors.text, textDecoration: 'none' }}>Team</a>
            <a 
              href="https://lu.ma/wtuyu7zy" 
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

      {/* Hero Section */}
      <section id="home" style={{ paddingTop: '10rem', paddingBottom: '5rem', textAlign: 'center', padding: '10rem 1rem 5rem', background: 'rgba(0, 0, 0, 0.2)' }}>
        <h1 style={{ fontSize: isMobile ? '3rem' : '6rem', fontWeight: '600', marginBottom: '0rem' }}>PauseCon</h1>
        <h2 style={{ fontSize: isMobile ? '2rem' : '3rem', fontWeight: '400', marginBottom: '2rem' }}>Brussels 2026</h2>
        
        {/* <div style={{ 
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
        </div> */}
        
        <p style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>21-23rd February 2026</p>
        
        <a 
          href="https://lu.ma/wtuyu7zy" 
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
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: isMobile ? '2.5rem' : '3.5rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>
            From Risk to Responsibility: Join the Strategic Summit for a Global AI Pause
          </h2>
          <h3 style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: '600', marginBottom: '3rem', textAlign: 'center', color: colors.primary }}>
            A 3-Day Summit to Build Strategy and Drive Political Action at the Heart of the EU
          </h3>

          <div style={{
            backgroundColor: colors.cardBackground,
            padding: '2rem',
            borderRadius: '1rem',
            marginBottom: '2rem',
            borderLeft: '4px solid ' + colors.primary
          }}>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', fontSize: '1.1rem' }}>
              The uncontrolled race for superintelligence continues, posing a significant risk of human extinction. But the political window to act is opening. This February, we are bringing our demand for a global, verifiable moratorium to the place where European law is made: Brussels.
            </p>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', fontSize: '1.1rem' }}>
              PauseCon 2 is <strong>not a typical conference</strong>. It is a <strong>high-impact, 3-day strategic summit</strong> designed to move the needle and position the European Union as a global initiator for an AI Pause.
            </p>
            <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
              This event is not just about training, it's about <strong>real-world impact</strong>. If you are ready to move beyond discussion and contribute to tangible political change, this is your event.
            </p>
          </div>

          <h3 style={{ fontSize: isMobile ? '1.75rem' : '2.25rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center' }}>
            What to Expect at PauseCon Brussels:
          </h3>

          <div style={{
            display: 'grid',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}>
            <div style={{
              backgroundColor: colors.cardBackground,
              padding: '1.75rem',
              borderRadius: '0.75rem',
              borderLeft: '4px solid ' + colors.primary
            }}>
              <h4 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '1rem', color: colors.primary }}>
                Exclusive Access & Direct Lobbying
              </h4>
              <p style={{ lineHeight: '1.7' }}>
                The summit's centerpiece is a <strong>public conference held inside the European Parliament</strong>. This is a unique platform to present our policy proposals and engage directly with EU policymakers, their staff, and the Brussels political community.
              </p>
            </div>

            <div style={{
              backgroundColor: colors.cardBackground,
              padding: '1.75rem',
              borderRadius: '0.75rem',
              borderLeft: '4px solid ' + colors.primary
            }}>
              <h4 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '1rem', color: colors.primary }}>
                Strategic "Roll-Up-Your-Sleeves" Workshops
              </h4>
              <p style={{ lineHeight: '1.7' }}>
                This is a participatory event. You won't just be briefed; you will <strong>co-create the strategy</strong>. We will draft the AI Moratorium Charter, finalise the policy documents for MEPs, and plan our public actions.
              </p>
            </div>

            <div style={{
              backgroundColor: colors.cardBackground,
              padding: '1.75rem',
              borderRadius: '0.75rem',
              borderLeft: '4px solid ' + colors.primary
            }}>
              <h4 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '1rem', color: colors.primary }}>
                High-Visibility Public Action
              </h4>
              <p style={{ lineHeight: '1.7' }}>
                We will hold a <strong>major, coordinated demonstration at the Place du Luxembourg</strong>, directly in front of the Parliament. Our goal is to gain maximum media and political attention, demonstrating the strong public demand for the prevention of uncontrollable AI.
              </p>
            </div>

            <div style={{
              backgroundColor: colors.cardBackground,
              padding: '1.75rem',
              borderRadius: '0.75rem',
              borderLeft: '4px solid ' + colors.primary
            }}>
              <h4 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '1rem', color: colors.primary }}>
                Community & Networking
              </h4>
              <p style={{ lineHeight: '1.7' }}>
                Connect with the dedicated experts, activists, and organisers who form the core of the PauseAI movement. Forge the alliances we need for the long-term international campaign.
              </p>
            </div>
          </div>

          <div style={{
            backgroundColor: colors.cardBackground,
            padding: '2rem',
            marginBottom: '2rem',
            borderRadius: '0.75rem',
            textAlign: 'center',
            border: '2px solid ' + colors.primary
          }}>
            <p style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1rem', color: colors.text }}>
              We know that your commitment and time are valuable.
            </p>
            <p style={{ fontSize: '1.2rem', margin: 0, color: colors.text }}>
              Participation in PauseCon Brussels is <strong style={{ color: colors.primary }}>free of charge</strong>. We provide <strong style={{ color: colors.primary }}>accommodation at Centerstay Brussels</strong> (in close proximity to the venue) and cover part of the catering costs during the event.
            </p>
          </div>

          <div style={{
            backgroundColor: colors.cardBackground,
            padding: '2rem',
            borderRadius: '1rem',
            borderLeft: '4px solid ' + colors.primary
          }}>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.7', textAlign: 'center', fontStyle: 'italic' }}>
              We are removing the barriers so that we can focus on what matters most: achieving maximum impact.
            </p>
          </div>
        </div>
      </section>

      {/* Speakers Section - Brussels 2026 */}
      <section id="speakers" style={{ padding: '5rem 2rem', background: 'rgba(0, 0, 0, 0.4)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: isMobile ? '2rem' : '3rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center', color: colors.text }}>
            Speakers
          </h2>
          <p style={{ fontSize: '1.1rem', textAlign: 'center', marginBottom: '1.5rem', color: colors.subtext }}>
            Join us in Brussels to hear from leading voices on AI safety and policy.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: '2rem',
            justifyItems: 'center'
          }}>
            {speakers.map((speaker, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: colors.cardBackground,
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  border: '2px solid ' + colors.cardBorder,
                  maxWidth: '350px',
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
                <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: colors.text }}>
                    {speaker.name}
                  </h3>
                  <p style={{ fontSize: '1rem', color: colors.subtext, marginBottom: '0.25rem' }}>
                    {speaker.title}
                  </p>
                  <p style={{ fontSize: '0.9rem', color: colors.primary, fontWeight: '500', marginBottom: '0.75rem' }}>
                    {speaker.org}
                  </p>
                  <p style={{ fontSize: '0.9rem', color: colors.subtext, lineHeight: '1.5', fontStyle: 'italic' }}>
                    {speaker.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photos Section - London 2025 */}
      <section id="photos" style={{ padding: '5rem 2rem', background: 'rgba(0, 0, 0, 0.4)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: isMobile ? '2rem' : '3rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center', color: colors.text }}>
            PauseCon London 2025
          </h2>
          <p style={{ fontSize: '1.1rem', textAlign: 'center', marginBottom: '3rem', color: colors.subtext, maxWidth: '800px', margin: '0 auto 3rem' }}>
            Highlights from our inaugural conference in London, where activists and experts came together to advance the mission of pausing dangerous AI development.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
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
                  backgroundColor: colors.cardBackground,
                  borderRadius: '0.75rem',
                  overflow: 'hidden',
                  border: '2px solid ' + colors.cardBorder,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.3)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
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
      <section style={{ padding: '5rem 2rem', textAlign: 'center', background: 'rgba(0, 0, 0, 0.2)' }}>
        <h2 style={{ fontSize: isMobile ? '2rem' : '3rem', fontWeight: 'bold', marginBottom: '2rem', color: colors.text }}>Join Us in Brussels</h2>
        <p style={{ fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem', color: colors.text }}>
          Be part of the movement to ensure AI development is safe. 
        </p>
        <a 
          href="https://lu.ma/wtuyu7zy" 
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          maxWidth: '1400px',
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