// Add user registration and profile management functionality
document.getElementById("mobile-menu").addEventListener("click", function () {
  const navList = document.querySelector(".nav-list");
  navList.classList.toggle("active"); // Toggle the active class
});



document.addEventListener("DOMContentLoaded", () => {
  const applyButtons = document.querySelectorAll(".apply-button");
  const enrollButtons = document.querySelectorAll(".enroll-button");
  const registrationForm = document.getElementById("registration-form");
  const profileForm = document.getElementById("profile-form");
  const profileInfo = document.getElementById("profile-info");
    const editProfileButton = document.getElementById("edit-profile-button");
    const deleteProfileButton = document.getElementById("delete-profile-button");

  // Handle job application buttons
  applyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      alert("Application submitted for the job!");
    });
  });

  // Handle course enrollment buttons
  enrollButtons.forEach((button) => {
    button.addEventListener("click", () => {
      alert("Enrolled in the course!");
    });
  });

  // Handle user registration
  registrationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const skills = document.getElementById("skills").value;
    const education = document.getElementById("education").value;

    // Store user data in local storage (for demonstration)
    const userData = {
      name,
      email,
      skills,
      education,
    };
    localStorage.setItem("userData", JSON.stringify(userData));

    // Clear form and display success message
    registrationForm.reset();
    alert("Registration successful! You can now view your profile.");
    displayUserProfile();
  });

  // Display user profile
  function displayUserProfile() {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      profileInfo.innerHTML = `
                <h3>Profile Information</h3>
                <p>Name: ${userData.name}</p>
                <p>Email: ${userData.email}</p>
                <p>Skills: ${userData.skills}</p>
                <p>Education: ${userData.education}</p>
            `;
        editProfileButton.style.display = "block";
        deleteProfileButton.style.display = "block";
      document.getElementById("edit-skills").value = userData.skills;
      document.getElementById("edit-education").value = userData.education;
    }
  }

  // Show profile editing form
  editProfileButton.addEventListener("click", () => {
    profileForm.style.display = "block";
    editProfileButton.style.display = "none";
  });

  // Handle profile update
  profileForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const editSkills = document.getElementById("edit-skills").value;
    const editEducation = document.getElementById("edit-education").value;

    // Update user data in local storage
    const updatedUserData = {
      ...JSON.parse(localStorage.getItem("userData")),
      skills: editSkills,
      education: editEducation,
    };
    localStorage.setItem("userData", JSON.stringify(updatedUserData));

    // Clear form and display updated profile
    profileForm.reset();
    profileForm.style.display = "none";
    alert("Profile updated successfully!");
    displayUserProfile();
  });

  // Handle profile deletion
  deleteProfileButton.addEventListener("click", () => {
    const confirmation = confirm(
      "Are you sure you want to delete your profile?"
    );
    if (confirmation) {
      localStorage.removeItem("userData"); // Remove user data from local storage
      alert("Profile deleted successfully!");
      displayUserProfile(); // Update the UI
    }
  });

  // Initially display the user profile if registered
  displayUserProfile();
});
