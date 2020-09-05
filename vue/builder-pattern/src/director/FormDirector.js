export default class FormDirector {
  makeUserSignIn(builder) {
    builder
      .setFields([
        { name: "Username", rules: "required|min:6|max:15" },
        { name: "Password", rules: "required|min:6", type: "password" },
      ])
      .setSubmit("Sign in");
  }
}