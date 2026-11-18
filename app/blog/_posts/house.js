// Blog posts for the House Moving service page (/house-moving).
// Fields: slug, title, description (meta), excerpt (card text), date, image, imageAlt, pos (image focus),
// sections: [{ h, p: [paragraphs], ul: [bullets] }]

const service = ["/house-moving", "House Moving"];

export const housePosts = [
  {
    slug: "how-to-plan-a-house-move-in-auckland",
    title: "How to Plan a House Move in Auckland: A Step-by-Step Guide",
    description:
      "Planning a house move in Auckland? Follow this step-by-step guide to choosing a date, preparing your home, briefing your movers and getting through moving day.",
    excerpt:
      "From choosing your date to the last walk-through, here is a simple order of play for moving house in Auckland without the last-minute scramble.",
    date: "2026-11-17",
    category: "House Moving",
    service,
    image: "/img/photos/2.png",
    imageAlt: "Metro Movers team loading boxes and wrapped furniture outside a home",
    pos: "50% 50%",
    intro: [
      "Moving house is one of those jobs that feels manageable until you realise how many small decisions sit inside it. The good news is that most of them can be made calmly, in a sensible order, well before moving day.",
      "This guide walks through the planning steps we would suggest for a house move in Auckland, whether you are moving an apartment, a townhouse or a family home.",
    ],
    sections: [
      {
        h: "1. Lock in your date as early as you can",
        p: [
          "Your moving date is usually tied to something fixed: a settlement date, the end of a tenancy, a job start or the school term. Once you know the date, tell your movers as early as possible so they can check availability.",
          "If your date might shift because of settlement or tenancy timing, say so when you ask for a quote. It is much easier to plan around a possible change than to find out about it the week before.",
        ],
      },
      {
        h: "2. Work out how much you are really moving",
        p: [
          "Walk through the house room by room and make a rough list. Count bedrooms, large furniture, appliances and anything unusual such as a piano, pool table or spa pool. You do not need an exact inventory, but the clearer your picture, the more accurate your quote will be.",
          "This is also the best time to decide what is not coming with you. Every box you donate, sell or take to the tip is a box you do not have to pack, carry or unpack.",
        ],
      },
      {
        h: "3. Check access at both addresses",
        p: [
          "Access is one of the biggest things that shapes a move. Before you request a quote, look at both properties and note:",
        ],
        ul: [
          "Stairs, steps and the length of any driveway or path",
          "Lifts in apartment buildings, and whether they can be booked",
          "Where a truck can park, and whether the street is narrow or busy",
          "Tight corners, narrow doorways or hallways for large furniture",
        ],
      },
      {
        h: "4. Request a quote with the right details",
        p: [
          "To get a quote that reflects your move, send your pickup and delivery addresses, your preferred date, the number of bedrooms or approximate amount of furniture, and anything large, heavy or fragile. Mention stairs and parking too. You can find out how this works on our pricing page.",
        ],
      },
      {
        h: "5. Start packing before it feels urgent",
        p: [
          "Begin with the rooms and items you use least: the spare room, books, ornaments, out-of-season clothes. Leave the kitchen and bathroom until the last few days. Label every box with the room it is going to, not just what is inside it.",
        ],
      },
      {
        h: "6. Sort out the admin",
        p: ["A move comes with a surprising amount of paperwork. Put these on a list early:"],
        ul: [
          "Give notice to your landlord or agent as your tenancy agreement requires",
          "Arrange power and internet at the new address, since internet connections can take time",
          "Set up mail redirection and update your address with your bank, employer and other providers",
          "Update your driver licence address and your electoral enrolment",
        ],
      },
      {
        h: "7. Prepare for moving day",
        p: [
          "On the day before, make sure walkways and doorways are clear, loose items are packed and anything you are not moving is separated from what is going on the truck. Pack an essentials bag with documents, keys, medication, chargers and a change of clothes, and keep it with you rather than on the truck.",
          "When the team arrives, walk them through the house, point out fragile items and anything that needs special care, and confirm where everything is going at the other end.",
        ],
      },
    ],
    closing:
      "A house move goes best when the details are shared early. If you would like help planning yours, send us your addresses, date and move details and we can put a quote together around them.",
  },
  {
    slug: "moving-house-checklist-8-weeks-to-moving-day",
    title: "Moving House Checklist: What to Do in the 8 Weeks Before Your Move",
    description:
      "A week-by-week moving house checklist for Auckland families. Know what to book, pack and organise in the 8 weeks before moving day.",
    excerpt:
      "A week-by-week checklist that spreads the work of moving house across eight weeks, so moving day is the easy part.",
    date: "2026-09-28",
    category: "House Moving",
    service,
    image: "/img/photos/3.png",
    imageAlt: "Metro Movers team packing boxes and wrapping furniture ready for a move",
    pos: "50% 50%",
    intro: [
      "A moving checklist works because it turns one huge job into small ones. Spread across eight weeks, the work stays light, and nothing is left for the night before.",
      "Use this as a starting point and adjust it to your own timeline. If your move is sooner than eight weeks away, simply compress the early steps.",
    ],
    sections: [
      {
        h: "Eight to six weeks before",
        p: ["This is the planning stage. Nothing here is heavy lifting, but it sets up everything that follows."],
        ul: [
          "Confirm your moving date and request quotes from moving companies",
          "Check the access, parking and any lift booking requirements at both addresses",
          "Start a folder, paper or digital, for quotes, key dates and contact details",
          "Go through each room and decide what to keep, sell, donate or throw out",
        ],
      },
      {
        h: "Five to four weeks before",
        p: ["Now the decluttering turns into action, and you can start on the first round of packing."],
        ul: [
          "Book your movers once you are happy with the quote and the date",
          "Order or collect boxes, tape, paper and marker pens",
          "Pack the things you will not need before moving day: books, decorations, spare linen",
          "Give notice to your landlord or agent if you are renting",
        ],
      },
      {
        h: "Three to two weeks before",
        p: ["This is when the admin needs to happen, because some of it takes time to arrange."],
        ul: [
          "Arrange power and internet at your new address",
          "Set up mail redirection",
          "Update your address with your bank, insurer, employer and other providers",
          "Tell your movers about anything new: extra items, a change of access or a change of date",
          "Use up the food in your freezer and pantry rather than packing it",
        ],
      },
      {
        h: "The final week",
        p: ["Packing speeds up now. Aim to have most rooms finished two days before the move."],
        ul: [
          "Pack the kitchen and bathroom last, leaving out only what you need for a few days",
          "Empty and defrost the fridge and freezer if they are moving",
          "Disassemble furniture that needs it, and keep screws and fittings in labelled bags",
          "Pack an essentials bag with documents, keys, medication, chargers, toiletries and a change of clothes",
          "Confirm arrival time and contact numbers with your movers",
        ],
      },
      {
        h: "Moving day and after",
        p: [
          "Be there when the team arrives, walk them through the house and point out anything fragile or special. Do a final check of every cupboard, drawer and shelf before you leave, and take meter readings if you need them.",
          "At the new place, tell the team where each room is, check the larger items are placed where you want them, and keep your essentials bag within reach. Unpack the bedrooms and bathroom first so the first night is comfortable.",
        ],
      },
    ],
    closing:
      "If your move includes larger items such as a piano, pool table or spa pool, mention them early so they can be planned from the start. Request a quote any time with your details and we will take it from there.",
  },
  {
    slug: "how-to-pack-your-house-room-by-room",
    title: "How to Pack Your House Room by Room Before the Movers Arrive",
    description:
      "Practical tips for packing a house room by room: what to pack first, how to protect fragile items, and how to label boxes so unpacking is easy.",
    excerpt:
      "Pack in a smart order, protect what is fragile and label every box by room. Here is how to get your house ready before moving day.",
    date: "2026-10-13",
    category: "House Moving",
    service,
    image: "/img/photos/21.png",
    imageAlt: "Metro Movers truck being loaded with boxes and furniture in the evening",
    pos: "50% 45%",
    intro: [
      "Good packing makes a move quicker, safer and a lot less stressful to unpack. It does not need to be complicated: a sensible order, the right materials and clear labels will do most of the work.",
      "Here is a room-by-room approach you can follow in the weeks before your move.",
    ],
    sections: [
      {
        h: "Start with the right materials",
        p: [
          "Use sturdy boxes in a few sizes. Small boxes suit books and heavy items, medium boxes suit most household goods, and large boxes are best kept for light things such as bedding and cushions. Heavy boxes are hard on backs and easy to break, so keep each one to a weight you can comfortably lift.",
          "Stock up on packing paper, tape, bubble wrap and marker pens before you begin.",
        ],
      },
      {
        h: "Spare rooms, storage and the garage",
        p: [
          "Start here, since these are the places you rarely need. Pack books, decorations, tools, sports gear and out-of-season clothes. Keep chemicals, gas bottles and other hazardous items out of your boxes. They need separate handling, so it is worth asking your movers about them.",
        ],
      },
      {
        h: "Living room and bedrooms",
        p: ["These rooms are mostly about protecting furniture and sorting soft items."],
        ul: [
          "Pack cushions, linen and clothes in large boxes or bags",
          "Take pictures and mirrors off the walls and wrap them separately, standing them on their edge",
          "Empty drawers of valuables, liquids and fragile items, as light clothing can sometimes stay in place",
          "Disassemble beds and large furniture where needed, and keep screws in a labelled bag taped to the item",
        ],
      },
      {
        h: "Kitchen",
        p: [
          "The kitchen takes longest, so leave it until near the end but allow plenty of time. Wrap plates on their edge rather than flat, put heavier items on the bottom of the box and fill any gaps with paper so nothing shifts. Label glasses and crockery boxes as fragile.",
          "Keep a small box of essentials out: a kettle, a few plates and cutlery, tea and coffee, and cleaning supplies for the last day.",
        ],
      },
      {
        h: "Bathroom",
        p: [
          "Seal lids and bottles, and put liquids in a sealed bag or box in case of leaks. Keep your toiletries for the last night and first morning in your essentials bag.",
        ],
      },
      {
        h: "Label everything",
        p: [
          "Write the destination room on the top and at least one side of every box so you can read it when boxes are stacked. Add a short note about the contents, and mark fragile boxes clearly. Doing this properly means your movers can put each box in the right room and you can unpack in order.",
        ],
      },
    ],
    closing:
      "If you would like help with packing, or have items you are unsure how to prepare, mention it when you request your quote so it can be discussed as part of your move.",
  },
];
