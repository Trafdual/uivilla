import { Table } from 'antd'
import { useEffect, useState } from 'react'
import { getApiUrl } from '../../../api'

function DatPhongLayout () {
  const [data, setData] = useState([])

  const fetchdata = async () => {
    try {
      const response = await fetch(`${getApiUrl('backend')}/getdatphong`)
      const data = await response.json()
      if (response.ok) {
        setData(data)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchdata()
  }, [])

  const columns = [
    {
      title: 'ID',
      dataIndex: '_id',
      key: '_id'
    },
    {
      title: 'Ngày đặt',
      dataIndex: 'ngaydat',
      key: 'ngaydat'
    },
    {
      title: 'Ngày nhận phòng',
      dataIndex: 'ngaynhanphong',
      key: 'ngaynhanphong'
    },
    {
      title: 'Ngày trả phòng',
      dataIndex: 'ngaytraphong',
      key: 'ngaytraphong'
    },
    {
      title: 'Thực đơn',
      dataIndex: 'thucdon',
      key: 'thucdon'
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phone',
      key: 'phone'
    }
  ]

  return (
    <div className='sanpham-layout'>
      <h2>Danh sách đơn đặt phòng</h2>

      <Table columns={columns} dataSource={data} rowKey='_id' />
    </div>
  )
}

export default DatPhongLayout
