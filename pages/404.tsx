import PageHead from "@/components/ui/PageHead";
import NotFound from "@/components/sections/utility/NotFound";

export default function Custom404() {
  return (
    <>
      <PageHead description="The page you were looking for does not exist." title="Page Not Found | Trenox" />
      <NotFound />
    </>
  );
}
