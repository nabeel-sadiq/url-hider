import { db } from '$lib/server/db';
import { links } from '$lib/server/db/schema';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const shortenedRoute = data.get('shortened')
    const redirectLink = data.get('redirect')

    try {
      await db.insert(links).values({
        shortened_route: shortenedRoute,
        redirect_link: redirectLink
      })

    } catch (error) {
      redirect(308, '/')
    }
  }
};