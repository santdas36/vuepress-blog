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
          :lg="8"
        >
          <el-card class="card project-card">
            <div
              class="project-card-header"
            >
              <div class="project-icon">
                <i class="el-icon-coffee"></i>
              </div>
            </div>
            <div>
              <h4>Oops...</h4>
              <p class="project-description">{{ getMsg() }}</p>
              <RouterLink to="/" class="el-button el-button--primary">
                <i class="el-icon-house"></i> &nbsp; Take me home
              </RouterLink>
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

    .project-card-header {
      display: flex;
      margin-bottom 1rem;
      justify-content: space-between;
      align-items: center;

      .project-icon {
        font-size: 3em;
        position: relative;
        top: 0.3rem;
        color: lighten($accentColor, 50%);
      }
    }

    p.project-description {
      color: lighten($accentColor, 60%);
      margin: 1.5rem auto;
      font-size: 2em;
      font-weight: 700;
      padding-bottom: 1rem;
    }
  }
}
</style>