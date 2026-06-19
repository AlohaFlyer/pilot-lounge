/* The Pilot Lounge - shared subject map + podcast episode index. */
window.PILOT_LOUNGE = window.PILOT_LOUNGE || {};

window.PILOT_LOUNGE.subjectMaps = {
  SP: { 'I':'Getting Started', 'II':'Regs & Endorsements', 'III':'Airport & Radio', 'IV':'Aerodynamics', 'V':'Weather Basics', 'VI':'Maneuvers to Solo', 'VII':'Safety & ADM', 'VIII':'History & Tradition', 'IX':'Careers & Pathways', 'X':'Study & Mindset' },
  IR: { 'I':'Preflight Preparation', 'II':'Systems & Instruments', 'III':'ATC Clearances',
    'IV':'Instrument Flying', 'V':'Navigation', 'VI':'Approaches', 'VII':'Emergencies', 'VIII':'Postflight' },
  CA: { 'I':'Preflight Preparation', 'II':'Preflight Procedures', 'III':'Airport Operations',
    'IV':'Takeoffs & Landings', 'V':'Performance & Maneuvers', 'VI':'Navigation', 'VII':'Slow Flight & Stalls',
    'VIII':'High Altitude Ops', 'IX':'Emergencies', 'X':'Multiengine', 'XI':'Postflight' },
  ATP: { 'I':'Preflight Preparation', 'II':'Preflight Procedures', 'III':'Takeoffs & Landings',
    'IV':'In-flight Maneuvers', 'V':'Stall Prevention', 'VI':'Instrument Procedures', 'VII':'Emergencies', 'VIII':'Postflight' },
  ME: { 'I':'Multiengine Aerodynamics', 'II':'Vmc & Critical Engine', 'III':'Performance & Systems',
    'IV':'Normal Operations', 'V':'Engine-Out Procedures', 'VI':'Regulations' },
  FI: { 'I':'Fundamentals of Instructing', 'II':'The Teaching Process', 'III':'Human Behavior',
    'IV':'Assessment', 'V':'Endorsements & Privileges', 'VI':'Technical Subjects' },
  CI: { 'I':'Instrument Flying & Scan', 'II':'IFR Regs & Planning', 'III':'Procedures & Holds',
    'IV':'Approaches', 'V':'Endorsements & Risk' },
  MI: { 'I':'Vmc Demo & Safety', 'II':'Multiengine Aerodynamics', 'III':'Engine-Out Procedures',
    'IV':'Regulations & Instruction' }
};

window.PILOT_LOUNGE.subjectOf = function(acs){
  var p = String(acs || '').split('.'); var cert = p[0] || ''; var area = p[1] || ''; var task = p[2] || '';
  if (cert === 'SP' || cert === 'IR' || cert === 'CA' || cert === 'ATP' || cert === 'ME' || cert === 'FI' || cert === 'CI' || cert === 'MI'){
    var m = window.PILOT_LOUNGE.subjectMaps[cert] || {};
    return m[area] || 'Other';
  }
  if (area === 'I'){
    if (task === 'C') return 'Weather';
    if (task === 'E') return 'Airspace';
    if (task === 'F') return 'Performance & Limits';
    if (task === 'G') return 'Systems';
    if (task === 'H') return 'Human Factors';
    return 'Regs & Airworthiness';
  }
  var map = { 'II':'Preflight Procedures', 'III':'Airport Operations', 'IV':'Takeoffs & Landings',
    'V':'Ground Reference', 'VI':'Navigation', 'VII':'Stalls & Spins', 'VIII':'Basic Instrument',
    'IX':'Emergencies', 'X':'Multiengine', 'XI':'Night', 'XII':'Postflight' };
  return map[area] || 'Other';
};

window.PILOT_LOUNGE.subjectOrders = {
  SP: ['Getting Started','Regs & Endorsements','Airport & Radio','Aerodynamics','Weather Basics','Maneuvers to Solo','Safety & ADM','History & Tradition','Careers & Pathways','Study & Mindset'],
  PA: ['Regs & Airworthiness','Weather','Airspace','Performance & Limits',
    'Systems','Human Factors','Preflight Procedures','Airport Operations','Takeoffs & Landings',
    'Ground Reference','Navigation','Stalls & Spins','Basic Instrument','Emergencies','Night','Postflight'],
  IR: ['Preflight Preparation','Systems & Instruments','ATC Clearances','Instrument Flying',
    'Navigation','Approaches','Emergencies','Postflight'],
  CA: ['Preflight Preparation','Preflight Procedures','Airport Operations','Takeoffs & Landings',
    'Performance & Maneuvers','Navigation','Slow Flight & Stalls','High Altitude Ops','Emergencies','Multiengine','Postflight'],
  ATP: ['Preflight Preparation','Preflight Procedures','Takeoffs & Landings','In-flight Maneuvers',
    'Stall Prevention','Instrument Procedures','Emergencies','Postflight'],
  ME: ['Multiengine Aerodynamics','Vmc & Critical Engine','Performance & Systems','Normal Operations','Engine-Out Procedures','Regulations'],
  FI: ['Fundamentals of Instructing','The Teaching Process','Human Behavior','Assessment','Endorsements & Privileges','Technical Subjects'],
  CI: ['Instrument Flying & Scan','IFR Regs & Planning','Procedures & Holds','Approaches','Endorsements & Risk'],
  MI: ['Vmc Demo & Safety','Multiengine Aerodynamics','Engine-Out Procedures','Regulations & Instruction']
};
window.PILOT_LOUNGE.subjectOrder = window.PILOT_LOUNGE.subjectOrders.PA;

window.PILOT_LOUNGE.certs = [
  {key:'student', label:'Student', prefix:'SP'},
  {key:'private', label:'Private', prefix:'PA'},
  {key:'instrument', label:'Instrument', prefix:'IR'},
  {key:'commercial', label:'Commercial', prefix:'CA'},
  {key:'multi', label:'Multi-Engine', prefix:'ME'},
  {key:'cfi', label:'CFI', prefix:'FI'},
  {key:'cfii', label:'CFII', prefix:'CI'},
  {key:'mei', label:'MEI', prefix:'MI'},
  {key:'atp', label:'ATP', prefix:'ATP'}
];
window.PILOT_LOUNGE.bankKey = function(k){
  return window.PILOT_LOUNGE.certs.some(function(c){ return c.key === k; }) ? k : 'private';
};
window.PILOT_LOUNGE.prefixFor = function(k){
  var c = window.PILOT_LOUNGE.certs.filter(function(x){ return x.key === k; })[0];
  return c ? c.prefix : 'PA';
};
window.PILOT_LOUNGE.subjectOrderFor = function(k){
  return window.PILOT_LOUNGE.subjectOrders[window.PILOT_LOUNGE.prefixFor(k)] || window.PILOT_LOUNGE.subjectOrders.PA;
};

var R = {
  phak:  {t:'PHAK', u:'https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak'},
  afh:   {t:'Airplane Flying Handbook', u:'https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook'},
  awh:   {t:'Aviation Weather Handbook', u:'https://www.faa.gov/regulationspolicies/handbooksmanuals/aviation/faa-h-8083-28b-aviation-weather-handbook'},
  aim:   {t:'AIM', u:'https://www.faa.gov/air_traffic/publications/atpubs/aim_html/'},
  acs:   {t:'Private Pilot ACS', u:'https://www.faa.gov/training_testing/testing/acs'},
  cfr61: {t:'14 CFR Part 61', u:'https://www.ecfr.gov/current/title-14/part-61'},
  cfr91: {t:'14 CFR Part 91', u:'https://www.ecfr.gov/current/title-14/part-91'},
  awc:   {t:'aviationweather.gov', u:'https://aviationweather.gov/'},
  aopa:  {t:'AOPA Air Safety Institute', u:'https://www.aopa.org/training-and-safety/air-safety-institute'},
  aopawx:{t:'AOPA Weather', u:'https://www.aopa.org/training-and-safety/active-pilots/safety-and-technique/weather'}
};
function ref(base, q){ return {t:base.t, u:base.u, q:q}; }

