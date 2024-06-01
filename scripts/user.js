document.addEventListener("DOMContentLoaded", () => {
    const userDetailsContainer = document.getElementById("user-details");
    const updateForm = document.getElementById("update-form");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const passwordInput = document.getElementById("password");
  
    // Function to get user details
    function getUserDetails() {
      fetch("https://khmer-shoping.onrender.com/user/current", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Add your authentication token if required
          "Authorization": "Bearer your_token_here"
        }
      })
      .then((response) => response.json())
      .then((user) => {
        userDetailsContainer.innerHTML = `
          <h2>User Details</h2>
          <p><strong>Username:</strong> ${user.username}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Phone:</strong> ${user.phone}</p>
        `;
        usernameInput.value = user.username;
        emailInput.value = user.email;
        phoneInput.value = user.phone;
      })
      .catch((error) => console.error("Error fetching user details:", error));
    }
  
    // Function to update user details
    function updateUserDetails(updatedData) {
      fetch("https://khmer-shoping.onrender.com/user/current", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // Add your authentication token if required
          "Authorization": "Bearer your_token_here"
        },
        body: JSON.stringify(updatedData),
      })
      .then((response) => response.json())
      .then((data) => {
        alert("User updated successfully");
        getUserDetails(); // Refresh user details
      })
      .catch((error) => console.error("Error updating user:", error));
    }
  
    // Event listener for form submission
    updateForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const updatedData = {
        username: usernameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        password: passwordInput.value,
      };
      updateUserDetails(updatedData);
    });
  
    // Load user details on page load
    getUserDetails();
  });
  