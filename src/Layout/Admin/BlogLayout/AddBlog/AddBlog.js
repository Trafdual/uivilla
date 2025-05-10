/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Modal, message, Input, Form, Upload } from 'antd'
import { useState } from 'react'
import { getApiUrl } from '../../../../api'
import { UploadOutlined } from '@ant-design/icons'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

function AddBlog ({ open, onClose, onSuccess }) {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const [noidung, setnoidung] = useState('')
  const [imageList, setImageList] = useState([])

  const handleSubmit = async values => {
    const formData = new FormData()
    formData.append('tieude_blog', values.tieude_blog)
    formData.append('noidung', noidung)

    if (imageList.length > 0 && imageList[0].originFileObj) {
      formData.append('image', imageList[0].originFileObj)
    }

    try {
      setLoading(true)
      const res = await fetch(`${getApiUrl('backend')}/postblog`, {
        method: 'POST',
        body: formData
      })

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
      title='Thêm blog'
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
          name='tieude_blog'
          label='Tên blog'
          rules={[{ required: true, message: 'Vui lòng nhập tiêu đề blog' }]}
        >
          <Input name='tieude_blog' />
        </Form.Item>
        <Form.Item name='image' label='Ảnh blog'>
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

        <Form.Item label='Mô tả'>
          <ReactQuill value={noidung} onChange={setnoidung} theme='snow' />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default AddBlog
