<template>
  <div class="team">
    <template>
        <b-breadcrumb :items="items"></b-breadcrumb>
    </template>

    <div  class="bv-example-row">
       <b-card-group  columns>
            <b-card
            overlay
            img-src="https://picsum.photos/600/300/?image=25"
            style="max-width: 20rem;margin: 5px auto;"
            >
            <b-card-text>Some quick example text</b-card-text>
            </b-card>
             <b-card
            overlay
            img-src="https://picsum.photos/600/300/?image=25"
            style="max-width: 20rem;margin: 5px auto;"
            >
            <b-card-text>Some quick example text</b-card-text>
            </b-card>
             <b-card
            overlay
            img-src="https://picsum.photos/600/300/?image=25"
            style="max-width: 20rem;margin: 5px auto;"
            >
            <b-card-text>Some quick example text</b-card-text>
            </b-card>
              <b-card
            overlay
            img-src="https://picsum.photos/600/300/?image=25"
            style="max-width: 20rem;margin: 5px auto;"
            >
            <b-card-text>Some quick example text</b-card-text>
            </b-card>
              <b-card
            overlay
            img-src="https://picsum.photos/600/300/?image=25"
            style="max-width: 20rem;margin: 5px auto;"
            >
            <b-card-text>Some quick example text</b-card-text>
            </b-card>
              <b-card
            overlay
            img-src="https://picsum.photos/600/300/?image=25"
            style="max-width: 20rem;margin: 5px auto;"
            >
            <b-card-text>Some quick example text</b-card-text>
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
          text: 'admim'
        },
        {
          text: 'dsds'
        }
      ]
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
</style>
