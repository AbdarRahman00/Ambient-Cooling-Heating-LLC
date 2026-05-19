export interface ServiceArea {
  slug: string;
  cityName: string;
  zipCodes: string[];
  keywords: string[];
  description: string;
  neighborhoods: string[];
  aboutCity: string;
  services: string[];
  faq: { question: string; answer: string }[];
}

export const serviceAreasData: ServiceArea[] = [
  {
    slug: "annapolis",
    cityName: "Annapolis",
    zipCodes: ["21401", "21403", "21405", "21409"],
    keywords: ["HVAC Annapolis MD", "AC Repair Annapolis", "Heating Services Annapolis", "Furnace Repair Near Me"],
    description: "Ambient Cooling & Heating LLC is proudly headquartered in Annapolis. We provide our capital city with premium, trustworthy HVAC services, expert heating repairs, and energy-efficient cooling installations designed for our coastal Maryland humidity.",
    neighborhoods: ["Eastport", "Downtown Annapolis", "Admiral Heights", "Hillsmere Shores", "Bay Ridge", "West Annapolis"],
    aboutCity: "As the historic capital of Maryland situated right on the Chesapeake Bay, Annapolis homes experience high coastal humidity, salty air, and volatile seasonal temperature swings. We specialize in anti-corrosive HVAC coatings and heavy-duty whole-home dehumidifiers perfect for waterfront living.",
    services: ["Air Conditioner Repair", "Heat Pumps", "Tankless Water Heaters", "Drying & Dehumidifying Services"],
    faq: [
      {
        question: "How does the Annapolis humidity affect my cooling system?",
        answer: "High humidity forces your air conditioner to work double-time to remove moisture. We specialize in installing energy-efficient central AC units and whole-home dehumidifiers to keep your indoor spaces crisp and mold-free."
      },
      {
        question: "Where is Ambient Cooling & Heating LLC located in Annapolis?",
        answer: "Our main corporate office is located at 1910 Towne Centre Blvd Suite 250, Annapolis, MD 21401, allowing us to rapidly dispatch certified technicians across the city and surrounding counties."
      }
    ]
  },
  {
    slug: "severn",
    cityName: "Severn",
    zipCodes: ["21144"],
    keywords: ["HVAC Severn MD", "AC Repair Severn", "Heating Severn MD", "Ductless Mini Splits Severn"],
    description: "We offer residential and commercial heating and cooling services in Severn, MD. From gas furnace installations to mini-split zoning systems, our NATE-certified technicians deliver prompt, expert support.",
    neighborhoods: ["Severn Woods", "Quail Run", "Jacobsville", "Harmans", "Pioneer City"],
    aboutCity: "Located right next to Fort Meade, Severn is home to active military families, defense contractors, and commuters. We recognize the importance of punctuality and fast response times to accommodate Severn's busy working households.",
    services: ["Furnace Repair", "AC Installation", "Mini Split Systems", "HVAC Services"],
    faq: [
      {
        question: "Do you offer emergency AC or heating repairs in Severn?",
        answer: "Yes! We provide prompt diagnostic and repair services in Severn, MD. Our technicians live locally, enabling fast response times to keep your home comfortable."
      },
      {
        question: "Can I upgrade my Severn home's older heating system?",
        answer: "Absolutely. We specialize in oil-to-gas conversions, high-efficiency heat pumps, and modern gas furnace upgrades that lower your winter utility bills."
      }
    ]
  },
  {
    slug: "glen-burnie",
    cityName: "Glen Burnie",
    zipCodes: ["21060", "21061"],
    keywords: ["HVAC Glen Burnie", "Air Conditioning Repair Glen Burnie", "Furnace Service Glen Burnie", "Heat Pumps Glen Burnie"],
    description: "For years, Glen Burnie families have relied on Ambient Cooling & Heating LLC for transparent pricing, same-day repairs, and high-efficiency HVAC installations.",
    neighborhoods: ["Freetown", "Margate", "Harundale", "Oakwood", "Point Pleasant"],
    aboutCity: "As an established suburb with a mix of beautiful mid-century homes and modern developments, Glen Burnie properties often have older ductwork and HVAC systems that benefit from professional cleaning, sealing, and modernizing.",
    services: ["Air Conditioner Repair", "Furnace Repair", "Drying & Dehumidifying Services", "Air Filtration"],
    faq: [
      {
        question: "Why is my Glen Burnie home's second floor always too hot?",
        answer: "This is a common issue with older split-level homes. We can help resolve this by installing a ductless mini-split system or performing professional duct balancing and zoning upgrades."
      },
      {
        question: "Do you service commercial properties in Glen Burnie?",
        answer: "Yes, we handle complete light commercial HVAC services, including rooftop unit (RTU) maintenance, replacements, and indoor air quality solutions."
      }
    ]
  },
  {
    slug: "pasadena",
    cityName: "Pasadena",
    zipCodes: ["21122"],
    keywords: ["HVAC Pasadena MD", "AC Repair Pasadena", "Boiler Repair Pasadena", "Heating Services Pasadena"],
    description: "Get honest, reliable cooling repairs and radiant boiler heating services in Pasadena, MD. Our local technicians reside in the community, providing fast, emergency support.",
    neighborhoods: ["Green Haven", "Lake Shore", "Riviera Beach", "Chelsea Beach", "Bodkin Pointe"],
    aboutCity: "Surrounded by beautiful waterways like the Magothy and Patapsco Rivers, Pasadena is a beautiful peninsula community. The salty, humid environment makes anti-corrosive condenser coils and high-efficiency dehumidification systems essential.",
    services: ["Boiler Repair", "AC Installation", "Heat Pumps", "Drying & Dehumidifying Services"],
    faq: [
      {
        question: "How long does it take for a Pasadena technician to arrive?",
        answer: "Because we have dedicated local technicians stationed right in Pasadena and Lake Shore, we are usually able to offer same-day diagnostics for emergency outages."
      },
      {
        question: "Do you service water-loop heat pumps or boilers?",
        answer: "Yes, our technicians are specially trained in hot water boilers, steam heating, radiant floor systems, and specialized coastal geothermal loop heating systems."
      }
    ]
  },
  {
    slug: "bowie",
    cityName: "Bowie",
    zipCodes: ["20715", "20716", "20720", "20721"],
    keywords: ["HVAC Bowie MD", "AC Repair Bowie", "Heating Bowie MD", "Tankless Water Heaters Bowie"],
    description: "Bowie homeowners trust Ambient Cooling & Heating LLC for highly professional, honest HVAC diagnostics, fast furnace repairs, and energy-saving replacements.",
    neighborhoods: ["Levitt Section", "Collington Station", "Highbridge", "Pointer Ridge", "Woodmore", "Fairwood"],
    aboutCity: "Bowie has grown from a historic rail station into Prince George's County's largest municipality. We serve the area's older custom estates and new construction homes with customized indoor climate designs.",
    services: ["AC Installation", "Tankless Water Heaters", "Heat Pumps", "Air Filtration"],
    faq: [
      {
        question: "Does Ambient Cooling & Heating LLC offer financing in Bowie?",
        answer: "Yes! We partner with premier lenders to offer flexible monthly payment financing plans for new HVAC installations and tankless water heater upgrades."
      },
      {
        question: "Are your technicians certified?",
        answer: "Yes, our entire team is fully NATE-certified, drug-tested, and background-checked to guarantee the highest level of trust and professional safety in your home."
      }
    ]
  },
  {
    slug: "severna-park",
    cityName: "Severna Park",
    zipCodes: ["21146"],
    keywords: ["HVAC Severna Park", "AC Repair Severna Park", "Furnace Repair Severna Park", "Geothermal HVAC Severna Park"],
    description: "Providing premium, white-glove HVAC services, high-efficiency geothermal installations, and fast heating repairs to the beautiful community of Severna Park, MD.",
    neighborhoods: ["Chartwell", "Round Bay", "Shipleys Choice", "Oldershaw", "Oakleigh Forest"],
    aboutCity: "Bordered by the Severn and Magothy Rivers, Severna Park is known for its beautiful waterfront estates and excellent school districts. We offer high-efficiency geothermal heating and premium ductless comfort systems to keep these fine homes comfortable and clean.",
    services: ["Geothermal HVAC", "Mini Split Systems", "Air Conditioner Repair", "Air Filtration"],
    faq: [
      {
        question: "Is geothermal HVAC a viable option for my Severna Park home?",
        answer: "Absolutely. Severna Park's spacious yards are ideal for vertical geothermal ground loop drilling, providing up to 70% energy savings on heating and cooling."
      },
      {
        question: "Do you offer seasonal maintenance contracts in Severna Park?",
        answer: "Yes! Our Comfort Club plans include twice-a-year cleaning and safety tune-ups, priority emergency booking, and a 15% discount on any necessary repairs."
      }
    ]
  },
  {
    slug: "crofton",
    cityName: "Crofton",
    zipCodes: ["21114"],
    keywords: ["HVAC Crofton MD", "AC Repair Crofton", "Heating Services Crofton", "Heat Pumps Crofton"],
    description: "Get honest pricing and fast heating & cooling support from Crofton's trusted local HVAC contractor. Schedule your central AC or heat pump tune-up today.",
    neighborhoods: ["Crofton Triangle", "Crofton Downs", "Walden Golf Community", "Conishear", "Crofton Park"],
    aboutCity: "Originally built as an exclusive gated golf community, Crofton is a family-oriented suburb in the Baltimore-Washington-Annapolis triangle. We maintain a high standard of clean, respectful, and on-time service for our busy Crofton clients.",
    services: ["Heat Pumps", "AC Installation", "Air Filtration", "Furnace Repair"],
    faq: [
      {
        question: "Why is my heat pump blowing lukewarm air in Crofton?",
        answer: "A heat pump in heating mode outputs air around 90-100°F, which can feel cool compared to a gas furnace. However, if it's struggling to heat your home, it could be low on refrigerant or have a faulty reversing valve."
      },
      {
        question: "Do you offer air duct sealing and air quality audits?",
        answer: "Yes, we evaluate system airflows, test for air leaks, and install whole-house electronic air purifiers to eliminate household dust, pollens, and allergens."
      }
    ]
  },
  {
    slug: "odenton",
    cityName: "Odenton",
    zipCodes: ["21113"],
    keywords: ["HVAC Odenton MD", "AC Repair Odenton", "Ductless Mini Splits Odenton", "Heating Odenton"],
    description: "Ambient Cooling & Heating LLC delivers fast, expert heating and cooling services to the rapidly growing community of Odenton, MD.",
    neighborhoods: ["Piney Orchard", "Seven Oaks", "Peachtree", "Academy Junction", "Chapelgate"],
    aboutCity: "With massive master-planned communities like Piney Orchard, Odenton has seen exponential residential growth over the past two decades. We maintain these modern systems with precision diagnostic scans and premium maintenance parts.",
    services: ["Mini Split Systems", "HVAC Services", "Air Conditioner Repair", "Tankless Water Heaters"],
    faq: [
      {
        question: "My Piney Orchard townhome has uneven temperatures. Can you help?",
        answer: "Townhomes are notorious for temperature disparities between the top and bottom floors. Installing an energy-efficient multi-zone mini-split system is the most effective and affordable solution."
      },
      {
        question: "How long should my Odenton central AC unit last?",
        answer: "With consistent annual cleanings, you can expect a modern, high-quality central air conditioner in Maryland to last between 12 and 15 years."
      }
    ]
  },
  {
    slug: "edgewater",
    cityName: "Edgewater",
    zipCodes: ["21037"],
    keywords: ["HVAC Edgewater MD", "AC Repair Edgewater", "Heating Edgewater", "Tankless Water Heaters Edgewater"],
    description: "Reliable HVAC repairs, expert heat pump replacements, and fast heating service for Edgewater, South River, and surrounding water-oriented communities.",
    neighborhoods: ["South River Heights", "Selby-on-the-Bay", "Glebe Heights", "Loch Haven", "Beverly Beach"],
    aboutCity: "Directly south of Annapolis across the South River, Edgewater's beautiful waterfront homes face unique coastal humidity issues. We are experts in marine-resistant AC installations and whole-house dehumidifier integrations.",
    services: ["Drying & Dehumidifying Services", "AC Installation", "Tankless Water Heaters", "Heat Pumps"],
    faq: [
      {
        question: "Can I replace my old, bulky outdoor tank with a tankless water heater?",
        answer: "Yes! Edgewater homes are ideal candidates for converting to compact, energy-efficient tankless water heaters, freeing up valuable space in your mechanical room."
      },
      {
        question: "Do you offer emergency weekend services in Edgewater?",
        answer: "Yes, we have emergency standby technicians available on Saturdays and Sundays to diagnose and repair critical heating and cooling failures."
      }
    ]
  },
  {
    slug: "arnold",
    cityName: "Arnold",
    zipCodes: ["21012"],
    keywords: ["HVAC Arnold MD", "AC Repair Arnold", "Heating Services Arnold", "Heat Pumps Arnold"],
    description: "Arnold residents trust Ambient Cooling & Heating LLC for direct, honest HVAC pricing, professional furnace repairs, and energy-saving replacements.",
    neighborhoods: ["Mago Vista", "Arnold Heights", "Bay Hills Golf Community", "Ulmstead", "Rugby Hall"],
    aboutCity: "Arnold is located on the scenic Broadneck peninsula. With mature trees and riverside breezes, many Arnold homes have unique air filtration and humidity balance requirements which we specialize in resolving.",
    services: ["Air Conditioner Repair", "Air Filtration", "Heat Pumps", "Drying & Dehumidifying Services"],
    faq: [
      {
        question: "Why is my AC compressor making a loud clicking sound in Arnold?",
        answer: "A clicking compressor usually points to a failing starting capacitor, a loose contactor, or an electrical wiring issue. Shut the system down and contact us immediately to prevent permanent compressor damage."
      },
      {
        question: "How can I improve my home's air filtration in Arnold?",
        answer: "We recommend upgrading to a whole-house media filter with a MERV 11 or 13 rating, or installing a HEPA air filtration system to capture micro-particles and local pollen."
      }
    ]
  }
];
