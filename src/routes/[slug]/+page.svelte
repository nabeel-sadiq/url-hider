<script>
  import { browser } from "$app/environment";

  let { data } = $props();

  if (browser) {
    window.location.href = data.redirect_link;
  }
</script>
