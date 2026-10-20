import AuthSection from "@/components/sections/auth/AuthSection";
import PageHead from "@/components/ui/PageHead";
import { authPages } from "@/data/auth";

export default function Login() {
  return (
    <>
      <PageHead description={authPages.login.description} title={authPages.login.title} />
      <div className="page-wrapper">
        <AuthSection variant="login" />
      </div>
    </>
  );
}
