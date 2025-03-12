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
      <main
        style={{
          background: `
          linear-gradient(20deg, rgba(5, 144, 200, 0.02) 76.31%, #0D242673 114.45%), 
          linear-gradient(20deg, #D7EFF9 76.31%, #0590C8B3 114.45%)`,
        }}
      >
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
