import axios from "axios";
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";

const serverUrl = process.env.REACT_APP_SERVER_URL;

const RequirementForm = () => {
  const [loading, setLoading] = useState(false);
  const [submitText, setSubmitText] = useState("Submit");
  const [formData, setFormData] = useState({
    date: "",
    empName: "",
    empId: "",
    empMobile: "",
    siteName: "",
    dateOfRequirement: "",
    requirementType: "Material", // Default value
    remarks: "",
  });

  const handleChange = (e) => {
    setSubmitText("Submit");
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const url = `${serverUrl}/api/forms/submit-form`;
    const postBody = {
      method: "POST",
      Headers: {
        "content-Type": "application/json",
      },
      
    };

    await axios
      .post(url, formData, postBody)
      .then((res) => {
        if (res) {
          setSubmitText("Submitted");
          console.log("Form Submitted:", formData);
        }
      })
      .catch((err) => {
        console.log(err);
        setSubmitText("Failed!");
      });

      setLoading(false)
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 border rounded shadow-md"
    >
      <h2 className="text-lg font-bold mb-4">Requirement Form</h2>

      {/* Date */}
      <div className="mb-4">
        <label htmlFor="date" className="block text-sm font-medium mb-1">
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      {/* Employee Name */}
      <div className="mb-4">
        <label htmlFor="empName" className="block text-sm font-medium mb-1">
          Employee Name
        </label>
        <input
          type="text"
          id="empName"
          name="empName"
          value={formData.empName}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      {/* Employee ID */}
      <div className="mb-4">
        <label htmlFor="empId" className="block text-sm font-medium mb-1">
          Employee ID
        </label>
        <input
          type="text"
          id="empId"
          name="empId"
          value={formData.empId}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      {/* Employee Mobile */}
      <div className="mb-4">
        <label htmlFor="empMobile" className="block text-sm font-medium mb-1">
          Employee Mobile
        </label>
        <input
          type="tel"
          id="empMobile"
          name="empMobile"
          value={formData.empMobile}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      {/* Site Name */}
      <div className="mb-4">
        <label htmlFor="siteName" className="block text-sm font-medium mb-1">
          Site Name
        </label>
        <input
          type="text"
          id="siteName"
          name="siteName"
          value={formData.siteName}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      {/* Date of Requirement */}
      <div className="mb-4">
        <label
          htmlFor="dateOfRequirement"
          className="block text-sm font-medium mb-1"
        >
          Date Of Requirement
        </label>
        <input
          type="date"
          id="dateOfRequirement"
          name="dateOfRequirement"
          value={formData.dateOfRequirement}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      {/* Requirement Type */}
      <div className="mb-4">
        <label
          htmlFor="requirementType"
          className="block text-sm font-medium mb-1"
        >
          Requirement Type
        </label>
        <select
          id="requirementType"
          name="requirementType"
          value={formData.requirementType}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        >
          <option value="Material">Material</option>
          <option value="Amount">Amount</option>
        </select>
      </div>

      {/* Remarks */}
      <div className="mb-4">
        <label htmlFor="remarks" className="block text-sm font-medium mb-1">
          Remarks
        </label>
        <textarea
          id="remarks"
          name="remarks"
          value={formData.remarks}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          rows="3"
        ></textarea>
      </div>

      <div className="flex items-center justify-center mb-4">
            {loading && (
              <ClipLoader color="#4A90E2" loading={loading} size={50} />
            )}
          </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
      >
        {submitText}
      </button>
    </form>
  );
};

export default RequirementForm;