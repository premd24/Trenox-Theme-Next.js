import PageHead from "@/components/ui/PageHead";
import PasswordProtected from "@/components/sections/utility/PasswordProtected";

export default function Unauthorized() {
  return (
    <>
      <PageHead description="This page is password protected." title="Password Protected | Trenox" />
      <PasswordProtected />
    </>
  );
}
