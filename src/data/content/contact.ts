export const CONTACT_PAGE_CONTENT = {
  hero: {
    title: "Contact",
    intro:
      "We believe that public finance is a public contract. Reach out to collaborate, report, or bring budget literacy to your community.",
  },
  details: {
    emailLabel: "Email",
    email: "info@budgetndiostory.org",
    emailHref: "mailto:info@budgetndiostory.org",
    phoneLabel: "Phone",
    phone: "+254 790 631 623",
    phoneHref: "tel:+254790631623",
    addressLabel: "Address",
    address: "Nairobi Civic Media Hub, Kenya",
    hoursLabel: "Office hours",
    hours: "Monday to Friday: 8:30 AM – 5:30 PM EAT",
  },
  social: {
    label: "Follow us:",
    links: [
      { label: "𝕏", href: "https://x.com/budgetndiostory" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/budget-ndio-story/",
      },
      { label: "Instagram", href: "https://instagram.com/budgetndiostory" },
      { label: "Facebook", href: "https://www.facebook.com/share/1CPg2LgfVJ/" },
      { label: "WhatsApp", href: "https://wa.me/254790631623" },
    ],
  },
  success: {
    title: "Email Draft Opened",
    body: "Your email application should open with this inquiry prepared. If it did not open, send the message directly to info@budgetndiostory.org.",
    resetLabel: "Send Another Message",
  },
  form: {
    nameLabel: "Name",
    namePlaceholder: "Jane Wanjiku",
    emailLabel: "Email",
    emailPlaceholder: "info@budgetndiostory.org",
    serviceLabel: "Civic Initiative / Pillar",
    servicePlaceholder: "Select initiative",
    serviceOptions: [
      {
        value: "connect",
        label: "BNS Connect (Town Halls & Legislative Dialogues)",
      },
      {
        value: "mashinani",
        label: "BNS Mashinani (Grassroots & Ward Budget Audits)",
      },
      {
        value: "wanahabari",
        label: "BNS Wanahabari (Journalism Grants & Fellowships)",
      },
      {
        value: "studio",
        label: "BNS Studio (Docuseries, Podcasts & Explainers)",
      },
      {
        value: "whistleblower",
        label: "Whistleblower Tip & Document Submission",
      },
      {
        value: "partnership",
        label: "General Civic Partnership & Research",
      },
    ],
    selectIndicator: "▼",
    messageLabel: "Message / Tip Details",
    messagePlaceholder: "Share your inquiry, community issue, or tip...",
    submitLabel: "Send Message",
    consentLead: "By submitting, you agree to our",
    termsLabel: "Terms",
    consentJoin: "and",
    privacyLabel: "Privacy policy",
    consentEnd: ".",
  },
  email: {
    recipient: "info@budgetndiostory.org",
    subjectPrefix: "BNS inquiry: ",
    defaultSubject: "BNS civic inquiry",
    nameLine: "Name: ",
    emailLine: "Email: ",
    initiativeLine: "Initiative: ",
    initiativeFallback: "Not specified",
  },
};
