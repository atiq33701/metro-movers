import { Landing, meta } from "../../components/Shared";

export const metadata = meta(
  "Office Movers Bombay | Commercial Relocations | Metro Movers",
  "Metro Movers provides office moving and commercial relocation services across Bombay. Move desks, office furniture, equipment and stock with a quote based on your requirements.",
  "/office-movers",
  "/img/photos/6.jpeg"
);

const d = {
  eyebrow: "Office & Commercial Moving Bombay",
  title: "Office Movers & Commercial Relocations in Bombay",
  lead: "Moving an office, shop or workplace? Metro Movers provides office and commercial moving services across Bombay for desks, furniture, equipment and stock.",
  bullets: [
    "Office furniture and equipment moving",
    "Desks, workstations and shelving can be included",
    "Moving plans based on your locations and requirements",
    "Quote prepared around the size and details of your move",
  ],
  image: "/img/photos/6.jpeg",
  imageAlt: "Metro Movers office moving service in Bombay",
  cta2: "WhatsApp +64 22 687 1426",
  servicesTitle: "What's included",
  services: [
    ["Moving plan", "We consider your pickup and delivery locations, office size, access and the items that need to be moved."],
    ["Office furniture", "Desks, chairs, shelving, cabinets and other workplace furniture can be included in your moving requirements."],
    ["Equipment protection", "Tell us about computers, printers, machines or other equipment that requires additional care or handling."],
    ["Workplace placement", "Provide your preferred room or workstation arrangement so the moving requirements can be planned accordingly."],
    ["Stock and supplies", "Office stock, boxes, supplies and other workplace items can be included in the moving enquiry."],
    ["Additional requirements", "Let us know about stairs, lifts, parking, loading areas or large items before your move is quoted."],
  ],
  priceTitle: "Office moving quotes",
  priceText:
    "Every commercial move has different requirements. Metro Movers can prepare a quote based on your office size, locations, access and items.",
  priceLink: ["/pricing", "See pricing information"],
  priceList: [
    "Office size and volume considered",
    "Pickup and delivery locations considered",
    "Stairs, lifts and access considered",
    "Large or difficult-to-handle items can be discussed",
    "Additional requirements can be included in the enquiry",
    "Custom quote based on your move",
  ],
  stepsTitle: "How it works",
  steps: [
    ["Share your details", "Send your pickup and delivery addresses, preferred date, office size and details of the items being moved."],
    ["Review the requirements", "We consider access, stairs, lifts, parking and any large or specialised items involved in the relocation."],
    ["Receive your quote", "Metro Movers provides a quote based on the information and requirements you provide."],
    ["Arrange the move", "Once the details are agreed, arrange your office relocation with Metro Movers."],
  ],
  reviewsTitle: "What customers say",
  reviews: [
    ["The guys were legends! Bench top was far heavier than I was told, this wasn't a problem, they strapped on their weight belts and got it done. They even wanted to sweep up!", "Daniel", "Bombay · Storage move"],
    ["Very professional service. The communication and customisation was superior so it was worth it to pay a little more. Moving is stressful enough without mover surprises.", "Chris", "Bombay · 2 bedroom apartment move"],
    ["Extremely efficient bunch of guys. Had our 2 bedroom apartment moved swiftly. Awesome communication and customer service.", "Fumi", "Bombay · 2 bedroom apartment move"],
  ],
  faqTitle: "Frequently asked questions",
  faqs: [
    ["How much does an office move cost in Bombay?", "The cost depends on the office size, locations, access, parking, stairs, equipment and other requirements. Contact Metro Movers for a quote based on your move."],
    ["Can you move office furniture?", "Yes. Desks, chairs, cabinets, shelving and other office furniture can be included in your moving enquiry."],
    ["Can you move office equipment?", "Yes. Tell us what equipment needs moving and whether any special handling or access requirements apply."],
    ["Can you move an office after hours?", "If you require a move outside normal business hours, mention your preferred timing when requesting a quote so availability can be confirmed."],
    ["Can you move an office to another part of Bombay?", "Yes. Provide both addresses and the details of the office move when requesting your quote."],
  ],
  areaTitle: "Office moving across Bombay",
  areaText: "Metro Movers is Bombay based and provides moving services for offices and businesses across Bombay.",
  chips: ["Bombay", "North Shore", "West Bombay", "South Bombay", "East Bombay", "Central Bombay"],
  ctaTitle: "Planning an office move?",
  ctaText: "Send your office details and both addresses for a moving quote, or contact Metro Movers through WhatsApp.",
  serviceType: "Office relocation",
  serviceName: "Office Movers & Commercial Relocations in Bombay",
  serviceDescription:
    "Metro Movers provides office moving and commercial relocation services across Bombay for desks, furniture, equipment and stock.",
  serviceArea: "Bombay",
};

export default function Page() {
  return <Landing d={d} />;
}
