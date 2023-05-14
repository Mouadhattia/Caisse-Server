import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
//import { actions } from 'react-table';
import MenuCategorySlider from "./MenuCategorySlider";
import MenuPopularSlider from "./MenuPopularSlider";
import BestSellerSlider from "./BestSellerSlider";
import PromoSlider from "./PromoSlider";
import { useDispatch, useSelector } from "react-redux";
import {
  categoryAction,
  createCategoryAction,
  deleteCategoryAction,
  updateCategoryAction,
  uploadImageAction,
} from "../../../../store/actions/CategoryActions";
import swal from "sweetalert";
import {
  createProductAction,
  createSuppAction,
  deleteProductAction,
  deleteSuppAction,
  ProductByCatAction,
  SupplmentsAction,
  updateProductAction,
  updateSuppAction,
} from "../../../../store/actions/ProductActions";
const Menu = () => {
  const dispatch = useDispatch();
  const [ping, setPing] = useState(false);
  const [selectMenu, setSelectMenu] = useState(null);
  const [selectProduct, setSelectProduct] = useState(null);
  const [menuId, setMenuId] = useState(null);
  const [suppId, setSuppId] = useState(null);
  const [openSupp, setOpenSupp] = useState(false);
  const [supp, setSupp] = useState({
    name: "",
    price: 1,
    img: "",
  });
  const [productId, setProductId] = useState(null);

  const [menu, setMenu] = useState({
    name: "",
    priority: 1,
    img: "",
  });
  const [openMenu, setOpenMenu] = useState(false);
  const [openProduct, setOpenProduct] = useState(false);
  const { categories } = useSelector((state) => state.categories);
  const { products } = useSelector((state) => state.products);
  const { supplments } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(categoryAction());
  }, [dispatch, ping]);
  useEffect(() => {
    if (selectMenu) {
      dispatch(ProductByCatAction(selectMenu));
    }
  }, [dispatch, selectMenu, ping]);
  useEffect(() => {
    if (selectProduct) {
      dispatch(SupplmentsAction(selectProduct));
    }
  }, [dispatch, selectProduct, ping]);

  const [product, setProduct] = useState({
    name: "",
    priority: 1,
    price: 0,
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    desc: "",
    size: [],
  });

  const handleCreateProduct = () => {
    if (product.name !== "" && product.img1 !== "") {
      if (productId) {
        dispatch(updateProductAction({ ...product, id: productId }));
        setOpenProduct(false);
        setTimeout(setPing(!ping), 1000);
      } else {
        dispatch(createProductAction({ ...product, catId: selectMenu }));
        setOpenProduct(false);
        setTimeout(setPing(!ping), 1000);
      }
    } else {
      swal(
        "ops!",
        " Svp veuillez compléter tous les champs obligatoires ! ",
        "error"
      );
    }
  };

  const handleUpload = async (event) => {
    const formData = new FormData();
    formData.append("image", event.target.files[0]);
    uploadImageAction(formData).then(() =>
      setMenu({
        ...menu,
        img: `http://localhost:5000/images/${event.target.files[0].name}`,
      })
    );
  };
  const UploadProd = async (event, id) => {
    const formData = new FormData();
    formData.append("image", event.target.files[0]);
    uploadImageAction(formData).then(() => prodImage(event, id));
  };

  const prodImage = (event, id) => {
    switch (id) {
      case "1":
        setProduct({
          ...product,
          img1: `http://localhost:5000/images/${event.target.files[0].name}`,
        });
        break;
      case "2":
        setProduct({
          ...product,
          img2: `http://localhost:5000/images/${event.target.files[0].name}`,
        });
        break;
      case "3":
        setProduct({
          ...product,
          img3: `http://localhost:5000/images/${event.target.files[0].name}`,
        });
        break;

      case "4":
        setProduct({
          ...product,
          img4: `http://localhost:5000/images/${event.target.files[0].name}`,
        });
        break;
    }
  };

  const handleCreateMenu = () => {
    if (menu.name != "" && menu.img != "") {
      if (menuId) {
        dispatch(updateCategoryAction({ ...menu, id: menuId }));
        setOpenMenu(false);
        setTimeout(setPing(!ping), 1000);
      } else {
        dispatch(createCategoryAction(menu));
        setOpenMenu(false);
        setTimeout(setPing(!ping), 1000);
      }
    } else {
      swal(
        "ops!",
        " Svp veuillez compléter tous les champs obligatoires ! ",
        "error"
      );
    }
  };
  const handleDeleteMenu = (id) => {
    dispatch(deleteCategoryAction(id));
    setTimeout(setPing(!ping), 2000);
  };

  const halndleCloseMenu = () => {
    setOpenMenu(false);
  };
  const halndleOpenMenu = () => {
    setOpenMenu(true);
  };
  const halndleCloseProduct = () => {
    setOpenProduct(false);
  };
  const halndleOpenProduct = () => {
    if (selectMenu) {
      setOpenProduct(true);
    }
  };
  const halndleOpenSupp = () => {
    if (selectProduct) {
      setOpenSupp(true);
    }
  };
  const halndleCloseSupp = () => {
    setOpenSupp(false);
  };
  const handleUploadSupp = (event) => {
    const formData = new FormData();
    formData.append("image", event.target.files[0]);
    uploadImageAction(formData).then(() =>
      setSupp({
        ...supp,
        img: `http://localhost:5000/images/${event.target.files[0].name}`,
      })
    );
  };

  const handleDeleteSupp = (id) => {
    dispatch(deleteSuppAction(id));
    setTimeout(setPing(!ping), 1000);
  };

  const handleCreateSupp = () => {
    if (supp.name !== "" && supp.img !== "") {
      if (suppId) {
        dispatch(updateSuppAction({ ...supp, id: suppId }));
        setOpenSupp(false);
        setTimeout(setPing(!ping), 1000);
      } else {
        dispatch(createSuppAction({ ...supp, prodId: selectProduct }));
        setOpenSupp(false);
        setTimeout(setPing(!ping), 1000);
      }
    } else {
      swal(
        "ops!",
        " Svp veuillez compléter tous les champs obligatoires ! ",
        "error"
      );
    }
  };
  const handleDeleteProduct = (id) => {
    dispatch(deleteProductAction(id));
    setTimeout(setPing(!ping), 1000);
  };

  return (
    <>
      <div className="row">
        <div className="col-xl-12">
          <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap">
            <div className="input-group search-area2">
              <span className="input-group-text p-0">
                <Link to={"#"}>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.414 24.586L22.337 19.509C23.386 17.928 24 16.035 24 14C24 8.486 19.514 4 14 4C8.486 4 4 8.486 4 14C4 19.514 8.486 24 14 24C16.035 24 17.928 23.386 19.509 22.337L24.586 27.414C25.366 28.195 26.634 28.195 27.414 27.414C28.195 26.633 28.195 25.367 27.414 24.586ZM7 14C7 10.14 10.14 7 14 7C17.86 7 21 10.14 21 14C21 17.86 17.86 21 14 21C10.14 21 7 17.86 7 14Z"
                      fill="#FC8019"
                    />
                  </svg>
                </Link>
              </span>
              <input
                type="text"
                className="form-control p-0"
                placeholder="Chercher un menu..."
              />
            </div>

            <button
              type="button"
              className="btn btn-primary mt-3 mt-sm-0"
              onClick={() => halndleOpenMenu()}
            >
              Ajouter Un Nouveau Menu
            </button>
          </div>
          <div className="d-flex align-items-center justify-content-between mb-2">
            <h4 className="mb-0 cate-title">List de menu</h4>
            <Link to={"/favorite-menu"} className="text-primary"></Link>
          </div>
          <MenuCategorySlider
            categories={categories}
            handleDeleteMenu={handleDeleteMenu}
            halndleOpenMenu={halndleOpenMenu}
            setMenuId={setMenuId}
            setMenu={setMenu}
            setSelectMenu={setSelectMenu}
            selectMenu={selectMenu}
          />
          {categories.length === 0 && (
            <h3 style={{ textAlign: "center" }}>List De Menus Vide</h3>
          )}
        </div>
        <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap">
          <div className="input-group search-area2">
            <span className="input-group-text p-0">
              <Link to={"#"}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.414 24.586L22.337 19.509C23.386 17.928 24 16.035 24 14C24 8.486 19.514 4 14 4C8.486 4 4 8.486 4 14C4 19.514 8.486 24 14 24C16.035 24 17.928 23.386 19.509 22.337L24.586 27.414C25.366 28.195 26.634 28.195 27.414 27.414C28.195 26.633 28.195 25.367 27.414 24.586ZM7 14C7 10.14 10.14 7 14 7C17.86 7 21 10.14 21 14C21 17.86 17.86 21 14 21C10.14 21 7 17.86 7 14Z"
                    fill="#FC8019"
                  />
                </svg>
              </Link>
            </span>
            <input
              type="text"
              className="form-control p-0"
              placeholder="Chercher un produit..."
            />
          </div>

          <button
            style={{ backgroundColor: selectMenu ? "#DF6703" : "gray" }}
            type="button"
            className="btn btn-primary mt-3 mt-sm-0"
            onClick={() => halndleOpenProduct()}
          >
            Ajouter Un Nouveau Produit
          </button>
        </div>
        <div className="col-xl-12">
          <div className="d-flex align-items-center justify-content-between mb-2 mt-sm-0 mt-3">
            <h4 className=" mb-0 cate-title">List de Produits</h4>
            <Link to={"/favorite-menu"} className="text-primary"></Link>
          </div>
          <MenuPopularSlider
            products={products}
            handleDeleteProduct={handleDeleteProduct}
            setSelectProduct={setSelectProduct}
            selectProduct={selectProduct}
            setProduct={setProduct}
            setProductId={setProductId}
            halndleOpenProduct={halndleOpenProduct}
          />
          {products.length === 0 && (
            <h3 style={{ textAlign: "center" }}>List De Produits Vide</h3>
          )}
          <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap">
            <div className="input-group search-area2">
              <span className="input-group-text p-0">
                <Link to={"#"}>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.414 24.586L22.337 19.509C23.386 17.928 24 16.035 24 14C24 8.486 19.514 4 14 4C8.486 4 4 8.486 4 14C4 19.514 8.486 24 14 24C16.035 24 17.928 23.386 19.509 22.337L24.586 27.414C25.366 28.195 26.634 28.195 27.414 27.414C28.195 26.633 28.195 25.367 27.414 24.586ZM7 14C7 10.14 10.14 7 14 7C17.86 7 21 10.14 21 14C21 17.86 17.86 21 14 21C10.14 21 7 17.86 7 14Z"
                      fill="#FC8019"
                    />
                  </svg>
                </Link>
              </span>
              <input
                type="text"
                className="form-control p-0"
                placeholder="Chercher un supplement..."
              />
            </div>

            <button
              style={{ backgroundColor: selectProduct ? "#DF6703" : "gray" }}
              type="button"
              className="btn btn-primary mt-3 mt-sm-0"
              onClick={() => halndleOpenSupp()}
            >
              Ajouter Un Nouveau Supplement
            </button>
          </div>
        </div>
        <div className="col-xl-12">
          <div className="d-flex align-items-center justify-content-between mb-2 mt-sm-0 mt-3">
            <h4 className=" mb-0 cate-title">List de Supplement</h4>
            <Link to={"/favorite-menu"} className="text-primary"></Link>
          </div>
          <BestSellerSlider
            supplments={supplments}
            setSuppId={setSuppId}
            halndleOpenSupp={halndleOpenSupp}
            handleDeleteSupp={handleDeleteSupp}
            setSupp={setSupp}
          />
          {supplments.length === 0 && (
            <h3 style={{ textAlign: "center" }}>List De Supplments Vide</h3>
          )}
        </div>
      </div>

      <Modal
        className="modal fade"
        show={openMenu}
        onHide={() => halndleCloseMenu()}
      >
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Ajouter Un Nouveau Menu
          </h5>
          <button
            type="button"
            className="btn-close"
            onClick={() => halndleCloseMenu()}
          ></button>
        </div>
        <div className="modal-body">
          <form>
            <div className="d-flex align-items-center veg justify-content-center"></div>
            <div className="modal-inside">
              <label for="exampleInputText" className="form-label">
                Titre de l'article
              </label>
              <input
                defaultValue={menu.name}
                type="text"
                className="form-control"
                id="exampleInputText"
                placeholder=""
                onChange={(e) => setMenu({ ...menu, name: e.target.value })}
              />
            </div>
            <div className="row">
              <div className="col-xl-6">
                <div className="modal-inside">
                  <label for="exampleInputnumber-1" className="form-label mb-2">
                    Priorité
                  </label>
                  <input
                    defaultValue={menu.priority}
                    type="number"
                    className="form-control"
                    id="exampleInputnumber-1"
                    onChange={(e) =>
                      setMenu({ ...menu, priority: Number(e.target.value) })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Image
              </label>
              <input
                className="form-control"
                type="file"
                id="formFile"
                onChange={(e) => handleUpload(e)}
              />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => halndleCloseMenu()}
          >
            Annuler
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => handleCreateMenu()}
          >
            Confirmer
          </button>
        </div>
      </Modal>
      <Modal
        className="modal fade"
        show={openProduct}
        onHide={() => halndleCloseProduct()}
      >
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Ajouter Un Nouveau Produit
          </h5>
          <button
            type="button"
            className="btn-close"
            onClick={() => halndleCloseProduct()}
          ></button>
        </div>
        <div className="modal-body">
          <form>
            <div className="d-flex align-items-center veg justify-content-center"></div>
            <div className="modal-inside">
              <label for="exampleInputText" className="form-label">
                Titre de l'article
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputText"
                placeholder=""
                defaultValue={product.name}
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
              />
            </div>
            <div className="row">
              <div className="col-xl-6">
                <div className="modal-inside">
                  <label for="exampleInputnumber-1" className="form-label mb-2">
                    Priorité
                  </label>
                  <input
                    defaultValue={product.priority}
                    type="number"
                    className="form-control"
                    id="exampleInputnumber-1"
                    onChange={(e) =>
                      setProduct({
                        ...product,
                        priority: Number(e.target.value),
                      })
                    }
                  />
                </div>
              </div>
              <div className="col-xl-6">
                <div className="modal-inside">
                  <label for="exampleInputnumber-1" className="form-label mb-2">
                    Prix
                  </label>
                  <input
                    defaultValue={product.price}
                    type="number"
                    className="form-control"
                    id="exampleInputnumber-1"
                    onChange={(e) =>
                      setProduct({
                        ...product,
                        price: Number(e.target.value),
                      })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="modal-inside">
              <label for="exampleInputText" className="form-label">
                Description
              </label>
              <textarea
                defaultValue={product.desc}
                style={{ height: "10rem" }}
                type="text"
                className="form-control"
                id="exampleInputText"
                placeholder=""
                onChange={(e) =>
                  setProduct({ ...product, desc: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Image 1
              </label>
              <input
                className="form-control"
                type="file"
                id="formFile"
                onChange={(event) => UploadProd(event, "1")}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Image 2
              </label>
              <input
                className="form-control"
                type="file"
                id="formFile"
                onChange={(event) => UploadProd(event, "2")}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Image 3
              </label>
              <input
                className="form-control"
                type="file"
                id="formFile"
                onChange={(event) => UploadProd(event, "3")}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Image 4
              </label>
              <input
                className="form-control"
                type="file"
                id="formFile"
                onChange={(event) => UploadProd(event, "4")}
              />
            </div>

            {product?.size?.map((size, index) => (
              <div className="row" key={index}>
                <div className="col-xl-6">
                  <div className="modal-inside">
                    <label for="exampleInputtext-1" className="form-label mb-2">
                      Taille
                    </label>
                    <input
                      defaultValue={size.size}
                      type="text"
                      className="form-control"
                      id="exampleInputnumber-1"
                      onChange={(e) => {
                        const updatedSizes = [...product.size];
                        updatedSizes[index].size = e.target.value;
                        setProduct({ ...product, size: updatedSizes });
                      }}
                    />
                    <Button
                      className="me-2"
                      variant="danger btn-xs"
                      style={{ marginTop: "5px" }}
                      onClick={() => {
                        const updatedSizes = [...product.size];
                        updatedSizes.splice(index, 1);
                        setProduct({ ...product, size: updatedSizes });
                      }}
                    >
                      Supprimer
                    </Button>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="modal-inside">
                    <label
                      for="exampleInputnumber-1"
                      className="form-label mb-2"
                    >
                      Prix
                    </label>
                    <input
                      defaultValue={size.price}
                      type="number"
                      className="form-control"
                      id="exampleInputnumber-1"
                      onChange={(e) => {
                        const updatedSizes = [...product.size];
                        updatedSizes[index].price = Number(e.target.value);
                        setProduct({ ...product, size: updatedSizes });
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
            <Button
              className="me-2"
              variant="primary btn-xs"
              onClick={() =>
                setProduct({
                  ...product,
                  size: [...product.size, { size: "", price: 0 }],
                })
              }
            >
              Ajouter une taille
            </Button>
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => halndleCloseProduct()}
          >
            Annuler
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => handleCreateProduct()}
          >
            Confirmer
          </button>
        </div>
      </Modal>
      <Modal
        className="modal fade"
        show={openSupp}
        onHide={() => halndleCloseSupp()}
      >
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Ajouter Un Nouveau Supplement
          </h5>
          <button
            type="button"
            className="btn-close"
            onClick={() => halndleCloseSupp()}
          ></button>
        </div>
        <div className="modal-body">
          <form>
            <div className="d-flex align-items-center veg justify-content-center"></div>
            <div className="modal-inside">
              <label for="exampleInputText" className="form-label">
                Titre de l'article
              </label>
              <input
                defaultValue={supp.name}
                type="text"
                className="form-control"
                id="exampleInputText"
                placeholder=""
                onChange={(e) => setSupp({ ...supp, name: e.target.value })}
              />
            </div>
            <div className="row">
              <div className="col-xl-6">
                <div className="modal-inside">
                  <label for="exampleInputnumber-1" className="form-label mb-2">
                    Prix
                  </label>
                  <input
                    defaultValue={supp.price}
                    type="number"
                    className="form-control"
                    id="exampleInputnumber-1"
                    onChange={(e) =>
                      setSupp({ ...supp, price: Number(e.target.value) })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Image
              </label>
              <input
                className="form-control"
                type="file"
                id="formFile"
                onChange={(e) => handleUploadSupp(e)}
              />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => halndleCloseSupp()}
          >
            Annuler
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => handleCreateSupp()}
          >
            Confirmer
          </button>
        </div>
      </Modal>
    </>
  );
};
export default Menu;
