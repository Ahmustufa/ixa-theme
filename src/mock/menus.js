export const shoesMenu = [
  {
    title: "home",
    link: "/demo/shoes",
  },
  {
    title: "BACKPACKS",
    link: "/demo/shoes/backpack",
  },
  {
    title: "TERRABASE",
    link: "/demo/shoes/terrabase",
  },
  {
    title: "DISCOVER US",
    link: "/demo/shoes/discover-us",
  },
  {
    title: "OUTLET",
    link: "/demo/shoes/outlet",
  },
  {
    title: "CONTACT",
    link: "/demo/shoes/contact",
  },
];

export const bagsMenu = [
  {
    title: "home",
    link: "/demo/bag-store",
  },
  {
    title: "Products",
    link: "/demo/bag-store/products",
  },
  {
    title: "Shop",
    link: "/demo/bags/terrabase",
    submenu: [
      { title: "Blog left sidebar", link: "/blog/blog-left-sidebar" },
      { title: "Blog right sidebar", link: "/blog/blog-right-sidebar" },
      { title: "No sidebar", link: "/blog/no-sidebar" },
    ],
  },
  {
    title: "Blogs",
    link: "/demo/bag-store/blogs",
  },
  {
    title: "CONTACT",
    link: "/demo/bags/contact",
  },
];

export const mainMenu = [
  {
    title: "home",
    submenu: [
      { title: "Clothing", link: "/layout/clothing" },
      { title: "Grocery", link: "/" },
      { title: "Electronics", link: "/layout/electronics" },
    ],
    link: "/",
  },
  {
    title: "demos",
    submenu: [
      { title: "Shoes", link: "/demo/shoes" },
      { title: "Bags", link: "/demo/bag-store" },
      { title: "Clothing", link: "/demo/clothing" },
    ],
    link: "",
  },
  {
    title: "products",
    link: "#",
    submenu: [
      { title: "4-image", link: "/product/4-image" },
      { title: "Sticky", link: "/product/sticky" },
      {
        title: "Thumbnails",
        submenu: [
          { title: "Right thumbnail", link: "/product/right-thumbnail" },
          { title: "Left thumbnail", link: "/product/left-thumbnail" },
          { title: "Bottom thumbnail", link: "/product/bottom-thumbnail" },
        ],
      },
    ],
  },
  {
    title: "feature",
    link: "#",
    submenu: [
      { title: "Product Box", link: "/feature/product-element/product-box" },
      { title: "Multi slider", link: "/feature/product-element/multi-slider" },
      { title: "Tab", link: "/feature/product-element/tab" },
      {
        title: "Email Template",
        submenu: [{ title: "Template 1", link: "/email-template/1" }],
      },
      {
        title: "Theme Element",
        submenu: [
          { title: "Category", link: "/feature/theme-element/category" },
          {
            title: "Collection Banner",
            link: "/feature/theme-element/collection-banner",
          },
          { title: "Home Slider", link: "/feature/theme-element/home-slider" },
          { title: "Service", link: "/feature/theme-element/service" },
          { title: "Title", link: "/feature/theme-element/title" },
        ],
      },
      {
        title: "shop",
        submenu: [
          { title: "Left Sidebar", link: "/shop/left-sidebar" },
          { title: "Right Sidebar", link: "/shop/right-sidebar" },
          { title: "No Sidebar", link: "/shop/no-sidebar" },
          { title: "Thee Grid", link: "/shop/three-grid" },
          { title: "Six Grid", link: "/shop/six-grid" },
          { title: "List View", link: "/shop/list-view" },
        ],
      },
    ],
  },
  {
    title: "pages",
    link: "#",
    submenu: [
      { title: "Compare", link: "/pages/compare" },
      {
        title: "Account",
        submenu: [
          { title: "Dashboard", link: "/my-account/dashboard" },
          { title: "Orders", link: "/my-account/orders" },
          { title: "Wishlist", link: "/my-account/wishlist" },
          { title: "Settings", link: "/my-account/settings" },
        ],
      },
      { title: "Order Success", link: "/pages/order-success" },
      { title: "404 page", link: "/404" },
      { title: "Collection", link: "/pages/collection" },
    ],
  },
  {
    title: "blog",
    link: "#",
    submenu: [
      { title: "Blog left sidebar", link: "/blog/blog-left-sidebar" },
      { title: "Blog right sidebar", link: "/blog/blog-right-sidebar" },
      { title: "No sidebar", link: "/blog/no-sidebar" },
    ],
  },
];
