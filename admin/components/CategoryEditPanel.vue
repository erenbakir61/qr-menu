<template>
  <div id="category-edit-panel">
    <div class="edit-panel_wrapper">
      <div class="edit-panel">
        <button v-on:click="menuStore.editPanelOpener" class="panel-closer">
          <img src="../assets/img/x.svg" alt="Edit Panel Closer" />
        </button>
        <div class="panel-content">
          <div class="panel-content_left">
            <label class="panel-content_header" for="newCtgName">New Category Name: </label>
            <input
              class="panel-content_text"
              type="text"
              name="newCtgName"
              id="newCtgName"
              placeholder="New Name"
              v-model="menuStore.editPanelCtg[0].name"
            />
            <label class="panel-content_header" for="newCtgImg">New Category Image: </label>
            <input class="panel-content_upload" type="file" name="newCtgImg" id="newCtgImg" />
          </div>
        </div>
        <div class="panel_buttons">
          <button v-on:click="deleteCtg(menuStore.editPanelCtg[0])">
            <img src="../assets/img/trash.svg" alt="Delete Category" />Delete
          </button>
          <button v-on:click="editCtg"><img src="../assets/img/check.svg" alt="Accept Category" />Accept</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMenuStore } from '~/stores/menu';

const menuStore = useMenuStore();

const deleteCtg = async (category) => {
  await fetch(menuStore.ctgFetchUrl + category._id, { method: 'DELETE' }).then(() => {
    menuStore.categories.pop(category);
    menuStore.categoryEditPanelIsOpen = false;
    menuStore.editPanelCtg = [];
  });
};

const editCtg = async () => {
  const fileInput = document.querySelector('.panel-content_upload').files[0];
  if (fileInput) {
    const formData = new FormData();
    formData.append('categoryImage', fileInput);
    await fetch(menuStore.ctgImgFetchUrl, {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.filename);
        menuStore.requestCtgBody.name = menuStore.editPanelCtg[0].name;
        menuStore.requestCtgBody.img = data.filename;
        menuStore.updateCtg();
        menuStore.editPanelCtg[0].img = data.filename;
      });
  } else {
    menuStore.requestCtgBody.name = menuStore.editPanelCtg[0].name;
    menuStore.requestCtgBody.img = menuStore.editPanelCtg[0].img;
    menuStore.updateCtg();
  }
};
</script>

<style>
#category-edit-panel {
  position: absolute;
  bottom: 15%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.edit-panel {
  position: relative;
  background-color: #ffffff;
  padding: 3rem 3rem 5rem 3rem;
  width: 100%;
  border-radius: 2rem;
  box-shadow: 10px 10px 50rem 100vh rgba(0, 0, 0, 0.5);
}

.panel-content {
  margin-right: 5rem;
  display: flex;
}

.panel-content_left {
  height: 100%;
  font-size: 1.1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.panel-content_left * {
  margin-bottom: 1rem;
}
 
.panel-content_right {
  margin-bottom: 3rem;
}

.panel-content_text {
  font-size: 1rem;
  width: 12rem;
  padding: 0.2rem 0.5rem;
  border: 2px solid #dddddd;
}

.panel-content_text:focus {
  outline: none;
}

.panel-content_upload {
  font-size: 1rem;
}

.card-wrapper .card {
  width: 13rem;
  box-shadow: 11px 11px 22px #b3b3b3;
}

.card-wrapper .card .card_image {
  height: 11rem;
  overflow: hidden;
}

.panel_buttons {
  position: absolute;
  right: 10%;
  bottom: 2rem;
}

.panel_buttons button {
  background-color: #f4f5f6;
  border: 0;
  padding: 0.5rem 1rem;
  margin-left: 1rem;
}

.panel_buttons button img {
  margin-right: 0.5rem;
}

.panel-closer {
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  padding: 0.3rem;
  border-radius: 5px;
  background-color: transparent;
  border: 0;
}
</style>
