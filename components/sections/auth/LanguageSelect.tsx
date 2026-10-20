import { useDropdown } from "@/hooks/useDropdown";
import { authLanguages } from "@/data/auth";

/** The "ENG" language picker in the form's footer. */
export default function LanguageSelect() {
  const { open, rootProps, toggleProps } = useDropdown();

  return (
    <div className="langues-select" data-dropdown="1" {...rootProps}>
      <button className="dropdown-toggle" data-dropdown-toggle="1" type="button" {...toggleProps}>
        <div className="icon-2" />
        <div className="langues-text-block">{authLanguages[0]}</div>
      </button>
      <div className={open ? "is-open" : undefined} data-dropdown-list="1">
        {authLanguages.map((language) => (
          <a href="#" key={language}>
            {language}
          </a>
        ))}
      </div>
    </div>
  );
}
