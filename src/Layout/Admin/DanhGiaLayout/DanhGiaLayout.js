import { Table, Button, Space, Modal, message } from 'antd'
import { useEffect, useState } from 'react'
import { getApiUrl } from '../../../api'
import { CheckOutlined } from '@ant-design/icons'


import { AddDanhGia } from './AddDanhGia'

function DanhGiaLayout () {
  const [data, setData] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isModalxoa, setisModalxoa] = useState(false)
  const [isModalAdd, setisModalAdd] = useState(false)

  const [deleteId, setDeleteId] = useState(null)

  const fetchdata = async () => {
    try {
      const response = await fetch(`${getApiUrl('backend')}/getdanhgiaadmin`)
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

  const showDeleteModal = id => {
    setDeleteId(id)
    setisModalxoa(true)
  }

  const showDuyetModal = id => {
    setDeleteId(id)

    setIsModalVisible(true)
  }

  const handleduyet = async () => {
    try {
      const response = await fetch(
        `${getApiUrl('backend')}/duyetdanhgia/${deleteId}`,
        {
          method: 'POST'
        }
      )
      if (response.ok) {
        message.success('duyệt đánh giá thành công')
        fetchdata()
      } else {
        message.error('duyệt thất bại')
      }
    } catch (error) {
      console.error(error)
      message.error('Lỗi khi duyệt')
    } finally {
      setIsModalVisible(false)
      setDeleteId(null)
    }
  }

  const handlexoa = async () => {
    try {
      const response = await fetch(
        `${getApiUrl('backend')}/xoadanhgia/${deleteId}`,
        {
          method: 'POST'
        }
      )
      if (response.ok) {
        message.success('xóa đánh giá thành công')
        fetchdata()
      } else {
        message.error('xóa thất bại')
      }
    } catch (error) {
      console.error(error)
      message.error('Lỗi khi xóa')
    } finally {
      setisModalxoa(false)
      setDeleteId(null)
    }
  }

  const handleCancel = () => {
    setIsModalVisible(false)
    setDeleteId(null)
  }

  const handleCancelxoa = () => {
    setisModalxoa(false)
    setDeleteId(null)
  }

  const columns = [
    {
      title: 'Tên',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Nội dung',
      dataIndex: 'content',
      key: 'content'
    },
    {
      title: 'Số sao',
      dataIndex: 'rating',
      key: 'rating',
      render: value => `${value} ⭐`
    },

    {
      title: 'Ngày đánh giá',
      dataIndex: 'date',
      key: 'date'
    },
    {
      title: 'Hành động',
      key: 'actions',
      render: (_, record) => {
        if (record.trangthai) {
          return (
            <Space>
              <span
                style={{
                  color: 'rgb(53 206 82)',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <CheckOutlined
                  style={{ color: 'rgb(53 206 82)', marginRight: 4 }}
                />
                Đã duyệt
              </span>
            </Space>
          )
        }

        return (
          <Space>
            <Button
              type='primary'
              onClick={() => showDuyetModal(record._id)}
            >
              Duyệt
            </Button>
            <Button danger onClick={() => showDeleteModal(record._id)}>
              Xóa
            </Button>
          </Space>
        )
      }
    }
  ]

  return (
    <div className='sanpham-layout'>
      <h2>Danh sách đánh giá</h2>
      <Button type='primary' onClick={() => setisModalAdd(true)}>
        Thêm đánh giá
      </Button>

      <Table columns={columns} dataSource={data} rowKey='_id' />

      <Modal
        title='Xác nhận duyệt'
        open={isModalVisible}
        onOk={handleduyet}
        onCancel={handleCancel}
        okText='Duyệt'
        cancelText='Huỷ'
      >
        <p>Bạn chắc chắn muốn duyệt đánh giá này?</p>
      </Modal>

      <Modal
        title='Xác nhận xóa'
        open={isModalxoa}
        onOk={handlexoa}
        onCancel={handleCancelxoa}
        okText='Xóa'
        cancelText='Huỷ'
      >
        <p>Bạn chắc chắn muốn xóa đánh giá này?</p>
      </Modal>


      <AddDanhGia
        open={isModalAdd}
        onClose={() => setisModalAdd(false)}
        onSuccess={() => fetchdata()}
      />
    </div>
  )
}

export default DanhGiaLayout
