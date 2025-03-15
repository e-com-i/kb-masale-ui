import CategoryCard from "@/components/shared/product/category-card";
import ProductList from "@/components/shared/product/product-list";
import {sampleData, sampleCategories} from "@/sampleData/sample-data";



const Homepage = async () => {
  //await(delay(2000));

  return ( <>
  <CategoryCard categories={sampleCategories}/>
  <ProductList data={sampleData.products} title="Products" limit={4} /></> );
}
 
export default Homepage;