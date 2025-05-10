/* eslint-disable react-hooks/exhaustive-deps */
import { Modal, message, Input, Form, Rate } from 'antd'
import { useState } from 'react'
import { getApiUrl } from '../../../../api'

const { TextArea } = Input

function AddDanhGia ({ open, onClose, onSuccess }) {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const [rating, setRating] = useState(0)

const handleSubmit = async values => {
  try {
    setLoading(true)
    const payload = {
      ...values,
      rating
    }

    const res = await fetch(`${getApiUrl('backend')}/postdanhgiaadmin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
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
      title='Thêm đánh giá'
      open={open}
      onCancel={onClose}
      onOk={() => form.submit()}
      confirmLoading={loading}
      okText='Lưu'
      cancelText='Hủy'
      width={800}
    >
      <Form layout='vertical' form={form} onFinish={handleSubmit}>
        <Rate allowHalf onChange={value => setRating(value)} value={rating} />
        <Form.Item
          name='name'
          label='Tên'
          rules={[{ required: true, message: 'Vui lòng nhập tên' }]}
        >
          <Input name='name' />
        </Form.Item>

        <Form.Item
          name='email'
          label='Email'
          rules={[{ required: true, message: 'Vui lòng nhập email' }]}
        >
          <Input name='email' />
        </Form.Item>

        <Form.Item
          name='namesanpham'
          label='Tên phòng'
          rules={[{ required: true, message: 'Vui lòng nhập tên phòng' }]}
        >
          <Input name='namesanpham' />
        </Form.Item>

        <Form.Item
          label='Mô tả'
          name = 'content'
          rules={[{ required: true, message: 'Vui lòng nhập nội dung' }]}
        >
          <TextArea rows={4} />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default AddDanhGia
