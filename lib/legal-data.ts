export interface LegalSection {
  number?: string;
  title: string;
  content?: string;
  list?: string[];
  note?: string;
}

export interface LegalDocument {
  slug: string;
  title: string;
  shortTitle: string;
  venture: string;
  lastUpdated: string;
  intro?: string[];
  sections: LegalSection[];
}

export const LEGAL_DOCUMENTS: Record<string, LegalDocument> = {
  'privacy': {
    slug: 'privacy',
    title: 'Privacy Policy',
    shortTitle: 'Privacy Policy',
    venture: 'Veirakas Private Travel · A Venture of Celebso Group',
    lastUpdated: '22 September 2026',
    intro: [
      'Veirakas Private Travel (“Veirakas”, “we”, “us”, or “our”) is a private travel and concierge venture operated under Celebso Group.',
      'We respect your privacy and are committed to protecting the personal information you provide while using our website, requesting a private quote, communicating with our team, or using our travel and concierge services.'
    ],
    sections: [
      {
        number: '01',
        title: 'Information We Collect',
        content: 'We may collect the following personal and travel information:',
        list: [
          'Name',
          'Email address',
          'Phone or WhatsApp number',
          'Country and city of residence',
          'Travel dates',
          'Destination preferences',
          'Number of travellers',
          'Accommodation preferences',
          'Transportation preferences',
          'Dining and experience preferences',
          'Special travel requirements',
          'Information provided through enquiry or quote forms',
          'Passport, visa or identification information where required to arrange travel services',
          'Information contained in communications with our team'
        ]
      },
      {
        number: '02',
        title: 'Automatically Collected Information',
        content: 'When you visit our website, certain technical information may be collected, including IP address, browser type, device information, pages visited, approximate location, access time and website usage information.',
        note: 'We may use cookies and analytics technologies for website functionality, security and improvement.'
      },
      {
        number: '03',
        title: 'How We Use Your Information',
        content: 'We may use your information to:',
        list: [
          'Respond to enquiries',
          'Prepare private travel proposals',
          'Create personalised itineraries',
          'Arrange travel, accommodation and experiences',
          'Coordinate transportation and concierge services',
          'Communicate regarding your booking',
          'Process payments',
          'Improve our services and website',
          'Maintain security',
          'Comply with applicable legal requirements'
        ]
      },
      {
        number: '04',
        title: 'Private Travel Information',
        content: 'Because Veirakas provides personalised travel services, clients may voluntarily provide information concerning their preferences, schedules, companions and special requirements. Such information will be used only as reasonably necessary to provide the requested service.'
      },
      {
        number: '05',
        title: 'Sharing of Information',
        content: 'Veirakas does not sell or rent your personal information. Where necessary to provide your requested services, relevant information may be shared with:',
        list: [
          'Hotels and resorts',
          'Airlines',
          'Chauffeur and transportation providers',
          'Destination-management companies',
          'Restaurants and experience providers',
          'Travel and concierge partners',
          'Payment processors',
          'Technology and communication providers'
        ],
        note: 'Information may also be disclosed where required by applicable law or lawful governmental authority.'
      },
      {
        number: '06',
        title: 'International Travel',
        content: 'For international travel, relevant information may need to be shared with service providers located outside India in order to arrange the requested travel services.'
      },
      {
        number: '07',
        title: 'Data Security',
        content: 'We use reasonable technical and organisational measures to protect personal information from unauthorised access, misuse, loss or disclosure. However, no online system can be guaranteed to be completely secure.'
      },
      {
        number: '08',
        title: 'Data Retention',
        content: 'We retain personal information for as long as reasonably necessary to provide services, maintain business records, resolve disputes and comply with applicable legal obligations.'
      },
      {
        number: '09',
        title: 'Your Rights',
        content: 'Subject to applicable law, you may request access to, correction of, or deletion of applicable personal information and may withdraw consent where processing is based on consent. Privacy-related requests may be submitted using the contact details below.'
      },
      {
        number: '10',
        title: 'Third-Party Websites',
        content: 'Our website may contain links to third-party websites. Veirakas is not responsible for the privacy practices of websites outside our control.'
      },
      {
        number: '11',
        title: 'Marketing',
        content: 'Where applicable, Veirakas may send information about destinations, experiences, services or private invitations. You may request to stop receiving marketing communications at any time.'
      },
      {
        number: '12',
        title: 'Changes',
        content: 'We may update this Privacy Policy from time to time. The updated version will be published on this page with a revised date.'
      },
      {
        number: '13',
        title: 'Contact',
        content: 'For privacy inquiries, rights requests, or questions regarding this policy, please reach out to our dedicated concierge team at Veirakas Private Travel, A Venture of Celebso Group.'
      }
    ]
  },

  'payment-terms': {
    slug: 'payment-terms',
    title: 'Payment Terms',
    shortTitle: 'Payment Terms',
    venture: 'Veirakas Private Travel · A Venture of Celebso Group',
    lastUpdated: '22 September 2026',
    intro: [
      'These Payment Terms govern all quotes, bookings, deposits, and financial transactions arranged through Veirakas Private Travel, a venture operated under Celebso Group.'
    ],
    sections: [
      {
        number: '01',
        title: 'Quotes & Pricing',
        content: 'All quotations are based on the destination, dates, services, availability and requirements specified at the time of quotation. Prices are subject to change until the booking is confirmed.'
      },
      {
        number: '02',
        title: 'Booking Confirmation',
        content: 'A booking is confirmed only after the required payment has been received and Veirakas has provided written confirmation. A quotation or proposed itinerary does not itself guarantee availability.'
      },
      {
        number: '03',
        title: 'Advance Payment',
        content: 'Depending on the trip and service providers, Veirakas may require an advance payment or full payment before confirming arrangements. The applicable amount and payment deadline will be communicated in the quotation or booking confirmation.'
      },
      {
        number: '04',
        title: 'Balance Payment',
        content: 'Where a balance remains payable, it must be received by the deadline specified in the booking confirmation. Failure to make payment by the deadline may result in cancellation or release of reservations.'
      },
      {
        number: '05',
        title: 'Payment Methods',
        content: 'Accepted payment methods may include:',
        list: [
          'Bank transfer',
          'UPI',
          'Credit / debit card',
          'Online payment gateway',
          'Other payment methods approved by Veirakas'
        ],
        note: 'Any applicable transaction or processing charges will be communicated where relevant.'
      },
      {
        number: '06',
        title: 'Third-Party Supplier Terms',
        content: 'Hotels, airlines, transportation companies and other suppliers may have their own payment conditions. Those conditions may apply to the relevant booking.'
      },
      {
        number: '07',
        title: 'Currency',
        content: 'Prices may be quoted in INR or another applicable currency. International transactions may be affected by exchange-rate fluctuations, bank charges and payment-processing charges.'
      },
      {
        number: '08',
        title: 'Taxes & Additional Charges',
        content: 'Applicable taxes, government charges, service charges, visa fees, destination charges and other mandatory costs will be communicated in the quotation where applicable.'
      },
      {
        number: '09',
        title: 'Payment Default',
        content: 'If the required payment is not received within the specified period, Veirakas may cancel or release the reservation, subject to the applicable booking conditions.'
      },
      {
        number: '10',
        title: 'Payment Security',
        content: 'Payment information may be processed through third-party payment providers. Their respective terms and privacy policies may also apply.'
      }
    ]
  },

  'cancellation-refund': {
    slug: 'cancellation-refund',
    title: 'Cancellation & Refund Policy',
    shortTitle: 'Cancellation & Refund',
    venture: 'Veirakas Private Travel · A Venture of Celebso Group',
    lastUpdated: '22 September 2026',
    intro: [
      'This Cancellation & Refund Policy outlines the terms and procedures for cancellations, modifications, and refund eligibility for journeys arranged with Veirakas Private Travel.'
    ],
    sections: [
      {
        number: '01',
        title: 'Cancellation',
        content: 'Cancellation requests must be submitted to Veirakas in writing through the official communication channel provided in the booking confirmation.'
      },
      {
        number: '02',
        title: 'Supplier Cancellation Conditions',
        content: 'Cancellation and refund eligibility depend on the terms applicable to the individual services booked. These may include:',
        list: [
          'Hotels & luxury villas',
          'Airlines & private aviation charters',
          'Chauffeur & transportation services',
          'Tours & bespoke excursions',
          'Private culinary & dining experiences',
          'Destination-management services',
          'Other bespoke travel suppliers'
        ]
      },
      {
        number: '03',
        title: 'Non-Refundable Services',
        content: 'Certain bookings may be non-refundable, including selected:',
        list: [
          'Luxury accommodations',
          'Private aviation arrangements',
          'Exclusive experiences',
          'Special-event arrangements',
          'Advance-purchase services'
        ],
        note: 'Where a service is non-refundable, this will be communicated where applicable before confirmation.'
      },
      {
        number: '04',
        title: 'Refunds',
        content: 'Where a refund is available, the refundable amount will be determined after applicable supplier cancellation charges, taxes, processing fees and other non-refundable costs have been deducted.'
      },
      {
        number: '05',
        title: 'Changes to Bookings',
        content: 'Requests to change travel dates, destinations, accommodation or other arrangements may result in additional charges and are subject to availability.'
      },
      {
        number: '06',
        title: 'No-Show',
        content: 'Failure to use a confirmed service without prior cancellation may be treated as a no-show and may result in the applicable service being non-refundable.'
      },
      {
        number: '07',
        title: 'Force Majeure',
        content: 'Veirakas will not be responsible for losses arising from circumstances beyond its reasonable control, including natural disasters, severe weather, government restrictions, war, civil unrest, strikes, epidemics, transportation disruptions or other extraordinary events.',
        note: 'Where possible, Veirakas will assist clients in communicating with relevant suppliers regarding available alternatives.'
      },
      {
        number: '08',
        title: 'Refund Processing',
        content: 'Where a refund is approved, the processing timeline may depend on the relevant supplier and payment provider.'
      }
    ]
  },

  'terms': {
    slug: 'terms',
    title: 'Terms & Conditions',
    shortTitle: 'Terms & Conditions',
    venture: 'Veirakas Private Travel · A Venture of Celebso Group',
    lastUpdated: '22 September 2026',
    intro: [
      'Please read these Terms & Conditions carefully before using our website or engaging the bespoke travel and concierge services of Veirakas Private Travel.'
    ],
    sections: [
      {
        number: '01',
        title: 'About Veirakas',
        content: 'Veirakas Private Travel is a private travel and concierge venture operated under Celebso Group. We provide personalised travel planning, travel coordination, experiences and concierge-related services.'
      },
      {
        number: '02',
        title: 'Enquiries & Proposals',
        content: 'Information presented through the website, including destinations, experiences and indicative travel concepts, is for informational purposes unless specifically confirmed by Veirakas. Availability and pricing are not guaranteed until confirmed in writing.'
      },
      {
        number: '03',
        title: 'Client Responsibility',
        content: 'Clients are responsible for providing accurate information required for their travel arrangements. Clients are also responsible for ensuring that they possess valid:',
        list: [
          'Passports with requisite validity',
          'Visas and entry permits',
          'Travel documents and tickets',
          'Health-related travel documents where required',
          'Other documents required by the destination or service provider'
        ]
      },
      {
        number: '04',
        title: 'Third-Party Services',
        content: 'Veirakas may coordinate services provided by independent third parties. Such providers may have their own terms, conditions, cancellation policies and requirements.'
      },
      {
        number: '05',
        title: 'Travel Documents',
        content: 'Clients are responsible for ensuring that their travel documentation remains valid and meets the requirements of the destination. Veirakas may assist with information or coordination but does not guarantee visa approval or entry into any country.'
      },
      {
        number: '06',
        title: 'Changes & Availability',
        content: 'Travel arrangements are subject to availability. Airlines, hotels, transportation providers and experience operators may change schedules, availability or conditions. Veirakas may assist in arranging reasonable alternatives where possible.'
      },
      {
        number: '07',
        title: 'Client Conduct',
        content: 'Clients are expected to comply with applicable laws, property rules, hotel policies, transportation requirements and supplier terms during their travel.'
      },
      {
        number: '08',
        title: 'Limitation of Liability',
        content: 'To the extent permitted by applicable law, Veirakas is not responsible for losses arising from the acts, omissions, delays, cancellations or failures of independent third-party service providers. Nothing in these Terms excludes liability that cannot legally be excluded.'
      },
      {
        number: '09',
        title: 'Intellectual Property',
        content: 'The Veirakas website, branding, written content, imagery, graphics and other materials are owned by or licensed to Veirakas/Celebso Group unless otherwise stated. They may not be reproduced or commercially used without prior written permission.'
      },
      {
        number: '10',
        title: 'Website Use',
        content: 'Users must not misuse the website, attempt unauthorised access, introduce malicious code, interfere with website functionality or use website content for unlawful purposes.'
      },
      {
        number: '11',
        title: 'Governing Law',
        content: 'These Terms shall be governed by and construed in accordance with the applicable laws of India.'
      },
      {
        number: '12',
        title: 'Changes',
        content: 'Veirakas may update these Terms from time to time. The latest version published on the website will apply to future interactions and bookings.'
      },
      {
        number: '13',
        title: 'Contact',
        content: 'For inquiries regarding these Terms & Conditions, please contact Veirakas Private Travel, A Venture of Celebso Group.'
      }
    ]
  },

  'cookie-policy': {
    slug: 'cookie-policy',
    title: 'Cookie Policy',
    shortTitle: 'Cookie Policy',
    venture: 'Veirakas Private Travel · A Venture of Celebso Group',
    lastUpdated: '22 September 2026',
    intro: [
      'Veirakas Private Travel may use cookies and similar technologies on its website to enhance performance, ensure security, and deliver an elevated browsing experience.'
    ],
    sections: [
      {
        number: '01',
        title: 'What Are Cookies?',
        content: 'Cookies are small files stored on your device when you visit a website. They can help websites remember preferences, operate correctly and understand how visitors use the website.'
      },
      {
        number: '02',
        title: 'How We Use Cookies',
        content: 'We may use cookies for:',
        list: [
          'Essential website functionality',
          'Security & threat prevention',
          'Website performance & optimization',
          'Analytics & traffic insights',
          'Understanding website traffic patterns',
          'Remembering user preferences',
          'Improving overall user experience'
        ]
      },
      {
        number: '03',
        title: 'Third-Party Cookies',
        content: 'Some third-party services used on our website may place their own cookies or similar technologies. These may include analytics, payment, embedded-content or other technology providers. Their own privacy policies may apply.'
      },
      {
        number: '04',
        title: 'Managing Cookies',
        content: 'You can control or disable cookies through your browser settings. Please note that disabling certain cookies may affect some website functionality.'
      },
      {
        number: '05',
        title: 'Updates',
        content: 'We may update this Cookie Policy when our website, technology or use of cookies changes. The revised date will always be reflected on this page.'
      }
    ]
  }
};

// Aliases for friendly routing
export const LEGAL_SLUG_MAP: Record<string, string> = {
  'privacy': 'privacy',
  'privacy-policy': 'privacy',
  'payment-terms': 'payment-terms',
  'cancellation-refund': 'cancellation-refund',
  'cancellation-and-refund-policy': 'cancellation-refund',
  'terms': 'terms',
  'terms-and-conditions': 'terms',
  'terms-conditions': 'terms',
  'cookie-policy': 'cookie-policy',
  'cookies': 'cookie-policy',
};
