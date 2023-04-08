import React, { useEffect, useState } from "react";
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Button } from 'antd';
import { Link } from 'react-router-dom'

const  CategoryManagementPage = (props) => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   setData(props);
  // }, [props]);

  const removeCategory = (id) => {
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
      title: 'Action',
      key: 'action',
      render: ( record) => (
        <Space size="middle">
          <Button onClick={() => {removeCategory(record.key)}} type="primary" danger>Remove</Button>
    <Button type="primary"><Link to={`/admin/categories/${record.key}/update`}>Update</Link></Button>
        </Space>
      ),
    },
  ];
  
  const data = props.categorys.map((item => {
    return {
      key: item.id,
      name: item.name
    }
  }))
  return <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />;
//   
};

export default CategoryManagementPage;
