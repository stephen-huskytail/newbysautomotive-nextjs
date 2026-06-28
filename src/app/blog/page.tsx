import { permanentRedirect } from "next/navigation";

export default function LegacyBlogPage() {
  permanentRedirect("/car-care-tips");
}
