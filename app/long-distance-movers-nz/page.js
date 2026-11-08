import { Landing, meta } from "../../components/Shared";

export const metadata = meta(
  "Long Distance Movers Auckland NZ | Metro Movers",
  "Long distance moving services from Auckland across New Zealand. Contact Metro Movers for a quote based on your pickup location, destination, move size and requirements.",
  "/long-distance-movers-nz",
  "/img/photos/15.jpeg"
);

const d = {
  eyebrow: "Long Distance Moving New Zealand",
  title: "Long Distance Movers from Auckland Across New Zealand",
  lead: "Relocating from Auckland to another part of New Zealand? Metro Movers can help with long distance household and relocation moves based on your locations, move size and requirements.",
  bullets: [
    "Long distance moving from Auckland to locations across New Zealand",
    "Moving plans based on your pickup and delivery locations",
    "Quotes based on the size and requirements of your move",
    "Large, heavy and access-sensitive items can be discussed before booking",
  ],
  image: "/img/photos/20.jpeg",
  imageAlt: "Metro Movers long distance moving service from Auckland",
  cta2: "Call +64226871426",
  trust: [
    ["Auckland", "Auckland service area"],
    ["NZ", "Long distance moving"],
    ["Custom", "Moving quotes"],
    ["01", "Team for your enquiry"],
  ],
  servicesTitle: "Long Distance Moving Services",
  services: [
    ["Household Moves", "Move furniture, boxes and household belongings when relocating from Auckland to another city or region."],
    ["Relocation Planning", "Share your pickup and delivery details so the move can be planned around the distance, property access and your preferred date."],
    ["Large Item Moving", "Let us know about large, heavy or difficult-to-handle items before the move so they can be considered when preparing your quote."],
    ["Intercity Relocations", "Planning a move between Auckland and another part of New Zealand? Provide both locations and your moving requirements for a custom quote."],
    ["Office Relocations", "Businesses relocating to another city can provide their workplace moving requirements for review and quotation."],
    ["Moving Requirements", "Stairs, lifts, parking, narrow access and special items can affect a long distance move, so include these details in your enquiry."],
  ],
  priceTitle: "Get a Custom Long Distance Quote",
  priceText:
    "Long distance moving prices depend on the pickup and delivery locations, amount being moved, access and other requirements. Send us the details of your move for a quote.",
  priceLink: ["/pricing", "See full pricing"],
  priceList: [
    "Pickup and delivery locations",
    "Size and volume of your move",
    "Distance between properties",
    "Stairs, lifts and property access",
    "Parking and vehicle access",
    "Large or difficult-to-handle items",
  ],
  stepsTitle: "How Long Distance Moving Works",
  steps: [
    ["Tell us your locations", "Provide your pickup address, delivery address and preferred moving date."],
    ["Describe your move", "Tell us approximately how much you are moving and mention any large, heavy, fragile or difficult-to-access items."],
    ["Review your quote", "Metro Movers reviews the information and prepares a quote based on the requirements of your move."],
    ["Arrange your move", "Once the moving details are confirmed, arrange the moving date and next steps with Metro Movers."],
  ],
  reviewsTitle: "Customer Reviews",
  reviews: [
    ["Fast, efficient, productive, and moved all of our furniture carefully and quickly. Great team effort. Best moving experience so far in Bombay. Highly recommended!", "Edwin", "Bombay"],
    ["Very professional service. We had to delay due to settlement delays so they did another job first. The communication and customisation was superior.", "Chris", "Bombay"],
    ["Awesome guys, very efficient. Couldn't be happier with how the move went. Thanks very much.", "Brendon", "Bombay"],
  ],
  faqTitle: "Frequently Asked Questions",
  faqs: [
    ["Do you provide long distance moving services?", "Metro Movers provides long distance moving services for customers relocating from Auckland to other locations in New Zealand."],
    ["How do I get a long distance moving quote?", "Provide your pickup and delivery addresses, preferred date, approximate move size and details of any large, heavy or difficult-to-access items."],
    ["Can I move household furniture long distance?", "Yes. Household furniture and other belongings can be discussed as part of your long distance moving enquiry."],
    ["Does distance affect the moving price?", "Yes. The distance between the pickup and delivery locations is one of the factors considered when preparing a moving quote."],
    ["Can you move large or heavy items?", "Tell Metro Movers about large, heavy or difficult-to-handle items when requesting your quote so the requirements can be reviewed."],
  ],
  areaTitle: "Popular Long Distance Destinations",
  areaText:
    "If you are relocating from Auckland, provide your destination and moving requirements so Metro Movers can prepare a quote.",
  chips: ["Hamilton", "Tauranga", "Rotorua", "New Plymouth", "Napier", "Palmerston North", "Wellington", "Nelson", "Christchurch", "Queenstown", "Dunedin"],
  ctaTitle: "Moving out of Auckland?",
  ctaText: "Send your pickup and delivery addresses, preferred date and move details to get started with a long distance moving quote.",
  serviceType: "Long distance moving",
  serviceName: "Long Distance Moving in New Zealand",
  serviceDescription: "Long distance moving services from Auckland to locations across New Zealand.",
  serviceArea: "Auckland",
};

export default function Page() {
  return <Landing d={d} />;
}