export type AuthVariant = "login" | "register";

export type AuthPageContent = {
  title: string;
  description: string;
  heading: string;
  intro: string;
  /** The pill in the top-right corner that switches to the other form. */
  switchLink: { label: string; href: string; newTab?: boolean };
  submitLabel: string;
  /** Social sign-in buttons (the LinkedIn URL differs per page). */
  socialLinks: { href: string; logo: string }[];
};

const socialLogos = ["Major-Brand-Logos-1.1.svg", "Major-Brand-Logos-1.1-1.svg", "Major-Brand-Logos-1.1-2.svg"];
const social = (...hrefs: string[]) => hrefs.map((href, i) => ({ href, logo: socialLogos[i] }));

export const authPages: Record<AuthVariant, AuthPageContent> = {
  login: {
    title: "Log In | Trenox",
    description: "Log in to your Trenox account.",
    heading: "Login to your account",
    intro: "Enter your details to login.",
    switchLink: { label: "Register", href: "/register" },
    submitLabel: "Login",
    socialLinks: social("https://www.apple.com/", "http://google.com/", "http://linkedin.com/"),
  },
  register: {
    title: "Create Account | Trenox",
    description: "Create a Trenox account and start trading in minutes.",
    heading: "Create new account",
    intro: "Enter your details to register.",
    switchLink: { label: "Login", href: "/login", newTab: true },
    submitLabel: "Submit",
    socialLinks: social("https://www.apple.com/", "http://google.com/", "https://www.linkedin.com/"),
  },
};

export const authLanguages = ["ENG", "BAN", "HINDI"];

export type AuthTestimonial = { image: string; quote: string; name: string; role: string };

export const authTestimonials: AuthTestimonial[] = [
  {
    image: "Client.png",
    quote:
      "The Marketing Management app has totally changed the game for us. It's super easy to use and makes everything from planning to tracking a breeze!",
    name: "Wei Chen",
    role: "CEO / Catalyst",
  },
  {
    image: "Client-2.png",
    quote:
      "The team collaboration feature has enhanced communication, making project updates seamless and minimizing misunderstandings.",
    name: "Linda Gomez",
    role: "Product Manager / Innovator",
  },
  {
    image: "Client-1.png",
    quote:
      "Data analytics integration offers valuable insights, allowing us to make informed decisions based on real-time metrics.",
    name: "Raj Patel",
    role: "Data Analyst / Strategist",
  },
];
