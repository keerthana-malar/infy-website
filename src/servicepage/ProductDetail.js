import React from 'react'
import CommonBtns from './CommonBtn'
import ProductContent from './ProductContent'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const {id,cat} = useParams()

  const Laptop = [
    {
      name:"Gaming Laptop",
      img:"/images/desk.webp",
      para:"Dr Bio Polymers have the same functionalities, appearance and feel as conventional polymers, they are durable to protect food Bio-Degradable and keep them fresh so that customers can see their content. A package provides protection, tampering resistance, and special physical, chemical, or biological needs It may bear printed information that can have nutrition facts label and other information about food being offered for sale. In addition, they can be revalued as compost, despite containing organic residues. It does not matter if the film or packaging is contaminated with food, as it can be composted.",
      p1:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p2:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p3:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p4:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p5:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p6:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p7:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p8:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
    },
    {
      name:"Consumer laptops",
      img:"/images/desk.webp",
      para:"Dr Bio Polymers have the same functionalities, appearance and feel as conventional polymers, they are durable to protect food Bio-Degradable and keep them fresh so that customers can see their content. A package provides protection, tampering resistance, and special physical, chemical, or biological needs It may bear printed information that can have nutrition facts label and other information about food being offered for sale. In addition, they can be revalued as compost, despite containing organic residues. It does not matter if the film or packaging is contaminated with food, as it can be composted.",
      p1:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p2:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p3:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p4:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p5:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p6:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p7:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p8:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
    },
    {
      name:"WorkStation",
      img:"/images/desk.webp",
      para:"Dr Bio Polymers have the same functionalities, appearance and feel as conventional polymers, they are durable to protect food Bio-Degradable and keep them fresh so that customers can see their content. A package provides protection, tampering resistance, and special physical, chemical, or biological needs It may bear printed information that can have nutrition facts label and other information about food being offered for sale. In addition, they can be revalued as compost, despite containing organic residues. It does not matter if the film or packaging is contaminated with food, as it can be composted.",
      p1:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p2:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p3:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p4:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p5:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p6:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p7:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p8:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
    }
  ]

  const Desktop = [
    {
      name:"Branded Desktop",
      img:"/images/desk.webp",
      para:"Dr Bio Polymers have the same functionalities, appearance and feel as conventional polymers, they are durable to protect food Bio-Degradable and keep them fresh so that customers can see their content. A package provides protection, tampering resistance, and special physical, chemical, or biological needs It may bear printed information that can have nutrition facts label and other information about food being offered for sale. In addition, they can be revalued as compost, despite containing organic residues. It does not matter if the film or packaging is contaminated with food, as it can be composted.",
      p1:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p2:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p3:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p4:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p5:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p6:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p7:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p8:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
    },
    {
      name:"Assembled Desktop",
      img:"/images/desk.webp",
      para:"Dr Bio Polymers have the same functionalities, appearance and feel as conventional polymers, they are durable to protect food Bio-Degradable and keep them fresh so that customers can see their content. A package provides protection, tampering resistance, and special physical, chemical, or biological needs It may bear printed information that can have nutrition facts label and other information about food being offered for sale. In addition, they can be revalued as compost, despite containing organic residues. It does not matter if the film or packaging is contaminated with food, as it can be composted.",
      p1:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p2:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p3:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p4:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p5:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p6:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p7:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p8:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
    },
    {
      name:"Work Station",
      img:"/images/desk.webp",
      para:"Dr Bio Polymers have the same functionalities, appearance and feel as conventional polymers, they are durable to protect food Bio-Degradable and keep them fresh so that customers can see their content. A package provides protection, tampering resistance, and special physical, chemical, or biological needs It may bear printed information that can have nutrition facts label and other information about food being offered for sale. In addition, they can be revalued as compost, despite containing organic residues. It does not matter if the film or packaging is contaminated with food, as it can be composted.",
      p1:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p2:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p3:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p4:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p5:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p6:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p7:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p8:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
    },
    {
      name:"Gaming Desktop",
      img:"/images/desk.webp",
      para:"Dr Bio Polymers have the same functionalities, appearance and feel as conventional polymers, they are durable to protect food Bio-Degradable and keep them fresh so that customers can see their content. A package provides protection, tampering resistance, and special physical, chemical, or biological needs It may bear printed information that can have nutrition facts label and other information about food being offered for sale. In addition, they can be revalued as compost, despite containing organic residues. It does not matter if the film or packaging is contaminated with food, as it can be composted.",
      p1:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p2:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p3:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p4:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p5:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p6:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p7:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
      p8:"Acts as a protective barrier, preventing contamination and maintaining food hygiene and safety standards.",
    }
  ]

  const HUB = [
    {
      name:"HUB",
      img:"/images/hub.webp",
      para:"Our Website Hub serves as the central nerve center of our online presence, designed to be your go-to destination for accessing a wealth of information, resources, and interactive features. Think of it as the heart of our digital ecosystem, pulsating with the latest updates, featured content, and a seamless navigation experience. ",
      p1:"All pertinent information is neatly organized in one central location, making it easy for users to find what they need without navigating through multiple pages.",
      p2:"Enjoy a user-friendly experience with intuitive navigation features, ensuring that visitors can explore various sections effortlessly.",
      p3:"Discover trending or important content prominently showcased within the hub, offering a quick overview of what's currently relevant.",
      p4:"Stay informed with the latest updates and news, all delivered in real-time within the hub for your convenience.",
      p5:"Engage with the community through interactive elements such as comment sections, polls, and forums, fostering a sense of connection and collaboration.",
      p6:"Tailor your experience with personalization features, allowing you to customize your view based on preferences or areas of interest.",
      p7:"Experience the hub seamlessly across devices, whether you're accessing it from your desktop, tablet, or smartphone.",
      p8:"Dive into specific categories or sections with ease, thanks to quick links and organized menus that enhance your ability to find relevant content swiftly.",
    },

    ]
    const Switch = [
      {
        name:"Switch",
        img:"/images/switch.webp",
        para:"At Infygain Technologies, we understand the critical role that network switches play in the seamless operation of modern businesses. Our commitment is to provide cutting-edge switch solutions that empower your network infrastructure with efficiency, scalability, and security.",
        p1:"We offer a range of switches incorporating the latest technological advancements to ensure optimal performance.",
        p2:"Choose from our selection of managed switches that provide granular control over your network. Set up VLANs, implement Quality of Service (QoS), and monitor network activity with ease. ",
        p3:"Simplify your network setup with PoE switches that deliver power and data over a single cable. Ideal for powering devices like IP cameras, VoIP phones, and wireless access points without the need for additional power sources..",
        p4:"As your business expands, so should your network. Our switches are designed with scalability in mind, allowing you to effortlessly integrate additional switches to accommodate the growing demands of your organization.",
        p5:"Streamline your office network with reliable and high-performance switches that support the connectivity demands of modern businesses.",
        p6:"Create secure and segmented networks for different departments or classes with VLAN-enabled switches.",
        p7:"Power your security cameras with PoE switches, eliminating the need for separate power sources.",
        p8:"Experience improved data transfer speeds with our full-duplex switches that allow simultaneous data sending and receiving.",
      },
  
      ]
      const Router = [
      {
        name:"Router",
        img:"/images/Router.webp",
        para:"Discover the beating heart of your network with our cutting-edge router solutions. We don't just offer routers; we provide gateways to a world where data flows effortlessly, security is paramount, and your connectivity needs are met with precision.",
        p1:"Routers make real-time decisions about the most efficient path for data to travel, facilitating optimal connectivity. ",
        p2:"Experience the internet at the speed of today's demands. Our routers are engineered to deliver swift and reliable connectivity for all your devices. ",
        p3:"Routers use NAT to map private IP addresses to a single public IP, allowing multiple devices to share a single internet connection.",
        p4:"Equipped with firewalls and encryption protocols, routers enhance network security, safeguarding against unauthorized access and cyber threats.",
        p5:"Many modern routers support Wi-Fi, enabling wireless connectivity for a myriad of devices, from smartphones to smart home gadgets.",
        p6:"In offices, routers enable seamless communication among employees and ensure a secure connection to the internet for business operations.",
        p7:"Gamers and streaming enthusiasts benefit from routers that prioritize bandwidth, delivering a smooth and uninterrupted online experience.",
        p8:"Routers are the backbone of home networks, facilitating internet access for various devices such as computers, smartphones, and smart TVs.",
      },
  
      ]
      const Firewall = [
        {
          name:"Firewall",
          img:"/images/firewall.webp",
          para:"In the ever-evolving landscape of digital threats, a firewall stands as a stalwart guardian, defending your digital fortress against malicious intruders. At Infygain Technologies, we recognize the critical role that firewalls play in safeguarding your network's integrity, ensuring a secure environment for your digital operations.",
          p1:"Firewalls meticulously examine incoming and outgoing traffic, allowing or blocking data packets based on pre-established security rules. This ensures that only legitimate and safe connections are permitted.",
          p2:"Ensure secure online transactions and protect customer data on your e-commerce platform with our firewall solutions designed for the unique demands of online businesses.",
          p3:"Our firewalls are equipped with intrusion detection and prevention systems (IDPS) that actively identify and thwart potential threats, safeguarding your network from evolving cyber risks.",
          p4:"Beyond conventional packet filtering, our firewalls delve into the application layer, scrutinizing data at a granular level. This allows for nuanced control over specific applications and services, enhancing security.",
          p5:"Our firewalls leverage cutting-edge technology to detect and mitigate emerging threats, providing real-time protection against the latest cybersecurity challenges.",
          p6:"Managing your network security shouldn't be complex. Our firewalls come with intuitive interfaces, ensuring that even non-technical users can navigate and implement security measures effortlessly.",
          p7:"Safeguard sensitive corporate data and communications with our enterprise-grade firewalls, securing the backbone of your business operations.",
          p8:"Protect student and staff information from potential cyber threats with robust firewall solutions tailored for educational environments.",
        },
    
        ]
        const EndPointSecurity = [
          {
            name:"End Point Security",
            img:"/images/End Point Security.webp",
            para:"Endpoint Security is the first and last line of defense against cyber threats. It revolves around safeguarding every device connected to a network - be it laptops, smartphones, or Internet of Things (IoT) devices - from potential cybersecurity risks. At Infygain Technologies, we understand that the strength of your digital fortress lies in the security of every endpoint.",
            p1:"Our advanced Endpoint Security solutions go beyond traditional antivirus measures. With sophisticated threat detection algorithms and real-time analysis, we identify and neutralize both known and emerging threats.",
            p2:"Take control of your digital landscape effortlessly. Our user-friendly interface allows centralized management of security policies, updates, and configurations across all your endpoints.",
            p3:"Stay one step ahead with our real-time monitoring capabilities. We actively identify and respond to potential threats, ensuring a proactive defense against evolving cyber risks.",
            p4:"Our solutions leverage the latest technologies to detect and mitigate emerging threats, providing real-time protection against the ever-evolving cybersecurity landscape.",
            p5:"Tailor security policies to align with your unique business requirements. From restricting access to certain websites to prioritizing critical applications, our solutions offer flexibility.",
            p6:"Managing your endpoint security shouldn’t be complex. Our solutions come with intuitive interfaces, ensuring that even non-technical users can navigate and implement security measures effortlessly.",
            p7:"Secure patient records and medical devices against cyber threats, ensuring patient confidentiality and compliance with healthcare regulations.",
            p8:"Safeguard financial transactions, customer data, and sensitive information from potential cyberattacks in the financial sector.",
          },
      
          ]
          const Analog = [
            {

              name:"Analog",
              img:"/images/desk.webp",
              para:"Welcome to Infygain Technologies, your premier destination for top-notch Analog surveillance solutions. At Infygain Technologies, we pride ourselves on offering a range of Analog products that combine simplicity, reliability, and clarity for unparalleled security. Here's why our Analog solutions stand out",
              p1:"Immerse yourself in timeless surveillance with our range of Analog cameras.",
              p2:"Experience clarity in every frame, capturing crucial details with precision.",
              p3:"Explore our Analog electronics that form the backbone of reliable surveillance systems.",
              p4:"Benefit from tried-and-true technology that has stood the test of time.",
              p5:"Our Analog solutions are known for their durability and reliability, ensuring constant protection.",
              p6:"Navigate your security needs effortlessly with user-friendly Analog systems.",
              p7:"Trust in the clarity of Analog technology, capturing every moment with precision.",
              p8:"Secure your space with confidence using the best Analog solutions at Infygain Technologies.",

              name:"Fiber",
              img:"/images/fibre.webp",
              para:"At Infygain Technologies, we believe that the backbone of modern connectivity is built on the speed and reliability of fiber optics. As pioneers in the field, we are committed to delivering state-of-the-art fiber solutions that transform the way you connect, communicate, and collaborate.",
              p1:"Fiber optics boast unparalleled data transfer speeds, making them the ideal choice for businesses, homes, and industries where speed is of the essence.",
              p2:"Say goodbye to interruptions and signal degradation. Fiber optics are resistant to electromagnetic interference, ensuring a stable and reliable connection, even over long distances.",
              p3:"The incredible bandwidth capacity of fiber optics means you can handle large volumes of data simultaneously without compromising on speed or quality.",
              p4:"Invest in the future of connectivity. Fiber optics are not just meeting today's demands; they are ready to support the ever-increasing data needs of tomorrow.",
              p5:"Experience the internet like never before with our lightning-fast fiber internet services. Whether at home or in the office, enjoy seamless streaming, quick downloads, and lag-free online experiences.",
              p6:"Elevate your business operations with our business-grade fiber solutions. From enhanced communication to efficient data management, fiber is the key to unlocking your business's full potential.",
              p7:"Upgrade your network infrastructure with our cutting-edge fiber optic cabling solutions. Ensure your data travels at the speed of light within your organization.",
              p8:"Transform your telecom network with the speed and reliability of fiber optics.",

            },
            ]
              const IP = [
                {
                  name:"IP",
                  img:"/images/desk.webp",
                  para:"Welcome to Infygain Technologies, where innovation meets security excellence with our cutting-edge IP surveillance solutions. Discover the power of Internet Protocol technology that elevates your surveillance experience. Here's why our IP solutions stand out:",
                  p1:"Step into the future with high-definition IP cameras for crystal-clear surveillance.",
                  p2:"Experience advanced features, including remote access and smart analytics.",
                  p3:"Enjoy superior image quality with our high-definition IP cameras.",
                  p4:"Stay connected and in control with remote access to your surveillance system.",
                  p5:"Benefit from smart analytics that enhance the efficiency and effectiveness of your security.",
                  p6:"Secure your space with our IP DVR and NVR systems, offering seamless recording and playback capabilities.",
                  p7:"Harness the power of IP technology for efficient storage and retrieval of surveillance footage.",
                  p8:"Transform your telecom network with the speed and reliability of fiber optics.",
                },
            
                ]
  // Laptop
  const GamingLaptop = Laptop.filter((val, index) => (
    val.name === "Gaming Laptop"
  ));
  const Consumerlaptops = Laptop.filter((val, index) => (
    val.name === "Consumer laptops"
  ));
  const WorkStation = Laptop.filter((val, index) => (
    val.name === "WorkStation"
  ));

  // Desktop
  const BrandedDesktop = Desktop.filter((val, index) => (
    val.name === "Branded Desktop"
  ));
  const AssembledDesktop = Desktop.filter((val, index) => (
    val.name === "Assembled Desktop"
  ));
  const WorkStationDesktop = Desktop.filter((val, index) => (
    val.name === "Work Station"
  ));
  const GamingDesktop = Desktop.filter((val, index) => (
    val.name === "Gaming Desktop"
  ));
  return (
    <div className='container'>
                <div className= "opaque1">
                <div className='row overall'>
                    <div className='col-md-4' >
                        <CommonBtns id={id} cat={cat}/>
                    </div> 
                    
                    {/* laptop */}
                    {
                      id==="GamingLaptop" &&
                      GamingLaptop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="Consumerlaptops" &&
                      Consumerlaptops.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="WorkStation" &&
                      WorkStation.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }

                    {/* desktop */}
                    {
                      id==="BrandedDesktop" &&
                      BrandedDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="AssembledDesktop" &&
                      AssembledDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="WorkStationDesktop" &&
                      WorkStationDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="GamingDesktop" &&
                      GamingDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }

                    {/* networking */}
                    {
                      id==="HUB" &&
                      HUB.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="Switch" &&
                      Switch.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="Router" &&
                      Router.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="Firewall" &&
                      Firewall.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="EndPointSecurity" &&
                      EndPointSecurity.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="Fiber" &&
                      Fiber.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
            
                    {/* Cctv */}
                    {
                      id==="Analog" &&
                      Analog.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="IP" &&
                      IP.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="DVR" &&
                      GamingDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="NVR" &&
                      GamingDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="360" &&
                      GamingDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="PTZ" &&
                      GamingDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
            
                    {/* Accessories */}
                    {
                      id==="RAM" &&
                      GamingDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="HDD,SSD" &&
                      GamingDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="KeyBoard" &&
                      GamingDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="Mouse,Mointer" &&
                      GamingDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="Cabinet" &&
                      GamingDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="MotherBoard" &&
                      GamingDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="SMBS" &&
                      GamingDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="Cables,Charger" &&
                      GamingDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="Connector,Convertor" &&
                      GamingDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
            
                {/* Projectors */}
                  {
                      id==="LCD" &&
                      GamingDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="LED" &&
                      GamingDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="SmartProjector" &&
                      GamingDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }

                     {/* TV */}
                  {
                      id==="AndriodTV" &&
                      GamingDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="SmartTV" &&
                      GamingDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }


                      {/* printer */}
                      {
                      id==="Laser" &&
                      GamingDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="Thermal" &&
                      GamingDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="Color" &&
                      GamingDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="MultiFunction" &&
                      GamingDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="DotMatrix" &&
                      GamingDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }

                    
                      {/* Scanner */}
                      {
                      id==="Flatbed" &&
                      GamingDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="Vertical" &&
                      GamingDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }

                    {/* InteractivePanel */}
                  {
                      id==="InteractivePanel65" &&
                      GamingDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="InteractivePanel75" &&
                      GamingDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {/*  UPS */}
                  {
                      id==="Inventor" &&
                      GamingDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="OnlineUPS" &&
                      GamingDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    
                      {/*  WIFI */}
                  {
                      id==="AccessPointController" &&
                      GamingDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="Wifi-5" &&
                      GamingDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="Wifi-6" &&
                      GamingDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }

                     {/*  InterCom */}
                  {
                      id==="EPABX" &&
                      GamingDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="IPPBX" &&
                      GamingDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                </div>
                </div>
            </div>
  )
}

export default ProductDetail