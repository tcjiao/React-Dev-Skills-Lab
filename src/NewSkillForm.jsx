import { useState } from "react";
import "./NewSkillForm.css";


const NewSkillForm = ({ addSkill }) => {
    const initialState = {
      name: '',
      level: 3
    };
  
    const [formData, setFormData] = useState(initialState);
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      addSkill(formData);
      setFormData(initialState);
    };
  
    return (
      <form className= "NewSkillForm" onSubmit={handleSubmit}>
        <label>
          Skill Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Skill Level:
          <select
            name="level"
            value={formData.level}
            onChange={handleChange}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </label>
        <button type="submit">Add Skill</button>
      </form>
    );
  };
  
  export default NewSkillForm;