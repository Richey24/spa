const login = `<div id="login-form-wrap">
      <img src="img.png"
        width="200px"
        alt="">
      <p style="text-align: center; color: red; text-transform: capitalize; font-size: 12px;"
        id="errorMessage"></p>
      <form id="login-form">
        <p>
          <input type="text"
            id="username"
            name="username"
            value="admin@gmail.com""
            placeholder="Email"
            required><i class="validation"><span></span><span></span></i>
        </p>
        <p style="margin-top: 1rem">
          <input type="password"
            id="password"
            name="password"
            value="password123"
            placeholder="********"
            required>
        </p>
        <p style="margin-top: 1rem">
          <button class="animeBtn1">Login</button>
        </p>
      </form>
      <div id="create-account-wrap">


      </div>
    </div>
`;

export default login;
