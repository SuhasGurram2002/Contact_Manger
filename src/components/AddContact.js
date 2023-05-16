import React from "react";

const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
    ph: "",
  };
  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "" || this.state.ph === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    if(this.state.ph.match('[0-9]{10}') && this.state.email.match(isValidEmail)){
      this.props.addContactHandler(this.state);
      this.setState({ name: "", email: "" , ph:""});
    }
    else{
      if(!this.state.email.match(isValidEmail)){
        alert("enter a valid email");
        return;
      }
      else{
        alert("enter a valid phone number");
        return;
      }
    }
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Mob Number</label>
            <input
                type="tel"
                name="ph"
                placeholder="Mobile Number"
                value={this.state.ph}
                onChange={(e) => this.setState({ ph: e.target.value })}
            />
          </div>
          <button className="ui button green">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
