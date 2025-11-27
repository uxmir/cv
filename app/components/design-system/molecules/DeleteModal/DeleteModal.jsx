import React from 'react'
import Modal from '../../atoms/Modal/Modal'
import { IconTrash } from '@tabler/icons-react'
import Button from '../../atoms/CvButton/Button'
const DeleteModal = ({closeModal,confirm}) => {
  return (
   <>
       <Modal 
       close={closeModal}>
      <div className='w-[500px] flex flex-col gap-y-6 items-center justify-center capitalize'>
     <IconTrash size={52} className='text-red-600'/>
     <div className='flex flex-col text-center'>
        <span className='text-lg font-medium text-gray-700'>Your Information Data is being deleted</span>
      <span className='text-2xl font-medium  mt-1 text-red-600'>Are You Sure to delete</span>
     </div>
      </div>
      <div className='mt-8 flex items-center justify-center gap-x-2'>
       <Button
       cvButton={true}
       cvButtonBgColor={'bg-red-500'}
       btnEvent={closeModal}
       >
        cancel
       </Button>
       <Button
       cvButton={true}
       btnEvent={confirm}
       cvButtonBgColor={'bg-blue-500'}
       >
      confirm
       </Button>
      </div>
   </Modal>

   </>
  )
}

export default DeleteModal
