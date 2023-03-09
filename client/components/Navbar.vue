<template>
  <header>
    <NuxtLink href="/">
      <img id="header_logo" src="@/assets/img/logo.png" alt="restaurant logo" />
    </NuxtLink>
  </header>
</template>

<style>
  header {
    height: 30vh;
    background-image: url(@/assets/img/banner.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  #header_logo {
    width: 40%;
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    top: 18vh;
    border: 5px solid white;
    border-radius: 50%;
    }
  @media (min-width: 992px) {
    header #header_logo {
      width: 15%;
    }
  }

</style>