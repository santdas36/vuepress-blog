<template>
  <div class="ui-post-info d-flex">
    <div class="post-info-item">
      <CalendarIcon />
      {{ new Date(date.trim()).toDateString() }}
    </div>
    <div
      class="post-info-item pit-hidden"
      v-if="timeToRead"
    >
      <ClockIcon />
      {{ timeToRead }}
    </div>
  </div>
</template>

<script>
import { ClockIcon, CalendarIcon } from "vue-feather-icons";

export default {
  components: { ClockIcon, CalendarIcon },
  props: ["date", "timeToRead"]
};
</script>

<style lang="stylus">
div.post-info-item {
  margin-right: 1rem;
  font-size: .8rem;

  svg {
    width: 17px;
    height: 17px;
  }
}
.pit-hidden {
  display: block;

  @media (max-width: $MQMobileNarrow) {
    display: none;
  }
}
</style>