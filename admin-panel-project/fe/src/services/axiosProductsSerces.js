import axios from "axios";

async function addProducts(e, setProducts, URL) {
  e.preventDefault();

  const postData = {
    image: e.target.image.value,
    title: e.target.title.value,
    subtitle: e.target.subtitle.value,
    price: e.target.price.value,
    discount: e.target.discount.value,
    description1: e.target.description1.value,
    description2: e.target.description2.value,
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
  setProducts(FETCHED_DATA.data.data);
}

async function deleteProducts(productId, setProducts, URL) {
  const FETCHED_DATA = await axios({
    url: URL,
    method: "DELETE",
    data: {
      productId: productId,
    },
  });
  setProducts(FETCHED_DATA.data.data);
}

async function editProducts(URL, setProducts, currentProduct) {
  const putData = {
    id: currentProduct.id,
    image: currentProduct.image,
    title: currentProduct.title,
    subtitle: currentProduct.subtitle,
    price: currentProduct.price,
    discount: currentProduct.discount,
    description1: currentProduct.description1,
    description2: currentProduct.description2,
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

  setProducts(FETCHED_DATA.data.data);
}

export { addProducts, editProducts, deleteProducts };
