import {
  Header,
  KeyFeatures,
  Product,
  ProductsHero,
  RequestDemo,
  SwappableModules,
} from "@/sections";

const Products = () => {
  return (
    <>
      <Header />
      <main>
        <ProductsHero />
        <KeyFeatures />
        <Product />
        <SwappableModules />
        <RequestDemo />
      </main>
    </>
  );
};

export default Products;
