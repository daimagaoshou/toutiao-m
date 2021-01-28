<template>
  <div class="login-contain">
    <van-nav-bar
      class="app-nav-bar"
      title="登录 / 注册" 
      left-arrow 
      @click-left="$router.back()"
    />
    <van-cell-group>
      <van-field
        v-model="user.mobile"
        icon-prefix="toutiao"
        left-icon	="shouji"
        placeholder="请输入手机号"
        clearable
    />
      <van-field
        v-model="user.vercode"
        clearable
         icon-prefix="toutiao"
        left-icon	="yanzhengma"
        placeholder="请输入手机号"
      >
        <template #button>
          <van-button class="send-btn" size="mini" round>发送验证码</van-button>
        </template>
      </van-field>
    </van-cell-group>

    <div class="login-btn-wrap">
      <van-button class="login-btn" type="info" block>登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginIndex",
  data() {
    return {
      user: {
        mobile: "",
        vercode: "",
      },
    };
  },
};
</script>
<style lang='less'>

  body{
    background-color: #f5f7f9;
  }
  
  .send-btn{
    width: 76px;
    height: 23px;
    background-color: #ededed;
    .van-button__text{
      color: #666666;
    }
  }
  
  
  .login-btn-wrap{
    padding: 26px 16px;
    .login-btn{
      background-color: #6db4fb;
      border: none;
      .van-button__text{
        font-size: 15px;
      }
    }
  }


</style>