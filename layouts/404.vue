<template>
  <el-container>
    <el-main>
      <el-row
        :gutter="10"
        align="center"
      >
        <el-col
          :sm="24"
          :md="12"
          :lg="12"
        >
          <el-card class="card project-card">
            <div>
              <h4>Oops...</h4>
              <p class="err-msg">{{ getMsg }}</p>
              <router-link
              :to="/"
              class="el-button el-button--primary"
              ><i class="el-icon-house"></i> Take me home!</router-link>     
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got some broken links.`
]

export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>
<style lang="stylus">
.el-container {
  max-width: 1100px;
  margin-right: auto !important;
  margin-left: auto !important;
  min-height: 80vh;

  .project-card.card {
    margin: 8px;
    background-color: darken($accentColor, 50%);
    color: lighten($accentColor, 80%);
    }

    p.err-msg {
      color: lighten($accentColor, 60%);
      margin: 1.5rem auto;
    }
  
}
</style>