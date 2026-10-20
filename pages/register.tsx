import AuthSection from "@/components/sections/auth/AuthSection";
import PageHead from "@/components/ui/PageHead";
import { authPages } from "@/data/auth";

export default function Register() {
  return (
    <>
      <PageHead description={authPages.register.description} title={authPages.register.title} />
      <div className="page-wrapper">
        <AuthSection variant="register" />
      </div>
    </>
  );
}
