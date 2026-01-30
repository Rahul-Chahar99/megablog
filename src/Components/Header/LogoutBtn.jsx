import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../Store/authSlice'
function LogoutBtn() {

    const dispatch = useDispatch()

    const logoutHandler = () =>{
        authService.logout()
        .then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button
    className="px-4 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn
