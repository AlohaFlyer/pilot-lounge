/* The Pilot Lounge - shared subject map + podcast episode index.
   Single source of truth for grouping the question bank by subject
   (quiz + games) and for listing the podcast episodes by subject. */
window.PILOT_LOUNGE = window.PILOT_LOUNGE || {};

window.PILOT_LOUNGE.subjectOf = function(acs){
  var p = String(acs || '').split('.'); var area = p[1] || ''; var task = p[2] || '';
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

window.PILOT_LOUNGE.subjectOrder = ['Regs & Airworthiness','Weather','Airspace','Performance & Limits',
  'Systems','Human Factors','Preflight Procedures','Airport Operations','Takeoffs & Landings',
  'Ground Reference','Navigation','Stalls & Spins','Basic Instrument','Emergencies','Night','Postflight'];

window.PILOT_LOUNGE.episodes = [
  {n:0, subject:'Start Here', title:'Welcome to the Lounge', subjects:[],
   blurb:'Meet the six captains, then a 13 minute conversation on the most important things a private pilot must own.',
   topics:'Two legal questions, personal minimums, understanding over memorizing, flows before checklists, angle of attack, fuel discipline, always have an out.', audio:'pl_ep00.mp3'},
  {n:1, subject:'Regs & Airworthiness', title:'Are You Legal, Is She Legal', subjects:['Regs & Airworthiness'],
   blurb:'Pilot qualifications, airworthiness, and cross-country planning.',
   topics:'Certificate, medical, flight review, currency, AROW, AV1ATE, A TOMATO FLAMES, the inop-equipment flow, fuel reserves.', audio:'pl_ep01.mp3'},
  {n:2, subject:'Airspace, Performance, Systems', title:'Airspace, Performance, Systems, and You', subjects:['Airspace','Performance & Limits','Systems','Human Factors'],
   blurb:'The dense second half of preflight preparation.',
   topics:'Airspace classes and VFR minimums, V-speeds, weight and balance, carb ice, pitot-static, the five hazardous attitudes.', audio:null},
  {n:3, subject:'Weather', title:'Reading the Sky', subjects:['Weather'],
   blurb:'Chester leads the weather you must own before a VFR cross country.',
   topics:'METAR and TAF, true vs magnetic wind, the fog family, fronts, the thunderstorm life cycle, density altitude.', audio:null},
  {n:4, subject:'Preflight Procedures', title:'Before You Even Move', subjects:['Preflight Procedures'],
   blurb:'Everything that happens before the airplane moves an inch.',
   topics:'PAVE, the flow vs the checklist, the start fire, taxi wind correction, the runup.', audio:null},
  {n:5, subject:'Airport Operations', title:'Talking and Taxiing', subjects:['Airport Operations'],
   blurb:'Radios, lights, patterns, and the air the big jets leave behind.',
   topics:'Light gun signals, lost comms, the VASI, traffic patterns, wake turbulence avoidance.', audio:null},
  {n:6, subject:'Takeoffs & Landings', title:'Takeoffs, Landings, and the Go-Around', subjects:['Takeoffs & Landings'],
   blurb:'Where the wheels meet the world, and the decision that is always free.',
   topics:'Normal, crosswind, short field, soft field, the go-around, the gust factor, the forward slip.', audio:null},
  {n:7, subject:'Ground Reference', title:'Steep Turns and Ground Reference', subjects:['Ground Reference'],
   blurb:'Flying with your hands and beating the wind.',
   topics:'Steep turns, the rectangular course, S-turns, turns around a point, constant radius.', audio:null},
  {n:8, subject:'Navigation', title:'Finding Your Way', subjects:['Navigation'],
   blurb:'When the magenta line quits, you go back to the map and the clock.',
   topics:'Pilotage, dead reckoning, VOR, GPS, diversion, the five Cs, transponder codes.', audio:null},
  {n:9, subject:'Stalls & Spins', title:'Slow Flight, Stalls, and Spins', subjects:['Stalls & Spins'],
   blurb:'The one that hurts people, taken dead seriously.',
   topics:'The critical angle of attack, stall recovery, the region of reversed command, spin awareness, PARE.', audio:null},
  {n:10, subject:'Basic Instrument', title:'When the Window Goes White', subjects:['Basic Instrument'],
   blurb:'The survival skill for inadvertent instrument conditions.',
   topics:'Basic attitude instrument flying, unusual attitude recovery, trust the instruments, the 180 turn.', audio:null},
  {n:11, subject:'Emergencies', title:'When It Gets Quiet', subjects:['Emergencies'],
   blurb:'Engine failure and malfunctions, handled calmly.',
   topics:'Best glide, best field, the restart flow, the emergency descent, the ELT, aviate-navigate-communicate.', audio:null},
  {n:12, subject:'Night', title:'Flying After Dark', subjects:['Night'],
   blurb:'The wonder and the work of flying after sunset.',
   topics:'Night vision and dark adaptation, position lights, FLAPS night equipment, the night illusions.', audio:null},
  {n:13, subject:'Postflight', title:'Shutdown and Secure', subjects:['Postflight'],
   blurb:'Parking the airplane right, plus a warm season recap.',
   topics:'The after-landing flow, securing the airplane, and the throughlines of the whole season.', audio:null}
];

window.PILOT_LOUNGE.episodeForSubject = function(subjectLabel){
  var eps = window.PILOT_LOUNGE.episodes;
  for (var i = 0; i < eps.length; i++){
    if (eps[i].subjects && eps[i].subjects.indexOf(subjectLabel) >= 0) return eps[i];
  }
  return null;
};
