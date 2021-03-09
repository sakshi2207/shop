import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: 'Puma',
        logo: '/images/logo1.png',
        description: 'best seller',
        rating: 4.5,
        numReviews: 120,
      },
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Nike Slim Shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Adidas Fit Shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 100,
      countInStock: 20,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Lacoste Free Shirt',
      category: 'Shirts',
      image: '/images/p3.jpg',
      price: 220,
      countInStock: 0,
      brand: 'Lacoste',
      rating: 4.8,
      numReviews: 17,
      description: 'high quality product',
    },
    {
      name: 'Nike Slim Pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 78,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      name: 'Puma Slim Pant',
      category: 'Pants',
      image: '/images/p5.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Adidas Fit Pant',
      category: 'Pants',
      image: '/images/p6.jpg',
      price: 139,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
    {
                    
                    name:"Samsung Galaxy S20 Ultra (Cosmic Gray, 12GB RAM, 128GB Storage)",
                    price:97999.00,
                    category:'Electronics',
                    countInStock: 12,
                    brand: 'Samsung',
                    rating: 4.5,
                    numReviews: 15,
                    description: 'high quality product',
                    image:"https://images-na.ssl-images-amazon.com/images/I/71cD4NUIBWL._SY550_.jpg"
    },
                {
                    
                    name:"Acer Aspire 3 A315-56 15.6-inch Laptop (Intel Core i5-1035G1/8GB/1TB HDD/Window 10, Home, 64Bit/Intel UHD Graphics), Black",
                    price:46990,
                    category:'Electronics',
                    countInStock: 12,
                    brand: 'Acer',
                    rating: 4.5,
                    numReviews: 15,
                    description: 'high quality product',
                    image:"https://images-na.ssl-images-amazon.com/images/I/810mRHoIxML._SX466_.jpg"
                },
                {
            
                    
                    name:"Mi Earphone Basic with Ultra deep bass and mic (Black)",
                    price:399,
                    category:'Mobile Accessries',
                    countInStock: 12,
                    brand: 'Mi',
                    rating: 4.5,
                    numReviews: 15,
                    description: 'high quality product',
                    image:"https://images-na.ssl-images-amazon.com/images/I/71mQ9oKDMLL._SX522_.jpg"
                },
                {
                    
                    name:"React.js Essentials Paperback – Import, 27 August 2015",
                    price:1490,
                    category:'Books',
                    countInStock: 12,
                    brand: 'Book',
                    rating: 2,
                    numReviews: 15,
                    description: 'high quality product',
                    image:"https://images-na.ssl-images-amazon.com/images/I/41-HWOw--cL._SX404_BO1,204,203,200_.jpg"
                },{
                    
                    name:"I Too Had a Love Story Paperback – 6 November 2013",
                    price:179,
                    category:'Books',
                    countInStock: 12,
                    brand: 'Book',
                    rating: 4.5,
                    numReviews: 15,
                    description: 'high quality product',
                    image:"https://images-na.ssl-images-amazon.com/images/I/51JdOfIHZ9L._SX324_BO1,204,203,200_.jpg"
            },
            {
                    
                    name:"Sony Bravia 138.8 cm (55 inches) 4K Ultra HD Smart LED TV KD-55X7002G (Black)",
                    price:63990,category:'Electronics',
                    countInStock: 2,
                    brand: 'Sony',
                    rating: 5,
                    numReviews: 5,
                    description: 'high quality product',
                    image:"https://images-na.ssl-images-amazon.com/images/I/81Nw2ifyBzL._SX569_.jpg"
            }]
 
};
export default data;
