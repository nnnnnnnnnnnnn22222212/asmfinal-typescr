import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Card, Col, Row } from 'antd';
import axios from 'axios';

const ProductPage = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleSearch = () => {
    axios.get('/products', { params: { q: searchTerm } })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }
    interface check{
        id: number,
        name: string
       }

       const [data,setData] = useState([])
       
       useEffect(()=>{setData(props)},[props])
    

    

  return (
    <div>
        <div>Product Page</div>
<div> 
<Row gutter={16}>
   
    
  </Row>
    {props.products.map((item:check) => 
{
    return (
      
        <div key={item.id}>
         <input type="text" value={searchTerm} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>
        <Link to={`/products/${item.id}`}>
             <Col span={8}>
      <Card title={item.name} bordered={false}>
        <img src={item.image.file.thumbUrl} alt="" />
      <h2>Price: {item.price}</h2>
        <h2>Desc: {item.desc}</h2>
        <h2>Category: {item.category}</h2>
      </Card>
    </Col>
        </Link>
        </div>
        
    )
})}  </div>
    </div>
  )
}

export default ProductPage