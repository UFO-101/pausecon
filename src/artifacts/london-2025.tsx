import { useState, useEffect, useRef } from 'react';

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

const speakers = [
  { name: 'Connor Leahy', title: 'CEO', org: 'Conjecture', image: '/ConnorLeahy.jpg' },
  { name: 'Joep Meindertsma', title: 'Founder', org: 'PauseAI', image: '/JoepMeindertsma.jpg' },
  { name: 'Robert Miles', title: 'YouTuber & AI Safety Communicator', org: '', image: '/RobertMiles.jpg' },
  { name: 'Kat Woods', title: 'Founder', org: 'Nonlinear & Charity Entrepreneurship', image: '/KatWoods.jpg' },
  { name: 'David Krueger', title: 'Assistant Professor', org: 'University of Montreal', image: '/DavidKrueger.jpg' },
  { name: 'Tara Steele', title: 'Director', org: 'Safe AI for Children Alliance', image: '/TaraSteele.jpg' },
  { name: 'Rufo Guerreschi', title: 'Director', org: 'Coalition for a Baruch Plan for AI', image: '/RufoGuerreschi.jpg' },
  { name: 'Max Winga', title: 'Creator Outreach', org: 'ControlAI', image: '/MaxWinga.jpg' },
];

const hosts = [
  { name: 'Joseph Miller', title: 'Director', org: 'PauseAI UK', image: '/JosephMiller.jpg' },
  { name: 'Ella Hughes', title: 'Organizer', org: 'PauseAI UK', image: '/EllaHughes.jpg' },
  { name: 'Tom Bibby', title: 'Organizer', org: 'PauseAI UK', image: '/TomBibby.jpg' },
];

const galleryPhotos = [
  '/london-2025-photos/DSC01736.jpg',
  '/london-2025-photos/DSC01851.jpg',
  '/london-2025-photos/DSC01877.jpg',
  '/london-2025-photos/DSC01893.jpg',
  '/london-2025-photos/DSC01941.jpg',
  '/london-2025-photos/DSC01943 (2).jpg',
  '/london-2025-photos/LondonProtest2025.jpg',
];

