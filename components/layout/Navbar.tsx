import { useCallback, useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from "react";
import { SmallButton } from "@/components/ui/Buttons";
import SiteLink from "@/components/ui/SiteLink";
import { loginLink, mainNav, mobileLoginLink } from "@/data/navigation";
import { img } from "@/lib/utils";
import CartModal from "./CartModal";
import PagesDropdown from "./PagesDropdown";

// The bar folds into a slide-down panel at this width and below.
const COLLAPSE_BREAKPOINT = 991;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const openMenu = useCallback(() => {
    const panel = panelRef.current;
    if (panel) panel.style.height = `${panel.scrollHeight}px`;
    setMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    const panel = panelRef.current;
    if (panel) {
      // from `auto` back to a number, so the transition has something to run
      panel.style.height = `${panel.scrollHeight}px`;
      void panel.offsetHeight;
      panel.style.height = "0px";
    }
    setMenuOpen(false);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
        toggleRef.current?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      if (!barRef.current?.contains(e.target as Node)) closeMenu();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [menuOpen, closeMenu]);

  // Leaving the collapsed range must not strand an inline height.
  useEffect(() => {
    const onResize = () => {
      const panel = panelRef.current;
      if (!panel) return;
      if (window.innerWidth > COLLAPSE_BREAKPOINT) {
        panel.style.height = "";
        setMenuOpen(false);
      } else if (menuOpen) {
        panel.style.height = "auto";
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [menuOpen]);

  // A link inside the panel navigates away; a dropdown toggle does not.
  const onPanelClick = (e: ReactMouseEvent) => {
    if (menuOpen && (e.target as HTMLElement).closest("a")) closeMenu();
  };

  return (
    <section className="nav-wrap">
      <div className="nav-bar-wrap">
        <div className="navbar" ref={barRef} role="banner">
          <div className="navbar-wrapper">
            <div className="navbar-left">
              <SiteLink className="navbar-brand" href="/">
                <img alt="Navbar Brand Image" className="navbar-brand-logo" loading="lazy" src={img("Logo.svg")} />
              </SiteLink>
            </div>
            <div
              className="navbar-center"
              data-nav-panel="1"
              onClick={onPanelClick}
              onTransitionEnd={(e) => {
                // once the slide finishes, release the height so the panel can
                // grow with its own content (an open dropdown inside it, ...)
                if (e.target === e.currentTarget && e.propertyName === "height" && menuOpen) {
                  e.currentTarget.style.height = "auto";
                }
              }}
              ref={panelRef}
            >
              <nav className="nav-menu-wrapper" role="navigation">
                <ul className="nav-menu list-unstyled" role="list">
                  <li className="nav-item">
                    <NavLink {...mainNav[0]} />
                  </li>
                  <li className="nav-item">
                    <PagesDropdown />
                  </li>
                  {mainNav.slice(1).map((link) => (
                    <li className="nav-item" key={link.label}>
                      <NavLink {...link} />
                    </li>
                  ))}
                  <li className="mobile-margin-top-10">
                    <div className="nav-button-wrapper">
                      <SmallButton href={mobileLoginLink.href}>{mobileLoginLink.label}</SmallButton>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="navbar-right">
              <div className="nav-cart-wrap">
                <CartModal />
              </div>
              <div className="nav-button-wrapper">
                <SmallButton href={loginLink.href}>{loginLink.label}</SmallButton>
              </div>
              <button
                aria-expanded={menuOpen}
                aria-label="Menu"
                className="menu-button"
                onClick={() => (menuOpen ? closeMenu() : openMenu())}
                ref={toggleRef}
                type="button"
              >
                <div className="hamburger-menu">
                  <svg aria-hidden="true" className="hamburger-menu-icon" focusable="false" viewBox="0 0 32 32">
                    <line className="hamburger-bar top" x1="7" x2="25" y1="13" y2="13" />
                    <line className="hamburger-bar bottom" x1="7" x2="25" y1="20" y2="20" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="back-groung-blur" />
      </div>
    </section>
  );
}

function NavLink({ label, href }: { label: string; href: string }) {
  return (
    <SiteLink className="nav-link inline-block" href={href}>
      <div className="nav-link-text">{label}</div>
    </SiteLink>
  );
}
