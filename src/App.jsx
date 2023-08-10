import './App.css'
import NewSkillForm from './NewSkillForm';
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
  
  function addSkill(skill) {
    setSkills([...skills, skill]);
  }

  const [showSkills, setShowSkills] = useState(true);


  return (
    <div className='App'>
      <h1>React Dev Skills</h1>
      <button className="ShowSkills" onClick={() => setShowSkills(!showSkills)}> {showSkills ? "HIDE" : "SHOW"}</button>
      {showSkills && <SkillList skills={skills} />}
      <hr />
      <NewSkillForm addSkill={addSkill} />
    </div>
  )
}