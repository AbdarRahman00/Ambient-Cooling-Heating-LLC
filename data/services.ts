export interface ServiceDetail {
  slug: string;
  title: string;
  iconName: string;
  summary: string;
  description: string;
  benefits: string[];
  whyChooseUs: string[];
  process: string[];
  faq: { question: string; answer: string }[];
  emergencyText: string;
  localSEOParagraph: string;
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "hvac-services",
    title: "HVAC Services",
    iconName: "Wind",
    summary: "Comprehensive heating, ventilation, and air conditioning solutions for residential and commercial spaces in Annapolis.",
    description: "At Ambient Cooling & Heating LLC, we provide full-spectrum HVAC services tailored to the Maryland climate. From summer humidity control to winter heating system tune-ups, our technicians possess the skill and diagnostic equipment to ensure your indoor comfort remains uninterrupted all year round.",
    benefits: [
      "Optimal system performance and enhanced energy efficiency",
      "Lower monthly utility bills and reduced environmental footprint",
      "Improved indoor air quality via expert filter and duct inspections",
      "Prolonged lifespan of your valuable cooling and heating units"
    ],
    whyChooseUs: [
      "Fully licensed, bonded, and insured Maryland technicians",
      "Transparent flat-rate pricing with absolutely no hidden fees",
      "Rapid local response time to ensure your emergency is solved quickly"
    ],
    process: [
      "In-depth consultation and system inspection",
      "Accurate multi-point diagnosis of any components",
      "Detailed presentation of repair or installation options",
      "Efficient execution and meticulous clean-up"
    ],
    faq: [
      {
        question: "How often should my HVAC system be serviced?",
        answer: "We highly recommend scheduling professional maintenance twice a year: once in the spring for your cooling system, and once in the autumn for your heating setup to keep everything running efficiently."
      },
      {
        question: "What are signs that my HVAC system needs professional attention?",
        answer: "Look out for unexplained increases in your utility bills, unusual banging or squealing noises, weak airflow, or inconsistent temperatures across different rooms of your house."
      }
    ],
    emergencyText: "Need immediate HVAC assistance? Our local dispatch team is ready to restore your home's comfort in Annapolis.",
    localSEOParagraph: "Searching for reliable HVAC Annapolis MD services? Ambient Cooling & Heating LLC is your trusted partner. We offer residential and commercial maintenance, expert installation, and fast response times across Anne Arundel County to keep your living and working spaces completely comfortable."
  },
  {
    slug: "air-conditioner-repair",
    title: "Air Conditioner Repair",
    iconName: "Snowflake",
    summary: "Fast, reliable cooling repairs to restore your comfort and lower your summer energy bills.",
    description: "Maryland summers can be brutally hot and humid. When your air conditioner fails, you need an expert team that responds immediately. We diagnose and repair all major brands of AC units, fixing refrigerant leaks, electrical faults, and faulty compressors with expert precision.",
    benefits: [
      "Instant restoration of refreshing, cool air",
      "Increased system efficiency reducing high energy costs",
      "Identification of minor issues before they become expensive breakdowns",
      "Peace of mind during the hottest summer heat waves"
    ],
    whyChooseUs: [
      "Emergency same-day air conditioning repair service",
      "Stocked trucks with standard parts for fast first-visit fixes",
      "Certifed EPA technicians who respect your home and property"
    ],
    process: [
      "Diagnostic check of electrical components and refrigerant pressure",
      "Pinpoint location of blockages, leaks, or mechanical failures",
      "Clear explanation of the problem and the repair estimate",
      "Precision repair using premium OEM-grade parts"
    ],
    faq: [
      {
        question: "Why is my air conditioner blowing warm air?",
        answer: "Warm air is typically caused by a dirty air filter, restricted airflow, a failed condenser compressor, or a low refrigerant level due to an active leak. Our experts can quickly diagnose and fix this."
      },
      {
        question: "How long does a typical AC repair take?",
        answer: "Most standard repairs—such as replacing capacitors, contactors, or fan motors—are completed within 1 to 2 hours once the problem is successfully diagnosed."
      }
    ],
    emergencyText: "Is your AC blowing warm air on a hot Maryland afternoon? Don't wait—call our rapid response AC repair hotline now!",
    localSEOParagraph: "We specialize in high-quality AC Repair Annapolis. Whether it is a quick capacitor replacement or a complex leak fix, our cooling repair specialists restore comfort to Annapolis homeowners with speed and reliable workmanship."
  },
  {
    slug: "heating-services",
    title: "Heating Services",
    iconName: "Flame",
    summary: "Keep your home cozy and warm all winter long with our expert heating services and maintenance.",
    description: "Maryland winters are unforgiving. Ambient Cooling & Heating LLC ensures your furnace, boiler, or heat pump operates at peak efficiency when the temperatures plummet. We specialize in heating system calibration, electrical system checks, safety inspections, and high-efficiency system replacements.",
    benefits: [
      "Reliable heat distribution in every room",
      "Safe combustion and carbon monoxide hazard prevention",
      "Lower fuel consumption through precise burner calibration",
      "Maximum durability during severe cold snaps"
    ],
    whyChooseUs: [
      "Extensive training in high-efficiency gas, electric, and oil heating systems",
      "Safety-first service approach safeguarding your family",
      "Clear, upfront, and competitive flat-rate pricing"
    ],
    process: [
      "Comprehensive heating chamber safety and heat exchanger inspections",
      "Cleaning and tuning burner assemblies and electrical contacts",
      "Verifying proper operation of safety controls and thermostats",
      "Testing venting system to guarantee absolute safety"
    ],
    faq: [
      {
        question: "Should I repair or replace my aging heating system?",
        answer: "If your system is over 15 years old, requires frequent repairs, or your utility bills are steadily climbing, replacing it with a modern high-efficiency unit will usually save you more money in the long run."
      },
      {
        question: "What is a good thermostat setting for winter?",
        answer: "Setting your thermostat to 68°F (20°C) when you are home offers an excellent balance of energy savings and indoor winter comfort."
      }
    ],
    emergencyText: "Waking up to an freezing cold house? Contact our heating technicians for fast, reliable heating services.",
    localSEOParagraph: "For outstanding Heating Services Annapolis, look no further than Ambient Cooling & Heating LLC. We are committed to keeping Annapolis families warm, safe, and comfortable with professional furnace maintenance, heat pump repairs, and customized heating installations."
  },
  {
    slug: "tankless-water-heaters",
    title: "Tankless Water Heaters",
    iconName: "Droplets",
    summary: "Endless hot water on demand with our energy-efficient tankless water heater installations and services.",
    description: "Say goodbye to running out of hot water mid-shower. Tankless water heaters heat water directly without the use of a storage tank, providing continuous hot water while using significantly less energy than a traditional tank model.",
    benefits: [
      "Unlimited, instantaneous supply of hot water",
      "Up to 34% more energy efficiency compared to standard storage tanks",
      "Compact wall-mounted design that saves valuable space in your basement",
      "Double the average lifespan of conventional water heaters (up to 20 years)"
    ],
    whyChooseUs: [
      "Expert sizing to ensure your family's hot water needs are perfectly met",
      "Pro-certified installers for top brands like Rinnai and Navien",
      "Transparent options between electric and gas tankless conversions"
    ],
    process: [
      "Analysis of water usage, peak demands, and electrical or gas supply",
      "Removal and safe disposal of your old, heavy hot water tank",
      "Precision plumbing, gas line routing, and venting setup",
      "Testing flow rates, gas pressures, and temp controls"
    ],
    faq: [
      {
        question: "Do tankless water heaters require maintenance?",
        answer: "Yes, they should be flushed annually to remove mineral scale and calcium buildup, especially if you live in an area with hard water, to keep the heat exchanger working at maximum efficiency."
      },
      {
        question: "Is the upfront cost of a tankless water heater worth it?",
        answer: "Absolutely. Although the initial purchase and installation cost is higher, the significant energy savings and double lifespan make it an exceptional financial investment."
      }
    ],
    emergencyText: "Tired of cold showers? Upgrading to tankless is fast and easy. Call today for a free installation consultation!",
    localSEOParagraph: "Get endless hot water with premium Tankless Water Heaters in Annapolis. Ambient Cooling & Heating LLC provides expert conversion, repair, and annual maintenance services to help you save energy and maximize comfort."
  },
  {
    slug: "heat-pumps",
    title: "Heat Pumps",
    iconName: "RefreshCw",
    summary: "Efficient year-round heating and cooling from a single versatile electric system.",
    description: "Heat pumps are highly efficient, eco-friendly systems that pull heat from the outdoor air to warm your home in the winter, and reverse the process to cool it in the summer. They are an exceptional choice for the moderate Maryland climate.",
    benefits: [
      "Dual heating and cooling capability in one single system",
      "Incredibly high energy efficiency reducing electricity bills",
      "Elimination of combustion-related carbon monoxide risks",
      "Eco-friendly heating option using electric heat transfer"
    ],
    whyChooseUs: [
      "NATE-certified heat pump specialists familiar with high-efficiency variable-speed units",
      "Expert system matching for optimal local performance",
      "Comprehensive maintenance plans to keep heat pumps operating flawlessly"
    ],
    process: [
      "Accurate heat load calculation for perfect sizing",
      "Seamless outdoor condenser and indoor air handler installation",
      "Precision refrigerant charge and control wiring verification",
      "Comprehensive system calibration and customer tutorial"
    ],
    faq: [
      {
        question: "Do heat pumps work when it gets extremely cold outside?",
        answer: "Yes, modern heat pumps are engineered with cold-climate technology to extract heat even in freezing temperatures. They often feature backup auxiliary electric heat for extreme weather events."
      },
      {
        question: "What is the lifespan of a modern heat pump?",
        answer: "With consistent annual maintenance, a high-quality heat pump will run efficiently for 15 to 20 years."
      }
    ],
    emergencyText: "Is your heat pump struggling to maintain temperature? We offer emergency heat pump diagnostics today.",
    localSEOParagraph: "Looking for Heat Pumps Annapolis MD? Ambient Cooling & Heating LLC is the leading local expert in energy-efficient heat pump installations, diagnostic services, and seasonal maintenance plans."
  },
  {
    slug: "furnace-repair",
    title: "Furnace Repair",
    iconName: "Settings",
    summary: "Reliable gas, electric, and oil furnace repairs to restore warmth and ensure home safety.",
    description: "A broken furnace is more than just an inconvenience; in freezing winter temperatures, it's a safety hazard. We specialize in diagnosing and repairing complex furnace components, including burners, blowers, igniters, limit switches, and flame sensors.",
    benefits: [
      "Fast restoration of safe, consistent heat distribution",
      "Rigorous safety check to verify there are no dangerous carbon monoxide leaks",
      "Optimized burner combustion reducing overall fuel consumption",
      "Restoration of quiet, smooth system operation"
    ],
    whyChooseUs: [
      "Same-day emergency response for complete furnace failures",
      "Deep expertise in gas, propane, electric, and oil-fired furnaces",
      "Upfront pricing—you know exactly what you are paying before work begins"
    ],
    process: [
      "Diagnostic checking of the ignition, electrical, and control system",
      "Inspection of the combustion chamber and heat exchanger for safety cracks",
      "Cleaning of crucial components like flame sensors and igniters",
      "System testing to verify correct draft and carbon monoxide safety"
    ],
    faq: [
      {
        question: "Why is my furnace blowing cold air?",
        answer: "This is usually caused by a tripped limit switch due to overheating (often from a clogged filter), a faulty pilot light or ignition spark, or an incorrect thermostat setting."
      },
      {
        question: "Is a cracked heat exchanger dangerous?",
        answer: "Yes, a cracked heat exchanger is extremely dangerous as it can leak toxic carbon monoxide gas into your home's breathing air. It requires immediate system shutoff and replacement."
      }
    ],
    emergencyText: "Furnace blowing cold air or making loud banging sounds? Contact our emergency response team right now!",
    localSEOParagraph: "We provide outstanding Furnace Repair Annapolis. Our certified local technicians quickly diagnose heating system issues, guaranteeing that your family is safe, warm, and comfortable during the cold winter months."
  },
  {
    slug: "mini-split-systems",
    title: "Mini Split Systems",
    iconName: "Cpu",
    summary: "Customizable, ductless zoning heating and cooling for additions, sunrooms, and target zones.",
    description: "Ductless mini-splits are a premium option for homes without pre-existing ductwork, home additions, finished basements, or rooms that never seem to stay at the right temperature. They offer individual temperature zoning and exceptional efficiency.",
    benefits: [
      "Targeted temperature zoning: only heat or cool the rooms you are using",
      "No duct energy losses: ductwork typically accounts for 30% of energy loss",
      "Whisper-quiet operation inside your living spaces",
      "Easy and minimally invasive installation requiring only a tiny wall hole"
    ],
    whyChooseUs: [
      "Authorized installers of top-tier multi-zone ductless systems",
      "Precise load planning to guarantee optimal system performance",
      "Expert aesthetic mounting and clean exterior conduit routing"
    ],
    process: [
      "Consultation to select optimal indoor unit placements",
      "Mounting and connection of wall units to the outdoor condenser unit",
      "Vacuum-testing line sets and opening refrigerant valves",
      "Verifying independent zone controls and remote setups"
    ],
    faq: [
      {
        question: "How many indoor units can connect to one outdoor unit?",
        answer: "Depending on the capacity of the outdoor condenser, you can connect up to 5 to 8 individual indoor air handlers to create a highly flexible multi-zone comfort system."
      },
      {
        question: "Do mini-split filters need cleaning?",
        answer: "Yes, the reusable filters inside the indoor units should be popped out and washed under warm water once every 4 to 6 weeks to maintain maximum airflow and efficiency."
      }
    ],
    emergencyText: "Ready to get perfect zoning comfort in your home? Contact us for a premium ductless mini-split quote today!",
    localSEOParagraph: "Experience customized comfort with premium Mini Split Systems in Annapolis. Ambient Cooling & Heating LLC designs and installs elegant ductless systems that provide energy-efficient zone-controlled comfort throughout your home."
  },
  {
    slug: "air-filtration",
    title: "Air Filtration",
    iconName: "Shield",
    summary: "Breathe cleaner, healthier air with advanced whole-house air purifiers and filtration systems.",
    description: "The air inside your home can be up to 5 times more polluted than outdoor air. Our advanced filtration and indoor air quality solutions capture dust, pet dander, mold spores, bacteria, and chemical odors, providing a healthier environment for your family.",
    benefits: [
      "Drastic reduction in allergy and asthma triggers",
      "Elimination of stubborn lingering pet, cooking, and smoke odors",
      "Protection of your HVAC equipment by keeping internal components clean",
      "Peace of mind knowing your family is breathing purified air"
    ],
    whyChooseUs: [
      "Access to premium hospital-grade HEPA and UV air purifiers",
      "Expert integration directly into your existing HVAC duct system",
      "Comprehensive air quality diagnostic tests and assessments"
    ],
    process: [
      "Detailed evaluation of your home's air duct setup and specific allergy concerns",
      "Selection of the ideal air purifier or whole-house filter system",
      "Seamless structural installation in the main return air plenum",
      "Testing system static pressures to ensure unrestricted, healthy airflow"
    ],
    faq: [
      {
        question: "What is a MERV rating?",
        answer: "MERV (Minimum Efficiency Reporting Value) measures a filter's ability to capture particles. Ratings range from 1 to 16. Residential systems typically run best with a MERV 8 to 13 filter."
      },
      {
        question: "How do UV air purifiers work?",
        answer: "UV purifiers use germicidal ultraviolet light to sterilize and neutralize airborne organic contaminants, such as mold spores, viruses, and bacteria, as they pass through your ductwork."
      }
    ],
    emergencyText: "Bothered by seasonal allergies or indoor dust? Call us to explore a whole-house air purification system!",
    localSEOParagraph: "Breathe easier with expert Air Filtration services in Annapolis. We specialize in implementing high-efficiency media air filters, UV light purifiers, and humidification controls to provide pristine indoor air quality."
  },
  {
    slug: "geothermal-hvac",
    title: "Geothermal HVAC",
    iconName: "Globe",
    summary: "Utilize the earth's natural, stable underground temperature for ultra-efficient green heating and cooling.",
    description: "Geothermal heat pumps tap into the steady underground temperatures of the earth to heat and cool your home. They represent the pinnacle of environmental sustainability and long-term energy savings, offering unparalleled operational efficiency.",
    benefits: [
      "Up to 70% savings on your monthly heating and cooling bills",
      "Extremely long loop lifespan (up to 50+ years for underground loops)",
      "Virtually silent operation with zero noisy outdoor fan units",
      "The most eco-friendly, carbon-reducing HVAC technology available"
    ],
    whyChooseUs: [
      "Specialized training in loop design and geothermal fluid dynamics",
      "Complete design, drilling coordination, and system engineering",
      "Deep understanding of federal tax credits and local utility rebates"
    ],
    process: [
      "Geological evaluation and thermal load modeling of your property",
      "Precision drilling and installation of high-density vertical or horizontal ground loops",
      "Indoor geothermal unit placement and integration with ductwork",
      "System testing, fluid charging, and efficiency verification"
    ],
    faq: [
      {
        question: "Are there tax credits available for geothermal systems?",
        answer: "Yes! There is a substantial federal residential clean energy tax credit that covers up to 30% of the entire installation cost, significantly reducing the payback period."
      },
      {
        question: "How long does a geothermal heat pump unit last?",
        answer: "While the ground loops are engineered to last over 50 years, the indoor heat pump unit itself typically lasts 20 to 25 years, outlasting standard air conditioners."
      }
    ],
    emergencyText: "Want to transition to ultimate green energy and dramatically lower your bills? Ask us about geothermal today!",
    localSEOParagraph: "Ambient Cooling & Heating LLC is a premier certified installer of Geothermal HVAC in Annapolis. We engineer custom loop systems that harness the earth's heat to deliver reliable, eco-friendly heating and cooling to your home."
  },
  {
    slug: "boiler-repair",
    title: "Boiler Repair",
    iconName: "Thermometer",
    summary: "Expert hydronic and steam boiler repairs to keep your cozy radiant heat running smoothly.",
    description: "Boilers are complex hydronic systems that require specialized mechanical expertise. We provide professional boiler diagnostics, fixing problems with water feeds, circulator pumps, zone valves, expansion tanks, and radiators to keep your cozy radiant heat working.",
    benefits: [
      "Restoration of comfortable, quiet, and dust-free radiant warmth",
      "Prevention of frozen water pipes and structural water leaks",
      "Accurate water pressure calibration preventing dangerous blockages",
      "Safe and efficient operation of gas or oil burner assemblies"
    ],
    whyChooseUs: [
      "Deep experience in modern hydronic systems and vintage steam boilers",
      "Comprehensive diagnostic gear for gas leaks and water blockages",
      "Fast access to specialty boiler control and plumbing parts"
    ],
    process: [
      "System depressurization and testing of pressure relief valves",
      "Checking circulator pumps, zone controls, and expansion tanks",
      "Flushing sediment and checking water feed system parameters",
      "Testing thermostat call signals and burner combustion efficiency"
    ],
    faq: [
      {
        question: "Why is my boiler making a banging noise?",
        answer: "This is often called 'kettling,' which happens when lime scale or mineral buildup accumulates on the heat exchanger, restricting water flow and causing localized boiling."
      },
      {
        question: "What should the pressure gauge on my boiler read?",
        answer: "For most residential boilers, the normal operational water pressure should sit consistently between 12 and 15 PSI when the system is cold."
      }
    ],
    emergencyText: "Radiators cold or boiler leaking water? Contact our hydronic heating experts for rapid emergency boiler repair.",
    localSEOParagraph: "Get professional Boiler Repair Annapolis from the trusted team at Ambient Cooling & Heating LLC. Our hydronic specialists restore steam and hot water boiler systems to guarantee your home's radiant heat is safe and reliable."
  },
  {
    slug: "drying-and-dehumidifying",
    title: "Drying & Dehumidifying",
    iconName: "Sun",
    summary: "Whole-home humidity controls to protect your property and improve indoor air quality.",
    description: "Annapolis humidity can make your home feel sticky, encourage mold growth, and degrade wooden structures. Our whole-home dehumidifiers integrate directly with your HVAC system, pulling moisture from the air to maintain a crisp, clean environment.",
    benefits: [
      "Prevention of toxic mold, mildew, and musty basement odors",
      "Makes your home feel cooler at higher temperatures, saving on AC costs",
      "Protection of hardwood floors, drywall, and valuable furniture",
      "Reduction in dust mites and airborne allergens that thrive in damp conditions"
    ],
    whyChooseUs: [
      "Professional humidity and structural moisture assessments",
      "Certified installation of high-capacity whole-home dehumidifiers",
      "Seamless integration with smart thermostats for total comfort control"
    ],
    process: [
      "Measuring baseline relative humidity levels throughout the home",
      "Sizing the appropriate dehumidification unit for your square footage",
      "Mounting the unit and installing dedicated condensate drain lines",
      "Configuring smart controls to maintain a perfect 45-50% humidity level"
    ],
    faq: [
      {
        question: "What is the ideal indoor humidity level?",
        answer: "To maximize comfort and prevent mold growth, the ideal indoor relative humidity level should be kept between 30% and 50% year-round."
      },
      {
        question: "Can a dehumidifier save me money on my electric bill?",
        answer: "Yes! Dehumidifiers remove latent heat (moisture). Dry air feels cooler, meaning you can set your AC thermostat higher while feeling just as comfortable."
      }
    ],
    emergencyText: "Is your basement smelling musty or air feeling sticky? Contact us to review a whole-house dehumidifier!",
    localSEOParagraph: "Control mold and moisture with expert Drying & Dehumidifying services in Annapolis. We design custom humidity control systems that keep your indoor spaces comfortable, clean, and safe from excessive summer dampness."
  },
  {
    slug: "desert-air-and-pool-hvac",
    title: "Desert Air & Pool HVAC",
    iconName: "Waves",
    summary: "Specialized climate control systems for indoor pools, high-humidity rooms, and custom builds.",
    description: "Indoor swimming pools generate massive amounts of moisture and corrosive chlorine gas. We install and service specialized pool room dehumidification systems (like Desert Aire) that control room temperature, pool water heating, and high-capacity humidity control.",
    benefits: [
      "Complete protection of your indoor pool structure from rot and rust",
      "Precise temperature balance between the pool water and the indoor air",
      "Elimination of strong chemical odors and foggy, condensation-covered windows",
      "Advanced energy recovery systems that recycle heat to warm your pool water"
    ],
    whyChooseUs: [
      "Specialty training in advanced commercial-grade pool room dehumidifiers",
      "Comprehensive understanding of corrosive environment design protocols",
      "Detailed custom engineering for high-ventilation pool environments"
    ],
    process: [
      "Calculating moisture evaporation rates based on pool surface area",
      "Custom layout of supply and return registers to wash windows with warm, dry air",
      "Installation of heavy-duty, corrosion-coated HVAC coils and duct networks",
      "Calibrating complex humidity, air temp, and pool water sensors"
    ],
    faq: [
      {
        question: "How does pool room HVAC differ from standard home AC?",
        answer: "Standard AC systems cannot handle the massive moisture volume or corrosive chlorine air of an indoor pool. Specialized pool HVAC units feature heavy-duty corrosion protection and high dehumidification capacities."
      },
      {
        question: "What is the recommended pool room temperature?",
        answer: "To reduce evaporation, the indoor pool air temperature should be kept 2 degrees Fahrenheit warmer than the pool water, usually around 82°F to 84°F."
      }
    ],
    emergencyText: "Experiencing high humidity or window condensation in your indoor pool house? Schedule a specialty consultation today!",
    localSEOParagraph: "We offer professional Desert Air & Pool HVAC services in Annapolis. Our technical engineers design, install, and maintain high-precision dehumidification systems to protect your indoor pool building investment."
  },
  {
    slug: "ac-installation",
    title: "AC Installation",
    iconName: "PlusCircle",
    summary: "Premium high-efficiency central air conditioning replacements designed for maximum savings.",
    description: "Ready to replace your old, inefficient air conditioner? We design custom cooling systems using top-tier, high-efficiency equipment. Our certified technicians calculate the exact size your home requires to deliver whisper-quiet, reliable comfort.",
    benefits: [
      "Saves up to 20-40% on monthly home cooling costs",
      "Advanced variable-speed compressors for superior humidity removal",
      "Meticulous installation backing the manufacturer's maximum warranty",
      "Whisper-quiet outdoor fan operation for a peaceful backyard"
    ],
    whyChooseUs: [
      "Official dealer status with top-rated high-efficiency brands",
      "Precise computerized load sizing calculations for perfect comfort",
      "Flexible financing options with low, friendly monthly payments"
    ],
    process: [
      "Performing a computerized Manual J heat load calculation",
      "Designing system configuration and reviewing energy-saving options",
      "Clean removal of old equipment, refrigerant, and lines",
      "Precision installation, charging, electrical connections, and digital thermostat upgrade"
    ],
    faq: [
      {
        question: "What does the SEER2 rating mean?",
        answer: "SEER2 (Seasonal Energy Efficiency Ratio 2) measures a cooling system's efficiency. The higher the SEER2 rating, the less energy the unit consumes. Modern premium units start at 16 SEER2."
      },
      {
        question: "How long does a new central AC installation take?",
        answer: "A standard, clean residential air conditioner replacement is typically completed within a single working day (about 6 to 8 hours)."
      }
    ],
    emergencyText: "Is your old AC unit constantly breaking down? Contact us today to secure a free, no-obligation high-efficiency replacement estimate!",
    localSEOParagraph: "Upgrade your summer comfort with high-efficiency AC Installation Annapolis. Our local cooling specialists evaluate your home, sizing and installing perfect cooling systems that lower bills and keep you perfectly refreshed."
  },
  {
    slug: "oil-replacement",
    title: "Oil Replacement",
    iconName: "Wrench",
    summary: "Transition from old, expensive heating oil to cleaner, more cost-effective gas or electric systems.",
    description: "Heating oil is expensive, volatile in price, and requires dirty, bulky storage tanks. We help Annapolis homeowners replace their outdated oil furnaces and boilers with clean-burning natural gas, propane, or highly efficient electric heat pumps.",
    benefits: [
      "Elimination of expensive, volatile oil deliveries and dirty soot",
      "Removal of dangerous, leaking oil tanks from your basement or yard",
      "Drastic reduction in carbon emissions and fuel combustion waste",
      "Access to highly efficient, modern smart heating technology"
    ],
    whyChooseUs: [
      "Comprehensive oil-to-gas and oil-to-electric conversion specialists",
      "Safe, code-compliant oil line capping and equipment removal",
      "Access to federal rebates for clean-energy transition heat pumps"
    ],
    process: [
      "Evaluation of electrical panel capacity and gas line accessibility",
      "Safe extraction and purging of the old oil-fired heating unit",
      "Capping oil feed lines and coordinating safe tank removal",
      "Installing and testing the new gas line or high-efficiency electric heat pump"
    ],
    faq: [
      {
        question: "Is it better to convert my oil furnace to a heat pump or gas?",
        answer: "If natural gas is available at your street, a high-efficiency gas furnace is a great choice. Otherwise, converting to a high-efficiency electric heat pump is incredibly cost-effective and clean."
      },
      {
        question: "What happens to my old oil tank during conversion?",
        answer: "We safely drain any remaining oil and coordinate with licensed environmental specialists to remove and dispose of the tank, following all local Maryland regulations."
      }
    ],
    emergencyText: "Tired of unpredictable, expensive heating oil bills? Speak to our conversion experts about your oil replacement options today!",
    localSEOParagraph: "Get modern, clean heating with professional Oil Replacement Annapolis MD. We guide homeowners through converting from high-cost oil to clean-burning natural gas or highly efficient electric heat pump systems."
  },
  {
    slug: "oil-furnace-installation",
    title: "Oil Furnace Installation",
    iconName: "Activity",
    summary: "Professional replacement and installation of modern, high-efficiency oil furnaces.",
    description: "For homes in areas without natural gas lines, modern oil furnaces offer incredibly high, intense heat output during the coldest winter storms. We install high-efficiency, clean-burning oil furnaces with advanced flame sensors and multi-stage blowers.",
    benefits: [
      "Intense heating output: oil burns much hotter than natural gas or electric",
      "Modern clean-burn technology that drastically reduces soot and odor",
      "Highly durable heating systems that can last 25 to 30 years with care",
      "Lower fuel consumption compared to standard older-generation oil models"
    ],
    whyChooseUs: [
      "Highly experienced technicians who understand detailed oil nozzle tuning",
      "Rigorous adherence to local Maryland environmental and oil safety codes",
      "Complete system testing for draft, exhaust, and combustion balance"
    ],
    process: [
      "Detailed heat load calculation to choose the correct BTU output",
      "Setting the new furnace block and aligning it with existing ducts",
      "Precision installation of fuel filters, burners, and exhaust flue venting",
      "Fine-tuning the oil pressure and nozzle for clean, optimal combustion"
    ],
    faq: [
      {
        question: "How long does a modern oil furnace typically last?",
        answer: "With routine annual cleanings, nozzle replacements, and oil filter changes, a modern premium oil furnace will last 25 to 30 years."
      },
      {
        question: "Does a modern oil furnace smell?",
        answer: "No. Unlike older oil systems, modern high-efficiency oil furnaces feature closed combustion chambers that burn fuel extremely clean, eliminating any fuel odor."
      }
    ],
    emergencyText: "Need to replace an aging, unreliable oil furnace? Schedule a free replacement consultation with our local heating experts today!",
    localSEOParagraph: "We specialize in modern Oil Furnace Installation in Annapolis. Our technicians possess the specialized expertise to tune burner nozzles, guaranteeing clean-burning, highly efficient, and reliable winter heat."
  }
];
