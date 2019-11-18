<template>
  <div class="primary-section">
    <div class="background">
      <div class="background-layer"></div>
      <img class="background-image" src="https://wallpaperask.com/wp-content/uploads/1920x1080-HD-Backgrounds.png"/>
    </div>
    
    <div class="content">
      <img class="profile-picture" src="@/assets/profile-picture.jpg"/>
      
      <span class="name">
        <span class="first-name">John </span>
        <span class="last-name">Lowther</span>
      </span>

      <span class="one-liner">
        I am a 
        <TextRotator class="iama" :words="[
          'Software Developer',
          'Web Designer'
        ]"></TextRotator>
      </span>

      <MoveDownButton class="move-down" page-link="about-me"></MoveDownButton>
    </div>
  </div>
</template>

<script>
import MoveDownButton from '../controls/MoveDownButton.vue';
import TextRotator from '../controls/TextRotator.vue';

export default {
  components: {
    MoveDownButton,
    TextRotator,
  },
}
</script>

<style scoped>
.primary-section {
  position: relative;
  height: 100%;
  width: 100%;
  color: whitesmoke;
}

.background {
  position: relative;
  height: 100%;
  width: 100%;
}
.background-layer {
  position: absolute;
  opacity: 0.4;
  height: 100%;
  width: 100%;
  background-color: rgb(0, 0, 64);
}
.background-image {
  height: 100%;
  width: 100%;
  object-fit: cover
}

.content {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.profile-picture {
  width: 180px;
  border-radius: 50%;
  border: 8px solid grey;
}
.name {
  font-size: 60px;
}
.last-name {
  color: orange;
}
.one-liner {
  font-size: 24px;
  margin-right: 170px;
}
.iama {
  margin-left: 6px;
	color: orange;
  font-weight: 600;
}
.move-down {
  position: absolute;
  z-index: 1;
  bottom: 2vh;
}
@media only screen and (max-width: 992px) {
  .name {
    font-size: 10vw;
  }
  .one-liner {
    font-size: 5vw;
    margin-right: 40vw;
  }
}
</style>