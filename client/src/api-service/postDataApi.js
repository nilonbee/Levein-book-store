import React from "react";
// import dotenv from "dotenv";
// dotenv.config();

const postDataApi = async (url, data) => {
  try {
    const response = await fetch(`http://localhost:8000/api/v1/${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // You can add any additional headers here if needed
      },
      body: JSON.stringify(data), // Convert data to JSON string
    });

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
