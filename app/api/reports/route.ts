import { env } from "cloudflare:workers";
import { createBusinessClarityReport } from "../../../db/reports";
import { businessClarityReportInputSchema } from "../../../lib/business-clarity-report";

export const dynamic = "force-dynamic";

type ReportEnvironment = {
  REPORT_API_KEY?: string;
};

function isAuthorised(request: Request) {
  const apiKey = (env as unknown as ReportEnvironment).REPORT_API_KEY;
  const suppliedKey = request.headers.get("authorization");

  return Boolean(apiKey && suppliedKey === `Bearer ${apiKey}`);
}

export async function POST(request: Request) {
  if (!isAuthorised(request)) {
    return Response.json({ error: "Unauthorised" }, { status: 401 });
  }

  try {
    const payload = businessClarityReportInputSchema.parse(await request.json());
    const report = await createBusinessClarityReport(payload);

    return Response.json(
      {
        reportId: report.id,
        reportUrl: `https://thehumancoo.com/report/${report.id}`,
        expiresAt: report.expiresAt,
      },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof Error && error.name === "ZodError") {
      return Response.json(
        { error: "The report data did not match the required format." },
        { status: 400 },
      );
    }

    console.error("Unable to create Business Clarity report", error);
    return Response.json(
      { error: "The report could not be created right now." },
      { status: 500 },
    );
  }
}
