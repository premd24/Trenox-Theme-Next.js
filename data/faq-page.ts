/* Content for the FAQ page (/faq). */

export type FaqEntry = { question: string; answer: string };

export type FaqCategory = {
  /** Anchor the side menu links to. */
  id: string;
  /** Label in the side menu (can be shorter than the title). */
  menuLabel: string;
  title: string;
  /** Spacing modifier on the box ("_01", "_02"; the last box has none). */
  boxClass?: string;
  items: FaqEntry[];
};

export const faqPageHero = {
  title: "Frequently asked questions",
  text: "Get the lowdown on the most frequently asked questions about Youflow's platform!",
};

export const faqCategories: FaqCategory[] = [
  {
    id: "general",
    menuLabel: "General",
    title: "General",
    boxClass: "_01",
    items: [
      {
        question: "Who is Youflow for?",
        answer:
          "Youflow is a modern messaging and automation platform designed for traders and financial businesses. It helps you centralize customer conversations, automate workflows, and stay responsive across channels — including Instagram, WhatsApp, SMS, and more.",
      },
      {
        question: "What is Youflow?",
        answer:
          "Youflow is a modern messaging and automation platform designed for traders and financial businesses. It helps you centralize customer conversations, automate workflows, and stay responsive across channels — including Instagram, WhatsApp, SMS, and more.",
      },
      {
        question: "Does Youflow support multiple team members?",
        answer:
          "Yes! Youflow allows you to create departments and assign conversations to different team members, making collaboration easy and efficient.",
      },
      {
        question: "What channels can I connect with Youflow?",
        answer:
          "Currently, Youflow supports Instagram Business, SMS, email, and web chat integrations — with more platforms coming soon.",
      },
      {
        question: "Can I use Youflow on mobile?",
        answer:
          "Yes, Youflow is fully responsive and also offers mobile alerts, so your team can manage conversations on the go.",
      },
    ],
  },
  {
    id: "Privacy-Security",
    menuLabel: "Privacy & Security",
    title: "Privacy & Security",
    boxClass: "_02",
    items: [
      {
        question: "Is my data safe with Youflow?",
        answer:
          "Yes. We use industry-standard encryption and secure infrastructure to protect all your data and communications.",
      },
      {
        question: "Do you sell or share my data with third parties?",
        answer: "No. Your data is never sold or shared. We only use it to provide and improve the Youflow service.",
      },
      {
        question: "Can I delete my data anytime?",
        answer:
          "Yes. You have full control over your data. You can request data deletion or export your conversations anytime from your account dashboard.",
      },
      {
        question: "Where is my data stored?",
        answer:
          "All data is securely stored in cloud servers located in regions with strong data protection laws, such as the U.S. and EU.",
      },
    ],
  },
  {
    id: "Plans-Pricing",
    menuLabel: "Pricing",
    title: "Plans & Pricing",
    items: [
      {
        question: "Is there a free trial available?",
        answer: "Yes, we offer a 7-day free trial with access to all premium features — no credit card required.",
      },
      {
        question: "What’s included in each plan?",
        answer:
          "All plans include access to messaging tools, automation features, performance metrics, and integrations. Higher-tier plans offer more users, message limits, and priority support.",
      },
      {
        question: "Can I upgrade or downgrade my plan anytime?",
        answer:
          "Absolutely. You can change your plan at any time from your account settings — upgrades take effect immediately, while downgrades apply at the next billing cycle.",
      },
    ],
  },
];
