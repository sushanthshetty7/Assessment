// SOPForm.js
import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    age: "",
    educationLevel: "",
    institute: "",
    study: "",
    workExperience: "",
    admittedTo: "",
    programOfStudy: "",
    applyingFrom: "",
    futureGoals: "",
    listeningScore: "",
    readingScore: "",
    speakingScore: "",
    writingScore: "",
    paidTuitionFee: false,
    TuitionFee: "",
    gic: false,
    paidGIC: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/submit-sop", formData);
      console.log(response.data);
      alert(`Thank you for your submission!`);
    } catch (error) {
      console.error("Error submitting SOP:", error);
    }
    
  };

  return (
    <div className="App">
      <h1>Customized SOP Generator</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email *
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        
        <label>
          Full Name *
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </label>

  
        <label>
          Age *
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </label>

   
        <div className="form-group">
          <label>Education Level *</label>
          <select
            name="educationLevel"
            value={formData.educationLevel}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="High School">High School</option>
            <option value="Bachelor's Degree">Bachelor's Degree</option>
           
          </select>
        </div>
        <label>
          Institute where you completed your highest level of education *
          <input
            type="text"
            name="institute"
            value={formData.institute}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          What did you study *
          <input
            type="text"
            name="study"
            value={formData.study}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <p>Do you have any relevant work experience? *</p>
          <p>
            Write None if no work experience. Provide the following details if
            yes:
          </p>
          <ol>
            <li>Job Title </li>
            <li>Company Name </li>
            <li>Job duties</li>
          </ol>
          <p>
            Sample Answer: I worked as a Sales Manager at Effizient Immigration
            Inc from Jan 2022 till Feb 2023. In this role, I managed sales
            operations, reaching out to leads, lead the outreach program,
            ensured meeting monthly targets.
          </p>
          <input
            type="text"
            name="workExperience"
            value={formData.workExperience}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          What institute did you get admitted to in Canada?*
          <input
            type="text"
            name="admittedTo"
            value={formData.admittedTo}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          What is your program of study in Canada?*
          <input
            type="text"
            name="programOfStudy"
            value={formData.programOfStudy}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Which country are you applying from?*
          <input
            type="text"
            name="applyingFrom"
            value={formData.applyingFrom}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          What are your future goals?*
          <input
            type="text"
            name="futureGoals"
            value={formData.futureGoals}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          English Scores - Listening*
          <input
            type="text"
            name="listeningScore"
            value={formData.listeningScore}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          English Scores - Reading*
          <input
            type="text"
            name="readingScore"
            value={formData.readingScore}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          English Scores - Speaking*
          <input
            type="text"
            name="speakingScore"
            value={formData.speakingScore}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          English Scores - Writing*
          <input
            type="text"
            name="writingScore"
            value={formData.writingScore}
            onChange={handleChange}
            required
          />
        </label>
        <div className="form-group">
          <label htmlFor="paidTuitionFee">
            Did you pay your first year tuition? *
          </label>
          <div className="radio-options">
            <label>
              <input type="radio" name="paidTuitionFee" value={formData.paidTuitionFee} />
              Yes
            </label>
            <label>
              <input type="radio" name="paidTuitionFee" value={formData.paidTuitionFee} />
              No
            </label>
          </div>
        </div>
        <label>
          How much tuition fee did you pay?*
          <input
            type="text"
            name="TuitionFee"
            value={formData.TuitionFee}
            onChange={handleChange}
            required
          />
        </label>
        <div className="form-group">
          <label htmlFor="gic">
          Did you do a GIC?*
          </label>
          <div className="radio-options">
            <label>
              <input type="radio" name="gic" value={formData.gic} />
              Yes
            </label>
            <label>
              <input type="radio" name="gic" value={formData.gic} />
              No
            </label>
          </div>
        </div>

        <label>
          How much tuition fee did you pay towards GIC?*
          <input
            type="text"
            name="paidGIC"
            value={formData.paidGIC}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" onClick={()=>handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
