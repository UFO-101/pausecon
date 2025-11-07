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
    // { name: 'Joseph Miller', title: 'Director', org: 'PauseAI UK', image: '/JosephMiller.jpg' },
    { name: 'Ella Hughes', title: 'Organizing Director', org: 'PauseAI Global', image: '/EllaHughes.jpg' },
    { name: 'Tom Bibby', title: 'Communications Director', org: 'PauseAI Global', image: '/TomBibby.jpg' },
    // { name: 'Patricio Vercesi', title: 'Online Coordinator', org: 'PauseAI Global', image: '/PatricioVercesi.jpg' },
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
              {/* <a href="#speakers" onClick={(e) => scrollToSection(e, 'speakers')} style={{ color: colors.text, textDecoration: 'none' }}>Speakers</a> */}
              <a href="#schedule" onClick={(e) => scrollToSection(e, 'schedule')} style={{ color: colors.text, textDecoration: 'none' }}>Schedule</a>
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
            {/* <a href="#speakers" onClick={(e) => scrollToSection(e, 'speakers')} style={{ color: colors.text, textDecoration: 'none' }}>Speakers</a> */}
            <a href="#schedule" onClick={(e) => scrollToSection(e, 'schedule')} style={{ color: colors.text, textDecoration: 'none' }}>Schedule</a>
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
        <h2 style={{ fontSize: isMobile ? '2rem' : '3rem', fontWeight: '400', marginBottom: '2rem' }}>Brussels 2025</h2>
        
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
        
        <p style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>11-13th December 2025</p>
        
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
              The uncontrolled race for superintelligence continues, posing a significant risk of human extinction. But the political window to act is opening. This December, we are bringing our demand for a global, verifiable moratorium to the place where European law is made: Brussels.
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
      <section id="schedule" style={{ padding: '5rem 2rem', background: 'rgba(15, 15, 15, 0.3)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: isMobile ? '2rem' : '3rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center', color: colors.text }}>
            Our Schedule is Built to Maximise Impact
          </h2>
          <p style={{ fontSize: '1.1rem', textAlign: 'center', marginBottom: '3rem', color: colors.subtext, maxWidth: '800px', margin: '0 auto 3rem' }}>
            Three intensive days of strategy, policymaking, and public action at the heart of European power.
          </p>

          {/* Day 1 */}
          <div style={{ marginBottom: '3rem' }}>
            <div style={{
              backgroundColor: '#1a4d7a',
              padding: '1.5rem',
              borderRadius: '0.75rem 0.75rem 0 0',
              borderBottom: '4px solid ' + colors.primary
            }}>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '0.5rem', color: colors.white }}>
                Day 1 — Thursday 11 December 2025
              </h3>
              <p style={{ fontSize: '1.2rem', margin: 0, color: colors.text, fontStyle: 'italic' }}>
                Foundations & Strategy
              </p>
              <p style={{ fontSize: '1rem', margin: '0.5rem 0 0 0', color: colors.subtext }}>
                09:00 – 18:00
              </p>
            </div>
            <div style={{
              backgroundColor: colors.cardBackground,
              padding: '2rem',
              borderRadius: '0 0 0.75rem 0.75rem'
            }}>
              <p style={{ marginBottom: '2rem', lineHeight: '1.7' }}>
                We begin by coordinating and deepening our strategy. In interactive workshops, we will define our "red lines" for a moratorium, map the EU political landscape (including the crucial French-speaking world), and explore robust global governance frameworks.
              </p>
              <div style={{ display: 'grid', gap: '1rem' }}>
                {[
                  { time: '09:00 – 10:00', title: 'Registration & Welcome coffee', desc: 'Informal networking. Overview of the program. Short intro by Joseph Miller and Didier Coeurnelle.' },
                  { time: '10:00 – 11:00', title: 'Opening plenary: Why Pause?', desc: 'Context of the Pause AI movement, recap of recent developments (Yudkowsky, Bengio, Hinton).' },
                  { time: '11:00 – 12:30', title: 'Workshop 1 – Defining the Red Lines', desc: 'Interactive session on what should be paused, for how long, under which conditions.' },
                  { time: '12:30 – 14:00', title: 'Lunch break', desc: 'Muntpunt café or nearby restaurants.' },
                  { time: '14:00 – 15:30', title: 'Workshop 2A – Mapping Allies & Stakeholders', desc: 'Identify NGOs, MEPs, researchers, and institutions aligned with AI safety.' },
                  { time: '14:00 – 15:30', title: 'Workshop 2B – Specificities of the French speaking world (en français)', desc: 'Led by Maxime Fournes. Traditional French opposition to technology.' },
                  { time: '16:00 – 17:30', title: 'Workshop 3A – AI for Health & Longevity: hopes and risks', desc: 'Led by Didier Coeurnelle. Exploring "good AI" for humanity\'s long-term well-being.' },
                  { time: '16:00 – 17:30', title: 'Workshop 3B – Gaiga Now', desc: 'Led by Robert Withfield. Exploring international governance.' },
                  { time: '18:30 →', title: 'Informal dinner / Socializing', desc: 'Optional dinner nearby (e.g., Halles Saint-Géry).' }
                ].map((item, idx) => (
                  <div key={idx} style={{
                    backgroundColor: colors.cardDark,
                    padding: '1.25rem',
                    borderRadius: '0.5rem',
                    borderLeft: '3px solid ' + colors.primary
                  }}>
                    <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '0.5rem' : '1rem' }}>
                      <div style={{ minWidth: isMobile ? 'auto' : '150px', fontWeight: 'bold', color: colors.primary }}>
                        {item.time}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{item.title}</div>
                        <div style={{ fontSize: '0.95rem', color: colors.subtext }}>{item.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Day 2 */}
          <div style={{ marginBottom: '3rem' }}>
            <div style={{
              backgroundColor: '#2a5c3a',
              padding: '1.5rem',
              borderRadius: '0.75rem 0.75rem 0 0',
              borderBottom: '4px solid ' + colors.primary
            }}>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '0.5rem', color: colors.white }}>
                Day 2 — Friday 12 December 2025
              </h3>
              <p style={{ fontSize: '1.2rem', margin: 0, color: colors.text, fontStyle: 'italic' }}>
                Policymaking & Mobilization
              </p>
              <p style={{ fontSize: '1rem', margin: '0.5rem 0 0 0', color: colors.subtext }}>
                09:00 – 18:00 + evening conference
              </p>
            </div>
            <div style={{
              backgroundColor: colors.cardBackground,
              padding: '2rem',
              borderRadius: '0 0 0.75rem 0.75rem'
            }}>
              <p style={{ marginBottom: '2rem', lineHeight: '1.7' }}>
                We get concrete. This day is dedicated to drafting the AI Moratorium Charter and finalising our Policy Brief for delivery. The day culminates in our public conference at the European Parliament, where we take our case directly to the legislators.
              </p>
              <div style={{ display: 'grid', gap: '1rem' }}>
                {[
                  { time: '09:00 – 09:30', title: 'Morning coffee & recap', desc: 'Recap from Day 1, announcements.' },
                  { time: '09:30 – 11:00', title: 'Workshop 4 – Drafting the AI Moratorium Charta', desc: 'Define key clauses: what exactly to pause, duration, monitoring, oversight.' },
                  { time: '11:00 – 12:30', title: 'Workshop 5 – Preparing policy proposals for MEPs', desc: 'Draft policy brief & resolution proposal to present in Parliament.' },
                  { time: '12:30 – 14:00', title: 'Lunch break', desc: 'For a small group: going contact people in the International Summit of AI.' },
                  { time: '14:00 – 15:30', title: 'Workshop 6A – Communication strategy & media visibility', desc: 'Plan quotes wall, banners, slogans, journalists\' outreach.' },
                  { time: '14:00 – 15:30', title: 'Workshop 6B – Psychology - Sociology', desc: 'Why are leaders and stakeholders not terrorised? Why do "normal" people have more logical reactions?' },
                  { time: '16:00 – 17:30', title: 'Workshop 7 – "If Anyone Builds It, Everyone Dies" actions', desc: 'Decide on reading, book distribution, symbolic acts, QR code materials.' },
                  { time: '17:30 – 18:00', title: 'Summary of the day', desc: 'Define practical tasks for the demonstration.' },
                  { time: '19:30 – 22:00', title: 'Public Conference – European Parliament', desc: 'With MEP Saskia Bricmont (tbc), collaborator of MEP Sergey Lagodinsky, MEP Brando Benifei (tbc), and Stuart Russell (tbc). Topic: "Can the EU Initiate a Global AI Pause?"' }
                ].map((item, idx) => (
                  <div key={idx} style={{
                    backgroundColor: colors.cardDark,
                    padding: '1.25rem',
                    borderRadius: '0.5rem',
                    borderLeft: '3px solid ' + colors.primary
                  }}>
                    <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '0.5rem' : '1rem' }}>
                      <div style={{ minWidth: isMobile ? 'auto' : '150px', fontWeight: 'bold', color: colors.primary }}>
                        {item.time}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{item.title}</div>
                        <div style={{ fontSize: '0.95rem', color: colors.subtext }}>{item.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Day 3 */}
          <div style={{ marginBottom: '3rem' }}>
            <div style={{
              backgroundColor: '#7a2a2a',
              padding: '1.5rem',
              borderRadius: '0.75rem 0.75rem 0 0',
              borderBottom: '4px solid ' + colors.primary
            }}>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '0.5rem', color: colors.white }}>
                Day 3 — Saturday 13 December 2025
              </h3>
              <p style={{ fontSize: '1.2rem', margin: 0, color: colors.text, fontStyle: 'italic' }}>
                Public Action & Visibility
              </p>
              <p style={{ fontSize: '1rem', margin: '0.5rem 0 0 0', color: colors.subtext }}>
                09:00 – 17:30
              </p>
            </div>
            <div style={{
              backgroundColor: colors.cardBackground,
              padding: '2rem',
              borderRadius: '0 0 0.75rem 0.75rem'
            }}>
              <p style={{ marginBottom: '2rem', lineHeight: '1.7' }}>
                We take our message to the public. After final preparations, we will hold our major demonstration at Place du Luxembourg, followed by targeted outreach and a campaign to distribute copies of the book "If Anyone Builds It, Everyone Dies" in the heart of Brussels.
              </p>
              <div style={{ display: 'grid', gap: '1rem' }}>
                {[
                  { time: '09:00 – 10:30', title: 'Final preparation for the demonstration', desc: 'Logistics, banners, coordination, legal checks, group division.' },
                  { time: '10:30 – 11:00', title: 'Transport & setup', desc: 'Move to Place du Luxembourg.' },
                  { time: '11:00 – 13:00', title: 'Demonstration at Place du Luxembourg ("Place Lux")', desc: 'Symbolic event in front of the European Parliament. Slogans, quote wall, banner signing, possible media presence.' },
                  { time: '13:00 – 14:00', title: 'Lunch nearby (Ixelles / EU Quarter)', desc: '' },
                  { time: '14:00 – 15:30', title: 'Book distribution campaign', desc: 'Distribute If Anyone Builds It, Everyone Dies copies in key Brussels areas (Grand-Place, Bourse, Gare Centrale etc.).' },
                  { time: '15:30 – 16:00', title: 'Coffee break', desc: '' },
                  { time: '16:00 – 17:30', title: 'Debriefing & next steps (Muntpunt Library)', desc: 'Evaluation, next meetings, continuation of working groups.' },
                  { time: '18:00', title: 'Informal farewell gathering', desc: 'Optional drinks or dinner to close PauseCon2.' }
                ].map((item, idx) => (
                  <div key={idx} style={{
                    backgroundColor: colors.cardDark,
                    padding: '1.25rem',
                    borderRadius: '0.5rem',
                    borderLeft: '3px solid ' + colors.primary
                  }}>
                    <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '0.5rem' : '1rem' }}>
                      <div style={{ minWidth: isMobile ? 'auto' : '150px', fontWeight: 'bold', color: colors.primary }}>
                        {item.time}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{item.title}</div>
                        {item.desc && <div style={{ fontSize: '0.95rem', color: colors.subtext }}>{item.desc}</div>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{
            backgroundColor: colors.cardBackground,
            padding: '2rem',
            borderRadius: '0.75rem',
            textAlign: 'center',
            border: '2px solid ' + colors.primary
          }}>
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Venue: Muntpunt Library, Pl. de la Monnaie 6, 1000 Brussels
            </p>
            <p style={{ fontSize: '1.1rem', color: colors.subtext, marginBottom: '1rem' }}>
              Accommodation: Centerstay Brussels, Rue des Fripiers 17
            </p>
            <p style={{ fontSize: '1.1rem', color: colors.subtext }}>
              Demonstration: Place du Luxembourg
            </p>
          </div>
        </div>
      </section>

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
          gridTemplateColumns: 
            window.innerWidth > 1200 ? 'repeat(2, 1fr)' : 
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