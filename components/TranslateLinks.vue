<template>
    <section class="flex justify-center">
        <NuxtLink :to="translateLink('')" class="lang-link mx-2" active-class="lang-link--active" exact>
          CA
        </NuxtLink>
        <NuxtLink :to="translateLink('/es')" class="lang-link mx-2" active-class="lang-link--active" exact>
          ES
        </NuxtLink>
        <NuxtLink :to="translateLink('/en')" class="lang-link mx-2" active-class="lang-link--active" exact>
          EN
        </NuxtLink>
        <NuxtLink :to="translateLink('/fr')" class="lang-link mx-2" active-class="lang-link--active" exact>
          FR
        </NuxtLink>
    </section>
</template>

<script>
export default {
    name: 'translateLinks',
    methods: {
        translateLink (prefix) {
            if (this.$i18n.locale === 'ca') {
                return prefix + this.$route.fullPath
            } else {
                return this.$route.fullPath.replace(/^\/[^\/]+/, prefix)
            }
        }
    }
}
</script>

<style>
 .lang-link:after {
     content: '';
     display: block;
     width: 0;
     height: 2px;
     background: #35495e;
  }

  .lang-link:hover:after {
    width: 100%;
    transition: width .3s;
  }

  .lang-link--active:after {
      width: 100%;
  }
</style>