<template>
  <div id="app" class="appCon">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.appCon{
  overflow-y: scroll;
}
</style>
