import "./SkillListItem.css";

export default function SkillListItem({ skill, index }) {
    return (
    <li
    className="SkillListItem"
    > {skill.name} <div>LEVEL{skill.level}</div></li>
    );
}