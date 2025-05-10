/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Modal, message, Input, Form, Upload } from 'antd'
import { useState } from 'react'
import { getApiUrl } from '../../../../api'
import { UploadOutlined } from '@ant-design/icons'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

function ModalAddSanPham ({ open, onClose, onSuccess }) {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState('')
  const [fileList, setFileList] = useState([])
  const [imageList, setImageList] = useState([])


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
        `${getApiUrl('backend')}/postsanpham`,
        {
          method: 'POST',
          body: formData
        }
      )

      const data = await res.json()
      if (res.ok) {
        message.success('Thêm thành công')
        onSuccess?.()
        onClose()
      } else {
        message.error(data.message || 'Thêm thất bại')
      }
    } catch (err) {
      console.error(err)
      message.error('Lỗi khi Thêm')
    } finally {
      setLoading(false)
    }
  }


  return (
    <Modal
      title='Thêm sản phẩm'
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
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default ModalAddSanPham
