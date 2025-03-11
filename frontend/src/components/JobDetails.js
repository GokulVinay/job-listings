import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import '../styles/JobDetails.css'

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const jobs = [
      {
        id: "2",
        title: "Software Development Engineer",
        location: "Bangalore, India",
        stipend: "₹50000/month",
        duration: "6 Months",
        company: "HCLtech",
        aboutCompany: "We provide technology-based services to help businesses...",
        jobDescription:
          "We are looking for a Software Engineer...",
        skills: ["MySQL", "Agile Methods", "JavaScript","React.js","Python","C/C++","DSA","CI/CD Pipelines"],
        additionalInfo:
          "This is a performance-based internship with a performance-linked incentive of ₹2500 per design.",
      },
      {
        id: "1",
        title: "Full-Stack Developer",
        location: "Remote",
        stipend: "₹20000/month",
        duration: "3 Months",
        company: "TCS",
        aboutCompany: "A leading software company...",
        jobDescription: "Looking for an experienced React developer...",
        skills: ["React", "JavaScript", "CSS","Node.Js","Java"],
        additionalInfo: "Work from home.",
      },
    ];

    // Find the job by ID
    const selectedJob = jobs.find((job) => job.id === id);
    setJob(selectedJob);
  }, [id]);

  if (!job) {
    return <p>Loading job details...</p>;
  }

  return (
    <>
    <header className="job-header">
        <h2>Jobstation</h2>
        <div className="auth-buttons">
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/register" className="register-btn">Register</Link>
        </div>
      </header>
    <div className="job-details">
      <h2>{job.title}</h2>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Stipend:</strong> {job.stipend}</p>
      <p><strong>Duration:</strong> {job.duration}</p>
      <h3>About Company</h3>
      <p>{job.aboutCompany}</p>
      <h3>Job Description</h3>
      <p>{job.jobDescription}</p>
      <h3>Skills Required</h3>
      <ul>
        {job.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <h3>Additional Information</h3>
      <p>{job.additionalInfo}</p>
    </div>
    </>
  );
};

export default JobDetails;
