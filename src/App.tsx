import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import Dashboard from './pages/admin/Dashboard'
import { addProduct, updateProduct, getAllProduct, addCategory, updateCategory, getAllCategory, addUser } from './api/product'
import ProductPage from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'
import ProductManagementPage from './pages/admin/ProductManagementPage'
import AddProductPage from './pages/admin/AddProduct'
import UpdateProductPage from './pages/admin/UpdateProduct'
import WebsiteLayout from './pages/layout/WebsiteLayout'
import AdminLayout from './pages/layout/AdminLayout'
import CategoryManagementPage from './pages/admin/CategoryManagementPage'
import AddCategoryPage from './pages/admin/AddCategory'
import UpdateCategoryPage from './pages/admin/UpdateCategory'
import SigninPage from './pages/SigninPage'
import SignupPage from './pages/SignupPage'

function App() {
  
  const [products, setProducts] = useState([])
  const [categorys, setCategorys] = useState([])
  const [users, setUsers] = useState([])

   useEffect(() => 
   {
    fetch(`http://localhost:3000/products`)
    .then(response => response.json())
    .then(data => setProducts(data))  
   },[])

   useEffect(() => 
   {
    fetch(`http://localhost:3000/categories`)
    .then(response => response.json())
    .then(data => setCategorys(data))  
   },[])
   useEffect(() => 
   {
    fetch(`http://localhost:3000/user`)
    .then(response => response.json())
    .then(data => setUsers(data))  
   },[])

   const onHandleRemove = (id) => {
    const confirmed = window.confirm("Xác nhận xóa?");
    if (confirmed) {
      fetch('http://localhost:3000/products/' + id, {
      method: 'DELETE'
    }).then(() => setProducts(products.filter(item => item.id != id)))
    }
    
  }

  const onHandleRemoveCategory = (id) => {
    const confirmed = window.confirm("Xác nhận xóa?");
    if (confirmed) {
      fetch('http://localhost:3000/categories/' + id, {
      method: 'DELETE'
    }).then(() => setProducts(categorys.filter(item => item.id != id)))
    }
    
  }

  const oneHandleAdd = (product) => 
  {
    addProduct(product)
    alert("Thêm mới Product thành công")
  }

  const oneHandleAddCategory = (category) => 
  {
    addCategory(category)
    alert("Thêm mới Category thành công")
  }
  const oneHandleAddUser = (user) => 
  {
    addUser(user)
    alert("Đăng ký thành công")
  }

  const onHandleUpdate = (product) => { 
    updateProduct(product).then(() => getAllProduct().then(({ data }) => setProducts(data)))
  }
  const onHandleUpdateCategory = (category) => { 
    updateCategory(category).then(() => getAllCategory().then(({ data }) => setCategorys(data)))
  }

  return (
    <div>
      <BrowserRouter>
      

      <Routes>
          {/* nested router - router lồng nhau */}
          <Route path='/' element={<WebsiteLayout />}>
            <Route index element={<HomePage />} />
            <Route path='products'>
              <Route index element={<ProductPage products={products} />} />
              <Route path=':id' element={<ProductDetailPage products={products} />} />
            </Route>
          </Route>

          <Route path='/admin' element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='products' >
              <Route index element={<ProductManagementPage products={products} categorys={categorys} onRemove={onHandleRemove} />} />
              <Route path='add' element={<AddProductPage categorys={categorys}  onAdd={oneHandleAdd} />} />
              <Route path=':id/update' element={<UpdateProductPage products={products} categorys={categorys} onUpdate={onHandleUpdate} />} />
            </Route>
            <Route path='categories' >
              <Route index element={<CategoryManagementPage categorys={categorys} onRemove={onHandleRemoveCategory} />} />
              <Route path='add' element={<AddCategoryPage onAdd={oneHandleAddCategory} />} />
              <Route path=':id/update' element={<UpdateCategoryPage categorys={categorys} onUpdate={onHandleUpdateCategory} />} />
            </Route>
            
          </Route>
          <Route path='signin' >
              <Route index element={<SigninPage users={users}  />} />
            </Route>
            <Route path='signup' >
              <Route index element={<SignupPage onAdd={oneHandleAddUser} />} />
            </Route>


{/* <Route path='/' element={<HomePage/>}/>
<Route path='/products' element={<ProductPage products={products}/>}/>
<Route path='/products/:id' element={<ProductDetailPage products={products}/>}/>
<Route path='/admin' element={<Dashboard />} />
<Route path='/admin/products' element={<ProductManagementPage products={products} onRemove={onHandleRemove} />} />
<Route path='/admin/products/add' element={<AddProductPage onAdd={oneHandleAdd} />} />
<Route path='/admin/products/:id/update' element={<UpdateProductPage products={products} onUpdate={onHandleUpdate} />} /> */}






      </Routes>
      </BrowserRouter>
    </div>
  )
}



export default App
