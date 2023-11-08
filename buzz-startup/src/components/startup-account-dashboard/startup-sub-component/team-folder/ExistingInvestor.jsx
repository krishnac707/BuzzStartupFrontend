import React, { useContext, useState } from 'react'
import { TeamDashboardContext } from '../../../../context/TeamDashboard.context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import api from '../../../apiConfig'
import toast from 'react-hot-toast'

const ExistingInvestor = () => {
  const { existingInvestor } = useContext(TeamDashboardContext)
  const [isSaveButton, setIsSaveButton] = useState(false);
  const [userData, setUserData] = useState([])

  const addFormButton = () => {
    if (!isSaveButton) {
      setIsSaveButton(true)
    }
    setUserData([...userData, { name: "", linkedinUrl: "" }])
  }

  const handleInput = (e, i) => {
    const { name, value } = e.target
    const onChangeValue = [...userData]
    onChangeValue[i][name] = value
    setUserData(onChangeValue)
  }

  const handleDelete = (i) => {
    const deleteValue = [...userData]
    deleteValue.splice(i, 1)
    setUserData(deleteValue)
  }

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      for (var i = 0; i < userData.length; i++) {
        if (userData[i].name || userData[i].linkedinUrl) {
          const response = await api.post("/startups/add-startup-existing-investor-data", userData)
          if (response.data.success) {
            toast.success(response.data.message)
            return setUserData([])
          }
        }
      }
    }
    catch (err) {
      toast.error(err.response.data.message)
      console.log("err", err);
    }
  }

  return (existingInvestor &&
    <div>
      <form onSubmit={formSubmit}>
        {userData && userData.map((val, i) => {
          return (
            <div className='mt-3 fouder-detail-css p-3'>
              <div className='delete-founder-button-css'>
                <button onClick={handleDelete}><FontAwesomeIcon icon={faXmark} /></button>
              </div>
              <div className='startup-general-body'>
                <div className='startup-general-startup-name-div py-3'>
                  <div className='py-2'>Name :</div>
                  <div>
                    <input className='p-2 startname-input-general' type="text" name="name" value={val.name} onChange={(e) => handleInput(e, i)} />
                  </div>
                </div>
              </div>
              <div className='startup-general-body'>
                <div className='startup-general-startup-name-div py-3'>
                  <div className='py-2'>Linkedin Url :</div>
                  <div>
                    <input className='p-2 startname-input-general' type="text" name="linkedinUrl" value={val.linkedinUrl} onChange={(e) => handleInput(e, i)} />
                  </div>
                </div>
              </div>
            </div>
          )
        }
        )}
        <div className='add-founder-button-css'>
          <button type='button' className='startup-team-add-button text-center py-2 my-3' onClick={addFormButton}>+Add Investor details</button>
        </div>
        {isSaveButton && <button type='submit' className='startup-basic-general-save-button text-center py-1 my-3'>Save</button>}
      </form>
    </div>
  )
}

export default ExistingInvestor
