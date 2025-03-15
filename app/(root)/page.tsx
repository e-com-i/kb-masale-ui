import ProductList from "@/components/shared/product/product-list";
import {sampleData} from "@/sampleData/sample-data";


const Homepage = async () => {
  //await(delay(2000));

  return ( <>
  <ProductList data={sampleData.products} title="Products" limit={4} /></> );
}
 
export default Homepage;