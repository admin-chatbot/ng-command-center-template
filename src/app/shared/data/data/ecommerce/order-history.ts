export interface orderHistoryList {
  id: number;
  title: string;
  data: order[];
}

export interface order {
  id: number;
  image: string;
  title: string;
  price: number;
  rating: number;
  stoke: string;
  color: string;
  status: string;
}

export interface orderTable {
  id: number,
  productimg: string,
  product: string,
  status: string,
  size: string,
  color: string,
  articleNumber: number,
  class: string;
  units: number,
  price: number;
 }

 
export const orderHistory: orderHistoryList[] = [
  {
    id: 1,
    title: "New Orders",
    data: [
      {
        id: 1,
        image: "assets/images/ecommerce/product-table-6.png",
        title: "Women Top",
        price: 210,
        rating: 5,
        stoke: "In stock",
        color: "primary",
        status: "Processing",
      },
      {
        id: 2,
        image: "assets/images/ecommerce/product-table-5.png",
        title: "Women Shorts",
        price: 210,
        rating: 5,
        stoke: "In stock",
        color: "primary",
        status: "Processing",
      },
      {
        id: 3,
        image: "assets/images/ecommerce/product-table-4.png",
        title: "Cyclamen",
        price: 210,
        rating: 5,
        stoke: "In stock",
        color: "primary",
        status: "Processing",
      },
      {
        id: 4,
        image: "assets/images/ecommerce/product-table-3.png",
        title: "Men dashed Denim jacket",
        price: 210,
        rating: 5,
        stoke: "In stock",
        color: "primary",
        status: "Processing",
      },
      {
        id: 5,
        image: "assets/images/ecommerce/product-table-2.png",
        title: "Blue shirt",
        price: 210,
        rating: 5,
        stoke: "In stock",
        color: "primary",
        status: "Processing",
      },
      {
        id: 6,
        image: "assets/images/ecommerce/product-table-1.png",
        title: "red shirt",
        price: 210,
        rating: 5,
        stoke: "In stock",
        color: "primary",
        status: "Processing",
      },
      {
        id: 7,
        image: "assets/images/ecommerce/product-table-1.png",
        title: "Red shirt",
        price: 210,
        rating: 5,
        stoke: "In stock",
        color: "primary",
        status: "Processing",
      },
      {
        id: 8,
        image: "assets/images/ecommerce/product-table-6.png",
        title: "Women Top",
        price: 210,
        rating: 5,
        stoke: "In stock",
        color: "primary",
        status: "Processing",
      },
      {
        id: 9,
        image: "assets/images/ecommerce/product-table-5.png",
        title: "Women shorts",
        price: 210,
        rating: 5,
        stoke: "In stock",
        color: "primary",
        status: "Processing",
      },
    ],
  },
  {
    id: 2,
    title: "Shipped Orders",
    data: [
      {
        id: 10,
        image: "assets/images/ecommerce/product-table-6.png",
        title: "Women Top",
        price: 210,
        rating: 5,
        stoke: "In stock",
        color: "success",
        status: "Shipped",
      },
      {
        id: 11,
        image: "assets/images/ecommerce/product-table-5.png",
        title: "Women Shorts",
        price: 210,
        rating: 5,
        stoke: "In stock",
        color: "success",
        status: "Shipped",
      },
      {
        id: 12,
        image: "assets/images/ecommerce/product-table-4.png",
        title: "Cyclamen",
        price: 210,
        rating: 5,
        stoke: "In stock",
        color: "success",
        status: "Shipped",
      },
      {
        id: 13,
        image: "assets/images/ecommerce/product-table-3.png",
        title: "Men dashed Denim jacket",
        price: 210,
        rating: 5,
        stoke: "In stock",
        color: "success",
        status: "Shipped",
      },
      {
        id: 14,
        image: "assets/images/ecommerce/product-table-3.png",
        title: "Blue shirt",
        price: 210,
        rating: 5,
        stoke: "In stock",
        color: "success",
        status: "Shipped",
      },
      {
        id: 15,
        image: "assets/images/ecommerce/product-table-2.png",
        title: "red shirt",
        price: 210,
        rating: 5,
        stoke: "In stock",
        color: "success",
        status: "Shipped",
      },
      {
        id: 16,
        image: "assets/images/ecommerce/product-table-6.png",
        title: "Red shirt",
        price: 210,
        rating: 5,
        stoke: "In stock",
        color: "success",
        status: "Shipped",
      },
      {
        id: 17,
        image: "assets/images/ecommerce/product-table-5.png",
        title: "Women Top",
        price: 210,
        rating: 5,
        stoke: "In stock",
        color: "success",
        status: "Shipped",
      },
      {
        id: 18,
        image: "assets/images/ecommerce/product-table-1.png",
        title: "Women shorts",
        price: 210,
        rating: 5,
        stoke: "In stock",
        color: "success",
        status: "Shipped",
      },
    ],
  },
  {
    id: 3,
    title: "Cancelled Orders",
    data: [
      {
        id: 19,
        image: "assets/images/ecommerce/product-table-6.png",
        title: "Women Top",
        price: 210,
        rating: 5,
        stoke: "In stock",
        color: "danger",
        status: "Cancelled",
      },
      {
        id: 20,
        image: "assets/images/ecommerce/product-table-5.png",
        title: "Women Shorts",
        price: 210,
        rating: 5,
        stoke: "In stock",
        color: "danger",
        status: "Cancelled",
      },
      {
        id: 21,
        image: "assets/images/ecommerce/product-table-4.png",
        title: "Cyclamen",
        price: 210,
        rating: 5,
        stoke: "In stock",
        color: "danger",
        status: "Cancelled",
      },
      {
        id: 22,
        image: "assets/images/ecommerce/product-table-3.png",
        title: "Men dashed Denim jacket",
        price: 210,
        rating: 5,
        stoke: "In stock",
        color: "danger",
        status: "Cancelled",
      },
      {
        id: 23,
        image: "assets/images/ecommerce/product-table-2.png",
        title: "Blue shirt",
        price: 210,
        rating: 5,
        stoke: "In stock",
        color: "danger",
        status: "Cancelled",
      },
      {
        id: 24,
        image: "assets/images/ecommerce/product-table-1.png",
        title: "red shirt",
        price: 210,
        rating: 5,
        stoke: "In stock",
        color: "danger",
        status: "Cancelled",
      },
      {
        id: 25,
        image: "assets/images/ecommerce/product-table-1.png",
        title: "Red shirt",
        price: 210,
        rating: 5,
        stoke: "In stock",
        color: "danger",
        status: "Cancelled",
      },
      {
        id: 26,
        image: "assets/images/ecommerce/product-table-6.png",
        title: "Women Top",
        price: 210,
        rating: 5,
        stoke: "In stock",
        color: "danger",
        status: "Cancelled",
      },
      {
        id: 27,
        image: "assets/images/ecommerce/product-table-5.png",
        title: "Women shorts",
        price: 210,
        rating: 5,
        stoke: "In stock",
        color: "danger",
        status: "Cancelled",
      },
    ],
  },
];

