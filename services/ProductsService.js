const PRODUCTS = [
   {
      id: 1,
      name: "Timberland Classic",
      price: 120,
      image: require("../assets/timberland1.jpg"),
      description:
         "THE original waterproof boot. Essential features include 400 grams of warm, down-free PrimaLoft insulation, a padded collar for a comfortable fit around the ankle, and a rubber lug outsole for traction",
   },
   {
      id: 2,
      name: "Calvin Klein",
      price: 169,
      image: require("../assets/calvinklein1.jpg"),
      description:
         "In purchasing these boots, you are supporting more responsible leather production through the Leather Working Group.",
   },
   {
      id: 3,
      name: "Timberland Euro Sprint",
      price: 145,
      image: require("../assets/timberlandeurosprint.jpg"),
      description:
         "Men's Euro Sprint Hiker is crafted using premium Better Leather, sourced from a sustainable tannery rated Silver for its environmental processes. Rugged and comfortable, this hiker is built for enhanced traction on a range of surfaces.",
   },
   {
      id: 4,
      name: "Under Armor MG",
      price: 219,
      image: require("../assets/underarmormg.jpg"),
      description:
         "UA tooks one of our best, most durable, and crazy-comfortable tactical boots up a notch with Micro G® midsole cushioning you'll appreciate more the longer you're on your feet.​",
   },
   {
      id: 5,
      name: "Dr Martens",
      price: 276,
      image: require("../assets/drmartens.jpg"),
      description:
         "It was in the 70s that we created our square-toe last — retuning the distinctive round silhouette that has become the DM's signature. These new 2796 Chelsea boots take inspiration from those original archive designs, but are set on a new narrower, sleeker square last to sharpen up this classic silhouette.",
   },
   {
      id: 6,
      name: "Adidas AlphaBoost",
      price: 128,
      image: require("../assets/adidasalphaboost.jpg"),
      description:
         "Step up your weekend look in these adidas Alphaboost shoes. Lace them up and hit the town. A Bounce midsole makes the ride soft and springy",
   },
   {
      id: 7,
      name: "Adidas Racer",
      price: 174,
      image: require("../assets/adidasracer.jpg"),
      description:
         "Bring the comfort and athletic style of running footwear to your everyday look in these adidas shoes. Step through your day confidently with a snug fit and a lightweight midsole that cushions your feet with every step",
   },
   {
      id: 8,
      name: "Adidas Gazele",
      price: 79,
      image: require("../assets/adidasgazele.jpg"),
      description:
         "A revival of the Gazelle Indoor sneakers from 1979, these adidas shoes have all the details that soccer fans, indie rockers and sneakerheads have loved for decades",
   },
   {
      id: 9,
      name: " Nike AirMax 2017",
      price: 289,
      image: require("../assets/nikeairmax2017.jpg"),
      description:
         "The Nike Air Max 2017 delivers the plush sensation you love with a full-length Max Air unit. The upper is seamlessly constructed with zonal support and ventilation while molded foam wraps your mid-foot and heel for secure comfort",
   },
   {
      id: 10,
      name: "Nike AirMax 90",
      price: 163,
      image: require("../assets/nikeairmax2017.jpg"),
      description:
         "Nothing as fly, nothing as comfortable, nothing as proven. The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details. Classic colours celebrate your fresh look while Max Air cushioning adds comfort to the journey",
   },
   {
      id: 11,
      name: "Adidas Adilette",
      price: 49,
      image: require("../assets/adidasadilette.jpg"),
      description:
         " They let air flow while sitting securely on your feet. These adidas sandals combine the comfort of iconic Adilette slides with a stay-put fit that takes you from the locker room to your favorite lunch spot to a lazy day at the beach",
   },
   {
      id: 12,
      name: "Nike AirMax",
      price: 49,
      image: require("../assets/nikeairmax.jpg"),
      description:
         "Air Max style gets a boost of vitamin D. These sunny sandals retain the visible Nike Air unit and plenty of padding while letting those toes be free. Plus, a mesh upper keeps you cool in both looks and feel",
   },
   {
      id: 13,
      name: "Replay sandals",
      price: 93,
      image: require("../assets/replay.jpg"),
      description:
         "Men's SPACE BASE sandals with chunky outsole, fastening with plastic ring, and logo on the back",
   },
   {
      id: 14,
      name: "Slazenger sandal",
      price: 37,
      image: require("../assets/slazenger.jpg"),
      description:
         "The Slazenger Wave Sandals Mens are perfect to wear around the beach or swimming pool, with a textured foam bottom for comfort and grip",
   },
   {
      id: 15,
      name: "Timberland Lincoln",
      price: 73,
      image: require("../assets/timberlandlincoln.jpg"),
      description:
         "This casual men's sandal has plenty of cushioning in the footbed and midsole, as well as a convenient hook-and-loop closure. The sandal is crafted using premium leather and a ReBOTL™ fabric lining",
   },
]

export function getProducts(){
    return PRODUCTS;
}

export function getProduct(id){
    return PRODUCTS.find((product) => product.id == id);
}