import React, { useState, useEffect } from 'react';
import '../css/Packages.css';
import { Link } from "react-router-dom";
import { FaSpinner } from 'react-icons/fa';

const placeOptions = [
  'All Locations',
  'Coimbatore',
  'Karur',
  'Kotagiri',
  'Aravakurichi',
  'Kulithalai',
  // Add more locations here
];

const packagesData = {
 
   'Aravakurichi': [
    {
      place:'Aravakurichi',

      name: 'ITC-10 Mbps',
      speed: '10 Mbps',
      price: 499,
      imageUrl: '../images/banner/Group 1 copy.jpg',
      con1: 'Unlimited Internet',
      con2: 'Speed Up to 10 Mbps',
      con3: '24/7 Customer Support',
      speeds: 'Addons',
      adcon1: 'IPTV',
      adcon2: 'Voice',

    },
    {
      place:'Aravakurichi',

      name: 'ITC-20 Mbps',
      speed: '50 Mbps',
      price: 699,
      imageUrl: '../images/banner/Group 2 copy.jpg',
      con1: 'Unlimited Internet',
      con2: 'Speed Up to 20 Mbps',
      con3: '24/7 Customer Support',
      speeds: 'Addons',
      adcon1: 'IPTV',
      adcon2: 'Voice',

    },
    {
      place:'Aravakurichi',

      name: 'ITC-75 Mbps',
      speed: '75 Mbps',
      price: 1499,
      imageUrl: '../images/banner/Group 3 copy.jpg',
      con1: 'Unlimited Internet',
      con2: 'Speed Up to 75 Mbps',
      con3: '24/7 Customer Support',
      speeds: 'Free',
      adcon1: 'IPTV',
      adcon2: 'Voice',

    },
   
  ],
  'Kulithalai': [
    {
      place:'coimbatore',
      name: 'Silver',
      speed: '30 Mbps',
      price: 349,
      imageUrl: '../images/banner/Group 1 copy.jpg',
      con1: 'Unlimited Internet',
      con2: 'Speed Up to 30 Mbps',
      con3: '24/7 Customer Support',
      speeds: 'Addons',
      adcon1: 'IPTV',
      adcon2: 'Voice',

    },
    {
      place:'Aravakurichi',

      name: 'Gold',
      speed: '50 Mbps',
      price: 599,
      imageUrl: '../images/banner/Group 2 copy.jpg',
      con1: 'Unlimited Internet',
      con2: 'Speed Up to 50 Mbps',
      con3: '24/7 Customer Support',
      speeds: 'Addons',
      adcon1: 'IPTV',
      adcon2: 'Voice',

    },
    {
      place:'coimbatore',
      name: 'Platinum',
      speed: '100 Mbps',
      price: 699,
      imageUrl: '../images/banner/Group 3 copy.jpg',
      con1: 'Unlimited Internet',
      con2: 'Speed Up to 100 Mbps',
      con3: '24/7 Customer Support',
      speeds: 'Addons',
      adcon1: 'IPTV',
      adcon2: 'Voice',

    },
    {
      place:'coimbatore',

      name: 'Diamond',
      speed: '150 Mbps',
      price: 799,
      imageUrl: '../images/banner/Group 1 copy.jpg',
      con1: 'Unlimited Internet',
      con2: 'Speed Up to 150 Mbps',
      con3: '24/7 Customer Support',
      speeds: 'Addons',
      adcon1: 'IPTV',
      adcon2: 'Voice',

    },
    {
      place:'coimbatore',

      name: 'Diamond Plus',
      speed: '200 Mbps',
      price: 899,
      imageUrl: '../images/banner/Group 2 copy.jpg',
      con1: 'Unlimited Internet',
      con2: 'Speed Up to 200 Mbps',
      con3: '24/7 Customer Support',
      speeds: 'Free',
      adcon1: 'IPTV',
      adcon2: 'Voice',

    },
    {
      place:'coimbatore',

      name: 'Speed',
      speed: '250 Mbps',
      price: 999,
      imageUrl: '../images/banner/Group 3 copy.jpg',
      con1: 'Unlimited Internet',
      con2: 'Speed Up to 250 Mbps',
      con3: '24/7 Customer Support',
      speeds: 'Free',
      adcon1: 'IPTV',
      adcon2: 'Voice',

    },
  ],
  'Coimbatore': [
    {
      place:'coimbatore',
      name: 'Silver',
      speed: '30 Mbps',
      price: 349,
      imageUrl: '../images/banner/Group 1 copy.jpg',
      con1: 'Unlimited Internet',
      con2: 'Speed Up to 30 Mbps',
      con3: '24/7 Customer Support',
      speeds: 'Addons',
      adcon1: 'IPTV',
      adcon2: 'Voice',

    },
    {
      place:'coimbatore',
      name: 'Gold',
      speed: '50 Mbps',
      price: 499,
      imageUrl: '../images/banner/Group 2 copy.jpg',
      con1: 'Unlimited Internet',
      con2: 'Speed Up to 50 Mbps',
      con3: '24/7 Customer Support',
      speeds: 'Addons',
      adcon1: 'IPTV',
      adcon2: 'Voice',

    },
    {
      place:'coimbatore',
      name: 'Platinum',
      speed: '100 Mbps',
      price: 699,
      imageUrl: '../images/banner/Group 3 copy.jpg',
      con1: 'Unlimited Internet',
      con2: 'Speed Up to 100 Mbps',
      con3: '24/7 Customer Support',
      speeds: 'Addons',
      adcon1: 'IPTV',
      adcon2: 'Voice',

    },
    {
      place:'coimbatore',

      name: 'Diamond',
      speed: '200 Mbps',
      price: 899,
      imageUrl: '../images/banner/Group 1 copy.jpg',
      con1: 'Unlimited Internet',
      con2: 'Speed Up to 200 Mbps',
      con3: '24/7 Customer Support',
      speeds: 'Addons',
      adcon1: 'IPTV',
      adcon2: 'Voice',

    },
    {
      place:'coimbatore',

      name: 'Diamond Plus',
      speed: '300 Mbps',
      price: 1299,
      imageUrl: '../images/banner/Group 2 copy.jpg',
      con1: 'Unlimited Internet',
      con2: 'Speed Up to 300 Mbps',
      con3: '24/7 Customer Support',
      speeds: 'Free',
      adcon1: 'IPTV',
      adcon2: 'Voice',

    },
    {
      place:'coimbatore',

      name: 'Speed',
      speed: '500 Mbps',
      price: 1499,
      imageUrl: '../images/banner/Group 3 copy.jpg',
      con1: 'Unlimited Internet',
      con2: 'Speed Up to 500 Mbps',
      con3: '24/7 Customer Support',
      speeds: 'Free',
      adcon1: 'IPTV',
      adcon2: 'Voice',

    },
    // Add more Coimbatore packages here
  ],
  'Karur': [
    {
      place:'Karur',

      name: 'Silver',
      speed: '30 Mbps',
      price: 349,
      imageUrl: '../images/banner/Group 1 copy.jpg',
      con1: 'Unlimited Internet',
      con2: 'Speed Up to 30 Mbps',
      con3: '24/7 Customer Support',
      speeds: 'Addons',
      adcon1: 'IPTV',
      adcon2: 'Voice',

    },
    {
      place:'Karur',

      name: 'Gold',
      speed: '50 Mbps',
      price: 499,
      imageUrl: '../images/banner/Group 2 copy.jpg',
      con1: 'Unlimited Internet',
      con2: 'Speed Up to 50 Mbps',
      con3: '24/7 Customer Support',
      speeds: 'Addons',
      adcon1: 'IPTV',
      adcon2: 'Voice',

    },
    {
      place:'Karur',

      name: 'Platinum',
      speed: '100 Mbps',
      price: 699,
      imageUrl: '../images/banner/Group 3 copy.jpg',
      con1: 'Unlimited Internet',
      con2: 'Speed Up to 100 Mbps',
      con3: '24/7 Customer Support',
      speeds: 'Addons',
      adcon1: 'IPTV',
      adcon2: 'Voice',

    },
    {
      place:'Karur',

      name: 'Diamond',
      speed: '200 Mbps',
      price: 999,
      imageUrl: '../images/banner/Group 1 copy.jpg',
      con1: 'Unlimited Internet',
      con2: 'Speed Up to 200 Mbps',
      con3: '24/7 Customer Support',
      speeds: 'Addons',
      adcon1: 'IPTV',
      adcon2: 'Voice',

    },
    {
      place:'Karur',

      name: 'Diamond Plus',
      speed: '300 Mbps',
      price: 1299,
      imageUrl: '../images/banner/Group 2 copy.jpg',
      con1: 'Unlimited Internet',
      con2: 'Speed Up to 200 Mbps',
      con3: '24/7 Customer Support',
      speeds: 'Free',
      adcon1: 'IPTV',
      adcon2: 'Voice',

    },
    {
      place:'Karur',

      name: 'Speed Plus',
      speed: '500 Mbps',
      price: 1499,
      imageUrl: '../images/banner/Group 3 copy.jpg',
      con1: 'Unlimited Internet',
      con2: 'Speed Up to 500 Mbps',
      con3: '24/7 Customer Support',
      speeds: 'Free',
      adcon1: 'IPTV',
      adcon2: 'Voice',

    },
    // Add more Karur packages here
  ],
  'Kotagiri': [
    {
      place:'Kotagiri',

      name: 'Silver',
      speed: '60 Mbps',
      price: 600,
      imageUrl: '../images/banner/Group 1 copy.jpg',
      con1: 'Unlimited Internet',
      con2: 'Speed Up to 60 Mbps',
      con3: '24/7 Customer Support',
      speeds: 'Addons',
      adcon1: 'IPTV',
      adcon2: 'Voice',

    },
    {
      place:'Kotagiri',
      name: 'Gold',
      speed: '70 Mbps',
      price: 700,
      imageUrl: '../images/banner/Group 2 copy.jpg',
      con1: 'Unlimited Internet',
      con2: 'Speed Up to 70 Mbps',
      con3: '24/7 Customer Support',
      speeds: 'Addons',
      adcon1: 'IPTV',
      adcon2: 'Voice',

    },
    {
      place:'Kotagiri',

      name: 'PLATINUM',
      speed: '100 Mbps',
      price: 1000,
      imageUrl: '../images/banner/Group 3 copy.jpg',
      con1: 'Unlimited Internet',
      con2: 'Speed Up to 100 Mbps',
      con3: '24/7 Customer Support',
      speeds: 'Addons',
      adcon1: 'IPTV',
      adcon2: 'Voice',

    },
  ]
  
  // Define packages for other locations
};

