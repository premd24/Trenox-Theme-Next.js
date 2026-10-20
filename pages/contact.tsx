import PageHead from "@/components/ui/PageHead";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ContactSection from "@/components/sections/contact/ContactSection";

const TITLE = "Contact | Trenox";
const DESCRIPTION = "Talk to the Trenox team — support, sales and partnership enquiries, plus where to find us.";

export default function ContactPage() {
  return (
    <>
      <PageHead title={TITLE} description={DESCRIPTION} />
      <div className="page-wrapper">
        <Navbar />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
