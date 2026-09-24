export interface ServiceContent {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string;
  overview: {
    title: string;
    paragraphs: string[];
  };
  includes: {
    title: string;
    description: string;
  }[];
  process: {
    title: string;
    description: string;
  }[];
  information: {
    title: string;
    content: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  schedule?: {
    columns: string[];
    rows: string[][];
  };
  center?: {
    title: string;
    intro: string;
    quote: string;
    images: { src: string; caption: string }[];
  };
}

export const servicesData: Record<string, ServiceContent> = {
  'pediatric-care': {
    id: 'pediatric-care',
    title: 'Pediatric Care',
    subtitle: "Expert Pediatric Care For Your Child's Growing Needs",
    heroImage: '/pediatric-care-hero.jpg',
    overview: {
      title: 'Understanding Pediatric Care',
      paragraphs: [
        "From their first steps to adolescence, your child's developmental journey requires attentive and specialized medical guidance. Our comprehensive pediatric care program is designed to monitor growth, prevent illness, and provide rapid, compassionate treatment when they are unwell.",
        "We focus on the whole child—physical, cognitive, and emotional well-being. By building a long-term relationship with your family, we ensure continuity of care that adapts as your child grows, ensuring they reach every milestone safely."
      ]
    },
    includes: [
      {
        title: 'Routine Health Check-ups',
        description: 'Comprehensive physical examinations, growth tracking, and developmental screenings tailored to your child\'s age.'
      },
      {
        title: 'Illness Diagnosis & Treatment',
        description: 'Rapid, accurate diagnosis and compassionate treatment for acute childhood illnesses, fevers, and infections.'
      },
      {
        title: 'Developmental Milestones',
        description: 'Expert evaluation of motor, cognitive, and social development to ensure your child is thriving.'
      },
      {
        title: 'Nutritional Guidance',
        description: 'Personalized dietary advice to support healthy growth, address deficiencies, and manage food allergies.'
      }
    ],
    process: [
      {
        title: 'Consultation',
        description: 'We begin by listening to your concerns and reviewing your child\'s medical history.'
      },
      {
        title: 'Assessment',
        description: 'A gentle, thorough physical examination and developmental check is performed.'
      },
      {
        title: 'Care Plan',
        description: 'We discuss findings with you and create a personalized treatment or preventative plan.'
      },
      {
        title: 'Follow-up',
        description: 'Scheduled visits to monitor progress, adjust care, and ensure long-term health.'
      }
    ],
    information: [
      {
        title: 'When to seek care',
        content: 'Schedule routine well-child visits annually, or seek immediate care for persistent high fevers, unresponsiveness, severe pain, or difficulty breathing.'
      },
      {
        title: 'What to bring',
        content: 'Please bring your child\'s immunization records, a list of current medications, and any questions or concerns you have noted.'
      }
    ],
    faqs: [
      {
        question: 'How often should my child have a routine check-up?',
        answer: 'Infants and toddlers require frequent visits (at 2, 4, 6, 9, 12, 15, 18, and 24 months). After age 3, annual well-child check-ups are recommended.'
      },
      {
        question: 'What happens during a well-child visit?',
        answer: 'The visit includes a full physical exam, growth measurements, developmental assessment, necessary vaccinations, and time to discuss any parenting or health concerns.'
      },
      {
        question: 'Can I book a same-day appointment for a sick child?',
        answer: 'Yes, we prioritize sick visits and always strive to accommodate urgent concerns on the same day.'
      }
    ]
  },
  'neonatal-care': {
    id: 'neonatal-care',
    title: 'Neonatal Care',
    subtitle: 'Advanced NICU Support For The Most Delicate Beginnings',
    heroImage: '/service_neonatal_care_1789988898999.jpg',
    overview: {
      title: 'Understanding Neonatal Care',
      paragraphs: [
        "Premature babies and newborns with complex medical conditions require the highest level of specialized attention. Our Level III Neonatal Intensive Care Unit (NICU) provides round-the-clock, life-saving care using advanced medical technology in a gentle, nurturing environment.",
        "We believe parents are an essential part of the healing process. Our multidisciplinary team of neonatologists and specialized nurses work closely with you, providing transparent communication and emotional support during this critical time."
      ]
    },
    includes: [
      {
        title: 'Advanced Respiratory Support',
        description: 'State-of-the-art ventilation and continuous positive airway pressure (CPAP) for underdeveloped lungs.'
      },
      {
        title: 'Continuous Monitoring',
        description: '24/7 observation of vital signs, oxygen levels, and cardiac function by specialized neonatal nurses.'
      },
      {
        title: 'Nutritional Support',
        description: 'Specialized IV nutrition and feeding tube management to ensure optimal weight gain and development.'
      },
      {
        title: 'Family-Centered Care',
        description: 'Encouraging Kangaroo care (skin-to-skin) and parental involvement in daily routines when stable.'
      }
    ],
    process: [
      {
        title: 'Admission',
        description: 'Immediate stabilization and transfer to our specialized NICU environment after birth.'
      },
      {
        title: 'Intensive Care',
        description: 'Round-the-clock medical intervention, monitoring, and respiratory support as needed.'
      },
      {
        title: 'Growth & Transition',
        description: 'As your baby stabilizes, focus shifts to independent breathing, feeding, and gaining weight.'
      },
      {
        title: 'Discharge Prep',
        description: 'Training parents on specialized home care, feeding schedules, and follow-up requirements.'
      }
    ],
    information: [
      {
        title: 'Visiting the NICU',
        content: 'Parents have 24/7 access to their babies. Strict handwashing and infection control protocols must be followed to protect our vulnerable patients.'
      },
      {
        title: 'What to expect',
        content: 'The NICU environment can be overwhelming with alarms and equipment. Our staff will explain every monitor, tube, and procedure to help you feel comfortable.'
      }
    ],
    faqs: [
      {
        question: 'Who will be taking care of my baby?',
        answer: 'Your baby will be cared for by a dedicated team of board-certified neonatologists, neonatal nurse practitioners, specialized registered nurses, and respiratory therapists.'
      },
      {
        question: 'Can I breastfeed my baby in the NICU?',
        answer: 'Yes, breast milk is highly beneficial for premature infants. If your baby is not yet ready to feed at the breast, we provide hospital-grade pumps and lactation support to help you provide milk.'
      },
      {
        question: 'How long will my baby need to stay?',
        answer: 'Every baby is unique. Length of stay depends on gestational age at birth, weight, and the complexity of their medical condition. Your care team will provide regular updates.'
      }
    ]
  },
  'vaccination': {
    id: 'vaccination',
    title: 'Vaccination',
    subtitle: 'Protecting Your Child Through Every Phase of Development',
    heroImage: '/service_preventative_care_1789988969044.jpg',
    overview: {
      title: 'Understanding Childhood Immunization',
      paragraphs: [
        "Vaccinations are the cornerstone of preventative pediatric medicine, safeguarding your child from serious, preventable diseases. By following evidence-based immunization schedules, we build their immune system's defenses safely and effectively.",
        "We understand that parents may have questions about vaccines. Our specialists provide transparent, science-backed information, ensuring you feel confident in protecting your child and your community."
      ]
    },
    includes: [
      {
        title: 'Routine Immunizations',
        description: 'Administration of all state-mandated and WHO-recommended childhood vaccines on schedule.'
      },
      {
        title: 'Catch-up Schedules',
        description: 'Personalized vaccination timelines for children who have missed or delayed previous doses.'
      },
      {
        title: 'Travel Consultations',
        description: 'Specific immunizations and health advice for families traveling internationally.'
      },
      {
        title: 'Vaccine Counseling',
        description: 'Dedicated time to discuss vaccine safety, side effects, and how they protect your child.'
      }
    ],
    process: [
      {
        title: 'Review',
        description: 'We review your child\'s medical history and current immunization records.'
      },
      {
        title: 'Counseling',
        description: 'We explain the scheduled vaccines, their purpose, and what to expect.'
      },
      {
        title: 'Administration',
        description: 'Gentle, efficient administration of vaccines to minimize discomfort.'
      },
      {
        title: 'Observation',
        description: 'A brief observation period post-vaccination, followed by aftercare instructions.'
      }
    ],
    information: [
      {
        title: 'When to seek care',
        content: 'Vaccinations are typically given during routine well-child visits. Adhering to the recommended schedule ensures maximum protection during vulnerable developmental stages.'
      },
      {
        title: 'What to expect after',
        content: 'Mild redness at the injection site or a low-grade fever is normal. We will provide specific guidance on managing these minor side effects at home.'
      }
    ],
    faqs: [
      {
        question: 'Are vaccines safe for my baby?',
        answer: 'Yes. Vaccines undergo rigorous testing for safety and efficacy before they are approved for use. They are continuously monitored and are the safest way to protect children from life-threatening diseases.'
      },
      {
        question: 'What if my child is sick on the day of vaccination?',
        answer: 'A mild illness (like a cold) is usually not a reason to delay vaccination. However, if your child has a high fever or severe illness, we may recommend rescheduling.'
      },
      {
        question: 'Can multiple vaccines be given at once?',
        answer: 'Yes. Extensive research shows that a child\'s immune system can safely and effectively handle receiving multiple vaccines at the same time.'
      }
    ]
  },
  'newborn-care': {
    id: 'newborn-care',
    title: 'Newborn Care',
    subtitle: 'Gentle Support For Your Baby’s Critical First Weeks',
    heroImage: '/doctor_portrait_1789986143658.jpg',
    overview: {
      title: 'Understanding Newborn Care',
      paragraphs: [
        "Bringing a new baby home is an overwhelming mix of joy and anxiety. The first few weeks of life are a period of rapid transition for both baby and parents. Our dedicated newborn care program provides gentle, specialized monitoring to ensure a healthy start.",
        "From weight checks and jaundice screening to answering your middle-of-the-night questions about sleep and feeding, we offer comprehensive support designed to build your confidence as a parent."
      ]
    },
    includes: [
      {
        title: 'Initial Assessments',
        description: 'Thorough examinations within the first week to monitor weight gain, feeding success, and overall health.'
      },
      {
        title: 'Jaundice Screening',
        description: 'Accurate bilirubin testing and management to safely treat newborn jaundice.'
      },
      {
        title: 'Umbilical Cord Care',
        description: 'Monitoring the healing process and providing guidance on proper hygiene and care at home.'
      },
      {
        title: 'Parental Guidance',
        description: 'Empathetic coaching on safe sleep practices, soothing techniques, and recognizing signs of illness.'
      }
    ],
    process: [
      {
        title: 'First Visit',
        description: 'Typically scheduled 3-5 days after birth to establish baseline health and weight.'
      },
      {
        title: 'Examination',
        description: 'A comprehensive head-to-toe physical, checking reflexes, skin, and organ function.'
      },
      {
        title: 'Feeding Check',
        description: 'Evaluating feeding patterns (breast or bottle) to ensure adequate intake and growth.'
      },
      {
        title: 'Ongoing Support',
        description: 'Scheduling regular follow-ups and establishing an open line of communication for concerns.'
      }
    ],
    information: [
      {
        title: 'When to seek care',
        content: 'Call immediately if your newborn (under 2 months) has a rectal temperature of 100.4°F (38°C) or higher, is exceptionally lethargic, or refuses to feed.'
      },
      {
        title: 'Preparation',
        content: 'Bring your hospital discharge paperwork, any feeding logs you have kept, and dress the baby in easy-to-remove clothing.'
      }
    ],
    faqs: [
      {
        question: 'When should my newborn have their first clinic visit?',
        answer: 'Usually within 2 to 5 days after birth, or 1 to 2 days after being discharged from the hospital. The exact timing depends on hospital recommendations.'
      },
      {
        question: 'How do I know if my baby is getting enough milk?',
        answer: 'Signs of adequate feeding include 6-8 wet diapers a day, regular bowel movements, appearing satisfied after feeds, and steady weight gain, which we will track at the clinic.'
      },
      {
        question: 'Is it normal for my baby to sleep all day?',
        answer: 'Newborns typically sleep 14-17 hours a day. However, they should wake every 2-3 hours to feed. If your baby is too lethargic to wake for feedings, contact us immediately.'
      }
    ]
  },
  'lactation-support': {
    id: 'lactation-support',
    title: 'Lactation Support',
    subtitle: 'Expert Guidance For a Stress-Free Breastfeeding Journey',
    heroImage: '/pediatric-care-hero.jpg',
    overview: {
      title: 'Understanding Lactation Support',
      paragraphs: [
        "While breastfeeding is natural, it doesn't always come naturally. Many mothers experience pain, low milk supply, or latching difficulties in the early weeks. Our certified lactation consultants are here to provide expert, judgment-free guidance.",
        "We believe that a fed baby is best, and a mentally healthy mother is essential. Our goal is to help you overcome physical hurdles, establish a comfortable feeding routine, and support your personal infant feeding goals."
      ]
    },
    includes: [
      {
        title: 'Latch & Positioning',
        description: 'Hands-on assistance to establish a comfortable, pain-free latch and explore different nursing positions.'
      },
      {
        title: 'Supply Management',
        description: 'Evidence-based strategies to increase low milk supply or safely manage oversupply and engorgement.'
      },
      {
        title: 'Pumping Strategies',
        description: 'Guidance on choosing the right pump, maximizing output, and safely storing breast milk.'
      },
      {
        title: 'Troubleshooting Pain',
        description: 'Identification and treatment of issues like sore nipples, mastitis, or infant oral restrictions (tongue ties).'
      }
    ],
    process: [
      {
        title: 'Assessment',
        description: 'We discuss your medical history, birth experience, and specific feeding challenges.'
      },
      {
        title: 'Observation',
        description: 'A trained specialist observes a feeding session to identify mechanical or positional issues.'
      },
      {
        title: 'Intervention',
        description: 'Immediate hands-on adjustments and techniques are introduced to improve comfort and transfer.'
      },
      {
        title: 'Care Plan',
        description: 'You leave with a personalized, written feeding plan and scheduled follow-up support.'
      }
    ],
    information: [
      {
        title: 'When to seek care',
        content: 'Seek support early if you experience cracked or bleeding nipples, if your baby is not gaining weight, or if feeding sessions are consistently causing you anxiety.'
      },
      {
        title: 'What to expect',
        content: 'Consultations are private and unhurried. We will weigh your baby before and after feeding to measure exactly how much milk is being transferred.'
      }
    ],
    faqs: [
      {
        question: 'Should breastfeeding hurt?',
        answer: 'No. While initial tenderness in the first few days is common, sharp or persistent pain is a sign of a poor latch or other correctable issues. You do not have to suffer through it.'
      },
      {
        question: 'How do I prepare for a lactation consultation?',
        answer: 'Try to schedule the visit when your baby is usually hungry. Bring your breast pump (if using one), any pillows you prefer, and your baby\'s feeding logs.'
      },
      {
        question: 'Can you help if I want to switch to formula?',
        answer: 'Absolutely. We support all safe feeding methods. We can provide guidance on safe formula preparation, bottle-feeding techniques, and how to safely dry up your milk supply.'
      }
    ]
  }
};
