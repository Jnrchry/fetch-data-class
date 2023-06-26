import React from "react";

class ComponentdidMount extends React.Component {
  state = {
    users: {},
    loading: false,
  };

  async componentDidMount() {
    // call to an API
    const url = "https://reqres.in/api/users?page=2";
    const response = await fetch(url);
    const data = await response.json();

    this.setState({ users: data, loading: true });
  }

  render() {
    const { users, loading } = this.state;
    return (
      <div style={{ marginTop: "1rem" }}>
        <h1>ComponentdidMount</h1>
        {!loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            {users &&
              users.data.map((user) => {
                return (
                  <div key={user.id} style={{ marginTop: "10px" }}>
                    <img
                      src={user.avatar}
                      alt="avatar"
                      style={{ marginTop: "10px" }}
                    />
                    <h3>
                      {user.first_name} {user.last_name}
                    </h3>
                    <p>{user.email}</p>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    );
  }
}

export default ComponentdidMount;
