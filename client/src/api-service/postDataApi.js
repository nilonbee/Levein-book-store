import React from "react";
const apiKey = import.meta.env.VITE_REACT_APP_BASE_API_URL;

const postDataApi = async (url, data) => {
  try {
    const response = await fetch(
      `https://levein-book-store.onrender.com/api/v1/${url}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const responseData = await response.json();

    if (responseData?.msg === "SUCCESS") {
      // Return the response data on success
      console.log("msg", responseData?.msg);
      return responseData;
    }
  } catch (error) {
    // Handle network errors or JSON parsing errors
    console.error("An error occurred:", error);
    throw error;
  }
};

export default postDataApi;
