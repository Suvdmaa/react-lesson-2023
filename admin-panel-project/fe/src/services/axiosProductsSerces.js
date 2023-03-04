import axios from "axios";

async function addProducts(e, setProducts, URL) {
  e.preventDefault();

  const postData = {
    image: e.target.image_path.value,
    title: e.target.product_name.value,
    price: e.target.product_price.value,
    quantity: e.target.product_quantity.value,
    description: e.target.product_description.value,
    categoryId: e.target.product_category_id.value,
    code: e.target.code.value,
    hashtag: e.target.hashtag.value,
    technology: e.target.technology.value,
    rating: e.target.rating.value,
  };

  const FETCHED_DATA = await axios({
    url: URL,
    method: "POST",
    data: postData,
  });
  setProducts(FETCHED_DATA);
}

async function deleteProducts(id, setProducts, URL) {
  const FETCHED_DATA = await axios({
    url: URL,
    method: "DELETE",
    data: {
      id: id,
    },
  });
  setProducts(FETCHED_DATA);
}

async function editProducts(URL, setProducts, currentProduct) {
  const putData = {
    id: currentProduct.id,
    image: currentProduct.image_path,
    title: currentProduct.product_name,
    price: currentProduct.product_price,
    quantity: currentProduct.product_quantity,
    discount: currentProduct.discount,
    description: currentProduct.product_description,
    categoryId: currentProduct.product_category_id,
    code: currentProduct.code,
    hashtag: currentProduct.hashtag,
    technology: currentProduct.technology,
    rating: currentProduct.rating,
  };

  const FETCHED_DATA = await axios({
    url: URL,
    method: "PUT",
    data: putData,
  });

  setProducts(FETCHED_DATA);
}

export { addProducts, editProducts, deleteProducts };
