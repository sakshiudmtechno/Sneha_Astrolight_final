import blogTarot from "@/assets/blog-tarot.jpg";
import blogNumerology from "@/assets/blog-numerology.jpg";
import blogVastu from "@/assets/blog-vastu.jpg";
import blogHealing from "@/assets/blog-healing.jpg";

export interface BlogPost {
  id: string;
  img: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  content: string[];
}

export const blogs: BlogPost[] = [
  {
    id: "understanding-tarot",
    img: blogTarot,
    title: "Understanding Tarot: A Beginner's Guide to Card Reading",
    excerpt: "Discover the ancient art of Tarot and how it can provide clarity and insight into your life decisions, relationships, and career path.",
    date: "Mar 15, 2026",
    category: "Tarot",
    content: [
      "Tarot reading is one of the most powerful tools for self-discovery and spiritual guidance. Originating in the 15th century, Tarot cards have been used for centuries to gain insight into the past, present, and future.",
      "A standard Tarot deck consists of 78 cards divided into two groups: the Major Arcana (22 cards) and the Minor Arcana (56 cards). The Major Arcana represents significant life events and spiritual lessons, while the Minor Arcana reflects day-to-day experiences and challenges.",
      "Each card carries its own unique symbolism, imagery, and story. The Fool represents new beginnings, The Lovers symbolize relationships and choices, and The Tower signifies sudden change. Understanding these meanings is the first step in learning Tarot.",
      "During a Tarot reading, cards are drawn and laid out in specific patterns called 'spreads.' The most common is the Celtic Cross, which provides a comprehensive overview of a situation. The position of each card in the spread adds layers of meaning to the reading.",
      "Contrary to popular belief, Tarot does not predict a fixed future. Instead, it reveals the energies and influences surrounding a situation, empowering you to make informed decisions. It's a tool for reflection, guidance, and personal growth.",
      "At Astrolight by Snehaa, our Tarot readings are conducted with deep intuition and years of experience. Whether you're seeking clarity in love, career, or personal growth, Tarot can illuminate the path forward.",
    ],
  },
  {
    id: "power-of-numerology",
    img: blogNumerology,
    title: "The Power of Numbers: How Numerology Shapes Your Destiny",
    excerpt: "Explore how your birth date and name hold the key to understanding your personality, strengths, and life purpose through numerology.",
    date: "Mar 10, 2026",
    category: "Numerology",
    content: [
      "Numerology is the mystical study of numbers and their influence on human life. Every number carries a specific vibration and energy that can reveal deep insights about your personality, life path, and destiny.",
      "Your Life Path Number, calculated from your birth date, is the most important number in numerology. It reveals your core purpose, natural talents, and the challenges you'll face throughout life. For example, Life Path 1 indicates a natural leader, while Life Path 7 suggests a deep thinker and spiritual seeker.",
      "Your Name Number, derived from the letters in your full name, influences how others perceive you and the opportunities that come your way. This is why name correction is such a powerful remedy in numerology — a small change can shift your entire energy.",
      "In business numerology, the name and registration number of a company can significantly impact its success. Many successful entrepreneurs consult numerologists before naming their businesses or launching new ventures.",
      "Numerology also plays a role in choosing auspicious dates for important events like weddings, business launches, and property purchases. The right date can amplify positive energies and minimize obstacles.",
      "At Astrolight by Snehaa, we offer comprehensive numerology readings that cover your Life Path, Expression, Soul Urge, and Personality numbers. Our personalized analysis helps you understand yourself better and make decisions aligned with your true potential.",
    ],
  },
  {
    id: "vastu-tips-prosperity",
    img: blogVastu,
    title: "Vastu Tips for Prosperity: Transform Your Home Energy",
    excerpt: "Simple yet powerful Vastu corrections that can improve the flow of positive energy in your home and attract abundance.",
    date: "Feb 28, 2026",
    category: "Vastu",
    content: [
      "Vastu Shastra, the ancient Indian science of architecture, teaches us how to harmonize our living spaces with natural forces. The placement of rooms, furniture, and even colors can profoundly affect the energy flow in your home.",
      "The entrance of your home is considered the mouth of energy. According to Vastu, a north or east-facing entrance is most auspicious as it allows positive solar energy to flow in. Keep your entrance well-lit, clutter-free, and welcoming.",
      "The kitchen represents the fire element and should ideally be placed in the southeast corner of the house. The cook should face east while cooking, as this direction brings health and prosperity to the family.",
      "Your bedroom is your sanctuary for rest and rejuvenation. The master bedroom should be in the southwest direction, and the bed should be placed so your head points south or east while sleeping. Avoid mirrors facing the bed as they can disturb sleep.",
      "Water elements like aquariums or fountains should be placed in the northeast direction, which is considered the most sacred corner. This enhances spiritual growth and attracts positive energy into your space.",
      "Simple Vastu remedies like placing a money plant in the southeast, keeping the center of your home clutter-free, and using warm colors in the south can dramatically improve the energy of your space. At Astrolight by Snehaa, we provide personalized Vastu consultations for homes and offices.",
    ],
  },
  {
    id: "reiki-crystal-healing",
    img: blogHealing,
    title: "Reiki & Crystal Healing: Balancing Your Chakras",
    excerpt: "Learn how energy healing techniques like Reiki and Crystal Therapy can restore balance, reduce stress, and promote inner peace.",
    date: "Feb 20, 2026",
    category: "Healing",
    content: [
      "Reiki is a Japanese healing technique that channels universal life force energy through the practitioner's hands to promote physical, emotional, and spiritual healing. The word 'Reiki' comes from 'Rei' (universal) and 'Ki' (life force energy).",
      "During a Reiki session, the practitioner places their hands on or near the recipient's body in specific positions corresponding to the seven major chakras. The energy flows where it's needed most, dissolving energy blockages and restoring balance.",
      "Crystal healing works on a similar principle but uses the unique vibrational properties of crystals and gemstones. Each crystal carries specific energies — Rose Quartz for love, Amethyst for spiritual awareness, Citrine for abundance, and Black Tourmaline for protection.",
      "The seven chakras — Root, Sacral, Solar Plexus, Heart, Throat, Third Eye, and Crown — are energy centers in the body. When these chakras are balanced and aligned, you experience physical health, emotional stability, and spiritual clarity.",
      "Common signs of chakra imbalance include chronic fatigue, anxiety, difficulty expressing yourself, relationship problems, and feeling disconnected from your purpose. Energy healing can address these issues at their root cause.",
      "At Astrolight by Snehaa, we combine Reiki with Crystal Therapy and Angel Healing for a comprehensive energy healing experience. Our sessions are designed to clear negative energies, heal emotional wounds, and align you with your highest potential.",
    ],
  },
  {
    id: "astrology-birth-chart",
    img: blogTarot,
    title: "Decoding Your Birth Chart: What the Stars Say About You",
    excerpt: "Your birth chart is a cosmic blueprint of your life. Learn how planetary positions at birth influence your personality, career, and relationships.",
    date: "Feb 15, 2026",
    category: "Astrology",
    content: [
      "A birth chart, also known as a natal chart or horoscope, is a snapshot of the sky at the exact moment and location of your birth. It maps the positions of the Sun, Moon, and planets across the twelve zodiac signs and houses.",
      "The Sun sign represents your core identity and ego — it's what most people know as their 'zodiac sign.' But your Moon sign reveals your emotional nature, while your Rising sign (Ascendant) shows how others perceive you.",
      "The twelve houses in your birth chart represent different areas of life — from self-identity (1st house) to career (10th house) to spirituality (12th house). The planets placed in these houses activate and influence those life areas.",
      "Planetary aspects — the angles between planets — create dynamic relationships that shape your personality and experiences. A conjunction intensifies energy, a trine brings harmony, and a square creates tension that drives growth.",
      "Dashas (planetary periods) in Vedic astrology reveal the timing of events in your life. Understanding which planetary period you're currently in can explain why certain themes are prominent and what to expect ahead.",
      "At Astrolight by Snehaa, our detailed birth chart analysis covers all these dimensions and more. We provide actionable insights and remedies to help you navigate challenges and maximize opportunities based on your unique cosmic blueprint.",
    ],
  },
  {
    id: "angel-healing-guide",
    img: blogHealing,
    title: "Angel Healing: Connecting with Divine Guidance",
    excerpt: "Discover how Angel Healing can help you connect with higher spiritual energies for protection, guidance, and emotional healing.",
    date: "Feb 10, 2026",
    category: "Healing",
    content: [
      "Angel Healing is a spiritual practice that involves connecting with angelic beings for guidance, healing, and protection. Angels are believed to be messengers of the divine, always ready to assist us when we ask.",
      "Unlike other healing modalities, Angel Healing works through intention and prayer. The practitioner acts as a channel, invoking specific archangels for different purposes — Michael for protection, Raphael for healing, Gabriel for communication, and Uriel for wisdom.",
      "Angel numbers are sequences of numbers that carry divine messages. Seeing repeated numbers like 111, 222, 333, or 444 is often a sign that angels are communicating with you, offering reassurance and guidance.",
      "Angel card readings use beautifully illustrated oracle cards to receive messages from the angelic realm. Each card carries a positive, uplifting message that can provide clarity and comfort during difficult times.",
      "Regular connection with angelic energies can bring profound peace, clarity, and protection into your life. Many people report feeling lighter, more optimistic, and more aligned with their purpose after Angel Healing sessions.",
      "At Astrolight by Snehaa, we offer Angel Healing sessions that combine meditation, angel card readings, and energy work to help you establish a strong connection with your guardian angels and receive divine guidance.",
    ],
  },
  {
    id: "rudraksha-benefits",
    img: blogNumerology,
    title: "The Sacred Power of Rudraksha: Benefits & How to Wear",
    excerpt: "Rudraksha beads have been revered for centuries for their spiritual and healing properties. Learn about different mukhis and their benefits.",
    date: "Jan 25, 2026",
    category: "Remedies",
    content: [
      "Rudraksha beads are sacred seeds from the Elaeocarpus ganitrus tree, revered in Hindu mythology as the tears of Lord Shiva. These powerful beads have been used for thousands of years for meditation, healing, and spiritual protection.",
      "Each Rudraksha bead has a specific number of 'mukhis' or faces, ranging from 1 to 21. The number of mukhis determines the bead's ruling planet and specific benefits. For example, a 5 Mukhi Rudraksha represents Jupiter and promotes wisdom.",
      "The 1 Mukhi Rudraksha is the rarest and most powerful, representing Lord Shiva himself. It bestows supreme consciousness, detachment, and spiritual enlightenment. The 2 Mukhi represents unity and is excellent for relationships.",
      "Wearing Rudraksha properly is crucial for receiving its benefits. The bead should be energized through specific mantras, worn on a Monday during an auspicious time, and treated with respect. It should touch the skin for maximum effect.",
      "Rudraksha beads have scientifically proven electromagnetic properties that can regulate blood pressure, reduce stress, and enhance concentration. They create a protective shield of positive energy around the wearer.",
      "At Astrolight by Snehaa, we provide genuine, certified Rudraksha beads along with proper guidance on selection, energizing rituals, and wearing instructions based on your specific needs and astrological chart.",
    ],
  },
  {
    id: "corporate-numerology",
    img: blogVastu,
    title: "Corporate Numerology: Boost Your Business Success",
    excerpt: "Learn how numerology can help you choose the right business name, logo, and launch date for maximum success and growth.",
    date: "Jan 15, 2026",
    category: "Numerology",
    content: [
      "Corporate numerology applies the principles of numerology to business decisions, helping entrepreneurs and companies align their ventures with favorable numerical vibrations for success and growth.",
      "The name of your business carries a specific numerical vibration that can either support or hinder its growth. A business name that resonates with the owner's personal numbers creates a powerful synergy that attracts success.",
      "The date of incorporation, logo design, office address, and even the phone number of a business all carry numerical significance. Aligning these elements with favorable numbers can create a strong foundation for success.",
      "Many successful companies unknowingly have numerologically favorable names. By understanding the science behind these numbers, you can intentionally create the same positive energy for your business.",
      "Employee compatibility can also be assessed through numerology. Understanding the numerical profiles of team members helps in building harmonious teams and assigning roles that play to each person's strengths.",
      "At Astrolight by Snehaa, our corporate numerology services include business name analysis, brand numerology, auspicious date selection, and team compatibility assessment. We help businesses make data-driven spiritual decisions for sustained growth.",
    ],
  },
];
