<template>
  <div class="container min-h-screen flex justify-center items-center text-center mx-auto">
    <div>
      <h1 class="title text-3xl md:text-6xl">
        Toni Bover Site
      </h1>
      <h2 class="subtitle text-xl md:text-3xl">
        {{ $t('home.subtitle') }}
      </h2>
      <TranslateLinks />
    </div>
  </div>
</template>

<script>
import TranslateLinks from '../../components/TranslateLinks'
export default {
  components: {
    TranslateLinks
  }
}
</script>

<style>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