export const orderTableData: orderTable[] = [
  {
      id: 1,
      productimg: "assets/images/product/1.png",
      product: "Long Top",
      status: "Processing",
      size: " M",
      color: "Lavander",
      articleNumber: 4215738, 
      class: 'process-circle',
      units: 1,
      price: 21
  },
  {
      id: 2,
      productimg: "assets/images/product/13.png",
      product: "Fancy watch",
      status: "Processing",
      size: "35mm",
      color: "Blue",
      articleNumber: 5476182,
      class: 'process-circle',
      units: 1,
      price: 10
  },
  {
      id: 3,
      productimg: "assets/images/product/4.png",
      product: "Man shoes",
      status: "Processing",
      size: "8",
      color: "Black & white",
      articleNumber: 1756457,
      class: 'process-circle',
      units: 1,
      price: 18
  },
  {
      id: 4,
      productimg: "assets/images/product/10.png",
      product: "Ledis side bag",
      status: "Shipped",
      size: "22cm x 18cm",
      color: "Brown",
      articleNumber: 7451725,
      class: 'process-circle shipped-order',
      units: 1,
      price: 13
  },
  {
      id: 5,
      productimg: "assets/images/product/12.png",
      product: "Ledis Slipper",
      status: "Shipped",
      size: "6",
      color: "Brown & white",
      articleNumber: 4127421,
      class: 'process-circle shipped-order',
      units: 1,
      price: 6
  },
  {
      id: 6,
      productimg: "assets/images/product/3.png",
      product: "Fancy ledis Jacket",
      status: "Shipped",
      size: "xl",
      color: "Light gray",
      articleNumber: 3581714,
      class: 'process-circle shipped-order',
      units: 1,
      price: 24
  },
  {
      id: 7,
      productimg: "assets/images/product/2.png",
      product: "Ledis Handbag",
      status: "Shipped",
      size: "25cm x 20cm",
      color: "Black",
      articleNumber: 67481429,
      class: 'process-circle shipped-order',
      units: 1,
      price: 14
  },
  {
      id: 8,
      productimg: "assets/images/product/15.png",
      product: "Iphone6 mobile",
      status: "Cancelled",
      size: "10cm x 15cm",
      color: "Black",
      articleNumber: 5748214,
      class: 'process-circle cancel-order',
      units: 1,
      price: 25
  },
  {
      id: 9,
      productimg: "assets/images/product/14.png",
      product: "Watch",
      status: "Cancelled",
      size: "27mm",
      color: "Brown",
      articleNumber: 247125,
      class: 'process-circle cancel-order',
      units: 1,
      price: 12
  },
  {
      id: 10,
      productimg: "assets/images/product/11.png",
      product: "Slipper",
      class: 'process-circle cancel-order',
      size: "6",
      color: "Blue",
      articleNumber: 8475112,
      status: "Cancelled",
      units: 1,
      price: 6
  },
]
