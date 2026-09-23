'use client';

import { use } from 'react';
import { ButtonLink, Footer, Hero, ImageCard, destinations } from '../site';
import { LegalPage } from '@/components/LegalPage';
import { AboutPage } from '@/components/AboutPage';
import { ContactPage } from '@/components/ContactPage';
import { LEGAL_SLUG_MAP } from '@/lib/legal-data';

const copy: Record<string, {title:string;description:string;image:string;eyebrow:string}> = {
  services:{title:'Private travel,\nwithout limits.',description:'From private aviation to exclusive islands and bespoke journeys, we arrange the extraordinary around you.',image:'services',eyebrow:'Private · personal · global'},
  destinations:{title:'The world,\nprivately.',description:'Discover extraordinary destinations, private aviation routes, luxury islands and bespoke experiences — arranged around you.',image:'services',eyebrow:'Private · personal · global'},
  experiences:{title:'Travel that feels\nentirely your own.',description:'Every journey is composed around your interests, pace and the moments you want to remember.',image:'villa',eyebrow:'Bespoke journeys'},
  corporate:{title:'Private aviation\nfor business.',description:'Move executives, teams and decision-makers around the world with complete privacy and absolute flexibility.',image:'concierge',eyebrow:'Corporate concierge'},
  about:{title:'Private travel,\nbuilt around you.',description:'A global concierge network making exceptional travel feel effortless, personal and discreet.',image:'about',eyebrow:'Veirakas private travel'},
  concierge:{title:'One request.\nOne dedicated concierge.',description:'From your first inquiry to the final details of your journey, one concierge coordinates every experience around you.',image:'concierge',eyebrow:'Private · personal · confidential'},
  journal:{title:'The private\ntravel journal.',description:'Ideas, destinations, aviation insights and stories from the world of extraordinary travel.',image:'journal',eyebrow:'Private aviation · luxury · destinations'},
  news:{title:'Private travel,\nin the news.',description:'The latest developments across private aviation, business travel, luxury destinations, yachts and the global travel industry.',image:'news',eyebrow:'Global aviation · travel · business'},
  contact:{title:'Let’s plan something\nextraordinary.',description:'Tell us where you want to go, how you want to travel, and what you need. Our concierge team will take it from there.',image:'contact',eyebrow:'Private · personal · confidential'},
};

const features=[['Private aviation','Fly on your terms, to almost anywhere.'],['Maritime','Yachts, superyachts and island transfers.'],['Destinations','Private islands, villas and unique places.'],['Journey services','Ground transport, catering and experiences.']];

function StandardPage({slug}:{slug:string}) {
  const content=copy[slug]||copy.services;
  const isDestinations=slug==='destinations'; const isJournal=slug==='journal'||slug==='news';
  return <><Hero {...content}/><main>
    <section className="wrap section intro-center"><p className="eyebrow">{isDestinations?'Explore the world':isJournal?'Latest stories':'The Veirakas approach'}</p><h2>{isDestinations?'Where the extraordinary begins.':isJournal?'Private travel, considered.':'Travel should feel personal.'}</h2><p>{isDestinations?'From the familiar to the farthest reaches, every destination is arranged around the way you want to travel.':isJournal?'A curated perspective on remarkable places, private aviation and the future of travel.':'Your concierge understands your preferences and manages every moving part with quiet precision.'}</p></section>
    {isDestinations ? <section className="wrap section destination-grid full-grid">{destinations.concat([['Paris','monaco','Europe'],['Singapore','maldives','Asia'],['Geneva','polynesia','Europe'],['London','dubai','Europe']]).map(([title,img])=><ImageCard key={title} title={title} img={img} href={'/contact?destination='+encodeURIComponent(title)} small/>)}</section> : <>
      <section className="wrap service-grid">{features.map(([title,desc],i)=><article key={title} className="service-tile"><img src={`/images/${['jet','yacht','island','conversation'][i]}.webp`} alt=""/><div><p className="eyebrow">{String(i+1).padStart(2,'0')}</p><h3>{title}</h3><p>{desc}</p><ButtonLink href="/contact">Explore</ButtonLink></div></article>)}</section>
      <section className="wrap section dark-panel"><div><p className="eyebrow">Global by nature</p><h2>Personal by design.</h2><p>With a worldwide network of specialists and local partners, our team can coordinate each part of your journey in one conversation.</p><ButtonLink href="/contact">Start your request</ButtonLink></div><img src="/images/map-hq.jpg" alt="Global Veirakas travel network"/></section>
    </>}
  </main><Footer/></>
}

export default function Page({params}:{params:Promise<{slug:string}>}) {
  const { slug } = use(params);
  if (slug === 'request' || slug === 'quote' || slug === 'request-a-quote') return <ContactPage />;
  if (slug === 'about') return <AboutPage />;
  if (slug === 'contact' || slug === 'contact-us') return <ContactPage />;
  if (LEGAL_SLUG_MAP[slug]) return <LegalPage currentKey={LEGAL_SLUG_MAP[slug]} />;
  return <StandardPage slug={slug} />;
}
