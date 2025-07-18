import { IProduct } from "@/public/types";

// Your actual GitHub info
const GITHUB_USERNAME = 'iFrugal';
const REPO_NAME = 'json-data-keeper';
const BRANCH = 'main';

// JSDelivr URLs for your separate files (with correct directory)
const PRODUCTS_URL = `https://cdn.jsdelivr.net/gh/${GITHUB_USERNAME}/${REPO_NAME}@${BRANCH}/kb-masale-ui/products.json?${Date.now()}`;
const CATEGORIES_URL = `https://cdn.jsdelivr.net/gh/${GITHUB_USERNAME}/${REPO_NAME}@${BRANCH}/kb-masale-ui/categories.json?${Date.now()}`;

console.log('🔍 Products URL:', PRODUCTS_URL);
console.log('🔍 Categories URL:', CATEGORIES_URL);

// Your original static data as immediate fallback
const staticSampleData = {
  products: [
    {
      name: "Polo Sporting Stretch Shirt",
      slug: "polo-sporting-stretch-shirt",
      category: "Men's Dress Shirts",
      description: "Classic Polo style with modern comfort",
      images: [
        "/images/sample-products/p1-1.jpg",
        "/images/sample-products/p1-2.jpg",
      ],
      price: 400,
      brand: "Polo",
      rating: 4.5,
      numReviews: 10,
      stock: 5,
      isFeatured: true,
      banner: "banner-1.jpg",
    },
    {
      name: "Brooks Brothers Long Sleeved Shirt",
      slug: "brooks-brothers-long-sleeved-shirt",
      category: "Men's Dress Shirts",
      description: "Timeless style and premium comfort",
      images: [
        "/images/sample-products/p2-1.jpg",
        "/images/sample-products/p2-2.jpg",
      ],
      price: 1200,
      discount: 10,
      brand: "Brooks Brothers",
      rating: 4.2,
      numReviews: 8,
      stock: 10,
      isFeatured: true,
      banner: "banner-2.jpg",
    },
    {
      name: "Tommy Hilfiger Classic Fit Dress Shirt",
      slug: "tommy-hilfiger-classic-fit-dress-shirt",
      category: "Men's Dress Shirts",
      description: "A perfect blend of sophistication and comfort",
      images: [
        "/images/sample-products/p3-1.jpg",
        "/images/sample-products/p3-2.jpg",
      ],
      price: 1500,
      brand: "Tommy Hilfiger",
      rating: 4.9,
      numReviews: 3,
      stock: 0,
      isFeatured: false,
      banner: null,
    },
    {
      name: "Calvin Klein Slim Fit Stretch Shirt",
      slug: "calvin-klein-slim-fit-stretch-shirt",
      category: "Men's Dress Shirts",
      description: "Streamlined design with flexible stretch fabric",
      images: [
        "/images/sample-products/p4-1.jpg",
        "/images/sample-products/p4-2.jpg",
      ],
      price: 850,
      discount: 20,
      brand: "Calvin Klein",
      rating: 3.6,
      numReviews: 5,
      stock: 10,
      isFeatured: false,
      banner: null,
    },
    {
      name: "Polo Ralph Lauren Oxford Shirt",
      slug: "polo-ralph-lauren-oxford-shirt",
      category: "Men's Dress Shirts",
      description: "Iconic Polo design with refined oxford fabric",
      images: [
        "/images/sample-products/p5-1.jpg",
        "/images/sample-products/p5-2.jpg",
      ],
      price: 850,
      brand: "Polo",
      rating: 4.7,
      numReviews: 18,
      stock: 6,
      isFeatured: false,
      banner: null,
    },
    {
      name: "Polo Classic Pink Hoodie",
      slug: "polo-classic-pink-hoodie",
      category: "Men's Sweatshirts",
      description: "Soft, stylish, and perfect for laid-back days",
      images: [
        "/images/sample-products/p6-1.jpg",
        "/images/sample-products/p6-2.jpg",
      ],
      price: 850,
      brand: "Polo",
      rating: 4.6,
      numReviews: 12,
      stock: 8,
      isFeatured: true,
      banner: null,
    },
  ] as IProduct[]
};

