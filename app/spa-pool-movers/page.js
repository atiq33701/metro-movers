
import { Landing, meta } from "../../components/Shared";

export const metadata = meta(
  "Spa Pool Movers Auckland | Spa Pool Moving | Metro Mover",
  "Spa pool moving services in Auckland from Metro Mover. Tell us about your spa pool, its location and the access at both addresses for a moving quote.",
  "/spa-pool-movers",
  "/img/photos/19.jpeg"
);

const d = {
  eyebrow: "Spa Pool Moving Auckland",
  title: "Spa Pool Movers in Auckland",
  lead: "Moving a spa pool takes planning. Metro Mover can help move spa pools between homes and properties. Tell us about your spa, where it sits and the access at both addresses so your move can be planned.",
  bullets: [
    "Spa pool moving between homes and properties",
    "Planning around size, weight and site access",
    "Gates, fences, steps and tight access discussed before the move",
    "Quote based on your spa and your pickup and delivery locations",
  ],
  image: "/img/photos/11.jpeg",
  imageAlt: "Metro Mover spa pool moving service in Auckland",
  cta2: "WhatsApp Us",
  trust: [
    ["Spa", "Spa pool moving"],
    ["Planned", "Access reviewed first"],
    ["Home", "Residential properties"],
    ["Custom", "Spa pool quotes"],
  ],
  servicesTitle: "Spa Pool Moving Services",
  services: [
    ["Spa Pool Moves", "Moving spa pools between homes and properties. Tell us the make, size and where the spa is currently placed."],
    ["Site Access", "Gates, fences, side access, steps, decks and tight corners all affect a spa pool move, so describe the access at both addresses."],
    ["Preparation", "Your spa needs to be drained and prepared before moving day. Mention what you have already organised when requesting your quote."],
    ["Electrical Work", "Disconnecting and reconnecting the electrical supply should be arranged with a licensed electrician. Let us know your plans so timing can be discussed."],
    ["Covers & Accessories", "Spa covers, steps and other accessories can be included in your enquiry so everything arrives together."],
    ["Moving With Your Home", "Moving house as well? Include the spa pool in your house moving quote so everything can be planned as one move."],
  ],
  priceTitle: "Spa Pool Moving Quotes",
  priceText:
    "Every spa pool move is different. The quote can depend on the size and type of the spa, locations and the access at both properties. Send us the details for a quote.",
  priceLink: ["/pricing", "See full pricing"],
  priceList: [
    "Make, size and weight of the spa pool",
    "Pickup and delivery locations",
    "Gates, fences, steps and narrow access",
    "Parking and distance from the property to the vehicle",
    "Whether the spa is being moved on its own or with a full house move",
    "Any additional requirements you mention in advance",
  ],
  stepsTitle: "How Spa Pool Moving Works",
  steps: [
    ["Tell us about the spa", "Send the make and size of your spa pool if you know it, and where it is currently located."],
    ["Describe the access", "Let us know about gates, fences, steps, decks and parking at both addresses."],
    ["Review your quote", "Metro Mover reviews the details and prepares a quote based on your spa and your move."],
    ["Confirm the move", "Once the details and date are agreed, arrange your spa pool move with Metro Mover."],
  ],
  reviewsTitle: "What Customers Say",
  reviews: [
    ["The guys were amazing! Clear communication, happy to adjust the booking for me and got everything where it needed to be with no problems. Highly recommend, they made it super easy!", "McKenzie", "1 bedroom apartment move"],
    ["Vincent and his team were great! Very efficient and took extra care with everything. Would definitely recommend and will use again!", "Ethan", "3 bedroom house move"],
    ["Extremely efficient bunch of guys. Had our 2 bedroom apartment moved swiftly. Awesome communication and customer service.", "Fumi", "2 bedroom apartment move"],
  ],
  faqTitle: "Frequently Asked Questions",
  faqs: [
    ["How much does it cost to move a spa pool in Auckland?", "The cost depends on the size and type of the spa, the pickup and delivery locations and the access at both properties. Contact Metro Mover with your details to request a quote."],
    ["Do I need to drain my spa pool before it is moved?", "Yes, the spa should be drained and prepared before moving day. Let us know when requesting your quote what you have already organised."],
    ["Who disconnects the electrical supply?", "Electrical disconnection and reconnection should be done by a licensed electrician. Mention your plans when requesting a quote so timing can be discussed."],
    ["Can you move a spa pool through tight access?", "Tell us about gates, fences, steps and narrow side access at both addresses. These details help us review whether your spa can be moved and how."],
    ["Can the spa pool be moved as part of a house move?", "Yes. Mention the spa when requesting your house moving quote so it can be planned with the rest of your belongings."],
  ],
  areaTitle: "Spa Pool Movers in Auckland",
  areaText:
    "Metro Mover serves Auckland. Contact us about moving your spa pool within Auckland or to another location in New Zealand.",
  chips: ["Auckland", "Spa Pool Moving", "Hot Tub Moving", "Outdoor Spa Moving", "Furniture Moving", "House Moving", "Metro Mover", "New Zealand"],
  ctaTitle: "Need to Move a Spa Pool?",
  ctaText: "Send your spa details, both addresses and your preferred date to request a quote.",
  serviceType: "Spa pool moving",
  serviceName: "Spa Pool Movers in Auckland",
  serviceDescription: "Spa pool moving services in Auckland from Metro Mover.",
  serviceArea: "Auckland",
};

export default function Page() {
  return <Landing d={d} />;
}
