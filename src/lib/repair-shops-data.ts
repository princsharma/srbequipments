export type ShopMeta = {
  icon: string;
  text: string;
  href?: string;
};

export type RepairShop = {
  id: string;
  rank: string;
  title: string;
  area: string;
  image: string;
  alt: string;
  rating: number;
  meta: ShopMeta[];
  quote: string;
  description: string;
  highlights: string[];
  featured?: boolean;
  showQuoteLink?: boolean;
};

export const REPAIR_SHOPS_HERO =
  "/images/2022/09/best-truck-repair-in-edmonton_image-1.jpg";

export const REPAIR_SHOP_AREAS = [
  { href: "#shop-1", label: "Edmonton", shopId: "shop-1" },
  { href: "#shop-3", label: "Terra Losa", shopId: "shop-3" },
  { href: "#shop-2", label: "Canora", shopId: "shop-2" },
  { href: "#shop-4", label: "Glenora", shopId: "shop-4" },
  { href: "#shop-5", label: "Oliver", shopId: "shop-5" },
  { href: "#shop-6", label: "Woodcroft", shopId: "shop-6" },
  { href: "#shop-7", label: "Caernarvon", shopId: "shop-7" },
  { href: "#shop-8", label: "Glengarry", shopId: "shop-8" },
  { href: "#shop-9", label: "Westwood", shopId: "shop-9" },
  { href: "#shop-10", label: "Maple Ridge", shopId: "shop-10" },
  { href: "#shop-12", label: "Balwin", shopId: "shop-12" },
  { href: "#shop-11", label: "Beverly", shopId: "shop-11" },
  { href: "#shop-13", label: "Bergman", shopId: "shop-13" },
  { href: "#shop-14", label: "Newton", shopId: "shop-14" },
  { href: "#shop-15", label: "Westmount", shopId: "shop-15" },
] as const;

