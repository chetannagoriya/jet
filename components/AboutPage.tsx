'use client';

import Link from 'next/link';
import {
  ShieldCheck,
  Globe2,
  Clock3,
  Compass,
  Plane,
  Anchor,
  Sparkles,
  ArrowRight,
  Building2,
  MapPin,
} from 'lucide-react';
import { Header, Footer, ButtonLink } from '@/app/site';

export function AboutPage() {
  return (
    <div className="about-shell">
      {/* Hero Section */}
      <section
        className="hero hero-about"
        style={
          {
            '--hero-image': `url('/images/about-hq.jpg')`,
          } as React.CSSProperties
        }
      >
        <Header />
        <div className="hero-content">
          <p className="eyebrow">Veirakas Private Travel · A Venture of Celebso Group</p>
          <h1>The Art of Private Travel, Elevated.</h1>
          <p className="hero-description">
            Born from a dedication to bespoke discretion, extraordinary aviation, and
            unparalleled global access. Arranged seamlessly around you by one dedicated concierge.
          </p>
          <div className="actions">
            <ButtonLink href="/contact">Request a private quote</ButtonLink>
            <ButtonLink outline href="/destinations">
              Explore destinations
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Prestige Metrics / Stats */}
      <div className="about-stats-bar">
        <div className="wrap about-stats-grid">
          <div className="stat-card">
            <span className="stat-number">150+</span>
            <span className="stat-label">Global Destinations</span>
            <p className="stat-sub">Across 6 continents with private ramp access</p>
          </div>
          <div className="stat-card">
            <span className="stat-number">100%</span>
            <span className="stat-label">Discretion & Privacy</span>
            <p className="stat-sub">Confidential manifests and direct tarmac transfers</p>
          </div>
          <div className="stat-card">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Dedicated Concierge</span>
            <p className="stat-sub">One single specialist coordinating your journey</p>
          </div>
          <div className="stat-card">
            <span className="stat-number">2</span>
            <span className="stat-label">Operating Hubs</span>
            <p className="stat-sub">San Francisco & Jaipur with worldwide reach</p>
          </div>
        </div>
      </div>

      <main>
        {/* Ethos & Story Section */}
        <section className="wrap section about-story-section">
          <div className="story-grid">
            <div className="story-text">
              <p className="eyebrow">Our Ethos</p>
              <h2>
                A conversation,
                <br />
                not a booking engine.
              </h2>
              <div className="gold-line" />
              <p className="story-lead">
                Veirakas Private Travel was established under Celebso Group as an antidote to
                automated search boxes and impersonal brokerage.
              </p>
              <p>
                True luxury travel cannot be reduced to algorithmic filters. When high-profile
                executives, families, and decision-makers travel, every minute, route, and
                environmental nuance matters.
              </p>
              <p>
                From private jet charter charters and helicopter hops to Mediterranean superyachts
                and sequestered private islands, our team manages each moving part with quiet
                precision and unmatched confidentiality.
              </p>
              <div className="story-highlights">
                <div className="highlight-item">
                  <ShieldCheck size={18} className="text-gold" />
                  <div>
                    <strong>Absolute Confidentiality</strong>
                    <span>Non-disclosure protocols and private customs clearance.</span>
                  </div>
                </div>
                <div className="highlight-item">
                  <Sparkles size={18} className="text-gold" />
                  <div>
                    <strong>Bespoke Curation</strong>
                    <span>Tailored down to aircraft cabin humidity, custom catering, and transfers.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="story-visual">
              <img
                src="/images/high-1.jpg"
                alt="Aircraft wing flying through golden clouds"
                className="story-img-main"
                loading="lazy"
              />
              <div className="story-accent-card">
                <Building2 size={24} className="text-gold" />
                <h4>A Venture of Celebso Group</h4>
                <p>
                  Rooted in a global commitment to operational excellence, luxury enterprise, and
                  client discretion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Pillars */}
        <section className="about-pillars-section">
          <div className="wrap">
            <div className="section-intro text-center">
              <p className="eyebrow">What Sets Us Apart</p>
              <h2>The Four Pillars of Veirakas</h2>
              <p className="intro-sub">
                Every journey is engineered with meticulous care, combining aviation mastery with
                warm, personal hospitality.
              </p>
            </div>

            <div className="pillars-grid">
              <div className="pillar-card">
                <div className="pillar-icon">
                  <Plane size={24} />
                </div>
                <span className="pillar-num">01</span>
                <h3>Private Aviation</h3>
                <p>
                  Direct access to light, midsize, super-midsize, and ultra-long-range business
                  jets. Fly anywhere in the world on your schedule with zero terminal delays.
                </p>
                <Link href="/services#private-jets" className="pillar-link">
                  Explore jets <ArrowRight size={14} />
                </Link>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon">
                  <Anchor size={24} />
                </div>
                <span className="pillar-num">02</span>
                <h3>Maritime & Yachts</h3>
                <p>
                  Handpicked motor yachts, sailing vessels, and superyachts across the
                  Mediterranean, Caribbean, Indian Ocean, and South Pacific with seasoned crew and
                  curated itineraries.
                </p>
                <Link href="/services#yachts" className="pillar-link">
                  Explore yachts <ArrowRight size={14} />
                </Link>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon">
                  <Compass size={24} />
                </div>
                <span className="pillar-num">03</span>
                <h3>Extraordinary Havens</h3>
                <p>
                  Secluded private islands, cliffside estates, and historic villas arranged
                  exclusively for your party with private culinary teams and security.
                </p>
                <Link href="/services#private-islands" className="pillar-link">
                  Explore islands <ArrowRight size={14} />
                </Link>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon">
                  <Clock3 size={24} />
                </div>
                <span className="pillar-num">04</span>
                <h3>Dedicated Concierge</h3>
                <p>
                  One dedicated specialist manages your initial inquiry, aircraft positioning,
                  in-flight preferences, ground transport, and unforeseen schedule alterations.
                </p>
                <Link href="/contact" className="pillar-link">
                  Connect with team <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Global by Nature Section (With Crystal Clear HD Map) */}
        <section className="wrap section">
          <div className="about-global-panel">
            <div className="global-content">
              <p className="eyebrow">Global by Nature</p>
              <h2>Personal by design.</h2>
              <p>
                With two primary coordinating offices in San Francisco and Jaipur, backed by a
                network of local partners across Europe, the Middle East, and Oceania, our team can
                orchestrate each leg of your voyage in a single conversation.
              </p>

              <div className="hubs-list">
                <div className="hub-item">
                  <MapPin size={18} className="text-gold" />
                  <div>
                    <strong>San Francisco Hub</strong>
                    <p>Americas private aviation, transpacific routing & executive travel.</p>
                  </div>
                </div>

                <div className="hub-item">
                  <MapPin size={18} className="text-gold" />
                  <div>
                    <strong>Jaipur Hub</strong>
                    <p>South Asian royal heritage, Middle Eastern corridors & concierge desk.</p>
                  </div>
                </div>

                <div className="hub-item">
                  <Globe2 size={18} className="text-gold" />
                  <div>
                    <strong>Global Specialist Network</strong>
                    <p>Monaco · Dubai · London · Maldives · French Polynesia · Geneva.</p>
                  </div>
                </div>
              </div>

              <div className="global-actions">
                <ButtonLink href="/contact">Start your private inquiry</ButtonLink>
              </div>
            </div>

            {/* Crystal-Clear HD Map */}
            <div className="global-map-wrapper">
              <img
                src="/images/map-hq.jpg"
                alt="Global Veirakas travel network with golden flight paths"
                className="global-map-img"
                loading="eager"
              />
              <div className="map-caption">
                <span>Worldwide Private Flight Routes & Concierge Corridors</span>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works for You */}
        <section className="wrap section about-process-section">
          <div className="section-intro text-center">
            <p className="eyebrow">The Experience</p>
            <h2>How We Coordinate Your Journey</h2>
          </div>

          <div className="process-grid">
            <div className="process-step">
              <span className="step-badge">01</span>
              <h4>The Conversation</h4>
              <p>
                Share your schedule, destination preferences, passenger requirements, and onboard
                desires with your dedicated specialist.
              </p>
            </div>

            <div className="process-step">
              <span className="step-badge">02</span>
              <h4>Tailored Proposal</h4>
              <p>
                Receive an exact portfolio of vetted aircraft, yacht options, and accommodation
                proposals curated precisely for your flight parameters.
              </p>
            </div>

            <div className="process-step">
              <span className="step-badge">03</span>
              <h4>Seamless Dispatch</h4>
              <p>
                From tarmac vehicle permits to personalized catering and customs coordination,
                every detail is arranged before you depart.
              </p>
            </div>

            <div className="process-step">
              <span className="step-badge">04</span>
              <h4>24/7 Journey Oversight</h4>
              <p>
                Continuous flight tracking and concierge support ensure immediate flexibility if
                your meetings or holiday plans evolve.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
