import { z } from "zod";

export const reportCategories = [
  "Visibility",
  "Customer Follow-Up",
  "Process",
  "Capacity",
] as const;

export const businessClarityReportInputSchema = z.object({
  recipientName: z.string().trim().min(1).max(100),
  businessName: z.string().trim().max(160).optional().default(""),
  headline: z.string().trim().min(1).max(240),
  primaryCategory: z.enum(reportCategories),
  whatStoodOut: z.string().trim().min(1).max(3000),
  focusFirst: z.string().trim().min(1).max(3000),
  nextSteps: z.array(z.string().trim().min(1).max(600)).min(1).max(4),
  dontOvercomplicate: z.string().trim().min(1).max(2000),
  supportMaySuit: z.string().trim().min(1).max(2000),
  scores: z.object({
    visibility: z.number().int().min(0).max(1000),
    customerFollowUp: z.number().int().min(0).max(1000),
    process: z.number().int().min(0).max(1000),
    capacity: z.number().int().min(0).max(1000),
  }),
  expiresInDays: z.number().int().min(1).max(365).optional().default(90),
});

export type BusinessClarityReportInput = z.infer<
  typeof businessClarityReportInputSchema
>;

export type BusinessClarityReport = Omit<
  BusinessClarityReportInput,
  "expiresInDays"
> & {
  id: string;
  createdAt: string;
  expiresAt: string;
};
