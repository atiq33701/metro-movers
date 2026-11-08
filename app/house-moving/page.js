import { Landing, meta } from "../../components/Shared";

export const metadata = meta(
  "House Movers Bombay | House Moving Services | Metro Movers",
  "House moving services in Bombay from Metro Movers. Moving apartments, townhouses and family homes with careful planning, furniture handling and relocation support.",
  "/house-moving",
  "/img/photos/18.jpeg"
);

const d = {
  eyebrow: "House Moving Bombay",
  title: "House Movers & Removals in Bombay",
  lead: "Moving home in Bombay? Metro Movers provides house moving and relocation services for apartments, townhouses and family homes. Share your pickup location, destination and move details with us to plan your move.",
  bullets: [
    "House moving services for apartments, townhouses and homes",
    "Careful handling of furniture and household belongings",
    "Move planning based on your locations and requirements",
    "Serving Bombay and other locations across New Zealand",
  ],
  image: "/img/photos/18.jpeg",
  imageAlt: "Metro Movers house moving service in Bombay",
  cta2: "WhatsApp Us",
  trust: [
    ["01", "Pickup details"],
    ["02", "Move size"],
    ["03", "Access information"],
    ["04", "Preferred moving date"],
  ],
  servicesTitle: "House Moving Services",
  services: [
    ["Home Relocation", "Moving services for household relocations, including apartments, townhouses and family homes."],
    ["Furniture Handling", "Plan the move around your furniture, appliances and other household belongings that need careful handling."],
    ["Move Planning", "Share your locations, access details, move size and preferred date so the requirements of your move can be reviewed."],
    ["Loading & Unloading", "Let us know about stairs, narrow access, parking limitations or other conditions that may affect your move."],
    ["Furniture Preparation", "Tell us about beds, tables, wardrobes or other larger items that may require additional preparation before moving."],
    ["Special Requirements", "Mention fragile belongings, large items or any other special requirements when requesting your moving quote."],
  ],
  priceTitle: "What affects your moving cost",
  priceText:
    "Every house move is different. The quote can depend on the amount being moved, locations, access conditions and the requirements of your move.",
  priceLink: ["/pricing", "See full pricing"],
  priceList: [
    "Pickup and delivery locations",
    "Number of bedrooms and overall move size",
    "Stairs, parking and access conditions",
    "Large, fragile or difficult-to-handle items",
    "Preferred moving date",
    "Any additional requirements you mention in advance",
  ],
  stepsTitle: "How it works",
  steps: [
    ["Tell us about your move", "Send your quote request with your pickup and delivery locations, move size and preferred moving date."],
    ["Share the details", "Let us know about stairs, access conditions, large furniture, fragile items and any special requirements."],
    ["Review your quote", "Your move requirements can be reviewed so the quote reflects the details you provide."],
    ["Confirm your move", "Once your moving requirements and date are confirmed, you can prepare for moving day."],
  ],
  reviewsTitle: "What customers say",
  reviews: [
    ["Vincent and his team were great! Very efficient and took extra care with everything. They wrapped drawers and such with cling wrap and had blankets for the more delicate things. Would definitely recommend and will use again!", "Ethan", "Bombay · 3 bedroom house move"],
    ["The team is fast, efficient, productive, and moved all of our furniture carefully and quickly. Great team effort. Best moving experience so far in Bombay. Highly recommended!", "Edwin", "Parnell to Mt Wellington · 2 bedroom house move"],
    ["The guys were amazing! Clear communication, happy to adjust the booking for me and got everything where it needed to be with no problems. Highly recommend, they made it super easy!", "McKenzie", "Bombay · 1 bedroom apartment move"],
  ],
  faqTitle: "Frequently asked questions",
  faqs: [
    ["How much does it cost to move house in Bombay?", "The cost depends on your pickup and delivery locations, move size, access conditions, furniture and other requirements. Contact Metro Movers with your details to request a quote."],
    ["Do I need to empty my drawers?", "For safer handling, remove valuables, liquids and fragile items from drawers before moving. Lightweight items may be left inside where appropriate."],
    ["What information do you need for a quote?", "Provide your pickup and delivery locations, number of bedrooms, larger items, access conditions, preferred date and any special requirements so the move can be properly understood."],
    ["Can I move house on a weekend?", "You can request a weekend moving date. Availability depends on the date and requirements of your move."],
    ["Which areas do you cover?", "Metro Movers is Bombay based and provides moving and relocation services in Bombay and other locations across New Zealand."],
    ["Can you help with packing?", "If you require packing assistance or have specific packing requirements, mention them when requesting your quote so they can be discussed as part of your move."],
  ],
  areaTitle: "House Movers in Bombay",
  areaText:
    "Metro Movers is Bombay based. Contact us about your house move, whether you are relocating within Bombay or planning a move to another location in New Zealand.",
  chips: ["Bombay", "House Moving", "Home Relocation", "Apartment Moving", "Townhouse Moving", "Furniture Moving", "Residential Moving", "Metro Movers", "New Zealand"],
  ctaTitle: "Ready to plan your Bombay house move?",
  ctaText: "Request a quote with your pickup location, destination, move size and preferred date.",
  serviceType: "House moving",
  serviceName: "House Movers & Removals in Bombay",
  serviceDescription: "House moving and relocation services in Bombay from Metro Movers.",
  serviceArea: "Bombay",
};

export default function Page() {
  return <Landing d={d} />;
}
