
import { Landing, meta } from "../../components/Shared";

export const metadata = meta(
  "Metro Movers | House & Office Moving Services Auckland",
  "Metro Movers provides house, apartment and office moving services across Auckland. Get a moving quote based on your addresses and requirements.",
  "/moving-services",
  "/img/photos/16.jpeg"
);

const d = {
  eyebrow: "Metro Movers Auckland",
  title: "Metro Movers & Moving Services",
  lead: "Metro Movers provides moving services for homes, apartments and offices across Auckland. Share your pickup and delivery locations with us and we can prepare a quote for your move.",
  bullets: [
    "House and apartment moving",
    "Office and commercial moving",
    "Moving services across Auckland",
    "Quotes based on your specific moving requirements",
  ],
  image: "/img/photos/16.jpeg",
  imageAlt: "Metro Movers moving service in Auckland",
  cta2: "WhatsApp +64 22 687 1426",
  servicesTitle: "Moving services",
  services: [
    ["House moving", "Moving services for households relocating between homes across Auckland."],
    ["Apartment moving", "Moving services for apartments and other residential properties. Let us know about lifts, stairs and access."],
    ["Office moving", "Relocation services for desks, office furniture, equipment and workplace items."],
    ["Small moves", "Smaller moving enquiries can be considered. Tell us what you need moved and where it needs to go."],
    ["Furniture moving", "Furniture and household items can be included in your moving enquiry."],
    ["Auckland relocations", "Moving between different Auckland locations with a quote based on your addresses and requirements."],
  ],
  priceTitle: "Moving quotes",
  priceText:
    "Moving costs depend on the amount being moved, distance, property access and other requirements. Send us your details for a quote.",
  priceLink: ["/pricing", "See pricing information"],
  priceList: [
    "Move size and volume",
    "Pickup and delivery locations",
    "Stairs, lifts and property access",
    "Parking and vehicle access",
    "Large or heavy items",
    "Additional moving requirements",
  ],
  stepsTitle: "How it works",
  steps: [
    ["Send your details", "Provide your pickup and delivery addresses, preferred date, move size and details of anything large or difficult to access."],
    ["Get a quote", "Metro Movers reviews your moving requirements and prepares a quote based on the information provided."],
    ["Confirm the move", "Once the moving details and requirements are agreed, arrange your booking with Metro Movers."],
    ["Move day", "The team carries out the move according to the confirmed requirements."],
  ],
  reviewsTitle: "What customers say",
  reviews: [
    ["Vincent and his team were great! Very efficient and took extra care with everything. They wrapped drawers and such with cling wrap and had blankets for the more delicate things.", "Ethan", "Bombay · 3 bedroom house move"],
    ["Clear communication, happy to adjust the booking for me and got everything where it needed to be with no problems. Highly recommend, they made it super easy!", "McKenzie", "Bombay · 1 bedroom apartment move"],
    ["Extremely efficient bunch of guys. Had our 2 bedroom apartment moved swiftly. Awesome communication and customer service.", "Fumi", "Bombay · 2 bedroom apartment move"],
  ],
  faqTitle: "Frequently asked questions",
  faqs: [
    ["Which areas of Auckland do you cover?", "Metro Movers provides moving services across Auckland. Send your pickup and delivery addresses to confirm your moving requirements."],
    ["Do you move houses and apartments?", "Yes. House and apartment moves can be quoted based on the size of the move, locations, access and other requirements."],
    ["Do you handle small moves?", "Small moving enquiries can be considered. Tell Metro Movers what needs to be moved and provide the pickup and delivery locations for a quote."],
    ["Can you move office furniture?", "Yes. Metro Movers provides office and commercial moving services for desks, furniture, equipment and other workplace items."],
    ["Can you move items between different parts of Auckland?", "Yes. Provide both addresses, your preferred date and the details of what needs moving so Metro Movers can prepare a quote."],
  ],
  areaTitle: "Auckland areas we serve",
  areaText: "Metro Movers provides moving services across Auckland. Contact us with your pickup and delivery locations to discuss your move.",
  chips: ["Auckland", "Pukekohe", "Papakura", "Manukau", "South Auckland", "Central Auckland", "West Auckland", "North Shore", "East Auckland"],
  ctaTitle: "Planning a move in Auckland?",
  ctaText: "Send your moving details for a quote, or contact Metro Movers directly through WhatsApp.",
  serviceType: "Moving service",
  serviceName: "Auckland Moving Services",
  serviceDescription: "Metro Movers provides house, apartment and office moving services across Auckland.",
  serviceArea: "Auckland",
};

export default function Page() {
  return <Landing d={d} />;
}
