import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const links = sqliteTable('links', {
	id: integer('id').primaryKey().notNull(),
	shortened_route: text('shortened_route').notNull(),
	redirect_link: text('redirect_link').notNull()
});
