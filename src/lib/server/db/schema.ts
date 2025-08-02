import { pgTable, serial, varchar, timestamp } from 'drizzle-orm/pg-core';

export const handle = pgTable('handle', {
	id: serial('id').primaryKey(),
	did: varchar('did', { length: 255 }).notNull().unique(),
	handle: varchar('handle', { length: 255 }).notNull().unique(),
	createdAt: timestamp('created_at').notNull().defaultNow(),
	updatedAt: timestamp('updated_at').$onUpdate(() => new Date())
});

export type Handle = typeof handle.$inferSelect;
