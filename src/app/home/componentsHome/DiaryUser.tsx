type InfoDiary = {

  pending?: boolean
  countWalk?: string
  infoWalk?: string
}

export const DiaryUser: React.FC<InfoDiary> = ({ pending }) => {
  return (
    <div className='w-full rounded-xl border-2 border-purple-300 h-[400px]'>Agenda</div>)
}
