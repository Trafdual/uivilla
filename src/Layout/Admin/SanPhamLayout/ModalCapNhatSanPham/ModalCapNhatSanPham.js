/* eslint-disable react-hooks/exhaustive-deps */
import { Image, Button, Modal, message, Input, Form, Upload } from 'antd'
import { useEffect, useState } from 'react'
import { getApiUrl } from '../../../../api'
import { UploadOutlined } from '@ant-design/icons'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

function ModalCapNhatSanPham ({ open, onClose, idsanpham, onSuccess }) {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const [sanphamData, setSanphamData] = useState(null)
  const [content, setContent] = useState('')
  const [fileList, setFileList] = useState([])
  const [imageList, setImageList] = useState([])

  useEffect(() => {
    if (open && idsanpham) {
      fetchSanpham()
    }
  }, [open, idsanpham])

  const fetchSanpham = async () => {
    try {
      const res = await fetch(
        `${getApiUrl('backend')}/getttsanpham/${idsanpham}`
      )
      const data = await res.json()
      if (res.ok) {
        setSanphamData(data)
        setContent(data.chitiet?.content || '')
        form.setFieldsValue({
          namesanpham: data.namesanpham
        })
      } else {
        message.error(data.message || 'Lỗi khi tải sản phẩm')
      }
    } catch (err) {
      console.error(err)
      message.error('Không thể tải dữ liệu sản phẩm')
    }
  }

  const handleSubmit = async values => {
    const formData = new FormData()
    formData.append('namesanpham', values.namesanpham)
    formData.append('content', content)

    if (imageList.length > 0 && imageList[0].originFileObj) {
        formData.append('image', imageList[0].originFileObj)
      }

    if (fileList.length > 0) {
      fileList.forEach(file => {
        if (file.originFileObj) {
          formData.append('images', file.originFileObj)
        }
      })
    }

    try {
      setLoading(true)
      const res = await fetch(
        `${getApiUrl('backend')}/updatesanpham/${idsanpham}`,
        {
          method: 'POST',
          body: formData
        }
      )

      const data = await res.json()
      if (res.ok) {
        message.success('Cập nhật thành công')
        onSuccess?.()
        onClose()
      } else {
        message.error(data.message || 'Cập nhật thất bại')
      }
    } catch (err) {
      console.error(err)
      message.error('Lỗi khi cập nhật')
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteImage = async imgToDelete => {
    try {
      const idchitiet = sanphamData?.chitiet?._id
      if (!idchitiet)
        return message.error('Không tìm thấy ID chi tiết sản phẩm')

      const res = await fetch(
        `${getApiUrl('backend')}/postxoaanh/${idchitiet}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ imagesToRemove: [imgToDelete] })
        }
      )

      const data = await res.json()
      if (res.ok) {
        message.success('Đã xóa ảnh')
        setSanphamData(prev => ({
          ...prev,
          chitiet: {
            ...prev.chitiet,
            img: prev.chitiet.img.filter(img => img !== imgToDelete)
          }
        }))
      } else {
        message.error(data.message || 'Xóa ảnh thất bại')
      }
    } catch (err) {
      console.error(err)
      message.error('Lỗi khi xóa ảnh')
    }
  }

  return (
    <Modal
      title='Cập nhật sản phẩm'
      open={open}
      onCancel={onClose}
      onOk={() => form.submit()}
      confirmLoading={loading}
      okText='Lưu'
      cancelText='Hủy'
      width={800}
    >
      <Form layout='vertical' form={form} onFinish={handleSubmit}>
        <Form.Item
          name='namesanpham'
          label='Tên sản phẩm'
          rules={[{ required: true, message: 'Vui lòng nhập tên sản phẩm' }]}
        >
          <Input name='namesanpham' />
        </Form.Item>

        <Form.Item label='Mô tả'>
          <ReactQuill value={content} onChange={setContent} theme='snow' />
        </Form.Item>

        <Form.Item name='image' label='Ảnh sản phẩm'>
          <Upload
            listType='picture'
            maxCount={1}
            beforeUpload={() => false}
            fileList={imageList}
            onChange={({ fileList }) => setImageList(fileList)}
          >
            <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
          </Upload>
          {sanphamData?.img_sanpham && (
            <Image
              src={`${getApiUrl('backend')}/${sanphamData.img_sanpham}`}
              width={100}
              style={{ marginTop: 10 }}
            />
          )}
        </Form.Item>

        <Form.Item name='images' label='Ảnh chi tiết'>
          <Upload
            listType='picture'
            multiple
            beforeUpload={file => {
              console.log('beforeUpload gọi:', file)
              return false // chặn upload auto
            }}
            fileList={fileList}
            onChange={({ fileList }) => setFileList(fileList)}
          >
            <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
          </Upload>
          {sanphamData?.chitiet?.img?.length > 0 && (
            <div
              style={{
                marginTop: 10,
                display: 'flex',
                flexWrap: 'wrap',
                gap: 12
              }}
            >
              {sanphamData.chitiet.img.map((img, index) => (
                <div
                  key={index}
                  style={{ position: 'relative', display: 'inline-block' }}
                >
                  <Image
                    src={`${getApiUrl('backend')}/${img}`}
                    width={80}
                    style={{ border: '1px solid #ccc', borderRadius: 4 }}
                  />
                  <Button
                    danger
                    size='small'
                    style={{
                      position: 'absolute',
                      top: -6,
                      right: -6,
                      padding: '0 6px',
                      borderRadius: '50%',
                      fontSize: 10
                    }}
                    onClick={() => handleDeleteImage(img)}
                  >
                    ×
                  </Button>
                </div>
              ))}
            </div>
          )}
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default ModalCapNhatSanPham
