import React from 'react';

function UserProfile() {
  return (
    <div className="bg-gray-100 md:p-8 sm:p-4 md:max-w-sm max-w-xs mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full w-24 h-24 sm:w-36 sm:h-36 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"
      />
      <h1 className="text-lg md:text-xl text-blue-800 my-4 hover:text-blue-500 transition-colors duration-300 ease-in-out">
      Ikechukwu Godwin
      </h1>
      <p className="text-sm sm:text-base text-gray-600">
      Ikechukwu Loves to write code and read philosophical texts.
      </p>
    </div>
  );
}

export default UserProfile;
