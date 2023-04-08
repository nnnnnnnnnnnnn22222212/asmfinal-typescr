import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message, Upload, Select  } from 'antd';

const AddProductPage = (props) => { // nhận props từ App.tsx 
  const navigate = useNavigate() // khởi tạo navigate để điều hướng
  const { register, handleSubmit } = useForm()
//   const onHandleSubmit = (data) => {
//       props.onAdd(data);
//       navigate('/admin/products')
//   }
  const onFinish = (values: any) => {
    props.onAdd(values);
    navigate('/admin/products')
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
      <div>
          {/* <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
              <input type="text" placeholder='Product Name' {...register('name')} />
              <br />
              <input type="number" {...register('price')} />
              <br />
              <button type="submit">Add New Product</button>
          </form> */}
          <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Name"
      name="name"
      rules={[{ required: true, message: 'Vui lòng không để trống tên' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Price"
      name="price"
      rules={[{ required: true, message: 'Vui lòng không để trống giá' }]}
    >
      <Input />
    </Form.Item>



    <Form.Item
      label="Description"
      name="desc"
      rules={[{ required: true, message: 'Vui lòng không để trống giá' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item label="Category" name="category" rules={[{ required: true, message: 'Vui lòng không để trống danh mục' }]} >
          <Select>
            <Select.Option value="Danh mục 1">Danh mục 1</Select.Option>
            <Select.Option value="Danh mục 2">Danh mục 2</Select.Option>
            <Select.Option value="Danh mục 3">Danh mục 3</Select.Option>
          </Select>
        </Form.Item>
        
        <Form.Item
      label="Image"
      name="image"
    >
       <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="Thêm mới">
        Thêm mới
      </Button>
    </Form.Item>
  </Form>
      </div>
  )
}

export default AddProductPage