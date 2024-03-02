// Helper function to capitalize the first letter of a string
function capitalizeFirstLetter(str) {
    if (typeof str !== 'string' || str.length === 0) {
      throw new Error("Input must be a non-empty string");
    }
  
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  // Helper function to reverse a string
  function reverseString(str) {
    if (typeof str !== 'string' || str.length === 0) {
      throw new Error("Input must be a non-empty string");
    }
  
    return str.split('').reverse().join('');
  }
  
  // Demo using the helper functions
  try {
    const inputString = "hello, world!";
    const capitalizedString = capitalizeFirstLetter(inputString);
    console.log("Capitalized:", capitalizedString);
  
    const reversedString = reverseString(inputString);
    console.log("Reversed:", reversedString);
  } catch (error) {
    console.error("Error:", error.message);
  }
  