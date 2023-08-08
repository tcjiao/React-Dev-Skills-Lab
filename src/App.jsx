import './App.css'
import SkillList from './SkillList'
import SkillListItem from './SkillListItem';

const skills = ["HTML", "CSS", "Javascript", "Python"];

export default function App() {

  return (
    <div className='App'>
      <h1>React Dev Skills</h1>
      <SkillList skills={skills} />
    </div>
  )
}