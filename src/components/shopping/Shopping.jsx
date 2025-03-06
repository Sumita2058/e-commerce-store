
import { img1, img10, img2, img4, img3, img8, img9 } from "../../image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
  { src: img1, alt: "Long Pant", name: "Long Pant", price: "Rs.5000" },
  { src: img2, alt: "Baggy Pant", name: "Baggy Pant", price: "Rs.3000" },
  { src: img3, alt: "Dress", name: "Dress", price: "Rs.3000" },
  { src: img4, alt: "Sweater", name: "Sweater", price: "Rs.3000" },
  { src: img8, alt: "Long Pant", name: "Long Pant", price: "Rs.3000" },
  { src: img9, alt: "Long Pant", name: "Long Pant", price: "Rs.3000" },
  { src: img10, alt: "Long Pant", name: "Long Pant", price: "Rs.3000" },
];

const Shopping = () => {

  function handleAddToCart(index) {
    let products = [];

    // Get the current products in the cart from localStorage
    if (localStorage.getItem('products')) {
      products = JSON.parse(localStorage.getItem('products'));
    }

    // Add the new product with the corresponding index (productId)
    products.push({
      productId: index + 1,  // Use the index + 1 to represent productId
      image: items[index].src, // Store the image link
    });

    // Store the updated list of products in localStorage
    localStorage.setItem('products', JSON.stringify(products));
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        <div className="col-span-6">
          <h1 className="text-2xl font-bold">New Arrivals</h1>
          <span className="text-gray-500">A trendy and chic style</span>
        </div>
        <div className="col-span-6 text-md text-gray-500">
          <p>
            Clothing is a form of self-expression. Choosing outfits that reflect
            your personal style can make you feel more authentic.
          </p>
        </div>
      </div>
      <div className="p-4 max-w-800 overflow-hidden">
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index} className="relative  rounded-2xl max-w-120">
              <img
                src={item.src}
                alt={item.alt}
                className="h-100 w-200 object-cover p-4 mx-auto"
              />
              <div className="gap-2">
                <span className="bg-orange-500 inset-4 top-86 flex items-center h-10 font-bold absolute p-4">
                  <button onClick={() => handleAddToCart(index)} className="p-8">
                    Add to Cart
                  </button>
                </span>
                <p className="font-bold px-4 text-left">{item.name}</p>
                {item.price && (
                  <h1 className="text-black text-left ml-4">{item.price}</h1>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Shopping;
