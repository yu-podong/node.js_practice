<template>
  <LoginBox v-show="isShowLoginBox" id="tommy" @login="onLogin" />
  <p v-show="login_success">로그인 성공</p>
  <p v-show="login_fail">로그인 실패</p>
  <hr>

  <div v-show="isShowList">
    <TextBox title="당신만이" text="눈부신태양이..." />
    <TextBox title="붙이지못한편지" text="입영하던날...." />
    <TextBox title="인연" text="안개비가 내려와...." />
  </div>
</template>

<script>
import TextBox from './components/TextBox.vue'
import LoginBox from './components/LoginBox.vue'

export default {
  name: 'App',
  components: {
    TextBox,
    LoginBox
  },
  data() {
    return {
      login_success: false,
      login_fail: false,
      isShowLoginBox: true,
      isShowList: false
    }
  },
  methods : {
    onLogin(result) {
      console.log(result);
      if(result) {
        this.login_success = true
        this.login_fail = false
        this.isShowLoginBox = false
        this.isShowList = true
      }
      else {
        this.login_success = false
        this.login_fail = true
      }
    }
  }
}
</script>

<style>

</style>
