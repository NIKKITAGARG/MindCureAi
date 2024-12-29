import { React, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../hooks/firebase-config";
import { useNavigate, useParams } from "react-router-dom"; // Import useNavigate

const MainPage = () => {
  const [userType, setUserType] = useState("");
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
   // Initialize useNavigate

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
    setFormData({}); // Reset form data when user type changes
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Determine the collection based on user type
      let collectionName = "";
      if (userType === "Student") collectionName = "students";
      else if (userType === "FamilyMember") collectionName = "familyMembers";
      else if (userType === "Doctor") collectionName = "doctors";

      if (collectionName) {
        // Add data to the Firestore collection
        await addDoc(collection(db, collectionName), formData);
        alert("Data submitted successfully!");
        setFormData({}); // Clear form
        setUserType(""); // Reset user type

        // Redirect based on user type
        if (userType === "Student") {
          navigate("/SPlayground"); // Redirect to SPlayground.jsx
        } else if (userType === "FamilyMember") {
          navigate("/PGround"); // Redirect to PGround.jsx
        } else if (userType === "Doctor") {
          navigate("/Dashboard"); // Redirect to PGround.jsx
        }
      } else {
        alert("Please select a valid user type.");
      }
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to submit data. Please try again.");
    }
  };

  const { userId } = useParams();

  return (
    <>
      <div className="relative h-screen w-screen">
        <img
          className="absolute inset-0 h-full w-screen object-cover z-[-1] opacity-70"
          src="/HomeBG.jpeg"
          alt="Background"
        />
        <div className=" p-4 max-w-md mx-auto border rounded shadow backdrop-blur-sm bg-white/80">
          <h2 className="text-xl font-bold mb-4">Dynamic Form</h2>
          <label className="block mb-2 font-medium">Select User Type:</label>
          <select
            value={userType}
            onChange={handleUserTypeChange}
            className="w-full mb-4 p-2 border rounded"
          >
            <option value="">-- Select --</option>
            <option value="Student">Student</option>
            <option value="FamilyMember">Family Member</option>
            <option value="Doctor">Doctor</option>
          </select>

          {userType && (
            <form onSubmit={handleSubmit}>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                {/* Common Fields */}
                <div>
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="firstName"
                    onChange={handleInputChange}
                    value={formData.firstName || ""}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="lastName"
                    onChange={handleInputChange}
                    value={formData.lastName || ""}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleInputChange}
                    value={formData.email || ""}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    onChange={handleInputChange}
                    value={formData.phone || ""}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                    required
                  />
                </div>

                {/* Dynamic Fields based on User Type */}
                {userType === "Student" && (
                  <>
                    <div>
                      <label
                        htmlFor="course"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Course
                      </label>
                      <input
                        type="text"
                        id="course"
                        name="course"
                        onChange={handleInputChange}
                        value={formData.course || ""}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="institution"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        School/College Name
                      </label>
                      <input
                        type="text"
                        id="institution"
                        name="institution"
                        onChange={handleInputChange}
                        value={formData.institution || ""}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                        required
                      />
                    </div>
                  </>
                )}

                {userType === "FamilyMember" && (
                  <>
                    <div>
                      <label
                        htmlFor="relation"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Relation to Head of Family
                      </label>
                      <input
                        type="text"
                        id="relation"
                        name="relation"
                        onChange={handleInputChange}
                        value={formData.relation || ""}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="familyCount"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Number of Family Members
                      </label>
                      <input
                        type="number"
                        id="familyCount"
                        name="familyCount"
                        onChange={handleInputChange}
                        value={formData.familyCount || ""}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                        required
                      />
                    </div>
                  </>
                )}

                {userType === "Doctor" && (
                  <>
                    <div>
                      <label
                        htmlFor="specialization"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Specialization
                      </label>
                      <input
                        type="text"
                        id="specialization"
                        name="specialization"
                        onChange={handleInputChange}
                        value={formData.specialization || ""}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="experience"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Years of Experience
                      </label>
                      <input
                        type="number"
                        id="experience"
                        name="experience"
                        onChange={handleInputChange}
                        value={formData.experience || ""}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                        required
                      />
                    </div>
                  </>
                )}
              </div>

              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    id="agree"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                    required
                  />
                </div>
                <label
                  htmlFor="agree"
                  className="ms-2 text-sm font-medium text-gray-900"
                >
                  I agree with the{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    terms and conditions
                  </a>
                  .
                </label>
              </div>

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default MainPage;
