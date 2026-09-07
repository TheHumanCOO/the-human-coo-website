import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BusinessClarityReportView } from "../../../components/business-clarity-report";
import { getBusinessClarityReport } from "../../../db/reports";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  return {
    title: "Your Business Clarity Summary | The Human COO",
    robots: { index: false, follow: false },
    alternates: { canonical: `/report/${id}` },
  };
}

export default async function BusinessClarityReportPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const report = await getBusinessClarityReport(id);

  if (!report) notFound();

  return <BusinessClarityReportView report={report} />;
}
