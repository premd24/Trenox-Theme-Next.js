import { PrimaryButton } from "@/components/ui/Buttons";
import { img } from "@/lib/utils";

/** "Page Not Found" with a way back home. */
export default function NotFound() {
  return (
    <div className="utility-page-wrap v2">
      <div className="utility-page-content reveal-grow">
        <img alt="" src={img("404-1.png")} />
        <h1 className="h3">Page Not Found</h1>
        <div className="_404-button-wrap">
          <PrimaryButton href="/">Back to Home page</PrimaryButton>
        </div>
      </div>
    </div>
  );
}
