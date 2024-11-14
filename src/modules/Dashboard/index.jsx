import avatar from '../../assets/avatar-svgrepo-com.svg'

const Dashboard = () => {

  const contacts=[
    {
      name: 'Alice',
      status: 'active',
      img: avatar
    },
    {
      name: 'Bob',
      status: 'inactive',
      img: avatar
    },
    {
      name: 'Charlie',
      status: 'active',
      img: avatar
    },
    {
      name: 'Diana',
      status: 'inactive',
      img: avatar
    },
    {
      name: 'Eve',
      status: 'active',
      img: avatar
    },
    {
      name: 'Frank',
      status: 'inactive',
      img: avatar
    }
  ]
  

  return (
    <div className="w-screen flex">
      <div className="w-[25%] h-screen bg-secondary">
        <div className='flex justify-center items-center my-6'>
          <div className='border border-primary rounded-full'><img src={avatar} width={75} height={75} alt="profile pic" /></div>
          <div className='ml-4'>
            <h3 className='text-2xl'>Chat Application</h3>
            <p className='text-lg font-light'>My Profile</p>
          </div>
        </div>
        <hr />
        <div className='mx-5 mt-5'>
          <div className='text-blue-600 mb-3 text-center'>Messages</div>
          <div>
            {
              contacts.map(contact => (
                <div key={contact.name} className='flex items-center cursor-pointer p-3 border-b border-b-gray-300 rounded-lg hover:bg-gray-200'>
                  <div className={`border border-primary rounded-full ${contact.status === 'active'? 'bg-primary' : 'bg-light'}`}><img src={contact.img} width={50} height={50} alt="profile pic" /></div>
                  <div className='ml-4'>
                    <h3 className='text-xl'>{contact.name}</h3>
                    <p className='text-sm font-light'>{contact.status}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className="w-[50%] h-screen"></div>
      <div className="w-[25%] h-screen bg-secondary"></div>
    </div>
  )
}

export default Dashboard
