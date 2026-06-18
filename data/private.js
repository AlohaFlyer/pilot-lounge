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
    },
    {
      "id": "pp-037",
      "acs": "PA.I.E",
      "q": "What does a prohibited area on a sectional chart mean to a VFR pilot?",
      "choices": [
        "Flight within the area is forbidden because of national security or welfare",
        "Flight is permitted if the pilot first contacts the controlling agency",
        "Flight is permitted only above 18,000 feet MSL"
      ],
      "a": 0,
      "src": {
        "doc": "AIM 3-4-2",
        "ref": "Prohibited areas",
        "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_4.html",
        "quote": "Prohibited areas contain airspace within which the flight of aircraft is prohibited. (AIM 3-4-2)"
      }
    },
    {
      "id": "pp-038",
      "acs": "PA.I.E",
      "q": "Before flying through an active restricted area, what must a pilot do?",
      "choices": [
        "Obtain authorization from the controlling or using agency",
        "Nothing, restricted areas only apply to military aircraft",
        "Squawk 7700 and proceed at any altitude"
      ],
      "a": 0,
      "src": {
        "doc": "AIM 3-4-3",
        "ref": "Restricted areas",
        "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_4.html",
        "quote": "Restricted areas denote the existence of unusual, often invisible, hazards to aircraft, and penetration without authorization from the using or controlling agency may be extremely hazardous. (AIM 3-4-3)"
      }
    },
    {
      "id": "pp-039",
      "acs": "PA.I.E",
      "q": "May a VFR pilot operate through an active Military Operations Area (MOA) without a clearance?",
      "choices": [
        "Yes, but the pilot should exercise extreme caution and contact the controlling agency for traffic advisories",
        "No, an MOA is closed to all civil traffic when active",
        "Yes, but only above 10,000 feet MSL"
      ],
      "a": 0,
      "src": {
        "doc": "AIM 3-4-5",
        "ref": "Military operations areas",
        "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_4.html",
        "quote": "Pilots operating under VFR should exercise extreme caution while flying within an MOA when military activity is being conducted. (AIM 3-4-5)"
      }
    },
    {
      "id": "pp-040",
      "acs": "PA.I.C",
      "q": "Where can a pilot find information about a Temporary Flight Restriction (TFR) before a flight?",
      "choices": [
        "In a NOTAM obtained during a standard weather briefing",
        "Only on the sectional chart legend",
        "TFRs are never published in advance"
      ],
      "a": 0,
      "src": {
        "doc": "AIM 3-5-3",
        "ref": "Temporary flight restrictions",
        "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_5.html",
        "quote": "Pilots are expected to check appropriate NOTAMs during flight planning to become aware of temporary flight restrictions. (AIM 3-5-3)"
      }
    },
    {
      "id": "pp-041",
      "acs": "PA.I.E",
      "q": "Within the 30 nautical mile Mode C veil around a Class B primary airport, what equipment is required?",
      "choices": [
        "An operable transponder with automatic altitude reporting (Mode C)",
        "A two-way radio only",
        "No special equipment below 1,200 feet AGL"
      ],
      "a": 0,
      "src": {
        "doc": "14 CFR 91.215",
        "ref": "Transponder Mode C veil",
        "url": "https://www.ecfr.gov/current/title-14/section-91.215",
        "quote": "All aircraft within 30 nautical miles of a Class B primary airport from the surface up to 10,000 feet MSL must have an operable coded radar beacon transponder with automatic altitude reporting. (14 CFR 91.215)"
      }
    },
    {
      "id": "pp-042",
      "acs": "PA.I.E",
      "q": "In which airspace is ADS-B Out equipment generally required?",
      "choices": [
        "In most airspace where a Mode C transponder is required, including Class A, B, and C and the Mode C veil",
        "Only in Class A airspace above 18,000 feet",
        "Only when operating at night"
      ],
      "a": 0,
      "src": {
        "doc": "14 CFR 91.225",
        "ref": "ADS-B Out requirements",
        "url": "https://www.ecfr.gov/current/title-14/section-91.225",
        "quote": "ADS-B Out is required to operate in Class A, B, and C airspace, within the Mode C veil, and above 10,000 feet MSL excluding airspace below 2,500 feet AGL. (14 CFR 91.225)"
      }
    },
    {
      "id": "pp-043",
      "acs": "PA.III.B",
      "q": "When two aircraft of the same category are converging at the same altitude, which has the right of way?",
      "choices": [
        "The aircraft to the other's right",
        "The faster aircraft",
        "The aircraft at the higher altitude"
      ],
      "a": 0,
      "src": {
        "doc": "14 CFR 91.113",
        "ref": "Right-of-way rules, converging",
        "url": "https://www.ecfr.gov/current/title-14/section-91.113",
        "quote": "When aircraft of the same category are converging at approximately the same altitude, the aircraft to the other's right has the right-of-way. (14 CFR 91.113(d))"
      }
    },
    {
      "id": "pp-044",
      "acs": "PA.III.B",
      "q": "When two aircraft are approaching head-on, what is the correct action?",
      "choices": [
        "Each pilot shall alter course to the right",
        "Each pilot shall alter course to the left",
        "The lower aircraft shall give way"
      ],
      "a": 0,
      "src": {
        "doc": "14 CFR 91.113",
        "ref": "Right-of-way rules, approaching head-on",
        "url": "https://www.ecfr.gov/current/title-14/section-91.113",
        "quote": "When aircraft are approaching each other head-on, or nearly so, each pilot of each aircraft shall alter course to the right. (14 CFR 91.113(e))"
      }
    },
    {
      "id": "pp-045",
      "acs": "PA.III.B",
      "q": "Which aircraft has the right of way over all other air traffic?",
      "choices": [
        "An aircraft in distress",
        "A balloon",
        "An airplane on final approach"
      ],
      "a": 0,
      "src": {
        "doc": "14 CFR 91.113",
        "ref": "Right-of-way rules, in distress",
        "url": "https://www.ecfr.gov/current/title-14/section-91.113",
        "quote": "An aircraft in distress has the right-of-way over all other air traffic. (14 CFR 91.113(c))"
      }
    },
    {
      "id": "pp-046",
      "acs": "PA.III.A",
      "q": "Over a congested area of a city or town, what is the minimum safe altitude except for takeoff or landing?",
      "choices": [
        "1,000 feet above the highest obstacle within a horizontal radius of 2,000 feet",
        "500 feet above the surface",
        "2,000 feet above the highest obstacle"
      ],
      "a": 0,
      "src": {
        "doc": "14 CFR 91.119",
        "ref": "Minimum safe altitudes, congested areas",
        "url": "https://www.ecfr.gov/current/title-14/section-91.119",
        "quote": "Over any congested area of a city, town, or settlement an altitude of 1,000 feet above the highest obstacle within a horizontal radius of 2,000 feet of the aircraft is required. (14 CFR 91.119(b))"
      }
    },
    {
      "id": "pp-047",
      "acs": "PA.III.A",
      "q": "Over other than congested areas, what is the minimum safe altitude?",
      "choices": [
        "500 feet above the surface, except over open water or sparsely populated areas",
        "1,000 feet above the surface",
        "200 feet above the surface"
      ],
      "a": 0,
      "src": {
        "doc": "14 CFR 91.119",
        "ref": "Minimum safe altitudes, other than congested",
        "url": "https://www.ecfr.gov/current/title-14/section-91.119",
        "quote": "Over other than congested areas an altitude of 500 feet above the surface is required, except over open water or sparsely populated areas. (14 CFR 91.119(c))"
      }
    },
    {
      "id": "pp-048",
      "acs": "PA.I.E",
      "q": "Below 10,000 feet MSL, what is the maximum indicated airspeed allowed?",
      "choices": [
        "250 knots",
        "200 knots",
        "230 knots"
      ],
      "a": 0,
      "src": {
        "doc": "14 CFR 91.117",
        "ref": "Aircraft speed below 10,000 MSL",
        "url": "https://www.ecfr.gov/current/title-14/section-91.117",
        "quote": "Unless otherwise authorized by the Administrator, no person may operate an aircraft below 10,000 feet MSL at an indicated airspeed of more than 250 knots. (14 CFR 91.117(a))"
      }
    },
    {
      "id": "pp-049",
      "acs": "PA.I.E",
      "q": "What is the maximum indicated airspeed below 2,500 feet AGL within 4 NM of a Class C or Class D primary airport?",
      "choices": [
        "200 knots",
        "250 knots",
        "230 knots"
      ],
      "a": 0,
      "src": {
        "doc": "14 CFR 91.117",
        "ref": "Aircraft speed near Class C or D",
        "url": "https://www.ecfr.gov/current/title-14/section-91.117",
        "quote": "No person may operate an aircraft at or below 2,500 feet above the surface within 4 nautical miles of the primary airport of a Class C or Class D airspace area at an indicated airspeed of more than 200 knots. (14 CFR 91.117(b))"
      }
    },
    {
      "id": "pp-050",
      "acs": "PA.I.E",
      "q": "When must each occupant of a U.S.-registered civil aircraft wear a safety belt during a flight?",
      "choices": [
        "During movement on the surface, takeoff, and landing",
        "Only during takeoff and landing",
        "Only when the pilot in command decides it is necessary"
      ],
      "a": 0,
      "src": {
        "doc": "14 CFR 91.107",
        "ref": "Use of safety belts",
        "url": "https://www.ecfr.gov/current/title-14/section-91.107",
        "quote": "Each person on board a U.S.-registered civil aircraft must occupy an approved seat or berth with a safety belt properly secured during movement on the surface, takeoff, and landing. (14 CFR 91.107(a)(3))"
      }
    },
    {
      "id": "pp-051",
      "acs": "PA.III.B",
      "q": "Who is directly responsible for, and the final authority as to, the operation of an aircraft?",
      "choices": [
        "The pilot in command",
        "The aircraft owner",
        "Air traffic control"
      ],
      "a": 0,
      "src": {
        "doc": "14 CFR 91.3",
        "ref": "Responsibility and authority of the PIC",
        "url": "https://www.ecfr.gov/current/title-14/section-91.3",
        "quote": "The pilot in command of an aircraft is directly responsible for, and is the final authority as to, the operation of that aircraft. (14 CFR 91.3(a))"
      }
    },
    {
      "id": "pp-052",
      "acs": "PA.I.C",
      "q": "Before beginning a flight, what preflight action does 14 CFR 91.103 require regarding fuel and alternatives?",
      "choices": [
        "The pilot must become familiar with all available information, including fuel requirements and alternatives if the flight cannot be completed as planned",
        "Only the destination weather is required",
        "No specific preflight planning is required for VFR flights"
      ],
      "a": 0,
      "src": {
        "doc": "14 CFR 91.103",
        "ref": "Preflight action",
        "url": "https://www.ecfr.gov/current/title-14/section-91.103",
        "quote": "Each pilot in command shall, before beginning a flight, become familiar with all available information concerning that flight, including fuel requirements and alternatives available if the planned flight cannot be completed. (14 CFR 91.103)"
      }
    },
    {
      "id": "pp-053",
      "acs": "PA.III.B",
      "q": "Operating an aircraft in a careless or reckless manner so as to endanger life or property violates which rule?",
      "choices": [
        "14 CFR 91.13",
        "14 CFR 91.15",
        "14 CFR 91.7"
      ],
      "a": 0,
      "src": {
        "doc": "14 CFR 91.13",
        "ref": "Careless or reckless operation",
        "url": "https://www.ecfr.gov/current/title-14/section-91.13",
        "quote": "No person may operate an aircraft in a careless or reckless manner so as to endanger the life or property of another. (14 CFR 91.13(a))"
      }
    },
    {
      "id": "pp-054",
      "acs": "PA.I.G",
      "q": "What is the primary effect of an increase in density altitude on airplane performance?",
      "choices": [
        "Reduced engine power, thrust, and lift, degrading takeoff and climb performance",
        "Improved climb performance because the air is thinner",
        "No effect as long as the airport elevation is below sea level"
      ],
      "a": 0,
      "src": {
        "doc": "PHAK Ch 11",
        "ref": "Density altitude effects on performance",
        "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak",
        "quote": "As density altitude increases, engine power output, propeller efficiency, and lift all decrease, reducing aircraft performance. (PHAK Ch 11)"
      }
    },
    {
      "id": "pp-055",
      "acs": "PA.I.G",
      "q": "How does an increase in humidity affect aircraft performance?",
      "choices": [
        "It decreases performance because water vapor is less dense than dry air, lowering air density",
        "It increases performance because moist air provides more lift",
        "It has no measurable effect on engine power"
      ],
      "a": 0,
      "src": {
        "doc": "PHAK Ch 11",
        "ref": "Humidity effect on density altitude",
        "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak",
        "quote": "Because water vapor is lighter than air, moist air is less dense than dry air, so high humidity increases density altitude and decreases performance. (PHAK Ch 11)"
      }
    },
    {
      "id": "pp-056",
      "acs": "PA.I.F",
      "q": "If an airplane is loaded beyond its maximum gross weight, what is one likely effect?",
      "choices": [
        "A higher stall speed and reduced climb performance",
        "A lower stall speed and improved climb",
        "No change to performance as long as the CG is within limits"
      ],
      "a": 0,
      "src": {
        "doc": "PHAK Ch 10",
        "ref": "Effects of weight on performance",
        "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak",
        "quote": "An overloaded aircraft experiences a higher takeoff speed, longer takeoff run, reduced rate and angle of climb, and a higher stalling speed. (PHAK Ch 10)"
      }
    },
    {
      "id": "pp-057",
      "acs": "PA.I.H",
      "q": "What are the four forces acting on an airplane in straight-and-level unaccelerated flight?",
      "choices": [
        "Lift, weight, thrust, and drag",
        "Lift, gravity, power, and friction",
        "Lift, load, thrust, and torque"
      ],
      "a": 0,
      "src": {
        "doc": "PHAK Ch 5",
        "ref": "Four forces of flight",
        "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak",
        "quote": "The four forces acting on an airplane in flight are lift, weight, thrust, and drag. (PHAK Ch 5)"
      }
    },
    {
      "id": "pp-058",
      "acs": "PA.I.H",
      "q": "How is the angle of attack defined?",
      "choices": [
        "The angle between the chord line of the wing and the relative wind",
        "The angle between the longitudinal axis and the horizon",
        "The angle between the wing and the ground"
      ],
      "a": 0,
      "src": {
        "doc": "PHAK Ch 5",
        "ref": "Angle of attack",
        "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak",
        "quote": "The angle of attack is the angle between the chord line of the wing and the direction of the relative wind. (PHAK Ch 5)"
      }
    },
    {
      "id": "pp-059",
      "acs": "PA.I.H",
      "q": "What happens during the flare just before landing when an airplane enters ground effect?",
      "choices": [
        "Induced drag decreases and the airplane tends to float because of reduced wingtip vortices",
        "Induced drag increases and the airplane settles rapidly",
        "Lift is lost entirely and the airplane stalls"
      ],
      "a": 0,
      "src": {
        "doc": "PHAK Ch 5",
        "ref": "Ground effect",
        "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak",
        "quote": "When an aircraft is flown within approximately one wingspan of the surface, the reduction of wingtip vortices reduces induced drag, an effect known as ground effect. (PHAK Ch 5)"
      }
    },
    {
      "id": "pp-060",
      "acs": "PA.I.H",
      "q": "What is the primary cause of P-factor in a single-engine propeller airplane at high angles of attack?",
      "choices": [
        "The descending propeller blade produces more thrust than the ascending blade, yawing the nose left",
        "The exhaust gases spiral around the fuselage and strike the rudder",
        "Engine torque rolls the airplane to the right"
      ],
      "a": 0,
      "src": {
        "doc": "PHAK Ch 5",
        "ref": "P-factor, asymmetric thrust",
        "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak",
        "quote": "At high angles of attack the descending propeller blade on the right takes a larger bite of air, creating asymmetric thrust that yaws the airplane to the left. (PHAK Ch 5)"
      }
    },
    {
      "id": "pp-061",
      "acs": "PA.I.H",
      "q": "On a Vg diagram, what does the positive limit load factor represent?",
      "choices": [
        "The maximum load factor the structure is designed to withstand before structural damage",
        "The airspeed at which the airplane stalls",
        "The maximum speed at which the flaps may be extended"
      ],
      "a": 0,
      "src": {
        "doc": "PHAK Ch 5",
        "ref": "Vg diagram and load limits",
        "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak",
        "quote": "The Vg diagram shows the limit load factor, the maximum load the aircraft can sustain without permanent structural deformation. (PHAK Ch 5)"
      }
    },
    {
      "id": "pp-062",
      "acs": "PA.I.H",
      "q": "What kind of static stability tends to return an airplane to its original pitch attitude after a disturbance?",
      "choices": [
        "Positive static stability",
        "Negative static stability",
        "Neutral static stability"
      ],
      "a": 0,
      "src": {
        "doc": "PHAK Ch 5",
        "ref": "Static stability",
        "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak",
        "quote": "Positive static stability is the initial tendency of an aircraft to return to its original position after being disturbed. (PHAK Ch 5)"
      }
    },
    {
      "id": "pp-063",
      "acs": "PA.I.G",
      "q": "On an ammeter, what does a continuous discharge indication usually mean?",
      "choices": [
        "The alternator or generator is not supplying current and the battery is being drained",
        "The battery is fully charged",
        "The electrical load is being met normally"
      ],
      "a": 0,
      "src": {
        "doc": "PHAK Ch 7",
        "ref": "Electrical system, ammeter",
        "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak",
        "quote": "An ammeter that shows a discharge indicates that the alternator or generator output is inadequate and the battery is supplying the electrical load. (PHAK Ch 7)"
      }
    },
    {
      "id": "pp-064",
      "acs": "PA.I.G",
      "q": "Which flight instruments are typically driven by the engine-driven vacuum system?",
      "choices": [
        "The attitude indicator and the heading indicator",
        "The airspeed indicator and the altimeter",
        "The turn coordinator and the vertical speed indicator"
      ],
      "a": 0,
      "src": {
        "doc": "PHAK Ch 8",
        "ref": "Vacuum system and gyroscopic instruments",
        "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak",
        "quote": "The vacuum system spins the gyros in the attitude indicator and the heading indicator. (PHAK Ch 8)"
      }
    },
    {
      "id": "pp-065",
      "acs": "PA.I.G",
      "q": "During the engine runup magneto check, what indicates a normal magneto?",
      "choices": [
        "A small RPM drop within limits when switching from BOTH to a single magneto",
        "An RPM increase when switching to a single magneto",
        "No change in RPM and rough running"
      ],
      "a": 0,
      "src": {
        "doc": "PHAK Ch 7",
        "ref": "Ignition system, magneto check",
        "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak",
        "quote": "When switching from both magnetos to a single magneto a slight drop in RPM is normal, and an excessive drop indicates a fouled plug or faulty ignition. (PHAK Ch 7)"
      }
    },
    {
      "id": "pp-066",
      "acs": "PA.I.G",
      "q": "How should a pilot check fuel for water and sediment contamination during preflight?",
      "choices": [
        "Drain a sample from each tank sump and the gascolator into a clear container and inspect it",
        "Shake the wings and listen for sloshing",
        "Visually check the fuel gauges only"
      ],
      "a": 0,
      "src": {
        "doc": "PHAK Ch 7",
        "ref": "Fuel system, contamination check",
        "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak",
        "quote": "Fuel should be drained from each sump and the main fuel strainer into a transparent container to check for water, sediment, and proper grade. (PHAK Ch 7)"
      }
    },
    {
      "id": "pp-067",
      "acs": "PA.I.G",
      "q": "On a constant-speed propeller, what does the propeller control adjust?",
      "choices": [
        "The blade pitch, which the governor uses to hold a selected RPM",
        "The fuel flow to the engine",
        "The magneto timing"
      ],
      "a": 0,
      "src": {
        "doc": "PHAK Ch 7",
        "ref": "Constant-speed propeller",
        "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak",
        "quote": "A constant-speed propeller uses a governor to vary blade pitch automatically to maintain the RPM selected by the pilot. (PHAK Ch 7)"
      }
    },
    {
      "id": "pp-068",
      "acs": "PA.IX.E",
      "q": "Under what condition must an emergency locator transmitter (ELT) battery be replaced or recharged?",
      "choices": [
        "When the transmitter has been in use for more than 1 cumulative hour or when 50 percent of its useful life has expired",
        "Only when the ELT fails a bench test",
        "Every 6 calendar months regardless of use"
      ],
      "a": 0,
      "src": {
        "doc": "14 CFR 91.207",
        "ref": "Emergency locator transmitters",
        "url": "https://www.ecfr.gov/current/title-14/section-91.207",
        "quote": "Batteries used in the ELT must be replaced when the transmitter has been in use for more than 1 cumulative hour or when 50 percent of their useful life has expired. (14 CFR 91.207(c))"
      }
    },
    {
      "id": "pp-069",
      "acs": "PA.I.I",
      "q": "What sensory illusion can cause spatial disorientation when a pilot has no outside visual reference?",
      "choices": [
        "The vestibular system can falsely sense attitude and motion, leading to disorientation",
        "The eyes always provide accurate attitude information in clouds",
        "Disorientation only occurs above 10,000 feet"
      ],
      "a": 0,
      "src": {
        "doc": "PHAK Ch 17",
        "ref": "Spatial disorientation",
        "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak",
        "quote": "Spatial disorientation results when the vestibular and other senses provide false information about attitude in the absence of reliable outside visual references. (PHAK Ch 17)"
      }
    },
    {
      "id": "pp-070",
      "acs": "PA.I.I",
      "q": "What is the most effective technique for scanning for traffic at night?",
      "choices": [
        "Use off-center viewing because the night-sensitive rods are around the periphery of the eye",
        "Stare directly at each object for several seconds",
        "Rely entirely on aircraft position lights"
      ],
      "a": 0,
      "src": {
        "doc": "PHAK Ch 17",
        "ref": "Night vision and scanning",
        "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak",
        "quote": "Because the night-adapted rods lie off-center in the retina, off-center viewing is used to detect objects in the dark. (PHAK Ch 17)"
      }
    },
    {
      "id": "pp-071",
      "acs": "PA.I.I",
      "q": "What are the symptoms and corrective action for hyperventilation?",
      "choices": [
        "Lightheadedness and tingling, corrected by slowing the breathing rate or breathing into a bag",
        "Blue fingernails, corrected only by supplemental oxygen",
        "Severe headache, corrected by descending immediately"
      ],
      "a": 0,
      "src": {
        "doc": "PHAK Ch 17",
        "ref": "Hyperventilation",
        "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak",
        "quote": "Hyperventilation causes lightheadedness, tingling, and visual impairment, and it is corrected by consciously slowing the breathing rate. (PHAK Ch 17)"
      }
    },
    {
      "id": "pp-072",
      "acs": "PA.I.I",
      "q": "What is the danger of carbon monoxide entering the cabin from a faulty exhaust or heater?",
      "choices": [
        "It binds to hemoglobin and reduces the blood's ability to carry oxygen, impairing the pilot",
        "It causes the pitot tube to freeze",
        "It only affects the engine, not the pilot"
      ],
      "a": 0,
      "src": {
        "doc": "PHAK Ch 17",
        "ref": "Carbon monoxide poisoning",
        "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak",
        "quote": "Carbon monoxide attaches to hemoglobin far more readily than oxygen, reducing the blood's capacity to carry oxygen to the body. (PHAK Ch 17)"
      }
    },
    {
      "id": "pp-073",
      "acs": "PA.I.I",
      "q": "What does the personal checklist IMSAFE help a pilot evaluate?",
      "choices": [
        "Personal fitness to fly: illness, medication, stress, alcohol, fatigue, and emotion or eating",
        "The condition of the airframe before flight",
        "The weather along the route"
      ],
      "a": 0,
      "src": {
        "doc": "PHAK Ch 2",
        "ref": "IMSAFE checklist",
        "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak",
        "quote": "The IMSAFE checklist evaluates the pilot for illness, medication, stress, alcohol, fatigue, and emotion before each flight. (PHAK Ch 2)"
      }
    },
    {
      "id": "pp-074",
      "acs": "PA.I.I",
      "q": "How long should a pilot wait after scuba diving that required a controlled ascent before flying to cabin altitudes above 8,000 feet?",
      "choices": [
        "At least 24 hours",
        "At least 2 hours",
        "No wait is necessary"
      ],
      "a": 0,
      "src": {
        "doc": "AIM 8-1-2",
        "ref": "Flight after scuba diving",
        "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap8_section_1.html",
        "quote": "A pilot should wait at least 24 hours after any scuba dive requiring a controlled ascent before flying to cabin pressure altitudes above 8,000 feet. (AIM 8-1-2)"
      }
    },
    {
      "id": "pp-075",
      "acs": "PA.II.B",
      "q": "On a runway, what do the threshold markings (a series of longitudinal stripes) identify?",
      "choices": [
        "The beginning of the runway available for landing",
        "A closed runway",
        "The location of the displaced threshold lights only"
      ],
      "a": 0,
      "src": {
        "doc": "AIM 2-3-3",
        "ref": "Runway threshold markings",
        "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html",
        "quote": "Runway threshold markings come in the form of longitudinal stripes and identify the beginning of the runway available for landing. (AIM 2-3-3)"
      }
    },
    {
      "id": "pp-076",
      "acs": "PA.II.B",
      "q": "What do runway holding position markings consist of, and what must a pilot do at them?",
      "choices": [
        "Four yellow lines, two solid and two dashed, where the aircraft must stop on the solid side until cleared",
        "A single white line that may be crossed at any time",
        "A red square that marks the runway centerline"
      ],
      "a": 0,
      "src": {
        "doc": "AIM 2-3-5",
        "ref": "Runway holding position markings",
        "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html",
        "quote": "Holding position markings consist of four yellow lines, two solid and two dashed, and aircraft must stop on the solid line side until cleared to proceed. (AIM 2-3-5)"
      }
    },
    {
      "id": "pp-077",
      "acs": "PA.II.B",
      "q": "What does a red and white sign with the runway numbers (for example 15-33) at a taxiway/runway intersection indicate?",
      "choices": [
        "A mandatory instruction sign marking the holding position for a runway",
        "A direction sign to a taxiway",
        "A destination sign to the terminal"
      ],
      "a": 0,
      "src": {
        "doc": "AIM 2-3-8",
        "ref": "Mandatory instruction signs",
        "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html",
        "quote": "Mandatory instruction signs have a red background with white inscription and denote a runway holding position or area where aircraft are prohibited from entering. (AIM 2-3-8)"
      }
    },
    {
      "id": "pp-078",
      "acs": "PA.II.A",
      "q": "Within a segmented circle, how does the landing direction indicator or tetrahedron help a pilot?",
      "choices": [
        "It shows the direction of landings and takeoffs in use at the airport",
        "It shows the wind speed in knots",
        "It marks the location of the fuel pumps"
      ],
      "a": 0,
      "src": {
        "doc": "AIM 4-3-4",
        "ref": "Segmented circle and wind indicators",
        "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_3.html",
        "quote": "The segmented circle system includes a wind cone and may include a landing direction indicator that shows the direction of landings and takeoffs. (AIM 4-3-4)"
      }
    },
    {
      "id": "pp-079",
      "acs": "PA.II.A",
      "q": "On a pilot-controlled lighting field, how does a pilot activate the runway lights?",
      "choices": [
        "By keying the aircraft microphone a set number of times on the published CTAF frequency",
        "By calling the nearest control tower by telephone",
        "By turning on the aircraft landing light"
      ],
      "a": 0,
      "src": {
        "doc": "AIM 2-1-9",
        "ref": "Pilot control of airport lighting",
        "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_1.html",
        "quote": "Pilots activate radio controlled lighting by keying the microphone a specified number of times within a few seconds on the designated frequency. (AIM 2-1-9)"
      }
    },
    {
      "id": "pp-080",
      "acs": "PA.II.A",
      "q": "What does a four-light Precision Approach Path Indicator (PAPI) showing two white and two red lights mean?",
      "choices": [
        "The aircraft is on the correct glide path",
        "The aircraft is too high",
        "The aircraft is too low"
      ],
      "a": 0,
      "src": {
        "doc": "AIM 2-1-2",
        "ref": "PAPI glide path indication",
        "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_1.html",
        "quote": "On a four-light PAPI, two white and two red lights indicate the aircraft is on the glidepath. (AIM 2-1-2)"
      }
    },
    {
      "id": "pp-081",
      "acs": "PA.XI.A",
      "q": "When landing behind a larger aircraft on the same runway, how should a pilot avoid wake turbulence?",
      "choices": [
        "Stay at or above the larger aircraft's flight path and land beyond its touchdown point",
        "Land short of the larger aircraft's touchdown point",
        "Fly below the larger aircraft's approach path"
      ],
      "a": 0,
      "src": {
        "doc": "AIM 7-4-6",
        "ref": "Wake turbulence avoidance",
        "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_4.html",
        "quote": "When landing behind a larger aircraft on the same runway, stay at or above its approach flight path and land beyond its touchdown point. (AIM 7-4-6)"
      }
    },
    {
      "id": "pp-082",
      "acs": "PA.XII.A",
      "q": "What scanning technique best supports the see-and-avoid concept in daytime VFR?",
      "choices": [
        "A series of short, regularly spaced eye movements that bring successive areas of the sky into the central visual field",
        "A single continuous sweep of the windscreen from left to right",
        "Looking only in the direction of the destination"
      ],
      "a": 0,
      "src": {
        "doc": "AIM 8-1-6",
        "ref": "Collision avoidance, scanning",
        "url": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap8_section_1.html",
        "quote": "Effective scanning is accomplished with a series of short, regularly spaced eye movements that bring successive areas of the sky into the central visual field. (AIM 8-1-6)"
      }
    },
    {
      "id": "pp-083",
      "acs": "PA.IX.A",
      "q": "What is the recommended technique for a normal takeoff and climb after liftoff?",
      "choices": [
        "Accelerate to and maintain the recommended climb speed such as Vy for best rate of climb",
        "Hold the airplane on the runway until cruise speed is reached",
        "Climb at the lowest possible airspeed to clear obstacles faster"
      ],
      "a": 0,
      "src": {
        "doc": "AFH Ch 5",
        "ref": "Normal takeoff and climb",
        "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook",
        "quote": "After lift-off the airplane is accelerated to and the climb established at the best rate of climb speed, Vy. (Airplane Flying Handbook, Ch 5)"
      }
    },
    {
      "id": "pp-084",
      "acs": "PA.IX.B",
      "q": "What is the difference between Vx and Vy?",
      "choices": [
        "Vx gives the greatest altitude gain over distance, while Vy gives the greatest altitude gain over time",
        "Vx gives the greatest gain over time, while Vy gives the greatest gain over distance",
        "They are the same speed at sea level"
      ],
      "a": 0,
      "src": {
        "doc": "AFH Ch 5",
        "ref": "Vx versus Vy",
        "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook",
        "quote": "Vx is the speed that results in the greatest gain of altitude for a given distance, while Vy results in the greatest gain of altitude in a given time. (Airplane Flying Handbook, Ch 5)"
      }
    },
    {
      "id": "pp-085",
      "acs": "PA.IX.C",
      "q": "During a soft-field takeoff, why does the pilot hold back-elevator pressure and lift off at the lowest possible airspeed?",
      "choices": [
        "To transfer weight to the wings as soon as possible and reduce drag from the soft surface",
        "To keep the nosewheel firmly on the ground for steering",
        "To maximize the takeoff distance over an obstacle"
      ],
      "a": 0,
      "src": {
        "doc": "AFH Ch 5",
        "ref": "Soft-field takeoff",
        "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook",
        "quote": "On a soft field the pilot holds back-elevator pressure to lift off at the lowest possible airspeed, transferring weight from the wheels to the wings as soon as possible. (Airplane Flying Handbook, Ch 5)"
      }
    },
    {
      "id": "pp-086",
      "acs": "PA.IX.B",
      "q": "When a go-around is initiated, what is the proper sequence of actions?",
      "choices": [
        "Apply full power, establish a positive climb pitch attitude, then retract flaps in stages as airspeed permits",
        "Retract all flaps immediately, then apply power",
        "Maintain the descent and reduce power"
      ],
      "a": 0,
      "src": {
        "doc": "AFH Ch 8",
        "ref": "Go-around procedure",
        "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook",
        "quote": "When performing a go-around the pilot applies takeoff power, establishes a climb pitch attitude, and retracts the flaps incrementally as a positive rate of climb is established. (Airplane Flying Handbook, Ch 8)"
      }
    }
  ]
};
