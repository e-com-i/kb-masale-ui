import CategoryCard from "@/components/shared/product/category-card";
import ProductList from "@/components/shared/product/product-list";
import {sampleData, sampleCategories, manualLoadData} from "@/sampleData/sample-data";



const Homepage = async () => {
  //await(delay(2000));
  const success = await manualLoadData();
  console.log('Manual load result:', success);
  return ( <>
  <CategoryCard categories={sampleCategories}/>
  <ProductList data={sampleData.products} title="Products" limit={4} /></> );
}
 
export default Homepage;