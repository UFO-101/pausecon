import React, { useState, useEffect, useRef } from 'react';

const colors = {
  primary: 'rgb(255 152 30)', // Warm orange accent
  accent: '#3E6990', // Blue gradient color
  background: '#000000', // Pure black
  navBackground: 'rgba(0, 0, 0, 0.8)', // Semi-transparent for blur
  text: '#F5F5F5', // Softer white text
  subtext: '#D1D5DB', // Higher contrast gray for body text
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
    { name: 'Moritz Pohl', title: 'Volunteer', org: 'PauseAI', image: '/MoritzPohl.jpg' },
    { name: 'Joseph Miller', title: 'Director', org: 'PauseAI UK', image: '/JosephMiller.jpg' },
    { name: 'Didier Coeurnelle', title: 'Co-organiser', org: 'PauseCon', image: '/DidierCoeurnelle.jpg' },
    { name: 'Irina Tavera', title: 'Organising Director', org: 'PauseAI Global', image: '/IrinaTavera.jpg' },
    { name: 'Matilda da Rui', title: 'Deputy Director', org: 'PauseAI UK', image: '/MatildaDaRui.jpeg' },
  ];

  const speakers = [
    { name: 'Ondřej Kolář', title: 'Member of European Parliament', org: 'European Parliament', image: '/OndrejKolar.jpg', party: 'EPP', bio: 'AFET, DROI.', role: 'Co-host' },
    { name: 'Stuart Russell', title: 'Professor of Computer Science', org: 'UC Berkeley', image: '/StuartRussell.jpeg', party: '', bio: 'Author of the standard AI textbook used in over 1,500 universities worldwide.', role: '' },
    { name: 'Brando Benifei', title: 'Member of European Parliament', org: 'European Parliament', image: '/BrandoBenifei.jpg', party: 'S&D', bio: 'Lead architect of the EU AI Act.', role: '' },
    { name: 'Saskia Bricmont', title: 'Member of European Parliament', org: 'European Parliament', image: '/SaskiaBricmont.jpg', party: 'Greens/EFA', bio: 'PEGA Committee.', role: '' },
    { name: 'Victor Negrescu', title: 'Vice-President', org: 'European Parliament', image: '/VictorNegrescu.jpg', party: 'S&D', bio: 'BURO, BUDG, SANT, JURI.', role: '' },
    { name: 'Risto Uuk', title: 'Head of European Policy and Research', org: 'Future of Life Institute', image: '/RistoUuk.jpg', party: '', bio: '', role: '' },
    { name: 'Rudi Kennes', title: 'Member of European Parliament', org: 'European Parliament', image: '/RudiKennes.jpg', party: 'The Left', bio: 'ITRE, INTA.', role: '' },
    { name: 'Loránt Vincze', title: 'Member of European Parliament', org: 'European Parliament', image: '/LorantVincze.jpg', party: 'EPP', bio: 'AFCO.', role: '' },
    { name: 'Tomislav Sokol', title: 'Member of European Parliament', org: 'European Parliament', image: '/TomislavSokol.jpg', party: 'EPP', bio: 'SANT, IMCO.', role: '' },
    { name: 'André Rodrigues', title: 'Member of European Parliament', org: 'European Parliament', image: '/AndreRodrigues.jpg', party: 'S&D', bio: 'AGRI, PECH.', role: '' },
  ];

  const facilitators = [
    { name: 'John Sherman', image: '/JohnSherman.jpeg', talk: 'Big Tent Public Engagement', bio: 'Peabody Award–winning journalist, filmmaker, and entrepreneur. CEO of Storyfarm, President of the AI Risk Network, and host of the For Humanity podcast.' },
    { name: 'Liron Shapira', image: '/LironShapira.jpg', talk: 'AI Activism Funnel', bio: 'Rationalist, entrepreneur, and host of Doom Debates – a show encouraging top experts to answer why we\'re all about to die or not.' },
    { name: 'David Wood', image: '/DavidWood.jpg', talk: 'Overcoming the AI Motivation Paradox', bio: 'Chair of London Futurists and author of 12 books about the future. Co-founded Symbian, whose OS powered the first 500 million smartphones.' },
    { name: 'Robert Whitfield', image: '/RobertWhitfield.jpg', talk: 'GAIGANow and AI Global Governance', bio: 'Campaigner for AI Global Governance for the past 7 years and convener of GAIGANow, the Global AI Governance Alliance.' },
    { name: 'Maxime Fournes', image: '/MaximeFournes.jpg', talk: 'Why Pause?', bio: 'Former Deep Learning & ML expert with 10+ years of experience. Now leading Pause, dedicated to promoting responsible AI development and raising awareness about catastrophic risks.' },
    { name: 'Axiom', image: '/Axiom.jpg', talk: 'Coercion over Cooperation: Forcing Governments to Answer on AI Risk Using the ECHR', bio: 'Former stand-up comedian from Scotland who spent the last 6 months working on a legal procedure to force the UK government to take a public stance on AI existential risk.' },
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a href="https://pauseai.info" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/PauseAI-icon.svg" alt="PauseAI" style={{ width: '32px', height: '32px' }} />
            </a>
            <a href="/" style={{ textDecoration: 'none', color: colors.text }}>
              <span style={{ fontSize: '1.5rem', fontWeight: '600' }}>PauseCon</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          {!isMobile && (
            <div style={{
              display: 'flex',
              gap: '2.5rem',
              alignItems: 'center'
            }}>
              {['About', 'Speakers', 'Facilitators', 'Programme', 'Photos', 'Protest', 'Team'].map((item) => (
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
                href="/PauseConProgramme.pdf"
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
                View Programme
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
            {['About', 'Speakers', 'Facilitators', 'Programme', 'Photos', 'Protest', 'Team'].map((item) => (
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
              href="/PauseConProgramme.pdf"
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
              View Programme
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
        <div style={{
          display: 'inline-block',
          padding: '0.35rem 0.9rem',
          marginBottom: '1.5rem',
          borderRadius: '999px',
          border: `1px solid ${colors.cardBorder}`,
          backgroundColor: 'rgba(255, 255, 255, 0.04)',
          fontSize: '0.75rem',
          fontWeight: '600',
          letterSpacing: '0.1em',
          color: colors.subtext,
          textTransform: 'uppercase'
        }}>
          Past Event
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
          href="/PauseConProgramme.pdf"
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
          View Programme
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
              This event is about training, but also about <strong style={{ color: colors.text }}>real-world impact</strong>. If you are ready to move beyond discussion and contribute to tangible political change, this is your event.
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
              { title: 'Exclusive Access & Direct Lobbying', desc: 'The summit\'s centrepiece is a public conference held inside the European Parliament. This is a unique platform to present our policy proposals and engage directly with EU policymakers, their staff, and the Brussels political community.' },
              { title: 'Strategic Workshops', desc: 'This is a participatory event. You will be briefed, but also co-create the strategy. We will draft the AI Moratorium Charter, finalise the policy documents for MEPs, and plan our public actions.' },
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
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(190px, 1fr))',
            gap: '1.5rem',
          }}>
            {speakers.map((speaker, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: colors.cardBackground,
                  borderRadius: '0.75rem',
                  overflow: 'hidden',
                  border: `1px solid ${colors.cardBorder}`,
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
                <div style={{ padding: '1rem', textAlign: 'center' }}>
                  {speaker.role && (
                    <div style={{
                      background: `linear-gradient(to right, ${colors.primary}, transparent)`,
                      margin: '-1rem -1rem 0.75rem -1rem',
                      padding: '0.35rem 0.75rem',
                    }}>
                      <span style={{
                        fontSize: '0.7rem',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: colors.background,
                      }}>
                      {speaker.role}</span>
                    </div>
                  )}
                  <h3 style={{ fontSize: '1.05rem', fontWeight: '600', marginBottom: '0.25rem', color: colors.text }}>
                    {speaker.name}
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: colors.subtext, marginBottom: '0.125rem' }}>
                    {speaker.title}
                  </p>
                  <p style={{ fontSize: '0.8rem', color: colors.primary, fontWeight: '500', marginBottom: speaker.party ? '0.5rem' : (speaker.bio ? '0.5rem' : 0) }}>
                    {speaker.org}
                  </p>
                  {speaker.party && (
                    <span style={{
                      display: 'inline-block',
                      fontSize: '0.7rem',
                      fontWeight: '600',
                      color: colors.text,
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: `1px solid rgba(255, 255, 255, 0.15)`,
                      borderRadius: '999px',
                      padding: '0.15rem 0.6rem',
                      marginBottom: speaker.bio ? '0.5rem' : 0,
                      letterSpacing: '0.03em'
                    }}>
                      {speaker.party}
                    </span>
                  )}
                  {speaker.bio && (
                    <p style={{ fontSize: '0.75rem', color: colors.subtext, lineHeight: '1.5', fontStyle: 'italic', marginBottom: 0 }}>
                      {speaker.bio}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session Facilitators */}
      <section id="facilitators" style={{ padding: isMobile ? '3rem 1.5rem' : '4rem 2rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: isMobile ? '1.75rem' : '2.25rem',
            fontWeight: '600',
            marginBottom: '0.75rem',
            textAlign: 'center',
            color: colors.text,
            letterSpacing: '-0.02em'
          }}>
            Session Facilitators
          </h2>
          <p style={{ fontSize: '1rem', textAlign: 'center', marginBottom: '3rem', color: colors.subtext }}>
            Leading discussions and workshops at PauseCon Brussels.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '1.5rem',
          }}>
            {facilitators.map((facilitator, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: colors.cardBackground,
                  borderRadius: '0.75rem',
                  overflow: 'hidden',
                  border: `1px solid ${colors.cardBorder}`,
                  width: '100%'
                }}
              >
                <div style={{
                  width: '100%',
                  aspectRatio: '4 / 5',
                  overflow: 'hidden'
                }}>
                  <img
                    src={facilitator.image}
                    alt={facilitator.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top'
                    }}
                  />
                </div>
                <div style={{ padding: '1rem', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: '600', marginBottom: '0.25rem', color: colors.text }}>
                    {facilitator.name}
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: colors.primary, fontWeight: '500', marginBottom: '0.5rem' }}>
                    {facilitator.talk}
                  </p>
                  <p style={{ fontSize: '0.75rem', color: colors.subtext, lineHeight: '1.5', marginBottom: 0 }}>
                    {facilitator.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme Section */}
      <section id="programme" style={{ padding: isMobile ? '3rem 1.5rem' : '4rem 2rem' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: isMobile ? '1.75rem' : '2.25rem',
            fontWeight: '600',
            marginBottom: '0.75rem',
            color: colors.text,
            letterSpacing: '-0.02em'
          }}>
            Programme
          </h2>
          <p style={{ fontSize: '1rem', marginBottom: '2rem', color: colors.subtext }}>
            View the full schedule for PauseCon Brussels 2026.
          </p>
          <a
            href="/PauseConProgramme.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '0.75rem 2rem',
              backgroundColor: colors.primary,
              color: colors.background,
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1rem'
            }}
          >
            Download Programme (PDF)
          </a>
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
            Three intensive days of strategy, policymaking, and civic action at the heart of European power.
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
          The Next PauseCon
        </h2>
        <p style={{
          fontSize: '1rem',
          marginBottom: '2rem',
          maxWidth: '520px',
          margin: '0 auto 2rem',
          color: colors.subtext,
          lineHeight: '1.6'
        }}>
          PauseCon returns in London in September 2026. Date, venue and programme to be announced.
        </p>
        <a
          href="/"
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
          See London 2026 →
        </a>
      </section>

      {/* Protest Section */}
      <section id="protest" style={{ padding: isMobile ? '3rem 1.5rem' : '4rem 2rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: isMobile ? '1.75rem' : '2.25rem',
            fontWeight: '600',
            marginBottom: '2rem',
            textAlign: 'center',
            color: colors.text,
            letterSpacing: '-0.02em'
          }}>
            Protest at the European Parliament
          </h2>
          <div style={{
            borderRadius: '0.75rem',
            overflow: 'hidden',
            marginBottom: '2rem',
            border: `1px solid ${colors.cardBorder}`
          }}>
            <img
              src="/london-2025-photos/LondonProtest2025.jpg"
              alt="PauseAI Protest"
              style={{
                width: '100%',
                height: isMobile ? '250px' : '400px',
                objectFit: 'cover'
              }}
            />
          </div>
          <p style={{ fontSize: '1rem', lineHeight: '1.75', color: colors.subtext, marginBottom: '1.5rem', textAlign: 'center', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
            On the final day of the conference, we will demonstrate outside the European Parliament to call for the EU to initiate negotiations for a global treaty to pause AI development.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            <div>
              <p style={{ fontSize: '1.1rem', fontWeight: '600', color: colors.text, marginBottom: '0.15rem' }}>Monday, February 23</p>
              <p style={{ fontSize: '0.95rem', color: colors.primary, fontWeight: '500' }}>3:30 PM – 4:30 PM</p>
            </div>
            <p style={{ fontSize: '0.95rem', color: colors.subtext }}>Place du Luxembourg, Brussels</p>
          </div>
        </div>
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1.5rem',
          maxWidth: '1100px',
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
