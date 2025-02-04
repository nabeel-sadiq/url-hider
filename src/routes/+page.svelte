<div class="px-5 flex-wrap text-center flex flex-col justify-center items-center min-h-screen gap-4">
  <h1 class="text-4xl font-bold uppercase">URL Hider</h1>
  <p>Hide your url by changing it to something else.</p>
  <form method="POST" class="flex flex-col gap-2">
    <input
      class="input input-bordered input-accent"
      type="text"
      name="shortened"
      placeholder="Enter hidden route"
      required
    />
    <input
      class="input input-bordered input-accent"
      type="url"
      name="redirect"
      placeholder="Type URL to hide"
      required
    />
    <button class="btn btn-accent" type="submit">Hide My Link</button>
  </form>
</div>
