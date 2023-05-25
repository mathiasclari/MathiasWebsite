import '../App.css';

function generateSkillLevels(): string[] {
    const levels = ['lvl1', 'lvl2', 'lvl3', 'lvl4'];
    const skillLevels = [];
  
    for (let i = 0; i < 16; i++) {
      const randomLevel = Math.floor(Math.random() * 4) + 1;
      skillLevels.push(levels[randomLevel - 1]);
    }
  
    return skillLevels;
  }

export default function AboutInfo() {
  const skillLevels = generateSkillLevels();

  return (
    <div className='about-component'>
      <div className='about-card'>
        <div className='about-card-content'>
          <h2>About Me</h2>
          <p>Hey there! I'm Mathias Clari Drenik, a 19-year-old from Slovenia. I'm passionate about coding, photography, content creation, and Minecraft server development. Join me as I showcase my creative and innovative endeavors.</p>
          <p>Coding Enthusiast: I thrive on challenges, constantly expanding my coding skills to solve problems and create innovative solutions.</p>
          <p>Photography & Storytelling: Through my lens, I capture moments that tell unique stories, preserving memories and evoking emotions.</p>
          <p>Creative Content: I craft engaging narratives through captivating articles and visually stunning videos, leaving a lasting impression.</p>
          <p>Minecraft Server Development: I manage and develop immersive Minecraft servers, creating enjoyable experiences for a vibrant gaming community.</p>
          <h4>Join me on this exciting journey of creativity and innovation. Let's make our mark together.</h4>
        </div>
        <div className='skill-display'>
          <h2>Skills</h2>
          <ul>
            <li className={skillLevels[0]}>Java</li>
            <li className={skillLevels[1]}>JavaScript</li>
            <li className={skillLevels[2]}>TypeScript</li>
            <li className={skillLevels[3]}>Node.js</li>
            <li className={skillLevels[4]}>ReactJS</li>
            <li className={skillLevels[5]}>Next.js</li>
            <li className={skillLevels[6]}>Vite.js</li>
            <li className={skillLevels[7]}>SQL</li>
            <li className={skillLevels[8]}>NestJS</li>
            <li className={skillLevels[9]}>CSS</li>
            <li className={skillLevels[10]}>HTML</li>
            <li className={skillLevels[11]}>PHP</li>
            <li className={skillLevels[12]}>C#</li>
            <li className={skillLevels[13]}>Python</li>
            <li className={skillLevels[14]}>C++</li>
            <li className={skillLevels[15]}>Git</li>
          </ul>
        </div>
      </div>
    </div>
  );
}