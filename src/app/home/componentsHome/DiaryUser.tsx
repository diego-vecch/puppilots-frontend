type InfoDiary = {
  pending?: boolean
  countWalk?: string
  infoWalk?: string
}

export const DiaryUser: React.FC<InfoDiary> = ({ pending }) => {
  return (
    <div className='w-full rounded-xl  h-[400px] px-2 font-lato'>
      <section className='w-full my-3'><h4 className='text-center'>Agenda</h4></section>
      <section
        className='w-full mb-4 rounded-t-xl overflow-hidden'
      >
        <div className='w-full bg-blue-500 bg-opacity-40 px-2 rounded-t-xl border-blue-400 border-t-[1.5px] border-opacity-40 overflow-hidden font-lato'><h4>Paseos por realizar</h4></div>
        <div className='bg-blue-600 bg-opacity-20 px-2 pt-3'>
          <div className='w-full border-2 border-blue-500 border-opacity-30 rounded'>Paseo 1
            <div className=''>nn/nn/nn</div>
          </div>
          <div>Paseo 2</div>
          <div>Paseo 3</div>
        </div>
      </section>
      <section className='w-full mb-4 overflow-hidden'>
        <div className='w-full bg-pup-card2 px-2 rounded-t-xl border-t-pup-purple2 border-t-[1.2px] border-opacity-70  overflow-hidden'><h4>Paseos por confirmar</h4></div>
        <div className='bg-pup-card2 bg-opacity-50 px-2 pt-3'>
          <div>Paseo 1</div>
          <div>Paseo 2</div>
          <div>Paseo 3</div>
        </div>
      </section>
    </div>
  )
}
