import React, { useContext } from 'react'
import { PitchDashboardContext } from '../../../../context/PitchDashboard.context'
import "./Pitch.css"

const Tract = () => {
    const { tractStartup } = useContext(PitchDashboardContext)
    return (tractStartup &&
        <div className='tract-body-css'>
            <p className='pt-3'>This is how others will learn about the project, so make it good!</p>
            <textarea className='p-1' type="text" />
            <div>
                <button className='startup-basic-general-save-button text-center py-1 my-3'>Save</button>
            </div>
        </div>
    )
}

export default Tract