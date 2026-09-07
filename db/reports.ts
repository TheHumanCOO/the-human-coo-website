import { eq, lte } from "drizzle-orm";
import {
  reportCategories,
  type BusinessClarityReportInput,
} from "../lib/business-clarity-report";
import { getDb } from ".";
import { businessClarityReports } from "./schema";

export async function createBusinessClarityReport(
  input: BusinessClarityReportInput,
) {
  const now = new Date();
  const id = crypto.randomUUID();
  const expiresAt = new Date(
    now.getTime() + input.expiresInDays * 24 * 60 * 60 * 1000,
  ).toISOString();

  const db = getDb();
  await db
    .delete(businessClarityReports)
    .where(lte(businessClarityReports.expiresAt, now.toISOString()));

  await db.insert(businessClarityReports).values({
    id,
    recipientName: input.recipientName,
    businessName: input.businessName || null,
    headline: input.headline,
    primaryCategory: input.primaryCategory,
    whatStoodOut: input.whatStoodOut,
    focusFirst: input.focusFirst,
    nextSteps: JSON.stringify(input.nextSteps),
    dontOvercomplicate: input.dontOvercomplicate,
    supportMaySuit: input.supportMaySuit,
    visibilityScore: input.scores.visibility,
    customerFollowUpScore: input.scores.customerFollowUp,
    processScore: input.scores.process,
    capacityScore: input.scores.capacity,
    expiresAt,
  });

  return { id, expiresAt };
}

export async function getBusinessClarityReport(id: string) {
  const db = getDb();
  const [row] = await db
    .select()
    .from(businessClarityReports)
    .where(eq(businessClarityReports.id, id))
    .limit(1);

  if (!row) return null;
  if (row.expiresAt <= new Date().toISOString()) {
    await db
      .delete(businessClarityReports)
      .where(eq(businessClarityReports.id, id));
    return null;
  }

  const primaryCategory = reportCategories.find(
    (category) => category === row.primaryCategory,
  );
  if (!primaryCategory) return null;

  return {
    id: row.id,
    recipientName: row.recipientName,
    businessName: row.businessName ?? "",
    headline: row.headline,
    primaryCategory,
    whatStoodOut: row.whatStoodOut,
    focusFirst: row.focusFirst,
    nextSteps: JSON.parse(row.nextSteps) as string[],
    dontOvercomplicate: row.dontOvercomplicate,
    supportMaySuit: row.supportMaySuit,
    scores: {
      visibility: row.visibilityScore,
      customerFollowUp: row.customerFollowUpScore,
      process: row.processScore,
      capacity: row.capacityScore,
    },
    createdAt: row.createdAt,
    expiresAt: row.expiresAt,
  };
}
