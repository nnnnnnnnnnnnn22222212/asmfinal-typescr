import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { PlusOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message, Upload, Select  } from 'antd';


const UpdateProductPage = (props) => {
    const navigate = useNavigate()
    // const { register, handleSubmit, reset } = useForm()
    const { id } = useParams() // lấy id từ url
    const [product, setProduct] = useState()
    useEffect(() => {
        const currentProduct = props.products.find(product => product.id == id) // tìm product có id trùng với id trên url
        setProduct(currentProduct) // reset lại form với giá trị của product
    }, [props])
    useEffect(() => 
    {
      setFields()
    },[product])
    const [form] = Form.useForm();
    const setFields = () => {// hàm này để set lại giá trị cho các input
      form.setFieldsValue({ // gọi hàm setFieldsValue của instance form để set lại giá trị cho các input dựa vào giá trị của biến product
          id: product?.id,
          name: product?.name,
          price: product?.price,
          desc: product?.desc,
          category: product?.category


      })
  }
    // const onHandleSubmit = (data) => {
    //     props.onUpdate(data);
    //     navigate('/admin/products')
    // }
    const onFinish = (values: any) => {
        props.onUpdate(values);
        navigate('/admin/products')
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
                    <Button type="primary" htmlType="submit">
                        Update Product
                    </Button>
                </Form.Item>
  </Form>
        </div>
    )
}

export default UpdateProductPage