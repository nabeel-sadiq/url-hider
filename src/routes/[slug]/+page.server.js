import { db } from '$lib/server/db';
import { links } from '$lib/server/db/schema';
import { error, redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const slug = params.slug;

  try {
    const data = await db.select().from(links)
      .where(eq(links.shortened_route, slug))

    const redirect_link = data[0]?.redirect_link;

    if (redirect_link) {
      return { redirect_link: redirect_link }
    } else {
      error(404, 'Not Found')
    }
  } catch (error) {
    redirect(308, '/')
  }

}