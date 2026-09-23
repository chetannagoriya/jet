'use client';

import Link from 'next/link';
import { ShieldCheck, FileText, ArrowRight, Printer, CheckCircle2 } from 'lucide-react';
import { Header, Footer, Brand } from '@/app/site';
import { LEGAL_DOCUMENTS, LegalDocument } from '@/lib/legal-data';

interface LegalPageProps {
  currentKey: string;
}

const POLICY_NAV = [
  { key: 'privacy', label: 'Privacy Policy', href: '/privacy' },
  { key: 'payment-terms', label: 'Payment Terms', href: '/payment-terms' },
  { key: 'cancellation-refund', label: 'Cancellation & Refund', href: '/cancellation-refund' },
  { key: 'terms', label: 'Terms & Conditions', href: '/terms' },
  { key: 'cookie-policy', label: 'Cookie Policy', href: '/cookie-policy' },
];

export function LegalPage({ currentKey }: LegalPageProps) {
  const doc: LegalDocument = LEGAL_DOCUMENTS[currentKey] || LEGAL_DOCUMENTS['privacy'];

  return (
    <div className="legal-shell">
      {/* Top Header */}
      <div className="legal-header-wrapper">
        <Header />
      </div>

      {/* Hero Banner */}
      <section className="legal-hero">
        <div className="wrap">
          <p className="eyebrow">{doc.venture}</p>
          <h1>{doc.title}</h1>
          <div className="legal-meta">
            <span className="legal-badge">Official Policy</span>
            <span className="legal-date">Last Updated: {doc.lastUpdated}</span>
            <button
              onClick={() => typeof window !== 'undefined' && window.print()}
              className="legal-print-btn"
              title="Print document"
            >
              <Printer size={14} /> Print Policy
            </button>
          </div>
        </div>
      </section>

      {/* Policy Navigation Bar */}
      <div className="legal-nav-sticky">
        <div className="wrap legal-nav-inner">
          {POLICY_NAV.map((item) => {
            const isActive = item.key === doc.slug;
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`legal-tab ${isActive ? 'active' : ''}`}
              >
                <FileText size={13} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Main Content Area */}
      <main className="wrap legal-container">
        <div className="legal-layout">
          {/* Quick TOC Sidebar */}
          <aside className="legal-sidebar">
            <div className="legal-toc">
              <h4>Table of Contents</h4>
              <ul>
                {doc.sections.map((sec, i) => (
                  <li key={i}>
                    <a href={`#sec-${i}`}>
                      <span className="toc-num">{sec.number || String(i + 1).padStart(2, '0')}</span>
                      <span className="toc-title">{sec.title}</span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="legal-sidebar-card">
                <ShieldCheck size={28} className="text-gold" />
                <h5>Dedicated Concierge</h5>
                <p>Have specific privacy, payment or travel inquiries?</p>
                <Link href="/contact" className="button outline legal-sidebar-btn">
                  Contact Team <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </aside>

          {/* Content Body */}
          <div className="legal-content">
            {/* Introductory Statement */}
            {doc.intro && doc.intro.length > 0 && (
              <div className="legal-intro-card">
                <p className="eyebrow">Overview</p>
                {doc.intro.map((para, i) => (
                  <p key={i} className="legal-intro-text">
                    {para}
                  </p>
                ))}
              </div>
            )}

            {/* Sections */}
            <div className="legal-sections-list">
              {doc.sections.map((sec, i) => (
                <article key={i} id={`sec-${i}`} className="legal-section-card">
                  <header className="legal-sec-header">
                    <span className="legal-sec-num">
                      {sec.number || String(i + 1).padStart(2, '0')}
                    </span>
                    <h2>{sec.title}</h2>
                  </header>

                  {sec.content && <p className="legal-sec-p">{sec.content}</p>}

                  {sec.list && sec.list.length > 0 && (
                    <ul className="legal-sec-list">
                      {sec.list.map((item, j) => (
                        <li key={j}>
                          <CheckCircle2 size={15} className="list-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {sec.note && (
                    <div className="legal-callout">
                      <p>{sec.note}</p>
                    </div>
                  )}
                </article>
              ))}
            </div>

            {/* Official Venture Details Box */}
            <div className="legal-contact-panel">
              <div className="legal-contact-inner">
                <Brand />
                <div className="legal-contact-details">
                  <h4>Veirakas Private Travel</h4>
                  <p className="legal-venture-tag">A Venture of Celebso Group</p>
                  <p className="legal-contact-line">
                    <strong>Jurisdiction:</strong> India & Global Concierge Operations
                  </p>
                  <p className="legal-contact-line">
                    <strong>Direct Concierge:</strong>{' '}
                    <Link href="/contact" className="legal-gold-link">
                      concierge@veirakas.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Website Footer */}
      <Footer />
    </div>
  );
}
