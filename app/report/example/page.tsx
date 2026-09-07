import type { Metadata } from "next";
import { BusinessClarityReportView } from "../../../components/business-clarity-report";
import type { BusinessClarityReport } from "../../../lib/business-clarity-report";

export const metadata: Metadata = {
  title: "Example Business Clarity Summary | The Human COO",
  robots: { index: false, follow: false },
  alternates: { canonical: "/report/example" },
};

const exampleReport: BusinessClarityReport = {
  id: "example",
  recipientName: "Alex",
  businessName: "Example & Co.",
  headline:
    "The business is moving, but too much of the operational picture still lives in different places.",
  primaryCategory: "Visibility",
  whatStoodOut:
    "You have activity, customers and work moving through the business, but it is difficult to see the full picture without checking several systems or relying on memory. That makes everyday decisions slower and creates extra chasing for you and the team.",
  focusFirst:
    "Create one simple operational view showing the work that matters, who owns the next action and when it is due. The aim is not to replace every tool. It is to give you a reliable place to see what needs attention.",
  nextSteps: [
    "List the five pieces of information you repeatedly look for when checking how the business is running.",
    "Choose one existing tool to hold that operational view and agree who keeps each item current.",
    "Review it once a week for four weeks, removing anything that does not help you make a decision.",
  ],
  dontOvercomplicate:
    "You do not need a new system or a complex dashboard yet. First prove which information is genuinely useful and who needs to maintain it. Automation can follow once the process is clear.",
  supportMaySuit:
    "A focused Business Clarity Session would help turn the gaps you have identified into a practical first plan. We can decide what needs fixing now, what can wait and whether you need a quick fix or a wider operations project.",
  scores: {
    visibility: 8,
    customerFollowUp: 5,
    process: 6,
    capacity: 4,
  },
  createdAt: "2026-09-07T12:00:00.000Z",
  expiresAt: "2026-12-06T12:00:00.000Z",
};

export default function ExampleBusinessClarityReportPage() {
  return <BusinessClarityReportView report={exampleReport} isExample />;
}
