/* The Pilot Lounge - shared subject map + podcast episode index.
   Single source of truth for grouping the question bank by subject
   (quiz + games) and for listing the podcast episodes by subject.

   Supports certificate banks: private (PA), instrument (IR),
   commercial (CA), atp (ATP), student (SP), and multi (ME). subjectOf()
   routes on the ACS prefix, and subjectOrders/subjectOrderFor() give the
   subject list per bank. Podcast episodes currently exist for the Private
   season only; other banks return null from episodeForSubject and simply
   hide the Listen link.

   NEWSFEED MAINTENANCE RULE (read before editing ep.news):
   - Each episode carries a news[] list of links to publicly available
     articles on that subject from known aviation outlets.
   - Every time this file or the podcast page is updated, re-verify each
     news link still resolves. Remove any dead link.
   - Add newer links on the same subject when found.
   - No link older than 10 years in news[] (drop anything past that age).
   - Keep refs[] to FAA public-domain sources, eCFR, ACS, and AOPA.

   POPUP CONTENT RULES:
   - ref.q = text shown in the reference popup. FAA/eCFR/ACS/AIM are public
     domain, so verbatim quotes are fine (wrap them in quotation marks).
     AOPA and any copyrighted source must be paraphrased in our own words,
     never quoted verbatim.
   - news[].b = a short Further Reading summary written in OUR OWN WORDS.
     Never paste the article's text or its hero image (copyright).
   - videos[].b = our own short TLDR of a YouTube video. Never paste the
     transcript or description text. Re-verify each link still plays on
     update, and keep at least two per subject ranked by quality/views. */
window.PILOT_LOUNGE = window.PILOT_LOUNGE || {};

/* Per-certificate area-to-subject maps. Private (PA) splits Area I by task;
   the other certificates map one subject per Area of Operation. */
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
    'IV':'Normal Operations', 'V':'Engine-Out Procedures', 'VI':'Regulations' }
};

window.PILOT_LOUNGE.subjectOf = function(acs){
  var p = String(acs || '').split('.'); var cert = p[0] || ''; var area = p[1] || ''; var task = p[2] || '';
  if (cert === 'SP' || cert === 'IR' || cert === 'CA' || cert === 'ATP' || cert === 'ME'){
    var m = window.PILOT_LOUNGE.subjectMaps[cert] || {};
    return m[area] || 'Other';
  }
  /* Private (PA) and default */
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
  ME: ['Multiengine Aerodynamics','Vmc & Critical Engine','Performance & Systems','Normal Operations','Engine-Out Procedures','Regulations']
};
/* Back-compat: existing Private pages read subjectOrder directly. */
window.PILOT_LOUNGE.subjectOrder = window.PILOT_LOUNGE.subjectOrders.PA;

