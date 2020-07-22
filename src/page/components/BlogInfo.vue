<template>
  <div>
    <BlogBriefCard></BlogBriefCard>
    <NoticeCard class="interval"></NoticeCard>
    <NewestCard class="interval"></NewestCard>
  </div>
</template>

<script>
import BlogBriefCard from './BlogBriefCard'
import NoticeCard from './NoticeCard'
import NewestCard from './NewestCard'
export default {
  components: {
    BlogBriefCard,
    NoticeCard,
    NewestCard
  }
}

</script>
<style lang='less' scoped>
  .interval {
    margin-top: .5rem;
  }
</style>
