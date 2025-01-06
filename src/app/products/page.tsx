import {
  Header,
	KeyFeatures,
	Product,
	RequestDemo,
	Series,
	SwappableModules,
} from "@/sections";

const Products = () => {
	return (
		<>
			<Header />
			<main>
				<Series />
				<KeyFeatures />
				<Product />
				<SwappableModules />
				<RequestDemo />
			</main>
		</>
	);
};

export default Products;
