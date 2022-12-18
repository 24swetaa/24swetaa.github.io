import React from 'react'
import './achievements.css'

const Achievements = () => {
  return (
    <section id='achievements'>
        <h2>ACHIEVEMENTS ⭐</h2>
        <div className="container achieve__container">
            <div className='achieve_content'>
                <ul>
                    <li>
                        <h4>Selected as a mentee for the Microsoft Engage program by Microsoft India. (2022)</h4>
                        <h6 className='text-light'>-----</h6>
                    </li>
                    <li>
                    <h4>Selected for Uber She++ among 75 female undergraduates all over India. (2022)</h4>
                    <h6 className='text-light'>-----</h6>
                    </li>
                    <li>
                    <h4>Selected as a mentee for the Women Engineers program by Talent Sprint and Google among 50 female undergraduates all over India from 27,643 applicants. (2021)</h4>
                    <h6 className='text-light'>-----</h6>
                    </li>
                    <li>
                    <h4>Secured a rank of 1086 in Google Code Jam I/O for Women. (2022)</h4>
                    <h6 className='text-light'>-----</h6>
                    </li>
                    <li>
                    <h4>Secured a rank of 1664 in Round E of Google Kickstart. (2021)</h4>
                    <h6 className='text-light'>-----</h6>
                    </li>
                    <li>
                    <h4>Second runner-up in art and craft Inter-branch competition conducted by Fine Arts Club of IIT BHU for
Aagman. (2021)</h4>
                    </li>
                </ul>
                
            </div>
        </div>
    </section>
  )
}

export default Achievements