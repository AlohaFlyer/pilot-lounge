/* The Pilot Lounge - Private Pilot question bank.
   Source of truth for all quiz and game modes on this site.
   Each item: { id, acs, q, choices[], a (index of correct), src{doc, ref, url, quote} }
   Facts and quotes trace to FAA public-domain references and the ACS (FAA-S-ACS-6C).
   To extend coverage, add objects to this array. Instrument/Commercial/ATP get their own files later. */

window.PILOT_LOUNGE = window.PILOT_LOUNGE || {};
window.PILOT_LOUNGE.private = {
  "title": "Private Pilot",
  "acsDoc": "FAA-S-ACS-6C",
  "questions": [
    {
      "id": "pp-001",
      "acs": "PA.I.A",
      "q": "May a private pilot share the operating expenses of a flight with passengers?",
      "choices": [
        "Yes, but pay no less than the pro rata share of fuel, oil, airport expenditures, and rental fees",
        "Yes, passengers may pay the entire cost",
        "No, a private pilot may never accept any money"
      ],
      "a": 0,
      "src": {
        "doc": "14 CFR 61.113",
        "ref": "Private pilot privileges and limitations",
        "url": "https://www.ecfr.gov/current/title-14/section-61.113",
        "quote": "A private pilot may not pay less than the pro rata share of the operating expenses of a flight with passengers, provided the expenses involve only fuel, oil, airport expenditures, or rental fees. (14 CFR 61.113(c))"
      }
    },
    {
      "id": "pp-002",
      "acs": "PA.I.A",
      "q": "To carry passengers, how many takeoffs and landings must you have logged in the preceding 90 days?",
      "choices": [
        "One",
        "Three",
        "Five"
      ],
      "a": 1,
      "src": {
        "doc": "14 CFR 61.57",
        "ref": "Recent flight experience",
        "url": "https://www.ecfr.gov/current/title-14/section-61.57",
        "quote": "No person may act as pilot in command of an aircraft carrying passengers unless that person has made at least three takeoffs and three landings within the preceding 90 days. (14 CFR 61.57(a))"
      }
    },
    {
      "id": "pp-003",
      "acs": "PA.I.A",
      "q": "Night passenger currency requires three takeoffs and landings to a full stop during what period?",
      "choices": [
        "Between sunset and sunrise",
        "Between one hour after sunset and one hour before sunrise",
        "Anytime the landing light is required"
      ],
      "a": 1,
      "src": {
        "doc": "14 CFR 61.57(b)",
        "ref": "Night takeoff and landing experience",
        "url": "https://www.ecfr.gov/current/title-14/section-61.57",
        "quote": "The required takeoffs and landings must be to a full stop during the period beginning 1 hour after sunset and ending 1 hour before sunrise. (14 CFR 61.57(b))"
      }
    },
    {
      "id": "pp-004",
      "acs": "PA.I.A",
      "q": "How often is a flight review required, and what is the minimum content?",
      "choices": [
        "Every 12 months, 2 hours ground",
        "Every 24 calendar months, 1 hour ground and 1 hour flight",
        "Every 36 calendar months, 1 hour flight"
      ],
      "a": 1,
      "src": {
        "doc": "14 CFR 61.56",
        "ref": "Flight review",
        "url": "https://www.ecfr.gov/current/title-14/section-61.56",
        "quote": "A flight review consists of a minimum of 1 hour of flight training and 1 hour of ground training, required within the preceding 24 calendar months. (14 CFR 61.56)"
      }
    },
    {
      "id": "pp-005",
      "acs": "PA.I.A",
      "q": "A third-class medical taken at age 41 is valid for how long for private privileges?",
      "choices": [
        "24 calendar months",
        "60 calendar months",
        "48 calendar months"
      ],
      "a": 0,
      "src": {
        "doc": "14 CFR 61.23",
        "ref": "Medical certificate duration",
        "url": "https://www.ecfr.gov/current/title-14/section-61.23",
        "quote": "A third-class medical is valid through the 24th month after the month of examination if the airman was age 40 or older at the exam, or the 60th month if under 40. (14 CFR 61.23(d))"
      }
    },
    {
      "id": "pp-006",
      "acs": "PA.I.B",
      "q": "Which documents must be aboard the aircraft? (AROW)",
      "choices": [
        "Airworthiness cert, Registration, Operating limitations, Weight and balance",
        "Annual logbook, Radio license, Owner manual, Warranty",
        "AD list, Receipts, Oil records, Wiring diagram"
      ],
      "a": 0,
      "src": {
        "doc": "14 CFR 91.203 / 91.9",
        "ref": "Required aboard, AROW",
        "url": "https://www.ecfr.gov/current/title-14/section-91.203",
        "quote": "No person may operate a civil aircraft unless it has within it an appropriate and current airworthiness certificate and registration; operating limitations and weight and balance data must also be available. (14 CFR 91.203, 91.9)"
      }
    },
    {
      "id": "pp-007",
      "acs": "PA.I.B",
      "q": "How often must an aircraft used only for personal flight have an inspection?",
      "choices": [
        "Annual inspection every 12 calendar months",
        "100-hour inspection only",
        "Every 24 calendar months"
      ],
      "a": 0,
      "src": {
        "doc": "14 CFR 91.409",
        "ref": "Inspections",
        "url": "https://www.ecfr.gov/current/title-14/section-91.409",
        "quote": "No person may operate an aircraft unless, within the preceding 12 calendar months, it has had an annual inspection. (14 CFR 91.409(a))"
      }
    },
    {
      "id": "pp-008",
      "acs": "PA.I.B",
      "q": "When is a 100-hour inspection required?",
      "choices": [
        "For any aircraft over 100 hours total time",
        "When the aircraft is operated for hire or for flight instruction for hire",
        "Only for multiengine aircraft"
      ],
      "a": 1,
      "src": {
        "doc": "14 CFR 91.409",
        "ref": "100-hour inspection",
        "url": "https://www.ecfr.gov/current/title-14/section-91.409",
        "quote": "A 100-hour inspection is required when an aircraft is operated for hire, or to give flight instruction for hire. (14 CFR 91.409(b))"
      }
    },
    {
      "id": "pp-009",
      "acs": "PA.I.B",
      "q": "With inoperative equipment and no MEL, what is the correct path before flight?",
      "choices": [
        "Fly if it feels safe",
        "Confirm not required by the equipment list, 91.205, or an AD, then deactivate or remove and placard inoperative",
        "Tape over the gauge and note it later"
      ],
      "a": 1,
      "src": {
        "doc": "14 CFR 91.213(d)",
        "ref": "Inoperative instruments and equipment",
        "url": "https://www.ecfr.gov/current/title-14/section-91.213",
        "quote": "An inoperative item not required for the flight must be removed or deactivated and placarded Inoperative, after determining it is not required by regulation or an airworthiness directive. (14 CFR 91.213(d))"
      }
    },
    {
      "id": "pp-010",
      "acs": "PA.I.D",
      "q": "Minimum VFR fuel reserve for a day cross country at normal cruise?",
      "choices": [
        "20 minutes",
        "30 minutes",
        "45 minutes"
      ],
      "a": 1,
      "src": {
        "doc": "14 CFR 91.151",
        "ref": "Fuel requirements for flight in VFR",
        "url": "https://www.ecfr.gov/current/title-14/section-91.151",
        "quote": "By day, VFR flight requires enough fuel to fly to the first point of intended landing and, at normal cruising speed, to fly after that for at least 30 minutes. (14 CFR 91.151(a))"
      }
    },
    {
      "id": "pp-011",
      "acs": "PA.I.D",
      "q": "Minimum VFR fuel reserve at night?",
      "choices": [
        "30 minutes",
        "45 minutes",
        "60 minutes"
      ],
      "a": 1,
      "src": {
        "doc": "14 CFR 91.151",
        "ref": "Fuel requirements for flight in VFR",
        "url": "https://www.ecfr.gov/current/title-14/section-91.151",
        "quote": "At night, VFR flight requires enough fuel to reach the first point of intended landing and to fly after that for at least 45 minutes at normal cruising speed. (14 CFR 91.151(a))"
      }
    },
    {
      "id": "pp-012",
      "acs": "PA.I.E",
      "q": "What does Class A airspace span and who may operate there?",
      "choices": [
        "Surface to 10,000 MSL, VFR allowed",
        "18,000 MSL to FL600, IFR only",
        "FL180 to FL450, VFR with clearance"
      ],
      "a": 1,
      "src": {
        "doc": "AIM 3-2-2",
        "ref": "Class A airspace",
        "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_2.html",
        "quote": "Class A airspace extends from 18,000 feet MSL up to and including FL600, and operations must be conducted under instrument flight rules. (AIM 3-2-2)"
      }
    },
    {
      "id": "pp-013",
      "acs": "PA.I.E",
      "q": "What is required to enter Class B airspace?",
      "choices": [
        "Establish two-way radio communication",
        "An ATC clearance (cleared into the Bravo) plus Mode C and ADS-B Out",
        "Nothing for a private pilot"
      ],
      "a": 1,
      "src": {
        "doc": "14 CFR 91.131 / AIM 3-2-3",
        "ref": "Class B operations",
        "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_2.html",
        "quote": "No person may operate an aircraft within a Class B airspace area except in compliance with an ATC clearance for that area. (14 CFR 91.131)"
      }
    },
    {
      "id": "pp-014",
      "acs": "PA.I.E",
      "q": "What is required to enter Class C or Class D airspace?",
      "choices": [
        "A clearance into the airspace",
        "Two-way radio communication must be established before entry",
        "Mode C only, no radio needed"
      ],
      "a": 1,
      "src": {
        "doc": "14 CFR 91.130 / 91.129",
        "ref": "Class C and D operations",
        "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_2.html",
        "quote": "Two-way radio communications must be established with the ATC facility before entering Class C or Class D airspace, and maintained thereafter. (14 CFR 91.130, 91.129)"
      }
    },
    {
      "id": "pp-015",
      "acs": "PA.I.E",
      "q": "VFR visibility and cloud clearance in Class C, D, or E below 10,000 MSL?",
      "choices": [
        "1 SM, clear of clouds",
        "3 SM, 500 below, 1,000 above, 2,000 horizontal",
        "5 SM, 1,000 below, 1,000 above, 1 SM horizontal"
      ],
      "a": 1,
      "src": {
        "doc": "14 CFR 91.155",
        "ref": "Basic VFR weather minimums",
        "url": "https://www.ecfr.gov/current/title-14/section-91.155",
        "quote": "In controlled airspace below 10,000 feet MSL the VFR minimums are 3 statute miles visibility and cloud clearance of 500 below, 1,000 above, and 2,000 horizontal. (14 CFR 91.155)"
      }
    },
    {
      "id": "pp-016",
      "acs": "PA.I.E",
      "q": "VFR minimums in Class E at or above 10,000 MSL?",
      "choices": [
        "3 SM, 500 below, 1,000 above, 2,000 horizontal",
        "5 SM, 1,000 below, 1,000 above, 1 SM horizontal",
        "Clear of clouds, 1 SM"
      ],
      "a": 1,
      "src": {
        "doc": "14 CFR 91.155",
        "ref": "Basic VFR weather minimums",
        "url": "https://www.ecfr.gov/current/title-14/section-91.155",
        "quote": "At or above 10,000 feet MSL the VFR minimums are 5 statute miles visibility and cloud clearance of 1,000 below, 1,000 above, and 1 statute mile horizontal. (14 CFR 91.155)"
      }
    },
    {
      "id": "pp-017",
      "acs": "PA.I.F",
      "q": "What happens to maneuvering speed (Va) as aircraft weight decreases?",
      "choices": [
        "It increases",
        "It decreases",
        "It stays the same"
      ],
      "a": 1,
      "src": {
        "doc": "PHAK Ch 5",
        "ref": "Maneuvering speed and load factor",
        "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak",
        "quote": "Maneuvering speed decreases as weight is reduced, because a lighter airplane stalls at a lower speed and reaches the limit load factor sooner. (PHAK, Aerodynamics of Flight)"
      }
    },
    {
      "id": "pp-018",
      "acs": "PA.I.F",
      "q": "Approximate load factor in a level 45 degree banked turn?",
      "choices": [
        "1.0 G",
        "About 1.4 G",
        "2.0 G"
      ],
      "a": 1,
      "src": {
        "doc": "PHAK Ch 5",
        "ref": "Load factor in turns",
        "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak",
        "quote": "At a constant altitude during a coordinated turn, a 45 degree bank imposes a load factor of approximately 1.4 Gs. (PHAK, Aerodynamics of Flight)"
      }
    },
    {
      "id": "pp-019",
      "acs": "PA.I.F",
      "q": "Effect of a forward center of gravity?",
      "choices": [
        "Less stable, lower stall speed",
        "More stable, higher stall speed, longer takeoff",
        "No effect on performance"
      ],
      "a": 1,
      "src": {
        "doc": "PHAK Ch 10",
        "ref": "Weight and balance, CG effects",
        "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak",
        "quote": "A more forward center of gravity increases longitudinal stability, raises the stall speed, and lengthens the takeoff roll. (PHAK, Weight and Balance)"
      }
    },
    {
      "id": "pp-020",
      "acs": "PA.I.G",
      "q": "Under what conditions is carburetor icing most likely?",
      "choices": [
        "Only below freezing",
        "Outside air roughly 20 to 70 F with high humidity, even on warm days",
        "Only at high altitude"
      ],
      "a": 1,
      "src": {
        "doc": "PHAK Ch 7",
        "ref": "Carburetor icing",
        "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak",
        "quote": "Carburetor ice is most likely when temperatures are below 70 degrees F (21 C) and relative humidity is above 80 percent, even on warm days. (PHAK, Aircraft Systems)"
      }
    },
    {
      "id": "pp-021",
      "acs": "PA.I.G",
      "q": "A blocked pitot tube with the drain hole open causes the airspeed indicator to read what?",
      "choices": [
        "Zero",
        "Maximum",
        "No change"
      ],
      "a": 0,
      "src": {
        "doc": "PHAK Ch 8",
        "ref": "Pitot-static system errors",
        "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak",
        "quote": "If the pitot tube becomes blocked while the drain hole remains open, the airspeed indicator reads zero. (PHAK, Flight Instruments)"
      }
    },
    {
      "id": "pp-022",
      "acs": "PA.I.G",
      "q": "What color is 100LL aviation fuel?",
      "choices": [
        "Green",
        "Blue",
        "Clear or straw"
      ],
      "a": 1,
      "src": {
        "doc": "PHAK Ch 7",
        "ref": "Fuel grades and color coding",
        "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak",
        "quote": "Aviation gasoline grade 100LL is dyed blue. (PHAK, Aircraft Systems)"
      }
    },
    {
      "id": "pp-023",
      "acs": "PA.I.G",
      "q": "On a north heading the magnetic compass behaves how during a turn (Northern Hemisphere)?",
      "choices": [
        "It leads the turn (overshoots)",
        "It lags the turn (undershoots), remembered as UNOS",
        "It reads correctly"
      ],
      "a": 1,
      "src": {
        "doc": "PHAK Ch 8",
        "ref": "Magnetic compass errors",
        "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak",
        "quote": "When on a northerly heading and beginning a turn, the magnetic compass initially indicates a turn in the opposite direction (it lags). (PHAK, Flight Instruments)"
      }
    },
    {
      "id": "pp-024",
      "acs": "PA.I.H",
      "q": "Carbon monoxide poisoning is which type of hypoxia?",
      "choices": [
        "Hypoxic",
        "Hypemic",
        "Histotoxic"
      ],
      "a": 1,
      "src": {
        "doc": "PHAK Ch 17 (AMT)",
        "ref": "Hypoxia types",
        "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak",
        "quote": "Hypemic hypoxia is caused by a reduction in the oxygen-carrying capacity of the blood, as occurs with carbon monoxide poisoning. (PHAK, Aeromedical Factors)"
      }
    },
    {
      "id": "pp-025",
      "acs": "PA.I.H",
      "q": "Above what cabin pressure altitude must the required minimum flight crew use oxygen for any time over 30 minutes?",
      "choices": [
        "10,000 MSL",
        "12,500 MSL",
        "14,000 MSL"
      ],
      "a": 1,
      "src": {
        "doc": "14 CFR 91.211",
        "ref": "Supplemental oxygen",
        "url": "https://www.ecfr.gov/current/title-14/section-91.211",
        "quote": "Between 12,500 and 14,000 feet MSL, the required minimum flight crew must use supplemental oxygen for that part of the flight at those altitudes that is of more than 30 minutes duration. (14 CFR 91.211)"
      }
    },
    {
      "id": "pp-026",
      "acs": "PA.I.H",
      "q": "What is the alcohol rule for acting as a crewmember?",
      "choices": [
        "8 hours bottle to throttle, not impaired, BAC under 0.04",
        "4 hours and under 0.08 BAC",
        "12 hours, any BAC"
      ],
      "a": 0,
      "src": {
        "doc": "14 CFR 91.17",
        "ref": "Alcohol or drugs",
        "url": "https://www.ecfr.gov/current/title-14/section-91.17",
        "quote": "No person may act as a crewmember of a civil aircraft within 8 hours after consuming alcohol, while under the influence, or while having an alcohol concentration of 0.04 or greater. (14 CFR 91.17)"
      }
    },
    {
      "id": "pp-027",
      "acs": "PA.I.H",
      "q": "Which lists the five hazardous attitudes?",
      "choices": [
        "Antiauthority, impulsivity, invulnerability, macho, resignation",
        "Fear, anger, doubt, fatigue, stress",
        "Pilot, aircraft, environment, pressure, plan"
      ],
      "a": 0,
      "src": {
        "doc": "PHAK Ch 2",
        "ref": "Aeronautical decision making",
        "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak",
        "quote": "The five hazardous attitudes are antiauthority, impulsivity, invulnerability, macho, and resignation. (PHAK, Aeronautical Decision-Making)"
      }
    },
    {
      "id": "pp-028",
      "acs": "PA.III.A",
      "q": "A steady green light gun signal to an aircraft in flight means what?",
      "choices": [
        "Give way and continue circling",
        "Cleared to land",
        "Return for landing"
      ],
      "a": 1,
      "src": {
        "doc": "AIM 4-3-13",
        "ref": "Traffic control light signals",
        "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_3.html",
        "quote": "A steady green light gun signal directed at an aircraft in flight means cleared to land. (AIM 4-3-13)"
      }
    },
    {
      "id": "pp-029",
      "acs": "PA.III.A",
      "q": "On a standard two-bar VASI, red over white means what?",
      "choices": [
        "You are high",
        "You are on the glide path",
        "You are low"
      ],
      "a": 1,
      "src": {
        "doc": "AIM 2-1-2",
        "ref": "VASI",
        "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_1.html",
        "quote": "On a two-bar VASI, two red lights over two white lights indicate the aircraft is on the glide path. (AIM 2-1-2)"
      }
    },
    {
      "id": "pp-030",
      "acs": "PA.VI.B",
      "q": "Which transponder code signals an emergency?",
      "choices": [
        "7500",
        "7600",
        "7700"
      ],
      "a": 2,
      "src": {
        "doc": "AIM 6-2-2 / 4-1-20",
        "ref": "Transponder emergency codes",
        "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap6_section_2.html",
        "quote": "Code 7700 indicates an emergency, 7600 indicates lost communications, and 7500 indicates hijacking. (AIM 4-1-20, 6-2-2)"
      }
    },
    {
      "id": "pp-031",
      "acs": "PA.VII.D",
      "q": "What two conditions are required for an airplane to spin?",
      "choices": [
        "High speed and steep bank",
        "A stall and yaw (uncoordinated flight)",
        "Low power and flaps down"
      ],
      "a": 1,
      "src": {
        "doc": "AFH Ch 4",
        "ref": "Spin awareness and entry",
        "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook",
        "quote": "A spin occurs when the airplane is stalled and yaw is present, producing autorotation. (Airplane Flying Handbook, Ch 4)"
      }
    },
    {
      "id": "pp-032",
      "acs": "PA.VII.B",
      "q": "When does an airplane stall?",
      "choices": [
        "Only at low airspeed",
        "When the wing exceeds its critical angle of attack, at any airspeed or attitude",
        "Only when the stall horn sounds"
      ],
      "a": 1,
      "src": {
        "doc": "AFH Ch 4 / PHAK Ch 5",
        "ref": "Critical angle of attack",
        "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook",
        "quote": "A stall occurs when the angle of attack exceeds the critical angle of attack, regardless of airspeed, attitude, or weight. (Airplane Flying Handbook, Ch 4)"
      }
    },
    {
      "id": "pp-033",
      "acs": "PA.IX.B",
      "q": "First action after an engine failure in cruise?",
      "choices": [
        "Restart the engine",
        "Pitch for best glide speed (Vg) and pick a field",
        "Declare an emergency"
      ],
      "a": 1,
      "src": {
        "doc": "AFH Ch 17",
        "ref": "Emergency approach and landing",
        "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook",
        "quote": "After an engine failure, establish the best glide speed and select the most suitable landing area within gliding distance. (Airplane Flying Handbook, Ch 17)"
      }
    },
    {
      "id": "pp-034",
      "acs": "PA.XI.A",
      "q": "How are an airplane's position (navigation) lights arranged?",
      "choices": [
        "Green left wing, red right wing, white nose",
        "Red left wing, green right wing, white tail",
        "White all around"
      ],
      "a": 1,
      "src": {
        "doc": "AIM 4-3-23 / 14 CFR 91.209",
        "ref": "Aircraft lighting",
        "url": "https://www.ecfr.gov/current/title-14/section-91.209",
        "quote": "An airplane displays a red position light on the left wingtip, a green light on the right wingtip, and a white light on the tail. (14 CFR 91.209, AIM 4-3-23)"
      }
    },
    {
      "id": "pp-035",
      "acs": "PA.II.D",
      "q": "Aileron position while taxiing with a quartering headwind?",
      "choices": [
        "Ailerons turned into the wind (climb into the wind)",
        "Ailerons turned away from the wind",
        "Ailerons neutral"
      ],
      "a": 0,
      "src": {
        "doc": "AFH Ch 2",
        "ref": "Taxiing in wind",
        "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook",
        "quote": "When taxiing with a quartering headwind, the aileron is turned toward the wind (stick into the wind). (Airplane Flying Handbook, Ch 2)"
      }
    },
    {
      "id": "pp-036",
      "acs": "PA.V.B",
      "q": "In ground reference maneuvers, where is the bank steepest?",
      "choices": [
        "With the strongest headwind",
        "With the strongest tailwind component (highest groundspeed)",
        "It stays constant"
      ],
      "a": 1,
      "src": {
        "doc": "AFH Ch 6",
        "ref": "Ground reference maneuvers",
        "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook",
        "quote": "In turns around a point and other ground reference maneuvers, the steepest bank is held where the airplane is headed directly downwind and groundspeed is highest. (Airplane Flying Handbook, Ch 6)"
      }
    }
  ]
};
