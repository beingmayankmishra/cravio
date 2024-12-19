import React, { Component } from 'react';

export class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: 'Dummy',
        location: 'Default',
        avatar_url: "https://dummy-photo",
      },
    };
  }

  async componentDidMount() {
    try {
      const data = await fetch('https://api.github.com/users/beingmayankmishra');
      const json = await data.json();

      this.setState({
        userInfo: {
          name: json.name || 'No Name Provided',
          location: json.location || 'No Location Available',
          following: json.following ,
          avatar_url: json.avatar_url ,

        },
      });

      console.log(json);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  render() {
    const { name, location, following, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} alt=''></img>
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
        <h3>Following: {following }</h3>
      </div>
    );
  }
}

export default Users;
