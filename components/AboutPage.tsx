'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ShieldCheck,
  Globe2,
  Clock3,
  Compass,
  Plane,
  Anchor,
  Sparkles,
  ArrowRight,
  Quote,
  Check,
  X,
  Award,
  Users,
  Gem,
} from 'lucide-react';
import { Header, Footer, ButtonLink } from '@/app/site';

const portfolioItems = [
  {
    title: 'Private Jets',
    tag: 'Aviation',
    desc: 'Light to ultra-long-range business jets available on your schedule.',
    image: '/images/jet-hq.jpg',
    href: '/services#private-jets',
  },
  {
    title: 'Helicopters',
    tag: 'Transfers',
    desc: 'Direct tarmac transfers, mountain landings & city hops.',
    image: '/images/helicopter-hq.jpg',
    href: '/services#helicopters',
  },
  {
    title: 'Superyachts',
    tag: 'Maritime',
    desc: 'Curated motor and sailing yachts in premier Mediterranean & Caribbean waters.',
    image: '/images/high-2.jpg',
    href: '/services#yachts',
  },
  {
    title: 'Private Islands',
    tag: 'Havens',
    desc: 'Secluded island sanctuaries with dedicated staff and complete seclusion.',
    image: '/images/bora-bora-hq.jpg',
    href: '/services#private-islands',
  },
  {
    title: 'Luxury Villas',
    tag: 'Estates',
    desc: 'Cliffside estates and historic villas with private chefs and security.',
    image: '/images/villa.webp',
    href: '/destinations',
  },
  {
    title: 'Bespoke Journeys',
    tag: 'Concierge',
    desc: 'Seamless multi-leg journeys composed entirely around your rhythm.',
    image: '/images/conversation.webp',
    href: '/contact',
  },
];

const processSteps = [
  {
    num: '01',
    title: 'Consultation',
    desc: 'Share your schedule, passengers, and onboard preferences with your specialist.',
  },
  {
    num: '02',
    title: 'Fleet Selection',
    desc: 'Curated portfolio of vetted aircraft and yachts selected for your flight path.',
  },
  {
    num: '03',
    title: 'Tailored Proposal',
    desc: 'Transparent guaranteed pricing, flight timing, and bespoke itinerary options.',
  },
  {
    num: '04',
    title: 'Ramp Coordination',
    desc: 'VIP tarmac access permits, expedited customs, and custom culinary prep.',
  },
  {
    num: '05',
    title: 'In-Flight Luxury',
    desc: 'Personalized cabin temperature, curated menus, and seamless airborne privacy.',
  },
  {
    num: '06',
    title: 'Arrival & Beyond',
    desc: 'Chauffeur waiting on the ramp to transfer you directly to yacht or villa.',
  },
];

