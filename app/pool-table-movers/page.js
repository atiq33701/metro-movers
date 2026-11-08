import { Landing, meta } from "../../components/Shared";

export const metadata = meta(
  "Pool Table Movers Bombay | Pool Table Moving | Metro Movers",
  "Pool table moving services in Bombay from Metro Movers. Heavy slate and full-size tables moved with careful planning. Tell us about your table and access for a quote.",
  "/pool-table-movers",
  "/img/photos/17.jpeg"
);

const d = {
  eyebrow: "Pool Table Moving Bombay",
  title: "Pool Table Movers in Bombay",
  lead: "Pool tables are heavy, bulky and awkward to move. Metro Movers can help move pool tables between homes, garages and venues. Tell us about your table, the room it is in and the access at both addresses so your move can be planned.",
  bullets: [
    "Pool table moving between homes, garages and venues",
    "Planning around heavy slate beds and large frames",
    "Stairs, narrow doorways and tight access discussed before the move",
    "Quote based on your table and your pickup and delivery locations",
  ],
  image: "/img/photos/17.jpeg",
  imageAlt: "Metro Movers pool table moving service in Bombay",
  cta2: "WhatsApp Us",
  trust: [
    ["Heavy", "Slate and large tables"],
    ["Planned", "Access reviewed first"],
    ["Home", "Homes and garages"],
    ["Custom", "Pool table quotes"],
  ],
  servicesTitle: "Pool Table Moving Services",
  services: [
    ["Full-Size Pool Tables", "Moving full-size tables between rooms, homes and venues. Tell us the size of the table and the room it is in."],
    ["Slate Bed Tables", "Slate tables are very heavy and need careful planning. Let us know the type of table so the weight and handling can be considered."],
    ["Smaller & Folding Tables", "Smaller, folding and multi-purpose tables can also be included in your moving enquiry."],
    ["Stairs & Difficult Access", "Stairs, narrow doorways, steep driveways and tight turns affect a pool table move, so describe the access at both addresses."],
    ["Accessories", "Cues, racks, balls, covers and other accessories can be included so everything arrives together."],
    ["Moving With Your Home", "Moving house as well? Include the pool table in your house moving quote so everything can be planned as one move."],
  ],
  priceTitle: "Pool table moving quotes",
  priceText:
    "Every pool table move is different. The quote can depend on the size and type of the table, locations and the access at both properties. Send us the details for a quote.",
  priceLink: ["/pricing", "See full pricing"],
  priceList: [
    "Size and type of the pool table",
    "Pickup and delivery locations",
    "Stairs, steps and narrow access",
    "Parking and distance from the property to the vehicle",
    "Whether you need help with the table at the new location",
    "Any additional requirements you mention in advance",
  ],
  stepsTitle: "How pool table moving works",
  steps: [
    ["Tell us about the table", "Send the size and type of your table, and the room it is currently in."],
    ["Describe the access", "Let us know about stairs, doorways, corridors and parking at both addresses."],
    ["Review your quote", "Metro Movers reviews the details and prepares a quote based on your table and your move."],
    ["Confirm the move", "Once the details and date are agreed, arrange your pool table move with Metro Movers."],
  ],
  reviewsTitle: "What customers say",
  reviews: [
    ["The guys were legends! Bench top was far heavier than I was told, this wasn't a problem, they strapped on their weight belts and got it done. They even wanted to sweep up!", "Daniel", "Bombay · Storage move"],
    ["Fast, efficient, productive, and moved all of our furniture carefully and quickly. Best moving experience so far in Bombay.", "Edwin", "Parnell to Mt Wellington · 2 bedroom house move"],
    ["Awesome guys, very efficient. Couldn't be happier with how the move went. Thanks very much.", "Brendon", "Bombay · Storage move"],
  ],
  faqTitle: "Frequently asked questions",
  faqs: [
    ["How much does it cost to move a pool table in Bombay?", "The cost depends on the size and type of the table, the pickup and delivery locations and the access at both properties. Contact Metro Movers with your details to request a quote."],
    ["Can you move a slate pool table?", "Slate tables can be included in your enquiry. Tell us the type and size of the table and the access at both addresses so the move can be reviewed before it is quoted."],
    ["Can you move a pool table up or down stairs?", "Stairs can be discussed as part of your quote. Describe how many steps there are, whether there are turns or landings, and the width of the access."],
    ["Do you set the table up at the new address?", "If you need help with the table at the new location, mention this when requesting your quote so it can be discussed as part of your move."],
    ["Can the pool table be moved as part of a house move?", "Yes. Mention the table when requesting your house moving quote so it can be planned with the rest of your belongings."],
  ],
  areaTitle: "Pool table movers in Bombay",
  areaText:
    "Metro Movers is Bombay based. Contact us about moving your pool table within Bombay or to another location in New Zealand.",
  chips: ["Bombay", "Pool Table Moving", "Slate Pool Tables", "Games Room Moving", "Furniture Moving", "House Moving", "Metro Movers", "New Zealand"],
  ctaTitle: "Need to move a pool table?",
  ctaText: "Send your table details, both addresses and your preferred date to request a quote.",
  serviceType: "Pool table moving",
  serviceName: "Pool Table Movers in Bombay",
  serviceDescription: "Pool table moving services in Bombay from Metro Movers.",
  serviceArea: "Bombay",
};

export default function Page() {
  return <Landing d={d} />;
}
