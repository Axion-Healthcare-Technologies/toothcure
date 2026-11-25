// ONE place to edit everything: text, links, contact details, treatments. Save and the site updates.
// Anything marked TODO is a placeholder: replace it with the clinic's real details before launch.

export const site = {
  brand: "Tooth Cure Dental Orthodontics & Implant center",
  short: "Tooth Cure Dental",
  tagline: "DENTAL & AESTHETIC CARE",
  url: "https://example.com", // TODO: real domain. Also set `site` in astro.config.mjs
  contact: {
    phone: "+8801324571177", // used for tel: links
    phoneDisplay: "01324571177", // how the number is shown on the page
    whatsappNumber: "8801324571177", // digits only, with country code (no + or spaces)
    address: "Dhaka", // full street address can be added here if wanted
    mapQuery: "23.7556801,90.3726754", // clinic pin (from the Google Maps link), used for the embed
    mapLink: "https://maps.app.goo.gl/GweKTTtQoFtX3brF7",
    days: "Sat–Thu",
    hours: "5:00–9:00 PM",
  },
  seo: {
    title: "Tooth Cure Dental Orthodontics & Implant center | Dentist in Dhaka",
    ogTitle: "Tooth Cure Dental Orthodontics & Implant center | Dhaka",
    description:
      "Tooth Cure Dental Orthodontics & Implant center in Dhaka. Dental implants, clear aligners, laser root canal and smile makeover consultations. Book on WhatsApp or call the clinic.",
    ogDescription:
      "Dental implants, clear aligners, laser root canal and smile makeovers in Dhaka. Book a consultation on WhatsApp.",
    schemaDescription:
      "Private dental and aesthetic care clinic in Dhaka offering implants, clear aligners, laser root canal and smile makeovers.",
  },
  whatsapp: {
    general:
      "Hello Tooth Cure Dental Orthodontics & Implant center, I would like to book a dental consultation in Dhaka. Please share the available appointment times.",
    // `{topic}` is replaced with the treatment's `topic` below.
    treatment:
      "Hello Tooth Cure Dental Orthodontics & Implant center, I’m interested in {topic}. I’d like to know the consultation process and available appointment times.",
  },
  nav: {
    callLabel: "Call Clinic",
    whatsappLabel: "WhatsApp",
    links: [
      { label: "Treatments", href: "/treatments/" },
      { label: "Doctor", href: "/#doctor" },
      { label: "Why Us", href: "/#why-us" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  hero: {
    badges: ["Dhaka", "BMDC Registered"],
    openBadge: "Open Sat–Thu evenings",
    eyebrow: "Dental & aesthetic care in Dhaka",
    headline: "A healthier smile starts with",
    phrases: ["a better consultation.", "gentle, modern care.", "a clear care plan.", "a confident smile."],
    text: "Modern dental and aesthetic treatments in a calm, patient-first clinic in Dhaka. Book a consultation on WhatsApp or call the clinic.",
    primary: "Book on WhatsApp",
    secondary: "Call Clinic",
    checks: ["Consultation-led treatment planning", "Appointment-focused care"],
    chip: { initials: "Dr", title: "Personal consultations", text: "Sat–Thu evenings · Dhaka" },
    card: { title: "Patient-first experience", text: "Comfortable consultations, clear treatment explanations and transparent next steps." },
    imageAlt: "Dentist examining a patient in a modern teal treatment room",
  },
  trust: [
    { icon: "✓", title: "BMDC Registered", text: "Licensed dental care" },
    { icon: "◈", title: "Modern Equipment", text: "Up-to-date clinical technology" },
    { icon: "৳", title: "Price Guidance", text: "Clear estimates before treatment" },
    { icon: "↗", title: "Easy Booking", text: "WhatsApp + phone" },
  ],
  treatments: {
    eyebrow: "Featured treatments",
    heading: "Focused care for the smile you want.",
    text: "Every treatment plan begins with an examination, so the advice you receive fits your teeth, your goals and your timeline.",
    items: [
      {
        title: "Dental Implants",
        text: "A consultation-led option for replacing missing teeth. Planning may include examination and diagnostic imaging before treatment.",
        topic: "Dental Implants",
        cta: "Ask about implants on WhatsApp",
      },
      {
        title: "Clear Aligners",
        text: "A discreet orthodontic option using a sequence of clear trays, subject to assessment and treatment planning.",
        topic: "Clear Aligners / Invisible Braces",
        cta: "Ask about aligners on WhatsApp",
      },
      {
        title: "Laser Root Canal",
        text: "Endodontic care designed around preserving a natural tooth when clinically appropriate. Your dentist will explain the approach after examining the tooth.",
        topic: "Laser Root Canal",
        cta: "Ask about root canal on WhatsApp",
      },
      {
        title: "Smile Makeover",
        text: "Aesthetic dentistry planning that may combine multiple procedures depending on your goals, oral health and clinical findings.",
        topic: "Smile Makeover / Cosmetic Dentistry",
        cta: "Ask about smile makeover",
      },
    ],
  },
  doctor: {
    eyebrow: "Meet your dentist",
    heading: "A dentist who explains before treating.",
    text: "Every visit starts with a conversation: your concerns, your history and what you would like to change. You will leave with clear options, honest advice and a practical next-step plan.",
    facts: [
      { label: "Registration", value: "BMDC registered dentist" },
      { label: "Consultation hours", value: "Sat–Thu · 5:00–9:00 PM" },
    ],
    cta: "Book a consultation",
    imageAlt: "Smiling dentist in a white coat standing in a bright clinic corridor",
  },
  why: {
    eyebrow: "The Tooth Cure approach",
    heading: "Why patients choose us",
    items: [
      { title: "Clear explanations", text: "You will understand your diagnosis, your options and the reasons behind each recommendation." },
      { title: "Comfort first", text: "A calm clinic setting and an unhurried pace, so every visit feels manageable." },
      { title: "Transparent planning", text: "Treatment steps and estimates are discussed after examination and before anything begins." },
      { title: "Easy follow-up", text: "Reach the clinic on WhatsApp or by phone for appointments and questions after your visit." },
    ],
  },
  steps: {
    eyebrow: "How it works",
    heading: "From first message to treatment plan.",
    items: [
      { title: "Message or call", text: "Tell the clinic what you would like to discuss and choose a time that suits you." },
      { title: "Consultation", text: "Your dentist listens, examines and explains what is going on, in plain language." },
      { title: "Your plan", text: "Agree the treatment steps and estimate, then begin only when you are comfortable." },
    ],
  },
  location: {
    eyebrow: "Find the clinic",
    heading: "Conveniently located in Dhaka.",
    text: "Message the clinic on WhatsApp to reserve a time before you visit, and use the map to plan your route.",
  },
  faq: {
    eyebrow: "Questions",
    heading: "Frequently asked questions",
    items: [
      { q: "Can I book through WhatsApp?", a: "Yes. Tap any WhatsApp button and a message with your treatment of interest is pre-filled for you. Send it and the clinic will reply with available appointment times." },
      { q: "Do I need an appointment?", a: "We recommend booking ahead so your dentist can give you proper time. Message or call the clinic to confirm availability." },
      { q: "What happens at the first consultation?", a: "Your dentist reviews your history, examines your teeth and explains the available options, so you can decide on next steps without pressure." },
      { q: "How much will treatment cost?", a: "Cost depends on the treatment and your examination. You will receive a clear estimate before any treatment begins." },
    ],
  },
  cta: {
    eyebrow: "Ready for a consultation?",
    heading: "Let's plan your next step.",
    text: "Tell the clinic what you'd like to discuss and the team will guide you to the right consultation.",
    textTreatments: "Tell the clinic what you'd like to discuss and the team can guide you toward the appropriate consultation.",
    primary: "Book on WhatsApp",
    secondary: "Call Clinic",
  },
  footer: {
    tagline: "Modern dental and aesthetic care in Dhaka.",
    disclaimer:
      "Website content is for general informational purposes and does not replace professional dental diagnosis or treatment. Treatment suitability, pricing, timelines and outcomes vary by patient and should be confirmed with a qualified dental professional.",
    copyright: "© 2026 Tooth Cure Dental Orthodontics & Implant center. All rights reserved.",
  },
};

/** WhatsApp link with a pre-filled message (defaults to the general booking message). */
export function waLink(message: string = site.whatsapp.general): string {
  return `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** WhatsApp link for one treatment. */
export function waTreatmentLink(topic: string): string {
  return waLink(site.whatsapp.treatment.replace("{topic}", topic));
}

export const telHref = `tel:${site.contact.phone}`;
