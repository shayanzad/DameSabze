<template>
  <div>
      <div v-if="error.statusCode==404">
          <notFoundPage></notFoundPage>
      </div>
  </div>
</template>

<script>
import notFoundPage from '@/pages/404/index.vue' 
export default {
props:[
    'error'
],
components:{
    notFoundPage,
}
}
</script>

<style>

</style>