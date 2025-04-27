import React, { useContext } from 'react'
import Dashboard from '../../../../components/Dashboard'
import { AuthContext } from '../../../../Providers/AuthProvider';

const DashboardStatistics = () => {
      const { user, loading } = useContext(AuthContext);
      console.log(user)
  
  return (
    <>
      <div><Dashboard/></div>
    </>
  )
}

export default DashboardStatistics