window.PILOT_LOUNGE.episodes = [
  {n:0, subject:'Start Here', title:'Welcome to the Lounge 🎙️', subjects:[], len:'13:01',
   blurb:'Meet the six captains, then a 13 minute conversation on the most important things a private pilot must own.',
   topics:'Two legal questions, personal minimums, understanding over memorizing, flows before checklists, angle of attack, fuel discipline, always have an out.', audio:'pl_ep00.mp3',
   refs:[
     ref(R.phak, 'The Pilot\'s Handbook of Aeronautical Knowledge is the FAA\'s primary knowledge reference, covering aerodynamics, systems, weather, airspace, performance, and aeronautical decision making.'),
     ref(R.acs, 'From the ACS: "The ACS integrates the elements of knowledge, risk management, and skill required for each airman certificate or rating."'),
     ref(R.aopa, 'AOPA\'s Air Safety Institute offers free courses, quizzes, and accident case studies across every subject in this season.')
   ],
   news:[
     {t:'Become a Pilot', s:'FAA', u:'https://www.faa.gov/pilots/become', b:'The FAA\'s official starting point outlining the certificates, eligibility, medical, and testing steps for new pilots.'},
     {t:'How to Get a Private Pilot License - Step-by-Step', s:'Pilot Institute', u:'https://pilotinstitute.com/how-to-get-a-private-pilot-license/', b:'A plain-language roadmap from discovery flight through written exam, checkride, and the hours and costs to expect.'},
     {t:'Study These 10 Things Before Your First Lesson', s:'Boldmethod', u:'https://www.boldmethod.com/blog/lists/2020/01/start-studying-these-10-things-before-flight-training/', b:'Lists the core concepts a brand-new student should review so the very first flight lesson is more productive.'}
   ],
   videos:[
     {t:'How to Become A Pilot', s:'MzeroA Flight Training', u:'https://www.youtube.com/watch?v=1qvekiLf7Xc', views:'300K (approx)', b:'A working CFI lays out the realistic path, time, and money it takes to earn a private pilot certificate.'},
     {t:'Ep. 1: Discovery Flight', s:'FLY8MA Flight Training', u:'https://www.youtube.com/watch?v=G1v7KYjjtCI', views:'500K (approx)', b:'Follows a complete-beginner discovery flight, showing what to expect when you sit in the left seat for the first time.'},
     {t:'I Want To Become A Pilot! What Are The Steps?', s:'MzeroA Flight Training', u:'https://www.youtube.com/watch?v=1HfYCucBmps', views:'150K (approx)', b:'Answers the most common questions aspiring pilots ask about getting started in flight training.'}
   ]},
  {n:1, subject:'Regs & Airworthiness', title:'Are You Legal, Is She Legal 🎙️', subjects:['Regs & Airworthiness'], len:'11:12',
   blurb:'Pilot qualifications, airworthiness, and cross-country planning.',
   topics:'Certificate, medical, flight review, currency, AROW, AV1ATE, A TOMATO FLAMES, the inop-equipment flow, fuel reserves.', audio:'pl_ep01.mp3',
   refs:[
     ref(R.cfr61, 'Part 61 sets the certification rules for pilots: who may act as pilot in command, the certificate and medical you must hold, recency of experience, and the flight review.'),
     ref(R.cfr91, 'On VFR fuel reserves, 91.151 requires enough fuel to fly to the first point of intended landing and, during the day, to fly after that for at least 30 minutes; at night, 45 minutes.'),
     ref(R.aopa, 'AOPA explains airworthiness and the inoperative-equipment decision in plain language.')
   ],
   news:[
     {t:'10 Regulations To Know Before Your Private Pilot Checkride', s:'Boldmethod', u:'https://www.boldmethod.com/blog/lists/2026/03/ten-faa-regs-to-know-before-your-checkride/', b:'Boldmethod groups the ten FARs most often probed on the private checkride, from certificate and medical rules to required documents, inspections, and VFR equipment under 91.205.'},
     {t:'Guide to Aircraft Airworthiness', s:'AOPA', u:'https://www.aopa.org/go-fly/aircraft-and-ownership/maintenance-and-inspections/aircraft-airworthiness/guide-to-aircraft-airworthiness', b:'AOPA walks through what makes an aircraft legally airworthy, covering the certificate, required inspections, and the pilot in command\'s responsibility to verify safe condition before flight.'},
     {t:'How to Pre-Flight an Airplane (ARROW documents and logs)', s:'AOPA', u:'https://www.aopa.org/training-and-safety/students/presolo/skills/how-to-pre-flight-an-airplane', b:'This AOPA student article explains the ARROW required-documents check and how to confirm the airframe\'s inspections are current by reviewing the maintenance logs.'}
   ],
   videos:[
     {t:'What Documents Are Required In The Airplane? | ARROW Acronym', s:'FlightInsight', u:'https://www.youtube.com/watch?v=I6a_ZbEt9po', views:'250K (approx)', b:'Breaks down each letter of the ARROW acronym so you can prove an aircraft carries every document the FAA requires.'},
     {t:'10 FAA Private Pilot Written Exam Questions on FAR Part 91 Airworthiness', s:'MzeroA Flight Training', u:'https://www.youtube.com/watch?v=BQXCnJ9-EnQ', views:'120K (approx)', b:'Works through real written-test questions on airworthiness so you can apply Part 91 rules the way the exam frames them.'},
     {t:'How to tell if your Aircraft is airworthy: 91.213 & 91.205 explained', s:'Free Pilot Training', u:'https://www.youtube.com/watch?v=zCLWDCBpK8c', views:'90K (approx)', b:'Explains the inoperative-equipment rule and the VFR required-equipment list so you can decide whether a plane is legal to fly.'}
   ]},
  {n:2, subject:'Airspace, Performance, Systems', title:'Airspace, Performance, Systems, and You 🎙️', subjects:['Airspace','Performance & Limits','Systems','Human Factors'], len:'12:54',
   blurb:'The dense second half of preflight preparation.',
   topics:'Airspace classes and VFR minimums, V-speeds, weight and balance, carb ice, pitot-static, the five hazardous attitudes.', audio:'pl_ep02.mp3',
   refs:[
     ref(R.phak, 'The PHAK covers systems, performance, weight and balance, and the aeromedical roots of the five hazardous attitudes.'),
     ref(R.aim, 'On VFR weather minimums, the AIM prescribes the visibility and distance-from-clouds for each class of airspace.'),
     ref(R.aopa, 'AOPA\'s airspace and decision-making resources pair well with this episode.')
   ],
   news:[
     {t:'Airspace Classes Explained (Class A, B, C, D, E, G)', s:'Pilot Institute', u:'https://pilotinstitute.com/airspace-explained/', b:'A comprehensive tour of every US airspace class plus special-use airspace, covering entry rules, equipment, and VFR weather minimums for each.'},
     {t:'Class G Airspace, Explained', s:'Boldmethod', u:'https://www.boldmethod.com/learn-to-fly/airspace/class-g-airspace-rules-explained/', b:'Focuses on the one uncontrolled airspace class, clarifying where it exists and its sometimes-confusing day versus night cloud-clearance and visibility rules.'},
     {t:'3 Rules-Of-Thumb For Flying In Hot Weather', s:'Boldmethod', u:'https://www.boldmethod.com/learn-to-fly/performance/3-rules-of-thumb-in-hot-weather/', b:'Connects density altitude to real aircraft performance with quick mental shortcuts for how heat lengthens takeoffs and saps climb.'}
   ],
   videos:[
     {t:'Airspace Explained - Class A, B, C, D, E, G + Special Use + TFRs', s:'Pilot Institute', u:'https://www.youtube.com/watch?v=y2KrWe47E1s', views:'1.5M (approx)', b:'A visual, chart-based walkthrough of the entire airspace system that pairs each class with its dimensions and requirements.'},
     {t:'Airspace Classes Made Easy in 8 Minutes', s:'Pilot Institute', u:'https://www.youtube.com/watch?v=K7Klkxny_FQ', views:'600K (approx)', b:'A fast, beginner-friendly summary that distills the six airspace classes into the essentials a new student needs to remember.'},
     {t:'Class B Airspace Made Easy: Do Not Be Afraid of the Bravo', s:'Pilot Institute', u:'https://www.youtube.com/watch?v=xQzh0m8FkZI', views:'300K (approx)', b:'Walks through the layout, entry clearance, and equipment rules for the busy airspace around major airports.'}
   ]},
  {n:3, subject:'Weather', title:'Reading the Sky 🎙️', subjects:['Weather'], len:null,
   blurb:'Chester leads the weather you must own before a VFR cross country.',
   topics:'METAR and TAF, true vs magnetic wind, the fog family, fronts, the thunderstorm life cycle, density altitude.', audio:'pl_ep03.mp3',
   refs:[R.awh, R.awc, R.aopawx],
   news:[
     {t:'How to Read a METAR - Our Full Guide to Aviation Weather Reports', s:'Pilot Institute', u:'https://pilotinstitute.com/how-to-read-metar/', b:'Decodes a METAR field by field, from the station identifier and Zulu time through wind, visibility, weather codes, clouds, and altimeter setting.'},
     {t:'How to Read a TAF - Private Pilot\'s Guide', s:'Pilot Institute', u:'https://pilotinstitute.com/how-to-read-a-taf-private-pilots-guide/', b:'Explains how a terminal aerodrome forecast is structured and how to read its time-based change groups to anticipate weather at your destination.'},
     {t:'Aviation Weather Products (Reports & Forecasts)', s:'Boldmethod', u:'https://www.boldmethod.com/products/aviation-weather-products/', b:'Surveys the full suite of weather products pilots use, including METARs, TAFs, PIREPs, winds aloft, AIRMETs, and SIGMETs for hazards like icing and thunderstorms.'}
   ],
   videos:[
     {t:'How to read a METAR aviation weather report', s:'Sporty\'s Pilot Shop', u:'https://www.youtube.com/watch?v=HRFqfbSK9p4', views:'400K (approx)', b:'A concise training tip that decodes a sample METAR line so you can extract conditions at a glance.'},
     {t:'Ultimate Guide to METARs | Private Pilot Ground School', s:'FlightInsight', u:'https://www.youtube.com/watch?v=zjBFYGHBfNo', views:'350K (approx)', b:'A thorough ground-school lesson that covers even the obscure remarks and codes you may encounter in a real METAR.'},
     {t:'How to Read METARs and TAFs | Aviation Weather Explained for Student Pilots', s:'Epic Flight Academy', u:'https://www.youtube.com/watch?v=Mat4pMtmw7M', views:'150K (approx)', b:'Pairs current observations with forecasts so students learn to use METARs and TAFs together when deciding whether to fly.'}
   ]},
  {n:4, subject:'Preflight Procedures', title:'Before You Even Move 🎙️', subjects:['Preflight Procedures'], len:null,
   blurb:'Everything that happens before the airplane moves an inch.',
   topics:'PAVE, the flow vs the checklist, the start fire, taxi wind correction, the runup.', audio:'pl_ep04.mp3',
   refs:[R.phak, R.afh, R.aopa],
   news:[
     {t:'How to Pre-Flight an Airplane', s:'AOPA', u:'https://www.aopa.org/training-and-safety/students/presolo/skills/how-to-pre-flight-an-airplane', b:'A detailed, hands-on guide to the walkaround that stresses understanding what each item checks, from controls and brakes to fuel sampling and the final performance review.'},
     {t:'A Weighty Decision (weight and balance accident analysis)', s:'AOPA Air Safety Institute', u:'https://www.aopa.org/training-and-safety/air-safety-institute/accident-analysis/featured-accidents/epilot-asf-accident-reports-a-weighty-decision', b:'An accident case study showing how skipping proper weight-and-balance planning led to an overloaded takeoff, illustrating why the calculation matters.'},
     {t:'Anatomy of a POH', s:'AOPA', u:'https://www.aopa.org/news-and-media/all-news/2026/january/flight-training/instructor-tip-anatomy-of-a-poh', b:'Breaks down the sections of the Pilot\'s Operating Handbook so you can find the performance and limitations data needed for preflight planning.'}
   ],
   videos:[
     {t:'How to do a PRE-FLIGHT Inspection | Cessna 172', s:'FLY8MA Flight Training', u:'https://www.youtube.com/watch?v=HbFw40T1sCY', views:'700K (approx)', b:'A full Cessna 172 walkaround that demonstrates each checklist item and what a healthy versus a problem condition looks like.'},
     {t:'How to Preflight a Cessna 172 - In Depth Tutorial - G1000', s:'FlightInsight', u:'https://www.youtube.com/watch?v=4cwKZ0Q_Xug', views:'500K (approx)', b:'An in-depth glass-cockpit preflight tutorial covering the cockpit setup and exterior inspection step by step.'},
     {t:'Calculating Weight and Balance', s:'MzeroA Flight Training', u:'https://www.youtube.com/watch?v=Bo2ydJq9F-c', views:'200K (approx)', b:'Walks through computing weight and balance for a trainer so you can confirm the aircraft is loaded within limits before takeoff.'}
   ]},
  {n:5, subject:'Airport Operations', title:'Talking and Taxiing 🎙️', subjects:['Airport Operations'], len:null,
   blurb:'Radios, lights, patterns, and the air the big jets leave behind.',
   topics:'Light gun signals, lost comms, the VASI, traffic patterns, wake turbulence avoidance.', audio:'pl_ep05.mp3',
   refs:[R.aim, R.phak, R.aopa],
   news:[
     {t:'Understanding the Traffic Pattern', s:'Pilot Institute', u:'https://pilotinstitute.com/understanding-the-traffic-pattern/', b:'A plain-language walkthrough of each leg of the standard rectangular traffic pattern, pattern altitude, and how to enter and exit safely.'},
     {t:'The Essential Guide to Runway Markings', s:'Pilot Institute', u:'https://pilotinstitute.com/runway-markings-explained/', b:'Breaks down the white runway and yellow taxiway markings, hold-short lines, and signage that keep ground movement organized and prevent incursions.'},
     {t:'AIM Section 3: Airport Marking Aids and Signs', s:'FAA', u:'https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html', b:'The authoritative FAA reference defining every painted marking and lighted sign a pilot will encounter while taxiing and on the runway.'}
   ],
   videos:[
     {t:'Traffic Pattern Communications (Private Pilot Lesson 5k)', s:'FlightInsight', u:'https://www.youtube.com/watch?v=GyCPJ6az5eg', views:'300K (approx)', b:'Teaches exactly what to say and when on the radio while flying each leg of the traffic pattern.'},
     {t:'Non-Towered Radio Calls Made Easy', s:'FLY8MA', u:'https://www.youtube.com/watch?v=-_xBS6vTO9E', views:'400K (approx)', b:'A practical primer on making correct CTAF self-announce calls at uncontrolled fields.'},
     {t:'Proper Traffic Pattern Entry & Radio Procedures at Non-Towered Airports', s:'Pilot Institute', u:'https://www.youtube.com/watch?v=8ypiqGROwl8', views:'150K (approx)', b:'Demonstrates the recommended 45-degree and overhead entries paired with the matching radio phraseology.'}
   ]},
  {n:6, subject:'Takeoffs & Landings', title:'Takeoffs, Landings, and the Go-Around 🎙️', subjects:['Takeoffs & Landings'], len:null,
   blurb:'Where the wheels meet the world, and the decision that is always free.',
   topics:'Normal, crosswind, short field, soft field, the go-around, the gust factor, the forward slip.', audio:'pl_ep06.mp3',
   refs:[R.afh, R.acs, R.aopa],
   news:[
     {t:'How To Make A Perfect Crosswind Landing', s:'Boldmethod', u:'https://www.boldmethod.com/learn-to-fly/maneuvers/how-to-make-perfect-crosswind-landing-every-time-touchdown-on-centerline-rollout/', b:'Explains the crab-to-sideslip transition for staying on centerline and touching down on the upwind wheel in a crosswind.'},
     {t:'Soft Field Techniques', s:'AOPA', u:'https://www.aopa.org/training-and-safety/students/maneuvers/skills/soft-field-techniques', b:'Covers keeping weight off the nosewheel during soft-field takeoffs and landings on grass, mud, or gravel.'},
     {t:'Mastering Short Field Landings: A Step-by-Step Guide', s:'Pilot Institute', u:'https://pilotinstitute.com/mastering-short-field-landings-a-step-by-step-guide/', b:'Walks through the precise approach speed, aim point, and braking needed to stop in the shortest possible distance.'}
   ],
   videos:[
     {t:'How To Make A Perfect Crosswind Landing Every Time', s:'Boldmethod', u:'https://www.youtube.com/watch?v=ywVEjnVsuiA', views:'200K (approx)', b:'A live session breaking down crosswind correction techniques from approach through rollout.'},
     {t:'Soft Field Takeoff and Landing Techniques and Tips', s:'FlightInsight', u:'https://www.youtube.com/watch?v=qjec7VAjac4', views:'250K (approx)', b:'Demonstrates the back-pressure and ground-effect technique that protects the gear on unimproved surfaces.'},
     {t:'How to Ace Soft Field Takeoff on Your Checkride', s:'Pilot Institute', u:'https://www.youtube.com/watch?v=CxTMbslv_9k', views:'150K (approx)', b:'Shows the exact control inputs and callouts a checkride examiner expects for a soft-field departure.'}
   ]},
  {n:7, subject:'Ground Reference', title:'Steep Turns and Ground Reference 🎙️', subjects:['Ground Reference'], len:null,
   blurb:'Flying with your hands and beating the wind.',
   topics:'Steep turns, the rectangular course, S-turns, turns around a point, constant radius.', audio:'pl_ep07.mp3',
   refs:[R.afh, R.acs, R.aopa],
   news:[
     {t:'The Ultimate Guide to Ground Reference Maneuvers', s:'Pilot Institute', u:'https://pilotinstitute.com/ground-reference-maneuvers/', b:'Explains how rectangular course, S-turns, and turns around a point teach wind correction at low altitude.'},
     {t:'How To Fly Perfect S-Turns, Every Time', s:'Boldmethod', u:'https://www.boldmethod.com/learn-to-fly/maneuvers/how-to-fly-perfect-s-turns-every-time/', b:'Details how to vary bank angle through each half-circle so the ground track stays symmetrical despite the wind.'},
     {t:'Steep Turns', s:'AOPA', u:'https://www.aopa.org/training-and-safety/students/maneuvers/skills/steep-turns', b:'Covers the back-pressure, power, and bank coordination required to hold altitude through a 45-degree banked steep turn.'}
   ],
   videos:[
     {t:'Ground Reference Maneuvers (Private Pilot Lesson 4a)', s:'FlightInsight', u:'https://www.youtube.com/watch?v=oop-jMbrkNg', views:'400K (approx)', b:'A clear ground-school explanation of why wind drives bank-angle changes in every ground reference maneuver.'},
     {t:'Turns Around a Point | Private Pilot Ground Reference Maneuver', s:'Pilot Institute', u:'https://www.youtube.com/watch?v=_rH0iLeAa3I', views:'150K (approx)', b:'Demonstrates from the cockpit how to fly a constant-radius circle around a point by adjusting bank with groundspeed.'},
     {t:'Embry Riddle Ground Reference Flight', s:'ERAU', u:'https://www.youtube.com/watch?v=KS4dyvvV9iA', views:'100K (approx)', b:'Embry-Riddle training footage covering crabbing, the wind-drift circle, and turns around a point.'}
   ]},
  {n:8, subject:'Navigation', title:'Finding Your Way 🎙️', subjects:['Navigation'], len:null,
   blurb:'When the magenta line quits, you go back to the map and the clock.',
   topics:'Pilotage, dead reckoning, VOR, GPS, diversion, the five Cs, transponder codes.', audio:'pl_ep08.mp3',
   refs:[R.phak, R.aim, R.aopa],
   news:[
     {t:'Technique: Pilotage and Dead Reckoning', s:'AOPA', u:'https://www.aopa.org/news-and-media/all-news/2016/march/flight-training-magazine/technique-pilotage-and-dead-reckoning', b:'Explains how to combine landmark navigation with time-speed-distance calculations on a VFR cross-country.'},
     {t:'How To Plan a Cross-Country Flight', s:'Pilot Institute', u:'https://pilotinstitute.com/flight-planning/', b:'A step-by-step guide to building a nav log, choosing checkpoints, and prepping a VFR cross-country.'},
     {t:'How To Pick The Best VFR Cross-Country Checkpoints', s:'Boldmethod', u:'https://www.boldmethod.com/learn-to-fly/private-pilot/how-to-pick-good-vfr-cross-country-checkpoints-for-your-next-xc-flight/', b:'Shows what makes a landmark a reliable checkpoint and how to space them along your route.'}
   ],
   videos:[
     {t:'How to Fly a Cross Country with a NAV LOG (PPL Lesson 49)', s:'FlightInsight', u:'https://www.youtube.com/watch?v=2tIYJyRldzM', views:'300K (approx)', b:'Walks through filling out and flying a real VFR nav log using pilotage and dead reckoning together.'},
     {t:'X/C Navigation Log Explained (WITH Calculations) PPL Lesson 46', s:'FlightInsight', u:'https://www.youtube.com/watch?v=Ydvev6B7IaY', views:'250K (approx)', b:'Breaks down the wind-correction, groundspeed, and time math behind every line of a navigation log.'},
     {t:'Understanding Pilotage vs. Dead-Reckoning', s:'MzeroA Flight Training', u:'https://www.youtube.com/watch?v=qk-AtfppbI8', views:'100K (approx)', b:'Clarifies the difference between navigating by landmarks and navigating purely by calculation.'}
   ]},
  {n:9, subject:'Stalls & Spins', title:'Slow Flight, Stalls, and Spins 🎙️', subjects:['Stalls & Spins'], len:null,
   blurb:'The one that hurts people, taken dead seriously.',
   topics:'The critical angle of attack, stall recovery, the region of reversed command, spin awareness, PARE.', audio:'pl_ep09.mp3',
   refs:[R.afh, R.phak, R.aopa],
   news:[
     {t:'Power-on Stall: How to Recover', s:'Pilot Institute', u:'https://pilotinstitute.com/power-on-stall-recovery/', b:'Explains why power-on stalls happen on departure and the coordinated, reduce-angle-of-attack recovery.'},
     {t:'Power-off Stall: Recovery Steps Made Easy', s:'Pilot Institute', u:'https://pilotinstitute.com/power-off-stall-recovery/', b:'Walks through recognizing and recovering from the approach-configuration stall that mimics a botched landing.'},
     {t:'Technique: Power-on Stall Recovery', s:'AOPA', u:'https://www.aopa.org/news-and-media/all-news/2021/may/flight-training-magazine/technique-power-on-stall', b:'AOPA flight-training guidance on managing rudder and angle of attack to avoid a stall-spin on takeoff.'}
   ],
   videos:[
     {t:'Power-On Stalls: Boldmethod Live', s:'Boldmethod', u:'https://www.youtube.com/watch?v=zhFFeIrdTn8', views:'150K (approx)', b:'A live breakdown of the aerodynamics and recovery technique for departure-style power-on stalls.'},
     {t:'How Stalls Happen, And How To Recover From Them: Boldmethod LIVE', s:'Boldmethod', u:'https://www.youtube.com/watch?v=oRCaOPRoJnQ', views:'200K (approx)', b:'Covers the aerodynamics of the stall and the standard reduce-angle-of-attack recovery procedure.'},
     {t:'How to Ace Power On/Off Stalls On Your Private Pilot Check Ride', s:'Pilot Institute', u:'https://www.youtube.com/watch?v=rZLhreT-p7Q', views:'150K (approx)', b:'Demonstrates the exact entry, recognition, and recovery steps an examiner wants for both stall types.'}
   ]},
  {n:10, subject:'Basic Instrument', title:'When the Window Goes White 🎙️', subjects:['Basic Instrument'], len:null,
   blurb:'The survival skill for inadvertent instrument conditions.',
   topics:'Basic attitude instrument flying, unusual attitude recovery, trust the instruments, the 180 turn.', audio:'pl_ep10.mp3',
   refs:[R.afh, R.phak, R.aopa],
   news:[
     {t:'You Just Lost Your Only Attitude Indicator In IMC...Now What?', s:'Boldmethod', u:'https://www.boldmethod.com/learn-to-fly/systems/you-just-lost-your-only-attitude-indicator-in-imc-now-what/', b:'Walks through a real NASA ASRS partial-panel scenario and explains how to identify the failed gyro, rebuild your instrument scan, and lean on backup attitude sources.'},
     {t:'Encountering IMC - Spatial Disorientation', s:'AOPA Air Safety Institute', u:'https://www.aopa.org/training-and-safety/online-learning/safety-spotlights/spatial-disorientation/encountering-imc', b:'Covers why a VFR pilot who blunders into cloud must trust the instruments over bodily sensations and execute a calm, controlled 180-degree escape.'},
     {t:'Partial-panel in the PFD era', s:'AOPA', u:'https://www.aopa.org/news-and-media/all-news/2024/april/pilot/instrument-tip-partial-panel-in-the-pfd-era', b:'Updates the classic partial-panel discussion for glass cockpits, explaining how to keep flying when the primary flight display or its sensors quit.'}
   ],
   videos:[
     {t:'Now You See Me, Now You Don\'t - Avoiding VFR into IMC', s:'AOPA (Air Safety Institute)', u:'https://www.youtube.com/watch?v=YYIqaij9ByI', views:'200K (approx)', b:'AOPA safety expert breaks down the decision chain that leads VFR pilots into cloud and the cues for turning around before it is too late.'},
     {t:'Air Safety Institute VFR Into IMC With Rod Machado', s:'AOPA (Air Safety Institute)', u:'https://www.youtube.com/watch?v=ruZS0pxALbQ', views:'150K (approx)', b:'Rod Machado uses humor and case studies to teach the survival skills and escape turn for an inadvertent IMC encounter.'},
     {t:'Stop Staring at the Instruments! Mastering Horizon References', s:'FlightInsight', u:'https://www.youtube.com/watch?v=dZl0SDFBhao', views:'100K (approx)', b:'Explains how attitude flying blends outside horizon cues with the panel so you do not fixate on a single instrument.'}
   ]},
  {n:11, subject:'Emergencies', title:'When It Gets Quiet 🎙️', subjects:['Emergencies'], len:'15:16',
   blurb:'Engine failure and malfunctions, handled calmly.',
   topics:'Best glide, best field, the restart flow, the emergency descent, the ELT, aviate-navigate-communicate.', audio:'pl_ep11.mp3',
   refs:[R.afh, R.phak, R.aopa],
   news:[
     {t:'Deadstick Landings: How Pilots Handle Engine-Out Emergencies', s:'Pilot Institute', u:'https://pilotinstitute.com/deadstick-landings/', b:'Lays out engine-out fundamentals from best glide and energy management to terrain selection, using the Gimli Glider as a real-world case.'},
     {t:'Your Quick Guide To Surviving An Emergency Landing', s:'Boldmethod', u:'https://www.boldmethod.com/learn-to-fly/maneuvers/emergency-landing/', b:'A concise field guide to flying the airplane first, picking the best touchdown site, and configuring for the lowest survivable impact speed.'},
     {t:'Engine Failure', s:'AOPA Air Safety Institute', u:'https://www.aopa.org/training-and-safety/online-learning/safety-spotlights/emergency-procedures/engine-failure', b:'Reviews the immediate priorities after a power loss, including establishing glide, running the restart flow, and committing early to a landing area.'}
   ],
   videos:[
     {t:'What to do if your engine fails in flight | Emergency Procedures', s:'FlightInsight', u:'https://www.youtube.com/watch?v=MBMdi5vtGcg', views:'200K (approx)', b:'Step-by-step troubleshooting and decision-making for a sudden in-flight engine failure in a single-engine trainer.'},
     {t:'Engine Failure on Takeoff', s:'MzeroA Flight Training', u:'https://www.youtube.com/watch?v=x0y4XcqeQ88', views:'300K (approx)', b:'Tackles the dangerous low-altitude power loss and why the impossible turn back to the runway is usually the wrong choice.'},
     {t:'Best Glide vs. Minimum Sink: Which Speed Saves You in an Engine Out?', s:'FlightInsight', u:'https://www.youtube.com/watch?v=pGd7wem46_s', views:'100K (approx)', b:'Clarifies when to fly best-glide speed for distance versus minimum-sink speed for time aloft after an engine quits.'}
   ]},
  {n:12, subject:'Night', title:'Flying After Dark 🎙️', subjects:['Night'], len:'15:30',
   blurb:'The wonder and the work of flying after sunset.',
   topics:'Night vision and dark adaptation, position lights, FLAPS night equipment, the night illusions.', audio:'pl_ep12.mp3',
   refs:[R.afh, R.phak, R.aopa],
   news:[
     {t:'Checkride: Night Operations', s:'AOPA', u:'https://www.aopa.org/news-and-media/all-news/2018/january/flight-training-magazine/checkride-night-operations', b:'Explains the night currency rules, required equipment, and what an examiner expects you to know before flying after dark.'},
     {t:'How Can Pilots Fly at Night? See What\'s Required', s:'Pilot Institute', u:'https://pilotinstitute.com/night-flying-airplanes/', b:'Reviews the regulations, eye physiology, and the specific night illusions like autokinesis and the black-hole approach that trip up pilots.'},
     {t:'Everything Is Different at Night', s:'AOPA (Pilot Protection Services)', u:'https://pilot-protection-services.aopa.org/news/2022/december/01/everything-is-different-at-night', b:'Discusses how reduced visual cues, fatigue, and limited landing options raise the risk profile of night flying and how to manage it.'}
   ],
   videos:[
     {t:'Flying At Night', s:'MzeroA Flight Training', u:'https://www.youtube.com/watch?v=Hohd2HaqTgk', views:'250K (approx)', b:'Covers the science behind night vision and illusions plus the common mistakes pilots make on night flights and how to avoid them.'},
     {t:'Night Flying - Everything You Need To Know', s:'FlightInsight', u:'https://www.youtube.com/watch?v=nqqMj_tLBzI', views:'150K (approx)', b:'A broad primer on night planning, lighting, dark adaptation, and flying a safe approach with limited outside references.'},
     {t:'Night Flight Considerations (Private Pilot Lesson 15a)', s:'FLY8MA Flight Training', u:'https://www.youtube.com/watch?v=hiroTW6AyGc', views:'100K (approx)', b:'Ground-school lesson on night equipment requirements, airport lighting, and physiological factors for student pilots.'}
   ]},
  {n:13, subject:'Postflight', title:'Shutdown and Secure 🎙️', subjects:['Postflight'], len:'12:53',
   blurb:'Parking the airplane right, plus a warm season recap.',
   topics:'The after-landing flow, securing the airplane, and the throughlines of the whole season.', audio:'pl_ep13.mp3',
   refs:[R.afh, R.phak, R.aopa],
   news:[
     {t:'Logbooks and Logging Time', s:'AOPA', u:'https://www.aopa.org/training-and-safety/learn-to-fly/old-pages/logging-cross-country-time/logbooks-and-logging-time', b:'Explains what flight time you are required to record, the entries that count toward certificates, and good logbook habits from day one.'},
     {t:'For the record: Logbook inspections 101', s:'AOPA', u:'https://www.aopa.org/news-and-media/all-news/2020/may/pilot/for-the-record-logbook-inspections', b:'Details when and to whom you must present your logbook and how to keep records that hold up to FAA scrutiny.'},
     {t:'8 Tips For Keeping Your Logbooks Clean, Professional, And Interview-Ready', s:'Boldmethod', u:'https://www.boldmethod.com/blog/article/2022/03/8-tips-for-keeping-your-logbooks-interview-ready/', b:'Practical advice for organizing and totaling your logbook so it stays accurate and presentable for checkrides and airline interviews.'}
   ],
   videos:[
     {t:'How To Fill Out Your Logbook', s:'MzeroA Flight Training', u:'https://www.youtube.com/watch?v=VmRttoDddTM', views:'250K (approx)', b:'Demonstrates logging time from Hobbs versus tach and clarifies the difference between PIC, solo, and dual entries.'},
     {t:'FAA 14 CFR 61.51: Pilot Logbooks - What You Need to Log and When', s:'FlightInsight', u:'https://www.youtube.com/watch?v=e08TJAl74RY', views:'100K (approx)', b:'Breaks down the federal recordkeeping rule so you know exactly which flights and conditions must be documented.'},
     {t:'How to Use the Foreflight Logbook', s:'Pilot Institute', u:'https://www.youtube.com/watch?v=s5eVdkpViRA', views:'80K (approx)', b:'A professional pilot walks through best practices for keeping an accurate digital logbook in ForeFlight.'}
   ]}
];

window.PILOT_LOUNGE.episodeForSubject = function(subjectLabel){
  var eps = window.PILOT_LOUNGE.episodes;
  for (var i = 0; i < eps.length; i++){
    if (eps[i].subjects && eps[i].subjects.indexOf(subjectLabel) >= 0) return eps[i];
  }
  return null;
};
