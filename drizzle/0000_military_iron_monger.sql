CREATE TABLE `business_clarity_reports` (
	`id` text PRIMARY KEY NOT NULL,
	`recipient_name` text NOT NULL,
	`business_name` text,
	`headline` text NOT NULL,
	`primary_category` text NOT NULL,
	`what_stood_out` text NOT NULL,
	`focus_first` text NOT NULL,
	`next_steps` text NOT NULL,
	`dont_overcomplicate` text NOT NULL,
	`support_may_suit` text NOT NULL,
	`visibility_score` integer NOT NULL,
	`customer_follow_up_score` integer NOT NULL,
	`process_score` integer NOT NULL,
	`capacity_score` integer NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`expires_at` text NOT NULL
);