export const REPAIR_SHOPS: RepairShop[] = [
  {
    id: 'shop-1',
    rank: '#1',
    title: 'SRB EQUIPMENT | Truck and Trailer Repair Shop',
    area: 'Edmonton',
    image: '/images/2022/09/SRB-Equipment-Truck-Trailer-repair-shop_image.jpg',
    alt: 'SRB Equipment - Truck & Trailer repair shop',
    rating: 5,
    meta: [
    { icon: 'fa-solid fa-location-dot', text: '98 15304 Yellowhead Trail, Edmonton, AB T5V 1A1, Canada' },
    { icon: 'fa-solid fa-clock', text: 'Mon – Sat: 8:00AM to 5:00PM' },
    { icon: 'fa-solid fa-phone', text: '(780) 878-5221', href: 'tel:+17808785221' }
    ],
    quote: '"SRB is a hidden jewel! This is where I get my CVIP\'s, and any other repairs I need. Shaun has always been very thorough, and would advise if something is close to being replaced. Certainly would recommend this place!"',
    description: 'SRB Equipment team has a wide range of capabilities with the heavy-duty truck, semi-truck, and trailer repair also nationally recognized for its quality and commitment to outstanding customer service. Specializing exclusively on heavy-duty vehicles with complex engineering needs that require expertise not found anywhere else! Reduce your exposure by hiring SRB Equipment to take care of truck repairs from start-up through overhauls or rebuild projects and let them handle anything.',
    highlights: [
    'Offers repairs from the wheels to engine repair',
    'Repairs all makes and model',
    'Fully equipped mobile fleet',
    'Excellent customer service'
    ],
    featured: true,
    showQuoteLink: true,
  },
  {
    id: 'shop-2',
    rank: '#2',
    title: 'Truck Repair Shop Near Me – Canora',
    area: 'Canora',
    image: '/images/2022/09/truck_repair_mechanic_image.jpg',
    alt: 'Truck Repair Mechanic',
    rating: 4.5,
    meta: [
    { icon: 'fa-solid fa-location-dot', text: '153 St NW, Edmonton, AB T5P 2B7, Canada' },
    { icon: 'fa-solid fa-clock', text: 'Mon – Sat: 8:00AM to 5:00PM · Sun: Closed' }
    ],
    quote: '"Good service and very polite peoples and affordable price😊"',
    description: 'A truck repair shop near me offers some of the best services for truck repair. They provide services for fixing the brake, drive lines, and suspension. They also offer commercial inspections for the safety of semi-trucks. Customer service is also good but could be better.',
    highlights: [
    'Not offer mobile service truck',
    'Inspection available',
    'The location is also good'
    ],
  },
  {
    id: 'shop-3',
    rank: '#3',
    title: 'Trailer Repair Shop',
    area: 'Terra Losa',
    image: '/images/2022/09/trailer-repair-shop_image.jpg',
    alt: 'Trailer Repair Shop',
    rating: 4.5,
    meta: [
    { icon: 'fa-solid fa-location-dot', text: '9760 176 St NW, Edmonton, AB T5T 5Z5, Canada' },
    { icon: 'fa-solid fa-clock', text: 'Mon – Sat: 9:00AM to 6:00PM' }
    ],
    quote: '"Quality of work and professionalism is unparalleled. From diagnosis to repaired, in half of the time of the truck shop chain we use to use. Thanks guys for helping us out all the time!!"',
    description: 'They are a newly opened trailer repair shop, opened in 2019. It is a service center dedicated to only trailer repairs. You can get back to the road within the minimum time frame.',
    highlights: [
    'Trailer-dedicated repair shop',
    'New to business',
    'Quick services'
    ],
  },
  {
    id: 'shop-4',
    rank: '#4',
    title: 'Semi Truck Repair Near Me',
    area: 'Glenora',
    image: '/images/2022/09/truck_mechanic_edmonton-_image.jpg',
    alt: 'Semi Truck Repair Edmonton',
    rating: 4.5,
    meta: [
    { icon: 'fa-solid fa-location-dot', text: '138 St NW, Edmonton, AB T5N 2J3, Canada' },
    { icon: 'fa-solid fa-clock', text: 'Monday – Sunday: 9:00AM to 6:00PM' }
    ],
    quote: '"Excellent service. All work is completed in a timely manner and is done with the utmost care. The staff are very knowledgeable and polite."',
    description: 'Best known for providing repairs for semi trucks repair services in Edmonton. They will quickly solve all your semi truck problems with their diagnostic equipment and vast knowledge of semi-duty vehicles. Their customer service is also exceptional.',
    highlights: [
    'Offer service only for semi trucks',
    'Mobile services are not available',
    'Maintenance available'
    ],
  },
  {
    id: 'shop-5',
    rank: '#5',
    title: 'Edmonton Diesel Truck Repair',
    area: 'Oliver',
    image: '/images/2022/09/truck-engine-repair-_image.jpg',
    alt: 'Diesel Truck Repair Edmonton',
    rating: 5,
    meta: [
    { icon: 'fa-solid fa-location-dot', text: '10205 119 St NW, Edmonton, AB T5K 1Z3, Canada' },
    { icon: 'fa-solid fa-clock', text: 'Mon – Sat: 8:00AM to 6:00PM' }
    ],
    quote: '"Very good service. experienced team. Job gets done on time.!!!"',
    description: 'This diesel truck repair shop in Edmonton is always at your service to help you through difficult times. The center has a team of professionals who know to repair diesel trucks completely. They use the latest tools and technology to help you to get back on the road as soon as possible. With a vast knowledge of diesel truck repair, they deserved to be on the list.',
    highlights: [
    'Offers service only for diesel truck',
    'Situated in a prime location',
    'Certified technicians'
    ],
  },
  {
    id: 'shop-6',
    rank: '#6',
    title: 'Truck and Trailer Repair Near Me',
    area: 'Woodcroft',
    image: '/images/2022/09/truck-repair_image.jpg',
    alt: 'Truck and Trailer Repair Edmonton',
    rating: 5,
    meta: [
    { icon: 'fa-solid fa-location-dot', text: '136 St NW, Edmonton, AB T5M 1M3, Canada' },
    { icon: 'fa-solid fa-clock', text: 'Mon – Sat: 8:00AM to 6:00PM' }
    ],
    quote: '"Excellent, great management & staff, extremely knowledgeable and a fair price."',
    description: 'Their extensive service area ensures you get best-in-class service, precisely what you need when you need it. Their comprehensive repair facility is designed to help get you back on the road and keep moving you forward.',
    highlights: [
    'Completer truck and trailer repair',
    'Well-equipped',
    'Impressive Customer service'
    ],
  },
  {
    id: 'shop-7',
    rank: '#7',
    title: 'Diesel Truck Repair Edmonton',
    area: 'Caernarvon',
    image: '/images/2022/09/truck-repair-shop-near-me_image.jpg',
    alt: 'Truck Repair Shop Near ME',
    rating: 4.5,
    meta: [
    { icon: 'fa-solid fa-location-dot', text: '151 Ave NW, Edmonton, AB T5X 1C6, Canada' },
    { icon: 'fa-solid fa-clock', text: 'Mon – Sat: 8:00 AM to 5:00 PM' }
    ],
    quote: '"They deserves 5 stars because the staff was professional and friendly. The work was quick and the pricing was right."',
    description: 'A fully equipped diesel truck repair shop that deals with only diesel trucks. From preventive maintenance to engine repair, they\'ll give the same customer care regardless of the job\'s size. They also offer new and used parts to suit your truck repair needs. Their solid work and dedication make them a contender for the best truck repair in Edmonton.',
    highlights: [
    'Offer service for specific makes and models',
    'Offers services for diesel trucks only',
    'Dedicated and professional staff'
    ],
  },
  {
    id: 'shop-8',
    rank: '#8',
    title: 'Heavy Truck Repair Edmonton',
    area: 'Glengarry',
    image: '/images/2022/09/truck-repair-near-me_image.jpg',
    alt: 'Truck Repair Near Me',
    rating: 5,
    meta: [
    { icon: 'fa-solid fa-location-dot', text: '135 Ave, Edmonton, AB T5E 1N5, Canada' },
    { icon: 'fa-solid fa-clock', text: 'Mon – Sat: 8:00AM to 5:00PM · Sun: Closed' }
    ],
    quote: '"They deserves 5 stars because they are a team of highly professional and talented doctors who understand the needs of their patients"',
    description: 'As one of the services with the best heavy truck repair in Edmonton, they are one of the go-tos when your truck needs highly dedicated work. They\'ll fix your vehicle as efficiently and quickly as possible. They\'ve served Edmonton for around five years, so they know their job.',
    highlights: [
    'Specialized in heavy-duty truck',
    'Not in business for semi-duty truck',
    'If they don\'t have it, they will find it'
    ],
  },
  {
    id: 'shop-9',
    rank: '#9',
    title: 'Truck Mechanic Edmonton',
    area: 'Westwood',
    image: '/images/2022/09/trailer-repair-_image.jpg',
    alt: 'Truck Mechanic Edmonton',
    rating: 5,
    meta: [
    { icon: 'fa-solid fa-location-dot', text: '103 St NW, Edmonton, AB T5G 2J7, Canada' },
    { icon: 'fa-solid fa-clock', text: 'Monday – Sunday: 8:00AM to 5:00PM' }
    ],
    quote: '"A great company to do business with. Lots of experience and great customer service!"',
    description: 'This company employs more than 10+ professionals and offers services all over Edmonton. So if you are looking for a truck repair station to get your truck looked at, this is the one you should be looking for. There is no doubt that you will get good service from here.',
    highlights: [
    'Holds expertise in the semi-duty truck',
    'Offers mobile service in some parts of Edmonton',
    'Professional staff and mechanics'
    ],
  },
  {
    id: 'shop-10',
    rank: '#10',
    title: 'Diesel Engine Repair Edmonton',
    area: 'Maple Ridge',
    image: '/images/2022/09/heavy-duty-truck-repair-_image.jpg',
    alt: 'Heavy Duty Truck Repair',
    rating: 4.5,
    meta: [
    { icon: 'fa-solid fa-location-dot', text: '2 Post Rd NW, Edmonton, AB T6P 1E5, Canada' },
    { icon: 'fa-solid fa-clock', text: 'Mon – Sat: 8:00AM to 6:00PM · Sun: Closed' }
    ],
    quote: '"Awesome guys that are knowledgeable in the business they are in! They care about taking care of their customers and figuring out the problem and then getting you back on the road!"',
    description: 'This truck repair company has been in business for many years and provides various services such as brake jobs, wheel alignment, preventive maintenance, and many more. All you have to do is reach out to them, and their mechanic will contact you soon.',
    highlights: [
    'Offer service for only diesel engine repair',
    '24/7 customer support',
    'Can handle fleet maintenance'
    ],
  },
  {
    id: 'shop-11',
    rank: '#11',
    title: 'Edmonton Truck Repair Shop',
    area: 'Beverly',
    image: '/images/2022/09/diesel-engine-repair-_image.jpg',
    alt: 'Diesel Engine Repair Edmonton',
    rating: 4.5,
    meta: [
    { icon: 'fa-solid fa-location-dot', text: '11611 40 St NW, Edmonton, AB T5W 0Y1, Canada' },
    { icon: 'fa-solid fa-clock', text: 'Mon – Sat: 8:00AM to 6:00PM' }
    ],
    quote: '"Deal with these guys ALL the time. They go above and beyond and their prices are always fair. Very nice people."',
    description: 'They are equipped to handle trucks of all kinds. The center offers engine repair, wheel alignment, filter cleaning, replacement brakes, and general maintenance services. So you see that this center has a lot to offer its customers.',
    highlights: [
    'Offers a wide range of services',
    'Exceptional customer support',
    'Does not provide mobile service truck'
    ],
  },
  {
    id: 'shop-12',
    rank: '#12',
    title: 'Heavy Duty Truck Repair Edmonton',
    area: 'Balwin',
    image: '/images/2022/09/heavy-truck-repair-_image.jpg',
    alt: 'Heavy Truck Repair Edmonton',
    rating: 5,
    meta: [
    { icon: 'fa-solid fa-location-dot', text: '13007-13017 73 St NW, Edmonton, AB T5C 0T6, Canada' },
    { icon: 'fa-solid fa-clock', text: 'Mon – Sat: 8:00AM to 5:00PM' }
    ],
    quote: '"Great service and easy going guys, they get the job done on time and there rates are really good.👍"',
    description: 'Heavy-duty truck repair Edmonton offers high-quality work. Their facilities have been updated to cater to heavy-duty truck repairs and maintenance. Their good customer service and up-to-date tech for better auto care make them one of the options for the best truck repair in Edmonton.',
    highlights: [
    'Offer service only for a heavy-duty trucks',
    'Electrical work is satisfying',
    'Struggle with semi-duty trucks'
    ],
  },
  {
    id: 'shop-13',
    rank: '#13',
    title: 'Commercial Vehicle Inspection Near Me',
    area: 'Bergman',
    image: '/images/2022/09/truck-mechanic_image.jpg',
    alt: 'Complete Truck & Trailer Repair Edmonton',
    rating: 4.5,
    meta: [
    { icon: 'fa-solid fa-location-dot', text: '44 St NW, Edmonton, AB T5W 4W8, Canada' },
    { icon: 'fa-solid fa-clock', text: 'Mon – Sat: 8:00AM to 6:00PM' }
    ],
    quote: '"Great place to bring my truck. Fast, and friendly service. Had an emergency that I needed repaired right away, and they got me in when I arrived."',
    description: 'It is a place that offers complete truck and trailer repair in Edmonton. You can expect high-quality services but with hefty bills. It could be better to say that this repair shop provides high-quality services at affordable rates. They offer services such as truck, trailer, and commercial vehicle inspection.',
    highlights: [
    'Full range of services',
    'Maintenance available',
    'Well-equipped'
    ],
  },
  {
    id: 'shop-14',
    rank: '#14',
    title: 'Edmonton Diesel Truck Repair',
    area: 'Newton',
    image: '/images/2022/09/heavy-duty-truck-repair_edmonton.jpg',
    alt: 'Edmonton Diesel Truck Repair',
    rating: 4.5,
    meta: [
    { icon: 'fa-solid fa-location-dot', text: '53 St NW, Edmonton, AB T5W 3L7, Canada' },
    { icon: 'fa-solid fa-clock', text: 'Mon – Sat: 9:00AM to 6:00PM' }
    ],
    quote: '"They were able to perform the work quickly and kept you up to date. Overall great service! Thank you!"',
    description: 'They perform a wide range of diesel truck repair services on both semi and heavy-duty diesel trucks. Edmonton diesel truck repair makes sure work gets done quickly and correctly. They are a full-service heavy truck shop that handles everything from wheel alignment to suspension, driveline, diagnostics, and more. Lastly, they stand behind their work with customer assistance.',
    highlights: [
    'Offers great customer assistance',
    'No, perform a repair on all make and models',
    'Doesn\'t offer mobile service trucks in Edmonton'
    ],
  },
  {
    id: 'shop-15',
    rank: '#15',
    title: 'Truck Repair in Edmonton',
    area: 'Westmount',
    image: '/images/2022/09/truck_mechanic-in-edmonton-_image.jpg',
    alt: 'Truck Repair in Edmonton',
    rating: 5,
    meta: [
    { icon: 'fa-solid fa-location-dot', text: '10598-10474 123 St NW, Edmonton, AB, Canada' },
    { icon: 'fa-solid fa-clock', text: 'Mon – Sat: 8:00AM to 5:00PM' }
    ],
    quote: '"They always make sure my vehicle is safe and never do any unnecessary work, and my truck is always cleaner leaving there than when I arrived."',
    description: 'It could be a great source of truck repair in Edmonton, with extensive knowledge of semi-duty truck repair. They set their business in the prime location of Edmonton, which can easily be accessible if you need a nearby repair shop. Their inventory is also vast, with parts of heavy-duty makes and models.',
    highlights: [
    'Large Inventory',
    'Shop on prime location',
    'Professional staff'
    ],
  }
];