/* Certificate bank registry. key matches window.PILOT_LOUNGE[key] and data/<key>.js. */
window.PILOT_LOUNGE.certs = [
  {key:'student', label:'Student', prefix:'SP'},
  {key:'private', label:'Private', prefix:'PA'},
  {key:'instrument', label:'Instrument', prefix:'IR'},
  {key:'commercial', label:'Commercial', prefix:'CA'},
  {key:'multi', label:'Multi-Engine', prefix:'ME'},
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

/* Canonical reference URLs (FAA public-domain handbooks, eCFR, ACS, plus AOPA). */
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
     ref(R.phak, 'The Pilot\'s Handbook of Aeronautical Knowledge is the FAA\'s primary knowledge reference, covering aerodynamics, systems, weather, airspace, performance, and aeronautical decision making. A solid anchor for the fundamentals this episode opens with.'),
     ref(R.acs, 'From the ACS: "The ACS integrates the elements of knowledge, risk management, and skill required for each airman certificate or rating." It is the roadmap for both the knowledge test and the checkride.'),
     ref(R.aopa, 'AOPA\'s Air Safety Institute offers free courses, quizzes, and accident case studies across every subject in this season, a good place to go deeper on any topic.')
   ],
   news:[
     {t:'6 Maneuvers You Should Practice On Your Next Flight', s:'Boldmethod', u:'https://www.boldmethod.com/blog/lists/2026/04/six-maneuvers-to-practice-on-your-next-flight/', b:'A reminder that stick-and-rudder skills fade without practice, with a short list of maneuvers worth flying regularly to stay sharp: the go-around, steep turns, the power-off 180, and more.'},
     {t:'Private Pilot Checkride Maneuvers Checklist', s:'Pilot Institute', u:'https://pilotinstitute.com/private-pilot-checkride/', b:'A walk-through of what the private checkride actually covers and how the ACS ties the oral and flight portions together. Handy for picturing the whole flight before you fly it.'}
   ],
   videos:[
     {t:'First Flight Lesson for Student Pilot', s:'Angle of Attack', u:'https://www.youtube.com/watch?v=eDZg7cyAaXI', views:'1.2M', b:'A real first flight lesson where a CFI walks a brand-new student through preflight, taxi, takeoff, and the basic control inputs that make an airplane climb, turn, and descend. A great primer on what flying actually feels like.'},
     {t:'Three Basics to Instantly Impress Your Flight Instructor', s:'The Finer Points', u:'https://www.youtube.com/watch?v=W7DN_HkyOMk', views:'768K', b:'A respected CFI distills three core stick-and-rudder habits every new pilot should build: relax your grip, hold altitude after leveling off, and counter the left-turning tendencies on takeoff. Short and high value.'},
     {t:'Private Pilot Checkride Mock Oral', s:'PilotEssentials', u:'https://www.youtube.com/watch?v=chkjX8_UhnQ', views:'321K', b:'A full mock oral exam covering the breadth of what a private pilot must know, from regulations to systems to weather. Hearing the questions and answers laid out is one of the best ways to gauge the knowledge scope before a checkride.'}
   ]},
  {n:1, subject:'Regs & Airworthiness', title:'Are You Legal, Is She Legal 🎙️', subjects:['Regs & Airworthiness'], len:'11:12',
   blurb:'Pilot qualifications, airworthiness, and cross-country planning.',
   topics:'Certificate, medical, flight review, currency, AROW, AV1ATE, A TOMATO FLAMES, the inop-equipment flow, fuel reserves.', audio:'pl_ep01.mp3',
   refs:[
     ref(R.cfr61, 'Part 61 sets the certification rules for pilots: who may act as pilot in command, the certificate and medical you must hold, recency of experience, and the flight review. The "are you legal" half of this episode lives here.'),
     ref(R.cfr91, 'On VFR fuel reserves, 91.151 reads: "No person may begin a flight in an airplane under VFR conditions unless ... there is enough fuel to fly to the first point of intended landing and ... during the day, to fly after that for at least 30 minutes; or at night, 45 minutes."'),
     ref(R.aopa, 'AOPA explains airworthiness and the inoperative-equipment decision in plain language. The specific articles are linked in Further Reading below.')
   ],
   news:[
     {t:'Leaving the Nest: airworthiness for new pilots', s:'AOPA Flight Training', u:'https://www.aopa.org/news-and-media/all-news/2016/october/flight-training-magazine/leaving-the-nest', b:'Aimed at brand-new certificate holders, it breaks down reading maintenance logs and applying the inoperative-equipment flow so you can confidently answer, can we fly today.'},
     {t:'Checkride: Airworthiness and Systems Operations', s:'AOPA Flight Training', u:'https://www.aopa.org/news-and-media/all-news/2018/july/flight-training-magazine/checkride-airworthiness', b:'A designated examiner lays out the airworthiness and systems questions to expect on the oral, including required documents, expiration dates, and the minimum-equipment concept.'}
   ],
   videos:[
     {t:'Aircraft ARROW Documents (Private Pilot Lesson 1i)', s:'Cyndy Hollman', u:'https://www.youtube.com/watch?v=OmPG_sl9t08', views:'31K', b:'A concise explainer of the ARROW documents an aircraft must carry to be legal to fly, with a note that registration rules changed in 2023. It locks in one of the most frequently tested airworthiness fundamentals quickly.'},
     {t:'Is Your Plane Airworthy? Inoperative Equipment Explained', s:'FlightInsight', u:'https://www.youtube.com/watch?v=VS2Da_n58QI', views:'21K', b:'A clear decision-tree walkthrough of how to determine whether an aircraft is legal to fly with inoperative equipment, covering minimum equipment lists, type certificate data sheets, required-equipment lists, STCs, and airworthiness directives. It turns a confusing regulatory tangle into a usable preflight process.'},
     {t:'Mock Checkride: Airworthiness Requirements', s:'Pilot Certified', u:'https://www.youtube.com/watch?v=lM975iZuk6A', views:'18K', b:'An examiner-style oral segment drilling the airworthiness portion of the private pilot ACS, including required inspections, documents, and airworthiness directives. Great for hearing exactly how legality questions get asked and answered on a checkride.'}
   ]},
  {n:2, subject:'Airspace, Performance, Systems', title:'Airspace, Performance, Systems, and You 🎙️', subjects:['Airspace','Performance & Limits','Systems','Human Factors'], len:'12:54',
   blurb:'The dense second half of preflight preparation.',
   topics:'Airspace classes and VFR minimums, V-speeds, weight and balance, carb ice, pitot-static, the five hazardous attitudes.', audio:'pl_ep02.mp3',
   refs:[
     ref(R.phak, 'On angle of attack, the PHAK notes: "Any time the control yoke or stick is moved fore or aft, the AOA is changed." It also covers systems, performance, weight and balance, and the aeromedical roots of the five hazardous attitudes.'),
     ref(R.aim, 'On VFR weather minimums, the AIM states: "No person may operate an aircraft under basic VFR when the flight visibility is less, or at a distance from clouds that is less, than that prescribed for the corresponding altitude and class of airspace."'),
     ref(R.aopa, 'AOPA\'s airspace and decision-making resources pair well with this episode. The specific articles are linked in Further Reading below.')
   ],
   news:[
     {t:'Airspace Classes Explained (A, B, C, D, E, G)', s:'Pilot Institute', u:'https://pilotinstitute.com/airspace-explained/', b:'A clear rundown of Class A through G, with the entry requirements, equipment, and the VFR visibility and cloud-clearance minimums for each.'},
     {t:'Why Mandatory Cloud Clearance Requirements Exist', s:'Boldmethod', u:'https://www.boldmethod.com/learn-to-fly/regulations/why-vfr-cloud-clearance-requirements-and-regulations-exist-for-flight/', b:'Explains the reasoning behind the different VFR weather minimums across airspace classes, not just the numbers to memorize but why they change.'}
   ],
   videos:[
     {t:'FAA Airspace for VFR Flight', s:'Loves2Fly', u:'https://www.youtube.com/watch?v=wYKI-4XKp1c', views:'740K', b:'A CFI-taught rundown of the airspace system that covers both the classes and the VFR visibility and cloud-clearance requirements, with memory tricks to recall them. It hits both halves of the airspace topic in one place.'},
     {t:'Airspace Classes Made Easy in 8 Minutes', s:'Pilot Institute Airplanes', u:'https://www.youtube.com/watch?v=K7Klkxny_FQ', views:'340K', b:'A fast, well-produced tour of US airspace classes A through G, explaining what each one is, where it sits, and its basic entry rules. A clean overview, ideal as the first airspace video a student watches.'},
     {t:'How to Remember Airspace VFR Weather Minimums', s:'Part Time Pilot', u:'https://www.youtube.com/watch?v=uwyh2F81-GM', views:'73K', b:'A whiteboard lesson that builds a simple triangle memory aid for recalling VFR visibility and cloud-clearance minimums by airspace class, day and night. The best dedicated deep-dive on the minimums specifically, complementing the broader overviews.'}
   ]},
  {n:3, subject:'Weather', title:'Reading the Sky 🎙️', subjects:['Weather'], len:null,
   blurb:'Chester leads the weather you must own before a VFR cross country.',
   topics:'METAR and TAF, true vs magnetic wind, the fog family, fronts, the thunderstorm life cycle, density altitude.', audio:null,
   refs:[R.awh, R.awc, R.aopawx],
   news:[
     {t:'Would You Go? VFR Cross-Country Through Scattered Storms', s:'Boldmethod', u:'https://www.boldmethod.com/learn-to-fly/weather/would-you-go-vfr-cross-country-through-scattered-storms-piper-archer/'},
     {t:'Density Altitude: How It Affects Your Performance', s:'Boldmethod', u:'https://www.boldmethod.com/learn-to-fly/performance/density-altitude-performance/'}
   ]},
  {n:4, subject:'Preflight Procedures', title:'Before You Even Move 🎙️', subjects:['Preflight Procedures'], len:null,
   blurb:'Everything that happens before the airplane moves an inch.',
   topics:'PAVE, the flow vs the checklist, the start fire, taxi wind correction, the runup.', audio:null,
   refs:[R.phak, R.afh, R.aopa],
   news:[
     {t:'How to Pre-Flight an Airplane', s:'AOPA', u:'https://www.aopa.org/training-and-safety/students/presolo/skills/how-to-pre-flight-an-airplane'},
     {t:'PAVE Checklist Explained', s:'Pilot Institute', u:'https://pilotinstitute.com/pave-checklist/'}
   ]},
  {n:5, subject:'Airport Operations', title:'Talking and Taxiing 🎙️', subjects:['Airport Operations'], len:null,
   blurb:'Radios, lights, patterns, and the air the big jets leave behind.',
   topics:'Light gun signals, lost comms, the VASI, traffic patterns, wake turbulence avoidance.', audio:null,
   refs:[R.aim, R.phak, R.aopa],
   news:[
     {t:'Traffic Patterns at Non-Towered Airports', s:'Boldmethod', u:'https://www.boldmethod.com/learn-to-fly/maneuvers/how-to-fly-a-traffic-pattern-at-a-non-towered-airport-pattern-from-entry-to-landing/'},
     {t:'Incorrect Pattern Entry Leads to Mid-Air Conflict', s:'Boldmethod', u:'https://www.boldmethod.com/learn-to-fly/maneuvers/incorrect-pattern-entry-mid-air-conflict-at-non-towered-airport/'}
   ]},
  {n:6, subject:'Takeoffs & Landings', title:'Takeoffs, Landings, and the Go-Around 🎙️', subjects:['Takeoffs & Landings'], len:null,
   blurb:'Where the wheels meet the world, and the decision that is always free.',
   topics:'Normal, crosswind, short field, soft field, the go-around, the gust factor, the forward slip.', audio:null,
   refs:[R.afh, R.acs, R.aopa],
   news:[
     {t:'How To Make A Perfect Crosswind Landing', s:'Boldmethod', u:'https://www.boldmethod.com/learn-to-fly/maneuvers/how-to-make-perfect-crosswind-landing-every-time-touchdown-on-centerline-rollout/'},
     {t:'How To Make A Perfect Crosswind Takeoff', s:'Boldmethod', u:'https://www.boldmethod.com/learn-to-fly/maneuvers/how-to-make-a-perfect-crosswind-takeoff-in-your-airplane-every-time-in-light-or-strong-wind/'}
   ]},
  {n:7, subject:'Ground Reference', title:'Steep Turns and Ground Reference 🎙️', subjects:['Ground Reference'], len:null,
   blurb:'Flying with your hands and beating the wind.',
   topics:'Steep turns, the rectangular course, S-turns, turns around a point, constant radius.', audio:null,
   refs:[R.afh, R.acs, R.aopa],
   news:[
     {t:'The Ultimate Guide to Ground Reference Maneuvers', s:'Pilot Institute', u:'https://pilotinstitute.com/ground-reference-maneuvers/'},
     {t:'How to Fly Turns Around a Point Like a Pro', s:'Pilot Institute', u:'https://pilotinstitute.com/turns-around-a-point/'}
   ]},
  {n:8, subject:'Navigation', title:'Finding Your Way 🎙️', subjects:['Navigation'], len:null,
   blurb:'When the magenta line quits, you go back to the map and the clock.',
   topics:'Pilotage, dead reckoning, VOR, GPS, diversion, the five Cs, transponder codes.', audio:null,
   refs:[R.phak, R.aim, R.aopa],
   news:[
     {t:'Planning the VFR Cross Country Flight, Done Right', s:'Cessna Owner', u:'https://cessnaowner.org/planning-the-vfr-cross-country-flight-and-doing-it-right/'}
   ]},
  {n:9, subject:'Stalls & Spins', title:'Slow Flight, Stalls, and Spins 🎙️', subjects:['Stalls & Spins'], len:null,
   blurb:'The one that hurts people, taken dead seriously.',
   topics:'The critical angle of attack, stall recovery, the region of reversed command, spin awareness, PARE.', audio:null,
   refs:[R.afh, R.phak, R.aopa],
   news:[
     {t:'The Four Steps Of Spin Recovery (PARE), Explained', s:'Boldmethod', u:'https://www.boldmethod.com/learn-to-fly/maneuvers/the-four-steps-of-spin-recovery-explanation-pare-recovery-procedure/'},
     {t:'How to Master Slow Flight, Step by Step', s:'Pilot Institute', u:'https://pilotinstitute.com/how-to-master-slow-flight-step-by-step/'}
   ]},
  {n:10, subject:'Basic Instrument', title:'When the Window Goes White 🎙️', subjects:['Basic Instrument'], len:null,
   blurb:'The survival skill for inadvertent instrument conditions.',
   topics:'Basic attitude instrument flying, unusual attitude recovery, trust the instruments, the 180 turn.', audio:null,
   refs:[R.afh, R.phak, R.aopa],
   news:[
     {t:'178 Seconds: the VFR-into-IMC clock', s:'AOPA', u:'https://www.aopa.org/news-and-media/all-news/2022/june/pilot/asi-tips-178-seconds'},
     {t:'VFR into IMC: Avoidance and Escape', s:'AOPA Air Safety Institute', u:'https://www.aopa.org/training-and-safety/air-safety-institute/vfr-into-imc-avoidance-and-escape'}
   ]},
  {n:11, subject:'Emergencies', title:'When It Gets Quiet 🎙️', subjects:['Emergencies'], len:null,
   blurb:'Engine failure and malfunctions, handled calmly.',
   topics:'Best glide, best field, the restart flow, the emergency descent, the ELT, aviate-navigate-communicate.', audio:null,
   refs:[R.afh, R.phak, R.aopa],
   news:[
     {t:'Engine Failure: Best Glide or Minimum Sink?', s:'Boldmethod', u:'https://www.boldmethod.com/learn-to-fly/maneuvers/power-off-landing-engine-failure-best-glide-or-minimum-sink-how-to-manage-it/'},
     {t:'Deadstick Landings: Handling Engine-Out Emergencies', s:'Pilot Institute', u:'https://pilotinstitute.com/deadstick-landings/'}
   ]},
  {n:12, subject:'Night', title:'Flying After Dark 🎙️', subjects:['Night'], len:null,
   blurb:'The wonder and the work of flying after sunset.',
   topics:'Night vision and dark adaptation, position lights, FLAPS night equipment, the night illusions.', audio:null,
   refs:[R.afh, R.phak, R.aopa],
   news:[
     {t:'How Pilots Fly at Night: What Is Required', s:'Pilot Institute', u:'https://pilotinstitute.com/night-flying-airplanes/'},
     {t:'Forced Landing at Night', s:'PilotWorkshops', u:'https://pilotworkshop.com/tips/forced-landing-at-night/'}
   ]},
  {n:13, subject:'Postflight', title:'Shutdown and Secure 🎙️', subjects:['Postflight'], len:null,
   blurb:'Parking the airplane right, plus a warm season recap.',
   topics:'The after-landing flow, securing the airplane, and the throughlines of the whole season.', audio:null,
   refs:[R.afh, R.phak, R.aopa],
   news:[
     {t:'Postflight Procedures', s:'AOPA', u:'https://www.aopa.org/training-and-safety/students/presolo/skills/postflight-procedures'},
     {t:'The Shutdown Checklist', s:'Plane & Pilot', u:'https://planeandpilotmag.com/shutdown-checklist/'}
   ]}
];

window.PILOT_LOUNGE.episodeForSubject = function(subjectLabel){
  var eps = window.PILOT_LOUNGE.episodes;
  for (var i = 0; i < eps.length; i++){
    if (eps[i].subjects && eps[i].subjects.indexOf(subjectLabel) >= 0) return eps[i];
  }
  return null;
};
