<template>
  <head>
    <title>Qr Menu</title>
  </head>
  <Navbar />
  <Mainpage />
  <Footer />
</template>

<script>
import cacheControl from "~/helpers/cacheControl";

export default {
  name: 'Home',
  middleware: cacheControl({
    'max-age': 60,
    'stale-when-revalidate': 5
  }),
}
</script>