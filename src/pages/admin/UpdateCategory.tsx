import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { PlusOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message, Upload, Select  } from 'antd';


const UpdateCategoryPage = (props) => {
    const navigate = useNavigate()
    // const { register, handleSubmit, reset } = useForm()
    const { id } = useParams() // lấy id từ url
    const [category, setCategory] = useState()
    useEffect(() => {
        const currentCategory = props.categorys.find(category => category.id == id) // tìm product có id trùng với id trên url
        setCategory(currentCategory) // reset lại form với giá trị của product
    }, [props])
    useEffect(() => 
    {
      setFields()
    },[category])
    const [form] = Form.useForm();
    const setFields = () => {// hàm này để set lại giá trị cho các input
      form.setFieldsValue({ // gọi hàm setFieldsValue của instance form để set lại giá trị cho các input dựa vào giá trị của biến product
          id: category?.id,
          name: category?.name
          


      })
  }
    // const onHandleSubmit = (data) => {
    //     props.onUpdate(data);
    //     navigate('/admin/products')
    // }
    const onFinish = (values: any) => {
        props.onUpdate(values);
        navigate('/admin/categories')
      };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
    return (
        <div>
            {/* <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                <input type="text" {...register('name')} />
                <br />
                <input type="number" {...register('price')} />
                <br />
                <button type="submit">Update</button>
            </form> */}
              <Form
    name="basic"
    form={form}
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label=""
      name="id"
      style={{display: 'none'}}
      rules={[{ required: true, message: 'Vui lòng không để trống tên' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Name"
      name="name"
      rules={[{ required: true, message: 'Vui lòng không để trống tên' }]}
    >
      <Input />
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
                    <Button type="primary" htmlType="submit">
                        Update Category
                    </Button>
                </Form.Item>
  </Form>
        </div>
    )
}

export default UpdateCategoryPage