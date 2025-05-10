import './SanPhamLayout.scss'
import { Table, Image, Button, Space, Modal, message } from 'antd'
import { useEffect, useState } from 'react'
import { getApiUrl } from '../../../api'
import { ModalCapNhatSanPham } from './ModalCapNhatSanPham'
import { ModalAddSanPham } from './ModalAddSanPham'

function SanPhamLayout () {
  const [data, setData] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isModalCapNhat, setisModalCapNhat] = useState(false)
  const [isModalAdd, setisModalAdd] = useState(false)

  const [deleteId, setDeleteId] = useState(null)

  const fetchdata = async () => {
    try {
      const response = await fetch(`${getApiUrl('backend')}/sanpham`)
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
    setIsModalVisible(true)
  }

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `${getApiUrl('backend')}/deletesanpham/${deleteId}`,
        {
          method: 'POST'
        }
      )
      if (response.ok) {
        message.success('Xoá sản phẩm thành công')
        fetchdata()
      } else {
        message.error('Xoá thất bại')
      }
    } catch (error) {
      console.error(error)
      message.error('Lỗi khi xoá')
    } finally {
      setIsModalVisible(false)
      setDeleteId(null)
    }
  }

  const handleCancel = () => {
    setIsModalVisible(false)
    setDeleteId(null)
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: '_id',
      key: '_id'
    },
    {
      title: 'Ảnh',
      dataIndex: 'img',
      key: 'img',
      render: img => <Image width={80} src={`${getApiUrl('backend')}/${img}`} />
    },
    {
      title: 'Tên sản phẩm',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Tên không dấu',
      dataIndex: 'namekhongdau',
      key: 'namekhongdau'
    },
    {
      title: 'Hành động',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button
            type='primary'
            onClick={() => {
              setDeleteId(record._id)
              setisModalCapNhat(true)
            }}
          >
            Sửa
          </Button>
          <Button danger onClick={() => showDeleteModal(record._id)}>
            Xoá
          </Button>
        </Space>
      )
    }
  ]

  return (
    <div className='sanpham-layout'>
      <h2>Danh sách phòng</h2>
      <Button type='primary' onClick={() => setisModalAdd(true)}>Thêm sản phẩm</Button>

      <Table columns={columns} dataSource={data} rowKey='_id' />

      <Modal
        title='Xác nhận xoá'
        open={isModalVisible}
        onOk={handleDelete}
        onCancel={handleCancel}
        okText='Xoá'
        cancelText='Huỷ'
      >
        <p>Bạn chắc chắn muốn xoá sản phẩm này?</p>
      </Modal>
      <ModalCapNhatSanPham
        open={isModalCapNhat}
        onClose={() => setisModalCapNhat(false)}
        idsanpham={deleteId}
        onSuccess={() => fetchdata()} // refresh lại bảng
      />
      <ModalAddSanPham
        open={isModalAdd}
        onClose={() => setisModalAdd(false)}
        onSuccess={() => fetchdata()}
      />
    </div>
  )
}

export default SanPhamLayout
