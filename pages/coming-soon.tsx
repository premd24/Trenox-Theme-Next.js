import ComingSoonSection from "@/components/sections/utility/ComingSoonSection";
import PageHead from "@/components/ui/PageHead";

export default function ComingSoon() {
  return (
    <>
      <PageHead
        description="Something new is on the way. Leave your email and we will tell you the moment it goes live."
        title="Coming Soon | Trenox"
      />
      <div className="page-wrapper">
        <ComingSoonSection />
      </div>
    </>
  );
}
