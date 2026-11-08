
import { Landing, meta } from "../../components/Shared";

export const metadata = meta(
  "Piano Movers Auckland | Upright & Grand Piano Moving | Metro Mover",
  "Piano moving services in Auckland from Metro Mover. Upright, grand and digital pianos moved with careful planning. Tell us about your piano and access for a quote.",
  "/piano-movers",
  "/img/photos/15.jpeg"
);

const d = {
  eyebrow: "Piano Moving Auckland",
  title: "Piano Movers in Auckland",
  lead: "Moving a piano? Metro Mover can help move upright, grand and digital pianos between homes, venues and storage. Tell us about your piano, the stairs and the access at both addresses so your move can be planned properly.",
  bullets: [
    "Upright, grand and digital piano moving",
    "Planning around stairs, narrow doorways and tight corners",
    "Careful handling and protection during loading and transport",
    "Quote based on your piano and your pickup and delivery locations",
  ],
  image: "/img/photos/15.jpeg",
  imageAlt: "Metro Mover piano moving service in Auckland",
  cta2: "WhatsApp Us",
  trust: [
    ["Upright", "Upright pianos"],
    ["Grand", "Grand pianos"],
    ["Digital", "Digital pianos"],
    ["Custom", "Piano moving quotes"],
  ],
  servicesTitle: "Piano Moving Services",
  services: [
    ["Upright Pianos", "Moving upright pianos between rooms, homes, schools and venues. Let us know the size and where it is currently placed."],
    ["Grand & Baby Grand Pianos", "Grand pianos are larger and need more planning. Tell us the type of piano and the access at both properties so the move can be reviewed."],
    ["Digital Pianos & Keyboards", "Digital pianos, stage pianos and keyboards can be included in your enquiry, along with stands and benches."],
    ["Stairs & Difficult Access", "Stairs, narrow hallways, tight turns and steep driveways all affect a piano move, so describe the access at both addresses."],
    ["Protection During the Move", "Tell us about the piano's finish and condition so the right care can be discussed before moving day."],
    ["Moving With Your Home", "Moving house as well? Include the piano in your house moving quote so everything can be planned as one move."],
  ],
  priceTitle: "Piano moving quotes",
  priceText:
    "Every piano move is different. The quote can depend on the type and size of the piano, locations and the access at both properties. Send us the details for a quote.",
  priceLink: ["/pricing", "See full pricing"],
  priceList: [
    "Type and size of the piano",
    "Pickup and delivery locations",
    "Stairs, steps and narrow access",
    "Parking and distance from the property to the vehicle",
    "Whether the piano is moving on its own or with a full house move",
    "Any additional requirements you mention in advance",
  ],
  stepsTitle: "How piano moving works",
  steps: [
    ["Tell us about the piano", "Send the type of piano, its brand or size if you know it, and where it is currently located."],
    ["Describe the access", "Let us know about stairs, steps, narrow doorways, tight corners and parking at both addresses."],
    ["Review your quote", "Metro Mover reviews the details and prepares a quote based on your piano and your move."],
    ["Confirm the move", "Once the details and date are agreed, arrange your piano move with Metro Mover."],
  ],
  reviewsTitle: "What customers say",
  reviews: [
    ["Very professional service. The communication and customisation was superior so it was worth it to pay a little more. Moving is stressful enough without mover surprises.", "Chris", "Auckland · 2 bedroom apartment move"],
    ["The guys were legends! Bench top was far heavier than I was told, this wasn't a problem, they strapped on their weight belts and got it done.", "Daniel", "Auckland · Storage move"],
    ["Vincent and his team were great! Very efficient and took extra care with everything. Would definitely recommend and will use again!", "Ethan", "Auckland · 3 bedroom house move"],
  ],
  faqTitle: "Frequently asked questions",
  faqs: [
    ["How much does it cost to move a piano in Auckland?", "The cost depends on the type and size of the piano, the pickup and delivery locations and the access at both properties. Contact Metro Mover with your details to request a quote."],
    ["Can you move a grand piano?", "Grand and baby grand pianos can be included in your enquiry. Tell us the type of piano and the access at both addresses so the move can be reviewed before it is quoted."],
    ["Can you move a piano up or down stairs?", "Stairs can be discussed as part of your quote. Describe how many steps there are, whether there are turns or landings, and the width of the access."],
    ["Do I need to tune my piano after it is moved?", "Pianos often need tuning after a move because of changes in position and conditions. A piano technician can advise on the best time to have it tuned."],
    ["Can the piano be moved as part of a house move?", "Yes. Mention the piano when requesting your house moving quote so it can be planned with the rest of your belongings."],
  ],
  areaTitle: "Piano movers in Auckland",
  areaText:
    "Metro Mover is Auckland based. Contact us about moving your piano within Auckland or to another location in New Zealand.",
  chips: ["Auckland", "Piano Moving", "Upright Pianos", "Grand Pianos", "Digital Pianos", "Furniture Moving", "House Moving", "Metro Mover", "New Zealand"],
  ctaTitle: "Need to move a piano?",
  ctaText: "Send your piano details, both addresses and your preferred date to request a quote.",
  serviceType: "Piano moving",
  serviceName: "Piano Movers in Auckland",
  serviceDescription: "Piano moving services in Auckland from Metro Mover.",
  serviceArea: "Auckland",
};

export default function Page() {
  return <Landing d={d} />;
}
