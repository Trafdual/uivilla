/* eslint-disable react-hooks/exhaustive-deps */
import { Image, Button, Modal, message, Input, Form, Upload } from 'antd'
import { useEffect, useState } from 'react'
import { getApiUrl } from '../../../../api'
import { UploadOutlined } from '@ant-design/icons'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

function EditBlog ({ open, onClose, idblog, onSuccess }) {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const [sanphamData, setSanphamData] = useState(null)
  const [noidung, setnoidung] = useState('')
  const [imageList, setImageList] = useState([])

  useEffect(() => {
    if (open && idblog) {
      fetchSanpham()
    }
  }, [open, idblog])

  const fetchSanpham = async () => {
    try {
      const res = await fetch(
        `${getApiUrl('backend')}/getchitietblogadmin/${idblog}`
      )
      const data = await res.json()
      if (res.ok) {
        setSanphamData(data)
        setnoidung(data.noidung || '')
        form.setFieldsValue({
          tieude_blog: data.tieude_blog
        })
      } else {
        message.error(data.message || 'Lỗi khi tải blog')
      }
    } catch (err) {
      console.error(err)
      message.error('Không thể tải dữ liệu blog')
    }
  }

  const handleSubmit = async values => {
    const formData = new FormData()
    formData.append('tieude_blog', values.tieude_blog)
    formData.append('noidung', noidung)

    if (imageList.length > 0 && imageList[0].originFileObj) {
      formData.append('image', imageList[0].originFileObj)
    }

    try {
      setLoading(true)
      const res = await fetch(`${getApiUrl('backend')}/updateblog/${idblog}`, {
        method: 'POST',
        body: formData
      })

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

  return (
    <Modal
      title='Cập nhật blog'
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
          rules={[{ required: true, message: 'Vui lòng nhập tên blog' }]}
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
          {sanphamData?.img_blog && (
            <Image
              src={`${getApiUrl('backend')}/${sanphamData.img_blog}`}
              width={100}
              style={{ marginTop: 10 }}
            />
          )}
        </Form.Item>

        <Form.Item label='Nội dung'>
          <ReactQuill value={noidung} onChange={setnoidung} theme='snow' />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default EditBlog
