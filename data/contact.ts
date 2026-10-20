/* Content for the contact page (/contact). */

export const contactIntro = {
  title: "Hit us up!",
  text: "Where tech gets wild, coffee sparks debates, and we act like we’ve got it all figured out (but in a cool way).",
};

export type ContactField = {
  id: string;
  label: string;
  type: "text" | "email" | "tel";
  placeholder: string;
};

/** The single-line inputs, in form order (the select and textarea follow). */
export const contactFields: ContactField[] = [
  { id: "name", label: "Full Name", type: "text", placeholder: "Enter full name" },
  { id: "Email-Address", label: "Email Address", type: "email", placeholder: "Email Address" },
  { id: "Phone", label: "Phone", type: "tel", placeholder: "Enter phone number" },
  { id: "Enter-your-subject", label: "Subject", type: "text", placeholder: "Enter your subject" },
];

export const projectTypes = [
  { value: "", label: "Select" },
  { value: "First", label: "First choice" },
  { value: "Second", label: "Second choice" },
  { value: "Third", label: "Third choice" },
];
