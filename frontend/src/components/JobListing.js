import React, { useState } from "react";
import "../styles/JobListing.css";
import { Link } from "react-router-dom"; // Import Link for navigation

const JobListing = () => {
  const [filters, setFilters] = useState(["Frontend", "CSS", "JavaScript"]);

  const removeFilter = (filter) => {
    setFilters(filters.filter((f) => f !== filter));
  };


  const jobList = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Ripotiva",
      salary: "₹50,000",
      location: "Delhi",
      mode: "Office",
      type: "Full time",
      tags: ["Frontend", "CSS", "JavaScript", "HTML"],
    },
    {
      id: 2,
      title: "WordPress Developer",
      company: "Alpha Web",
      salary: "₹25,000",
      location: "Bangalore",
      mode: "Remote",
      type: "Full time",
      tags: ["CSS", "HTML", "WordPress"],
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Human Cloud",
      salary: "₹35,000",
      location: "Mumbai",
      mode: "Office",
      type: "Full time",
      tags: ["Frontend", "CSS", "JavaScript", "HTML"],
    },
    {
      id: 4,
      title: "Backend Developer",
      company: "TechWave",
      salary: "₹60,000",
      location: "Pune",
      mode: "Hybrid",
      type: "Full time",
      tags: ["Node.js", "Express", "MongoDB", "Backend"],
    },
    {
      id: 5,
      title: "UI/UX Designer",
      company: "Pixel Perfect",
      salary: "₹45,000",
      location: "Chennai",
      mode: "Remote",
      type: "Part time",
      tags: ["UI/UX", "Figma", "Adobe XD"],
    },
    {
      id: 6,
      title: "Mobile App Developer",
      company: "Appfinity",
      salary: "₹55,000",
      location: "Hyderabad",
      mode: "Office",
      type: "Full time",
      tags: ["React Native", "Flutter", "Mobile Development"],
    },
    {
      id: 7,
      title: "DevOps Engineer",
      company: "CloudOps",
      salary: "₹75,000",
      location: "Noida",
      mode: "Hybrid",
      type: "Full time",
      tags: ["AWS", "Docker", "CI/CD", "Kubernetes"],
    },
  ];

  return (
    <div className="job-container">
      {/* Header */}
      <header className="job-header">
        <h2>JobMart</h2>
        <div className="auth-buttons">
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/register" className="register-btn">Register</Link>
        </div>
      </header>

      {/* Search Box */}
      <div className="search-box">
        <input type="text" placeholder="Type any job title" />
        <button>Search</button>
      </div>

      {/* Filters */}
      <div className="filter-container">
        {filters.map((filter, index) => (
          <div key={index} className="filter-tag">
            {filter}
            <button onClick={() => removeFilter(filter)}>X</button>
          </div>
        ))}
        <button className="job-button">Apply Filter</button>
      </div>

      {/* Job Listings */}
      <div className="job-list">
        {jobList.map((job) => (
          <div key={job.id} className="job-card">
            <div className="job-info">
              <h3>{job.title}</h3>
              <p>
                <strong>Salary:</strong> {job.salary} | <strong>Location:</strong>{" "}
                {job.location}
              </p>
              <p>
                <strong>Mode:</strong> {job.mode} | <strong>Type:</strong> {job.type}
              </p>
              <div className="job-tags">
                {job.tags.map((tag, idx) => (
                  <span key={idx} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <Link to={`/job/${job.id}`}>
            <button className="job-button">View details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListing;
