<template>
  <div class="team">
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-row class="content">
      <b-col>
        <b-input-group>
        <b-dropdown variant="secondary" text="添加">
          <b-dropdown-item>查询</b-dropdown-item>
        </b-dropdown>
        <b-form-input placeholder="模块名称" v-model="addname"></b-form-input>
        <b-input-group-append>
          <b-button variant="outline-success" @click="creat">确定</b-button>
          <b-button v-b-toggle.collapse-2>更多</b-button>
        </b-input-group-append>
        </b-input-group>
      </b-col>
    </b-row>
    <b-collapse id="collapse-2">
      <b-card>基础、交互、连接
          <b-form-group id="input-group-1" label="详细信息" label-for="input-1" description="输入145字以内的文字信息。" >
            <b-form-input id="input-1" v-model="form.ininfo" type="ininfo" placeholder="输入文字..."></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-1" label="封面" label-for="input-1" description="输入封面地址" >
            <b-form-input id="input-1" v-model="form.img" type="img" placeholder="输入文字..."></b-form-input>
          </b-form-group>
        <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ form }}</pre>
        </b-card>
      </b-card>
    </b-collapse>
    <div  class="bv-example-row">
       <b-card-group  columns>
            <b-card
            overlay
            v-bind:img-src="data.img"
            style="max-width: 20rem;margin: 5px auto; min-height: 4rem;"
            v-for="data in data"
            :key="data.id"
            >
            <b-card-text>{{data.text}}</b-card-text>
            <b-dropdown text="" variant="link" class="m-md-2 team_drop" right>
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
      addname: '',
      items: [
        {
          text: '1'
        }
      ],
      data: [
        {
          img: '',
          text: 'Y任务',
          id: '4'
        },
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
        },
        {
          img: '',
          text: 'Y任务',
          id: '5'
        }
      ],
      form: {
        ininfo: '',
        img: ''
      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true
    }
  },
  mounted () {
    this.$root.$on('bv::dropdown::show', bvEvent => {
      console.log('Dropdown is about to be shown', bvEvent)
    })
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    creat () {
      this.data.unshift({
        img: this.form.img,
        text: this.addname,
        id: ''
      })
    }
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
.content{
  margin: 5px 0;
}
.card-img-overlay{
  text-align: left
}
.team_drop{
  top: 6px;
  right: 0px;
  position: absolute !important;
}
</style>
