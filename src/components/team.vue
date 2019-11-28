<template>
  <div class="team">
        <b-breadcrumb :items="items"></b-breadcrumb>
    <div  class="bv-example-row">
       <b-card-group  columns>
            <b-card
            overlay
            v-bind:img-src="data.img"
            style="max-width: 20rem;margin: 5px auto;"
            v-for="data in data"
            :key="data.id"
            >
            <b-card-text>{{data.text}}</b-card-text>
            <b-dropdown text="" variant="link" class="m-md-2" right style="top: 0px; right: 0px;position: absolute;">
              <b-dropdown-header id="dropdown-header-1">编辑</b-dropdown-header>
              <b-dropdown-item-button aria-describedby="dropdown-header-1">重命名</b-dropdown-item-button>
              <b-dropdown-item-button aria-describedby="dropdown-header-1">删除</b-dropdown-item-button>
              <b-dropdown-header id="dropdown-header-2">状态</b-dropdown-header>
              <b-dropdown-item-button aria-describedby="dropdown-header-2">进度</b-dropdown-item-button>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item-button> 更多</b-dropdown-item-button>
            </b-dropdown>
            </b-card>
       </b-card-group>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          text: '1'
        }
      ],
      data: [
        {
          img: 'https://picsum.photos/600/300/?image=23',
          text: 'X小组',
          id: '1'
        },
        {
          img: 'https://picsum.photos/600/300/?image=24',
          text: 'X任务',
          id: '2'
        },
        {
          img: 'https://picsum.photos/600/300/?image=25',
          text: 'Y任务',
          id: '3'
        }
      ]
    }
  },
  mounted () {
    this.$root.$on('bv::dropdown::show', bvEvent => {
      console.log('Dropdown is about to be shown', bvEvent)
    })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.team{
  max-width: 1080px;
  margin: 0 auto;
  height: 100%;
  padding: 0.5rem 1rem;
}
.card-img{
  opacity:0.3
}
</style>
