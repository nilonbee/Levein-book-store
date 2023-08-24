import React from "react";

const getApiData = async (url) => {
  try {
    const response = await fetch(`http://localhost:8000/api/v1/${url}`);

    const data = await response.json();

    if (response.status === 201) {
      // Return the data on success
      console.log("calling getApiData", data);
      return data;
    } else {
      // Handle non-successful responses, e.g., log an error message
      console.error(`API request failed with status ${response.status}`);
      throw new Error(`API request failed with status ${response.status}`);
    }
  } catch (error) {
    // Handle network errors or JSON parsing errors
    console.error("An error occurred:", error);
    throw error;
  }
};

export default getApiData;