export default function PauseConLondon2025() {
  const [isMobile, setIsMobile] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
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
  }, []);

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
          <a
            href="/"
            style={{
              color: colors.subtext,
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: '500',
              letterSpacing: '0.01em'
            }}
            onMouseOver={(e) => { e.currentTarget.style.color = colors.white; }}
            onMouseOut={(e) => { e.currentTarget.style.color = colors.subtext; }}
          >
            ← Back to PauseCon
          </a>
        </div>
      </nav>

      <div style={{ height: navHeight }} />

      {/* Hero */}
      <section style={{
        paddingTop: isMobile ? '5rem' : '7rem',
        paddingBottom: isMobile ? '3rem' : '4rem',
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
          fontSize: isMobile ? '3rem' : '5rem',
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
          London 2025
        </h2>
        <p style={{
          fontSize: isMobile ? '1.05rem' : '1.2rem',
          fontWeight: '500',
          marginBottom: '0.5rem',
          color: colors.text,
          letterSpacing: '0.02em'
        }}>
          28–29 June 2025
        </p>
        <p style={{
          fontSize: isMobile ? '0.95rem' : '1.05rem',
          color: colors.subtext,
          letterSpacing: '0.02em'
        }}>
          Shoreditch, London
        </p>
      </section>

      {/* About */}
      <section style={{ padding: isMobile ? '2rem 1.5rem' : '3rem 2rem' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{
            backgroundColor: colors.cardBackground,
            padding: isMobile ? '1.5rem' : '2rem',
            borderRadius: '0.75rem',
            border: `1px solid ${colors.cardBorder}`
          }}>
            <p style={{ marginBottom: '1.25rem', lineHeight: '1.75', fontSize: '1rem', color: colors.subtext }}>
              The first PauseCon was a development and training conference for PauseAI volunteers held in Shoreditch, London. Across two days, attendees learned about <strong style={{ color: colors.text }}>community building, social media strategy and digital organizing</strong>.
            </p>
            <p style={{ lineHeight: '1.75', fontSize: '1rem', color: colors.subtext, marginBottom: 0 }}>
              The event culminated in our largest public protest to date — calling on world leaders to act on existential AI risk.
            </p>
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section style={{ padding: isMobile ? '3rem 1.5rem' : '4rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: isMobile ? '1.75rem' : '2.25rem',
            fontWeight: '600',
            marginBottom: '2.5rem',
            textAlign: 'center',
            letterSpacing: '-0.02em'
          }}>
            Speakers
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: isMobile ? '1rem' : '1.5rem'
          }}>
            {speakers.map((person) => (
              <div key={person.name} style={{
                backgroundColor: colors.cardBackground,
                padding: '1.25rem',
                borderRadius: '0.75rem',
                border: `1px solid ${colors.cardBorder}`,
                textAlign: 'center'
              }}>
                <img
                  src={person.image}
                  alt={person.name}
                  style={{
                    width: isMobile ? '90px' : '110px',
                    height: isMobile ? '90px' : '110px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginBottom: '0.75rem'
                  }}
                />
                <h3 style={{ fontSize: isMobile ? '0.95rem' : '1.05rem', fontWeight: '600', marginBottom: '0.25rem' }}>
                  {person.name}
                </h3>
                <p style={{ fontSize: '0.8rem', color: colors.subtext, lineHeight: '1.4', marginBottom: 0 }}>
                  {person.title}{person.org ? `, ${person.org}` : ''}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hosts */}
      <section style={{ padding: isMobile ? '3rem 1.5rem' : '4rem 2rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: isMobile ? '1.5rem' : '2rem',
            fontWeight: '600',
            marginBottom: '2rem',
            textAlign: 'center',
            letterSpacing: '-0.02em'
          }}>
            Hosts
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '1.5rem'
          }}>
            {hosts.map((person) => (
              <div key={person.name} style={{
                backgroundColor: colors.cardBackground,
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: `1px solid ${colors.cardBorder}`,
                textAlign: 'center'
              }}>
                <img
                  src={person.image}
                  alt={person.name}
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginBottom: '0.75rem'
                  }}
                />
                <h3 style={{ fontSize: '1.05rem', fontWeight: '600', marginBottom: '0.25rem' }}>
                  {person.name}
                </h3>
                <p style={{ fontSize: '0.85rem', color: colors.subtext, lineHeight: '1.4', marginBottom: 0 }}>
                  {person.title}, {person.org}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section style={{ padding: isMobile ? '3rem 1.5rem' : '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: isMobile ? '1.75rem' : '2.25rem',
            fontWeight: '600',
            marginBottom: '2.5rem',
            textAlign: 'center',
            letterSpacing: '-0.02em'
          }}>
            Photos
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(3, 1fr)',
            gap: '1rem'
          }}>
            {galleryPhotos.map((src) => (
              <div
                key={src}
                onClick={() => setSelectedPhoto(src)}
                style={{
                  cursor: 'pointer',
                  borderRadius: '0.5rem',
                  overflow: 'hidden',
                  aspectRatio: '4 / 3',
                  border: `1px solid ${colors.cardBorder}`
                }}
              >
                <img
                  src={src}
                  alt="PauseCon London 2025"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.92)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            cursor: 'zoom-out'
          }}
        >
          <img
            src={selectedPhoto}
            alt="Selected"
            style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '0.5rem' }}
          />
        </div>
      )}

      {/* Footer */}
      <footer style={{
        padding: isMobile ? '2.5rem 1.5rem' : '3rem 2rem',
        borderTop: `1px solid ${colors.cardBorder}`,
        textAlign: 'center',
        color: colors.subtext,
        fontSize: '0.9rem'
      }}>
        <p style={{ marginBottom: '0.5rem' }}>
          <a href="/" style={{ color: colors.primary, textDecoration: 'none' }}>← Back to PauseCon</a>
        </p>
        <p>© {currentYear} PauseAI</p>
      </footer>
    </div>
  );
}
