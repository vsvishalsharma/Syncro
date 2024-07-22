import React from 'react'
import Sidebar from '@/components/global/sidebar'
import InfoBar from '@/components/global/infobar'

type Props = { children: React.ReactNode }

const Layout = (props: Props) => {
  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar />
      <div className="w-full overflow-auto">
        <InfoBar />
        {props.children}
      </div>
    </div>
  )
}

export default Layout
