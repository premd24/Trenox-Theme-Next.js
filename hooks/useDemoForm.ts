import { useState, type FormEvent } from "react";

/** Front-end-only demo form: validates, resets, then reports it's done. */
export function useDemoForm() {
  const [done, setDone] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    form.reset();
    setDone(true);
  };

  return { done, onSubmit };
}
