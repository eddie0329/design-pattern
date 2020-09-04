export class FormBuilder {
  constructor(h, self) {
    this.h = h;
    this.fields = [];
    this.self = self;
  }

  getTypes(name) {
    const inputTypes = {
      Username: "_inputUsername",
      Password: "_inputPassword",
    };
    return inputTypes[name];
  }

  setFields(fields) {
    this.fields.push(
      fields.map((f) => {
        return this.h("input", {
          class: { input: true },
          domProps: {
            type: f.type || "text",
            placeholder: f.name,
            name: f.name,
            value: this.self[this.getTypes(f.name)],
          },
          on: {
            input: (event) => {
              this.self[this.getTypes(f.name)] = event.target.value;
            },
          },
        });
      })
    );
    return this;
  }

  setSubmit(text) {
    this.fields.push(
      this.h("input", {
        class: "button is-link",
        domProps: { type: "submit", value: text },
      })
    );
    return this;
  }

  getForm(submitFunc) {
    return this.h(
      "form",
      {
        on: {
          submit: (event) => {
            event.preventDefault();
            submitFunc();
          },
        },
      },
      this.fields
    );
  }
}

export class FormDirector {
  makeUserSignIn(builder) {
    builder
      .setFields([{ name: "Username" }, { name: "Password", type: "password" }])
      .setSubmit("Sign in");
  }
}
