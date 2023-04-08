import React, { useEffect, useState } from "react";

import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Button } from 'antd';
import { Link } from 'react-router-dom'

const  ProductManagementPage = (props) => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   setData(props);
  // }, [props]);

  const removeProduct = (id) => {
    props.onRemove(id);
  };

  interface DataType {
    key: string;
    price: string;
  
  }
  
  const columns: ColumnsType<DataType> = [
    
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Desc',
      dataIndex: 'desc',
      key: 'desc',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (image) => <img src={image} alt="" />,
    },
    
    {
      title: 'Action',
      key: 'action',
      render: ( record) => (
        <Space size="middle">
          <Button onClick={() => {removeProduct(record.key)}} type="primary" danger>Remove</Button>
    <Button type="primary"><Link to={`/admin/products/${record.key}/update`}>Update</Link></Button>
        </Space>
      ),
    },
  ];
  
  const data = props.products.map((item => {
    
    return {
      
      key: item.id,
      name: item.name,
      price: item.price,
      desc: item.desc,
      category:item.category,
      image: item.image.file.thumbUrl
    }
  }))
  return <div >
    <button ><Link to={'/admin/products/add'}>Thêm</Link></button>
    <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />;</div>

};

export default ProductManagementPage;
