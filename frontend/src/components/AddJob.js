import React, { useState } from "react";
import "../styles/AddJob.css"; 

const AddJob = () => {
  const [jobData, setJobData] = useState({
    companyName: "",
    logoUrl: "",
    jobPosition: "",
    salary: "",
    jobType: "",
    remoteOffice: "",
    location: "",
    description: "",
    aboutCompany: "",
    skillsRequired: [],
    additionalInfo: "",
  });

  const [skillInput, setSkillInput] = useState("");
  
  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const addSkill = () => {
    if (skillInput.trim() && !jobData.skillsRequired.includes(skillInput)) {
      setJobData({
        ...jobData,
        skillsRequired: [...jobData.skillsRequired, skillInput],
      });
      setSkillInput("");
    }
  };

  const removeSkill = (skill) => {
    setJobData({
      ...jobData,
      skillsRequired: jobData.skillsRequired.filter((s) => s !== skill),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job Data:", jobData);
    // Submit logic goes here
  };

  return (
    <div className="add-job-container">
      <div className="add-job-form">
        <h2>Add job description</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="companyName" placeholder="Enter your company name" onChange={handleChange} />
          <input type="text" name="logoUrl" placeholder="Enter the logo URL" onChange={handleChange} />
          <input type="text" name="jobPosition" placeholder="Enter job position" onChange={handleChange} />
          <input type="text" name="salary" placeholder="Enter Amount in rupees" onChange={handleChange} />

          <select name="jobType" onChange={handleChange}>
            <option value="">Select Job Type</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Internship">Internship</option>
          </select>

          <select name="remoteOffice" onChange={handleChange}>
            <option value="">Select Work Mode</option>
            <option value="Remote">Remote</option>
            <option value="Office">Office</option>
          </select>

          <input type="text" name="location" placeholder="Enter Location" onChange={handleChange} />
          <textarea name="description" placeholder="Type the job description" onChange={handleChange} />
          <textarea name="aboutCompany" placeholder="Type about your company" onChange={handleChange} />

          <div className="skills-container">
            <input type="text" value={skillInput} placeholder="Enter the must-have skills" onChange={(e) => setSkillInput(e.target.value)} />
            <button type="button" onClick={addSkill}>+</button>
          </div>

          <div className="skills-list">
            {jobData.skillsRequired.map((skill, index) => (
              <div key={index} className="skill-tag">
                {skill} <span onClick={() => removeSkill(skill)}>X</span>
              </div>
            ))}
          </div>

          <textarea name="additionalInfo" placeholder="Enter the additional information" onChange={handleChange} />

          <div className="form-buttons">
            <button type="button" className="cancel-btn">Cancel</button>
            <button type="submit" className="submit-btn">+ Add Job</button>
          </div>
        </form>
      </div>

      <div className="add-job-image">
        <h3>Recruiter add job details here</h3>
      </div>
    </div>
  );
};

export default AddJob;
