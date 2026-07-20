const knowledgeBase = [
  /* =========================
   GREETINGS
========================= */

  {
    id: 1,
    intent: "greeting",
    keywords: [
      "hello",
      "hi",
      "hey",
      "good morning",
      "good afternoon",
      "good evening",
    ],
    answer: `Hello! Welcome to the LAUTECH AI Chatbot. How can I help you today?`,
  },

  /* =========================
   UNIVERSITY INFORMATION
========================= */

  {
    id: 2,
    intent: "full_name",
    keywords: ["full name", "name of lautech", "lautech full name"],
    answer: `The full name of LAUTECH is Ladoke Akintola University of Technology.`,
  },

  {
    id: 3,
    intent: "location",
    keywords: [
      "location",
      "where is lautech",
      "where is the university",
      "address",
    ],
    answer: `LAUTECH is located in Ogbomoso, Oyo State, Nigeria.`,
  },

  {
    id: 4,
    intent: "established",
    keywords: [
      "established",
      "founded",
      "when was lautech established",
      "year founded",
    ],
    answer: `LAUTECH was established in 1990 as Oyo State University of Technology (OSUTECH), renamed LAUTECH in 1991, and has been solely owned by the Oyo State Government since 2020.`,
  },

  {
    id: 5,
    intent: "motto",
    keywords: ["motto", "school motto"],
    answer: `The motto of LAUTECH is "Excellence, Integrity, and Service."`,
  },

  {
    id: 6,
    intent: "faculty_computing",
    keywords: ["faculty of computing", "computing faculty", "fci"],
    answer: `Faculty of Computing and Informatics contains:
• Computer Science
• Cyber Security Science
• Information System`,
  },

  {
    id: 7,
    intent: "computer_science_department",
    keywords: ["computer science department", "computer science"],
    answer: `Computer Science is under the Faculty of Computing and Informatics.`,
  },

  {
    id: 8,
    intent: "cyber_security_department",
    keywords: ["cyber security", "cyber security science"],
    answer: `Cyber Security Science is under the Faculty of Computing and Informatics.`,
  },

  {
    id: 9,
    intent: "information_system_department",
    keywords: ["information system", "information systems"],
    answer: `Information System is under the Faculty of Computing and Informatics.`,
  },

  {
    id: 10,
    intent: "supervisor",
    keywords: ["project supervisor", "supervisor"],
    answer: `Project Supervisor: Prof. S. O. Olabiyisi.`,
  },

  {
    id: 11,
    intent: "hod",
    keywords: ["hod", "head of department", "computer science hod"],
    answer: `Head of Department, Computer Science: Prof. W. O. Ismaila.`,
  },
  /* =========================
   FACULTIES
========================= */

  {
    id: 12,
    intent: "faculties",
    keywords: [
      "faculties",
      "faculties in lautech",
      "list of faculties",
      "schools",
      "colleges",
    ],
    answer: `LAUTECH has the following academic faculties and college:

1. Faculty of Agricultural Sciences

2. Faculty of Arts and Social Sciences

3. Faculty of Basic Clinical Sciences

4. Faculty of Basic Medical Sciences

5. Faculty of Clinical Sciences

6. Faculty of Computing and Informatics

7. Faculty of Engineering and Technology

8. Faculty of Environmental Sciences

9. Faculty of Food and Consumer Sciences

10. Faculty of Management Sciences

11. Faculty of Pure and Applied Sciences

12. Faculty of Renewable Natural Resources

13. College of Health Sciences`,
  },

  {
    id: 13,
    intent: "faculty_of_agricultural_sciences",
    keywords: [
      "faculty of agricultural sciences",
      "agricultural sciences faculty",
    ],
    answer: `Departments under the Faculty of Agricultural Sciences:

• Agricultural Economics
• Agricultural Extension and Rural Development
• Animal Nutrition and Biotechnology
• Animal Production and Health
• Crop and Environmental Protection
• Crop Production and Soil Science`,
  },

  {
    id: 14,
    intent: "faculty_of_arts_social_sciences",
    keywords: [
      "faculty of arts and social sciences",
      "arts and social sciences",
    ],
    answer: `Departments under the Faculty of Arts and Social Sciences:

• English and Literary Studies
• History
• Linguistics and Nigerian Languages (Yoruba)
• Mass Communication
• Philosophy
• Political Science
• Psychology
• Sociology
• Theatre Arts`,
  },

  {
    id: 15,
    intent: "faculty_of_computing",
    keywords: [
      "faculty of computing",
      "faculty of computing and informatics",
      "computing faculty",
    ],
    answer: `Departments under the Faculty of Computing and Informatics:

• Computer Science
• Cyber Security Science
• Information System`,
  },

  {
    id: 16,
    intent: "faculty_of_engineering",
    keywords: ["faculty of engineering", "engineering faculty"],
    answer: `Departments under the Faculty of Engineering and Technology:

• Agricultural Engineering
• Chemical Engineering
• Civil Engineering
• Computer Engineering
• Electronics and Electrical Engineering
• Food Engineering
• Mechanical Engineering`,
  },

  {
    id: 17,
    intent: "faculty_of_environmental_sciences",
    keywords: ["faculty of environmental sciences", "environmental sciences"],
    answer: `Departments under the Faculty of Environmental Sciences:

• Architecture
• Building
• Estate Management
• Surveying and Geoinformatics
• Urban and Regional Planning`,
  },

  {
    id: 18,
    intent: "faculty_of_food_consumer_sciences",
    keywords: [
      "faculty of food and consumer sciences",
      "food and consumer sciences",
    ],
    answer: `Departments under the Faculty of Food and Consumer Sciences:

• Consumer and Home Economics
• Food Science
• Hospitality and Tourism Management
• Nutrition and Dietetics`,
  },

  {
    id: 19,
    intent: "faculty_of_management_sciences",
    keywords: ["faculty of management sciences", "management sciences"],
    answer: `Departments under the Faculty of Management Sciences:

• Accounting
• Business Management
• Marketing
• Transport Management`,
  },

  {
    id: 20,
    intent: "faculty_of_pure_applied_sciences",
    keywords: [
      "faculty of pure and applied sciences",
      "pure and applied sciences",
    ],
    answer: `Departments under the Faculty of Pure and Applied Sciences:

• Biochemistry
• Earth Science
• Economics
• Library and Information Science
• Pure and Applied Biology
• Pure and Applied Chemistry
• Pure and Applied Mathematics
• Pure and Applied Physics
• Science Laboratory Technology
• Statistics`,
  },

  {
    id: 21,
    intent: "faculty_of_renewable_natural_resources",
    keywords: [
      "faculty of renewable natural resources",
      "renewable natural resources",
    ],
    answer: `Departments under the Faculty of Renewable Natural Resources:

• Fisheries and Aquaculture
• Forest Resources Management
• Wildlife and Ecotourism Management`,
  },

  {
    id: 22,
    intent: "college_of_health_sciences",
    keywords: ["college of health sciences", "health sciences"],
    answer: `The College of Health Sciences comprises:

• Faculty of Basic Clinical Sciences
• Faculty of Basic Medical Sciences
• Faculty of Clinical Sciences

Major Programmes include:

• Anatomy
• Medical Laboratory Science (MLS)
• Medicine and Surgery (MBBS)
• Nursing
• Physiology`,
  },
  /* =========================
   ADMISSION
========================= */

  {
    id: 23,
    intent: "admission_free",
    keywords: [
      "admission fee",
      "is admission free",
      "pay for admission",
      "admission charges",
    ],
    answer: `Admission into LAUTECH is completely FREE. The university does not charge candidates for securing admission.`,
  },

  {
    id: 24,
    intent: "admission_scam",
    keywords: [
      "scam",
      "agent",
      "admission agent",
      "fake admission",
      "third party",
    ],
    answer: `Candidates should never patronize unauthorized agents. LAUTECH is not responsible for applicants who are scammed.`,
  },

  {
    id: 25,
    intent: "caps",
    keywords: ["caps", "jamb caps", "track admission", "check admission"],
    answer: `Candidates should monitor their admission status through their individual JAMB CAPS portal.`,
  },

  {
    id: 26,
    intent: "cutoff",
    keywords: [
      "cut off",
      "cutoff",
      "departmental cut off",
      "merit score",
      "catchment score",
    ],
    answer: `Specify the department you want the cut-off mark for.
Example:
• Computer Science
• Medicine
• Nursing
• Architecture
• Accounting`,
  },

  /* =========================
   DEPARTMENTAL CUT-OFF MARKS
========================= */

  {
    id: 27,
    intent: "accounting_cutoff",
    keywords: [
      "accounting cut off",
      "accounting cutoff",
      "accounting merit",
      "accounting",
    ],
    answer: `Accounting\nMerit: 56.2\nCatchment: 46.0`,
  },

  {
    id: 28,
    intent: "agricultural_economics_cutoff",
    keywords: [
      "agricultural economics",
      "agricultural economics cut off",
      "agricultural economics cutoff",
    ],
    answer: `Agricultural Economics\nMerit: 39.1\nCatchment: 39.1`,
  },

  {
    id: 29,
    intent: "agricultural_engineering_cutoff",
    keywords: [
      "agricultural engineering",
      "agricultural engineering cut off",
      "agricultural engineering cutoff",
    ],
    answer: `Agricultural Engineering\nMerit: 51.5\nCatchment: 46.6`,
  },

  {
    id: 30,
    intent: "agricultural_extension_cutoff",
    keywords: [
      "agricultural extension",
      "rural development",
      "agricultural extension cut off",
    ],
    answer: `Agricultural Extension and Rural Development\nMerit: 40.3\nCatchment: 40.3`,
  },

  {
    id: 31,
    intent: "anatomy_cutoff",
    keywords: ["anatomy", "anatomy cut off"],
    answer: `Anatomy\nMerit: 56.3\nCatchment: 51.1`,
  },

  {
    id: 32,
    intent: "animal_nutrition_cutoff",
    keywords: [
      "animal nutrition cut off",
      "animal nutrition and biotechnology",
      "animal biotechnology",
    ],
    answer: `Animal Nutrition and Biotechnology\nMerit: 41.8\nCatchment: 41.8`,
  },

  {
    id: 33,
    intent: "animal_production_cutoff",
    keywords: ["animal production cut off", "animal production and health"],
    answer: `Animal Production and Health\nMerit: 48.8\nCatchment: 41.1`,
  },

  {
    id: 34,
    intent: "architecture_cutoff",
    keywords: ["architecture", "architecture cut off"],
    answer: `Architecture\nMerit: 61.6\nCatchment: 57.2`,
  },

  {
    id: 35,
    intent: "biochemistry_cutoff",
    keywords: ["biochemistry", "biochemistry cut off"],
    answer: `Biochemistry\nMerit: 56.3\nCatchment: 48.6`,
  },

  {
    id: 36,
    intent: "building_cutoff",
    keywords: ["building", "building technology", "building cut off"],
    answer: `Building\nMerit: 55.9\nCatchment: 51.5`,
  },

  {
    id: 37,
    intent: "business_management_cutoff",
    keywords: [
      "business management",
      "business administration",
      "business management cut off",
    ],
    answer: `Business Management\nMerit: 57.7\nCatchment: 48.7`,
  },

  {
    id: 38,
    intent: "chemical_engineering_cutoff",
    keywords: ["chemical engineering", "chemical engineering cut off"],
    answer: `Chemical Engineering\nMerit: 55.7\nCatchment: 49.5`,
  },

  {
    id: 39,
    intent: "civil_engineering_cutoff",
    keywords: ["civil engineering", "civil engineering cut off"],
    answer: `Civil Engineering\nMerit: 63.7\nCatchment: 50.1`,
  },

  {
    id: 40,
    intent: "computer_engineering_cutoff",
    keywords: ["computer engineering", "computer engineering cut off"],
    answer: `Computer Engineering\nMerit: 59.5\nCatchment: 53.5`,
  },

  {
    id: 41,
    intent: "computer_science_cutoff",
    keywords: ["computer science", "computer science cut off", "cs cutoff"],
    answer: `Computer Science\nMerit: 63.5\nCatchment: 53.7`,
  },

  {
    id: 42,
    intent: "consumer_home_economics_cutoff",
    keywords: ["consumer and home economics", "home economics"],
    answer: `Consumer and Home Economics\nMerit: 43.6\nCatchment: 43.6`,
  },

  {
    id: 43,
    intent: "crop_environmental_cutoff",
    keywords: ["crop and environmental protection cut off", "environmental protection cut off"],
    answer: `Crop and Environmental Protection\nMerit: 45.6\nCatchment: 45.6`,
  },

  {
    id: 44,
    intent: "crop_production_cutoff",
    keywords: [
      "crop production cut off",
      "soil science cut off",
      "crop production and soil science cut off",
    ],
    answer: `Crop Production and Soil Science\nMerit: 40.3\nCatchment: 40.3`,
  },

  {
    id: 45,
    intent: "cyber_security_cutoff",
    keywords: ["cyber security cut off", "cyber security science cut off", "cybersecurity cut off"],
    answer: `Cyber Security Science\nMerit: 60.7\nCatchment: 48.4`,
  },

  {
    id: 46,
    intent: "earth_science_cutoff",
    keywords: ["earth science", "earth science cut off"],
    answer: `Earth Science\nMerit: 48.0\nCatchment: 40.4`,
  },

  {
    id: 47,
    intent: "economics_cutoff",
    keywords: ["economics cut off", "economics"],
    answer: `Economics\nMerit: 59.1\nCatchment: 44.0`,
  },

  {
    id: 48,
    intent: "electrical_engineering_cutoff",
    keywords: [
      "electrical engineering cut off",
      "electronics and electrical engineering cut off",
      "eee cut off",
    ],
    answer: `Electronics and Electrical Engineering\nMerit: 57.3\nCatchment: 52.1`,
  },

  {
    id: 49,
    intent: "english_cutoff",
    keywords: ["english cut off", "english and literary studies cut off"],
    answer: `English and Literary Studies\nMerit: 56.7\nCatchment: 46.9`,
  },

  {
    id: 50,
    intent: "estate_management_cutoff",
    keywords: ["estate management cut off", "estate"],
    answer: `Estate Management\nMerit: 44.8\nCatchment: 42.7`,
  },

  {
    id: 51,
    intent: "fine_art_cutoff",
    keywords: ["fine and applied arts cut off", "fine art cut off", "fine arts cut off"],
    answer: `Fine and Applied Arts\nMerit: 52.5\nCatchment: 40.7`,
  },

  {
    id: 52,
    intent: "fisheries_cutoff",
    keywords: ["fisheries cut off", "fisheries and aquaculture cut off", "aquaculture cut off"],
    answer: `Fisheries and Aquaculture\nMerit: 39.7\nCatchment: 39.7`,
  },

  {
    id: 53,
    intent: "food_engineering_cutoff",
    keywords: ["food engineering cut off", "food engineering"],
    answer: `Food Engineering\nMerit: 45.9\nCatchment: 42.6`,
  },

  {
    id: 54,
    intent: "food_science_cutoff",
    keywords: ["food science cut off", "food science"],
    answer: `Food Science\nMerit: 54.3\nCatchment: 44.9`,
  },

  {
    id: 55,
    intent: "forest_resources_management_cutoff",
    keywords: ["forest resources management cut off", "forest resources cut off", "forestry cut off"],
    answer: `Forest Resources Management

Merit: 45.1

Catchment: 45.1`,
  },

  {
    id: 56,
    intent: "history_cutoff",
    keywords: ["history", "history cutoff", "history cut off"],
    answer: `History

Merit: 42.3

Catchment: 42.3`,
  },

  {
    id: 57,
    intent: "hospitality_tourism_cutoff",
    keywords: ["hospitality cut off", "tourism cut off", "hospitality and tourism management cut off"],
    answer: `Hospitality and Tourism Management

Merit: 47.9

Catchment: 43.9`,
  },

  {
    id: 58,
    intent: "information_system_cutoff",
    keywords: ["information system cut off", "information systems cut off", "information system"],
    answer: `Information System

Merit: 52.3

Catchment: 46.0`,
  },

  {
    id: 59,
    intent: "library_information_science_cutoff",
    keywords: ["library cut off", "library and information science cut off", "lis cut off"],
    answer: `Library and Information Science

Merit: 48.3

Catchment: 40.0`,
  },

  {
    id: 60,
    intent: "linguistics_cutoff",
    keywords: ["linguistics cut off", "yoruba cut off", "linguistics and nigerian language"],
    answer: `Linguistics and Nigerian Language (Yoruba)

Merit: 54.5

Catchment: 47.2`,
  },

  {
    id: 61,
    intent: "marketing_cutoff",
    keywords: ["marketing cut off", "marketing"],
    answer: `Marketing

Merit: 46.9

Catchment: 42.9`,
  },

  {
    id: 62,
    intent: "mass_communication_cutoff",
    keywords: ["mass communication cut off", "mass comm cut off", "mass communication"],
    answer: `Mass Communication

Merit: 62.7

Catchment: 51.6`,
  },

  {
    id: 63,
    intent: "mechanical_engineering_cutoff",
    keywords: ["mechanical engineering cut off", "mechanical engineering"],
    answer: `Mechanical Engineering

Merit: 60.8

Catchment: 50.8`,
  },

  {
    id: 64,
    intent: "medical_laboratory_science_cutoff",
    keywords: ["medical laboratory science cut off", "mls"],
    answer: `Medical Laboratory Science (MLS)

Merit: 68.0

Catchment: 64.7`,
  },

  {
    id: 65,
    intent: "medicine_cutoff",
    keywords: ["medicine cut off", "medicine and surgery", "mbbs"],
    answer: `Medicine and Surgery (MBBS)

Merit: 79.8

Catchment: 75.7`,
  },

  {
    id: 66,
    intent: "nursing_cutoff",
    keywords: ["nursing cut off", "nursing science"],
    answer: `Nursing

Merit: 72.1

Catchment: 68.0`,
  },

  {
    id: 67,
    intent: "nutrition_dietetics_cutoff",
    keywords: ["nutrition cut off", "nutrition and dietetics cut off", "dietetics cut off"],
    answer: `Nutrition and Dietetics

Merit: 59.1

Catchment: 50.4`,
  },

  {
    id: 68,
    intent: "philosophy_cutoff",
    keywords: ["philosophy cut off"],
    answer: `Philosophy

Merit: 50.1

Catchment: 40.3`,
  },

  {
    id: 69,
    intent: "physiology_cutoff",
    keywords: ["physiology cut off"],
    answer: `Physiology

Merit: 56.7

Catchment: 48.8`,
  },

  {
    id: 70,
    intent: "political_science_cutoff",
    keywords: ["political science cut off", "political science"],
    answer: `Political Science

Merit: 58.1

Catchment: 51.5`,
  },

  {
    id: 71,
    intent: "psychology_cutoff",
    keywords: ["psychology cut off", "psychology"],
    answer: `Psychology

Merit: 48.8

Catchment: 41.8`,
  },

  {
    id: 72,
    intent: "pure_applied_biology_cutoff",
    keywords: ["biology cut off", "pure and applied biology"],
    answer: `Pure and Applied Biology

Merit: 54.5

Catchment: 51.2`,
  },

  {
    id: 73,
    intent: "pure_applied_chemistry_cutoff",
    keywords: ["chemistry cut off", "pure and applied chemistry"],
    answer: `Pure and Applied Chemistry

Merit: 49.7

Catchment: 39.7`,
  },

  {
    id: 74,
    intent: "pure_applied_mathematics_cutoff",
    keywords: ["mathematics cut off", "pure and applied mathematics", "maths"],
    answer: `Pure and Applied Mathematics

Merit: 41.8

Catchment: 41.8`,
  },

  {
    id: 75,
    intent: "pure_applied_physics_cutoff",
    keywords: ["physics cut off", "pure and applied physics"],
    answer: `Pure and Applied Physics

Merit: 46.3

Catchment: 39.7`,
  },

  {
    id: 76,
    intent: "science_laboratory_technology_cutoff",
    keywords: ["science laboratory technology cut off", "slt cut off", "science laboratory technology"],
    answer: `Science Laboratory Technology (SLT)

Merit: 56.9

Catchment: 45.2`,
  },

  {
    id: 77,
    intent: "sociology_cutoff",
    keywords: ["sociology cut off", "sociology"],
    answer: `Sociology

Merit: 55.7

Catchment: 48.7`,
  },

  {
    id: 78,
    intent: "statistics_cutoff",
    keywords: ["statistics cut off", "statistics"],
    answer: `Statistics

Merit: 48.9

Catchment: 38.9`,
  },

  {
    id: 79,
    intent: "surveying_geoinformatics_cutoff",
    keywords: ["surveying cut off", "geoinformatics cut off", "surveying and geoinformatics cut off"],
    answer: `Surveying and Geoinformatics

Merit: 58.1

Catchment: 47.7`,
  },

  {
    id: 80,
    intent: "theatre_arts_cutoff",
    keywords: ["theatre arts cut off", "theater arts cut off"],
    answer: `Theatre Arts

Merit: 52.5

Catchment: 43.7`,
  },

  {
    id: 81,
    intent: "transport_management_cutoff",
    keywords: ["transport management cut off", "transport management"],
    answer: `Transport Management

Merit: 46.0

Catchment: 39.7`,
  },

  {
    id: 82,
    intent: "urban_regional_planning_cutoff",
    keywords: ["urban and regional planning cut off", "urban planning cut off"],
    answer: `Urban and Regional Planning

Merit: 49.2

Catchment: 42.8`,
  },

  {
    id: 83,
    intent: "wildlife_ecotourism_cutoff",
    keywords: ["wildlife cut off", "ecotourism cut off", "wildlife and ecotourism management"],
    answer: `Wildlife and Ecotourism Management

Merit: 44.5

Catchment: 44.5`,
  },

  /* =========================
   SCHOOL FEES
========================= */

  {
    id: 84,
    intent: "returning_students_fees",
    keywords: [
      "returning students",
      "400 level fees",
      "500 level fees",
      "final year fees",
      "returning school fees",
      "stalite fees",
      "stalite school fees",
    ],
    answer: `Returning Students (400 & 500 Level)

Oyo State Indigenes:
₦168,000 per academic session

Non-Indigenes:
₦204,000 per academic session`,
  },

  {
    id: 85,
    intent: "200_300_level_fees",
    keywords: [
      "200 level fees",
      "300 level fees",
      "intermediate fees",
      "200 level school fees",
      "300 level school fees",
    ],
    answer: `200-Level & 300-Level Students

These levels operate under a transitional fee structure.

Students should check their individual student portal dashboard for their exact departmental fee breakdown.`,
  },

  {
    id: 86,
    intent: "freshers_fees",
    keywords: [
      "freshers fees",
      "100 level fees",
      "new students fees",
      "fresh student fees",
      "direct entry fees",
    ],
    answer: `Fresh Students (100 Level & Direct Entry)

Fees depend on the student's faculty and state of origin.

Specify your faculty or department to get the correct fee.`,
  },

  {
    id: 87,
    intent: "health_sciences_fees",
    keywords: [
      "medicine fees",
      "nursing fees",
      "mls fees",
      "college of health sciences fees",
      "health sciences fees",
    ],
    answer: `College of Health Sciences

Oyo State Indigenes:
₦694,700

Non-Indigenes:
₦782,200`,
  },

  {
    id: 88,
    intent: "computing_fees",
    keywords: [
      "computer science fees",
      "cyber security fees",
      "information system fees",
      "faculty of computing fees",
      "computing fees",
    ],
    answer: `Faculty of Computing and Informatics

Departments include:
• Computer Science
• Cyber Security Science
• Information System

Oyo State Indigenes:
₦330,700

Non-Indigenes:
₦418,200`,
  },

  {
    id: 89,
    intent: "engineering_fees",
    keywords: [
      "engineering fees",
      "civil engineering fees",
      "mechanical engineering fees",
      "electrical engineering fees",
      "computer engineering fees",
      "chemical engineering fees",
      "agricultural engineering fees",
      "food engineering fees",
      "faculty of engineering fees",
    ],
    answer: `Faculty of Engineering & Technology

Oyo State Indigenes:
₦372,400

Non-Indigenes:
₦459,900`,
  },

  {
    id: 90,
    intent: "pure_applied_sciences_fees",
    keywords: [
      "pure and applied sciences fees",
      "science fees",
      "biochemistry fees",
      "microbiology fees",
      "physics fees",
      "chemistry fees",
      "mathematics fees",
      "statistics fees",
      "biology fees",
      "food science fees",
    ],
    answer: `Faculty of Pure & Applied Sciences
Faculty of Food & Consumer Sciences

Oyo State Indigenes:
₦344,700

Non-Indigenes:
₦432,200`,
  },

  {
    id: 91,
    intent: "management_social_environmental_fees",
    keywords: [
      "management sciences fees",
      "arts fees",
      "social sciences fees",
      "environmental sciences fees",
      "accounting fees",
      "economics fees",
      "mass communication fees",
      "political science fees",
      "marketing fees",
      "business management fees",
      "english fees",
      "estate management fees",
      "architecture fees",
      "building fees",
    ],
    answer: `Faculty of Arts & Social Sciences
Faculty of Management Sciences
Faculty of Environmental Sciences

Oyo State Indigenes:
₦316,700

Non-Indigenes:
₦404,200`,
  },

  {
    id: 92,
    intent: "agriculture_fees",
    keywords: [
      "agriculture fees",
      "agricultural sciences fees",
      "renewable natural resources fees",
      "crop production fees",
      "animal production fees",
      "forestry fees",
      "wildlife fees",
      "fisheries fees",
    ],
    answer: `Faculty of Agricultural Sciences
Faculty of Renewable Natural Resources

Oyo State Indigenes:
₦372,400

Non-Indigenes:
₦459,900`,
  },

  {
    id: 93,
    intent: "oyo_indigene_fees",
    keywords: ["oyo indigene fees", "indigene fees", "oyo state indigene"],
    answer: `LAUTECH has a separate tuition structure for Oyo State indigenes.

Kindly specify your faculty or department to obtain the correct fee.`,
  },

  {
    id: 94,
    intent: "non_indigene_fees",
    keywords: [
      "non indigene fees",
      "non indigenes",
      "outside oyo",
      "other states fees",
    ],
    answer: `LAUTECH has a separate tuition structure for Non-Indigenes.

Kindly specify your faculty or department to obtain the correct fee.`,
  },

  {
    id: 95,
    intent: "fee_categories",
    keywords: [
      "fee categories",
      "tuition categories",
      "fee structure",
      "school fees structure",
    ],
    answer: `LAUTECH tuition is grouped into:

• Returning Students (400 & 500 Level)

• Intermediate Students (200 & 300 Level)

• Fresh Students (100 Level & Direct Entry)

Fresh student fees are determined by faculty and state of origin.`,
  },

  /* =========================
   ALTERNATIVE ACADEMIC PATHWAYS
========================= */

  {
    id: 96,
    intent: "part_time",
    keywords: [
      "part time",
      "part-time",
      "part time programme",
      "part time admission",
    ],
    answer: `LAUTECH operates a Directorate of Part-Time Degree Programmes for working-class professionals seeking flexible undergraduate education.`,
  },

  {
    id: 97,
    intent: "part_time_duration",
    keywords: [
      "part time duration",
      "part time years",
      "duration of part time",
      "how many years is part time",
    ],
    answer: `Part-Time Degree Duration:

• 5-Year Track – 100 Level Entry

• 4-Year Track – 200 Level / Direct Entry

• 3-Year Track – Advanced Specialized Entry`,
  },

  {
    id: 98,
    intent: "part_time_requirement",
    keywords: [
      "part time requirements",
      "part time requirement",
      "requirements for part time",
      "part time olevel",
    ],
    answer: `Part-Time Admission Requirement:

Applicants must possess at least five (5) O'Level credit passes in SSCE, GCE, NECO or NABTEB obtained in not more than two sittings and relevant to the chosen programme.`,
  },

  {
    id: 99,
    intent: "part_time_programmes",
    keywords: [
      "part time courses",
      "part time programmes",
      "programmes available for part time",
    ],
    answer: `The Part-Time Programme covers courses in:

• Management Sciences

• Social Sciences

• Pure Sciences

• Technology

• Agricultural Sciences`,
  },

  {
    id: 100,
    intent: "postgraduate",
    keywords: ["postgraduate", "pg school", "pg", "graduate school"],
    answer: `LAUTECH Postgraduate School offers:

• Postgraduate Diploma (PGD)

• Academic Master's Degrees

• Professional Master's Degrees

• Doctor of Philosophy (Ph.D.)`,
  },

  {
    id: 101,
    intent: "executive_doctorates",
    keywords: [
      "executive doctorate",
      "doctor of cyber security",
      "doctor of information technology",
      "doctor of social work",
      "doctor of business administration",
    ],
    answer: `Executive Doctorate Programmes include:

• Doctor of Cyber Security (D.CYB)

• Doctor of Information Technology (D.IT)

• Doctor of Social Work (DSW)

• Doctor of Business Administration (DBA)`,
  },

  {
    id: 102,
    intent: "pgd_requirement",
    keywords: [
      "pgd requirement",
      "postgraduate diploma requirement",
      "pgd admission",
    ],
    answer: `PGD Admission Requirement:

• A Bachelor's Degree with at least Third Class

OR

• A Higher National Diploma (HND) with at least Lower Credit.`,
  },

  {
    id: 103,
    intent: "masters_requirement",
    keywords: [
      "masters requirement",
      "msc requirement",
      "mtech requirement",
      "master degree requirement",
    ],
    answer: `Master's Degree Requirement:

Applicants must possess at least a Second Class Lower Division from a recognized university.

Minimum duration: 3 semesters.`,
  },

  {
    id: 104,
    intent: "phd_requirement",
    keywords: ["phd requirement", "doctorate requirement", "phd admission"],
    answer: `Ph.D. Requirement:

Applicants must obtain a minimum weighted average score of 60% (or equivalent GPA) in their Master's Degree.

Minimum duration: 6 semesters.`,
  },

  {
    id: 105,
    intent: "jupeb",
    keywords: ["jupeb", "foundation programme", "foundation school"],
    answer: `LAUTECH JUPEB is a one-year Advanced Level programme under the Joint Universities Preliminary Examinations Board.

Successful candidates gain Direct Entry admission into 200 Level without writing JAMB UTME again.`,
  },

  {
    id: 106,
    intent: "odl",
    keywords: ["odl", "distance learning", "open distance learning", "lodlc"],
    answer: `LAUTECH Open and Distance Learning (LODLC) is a hybrid e-learning programme that allows students to study remotely without regular physical classroom attendance.`,
  },

  {
    id: 107,
    intent: "odl_portal",
    keywords: [
      "odl portal",
      "distance learning portal",
      "lodlc portal",
      "eportal",
    ],
    answer: `ODL Portal:

eportal.lautech.edu.ng/applicant/ODL`,
  },

  {
    id: 108,
    intent: "general_fees",
    keywords: [
      "school fees",
      "fees",
      "tuition",
      "amount for fees",
      "school fee",
    ],
    answer: `LAUTECH tuition fees are not uniform; every department and faculty has its own specific tuition fee structure. Fees are also determined by whether you are an Oyo State indigene or a non-indigene, as well as your current academic level.

To get an accurate figure, please specify your department or level. For example, you can ask:
• "What are the computer science fees?"
• "Show me freshers fees"
• "Fees for returning students"`,
  },
];

module.exports = knowledgeBase;
