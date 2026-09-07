import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const businessClarityReports = sqliteTable("business_clarity_reports", {
  id: text("id").primaryKey(),
  recipientName: text("recipient_name").notNull(),
  businessName: text("business_name"),
  headline: text("headline").notNull(),
  primaryCategory: text("primary_category").notNull(),
  whatStoodOut: text("what_stood_out").notNull(),
  focusFirst: text("focus_first").notNull(),
  nextSteps: text("next_steps").notNull(),
  dontOvercomplicate: text("dont_overcomplicate").notNull(),
  supportMaySuit: text("support_may_suit").notNull(),
  visibilityScore: integer("visibility_score").notNull(),
  customerFollowUpScore: integer("customer_follow_up_score").notNull(),
  processScore: integer("process_score").notNull(),
  capacityScore: integer("capacity_score").notNull(),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  expiresAt: text("expires_at").notNull(),
});
