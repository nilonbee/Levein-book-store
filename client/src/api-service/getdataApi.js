import React from "react";

const apiKey = import.meta.env.VITE_REACT_APP_BASE_API_URL;

const getApiData = async (url) => {
  try {
    // const response = await fetch(`${apiKey}/${url}`);
    const response = await fetch(`${apiKey}/${url}`);

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
