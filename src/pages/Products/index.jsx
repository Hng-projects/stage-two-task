import { IoIosArrowForward } from "react-icons/io";
import style from "./products.module.css";
import { FiSliders } from "react-icons/fi";
import { PageBox, ProductList, Select } from "../../components";
import { TbArrowsSort } from "react-icons/tb";
import productsData from "../../data";

function Products() {
  return (
    <>
      <div className={style.hero}>
        <div className={style.textBox}>
          <h1>face moisturizers</h1>
          <p>
            Unleash the full potential of your skin with our curated selection
            of targeted face serums. These lightweight, fast-absorbing formulas
            are packed with potent active ingredients that address specific
            concerns like fine lines, wrinkles, hyperpigmentation, and dullness.{" "}
          </p>
        </div>
        <div className={style.route}>
          <p>Home</p>
          <span>
            <IoIosArrowForward />
          </span>
          <p>Categories</p>
          <span>
            <IoIosArrowForward />
          </span>
          <p>Face moisturizers</p>
        </div>
      </div>
      <div className={style.filterBox}>
        <div className={style.box1}>
          <div>
            <span>
              <FiSliders />
            </span>
            filter
          </div>
          <p>clear (2)</p>
        </div>
        <div className={style.box2}>
          <Select placeholder="Price" options={["hello", "world"]} />
          <Select
            placeholder="Brands"
            options={[
              "Cerave",
              "Naturium",
              "Timeless",
              "TIAM",
              "cosrx",
              "kojvit",
              "The Ordinary",
              "Acwell",
              "Good Molecules",
              "La Roche Posay",
            ]}
          />
          <Select
            placeholder="Skin Concerns"
            options={[
              "Acne",
              "Wrinkles",
              "Dark Spots",
              "Hyper pigmentation",
              "Melasma",
              "Dry Skin",
              "Strawberry Skin",
            ]}
          />
          <Select
            placeholder="Ingredients"
            options={[
              "Azelaic acid",
              "Nacinamide",
              "Kojk Acid",
              "Green Tea",
              "Tranaxemic acid",
              "Vit. C",
              "Snail Mucin",
              "Hyaluronic acid",
              "Propolis",
              "Alpha Arbutin",
            ]}
          />
        </div>
        <div className={style.box3}>
          <div>
            <p>Show</p>
            <Select placeholder={12} options={[12, 6]} />
          </div>
          <div>
            <p>
              <span>
                <TbArrowsSort />
              </span>
              Sort
            </p>
            <Select placeholder={"Bestsellers"} options={[12, 6]} />
          </div>
        </div>
      </div>
      <ProductList products={productsData} />
      <div className={style.pages}>
        {[1, 2, 3, 4, "...", 25, 26, 27, 28, <IoIosArrowForward />].map(
          (page) => (
            <PageBox key={page} number={page} />
          ),
        )}
      </div>
      <h2>recently viewed products</h2>
      <ProductList products={productsData.slice(1, 3)} />
    </>
  );
}

export default Products;
