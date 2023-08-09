import './App.css'
import SkillList from './SkillList'
import SkillListItem from './SkillListItem';
import { useState } from 'react';

export default function App() {
  const [skills, setSkills] = useState([
    { name: "HTML", level: 5}, 
    { name: "CSS", level: 3}, 
    { name: "Javascript", level: 4}, 
    { name: "Python", level: 2}
  ]);
  const [showSkills, setShowSkills] = useState(true);

  function handleAddSkill() {
    const newSkills = [...skills, 'xxxx';]
    setSkills(newSkills);
  }

  return (
    <div className='App'>
      <h1>React Dev Skills</h1>
      {showSkills && <SkillList skills={skills} />}
      <button onClick={handleAddSkill}>Add Skills</button>
    </div>
  )
}