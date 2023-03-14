<template>
  <main>
    <user-menu />
    <div id="panel_content">
      <sidebar />
      <categories-panel />
      <products-panel />
    </div>
  </main>
</template>

<style>
  body {
    background-color: #f3f4f6;
  }
  #panel_content {
    display: flex;
    position: relative;
    top: 12rem;
  }
</style>