function MyPackages() {
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [packages, setPackages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (selectedLocation === 'All Locations') {
      setTimeout(() => {
      // Show default packages for all locations
      setPackages(packagesData['Coimbatore']);
      setIsLoading(false);
    }, 1000);
    } else {
      setTimeout(() => {
      // Show packages for the selected location
      setPackages(packagesData[selectedLocation] || []);
      setIsLoading(false);
    }, 1000);
    }
  }, [selectedLocation]);

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  return (
    <div className="container packages-container" data-aos="fade-up" data-aos-duration="2000">
      {/* <h1 className='bannercontentone'>Our Packages</h1> */}

      {isLoading && (
        <div className="loading-icon">
 <FaSpinner className="spin" />
         </div>
      )}
      <div className=' head-pac-h'>
        <div className=' gre-box'>
          <h2 className='las-blo-titlessisp'>Choose your location</h2>
          <p className='text-muted locationcontent'> we provide high-speed internet solutions to keep you connected in today's digital world. Whether you're a casual user, a gamer, a business owner, or a streaming enthusiast, we have the perfect internet package to meet your specific needs.</p>

          <div className='allloca'>
          <select value={selectedLocation} onChange={handleLocationChange} className="select-dropdown ">
            {placeOptions.map((place, index) => (
              <option key={index} value={place}>
                {place}
              </option>
            ))}
          </select>
        </div>
        {/* <p className='text-muted locationcontent'> we provide high-speed internet solutions to keep you connected in today's digital world. Whether you're a casual user, a gamer, a business owner, or a streaming enthusiast, we have the perfect internet package to meet your specific needs.</p> */}

        </div>
       
        <button className='btns-greens-third'>choose your package</button>

      </div>

      <div className='services'>
        <div className='row Boxss'>
          {packages.map((pkg, index) => (
            <div key={index} className="servicebox col-lg-4" data-aos="fade-right" data-aos-duration="2000">
              <div className="serviceContent-thiban">
                <div className='des'>
                  <img className="img-fluid" src={pkg.imageUrl} alt={pkg.name} />
                </div>
                <p className="midss-title">{pkg.name}</p>

                <p className="midess-title">{pkg.speed}</p>

                <p className="midesss-title">{pkg.con1}</p>  <hr className='text-muted'></hr>
                <p className="midesss-title">{pkg.con2}</p>  <hr className='text-muted'></hr>
                <p className="midesss-title">{pkg.con3}</p>  <hr className='text-muted'></hr>
                <p className="midess-title">{pkg.speeds}</p><hr className='text-muted'></hr>
                <p className="midesss-title">{pkg.adcon1}</p><hr className='text-muted'></hr>
                <p className="midesss-title">{pkg.adcon2}</p>


                {/* Add other package details here */}
                <p className='pac-amount'> Rs {pkg.price}/<br /><p className='par-package'>Monthly</p></p>
                <div className='buttons'>
                  <button className='btns-greenbox'>
                    <Link className="mlink" to="/contact">
                      subscribe now
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyPackages;
