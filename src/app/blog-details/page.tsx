import { permanentRedirect } from "next/navigation";
import { getArticleByLegacyId } from "@/lib/articles";

export default async function LegacyBlogDetailsPage({
  searchParams,
}: {
  searchParams: Promise<{ objId?: string | string[] }>;
}) {
  const { objId } = await searchParams;
  const sourceId = Array.isArray(objId) ? objId[0] : objId;

  if (sourceId) {
    const article = getArticleByLegacyId(sourceId);
    if (article) {
      permanentRedirect(`/car-care-tips/${article.slug}`);
    }
  }

  permanentRedirect("/car-care-tips");
}
