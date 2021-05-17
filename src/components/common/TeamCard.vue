<template>
  <div class="background-main box">
    <h3 class="text-center">Contact Blanc</h3>
    <div class="d-flex">
      <p>Flashou</p>
      <p class="role black">DPS</p>
    </div>
    <div class="d-flex">
      <p>TTVCodRyzer</p>
      <p class="role black">DPS</p>
    </div>
    <div class="d-flex">
      <p>OTTOOO</p>
      <p class="role black">Tank/flex</p>
    </div>
    <div class="d-flex">
      <p>FroTheworldChamp</p>
      <p class="role black">Support</p>
    </div>
    <div class="d-flex">
      <p>Néox</p>
      <p class="role black">Tank</p>
    </div>
    <div class="d-flex">
      <p>ishootHeads</p>
      <p class="role black">Sub</p>
    </div>
    <div class="d-flex no-margin">
      <p>Horimiyaaaaaaa</p>
      <p class="role black">Sub</p>
    </div>
    <div class="d-flex social-network flex-start">
      <i class="fab fa-twitter"></i>
      <i class="fab fa-twitch"></i>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.d-flex {
  margin-bottom: 16px;
  :nth-last-child(3) {
    background-color: white;
  }

  .role {
    font-weight: bold;
    font-size: 18px;
  }
}
.flex-start {
  justify-content: flex-start;
  i {
    font-size: 25px;
  }
  .fa-twitter {
    margin-right: 24px;
  }
}
.no-margin,
.social-network {
  margin-bottom: 0;
}
.social-network {
  margin-top: 40px;
}
.box {
  border-radius: 25px;
  padding: 28px 20px 30px 20px;
  width: 288px;
  h3 {
    margin-bottom: 48px;
    font-size: 24px;
  }
}
</style>