export function AboutPage() {
  const router = useRouter();
  const [routeFrom, setRouteFrom] = useState('');
  const [routeTo, setRouteTo] = useState('');
  const [routeDate, setRouteDate] = useState('');
  const [passengers, setPassengers] = useState('1-4');

  const handleRouteSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = new URLSearchParams({
      from: routeFrom,
      to: routeTo,
      date: routeDate,
      passengers,
    }).toString();
    router.push(`/contact?${query}`);
  };

  return (
    <div className="about-shell">
      {/* 1. Hero Section */}
      <section
        className="hero hero-about-full"
        style={
          {
            '--hero-image': `url('/images/high-4.jpg')`,
          } as React.CSSProperties
        }
      >
        <Header />
        <div className="hero-content">
          <p className="eyebrow">About Veirakas</p>
          <h1>PRIVATE TRAVEL,&#10;BUILT AROUND YOU.</h1>
          <p className="hero-description">
            A global concierge network making exceptional travel feel effortless, personal and discreet.
          </p>
          <div className="actions">
            <ButtonLink href="/contact">Request a private quote</ButtonLink>
            <ButtonLink outline href="/destinations">
              Explore destinations
            </ButtonLink>
          </div>
        </div>
      </section>

      <main>
        {/* 2. Philosophy Split Section */}
        <section className="wrap section about-intro-split">
          <div className="about-intro-text">
            <p className="eyebrow">Our Philosophy</p>
            <h2>We bring private travel to where you stand.</h2>
            <div className="gold-line" />
            <p className="intro-lead">
              Veirakas was established to bring true refinement, absolute discretion, and boundless freedom back to private travel.
            </p>
            <p>
              Whether coordinating an ultra-long-range jet for an international summit, a superyacht across the Mediterranean, or a sequestered private island, every single journey is orchestrated around you.
            </p>
            <p>
              With dedicated concierge specialists available 24/7 across multiple time zones, you never speak to an algorithm—only to seasoned professionals who understand your standards.
            </p>
            <div className="intro-action">
              <Link href="/services" className="gold-arrow-link">
                Explore our fleet & services <ArrowRight size={15} />
              </Link>
            </div>
          </div>
          <div className="about-intro-media">
            <img
              src="/images/villa.webp"
              alt="Luxury coastal villa with infinity pool and private yacht"
              className="about-intro-img"
              loading="lazy"
            />
          </div>
        </section>

        {/* 3. Global Concierge Network (Dark Navy Full-Width with Map) */}
        <section className="about-dark-section">
          <div className="wrap about-global-grid">
            <div className="about-global-info">
              <p className="eyebrow text-gold">Global Concierge Network</p>
              <h2>Global reach,&#10;personal access.</h2>
              <p className="about-global-sub">
                Seamless access across 6 continents, connecting the world&apos;s most exclusive destinations with discreet precision and private ramp clearance.
              </p>
              <div className="about-metrics-grid">
                <div className="metric-box">
                  <span className="metric-val">150+</span>
                  <span className="metric-name">Global Destinations</span>
                  <p className="metric-detail">Across 6 continents with private VIP ramp access</p>
                </div>
                <div className="metric-box">
                  <span className="metric-val">24/7</span>
                  <span className="metric-name">Dedicated Concierge</span>
                  <p className="metric-detail">One single specialist coordinating every moving part</p>
                </div>
                <div className="metric-box">
                  <span className="metric-val">2</span>
                  <span className="metric-name">Operating Hubs</span>
                  <p className="metric-detail">San Francisco & Jaipur with worldwide reach</p>
                </div>
                <div className="metric-box">
                  <span className="metric-val">100%</span>
                  <span className="metric-name">Discretion & Privacy</span>
                  <p className="metric-detail">Confidential manifests and direct tarmac transfers</p>
                </div>
              </div>
            </div>
            <div className="about-global-map">
              <img
                src="/images/map-hq.jpg"
                alt="Global Veirakas travel network flight corridors"
                className="global-map-img"
                loading="lazy"
              />
              <div className="map-badge">Worldwide Flight Corridors & Private Hubs</div>
            </div>
          </div>
        </section>

        {/* 4. Founder's Note / Leadership */}
        <section className="wrap section about-founder-block">
          <div className="founder-grid">
            <div className="founder-image-col">
              <div className="founder-img-wrapper">
                <img
                  src="/images/founder.webp"
                  alt="Veer Singh - Founder & CEO"
                  className="founder-portrait"
                  loading="lazy"
                />
                <div className="founder-badge">
                  <span>Celebso Group Enterprise</span>
                </div>
              </div>
            </div>
            <div className="founder-content-col">
              <p className="eyebrow">Our Leadership</p>
              <h2>Founder&apos;s Note</h2>
              <p className="founder-lead">
                &ldquo;Private travel should never feel transactional. It is an art of understanding subtle preferences, ensuring absolute discretion, and orchestrating every moving part so that your focus remains solely on what matters.&rdquo;
              </p>
              <p>
                We created Veirakas to redefine the private travel landscape—combining the world&apos;s finest aviation and maritime assets with unmatched personal care and obsessive attention to detail.
              </p>
              <p>
                From custom cabin atmospheres and tailored dining to seamless tarmac transfers, every member of our team is held to the highest standard of excellence.
              </p>
              <div className="founder-quote-box">
                <Quote size={28} className="quote-icon" />
                <p className="quote-text">
                  &ldquo;Our mission is simple: to make the extraordinary feel completely effortless, personal, and unforgettable.&rdquo;
                </p>
                <div className="founder-sign">
                  <strong>Veer Singh</strong>
                  <span>Founder & CEO · Celebso Group & Veirakas Private Travel</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Seamless Concierge Strip (Dark Navy) */}
        <section className="about-concierge-strip">
          <div className="wrap concierge-strip-grid">
            <div className="concierge-strip-left">
              <h2>We’re here to make private travel as seamless as a call.</h2>
              <p>One dedicated specialist manages your flight, yacht, villa, and ground transport.</p>
              <div className="concierge-hubs-tag">
                <span>Jaipur (HQ)</span>
                <span className="dot">·</span>
                <span>San Francisco</span>
                <span className="dot">·</span>
                <span>Global Network</span>
              </div>
              <ButtonLink href="/contact" outline>Contact concierge</ButtonLink>
            </div>
            <div className="concierge-strip-features">
              <div className="strip-feature-item">
                <div className="strip-feature-icon"><Plane size={24} /></div>
                <h4>Private Jets</h4>
                <p>Light to ultra-long-range aircraft ready on your terms.</p>
              </div>
              <div className="strip-feature-item">
                <div className="strip-feature-icon"><Anchor size={24} /></div>
                <h4>Superyachts</h4>
                <p>Curated maritime charters in the world&apos;s premier waters.</p>
              </div>
              <div className="strip-feature-item">
                <div className="strip-feature-icon"><Compass size={24} /></div>
                <h4>Private Islands</h4>
                <p>Secluded island havens and exclusive private estates.</p>
              </div>
              <div className="strip-feature-item">
                <div className="strip-feature-icon"><ShieldCheck size={24} /></div>
                <h4>24/7 Concierge</h4>
                <p>Direct specialist coordination with total confidentiality.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Experiences & Fleet Portfolio */}
        <section className="wrap section about-portfolio-section">
          <div className="section-intro text-center">
            <p className="eyebrow">Our Portfolio</p>
            <h2>Experiences & Fleet</h2>
            <p className="intro-sub">
              From private jets and high-speed helicopters to superyachts and sequestered private islands.
            </p>
          </div>
          <div className="portfolio-six-grid">
            {portfolioItems.map((item) => (
              <Link key={item.title} href={item.href} className="portfolio-card">
                <div className="portfolio-card-media">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <div className="portfolio-card-content">
                  <span className="portfolio-tag">{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <span className="portfolio-cta">
                    Explore <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 7. The Veirakas Difference (Comparison) */}
        <section className="about-difference-section">
          <div className="wrap difference-grid">
            <div className="difference-intro">
              <p className="eyebrow">The Difference</p>
              <h2>Why fly & cruise with Veirakas</h2>
              <div className="gold-line" />
              <p>
                How our dedicated concierge model elevates your journey far beyond conventional charter brokerages.
              </p>
              <div className="difference-badge-box">
                <strong>A Venture of Celebso Group</strong>
                <span>Uncompromising aviation standards, discreet financial structures, and bespoke excellence.</span>
              </div>
            </div>
            <div className="difference-cards">
              <div className="diff-card diff-card-veirakas">
                <div className="diff-card-header">
                  <span className="diff-tag gold-tag">The Veirakas Standard</span>
                  <h3>Bespoke Excellence</h3>
                </div>
                <ul className="diff-list">
                  <li>
                    <Check size={16} className="text-gold" />
                    <span>Direct tarmac transfers & private VIP ramp clearance</span>
                  </li>
                  <li>
                    <Check size={16} className="text-gold" />
                    <span>Guaranteed vetted aircraft & ARGUS / Wyvern safety audits</span>
                  </li>
                  <li>
                    <Check size={16} className="text-gold" />
                    <span>Dedicated 1-on-1 concierge specialist available 24/7/365</span>
                  </li>
                  <li>
                    <Check size={16} className="text-gold" />
                    <span>Total non-disclosure confidentiality & private manifests</span>
                  </li>
                  <li>
                    <Check size={16} className="text-gold" />
                    <span>Harmonized jet, yacht, villa & chauffeur coordination</span>
                  </li>
                </ul>
              </div>

              <div className="diff-card diff-card-standard">
                <div className="diff-card-header">
                  <span className="diff-tag">Traditional Brokers</span>
                  <h3>Conventional Charters</h3>
                </div>
                <ul className="diff-list muted-list">
                  <li>
                    <X size={16} className="text-muted" />
                    <span>Automated booking engines & impersonal call centers</span>
                  </li>
                  <li>
                    <X size={16} className="text-muted" />
                    <span>Multiple broker commissions & hidden repositioning fees</span>
                  </li>
                  <li>
                    <X size={16} className="text-muted" />
                    <span>Rigid cancellation terms with zero schedule flexibility</span>
                  </li>
                  <li>
                    <X size={16} className="text-muted" />
                    <span>Generic catering and standard cabin arrangements</span>
                  </li>
                  <li>
                    <X size={16} className="text-muted" />
                    <span>Disjointed transfers between air, sea and land</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Interactive Route Planner / Flight Inquiry */}
        <section className="about-route-section">
          <div className="wrap route-grid">
            <div className="route-form-card">
              <p className="eyebrow text-gold">Flight & Route Inquiry</p>
              <h2>Plan your private route</h2>
              <p className="route-desc">
                Tell us where you want to go. Our private concierge team will return curated options within 15 minutes.
              </p>
              <form onSubmit={handleRouteSubmit} className="route-form">
                <div className="route-field-row">
                  <label>
                    <span>Departure</span>
                    <input
                      type="text"
                      placeholder="e.g. San Francisco (SFO)"
                      value={routeFrom}
                      onChange={(e) => setRouteFrom(e.target.value)}
                      required
                    />
                  </label>
                  <label>
                    <span>Destination</span>
                    <input
                      type="text"
                      placeholder="e.g. Monaco (MCM) / Dubai (DXB)"
                      value={routeTo}
                      onChange={(e) => setRouteTo(e.target.value)}
                      required
                    />
                  </label>
                </div>
                <div className="route-field-row">
                  <label>
                    <span>Travel Date</span>
                    <input
                      type="date"
                      value={routeDate}
                      onChange={(e) => setRouteDate(e.target.value)}
                    />
                  </label>
                  <label>
                    <span>Passengers</span>
                    <select
                      value={passengers}
                      onChange={(e) => setPassengers(e.target.value)}
                    >
                      <option value="1-4">1 – 4 Guests</option>
                      <option value="5-8">5 – 8 Guests</option>
                      <option value="9-14">9 – 14 Guests</option>
                      <option value="15+">15+ Group / Delegation</option>
                    </select>
                  </label>
                </div>
                <button type="submit" className="button route-btn">
                  Request private flight quote <ArrowRight size={16} />
                </button>
              </form>
            </div>

            <div className="route-map-panel">
              <div className="route-map-wrapper">
                <img
                  src="/images/map-hq.jpg"
                  alt="Private Flight Corridors"
                  className="route-map-img"
                  loading="lazy"
                />
                <div className="route-pills-overlay">
                  <div className="route-pill">SFO ➔ DXB · 15h 20m</div>
                  <div className="route-pill">LHR ➔ MLE · 10h 45m</div>
                  <div className="route-pill">NCE ➔ GVA · 45m</div>
                  <div className="route-pill">JAI ➔ DXB · 3h 15m</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Standards Strip (5 Trust Badges) */}
        <section className="about-standards-strip">
          <div className="wrap standards-five-grid">
            <div className="standard-col">
              <div className="standard-icon"><ShieldCheck size={26} /></div>
              <h4>Absolute Discretion</h4>
              <p>Confidential passenger manifests, NDA protocols, and secure tarmac transfers.</p>
            </div>
            <div className="standard-col">
              <div className="standard-icon"><Award size={26} /></div>
              <h4>Vetted Fleet</h4>
              <p>Only certified aircraft operators meeting stringent Wyvern & ARGUS safety audits.</p>
            </div>
            <div className="standard-col">
              <div className="standard-icon"><Users size={26} /></div>
              <h4>Dedicated Concierge</h4>
              <p>One dedicated specialist who understands your preferences and handles every detail.</p>
            </div>
            <div className="standard-col">
              <div className="standard-icon"><Globe2 size={26} /></div>
              <h4>Global Access</h4>
              <p>Dual hubs in San Francisco & Jaipur coordinating routes across 6 continents.</p>
            </div>
            <div className="standard-col">
              <div className="standard-icon"><Gem size={26} /></div>
              <h4>Bespoke Curation</h4>
              <p>Every itinerary, cabin dining, and arrival experience tailored exclusively to you.</p>
            </div>
          </div>
        </section>

        {/* 10. Process Timeline (01 to 06) + Metrics */}
        <section className="wrap section about-process-section">
          <div className="section-intro text-center">
            <p className="eyebrow">Seamless Process</p>
            <h2>How we coordinate your journey</h2>
            <p className="intro-sub">
              From your initial confidential inquiry to your arrival at your private sanctuary.
            </p>
          </div>

          <div className="process-six-timeline">
            {processSteps.map((step) => (
              <div key={step.num} className="process-card-six">
                <span className="step-num-six">{step.num}</span>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="process-assurance-bar">
            <div className="assurance-item">
              <Clock3 size={20} className="text-gold" />
              <div>
                <strong>Average Response Time</strong>
                <span>Under 15 Minutes</span>
              </div>
            </div>
            <div className="assurance-item">
              <ShieldCheck size={20} className="text-gold" />
              <div>
                <strong>Safety & Audit Standards</strong>
                <span>Wyvern & ARGUS Platinum</span>
              </div>
            </div>
            <div className="assurance-item">
              <Sparkles size={20} className="text-gold" />
              <div>
                <strong>Discretion Rating</strong>
                <span>100% Confidential Protocol</span>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Split Closing Banner */}
        <section className="wrap section about-closing-split">
          <div className="closing-split-grid">
            <div className="closing-media">
              <img
                src="/images/featured.webp"
                alt="Private jet parked at waterfront luxury villa infinity pool at sunset"
                className="closing-img"
                loading="lazy"
              />
            </div>
            <div className="closing-content">
              <p className="eyebrow">Start Your Journey</p>
              <h2>Ready to travel beyond the ordinary?</h2>
              <p>
                Connect with our private concierge team today to coordinate your next flight, yacht charter, or bespoke getaway.
              </p>
              <div className="actions">
                <ButtonLink href="/contact">Request a private quote</ButtonLink>
                <ButtonLink outline href="/contact">Talk to concierge</ButtonLink>
              </div>
            </div>
          </div>
        </section>

        {/* 12. Hubs Banner (San Francisco + Jaipur) */}
        <section className="wrap section about-hubs-banner">
          <div className="hubs-banner-grid">
            <div className="hubs-photos">
              <div className="hub-photo-card">
                <img src="/images/san-francisco.webp" alt="San Francisco Hub" />
                <span className="hub-caption">San Francisco Hub · Americas</span>
              </div>
              <div className="hub-photo-card">
                <img src="/images/jaipur.webp" alt="Jaipur Hub" />
                <span className="hub-caption">Jaipur Hub · Eurasia</span>
              </div>
            </div>
            <div className="hubs-info-card">
              <p className="eyebrow text-gold">Global Presence</p>
              <h2>Our Operating Hubs</h2>
              <div className="hub-entry">
                <strong>Jaipur Headquarters (HQ)</strong>
                <p>Jaipur, Rajasthan, India</p>
                <p>
                  Direct Concierge:{' '}
                  <a href="tel:+919784626443" style={{ color: 'inherit', textDecoration: 'underline' }}>
                    +91 97846 26443
                  </a>
                </p>
                <p>
                  Email:{' '}
                  <a href="mailto:info@celebso.com" style={{ color: 'inherit', textDecoration: 'underline' }}>
                    info@celebso.com
                  </a>{' '}
                  ·{' '}
                  <a href="mailto:info.celebso@gmail.com" style={{ color: 'inherit', textDecoration: 'underline' }}>
                    info.celebso@gmail.com
                  </a>
                </p>
              </div>
              <div className="hub-entry">
                <strong>San Francisco Desk</strong>
                <p>Americas aviation, transpacific routing & executive charter management.</p>
              </div>
              <div className="hubs-action">
                <ButtonLink href="/contact">Request a private quote</ButtonLink>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
