<template>
  <div class="primary-section">
    <img class="logo" src="@/assets/logo.svg">

    <div class="background">
      <div class="background-layer"></div>
      <div class="background-image"></div>
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
          'Web Designer',
          'Solutions Architect',
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
.logo {
  display: none;
  position: absolute;
  z-index: 1;
  height: 30px;
  top: 10px;
  left: 10px;
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
  background: no-repeat center center fixed;
  background-image: url('../../assets/background.jpg'), url('../../assets/background-low-res.jpg');
  background-size: cover;
  height: 100%;
  width: 100%;
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
  height: 180px;
  border-radius: 50%;
  border: 10px solid grey;
}
.name {
  font-size: 80px;
}
.last-name {
  color: var(--color-secondary);
}
.one-liner {
  font-size: 28px;
  margin-right: 170px;
}
.iama {
  margin-left: 6px;
	color: var(--color-secondary);
  font-weight: 600;
}
.move-down {
  position: absolute;
  z-index: 1;
  bottom: 2vh;
}
@media only screen and (max-width: 992px) {
  .logo {
    display: inline;
  }
  .background-layer {
    opacity: 0.5;
  }
  .name {
    font-size: 10vw;
  }
  .one-liner {
    font-size: 5vw;
    margin-right: 40vw;
  }
}
</style>