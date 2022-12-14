import React from "react";
import "../css/login.css";

const Login = () => {
  return (
    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100">
          <form class="login100-form validate-form">
            <span class="login100-form-title p-b-26">Hoşgeldiniz</span>
            <span class="login100-form-title p-b-48">
              <i class="zmdi zmdi-font"></i>
            </span>

            <div class="wrap-input100 validate-input">
              <input class="input100" type="text" name="email" />
              <span class="focus-input100" data-placeholder="Email"></span>
            </div>

            <div class="wrap-input100 validate-input">
              <span class="btn-show-pass">
                <i class="zmdi zmdi-eye"></i>
              </span>
              <input class="input100" type="password" name="pass" />
              <span class="focus-input100" data-placeholder="Şifre"></span>
            </div>

            <div class="container-login100-form-btn">
              <div class="wrap-login100-form-btn">
                <div class="login100-form-bgbtn"></div>
                <button class="login100-form-btn">Giriş</button>
              </div>
            </div>

            <div id="register" class="text-center p-t-115">
              <span class="txt1">Hesabınız yok mu?</span>

              <a class="txt2" href="#">
                Kayıt Ol
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
