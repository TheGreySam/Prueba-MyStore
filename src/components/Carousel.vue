<template>
    <div>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="..." alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide">
    </div>
  </div>
</div>
<div class="row">
    
    <img v-bind:src="img in images">
</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            images: [
                '284245.jpg', 
                '285677.jpg', 
                '285777.jpg', 
                '287411.jpg',
                '350606.jpg'
                ]
        }
    }
            
    
}
</script>

<style scoped>

</style>
