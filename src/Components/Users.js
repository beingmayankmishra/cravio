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
          following: json.following,
          avatar_url: json.avatar_url,
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
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-6 space-y-4 text-center mt-16">
          <img
            src={avatar_url}
            alt="User Avatar"
            className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-blue-500"
          />
          <h1 className="text-2xl font-semibold text-gray-800">{name}</h1>
          <h2 className="text-lg text-gray-600">{location}</h2>
          <h3 className="text-xl font-medium text-blue-600">Following: {following}</h3>
        </div>
      </div>
    );
  }
}

export default Users;
