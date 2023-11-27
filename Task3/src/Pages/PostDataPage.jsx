import React, { useState } from 'react';

const PostDataComponent = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [responseData, setResponseData] = useState(null);

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const postData = async () => {
    try {
      const response = await fetch('https://chimpu.xyz/api/post.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `phonenumber=${phoneNumber}`,
      });

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        // Extract data from headers
        const dataReceived = await response.text(); // Use text() method to get the response body as text

        // Update state with the received data
        setResponseData(dataReceived);
      } else {
        console.error('Failed to post data:', response.statusText);
      }
    } catch (error) {
      console.error('Error while posting data:', error);
    }
  };

  return (
    <div>
      <h2>Post Data to API and Display Response</h2>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </div>
      <div>
        <button onClick={postData}>Post Data</button>
      </div>
      {responseData !== null && (
        <div>
          <h3>Data received:</h3>
          <p>{responseData}</p>
        </div>
      )}
    </div>
  );
};

export default PostDataComponent;
