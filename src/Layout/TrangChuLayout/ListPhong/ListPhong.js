import './ListPhong.scss'
import { ListPhongCPN } from '../../../components/ListPhongCPN'

function ListPhong () {

  return (
    <div className='div_listphong'>
      <div className='div_listphong_tong'>
        <h2>Soca Villa Room</h2>
        <p>Hãy đến với chúng tôi để được tận hưởng kỳ nghỉ tuyệt vời</p>
        <ListPhongCPN />
      </div>
    </div>
  )
}

export default ListPhong
