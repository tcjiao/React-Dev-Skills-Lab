import SkillListItem from "./SkillListItem";
import "./SkillList.css";

export default function SkillList({ skills }) {
  const SkillListItems = skills.map((s, idx) => (
    <SkillListItem skill={s} index= {idx} key={idx} />
  ));
  return <ul className="SkillList">{ SkillListItems }</ul>;
}
