<template>
  <main id="admin_panel">
    <section class="login_panel-wrapper">
      <div class="row">
        <div class="container">
          <div class="login_panel text-center">
            <h2 class="login_panel-header">Login</h2>
            <form class="login_panel-form">
              <div class="login_panel-username">
                <label for="panelUsername">Username</label>
                <div>
                  <img alt="user" class="input_img" src="@/assets/img/user.svg" />
                  <input type="text" id="panelUsername" />
                </div>
              </div>
              <div class="login_panel-password">
                <label for="panelPassword">Password</label>
                <div>
                  <img class="input_img" src="@/assets/img/lock.svg" />
                  <input type="text" id="panelPassword" />
                </div>
              </div>
              <button><img src="@/assets/img/login.svg" class="me-2 my-1" /> Login</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
#admin_panel {
  background-image: url('@/assets/img/login_banner.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
}

.login_panel {
  width: 20%;
  height: 35%;
  background-color: rgba(220, 216, 216, 0.85);
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem 1rem;
  border-radius: 30px;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
}

.login_panel-header {
  font-weight: 200;
  letter-spacing: 0.3rem;
  margin-bottom: 4rem;
}

.login_panel-form label {
  font-size: 1.5rem;
  font-weight: 200;
  display: block;
  margin-bottom: 0.5rem;
}

.login_panel-form img.input_img {
  padding-right: 10px;
  margin: 0.3rem 0;
  position: absolute;
  left: calc(25% + 1.5rem);
  border-right: 2px solid black;
}

.login_panel-form input {
  width: 50%;
  font-size: 1.2rem;
  font-weight: 200;
  margin-bottom: 2rem;
  border-radius: 13px;
  padding: 2px 1rem 2px 4rem;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
}

.login_panel-form input:focus {
  outline: none;
}

.login_panel-form button {
  font-size: 1.2rem;
  padding: 0.5rem 2rem;
  margin-top: 2rem;
  background-color: #f3f4f6;
  color: #475569;
  border-radius: 10px;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
}
</style>
