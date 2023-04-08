import instance from "./instance";

const getAllProduct = () => 
{
    return instance.get('/products');
}

const getOneProduct = () => 
{
    return instance.get('/products/' + id);
}

const addProduct = (product) => {
    return instance.post('/products', product);
}
const updateProduct = (product) => {
    return instance.patch('/products/' + product.id, product);
}
const deleteProduct = (id) => {
    return instance.delete('/products/' + id);
    
}
const getAllCategory = () => 
{
    return instance.get('/categories');
}

const getOneCategory = () => 
{
    return instance.get('/categories/' + id);
}
const addCategory = (Category) => {
    return instance.post('/categories', Category);
}
const updateCategory = (Category) => {
    return instance.patch('/categories/' + Category.id, Category);
}
const deleteCategory = (id) => {
    return instance.delete('/categories/' + id);
    
}
const addUser = (user) => {
    return instance.post('/user', user);
}

export { getAllProduct, getOneProduct, addProduct, updateProduct, 
    deleteProduct, addCategory, updateCategory, deleteCategory , getAllCategory, getOneCategory, addUser}