const staticSampleCategories = [
  {
    name: "Fashion",
    icon: "/images/icons/fashion.png",
    subCategories: [
      {
        name: "Men",
        icon: "/images/icons/menFashion.png",
      },
      {
        name: "Woman",
        icon: "/images/icons/womanFashion.png",
      },
      {
        name: "Kids",
        icon: "/images/icons/womanFashion.png",
      },
    ],
  },
  {
    name: "Electronics",
    icon: "/images/icons/electronics.png",
    subCategories: [
      {
        name: "Laptop",
        icon: "/images/icons/laptop.png",
      },
      {
        name: "Smart Watches",
        icon: "/images/icons/wrist-watch.png",
      },
      {
        name: "Camera",
        icon: "/images/icons/camera.png",
      },
      {
        name: "Television 1",
        icon: "/images/icons/laptop.png",
      },
      {
        name: "Camera 2",
        icon: "/images/icons/camera.png",
      }
    ],
  },
  {
    name: "Groceries",
    icon: "/images/icons/grocery-cart.png",
    subCategories: [
      {
        name: "Rice",
        icon: "/images/icons/rice.png",
      },
      {
        name: "Pulses",
        icon: "/images/icons/pulses.png",
      },
      {
        name: "Fresh Vegetables",
        icon: "/images/icons/pulses.png",
      },
    ],
  },
  {
    name: "Footwear",
    icon: "/images/icons/footwear.png",
    subCategories: [
      {
        name: "Men's Footwear",
        icon: "/images/icons/menFootwear.png",
      },
      {
        name: "Woman's Footwear",
        icon: "/images/icons/womanFootwear.png",
      },
      {
        name: "Kid's Footwear",
        icon: "/images/icons/womanFootwear.png",
      },
    ],
  },
];

// Create the exported objects
const sampleData = { products: [...staticSampleData.products] };
const sampleCategories = [...staticSampleCategories];

// Function to load data from JSDelivr - SINGLE EXPORT
const loadDataFromJSDelivr = async (): Promise<boolean> => {
  console.log('🚀 Loading data from JSDelivr...');

  try {
    console.log('📡 Loading from separate files...');

    // Load products
    console.log('📦 Fetching products...');
    const productsResponse = await fetch(PRODUCTS_URL);
    if (productsResponse.ok) {
      const productsData = await productsResponse.json();
      console.log('✅ Products loaded:', productsData);

      // Handle both {products: [...]} and [...] formats
      const products = productsData.products || productsData;
      sampleData.products.splice(0, sampleData.products.length, ...products);
      console.log('✅ Products updated:', sampleData.products.length);
    } else {
      console.error('❌ Products fetch failed:', productsResponse.status);
    }

    // Load categories
    console.log('📂 Fetching categories...');
    const categoriesResponse = await fetch(CATEGORIES_URL);
    if (categoriesResponse.ok) {
      const categoriesData = await categoriesResponse.json();
      console.log('✅ Categories loaded:', categoriesData);

      // Handle both {categories: [...]} and [...] formats
      const categories = categoriesData.categories || categoriesData;
      sampleCategories.splice(0, sampleCategories.length, ...categories);
      console.log('✅ Categories updated:', sampleCategories.length);
    } else {
      console.error('❌ Categories fetch failed:', categoriesResponse.status);
    }

    console.log('🎉 Data loading completed!');
    return true;

  } catch (error) {
    console.error('❌ Failed to load from JSDelivr:', error);
    console.log('⚠️ Using static fallback data');
    return false;
  }
};

// Auto-load when in browser - IMPROVED VERSION
if (typeof window !== 'undefined') {
  console.log('🌐 Browser detected, loading data...');

  // Multiple ways to ensure the API call happens

  // Method 1: Immediate call
  loadDataFromJSDelivr().catch(console.error);

  // Method 2: DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      console.log('📄 DOM ready, loading data...');
      loadDataFromJSDelivr().catch(console.error);
    });
  } else {
    console.log('📄 DOM already ready, loading data immediately...');
    loadDataFromJSDelivr().catch(console.error);
  }

  // Method 3: Backup with setTimeout
  setTimeout(() => {
    console.log('⏰ Timeout backup, loading data...');
    loadDataFromJSDelivr().catch(console.error);
  }, 500);
} else {
  console.log('🖥️ Server environment, skipping data load');
}

// Export everything - NO DUPLICATES
export { sampleData, sampleCategories, loadDataFromJSDelivr };

// Add a manual trigger for testing
export const manualLoadData = () => {
  console.log('🔧 Manual data load triggered');
  return loadDataFromJSDelivr();
};