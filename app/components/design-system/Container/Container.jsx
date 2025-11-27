import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-[1320px] px-5 xl:px-0 mx-auto'>
    {children}
    </div>
  )
}

export default Container