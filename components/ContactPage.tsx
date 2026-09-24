'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MessageSquare,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Building2,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { Header, Footer, Brand } from '@/app/site';

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    preferredContact: 'WhatsApp',
    service: 'Private Jet',
    origin: '',
    destination: '',
    date: '',
    passengers: '1–4 passengers',
    message: '',
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const fromParam = params.get('from');
      const toParam = params.get('to') || params.get('destination');
      const dateParam = params.get('date');
      const serviceParam = params.get('service');
      if (fromParam || toParam || dateParam || serviceParam) {
        setTimeout(() => {
          setForm((prev) => ({
            ...prev,
            origin: fromParam || prev.origin,
            destination: toParam || prev.destination,
            date: dateParam || prev.date,
            service: serviceParam || prev.service,
          }));
        }, 0);
      }
    }
  }, []);

  const update = (key: string, value: string) => setForm({ ...form, [key]: value });

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.name && form.email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="contact-shell">
      {/* Hero Section */}
      <section
        className="hero hero-contact-refined"
        style={
          {
            '--hero-image': `url('/images/contact-hq.jpg')`,
          } as React.CSSProperties
        }
      >
        <Header />
        <div className="hero-content">
          <p className="eyebrow">Veirakas Private Travel · A Venture of Celebso Group</p>
          <h1>Connect with Our Private Concierge.</h1>
          <p className="hero-description">
            Direct, discreet, and personal. Whether arranging immediate private aviation,
            a Mediterranean superyacht voyage, or an end-to-end bespoke journey, our private
            desk is at your service 24/7.
          </p>
        </div>
      </section>

      {/* Floating Priority Direct Channels Bar */}
      <div className="wrap">
        <div className="contact-priority-bar">
          <a href="tel:+919784626443" className="priority-channel-card">
            <div className="priority-icon">
              <Phone size={18} />
            </div>
            <div>
              <span className="priority-tag">Direct Concierge</span>
              <strong>+91 97846 26443</strong>
              <small>Jaipur (HQ) · 24/7 Direct</small>
            </div>
          </a>

          <a
            href="https://wa.me/919784626443?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20a%20private%20charter"
            target="_blank"
            rel="noopener noreferrer"
            className="priority-channel-card"
          >
            <div className="priority-icon whatsapp-icon">
              <MessageSquare size={18} />
            </div>
            <div>
              <span className="priority-tag">Instant Chat</span>
              <strong>WhatsApp Concierge</strong>
              <small>+91 97846 26443 · Fast Reply</small>
            </div>
          </a>

          <a href="mailto:info@celebso.com" className="priority-channel-card">
            <div className="priority-icon">
              <Mail size={18} />
            </div>
            <div>
              <span className="priority-tag">Official Proposals</span>
              <strong>info@celebso.com</strong>
              <small>Primary Concierge Desk</small>
            </div>
          </a>

          <a href="mailto:info.celebso@gmail.com" className="priority-channel-card">
            <div className="priority-icon">
              <Mail size={18} />
            </div>
            <div>
              <span className="priority-tag">Direct Desk</span>
              <strong>info.celebso@gmail.com</strong>
              <small>24/7 Fast Response</small>
            </div>
          </a>
        </div>
      </div>

      {/* Main Architectural Card */}
      <main className="wrap contact-main-section">
        <div className="contact-card-shell">
          {/* Left Column: Concierge Aside */}
          <aside className="contact-aside">
            <p className="eyebrow">Personal · Private · Global</p>
            <h2>
              A conversation,
              <br />
              not a booking engine.
            </h2>
            <div className="gold-line" />
            <p className="aside-lead">
              Some journeys require more than an automated search box. When you contact Veirakas,
              one senior concierge coordinates every detail around your schedule.
            </p>

            <ul className="aside-feature-list">
              <li>
                <CheckCircle2 size={16} className="text-gold" />
                <span>Aircraft & Yacht Selection tailored to your group</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="text-gold" />
                <span>Private Tarmac & Ramp Vehicle Clearances</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="text-gold" />
                <span>Bespoke In-Flight Dining & Dietary Curation</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="text-gold" />
                <span>Confidential Passenger Manifest Protocols</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="text-gold" />
                <span>24/7 In-Flight Tracking & Proactive Dispatch</span>
              </li>
            </ul>

            <div className="aside-nda-box">
              <ShieldCheck size={20} className="text-gold" />
              <div>
                <strong>Client Discretion & NDA</strong>
                <p>Mutual Non-Disclosure Agreements executed upon request prior to flight details.</p>
              </div>
            </div>

            <div className="aside-venture-footer">
              <Brand />
              <p className="venture-label">A Venture of Celebso Group</p>
            </div>
          </aside>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-panel">
            {submitted ? (
              <div className="contact-success-state">
                <div className="success-icon-wrap">
                  <CheckCircle2 size={46} className="text-gold" />
                </div>
                <p className="eyebrow">Inquiry Received</p>
                <h2>Thank you, {form.name}.</h2>
                <p className="success-lead">
                  Your private inquiry has been assigned to a senior concierge specialist.
                </p>
                <div className="success-summary">
                  <p>
                    <strong>Service:</strong> {form.service}
                  </p>
                  {(form.origin || form.destination) && (
                    <p>
                      <strong>Route:</strong> {form.origin || 'Departure airport'} to{' '}
                      {form.destination || 'Destination'}
                    </p>
                  )}
                  {form.date && (
                    <p>
                      <strong>Travel Date:</strong> {form.date}
                    </p>
                  )}
                  <p>
                    <strong>Passengers:</strong> {form.passengers}
                  </p>
                  <p>
                    <strong>Preferred Channel:</strong> {form.preferredContact} ({form.phone || form.email})
                  </p>
                </div>
                <p className="success-footer-note">
                  A tailored proposal will be prepared for you shortly. If your journey is within 24
                  hours, please call our 24/7 direct desk.
                </p>
                <div className="success-actions">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: '',
                        email: '',
                        phone: '',
                        preferredContact: 'WhatsApp',
                        service: 'Private Jet',
                        origin: '',
                        destination: '',
                        date: '',
                        passengers: '1–4 passengers',
                        message: '',
                      });
                    }}
                    className="button outline"
                  >
                    Submit another inquiry
                  </button>
                  <Link href="/" className="button">
                    Return to home
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-inquiry-form">
                <div className="form-header">
                  <p className="eyebrow">Confidential Request</p>
                  <h2>Tell Us About Your Journey</h2>
                  <p>Please share your preferences below. All information remains confidential.</p>
                </div>

                {/* Service Selection */}
                <div className="form-section">
                  <span className="section-label">Select Service</span>
                  <div className="choice-pills">
                    {[
                      'Private Jet',
                      'Helicopter',
                      'Yacht',
                      'Private Island',
                      'Bespoke Journey',
                      'Corporate Travel',
                    ].map((s) => (
                      <button
                        type="button"
                        key={s}
                        className={`choice-pill ${form.service === s ? 'active' : ''}`}
                        onClick={() => update('service', s)}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Journey Coordinates */}
                <div className="form-grid-2">
                  <label className="field-block">
                    <span className="field-title">From (City or Airport)</span>
                    <input
                      type="text"
                      placeholder="e.g. San Francisco (SFO) or London"
                      value={form.origin}
                      onChange={(e) => update('origin', e.target.value)}
                    />
                  </label>

                  <label className="field-block">
                    <span className="field-title">To (Destination)</span>
                    <input
                      type="text"
                      placeholder="e.g. Maldives, Dubai, Monaco"
                      value={form.destination}
                      onChange={(e) => update('destination', e.target.value)}
                    />
                  </label>
                </div>

                <div className="form-grid-2">
                  <label className="field-block">
                    <span className="field-title">Travel Date</span>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => update('date', e.target.value)}
                    />
                  </label>

                  <label className="field-block">
                    <span className="field-title">Passengers</span>
                    <select
                      value={form.passengers}
                      onChange={(e) => update('passengers', e.target.value)}
                    >
                      <option>1–4 passengers</option>
                      <option>5–9 passengers</option>
                      <option>10–14 passengers</option>
                      <option>15+ passengers (Group / Corporate)</option>
                    </select>
                  </label>
                </div>

                {/* Contact Coordinates */}
                <div className="form-grid-2">
                  <label className="field-block">
                    <span className="field-title">Full Name *</span>
                    <input
                      required
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                    />
                  </label>

                  <label className="field-block">
                    <span className="field-title">Email Address *</span>
                    <input
                      required
                      type="email"
                      placeholder="you@domain.com"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                    />
                  </label>
                </div>

                <div className="form-grid-2">
                  <label className="field-block">
                    <span className="field-title">Phone or WhatsApp</span>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000 or +91..."
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                    />
                  </label>

                  <label className="field-block">
                    <span className="field-title">Preferred Contact Channel</span>
                    <select
                      value={form.preferredContact}
                      onChange={(e) => update('preferredContact', e.target.value)}
                    >
                      <option value="WhatsApp">WhatsApp</option>
                      <option value="Phone Call">Phone Call</option>
                      <option value="Email">Confidential Email</option>
                    </select>
                  </label>
                </div>

                {/* Notes */}
                <label className="field-block">
                  <span className="field-title">Specific Preferences or Requirements</span>
                  <textarea
                    rows={3}
                    placeholder="Aircraft category preferences, dietary requirements, villa desires, ground transfers, or special scheduling..."
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                  />
                </label>

                {/* Action Row */}
                <div className="form-action-row">
                  <button type="submit" className="button contact-primary-btn">
                    Submit Private Request <ArrowRight size={16} />
                  </button>
                  <span className="form-security-note">
                    <ShieldCheck size={14} className="text-gold" /> Protected by Celebso Client
                    Discretion
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>

      {/* Global Coordinates Section */}
      <section className="wrap section contact-hubs-section">
        <div className="section-intro text-center">
          <p className="eyebrow">Global Operating Coordinates</p>
          <h2>Two Operating Hubs. One Global Network.</h2>
          <p className="hubs-sub">
            With key desks positioned across optimal time zones, Veirakas coordinates seamless
            arrivals, departures, and maritime charters worldwide.
          </p>
        </div>

        <div className="contact-hubs-grid">
          <div className="hub-card">
            <div className="hub-card-header">
              <MapPin size={20} className="text-gold" />
              <div>
                <span className="hub-region">Americas Operations</span>
                <h3>San Francisco Hub</h3>
              </div>
            </div>
            <p className="hub-address-text">
              101 California Street, Financial District
              <br />
              San Francisco, CA 94111, United States
            </p>
            <div className="hub-meta">
              <span>Transpacific & Americas Flight Corridors</span>
              <a href="tel:+14158904820" className="hub-direct-link">
                +1 (415) 890-4820
              </a>
            </div>
          </div>

          <div className="hub-card">
            <div className="hub-card-header">
              <MapPin size={20} className="text-gold" />
              <div>
                <span className="hub-region">Global Headquarters</span>
                <h3>Jaipur Hub (HQ)</h3>
              </div>
            </div>
            <p className="hub-address-text">
              Jaipur, Rajasthan 302001, India
              <br />
              Executive Leadership: Veer Singh (Founder & CEO)
            </p>
            <div className="hub-meta">
              <span>Direct Concierge Line / WhatsApp:</span>
              <a href="tel:+919784626443" className="hub-direct-link">
                +91 97846 26443
              </a>
              <span>Official Inquiries:</span>
              <a href="mailto:info@celebso.com" className="hub-direct-link">
                info@celebso.com
              </a>
            </div>
          </div>

          <div className="hub-card">
            <div className="hub-card-header">
              <Building2 size={20} className="text-gold" />
              <div>
                <span className="hub-region">Global Corridors</span>
                <h3>Worldwide Desks</h3>
              </div>
            </div>
            <p className="hub-address-text">
              Monaco · Dubai · London · Geneva · Maldives · French Polynesia
            </p>
            <div className="hub-meta">
              <span>24/7 Global Vessel & Flight Tracking</span>
              <a href="mailto:info.celebso@gmail.com" className="hub-direct-link">
                info.celebso@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Standards Banner */}
      <section className="contact-standards-strip">
        <div className="wrap standards-inner">
          <div className="standard-item">
            <Clock size={24} className="text-gold" />
            <div>
              <h4>2–4 Hour Rapid Dispatch</h4>
              <p>Aircraft positioned globally on immediate call for urgent itineraries.</p>
            </div>
          </div>

          <div className="standard-item">
            <ShieldCheck size={24} className="text-gold" />
            <div>
              <h4>100% Confidential Manifests</h4>
              <p>Strict non-disclosure protocols and private terminal tarmac transfers.</p>
            </div>
          </div>

          <div className="standard-item">
            <Sparkles size={24} className="text-gold" />
            <div>
              <h4>Single Dedicated Specialist</h4>
              <p>Zero handoffs—one personal concierge coordinates your entire journey.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
