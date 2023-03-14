<template>
  <div id="user-menu">
    <div class="user-menu_wrapper">
      <button><img src="../assets/img/bell.svg" alt="Bell"></button>
      <button><img src="../assets/img/user.svg" alt="User Control"></button>
    </div>
  </div>
</template>

<style>
  #user-menu {
    position: absolute;
    top: 2rem;
    right: 2rem;
    background-color: #ffffff;
    border-radius: 0 2rem 0 2rem;
    padding: .5rem 1rem;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  }
  #user-menu .user-menu_wrapper button {
    background-color: transparent;
    border: 0;
  }
  #user-menu .user-menu_wrapper img {
    margin: .5rem 1rem;
    width: 3rem;
  }
</style>