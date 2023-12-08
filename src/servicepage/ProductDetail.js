import React from 'react'
import CommonBtns from './CommonBtn'
import ProductContent from './ProductContent'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const {id,cat} = useParams()

  const Laptop = [
    {
      name:"Gaming Laptop",
      img:"/images/gaming-laptop-vector.webp",
      link:"https://infygain.co.in/onlinestore/products/ca/149",
      para:"Welcome to Infygain Technologies, where the world of gaming meets cutting-edge technology. Immerse yourself in an unparalleled gaming experience with our collection of the best Gaming Laptops, meticulously chosen to redefine your gaming adventures.",
      p1:" At Infygain Technologies, we understand the demands of avid gamers. Our meticulously selected best Gaming Laptops deliver power-packed performance, ensuring smooth gameplay, stunning graphics, and lightning-fast responsiveness.",
      p2:"Experience a superior gaming experience with the high-performance components integrated into our best Gaming Laptops. From powerful processors and advanced graphics cards to high refresh rate displays, our laptops are designed to meet the demands of modern gaming.",
      p3:" Enjoy gaming on the go with the sleek and portable design of our best Gaming Laptops. Whether you're a professional gamer, a content creator, or a casual player, our laptops offer the perfect blend of style and performance for your gaming lifestyle.",
      p4:"Choose from our versatile range of Gaming Laptops that cater to various gaming preferences and requirements. Whether you prefer intense multiplayer battles, immersive single-player experiences, or content creation, our collection includes the best options to suit diverse gaming needs.",
      p5:" Explore a comprehensive range of Gaming Laptops with the best technology for various gaming setups.",
      p6:" Rely on our knowledgeable team for expert advice on selecting the best Gaming Laptop based on your specific gaming requirements.",
      p7:"Join our satisfied customers who trust in our commitment to providing the best in Gaming Laptop technology and service.",
      p8:"Elevate your gaming experience with the best Gaming Laptops available at Infygain Technologies.",
    },
    {
      name:"Consumer laptops",
      img:"/images/consumer-laptop-vector.webp",
      link:"https://infygain.co.in/onlinestore/products/ca/149",
      para:" Welcome to Infygain Technologies, where cutting-edge technology meets consumer-friendly innovation. Dive into the world of superior computing with our collection of the best Consumer Laptops, meticulously chosen to deliver an exceptional user experience for your everyday needs.",
      p1:"At Infygain Technologies, we understand the importance of a laptop that effortlessly blends performance and user-friendly features. Our carefully selected best Consumer Laptops are designed to provide seamless performance for various tasks, from work to entertainment.",
      p2:"Experience powerful computing with the high-speed performance of our best Consumer Laptops. Whether you're multitasking, streaming, or working on creative projects, our laptops are equipped with advanced processors to handle it all with ease.",
      p3:"Opt for sleek design and portable convenience with our best Consumer Laptops. Perfect for users on the go, our laptops offer a blend of style and functionality, ensuring you can take your computing power wherever life takes you.",
      p4:"Choose from our versatile range of Consumer Laptops that cater to various computing preferences. Whether you need a laptop for productivity, entertainment, or a bit of both, our collection includes the best options to suit diverse consumer needs.",
      p5:"Explore a comprehensive range of Consumer Laptops with the best technology for various user setups.",
      p6:"Rely on our knowledgeable team for expert advice on selecting the best Consumer Laptop based on your specific requirements.",
      p7:"Join our satisfied customers who trust in our commitment to providing the best in Consumer Laptop technology and service.",
      p8:"Elevate your everyday computing experience with the best Consumer Laptops available at Infygain Technologies.",
    },
    {
      name:"WorkStation",

      img:"/images/laptop workstation.webp",

//       img:"/images/workstation vector.webp",
      link:"https://infygain.co.in/onlinestore/products/ca/149",

      para:"Welcome to Infygain Technologies, where we redefine productivity and performance in the world of professional computing. Elevate your work experience with our collection of the best Workstation Laptops, meticulously chosen to meet the demanding needs of modern professionals.",
      p1:"At Infygain Technologies, we understand the requirements of professionals who need robust computing power. Our carefully selected best Workstation Laptops deliver unparalleled performance, ensuring seamless multitasking, complex computations, and resource-intensive tasks are handled with ease.",
      p2:"Experience professional excellence with the high-end components integrated into our best Workstation Laptops. From powerful processors and dedicated graphics cards to extensive RAM and storage options, our laptops are designed to meet the demands of professional workflows.",
      p3:"Enjoy maximum productivity with the precision engineering of our best Workstation Laptops. Whether you're a content creator, designer, engineer, or any other professional, our laptops offer the precision and reliability needed for your critical tasks.",
      p4:"Choose from our versatile range of Workstation Laptops that cater to various professional settings and requirements. Whether you're working with graphic design, 3D modeling, video editing, or data analysis, our collection includes the best options to suit diverse workstation needs.      ",
      p5:"Explore a comprehensive range of Workstation Laptops with the best technology for various professional setups.",
      p6:" Rely on our knowledgeable team for expert advice on selecting the best Workstation Laptop based on your specific professional requirements.",
      p7:"Join our satisfied customers who trust in our commitment to providing the best in Workstation Laptop technology and service.",
      p8:"Elevate your professional computing experience with the best Workstation Laptops available at Infygain Technologies.",
    }
  ]

  const Desktop = [
    {
      name:"Branded Desktop",
      img:"/images/branded-desktop.webp",
      link:"https://infygain.co.in/onlinestore/products/ca/148",
      para:"Welcome to Infygain Technologies, where top-tier technology meets unparalleled performance. Explore the world of computing excellence with our collection of the best Branded Desktops, meticulously chosen to deliver power, reliability, and innovation for your computing needs",
      p1:"At Infygain Technologies, we understand the importance of a desktop that exceeds expectations. Our carefully selected best Branded Desktops offer unparalleled performance, ensuring smooth multitasking, fast data processing, and optimal efficiency for both personal and professional use.",
      p2:"Experience dependable computing with the high-quality components integrated into our best Branded Desktops. From advanced processors and efficient RAM to reliable storage solutions, our desktops are designed to meet the demands of modern computing tasks.",
      p3:"Enjoy innovative design and robust solutions with our best Branded Desktops. Whether you're a professional, creative, or a home user, our desktops offer a blend of style and functionality, ensuring they seamlessly fit into your workspace.",
      p4:"Choose from our versatile range of Branded Desktops that cater to various computing preferences and requirements. Whether you need a desktop for work, entertainment, or creative endeavors, our collection includes the best options to suit diverse desktop computing needs.",
      p5:"Explore a comprehensive range of Branded Desktops with the best technology for various computing setups.",
      p6:"Rely on our knowledgeable team for expert advice on selecting the best Branded Desktop based on your specific computing requirements.",
      p7:"Join our satisfied customers who trust in our commitment to providing the best in Branded Desktop technology and service.",
      p8:"Elevate your desktop computing experience with the best Branded Desktops available at Infygain Technologies.",
    },
    {
      name:"Assembled Desktop",

      img:"/images/Assembled-desktop-vector.webp",

//       img:"/images/desk.webp",
      link:"https://infygain.co.in/onlinestore/products/ca/148",

      para:"Welcome to Infygain Technologies, where we empower you to create a personalized computing solution. Dive into the world of customization and performance with our collection of the best Assembled Desktops, meticulously chosen to offer flexibility, power, and the freedom to tailor your desktop to your exact specifications.",
      p1:"At Infygain Technologies, we recognize that every user has unique computing needs. Our carefully selected best Assembled Desktops provide the ultimate flexibility, allowing you to choose components that suit your specific requirements and preferences.",
      p2:"Experience the freedom to select high-performance components for your best Assembled Desktop. From advanced processors and powerful graphics cards to customized RAM and storage solutions, our desktops are designed to cater to your individual computing demands.",
      p3:"Enjoy the flexibility of design and easy upgradability with our best Assembled Desktops. Whether you're a gaming enthusiast, a content creator, or a professional, our desktops offer the versatility to adapt to evolving technologies and your changing computing needs.",
      p4:"Choose from our versatile range of Assembled Desktops that cater to various computing preferences and requirements. Whether you need a desktop for gaming, creative work, or professional tasks, our collection includes the best options to suit diverse desktop computing needs.",
      p5:"Explore a comprehensive range of Assembled Desktops with the best technology for various computing setups.",
      p6:"Rely on our knowledgeable team for expert advice on selecting the best Assembled Desktop based on your specific computing requirements.",
      p7:" Join our satisfied customers who trust in our commitment to providing the best in Assembled Desktop technology and service.",
      p8:" Craft your perfect computing experience with the best Assembled Desktops available at Infygain Technologies.  ",
    },
    {
      name:"Work Station",
      img:"/images/workstation vector.webp",
      link:"https://infygain.co.in/onlinestore/products/ca/148",
      para:"Welcome to Infygain Technologies, where we redefine professional computing excellence. Unleash unparalleled power and performance with our collection of the best Workstation Desktops, meticulously chosen to meet the demands of your most intensive tasks and workflows.",
      p1:" At Infygain Technologies, we understand the critical nature of professional tasks. Our carefully selected best Workstation Desktops offer the pinnacle of performance, ensuring seamless execution of complex computations, rendering, and data-intensive applications.",
      p2:"Experience professional-grade computing with the high-end components integrated into our best Workstation Desktops. From powerful processors and professional-grade graphics cards to extensive RAM and storage options, our desktops are designed to handle the demands of modern professional workflows.",
      p3:" Enjoy maximum productivity with the precision engineering of our best Workstation Desktops. Whether you're a content creator, designer, engineer, or any other professional, our desktops offer the precision and reliability needed for your critical tasks.",
      p4:"Choose from our versatile range of Workstation Desktops that cater to various professional settings and requirements. Whether you're working with graphic design, 3D modeling, video editing, or data analysis, our collection includes the best options to suit diverse workstation needs.",
      p5:" Explore a comprehensive range of Workstation Desktops with the best technology for various professional setups.",
      p6:"Craft your perfect computing experience with the best Assembled Desktops available at Infygain Technologies.  ",
      p7:" Rely on our knowledgeable team for expert advice on selecting the best Workstation Desktop based on your specific professional requirements.",
      p8:" Elevate your professional computing experience with the best Workstation Desktops available at Infygain Technologies.",
    },
    {
      name:"Gaming Desktop",

      img:"/images/gaming-desktop-vector.webp",

//       img:"/images/gaming-laptop-vector.webp",
      link:"https://infygain.co.in/onlinestore/products/ca/148",

      para:" Welcome to Infygain Technologies, where the world of gaming meets cutting-edge technology. Elevate your gaming experience to new heights with our collection of the best Gaming Desktops, meticulously chosen to deliver unrivaled performance, stunning graphics, and a seamless gaming adventure",
      p1:"At Infygain Technologies, we understand the demands of avid gamers. Our carefully selected best Gaming Desktops deliver power-packed performance, ensuring smooth gameplay, stunning graphics, and lightning-fast responsiveness.",
      p2:"Experience gaming prowess with the high-performance components integrated into our best Gaming Desktops. From advanced processors and top-tier graphics cards to high-speed RAM and storage options, our desktops are designed to meet the demands of modern gaming.",
      p3:"Immerse yourself in gaming ambiance with the sleek design and customizable RGB lighting of our best Gaming Desktops. Whether you're a casual gamer or a competitive enthusiast, our desktops offer style and personalization to enhance your gaming setup.",
      p4:"Choose from our versatile range of Gaming Desktops that cater to various gaming preferences and requirements. Whether you prefer high-octane multiplayer battles, immersive single-player experiences, or content creation, our collection includes the best options to suit diverse gaming needs.",
      p5:" Explore a comprehensive range of Gaming Desktops with the best technology for various gaming setups.",
      p6:" Rely on our knowledgeable team for expert advice on selecting the best Gaming Desktop based on your specific gaming requirements.",
      p7:"Join our satisfied customers who trust in our commitment to providing the best in Gaming Desktop technology and service",
      p8:"Elevate your gaming experience with the best Gaming Desktops available at Infygain Technologies.  ",
    }
  ]

  const HUB = [
    {
      name:"HUB",
      img:"/images/hub vector.webp",
      link:"https://infygain.co.in/onlinestore/products/ca/178",
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
        img:"/images/switch vector.webp",
        link:"https://infygain.co.in/onlinestore/products/ca/178",
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
        img:"/images/router-vector.webp",
        link:"https://infygain.co.in/onlinestore/products/ca/178",
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
          link:"https://infygain.co.in/onlinestore/products/ca/178",
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
            img:"/images/endpoint vector.webp",
            link:"https://infygain.co.in/onlinestore/products/ca/178",
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

              img:"/images/vector for analog-01.jpg",
//               para:"Welcome to Infygain Technolog, your premier destination for top-notch Analog surveillance solutions. At Infygain Technologies, we pride ourselves on offering a range of Analog products that combine simplicity, reliability, and clarity for unparalleled security. Here's why our Analog solutions stand out",

//               img:"/images/desk.webp",
              link:"https://infygain.co.in/onlinestore/products/ca/152",
              para:"Welcome to Infygain Technologies, your premier destination for top-notch Analog surveillance solutions. At Infygain Technologies, we pride ourselves on offering a range of Analog products that combine simplicity, reliability, and clarity for unparalleled security. Here's why our Analog solutions stand out",

              p1:"Immerse yourself in timeless surveillance with our range of Analog cameras.",
              p2:"Experience clarity in every frame, capturing crucial details with precision.",
              p3:"Explore our Analog electronics that form the backbone of reliable surveillance systems.",
              p4:"Benefit from tried-and-true technology that has stood the test of time.",
              p5:"Our Analog solutions are known for their durability and reliability, ensuring constant protection.",
              p6:"Navigate your security needs effortlessly with user-friendly Analog systems.",
              p7:"Trust in the clarity of Analog technology, capturing every moment with precision.",
              p8:"Secure your space with confidence using the best Analog solutions at Infygain Technologies.",
            }]
              const Fiber =[
              {
              name:"Fiber",
              img:"/images/fibres.webp",
              link:"https://infygain.co.in/onlinestore/products/ca/178",
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
                  link:"https://infygain.co.in/onlinestore/products/ca/152",
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



                const NVR = [
                  {
                    name:"NVR",

                    img:"/images/NVRvector.webp",

//                     img:"/images/desk.webp",
                    link:"https://infygain.co.in/onlinestore/products/ca/152",

                    para:" Welcome to NVR, where cutting-edge technology meets comprehensive security solutions. Explore the pinnacle of video recording with our collection of the best NVR (Network Video Recorder) options, meticulously chosen to enhance and optimize your CCTV system.",
                    p1:"At Infygain Technologies, we recognize the pivotal role of an NVR in modern CCTV setups. Our carefully selected best NVR solutions offer advanced video management features, ensuring that your surveillance system operates at its peak with efficient recording and playback capabilities.",
                    p2:"Experience crystal-clear footage with our best NVR solutions. Designed to support high-resolution cameras, our NVRs capture every detail, providing you with clear and precise video recordings for security monitoring and analysis.",
                    p3:"Opt for remote access and monitoring with the network integration features of our best NVR solutions. Stay connected to your CCTV system from anywhere, allowing you to monitor your property or business remotely for added peace of mind.",
                    p4:"Choose scalable solutions for growing security needs with our best NVR options. Our recorders are designed to accommodate an increasing number of cameras and support additional features, ensuring your CCTV system remains effective as your security requirements expand.",
                    p5:"Explore a comprehensive range of NVR solutions with the best technology for various surveillance setups.",
                    p6:"Rely on our knowledgeable team for expert advice on selecting the best NVR based on your specific CCTV system requirements.",
                    p7:"Join our satisfied customers who trust in our commitment to providing the best in NVR technology and service.",
                    p8:"Elevate your CCTV system's capabilities with the best NVR solutions available at Infygain Technologies. ",
                  },
              
                  ]
                const DVR = [
                  {
                    name:"DVR",
                    img:"/images/dvr vector.webp",
                    link:"https://infygain.co.in/onlinestore/products/ca/152",
                    para:"Welcome to Infygain Technologies, where security meets innovation in the realm of CCTV solutions. Explore unparalleled recording capabilities with our collection of the best DVR (Digital Video Recorder) options, meticulously chosen to elevate your surveillance system to new heights.",
                    p1:"At Infygain Technologies, we understand the critical role of a DVR in a CCTV system. Our carefully selected best DVR solutions offer advanced features and robust recording capabilities, ensuring you have a reliable and efficient system for video storage.",
                    p2:"Experience high-quality video playback and storage with our best DVR solutions. Whether you need to review footage for security purposes or gather evidence, our DVRs deliver clear and detailed recordings for comprehensive monitoring.",
                    p3:"Opt for seamless integration with advanced features available in our best DVR solutions. From remote access to intelligent analytics, our DVRs provide the tools needed to enhance your CCTV system's performance and functionality.",
                    p4:"Choose scalability for future-proof surveillance with our best DVR solutions. Our DVRs are designed to grow with your security needs, allowing you to expand your CCTV system and maintain optimal recording capabilities as your requirements evolve.",
                    p5:"Benefit from smart analytics that enhance the efficiency and effectiveness of your security.",
                    p6:"Rely on our knowledgeable team for expert advice on selecting the best DVR based on your specific CCTV system requirements.",
                    p7:"Join our satisfied customers who trust in our commitment to providing the best in DVR technology and service.",
                    p8:"Elevate your CCTV system's recording capabilities with the best DVR solutions available at Infygain Technologies. ",
                  },
              
                  ]
                const cctv360 = [
                  {
                    name:"360",
                    img:"/images/360 vector.webp",
                    link:"https://infygain.co.in/onlinestore/products/ca/152",
                    para:"Welcome to Infygain Technologies, where innovation meets comprehensive security solutions. Explore the forefront of surveillance technology with our collection of the best 360-Degree Cameras, meticulously chosen to provide panoramic views and complete coverage for your CCTV system.",
                    p1:"At Infygain Technologies, we understand the importance of comprehensive monitoring. Our carefully selected best 360-Degree Cameras offer an all-encompassing view, ensuring no blind spots and providing total coverage for enhanced security.",
                    p2:"Experience unparalleled surveillance with our best 360-Degree Cameras. Designed to capture panoramic views, these cameras enable you to monitor large areas with a single device, eliminating the need for multiple cameras and maximizing your surveillance capabilities.",
                    p3:"Opt for detailed observation with high-resolution imaging capabilities of our best 360-Degree Cameras. Whether you need to identify faces, license plates, or specific details, our cameras deliver clear and crisp footage for effective security monitoring.",
                    p4:"Choose enhanced security with remote monitoring and analytics features available in our best 360-Degree Cameras. Stay connected to your surveillance system from anywhere, and leverage intelligent analytics to detect and respond to potential security threats.",
                    p5:"Explore a comprehensive range of 360-Degree Cameras with the best technology for various surveillance setups.",
                    p6:"Rely on our knowledgeable team for expert advice on selecting the best 360-Degree Camera based on your specific CCTV system requirements.",
                    p7:"Join our satisfied customers who trust in our commitment to providing the best in 360-Degree Camera technology and service.",
                    p8:"Elevate your CCTV system's capabilities with the best 360-Degree Cameras available at Infygain Technologies.",
                  },
              
                  ]
                const PTZ = [
                  {
                    name:"PTZ",
                    img:"/images/ptz vector.webp",
                    link:"https://infygain.co.in/onlinestore/products/ca/152",
                    para:"Welcome to Infygain Technologies, where dynamic technology meets superior security solutions. Explore the pinnacle of surveillance control with our collection of the best PTZ (Pan-Tilt-Zoom) Cameras, meticulously chosen to provide unmatched flexibility and precision for your CCTV system.",
                    p1:"At Infygain Technologies, we understand the importance of adaptable surveillance. Our carefully selected best PTZ Cameras offer pan, tilt, and zoom functionalities, providing you with dynamic control to monitor specific areas and respond to potential threats effectively.",
                    p2:"Experience comprehensive monitoring with our best PTZ Cameras. Offering 360-degree coverage, these cameras ensure no blind spots, allowing you to track subjects in real-time and enhance the overall security of your premises.",
                    p3:"Opt for detailed observation with the zoom capabilities of our best PTZ Cameras. Whether you need to focus on specific details, faces, or distant objects, our cameras deliver precision and clarity to support effective security monitoring.",
                    p4:"Choose automated surveillance with preset and pattern features available in our best PTZ Cameras. Program specific paths and monitoring patterns to automate surveillance in designated areas, optimizing your CCTV system for efficient and hands-free operation.",
                    p5:"Explore a comprehensive range of PTZ Cameras with the best technology for various surveillance setups.",
                    p6:"Rely on our knowledgeable team for expert advice on selecting the best PTZ Camera based on your specific CCTV system requirements.",
                    p7:"Join our satisfied customers who trust in our commitment to providing the best in PTZ Camera technology and service.",
                    p8:"Elevate your CCTV system's capabilities with the best PTZ Cameras available at Infygain Technologies.",
                  },
              
                  ]
  
    const accessories = [
      {
        name:"RAM",
        img:"/images/ram vector.webp",
        link:"https://infygain.co.in/onlinestore/products/ca/173",
        para:"Welcome to Infygain Technologies, your trusted destination for the best RAM (Random Access Memory) solutions that redefine the way your computer performs. As a crucial component of your system, choosing the right RAM is paramount for optimal speed and efficiency. Explore why our RAM stands out among computer accessories.",
        p1:"Unleash the full potential of your computer with our selection of the best RAM modules.Experience lightning-fast performance and seamless multitasking, whether you're a gamer, creative professional, or business user.",
        p2:"Our best RAM solutions are designed to deliver unmatched speed and responsiveness. Say goodbye to lag and delays, and enjoy a computing experience that keeps up with your demands.",
        p3:"Choose from a range of memory capacities to suit your specific needs. Our best RAM modules offer scalable options, ensuring that you have the right amount of memory for your tasks, big or small.",
        p4:"Count on our RAM solutions for reliability and stability. We prioritize quality to ensure that your system runs smoothly without interruptions, providing a dependable foundation for your computing needs",
        p5:"Stay ahead with the best in RAM technology for enhanced performance.",
        p6:"Our knowledgeable team is here to assist you in choosing the ideal RAM configuration for your system.",
        p7:"Join our satisfied customers who rely on our best RAM solutions for a superior computing experience.",
        p8:"Elevate your computer's performance with the best RAM solutions available at Infygain Technologies.",
      },
      {
        name:"HDD,SSD",
        img:"/images/HDD & SDD Vector.webp",
        link:"https://infygain.co.in/onlinestore/products/ca/173",
        para:" Welcome to Infygain Technologies, your go-to destination for the best in storage solutions. Whether you're looking for high-capacity storage or lightning-fast performance, our selection of HDDs (Hard Disk Drives) and SSDs (Solid State Drives) caters to all your computing needs.",
        p1:"Explore our range of the best HDDs, offering ample storage capacity for your data. From personal files to business applications, our HDDs provide reliable and cost-effective storage solutions for every user.",
        p2:"Experience the next level of speed with our selection of the best SSDs. Boost your system's responsiveness, reduce load times, and enjoy seamless multitasking with these cutting-edge solid-state drives.",
        p3:"Whether you prioritize storage capacity or speed, our collection of HDDs and SSDs provides versatile options to suit your specific requirements. Choose the best storage solution tailored to your computing needs",
        p4:"Our commitment to quality ensures that you get the best in reliability and durability. Trust our storage solutions to safeguard your data and deliver consistent performance over time.",
        p5:"Explore a diverse range of HDDs and SSDs to find the best fit for your computing requirements.",
        p6:" Our knowledgeable team is ready to assist you in selecting the best storage solution for your specific needs.",
        p7:"Stay ahead with our commitment to providing the best in storage technology for enhanced performance",
        p8:"Elevate your computing experience with the best HDDs and SSDs available at Infygain Technologies. ",
      },
      {
        name:"Keyboard",
        img:"/images/keyboard vector.webp",
        link:"https://infygain.co.in/onlinestore/products/ca/173",
        para:"Welcome to Infygain Technologies, where we redefine your computing experience with the best keyboards in the market. A keyboard is more than just a peripheral – it's your interface to productivity, creativity, and seamless interaction with your device. Discover why our keyboards stand out among computer accessories",
        p1:"Experience unparalleled comfort with our range of the best keyboards. Ergonomically designed and responsive, our keyboards ensure a comfortable typing experience, reducing strain during long hours of use.",
        p2:" Our commitment to quality ensures that you get the best in precision and durability. Each keystroke is reliable, providing consistent performance over time. Our keyboards are built to withstand the demands of daily use.",
        p3:"Whether you're a gamer, a professional, or a casual user, our selection of the best keyboards caters to all. Enjoy customizable features, programmable keys, and versatile designs that suit your specific needs.",
        p4:"Illuminate your workspace with our backlit keyboards. Choose from a variety of customizable lighting options to match your style and enhance visibility, even in low-light conditions.",
        p5:" Explore a diverse range of keyboards to find the best fit for your typing preferences.",
        p6:"Stay ahead with our commitment to providing the best in keyboard technology for enhanced performance.",
        p7:"Join our satisfied customers who rely on our best keyboards for a superior typing experience.",
        p8:"Elevate your typing experience with the best keyboards available at Infygain Technologies",
      },
      {
        name:"Mouse and Monitor",
        img:"/images/mouse monitor vector.webp",
        link:"https://infygain.co.in/onlinestore/products/ca/173",
        para:"Welcome to Infygain Technologies, your destination for the best in computer accessories. Dive into a world of precision, clarity, and seamless interaction with our exceptional mouse and monitor offerings.",
        p1:" Transform your computing experience with the best mouse designed for precision and comfort. Our ergonomic designs ensure a comfortable grip, while advanced sensors deliver accurate and responsive tracking. Choose from a variety of customizable options to suit your unique preferences.",
        p2:" Immerse yourself in stunning visuals with our collection of the best monitors. From vibrant colors to sharp resolutions, our monitors redefine clarity and deliver an unparalleled viewing experience. Whether you're a gamer, designer, or professional, our monitors cater to diverse needs.",
        p3:"Our commitment to providing the best extends to offering versatile options. Explore a variety of pointing devices with programmable buttons and customizable features. Select from monitors with different sizes, resolutions, and refresh rates to match your specific requirements.",
        p4:"Stay ahead with our dedication to cutting-edge technology. Our pointing devices and monitors feature the latest advancements, ensuring that you experience the best in performance, connectivity, and functionality.",
        p5:"Explore a range of pointing devices and monitors to find the best fit for your computing needs.",
        p6:" Our knowledgeable team is ready to assist you in selecting the best accessories for your specific requirements.",
        p7:"Join our satisfied customers who rely on our best pointing devices and monitors for an enhanced computing experience.",
        p8:"Elevate your computing setup with the best mouse and monitor available at Infygain Technologies.",
      },
      {
        name:"Cabinet",
        img:"/images/cabinet vector.webp",
        link:"https://infygain.co.in/onlinestore/products/ca/173",
        para:"Welcome to Infygain Technologies, your ultimate destination for the best in computer accessories. Transform your computing experience with our exceptional computer cabinets, designed for optimal organization and style.",
        p1:" Explore our range of the best computer cabinets that redefine storage solutions. From sleek designs to spacious interiors, our cabinets offer a perfect blend of functionality and aesthetics.",
        p2:"Upgrade your workspace with the best cabinets designed for precise organization. Our cabinets feature strategically placed compartments and cable management solutions to keep your setup tidy and efficient.",
        p3:"Experience superior airflow and ventilation with our selection of the best computer cabinets. We prioritize cooling solutions to ensure that your components operate at optimal temperatures, reducing the risk of overheating.",
        p4:"Invest in durability and style with our best computer cabinets. Crafted from high-quality materials, our cabinets not only stand the test of time but also add a touch of elegance to your workspace.",
        p5:"Explore a range of cabinets to find the best fit for your computing needs.",
        p6:" Our knowledgeable team is ready to assist you in selecting the best cabinet for your specific requirements.",
        p7:" Join our satisfied customers who rely on our best cabinets for an organized and stylish computing space.",
        p8:"Elevate your workspace with the best computer cabinets available at Infygain Technologies.",
      },
      {
        name:"Motherboard",
        img:"/images/mother board vector.webp",
        link:"https://infygain.co.in/onlinestore/products/ca/173",
        para:"Welcome to Infygain Technologies, where we bring you the best in computer accessories, starting with our exceptional selection of motherboards. As a critical component of your system, our motherboards are crafted to deliver top-tier performance, reliability, and compatibility.",
        p1:"Explore our range of the best motherboards designed to elevate your computing experience. Our selection caters to a variety of needs, from gaming to professional workstations, ensuring optimal performance in every scenario.",
        p2:"Upgrade your system with the best motherboards that prioritize connectivity and compatibility. Our motherboards support the latest hardware and provide a range of ports for seamless integration of peripherals.",
        p3:"Discover motherboards that are optimized for speed and efficiency, providing faster data transfer rates and improved overall system responsiveness. Our best motherboards leverage advanced technologies to keep your system running at its peak.",
        p4:" For gaming enthusiasts, our best gaming motherboards deliver the power and features you need for an immersive gaming experience. Unlock the full potential of your gaming rig with cutting-edge technology and performance-driven designs.",
        p5:"Explore a range of cabinets to find the best fit for your computing needs.",
        p6:"Explore a comprehensive range of motherboards to find the best fit for your specific needs.",
        p7:" Join our satisfied customers who rely on our best motherboards for exceptional performance and reliability.",
        p8:"Elevate your computing experience with the best motherboards available at Infygain Technologies. ",
      },
      {
        name:"SMPS",

        img:"/images/smps-vector.webp",

//         img:"/images/desk.webp",
        link:"https://infygain.co.in/onlinestore/products/ca/173",

        para:"Welcome to Infygain Technologies, your ultimate destination for top-notch computer accessories. Explore the realm of optimal power delivery with our exceptional SMPS (Switched Mode Power Supply) units. We understand the critical role that power plays in computing, and our commitment is to provide you with the best SMPS for a reliable and efficient power supply.",
        p1:"Discover our curated selection of the best SMPS units designed to ensure a stable and uninterrupted power supply to your computer. Our offerings are crafted to meet the demands of modern computing, providing consistent and clean power to your system components.",
        p2:"Experience efficiency and energy savings with our best SMPS units. Our power supplies are optimized to deliver power precisely where and when it's needed, reducing energy consumption and lowering your electricity bills.",
        p3:"Explore compact yet powerful designs that define the best in SMPS technology. Our units are engineered to fit seamlessly into your computer setup while delivering the performance required for high-end computing tasks, gaming, and professional applications.",
        p4:"Invest in the best SMPS units that prioritize the safety of your computer components. Our power supplies come equipped with advanced protection features, including over-voltage protection, short-circuit protection, and more, ensuring the longevity of your hardware.",
        p5:" Explore a comprehensive range of SMPS units to find the best fit for your specific computer requirements.",
        p6:" Rely on our knowledgeable team for expert advice on selecting the best SMPS for your system.",
        p7:"Join our satisfied customers who trust in our commitment to providing the best in power supply solutions.",
        p8:"  Elevate your computing setup with the best SMPS units available at Infygain Technologies. ",
      },
      {
        name:"Cables and Chargers",
        img:"/images/cable vector.webp",
        link:"https://infygain.co.in/onlinestore/products/ca/173",
        para:" Welcome to Infygain Technologies, your go-to destination for cutting-edge computer accessories. Dive into a world of seamless connectivity with our carefully curated selection of the best connectors and converters. Our commitment is to provide you with accessories that redefine versatility, ensuring that your devices connect effortlessly.",
        p1:" Explore our range of the best cables designed to offer unmatched connectivity for your devices. From high-speed data transfer cables to reliable power cables, our selection ensures optimal performance and durability.",
        p2:"Discover chargers engineered for efficiency and speed. Our best chargers are designed to power up your devices quickly and reliably, ensuring that you stay connected and productive without interruption.",
        p3:"Choose from our versatile cable solutions that cater to various connectivity needs. Our collection includes HDMI cables, USB-C cables, charging cables, and more, providing you with the best tools for connecting your devices seamlessly.",
        p4:"Experience the durability of our cables and the convenience of tangle-free designs. Our best cables are built to withstand daily use, and their tangle-free designs ensure hassle-free handling and storage.",
        p5:"Explore a comprehensive range of cables and chargers to find the best fit for your specific needs.",
        p6:" Rely on our knowledgeable team for expert advice on selecting the best accessories for your devices.",
        p7:"Join our satisfied customers who trust in our commitment to providing the best in connectivity solutions.",
        p8:" Elevate your connectivity and charging experience with the best cables and chargers available at Infygain Technologies. ",
      },
      {
        name:"Connectors and Converters",
        img:"/images/conector convertor vector.webp",
        link:"https://infygain.co.in/onlinestore/products/ca/173",
        para:"Welcome to Infygain Technologies, your premier destination for cutting-edge computer accessories. Step into the world of seamless connectivity with our curated collection of the best cables and chargers. We understand the importance of reliable connections and efficient charging, and our commitment is to provide you with accessories that redefine convenience.",
        p1:"Discover our range of the best connectors designed to establish reliable links between your devices. Whether it's USB connectors, audio connectors, or other interface connectors, our selection ensures stable and efficient connections.",
        p2:"Explore converters engineered for compatibility and flexibility. Our best converters are designed to bridge the gap between different devices and formats, ensuring that you can use your devices without limitations.",
        p3:"Choose from our versatile solutions that cater to a variety of connectivity needs. Our collection includes HDMI converters, USB adapters, audio splitters, and more, providing you with the best tools to adapt to any technological environment.",
        p4:"Experience durability and compactness with our connectors and converters. Our best accessories are built to withstand daily use, and their compact designs ensure easy portability for on-the-go connectivity.",
        p5:"Explore a comprehensive range of connectors and converters to find the best fit for your specific connectivity requirements.",
        p6:" Rely on our knowledgeable team for expert advice on selecting the best accessories for seamless connectivity.",
        p7:"Join our satisfied customers who trust in our commitment to providing the best in connectivity solutions.",
        p8:" Elevate your connectivity experience with the best connectors and converters available at Infygain Technologies.",
      },
    ]
    const projectors = [
      {
        name:"LCD",
        img:"/images/lcdvector.webp",
        link:"https://infygain.co.in/onlinestore/products/ca/190",
        para:" Welcome to Infygain Technologies, your premier destination for cutting-edge projection technology. Step into a world of vivid and immersive visuals with our collection of the best LCD projectors. Our commitment is to redefine your viewing experience, ensuring unparalleled clarity, brightness, and color accuracy.",
        p1:"Explore our carefully curated selection of the best LCD projectors, meticulously chosen to deliver superior visuals for your presentations, entertainment, or educational needs. Witness vibrant colors, sharp resolutions, and detailed images that captivate your audience.",
        p2:"Experience crystal-clear presentations and entertainment with our best LCD projectors. Whether you're delivering a business presentation or enjoying a movie night at home, our projectors ensure that every detail is projected with precision.",
        p3:"Choose from our versatile range of LCD projectors that cater to various settings and requirements. Our collection includes portable projectors for on-the-go presentations and high-lumen projectors for large venues, offering the best solutions for diverse needs.",
        p4:"Stay ahead with our commitment to cutting-edge LCD technology. Our best projectors leverage advancements such as high refresh rates, dynamic contrast ratios, and advanced color processing for an immersive and lifelike viewing experience.",
        p5:"Explore a comprehensive range of LCD projectors to find the best fit for your specific requirements.",
        p6:"Rely on our knowledgeable team for expert advice on selecting the best LCD projector based on your intended use.",
        p7:"Join our satisfied customers who trust in our commitment to providing the best in projection technology and service.",
        p8:"Elevate your visual experiences with the best LCD projectors available at Infygain Technologies.",
      },
      {
        name:"LED",
        img:"/images/led vector.webp",
        link:"https://infygain.co.in/onlinestore/products/ca/190",
        para:"Welcome to Infygain Technologies, your ultimate destination for cutting-edge projection technology. Step into a world of brilliance and clarity with our collection of the best LED projectors. Our commitment is to redefine your visual experiences, ensuring vibrant colors, exceptional brightness, and energy-efficient performance.",
        p1:"Explore our carefully curated selection of the best LED projectors, meticulously chosen to deliver brilliant visuals for your presentations, entertainment, or educational needs. Witness stunning color accuracy, sharp resolutions, and immersive images that captivate your audience.",
        p2:" Experience vivid presentations and entertainment with our best LED projectors. Whether you're delivering a business presentation or enjoying a movie night at home, our projectors ensure that every detail is illuminated with precision and clarity.",
        p3:"Choose from our versatile range of LED projectors that cater to various settings and requirements. Our collection includes portable projectors for on-the-go presentations and high-lumen projectors for large venues, offering the best solutions for diverse needs.",
        p4:"Stay ahead with our commitment to energy-efficient LED technology. Our best projectors not only deliver superior visuals but also ensure cost-effective and eco-friendly operation, making them a sustainable choice for your projection needs.",
        p5:"Explore a comprehensive range of LED projectors to find the best fit for your specific requirements.",
        p6:"Rely on our knowledgeable team for expert advice on selecting the best LED projector based on your intended use.",
        p7:"Join our satisfied customers who trust in our commitment to providing the best in projection technology and service.",
        p8:" Elevate your visual experiences with the best LED projectors available at Infygain Technologies.",
      },
      {
        name:"Smart Projectors",
        img:"/images/smart projector vector.jpg",
        link:"https://infygain.co.in/onlinestore/products/ca/190",
        para:" Welcome to Infygain Technologies, your premier destination for cutting-edge projection technology. Step into a world of innovation and connectivity with our collection of the best smart projectors. Our commitment is to redefine your visual experiences, ensuring not only stunning visuals but also seamless integration with smart technologies.",
        p1:"Explore our carefully curated selection of the best smart projectors, meticulously chosen to deliver intelligent presentations for your business meetings, educational sessions, or entertainment needs. Witness brilliance in both visuals and smart functionality that elevates your projection experience.",
        p2:"Experience connectivity redefined with our best smart projectors. Whether you're casting presentations wirelessly, streaming content from your favorite platforms, or engaging in interactive applications, our projectors seamlessly integrate with smart technologies for a truly modern experience.",
        p3:"Choose from our versatile range of smart projectors that cater to various settings and requirements. Our collection includes portable smart projectors for on-the-go professionals and feature-rich models for home entertainment, offering the best solutions for diverse needs.",
        p4:"Stay ahead with intuitive controls and user-friendly interfaces on our best smart projectors. Navigate effortlessly through settings, applications, and connectivity options, making your projection experience smooth and enjoyable.",
        p5:"Explore a comprehensive range of smart projectors to find the best fit for your specific requirements.",
        p6:"Rely on our knowledgeable team for expert advice on selecting the best smart projector based on your intended use.",
        p7:"Join our satisfied customers who trust in our commitment to providing the best in smart projection technology and service.",
        p8:"Elevate your visual experiences with the best smart projectors available at Infygain Technologies.",
      },
      
    ]
    const interactivepanel = [
      {
        name:"65-Inch Interactive Panels",
        img:"/images/interactivepanel.webp",
        link:"https://infygain.co.in/onlinestore/products/ca/194",
        para:"Welcome to Infygain Technologies, where collaboration meets innovation. Step into a world of interactive excellence with our collection of the best 65-inch interactive panels. Our commitment is to redefine the way you collaborate, present, and engage with cutting-edge technology that brings your ideas to life.",
        p1:"Explore our carefully curated selection of the best 65-inch interactive panels, meticulously chosen to deliver immersive collaboration experiences. Whether you're conducting dynamic presentations, interactive lessons, or collaborative  brainstorming sessions, our panels provide a canvas for creativity.",
        p2:" Experience vivid visuals and responsive touch technology with our best interactive panels. The 65-inch size ensures that your content is displayed with clarity, while the touch functionality allows for seamless interaction,making presentations and lessons engaging and dynamic. ",
        p3:"Choose from our versatile range of 65-inch interactive panels that cater to various settings and requirements. Our collection includes feature-rich panels suitable for classrooms, boardrooms, and collaborative workspaces, offering the best solutions for diverse needs.",
        p4:"Stay ahead with intuitive controls and user-friendly interfaces on our best interactive panels.Navigate effortlessly through interactive applications, annotate on the screen, and utilize collaborative tools with ease, making your presentations and collaborations smooth and productive.",
        p5:"Explore a comprehensive range of 65-inch interactive panels to find the best fit for your specific collaboration requirements.",
        p6:"Rely on our knowledgeable team for expert advice on selecting the best interactive panel based on your intended use.",
        p7:"Join our satisfied customers who trust in our commitment to providing the best in interactive panel technology and service.",
        p8:"Elevate your collaborative experiences with the best 65-inch interactive panels available at Infygain Technologies.",
      },
      {
        name:"75-Inch Interactive Panels",
        img:"/images/interactivepanel.webp",
        link:"https://infygain.co.in/onlinestore/products/ca/194",
        para:"Welcome to Infygain Technologies, where innovation meets collaboration on a grand scale. Immerse yourself in a world of interactive excellence with our collection of the best 75-inch interactive panels. Our commitment is to redefine the way you collaborate, present, and engage with cutting-edge technology that provides a commanding canvas for your ideas.",
        p1:"Explore our meticulously curated selection of the best 75-inch interactive panels, chosen to deliver an immersive collaboration experience. Whether you're conducting impactful presentations, interactive lessons, or collaborative brainstorming sessions, our panels provide a vast canvas for creativity.",
        p2:"Experience vivid visuals and responsive touch technology with our best interactive panels. The expansive 75-inch size ensures that your content is displayed with crystal clarity, while the responsive touch functionality allows for seamless interaction, making presentations and lessons engaging and dynamic.",
        p3:"Choose from our versatile range of 75-inch interactive panels that cater to various settings and requirements. Our collection includes feature-rich panels suitable for classrooms, boardrooms, and collaborative workspaces, offering the best solutions for diverse needs.",
        p4:"Stay ahead with intuitive controls and user-friendly interfaces on our best interactive panels. Navigate effortlessly through interactive applications, annotate on the screen, and utilize collaborative tools with ease, making your presentations and collaborations smooth and productive.",
        p5:"Explore a comprehensive range of 75-inch interactive panels to find the best fit for your specific collaboration requirements.",
        p6:"Rely on our knowledgeable team for expert advice on selecting the best interactive panel based on your intended use.",
        p7:"Join our satisfied customers who trust in our commitment to providing the best in interactive panel technology and service.",
        p8:"Elevate your collaborative experiences with the best 75-inch interactive panels available at Infygain Technologies.",
      },
    ]
    const tv = [
      {
        name:"Android TV",
        img:"/images/android tv vector.webp",
        link:"https://infygain.co.in/onlinestore/products/ca/151",
        para:"Welcome to Infygain Technologies, your destination for an unparalleled entertainment experience. Dive into the world of innovation with our collection of the best Android TVs, meticulously chosen to redefine the way you enjoy content on the big screen.",
        p1:"Explore our carefully curated selection of the best Android TVs, designed to transform your living room into a smart entertainment hub. With seamless integration of Android TV, you can access a world of content, apps, and games directly from your television.",
        p2:" Experience vivid visuals and smart features with our best Android TVs. The cutting-edge technology ensures stunning picture quality, while the Android TV platform provides you with a user-friendly interface, voice control, and access to a vast array of streaming services.",
        p3:" Choose from our versatile range of Android TVs that cater to various preferences and requirements. Our collection includes different screen sizes, resolutions, and features, offering the best solutions for diverse entertainment needs.",
        p4:" Stay ahead with intuitive controls and user-friendly interfaces on our best Android TVs. Navigate effortlessly through your favorite apps, switch between content, and explore a world of entertainment with ease.",
        p5:" Explore a comprehensive range of Android TVs to find the best fit for your specific entertainment requirements.",
        p6:"Rely on our knowledgeable team for expert advice on selecting the best Android TV based on your preferences.",
        p7:"Join our satisfied customers who trust in our commitment to providing the best in Android TV technology and service.",
        p8:"Elevate your entertainment experience with the best Android TVs available at Infygain Technologies.",
      },
      {
        name:"Smart TV",
        img:"/images/smart-tv vector.webp",
        link:"https://infygain.co.in/onlinestore/products/ca/151",
        para:"  Welcome to Infygain Technologies, where innovation meets entertainment. Immerse yourself in a world of cutting-edge technology with our collection of the best A-Smart TVs, meticulously selected to redefine your television experience.",
        p1:"Explore our carefully curated selection of the best A-Smart TVs, designed to be the epitome of intelligent entertainment. With A-Smart technology, our TVs offer seamless connectivity, smart features, and a host of entertainment options right at your fingertips.",
        p2:"Experience vivid visuals and smart capabilities with our best A-Smart TVs. Enjoy stunning picture quality and immerse yourself in a world of content, apps, and connectivity options that transform your TV into a central hub for entertainment.",
        p3:"Choose from our versatile range of A-Smart TVs that cater to various preferences and requirements. Our collection includes different screen sizes, resolutions, and features, providing the best solutions for diverse entertainment needs.",
        p4:" Stay ahead with intuitive controls and user-friendly interfaces on our best A-Smart TVs. Navigate effortlessly through your favorite apps, switch between content, and explore the intelligence of A-Smart technology with ease.",
        p5:"Explore a comprehensive range of A-Smart TVs to find the best fit for your specific entertainment requirements.",
        p6:" Rely on our knowledgeable team for expert advice on selecting the best A-Smart TV based on your preferences.",
        p7:"Join our satisfied customers who trust in our commitment to providing the best in A-Smart TV technology and service.",
        p8:"Elevate your viewing experience with the best A-Smart TVs available at Infygain Technologies. ",
      },
    ]

    const ups=[
      {
        name:"Inventor",
        img:"/images/inventorfinal.webp",
        link:"https://infygain.com/onlinestore/",
        para:"Welcome to Infygain Technologies, your trusted partner in ensuring uninterrupted power supply through cutting-edge UPS technology. Explore a world of innovation and reliability with our collection of the best inventors in the UPS industry, designed to safeguard your critical systems and sensitive equipment.",
        p1:"At Infygain Technologies, we take pride in offering the best inventors in UPS technology, meticulously chosen to provide unrivaled reliability. Our UPS solutions are crafted with precision, ensuring seamless transitions during power outages and protection against voltage fluctuations.",
        p2:"Experience innovative features that elevate the performance of our best UPS inventors. From advanced battery management systems to intelligent monitoring capabilities, our UPS solutions are designed to meet the dynamic power needs of modern businesses.  ",
        p3:" Choose from our versatile range of UPS solutions that cater to various applications and power capacities. Whether you need a UPS for your home office, a small business, or a large data center, our collection includes the best inventors to suit diverse requirements.",
        p4:"Trust in the best inventors in UPS technology to provide reliable protection for your sensitive equipment. Our UPS solutions safeguard against power surges, spikes, and outages, ensuring that your electronics and critical systems remain operational and protected.",
        p5:"  Explore a comprehensive range of UPS solutions with the best inventors for various applications.",
        p6:" Rely on our knowledgeable team for expert advice on selecting the best UPS inventor based on your specific power needs.",
        p7:"Join our satisfied customers who trust in our commitment to providing the best in UPS technology and service. ",
        p8:"Ensure uninterrupted power for your critical systems with the best UPS inventors available at Infygain Technologies.  ",
      },
      {
        name:"Online UPS",
        img:"/images/online ups vector.webp",
        link:"https://infygain.com/onlinestore/",
        para:"Welcome to Infygain Technologies, where we redefine uninterrupted power supply with our state-of-the-art Online UPS solutions. Explore a world of reliability and continuous power with the best Online UPS technology designed to safeguard your critical systems and ensure seamless operations",
        p1:" At Infygain Technologies, we take pride in offering the best Online UPS solutions meticulously chosen for unmatched reliability. Our Online UPS technology provides a continuous and clean power supply, protecting your sensitive equipment from power disruptions and ensuring uninterrupted performance., we take pride in offering the best Online UPS solutions meticulously chosen for unmatched reliability. Our Online UPS technology provides a continuous and clean power supply, protecting your sensitive equipment from power disruptions and ensuring uninterrupted performance.",
        p2:"Experience optimal performance with the advanced features integrated into our best Online UPS solutions. From double-conversion technology to precision voltage regulation, our UPS systems are designed to deliver consistent and reliable power to critical loads.",
        p3:"Choose from our versatile range of Online UPS solutions that cater to various applications and power capacities. Whether you need a UPS for your home office, a small business, or an enterprise-level data center, our collection includes the best options to suit diverse requirements.",
        p4:"Trust in the best Online UPS technology to provide enhanced protection for your critical systems. Our UPS solutions safeguard against power fluctuations, surges, and outages, ensuring the continuous operation of your equipment and preventing data loss.",
        p5:" Explore a comprehensive range of Online UPS solutions with the best technology for various applications.",
        p6:" Rely on our knowledgeable team for expert advice on selecting the best Online UPS based on your specific power needs.",
        p7:" Join our satisfied customers who trust in our commitment to providing the best in Online UPS technology and service.",
        p8:"Ensure a seamless and uninterrupted power supply for your critical systems with the best Online UPS solutions available at Infygain Technologies.   ",
      },
    ]

    const pos=[
      {
        name:"POS",
        img:"/images/kioskvectorlasts.webp",
        link:"https://infygain.co.in/onlinestore/products/s/pos",
        para:"Welcome to Infygain Technologies, where innovation meets efficiency in the realm of Point of Sale (POS) solutions.Explore the cutting-edge technology and seamless functionality of our best POS systems, meticulously chosen to enhance your business operations and provide an exceptional customer experience.",
        p1:" At Infygain Technologies, we understand the crucial role of a POS system in modern business. Our carefully selected best POS solutions offer advanced features and user-friendly interfaces, ensuring smooth and efficient transactions for both your staff and customers.",
        p2:" Experience efficient order processing and inventory management with our best POS solutions. Our systems are designed to streamline the entire transaction process, from order entry to inventory tracking, allowing you to optimize stock levels and prevent stockouts.",
        p3:"Opt for secure payment processing with our best POS solutions. We prioritize the security of transactions, providing your customers with confidence in the safety of their payments and enhancing the overall trustworthiness of your business.",
        p4:"Choose versatility with our best POS solutions tailored for various business environments. Whether you run a retail store, restaurant, or any other establishment, our POS systems can be customized to meet the specific needs of your industry.",
        p5:"Explore a comprehensive range of POS solutions with the best technology for various business setups.",
        p6:"Rely on our knowledgeable team for expert advice on selecting the best POS system based on your specific business requirements.",
        p7:"Join our satisfied customers who trust in our commitment to providing the best in POS technology and service.",
        p8:" Optimize your business operations with the best POS solutions available at Infygain Technologies. ",
      },
      {
        name:"KIOSK",
        img:"/images/kioskvectorlasts.webp",
        link:"https://infygain.co.in/onlinestore/products/s/pos",
        para:"Welcome to Infygain Technologies, where innovation meets customer convenience in the world of Point of Sale (POS). Explore a seamless and interactive customer experience with our collection of the best Kiosk solutions, meticulously chosen to enhance your POS operations.",
        p1:"At Infygain Technologies, we understand the significance of efficient and interactive transactions at your POS. Our carefully selected best Kiosk solutions offer a cutting-edge way for customers to interact with your business, leading to streamlined processes and improved customer satisfaction.",
        p2:"Experience effortless transactions with our best Kiosk solutions. The user-friendly interfaces empower your customers to navigate through the kiosk, place orders, make payments, or access information easily, providing a smooth and enjoyable experience.  ",
        p3:"Optimize efficiency and order accuracy with the advanced features integrated into our Kiosk solutions. From intuitive menu selections to real-time order updates, our Kiosks are designed to deliver the best in customer service, reducing wait times and minimizing errors.",
        p4:"Choose from our versatile range of Kiosk solutions that cater to various POS setups and industries. Whether you operate a restaurant, a retail store, or a service-oriented business, our collection includes the best options to suit diverse customer interaction needs.",
        p5:"Explore a comprehensive range of Kiosk solutions with the best technology for various POS environments.",
        p6:" Rely on our knowledgeable team for expert advice on selecting the best Kiosk based on your specific business requirements.",
        p7:" Join our satisfied customers who trust in our commitment to providing the best in Kiosk technology and service.",
        p8:" Elevate your customer service with the best Kiosk solutions available at Infygain Technologies.  ",
      },
      {
        name:"Billing Apps",
        img:"/images/billingapp.webp",
        link:"https://infygain.co.in/onlinestore/products/s/pos",
        para:" Welcome to Infygain Technologies, where we bring innovation to your Point of Sale (POS) experience. Explore a world of efficiency and precision in financial transactions with our collection of the best Billing Apps designed to enhance your POS operations.",
        p1:" At Infygain Technologies, we understand the importance of seamless billing in POS. Our meticulously selected best Billing Apps ensure quick and accurate transactions, allowing you to focus on providing excellent service to your customers.",
        p2:"Experience an effortless billing process with our best Billing Apps. The user-friendly interfaces make it easy for your staff to navigate through the app, enabling swift and error-free transactions that contribute to a positive customer experience.",
        p3:"Explore comprehensive financial management with the advanced features integrated into our Billing Apps. From real-time sales tracking and inventory management to customized reporting, our apps are designed to deliver the best in financial control for your business.",
        p4:"Choose from our versatile range of Billing Apps that cater to various POS setups and industries. Whether you run a retail store, a restaurant, or a service-oriented business, our collection includes the best options to suit diverse billing needs.",
        p5:"Explore a comprehensive range of Billing Apps with the best technology for various POS environments.",
        p6:"Rely on our knowledgeable team for expert advice on selecting the best Billing App based on your specific business requirements.",
        p7:"Join our satisfied customers who trust in our commitment to providing the best in Billing App technology and service.",
        p8:"Optimize your POS billing process with the best Billing Apps available at Infygain Technologies.",
      },
    ]


    const intercom=[
      {
        name:"InterCom",
        img:"/images/intercom-vector.webp",
        link:"https://infygain.com/onlinestore/",
        para:"Welcome to Infygain Technologies, where communication meets innovation in the realm of intercom systems. Explore the pinnacle of connectivity and convenience with our collection of the best Intercom Systems, meticulously chosen to enhance communication within your premises and elevate security measures.",
        p1:" At Infygain Technologies, we understand the importance of seamless communication. Our carefully selected best Intercom Systems offer advanced features, ensuring clear and reliable connectivity for both personal and security-related conversations.",
        p2:"Experience versatility with our best Intercom Systems designed for various environments. Whether you need intercoms for residential buildings, commercial spaces, or industrial facilities, our systems can be tailored to meet the specific communication needs of your environment.",
        p3:" Opt for enhanced security with integration capabilities available in our best Intercom Systems. Seamlessly connect your intercoms with access control systems to monitor and control entry points, providing an additional layer of security for your premises.",
        p4:"Choose user-friendly features for intuitive operation with our best Intercom Systems. From touch-screen interfaces to mobile app integration, our systems are designed to be easily operated by users, ensuring efficient communication within your facility.",
        p5:" Explore a comprehensive range of Intercom Systems with the best technology for various communication setups.",
        p6:"Rely on our knowledgeable team for expert advice on selecting the best Intercom System based on your specific communication and security requirements.",
        p7:"Join our satisfied customers who trust in our commitment to providing the best in Intercom technology and service.",
        p8:" Elevate your communication and security measures with the best Intercom Systems available at Infygain Technologies",
      },
      {
        name:"EPABX",
        img:"/images/intercomvector-01.webp",
        link:"https://infygain.com/onlinestore/",
        para:"Welcome to Infygain Technologies, where seamless communication is a priority. Explore a world of enhanced connectivity and efficient intercom solutions with our collection of the best EPABX systems, meticulously chosen to elevate your communication infrastructure.",
        p1:"At Infygain Technologies, we understand the importance of efficient communication within your premises. Our meticulously selected best EPABX systems offer a robust and scalable solution for intercom communication, ensuring seamless connectivity and quick response times.",
        p2:"Experience intuitive communication with our best EPABX systems. The user-friendly interfaces make it easy for users to initiate intercom calls, transfer calls, and manage communication effectively, contributing to a smooth and streamlined operation.",
        p3:" Explore optimal performance with the advanced features integrated into our EPABX systems. From call routing and conferencing to voicemail and call logging, our systems are designed to deliver the best in intercom communication for various settings.",
        p4:"  Choose from our versatile range of EPABX systems that cater to various setups and industries. Whether you need a solution for a corporate office, a healthcare facility, or an educational institution, our collection includes the best options to suit diverse intercom communication needs.",
        p5:" Explore a comprehensive range of EPABX systems with the best technology for various intercom setups.",
        p6:"Rely on our knowledgeable team for expert advice on selecting the best EPABX system based on your specific communication requirements.",
        p7:"  Join our satisfied customers who trust in our commitment to providing the best in EPABX technology and service.",
        p8:" Elevate your intercom communication with the best EPABX systems available at Infygain Technologies",
      },
      {
        name:"IPPBX",
        img:"/images/intercomvector-01.webp",
        link:"https://infygain.com/onlinestore/",
        para:"Welcome to Infygain Technologies, where we prioritize seamless and advanced communication solutions. Explore a world of enhanced connectivity and efficient intercom systems with our collection of the best IPPBX systems, meticulously chosen to elevate your communication infrastructure.",
        p1:"At Infygain Technologies, we recognize the pivotal role of communication within your premises. Our carefully selected best IPPBX systems offer a cutting-edge solution for intercom communication, ensuring not only seamless connectivity but also advanced features to meet your diverse communication needs.",
        p2:"Experience intuitive communication with our best IPPBX systems. The user-friendly interfaces make it easy for users to initiate intercom calls, manage extensions, and utilize advanced features, contributing to a smooth and streamlined operation.",
        p3:"Explore optimal performance with the advanced features integrated into our IPPBX systems. From call routing and conferencing to voicemail and integration with other communication channels, our systems are designed to deliver the best in intercom communication for various settings.",
        p4:"Choose from our versatile range of IPPBX systems that cater to various setups and industries. Whether you need a solution for a corporate office, a healthcare facility, or an educational institution, our collection includes the best options to suit diverse intercom communication needs.",
        p5:"Explore a comprehensive range of IPPBX systems with the best technology for various intercom setups.",
        p6:"Rely on our knowledgeable team for expert advice on selecting the best IPPBX system based on your specific communication requirements",
        p7:"Join our satisfied customers who trust in our commitment to providing the best in IPPBX technology and service.",
        p8:"Elevate your intercom communication to new heights with the best IPPBX systems available at Infygain Technologies.",
      },
    ]

    const wifi=[
      {
        name:"Access Point Controller",
        img:"/images/acesspoint controller.webp",
        link:"https://infygain.co.in/onlinestore/products/ca/181",
        para:"Welcome to Infygain Technologies, your gateway to unparalleled wireless connectivity. Dive into the world of seamless networking with our collection of the best Access Point Controllers, meticulously chosen to optimize and manage your Wi-Fi network efficiently.",
        p1:"At Infygain Technologies, we are proud to present the best Access Point Controllers, meticulously selected for enhanced Wi-Fi management. Our controllers ensure a robust and reliable wireless network, providing seamless connectivity for your users.",
        p2:" Experience centralized management that simplifies control over your Wi-Fi network. Our best Access Point Controllers allow you to monitor, configure, and optimize multiple access points from a centralized interface, streamlining the management of your wireless infrastructure.",
        p3:" Explore optimal performance with the advanced features integrated into our Access Point Controllers. From load balancing and traffic shaping to seamless roaming and security management, our controllers are designed to deliver the best Wi-Fi experience.",
        p4:"Choose from our versatile range of Access Point Controllers that cater to various settings and network sizes. Whether you need a solution for a small business, a large enterprise, or a public venue, our collection includes the best options to suit diverse Wi-Fi requirements.",
        p5:"Explore a comprehensive range of Access Point Controllers with the best technology for various Wi-Fi setups.",
        p6:" Rely on our knowledgeable team for expert advice on selecting the best Access Point Controller based on your specific network needs. ",
        p7:"Join our satisfied customers who trust in our commitment to providing the best in Access Point Controller technology and service.",
        p8:"Optimize and manage your Wi-Fi network with the best Access Point Controllers available at Infygain Technologies.",
      },
      {
        name:"Wi-Fi 5",
        img:"/images/wifi5vector-01.webp",
        link:"https://infygain.co.in/onlinestore/products/ca/181",
        para:"Welcome to Infygain Technologies, where we redefine wireless connectivity with the latest in Wi-Fi 5 technology. Explore a world of high-speed, reliable, and efficient wireless networking with our collection of the best Wi-Fi 5 solutions designed to meet your connectivity needs.",
        p1:" At Infygain Technologies, we pride ourselves on offering the best Wi-Fi 5 technology meticulously chosen for lightning-fast speeds. Wi-Fi 5, also known as 802.11ac, delivers unparalleled performance, ensuring smooth and lag-free connectivity for your devices.",
        p2:"Experience enhanced bandwidth that enables seamless streaming and data transfers. Our best Wi-Fi 5 solutions provide the necessary speed and capacity to support multiple devices simultaneously, making it an ideal choice for homes, offices, and public spaces.",
        p3:"Explore optimal performance with the advanced features integrated into our Wi-Fi 5 solutions. From beamforming and MU-MIMO technology to improved security protocols, our solutions are designed to deliver the best Wi-Fi experience for a diverse range of applications.",
        p4:" Choose from our versatile range of Wi-Fi 5 solutions that cater to various settings and connectivity requirements. Whether you need a solution for a smart home, a bustling office, or a public venue, our collection includes the best options to suit diverse Wi-Fi needs.",
        p5:"Explore a comprehensive range of Wi-Fi 5 solutions with the best technology for various connectivity setups.",
        p6:"Rely on our knowledgeable team for expert advice on selecting the best Wi-Fi 5 solution based on your specific networking needs",
        p7:" Join our satisfied customers who trust in our commitment to providing the best in Wi-Fi 5 technology and service",
        p8:"Upgrade your connectivity to the next level with the best Wi-Fi 5 solutions available at Infygain Technologies.  ",
      },
      {
        name:"Wi-Fi 6",
        img:"/images/wifi5vector-01.webp",
        link:"https://infygain.co.in/onlinestore/products/ca/181",
        para:"Welcome to Infygain Technologies, where we redefine wireless connectivity with the latest and greatest in Wi-Fi 6 technology. Explore a world of cutting-edge performance, enhanced capacity, and seamless connectivity with our collection of the best Wi-Fi 6 solutions designed to elevate your networking experience.",
        p1:" At Infygain Technologies, we are proud to present the best Wi-Fi 6 technology, meticulously chosen for unparalleled performance. Wi-Fi 6, also known as 802.11ax, sets a new standard for speed, efficiency, and reliability, ensuring a superior wireless experience for your devices.",
        p2:"Experience enhanced capacity that caters to the demands of crowded networks. Our best Wi-Fi 6 solutions are designed to handle multiple devices simultaneously, making it the ideal choice for smart homes, busy offices, and high-traffic public spaces.",
        p3:"Explore optimal efficiency with the advanced features integrated into our Wi-Fi 6 solutions. From OFDMA and MU-MIMO technology to improved security protocols, our solutions are crafted to deliver the best Wi-Fi experience, providing faster speeds and better coverage.",
        p4:"Choose from our versatile range of Wi-Fi 6 solutions that cater to various settings and connectivity requirements. Whether you need a solution for a smart home, a bustling office, or a public venue, our collection includes the best options to suit diverse Wi-Fi needs.",
        p5:" Explore a comprehensive range of Wi-Fi 6 solutions with the best technology for various connectivity setups.",
        p6:"Rely on our knowledgeable team for expert advice on selecting the best Wi-Fi 6 solution based on your specific networking needs.",
        p7:"Join our satisfied customers who trust in our commitment to providing the best in Wi-Fi 6 technology and service.",
        p8:"Step into the future of connectivity with the best Wi-Fi 6 solutions available at Infygain Technologies",
      },
    ]


    const printer = [
      {
        name:"Laser",
        img:"/images/laser vector.webp",
        link:"https://infygain.co.in/onlinestore/products/s/printer",
        para:"Welcome to Infygain Technologies, where precision meets performance in the world of printing technology. Elevate your printing experience with our collection of the best Laser Printers, meticulously chosen to deliver sharp, high-quality prints for your professional and personal needs.",
        p1:"At Infygain Technologies, we understand the importance of clear and crisp prints. Our carefully selected best Laser Printers are designed to provide precision printing, ensuring every document, image, or presentation reflects the quality and professionalism you expect.",
        p2:"Experience increased productivity with the high-speed printing capabilities of our best Laser Printers. Whether you're in a bustling office environment or managing a busy home office, our printers are built to handle large volumes of printing with efficiency.",
        p3:"Opt for cost-effective and reliable printing solutions with our best Laser Printers. Enjoy the benefits of lower cost per page and consistent print quality, making our printers an ideal choice for businesses, professionals, and home users alike.",
        p4:"Choose from our versatile range of Laser Printers that cater to various printing preferences and requirements. Whether you need a printer for text documents, graphics, or both, our collection includes the best options to suit diverse printing needs.",
        p5:" Explore a comprehensive range of Laser Printers with the best technology for various printing setups.",
        p6:" Rely on our knowledgeable team for expert advice on selecting the best Laser Printer based on your specific printing requirements.",
        p7:" Join our satisfied customers who trust in our commitment to providing the best in Laser Printer technology and service.",
        p8:"Elevate your printing standards with the best Laser Printers available at Infygain Technologies",
      },
      {
        name:"Thermal",
        img:"/images/thermal-vector.webp",
        link:"https://infygain.co.in/onlinestore/products/s/printer",
        para:"Welcome to Infygain Technologies, where cutting-edge technology meets efficient printing solutions. Discover a world of streamlined and high-quality prints with our collection of the best Thermal Printers, meticulously chosen to meet the demands of various industries and applications",
        p1:" At Infygain Technologies, we understand the importance of swift and reliable printing in today's fast-paced environments. Our carefully selected best Thermal Printers offer a solution that excels in speed and consistency, ensuring your printing tasks are handled with efficiency.",
        p2:"Experience high-quality thermal printing that delivers clear and legible results with our best Thermal Printers. Whether you're printing receipts, labels, or other thermal media, our printers ensure precision and clarity, meeting the standards of diverse applications.",
        p3:"Opt for cost-effective and low-maintenance printing solutions with our best Thermal Printers. Enjoy the benefits of minimal consumables, reduced downtime, and efficient performance, making our printers an ideal choice for businesses and industries seeking reliability.",
        p4:"Choose from our versatile range of Thermal Printers that cater to various printing preferences and requirements. Whether you need a printer for point-of-sale receipts, shipping labels, or barcode printing, our collection includes the best options to suit diverse thermal printing needs.",
        p5:"Explore a comprehensive range of Thermal Printers with the best technology for various printing setups.",
        p6:"Rely on our knowledgeable team for expert advice on selecting the best Thermal Printer based on your specific printing requirements.",
        p7:"Join our satisfied customers who trust in our commitment to providing the best in Thermal Printer technology and service.        ",
        p8:"Elevate your printing efficiency with the best Thermal Printers available at Infygain Technologies.",
      },
      {
        name:"color",
        img:"/images/color-printer-vector.webp",
        link:"https://infygain.co.in/onlinestore/products/s/printer",
        para:"Welcome to Infygain Technologies, where innovation meets color brilliance in the realm of printing technology. Explore a spectrum of vivid possibilities with our collection of the best Color Printers, meticulously chosen to bring life and vibrancy to your documents, images, and creative projects.",
        p1:" At Infygain Technologies, we understand the impact of vibrant and eye-catching prints. Our carefully selected best Color Printers are designed to deliver stunning color reproduction, ensuring your prints captivate attention and leave a lasting impression.",
        p2:"Experience lifelike results with the high-resolution printing capabilities of our best Color Printers. Whether you're printing photos, marketing materials, or presentations, our printers ensure clarity and detail, enhancing the visual appeal of your prints.",
        p3:"Opt for cost-effective and efficient color printing solutions with our best Color Printers. Enjoy the benefits of precise color control, low per-page costs, and consistent color quality, making our printers an ideal choice for businesses, creatives, and home users alike.",
        p4:"Explore a comprehensive range of Color Printers with the best technology for various color printing setups.",
        p5:"Choose from our versatile range of Color Printers that cater to various color printing preferences and requirements. Whether you need a printer for graphic design, marketing collateral, or everyday color prints, our collection includes the best options to suit diverse color printing needs.",
        p6:" Rely on our knowledgeable team for expert advice on selecting the best Color Printer based on your specific color printing requirements.",
        p7:"Join our satisfied customers who trust in our commitment to providing the best in Color Printer technology and service.",
        p8:"Bring your prints to life with the best Color Printers available at Infygain Technologies. Contact us today to explore technology that adds vibrancy and brilliance to your printing projects.",
      },
      {
        name:"Multifunction",
        img:"/images/multi vector.webp",
        link:"https://infygain.co.in/onlinestore/products/s/printer",
        para:"Welcome to Infygain Technologies, where versatility meets efficiency in the realm of printing solutions. Discover the ultimate convenience with our collection of the best Multifunction Printers, meticulously chosen to streamline your printing, scanning, and copying tasks in one compact device.",
        p1:"At Infygain Technologies, we understand the importance of an all-in-one solution for your printing needs. Our carefully selected best Multifunction Printers combine the functionalities of printing, scanning, and copying, offering a comprehensive solution that caters to diverse office and home requirements.",
        p2:"Experience high-performance printing and copying with our best Multifunction Printers. Whether you're producing documents, reports, or presentations, our printers deliver crisp and clear results, ensuring professional-quality outputs every time.",
        p3:"Optimize your digital workflows with efficient scanning capabilities of our best Multifunction Printers. Scan documents directly to your computer, email, or cloud storage, streamlining the process of creating digital copies for archival or sharing purposes.",
        p4:"Choose cost-effective and space-saving solutions with our best Multifunction Printers. Enjoy the benefits of consolidating multiple devices into one, reducing costs, and saving valuable office or home space.",
        p5:" Select from our versatile range of Multifunction Printers that cater to various printing and scanning preferences. Whether you need a printer for high-volume printing, scanning large documents, or occasional copying, our collection includes the best options to suit diverse multifunctional needs",
        p6:" Explore a comprehensive range of Multifunction Printers with the best technology for various printing and scanning setups.",
        p7:"  Rely on our knowledgeable team for expert advice on selecting the best Multifunction Printer based on your specific requirements.",
        p8:"Join our satisfied customers who trust in our commitment to providing the best in Multifunction Printer technology and service.",
      },
      {
        name:"Dot Matrix",
        img:"/images/dot-matrix-vector.webp",
        link:"https://infygain.co.in/onlinestore/products/s/printer",
        para:"Welcome to Infygain Technologies, where tradition meets durability in the realm of printing technology. Explore the time-tested reliability of dot matrix printing with our collection of the best Dot Matrix Printers, meticulously chosen to cater to industries and applications that demand robust and impactful printing.",
        p1:"At Infygain Technologies, we understand the unique requirements of businesses that rely on impact printing. Our carefully selected best Dot Matrix Printers offer a dependable solution, ensuring clear and consistent printing on multi-part forms and other specialized media.",
        p2:"Experience high-speed printing with the efficiency of our best Dot Matrix Printers. Whether you're dealing with invoices, receipts, or other multipart documents, our printers are designed to handle high-volume tasks with precision and speed.",
        p3:"Opt for durable and low-cost printing solutions with our best Dot Matrix Printers. Enjoy the benefits of long-lasting print heads and minimal consumables, making our printers an ideal choice for businesses seeking a cost-effective and reliable printing solution.",
        p4:"Choose from our versatile range of Dot Matrix Printers that cater to various impact printing preferences. Whether you need a printer for invoicing, order forms, or other multipart documents, our collection includes the best options to suit diverse dot matrix printing needs.",
        p5:"Explore a comprehensive range of Dot Matrix Printers with the best technology for various impact printing setups.",
        p6:"Rely on our knowledgeable team for expert advice on selecting the best Dot Matrix Printer based on your specific requirements.",
        p7:"Join our satisfied customers who trust in our commitment to providing the best in Dot Matrix Printer technology and service. ",
        p8:"Embrace the reliability and impact of dot matrix printing with the best Dot Matrix Printers available at Infygain Technologies.",
      },
    
    ]

    const scanner=[
      {
        name:"Flatbed",
        img:"/images/flatbad-scanner-vector.webp",
        link:"https://infygain.co.in/onlinestore/products/ca/170",
        para:"Welcome to Infygain Technologies, where precision meets versatility in the world of scanning technology. Transform your document and image digitization experience with our collection of the best Flatbed Scanners, meticulously chosen to deliver high-quality scans for your professional and personal needs..",
        p1:"At Infygain Technologies, we understand the importance of detailed scans for various applications. Our carefully selected best Flatbed Scanners are designed to offer superior scanning capabilities, capturing intricate details and providing versatility in scanning various types of media.",
        p2:"Optimize your scanning workflow with versatile media handling of our best Flatbed Scanners. Scan documents, photos, books, and more with ease, thanks to the flat and open scanning surface that accommodates a variety of media types and sizes.",
        p3:" Explore optimal performance with the advanced features integrated into our Access Point Controllers. From load balancing and traffic shaping to seamless roaming and security management, our controllers are designed to deliver the best Wi-Fi experience.",
        p4:" Choose efficiency in scanning for both productivity and creativity with our best Flatbed Scanners. Whether you're digitizing documents for the office or capturing artistic projects, our scanners provide the tools needed to enhance your scanning tasks.",
        p5:"Explore a comprehensive range of Flatbed Scanners with the best technology for various scanning setups.",
        p6:"Rely on our knowledgeable team for expert advice on selecting the best Flatbed Scanner based on your specific scanning requirements.",
        p7:"Join our satisfied customers who trust in our commitment to providing the best in Flatbed Scanner technology and service",
        p8:"Elevate your scanning experience with the best Flatbed Scanners available at Infygain Technologies.",
      },
      {
        name:"Vertical",

        img:"/images/scanner vector.webp",

//         img:"/images/desk.webp",
        link:"https://infygain.co.in/onlinestore/products/ca/170",

        para:"Welcome to Infygain Technologies, where innovation meets efficiency in the realm of scanning technology. Redefine the way you digitize documents with our collection of the best Vertical Scanners, meticulously chosen to provide a space-saving and user-friendly solution for your scanning needs.",
        p1:" At Infygain Technologies, we understand the importance of maximizing space without compromising on functionality. Our carefully selected best Vertical Scanners offer a space-saving design that fits seamlessly into your workflow while delivering efficient and high-quality scanning results.",
        p2:"Experience efficient desktop integration with the compact design of our best Vertical Scanners. Perfect for environments where space is a premium, these scanners offer a vertical orientation, ensuring a small footprint while providing big capabilities.",
        p3:"Optimize your productivity with high-speed scanning capabilities of our best Vertical Scanners. Whether you're dealing with documents, receipts, or cards, our scanners are designed to handle a variety of media efficiently and with precision.",
        p4:"Choose user-friendly features for intuitive scanning operation with our best Vertical Scanners. Enjoy hassle-free scanning with easy-to-use controls, quick setup, and seamless integration into your digital workflow.",
        p5:" Explore a comprehensive range of Vertical Scanners with the best technology for various scanning setups.",
        p6:"Rely on our knowledgeable team for expert advice on selecting the best Vertical Scanner based on your specific scanning requirements.",
        p7:" Join our satisfied customers who trust in our commitment to providing the best in Vertical Scanner technology and service.",
        p8:"Elevate your scanning efficiency with the best Vertical Scanners available at Infygain Technologies.",
      },
     
    ]

    // pos
  const KIOSK = pos.filter((val, index) => (
    val.name === "KIOSK"
  ));
  const POS = pos.filter((val, index) => (
    val.name === "POS"
  ));
  const BillingApps = pos.filter((val, index) => (
    val.name === "Billing Apps"
  ));

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

  // accessories
  const ram = accessories.filter((val, index) => (
    val.name === "RAM"
  ));
  const HDDSSD = accessories.filter((val, index) => (
    val.name === "HDD,SSD"
  ));
  const Keyboard = accessories.filter((val, index) => (
    val.name === "Keyboard"
  ));
  const MouseandMonitor = accessories.filter((val, index) => (
    val.name === "Mouse and Monitor"
  ));
  const Cabinet = accessories.filter((val, index) => (
    val.name === "Cabinet"
  ));
  const Motherboard = accessories.filter((val, index) => (
    val.name === "Motherboard"
  ));
  const SMPS = accessories.filter((val, index) => (
    val.name === "SMPS"
  ));
  const CablesandChargers = accessories.filter((val, index) => (
    val.name === "Cables and Chargers"
  ));
  const ConnectorsandConverters = accessories.filter((val, index) => (
    val.name === "Connectors and Converters"
  ));

  // projectors
  const LCD = projectors.filter((val, index) => (
    val.name === "LCD"
  ));
  const LED = projectors.filter((val, index) => (
    val.name === "LED"
  ));
  const SmartProjectors = projectors.filter((val, index) => (
    val.name === "Smart Projectors"
  ));

  // interactivepanel
  const ip65 = interactivepanel.filter((val, index) => (
    val.name === "65-Inch Interactive Panels"
  ));
  const ip75 = interactivepanel.filter((val, index) => (
    val.name === "75-Inch Interactive Panels"
  ));

  // tv
  const AndroidTV = tv.filter((val, index) => (
    val.name === "Android TV"
  ));
  const SmartTV = tv.filter((val, index) => (
    val.name === "Smart TV"
  ));

  // ups
  const Inventor = ups.filter((val, index) => (
    val.name === "Inventor"
  ));
  const OnlineUPS = ups.filter((val, index) => (
    val.name === "Online UPS"
  ));

  // ups
  const AccessPointController = wifi.filter((val, index) => (
    val.name === "Access Point Controller"
  ));
  const WiFi5 = wifi.filter((val, index) => (
    val.name === "Wi-Fi 5"
  ));
  const WiFi6 = wifi.filter((val, index) => (
    val.name === "Wi-Fi 6"
  ));

  // intercom
  const EPABX = intercom.filter((val, index) => (
    val.name === "EPABX"
  ));
  const IPPBX = intercom.filter((val, index) => (
    val.name === "IPPBX"
  ));
  const InterCom = intercom.filter((val, index) => (
    val.name === "InterCom"
  ));


// printer
const Laser = printer.filter((val, index) => (
  val.name === "Laser"
));
const Thermal = printer.filter((val, index) => (
  val.name === "Thermal"
));
const color = printer.filter((val, index) => (
  val.name === "color"
));
const Multifunction = printer.filter((val, index) => (
  val.name === "Multifunction"
));
const DotMatrix = printer.filter((val, index) => (
  val.name === "Dot Matrix"
));

  // sacnner
  const Flatbed = scanner.filter((val, index) => (
    val.name === "Flatbed"
  ));
  const Vertical = scanner.filter((val, index) => (
    val.name === "Vertical"
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
                      DVR.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="NVR" &&
                      NVR.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="360" &&
                      cctv360.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="PTZ" &&
                      PTZ.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
            
                    {/* Accessories */}
                    {
                      id==="RAM" &&
                      ram.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="HDD,SSD" &&
                      HDDSSD.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="KeyBoard" &&
                      Keyboard.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="Mouse,Moniter" &&
                      MouseandMonitor.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="Cabinet" &&
                      Cabinet.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="MotherBoard" &&
                      Motherboard.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="SMPS" &&
                      SMPS.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="Cables,Charger" &&
                      CablesandChargers.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="Connector,Convertor" &&
                      ConnectorsandConverters.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
            
                {/* Projectors */}
                  {
                      id==="LCD" &&
                      LCD.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="LED" &&
                      LED.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="SmartProjector" &&
                      SmartProjectors.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }

                     {/* TV */}
                  {
                      id==="AndriodTV" &&
                      AndroidTV.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="SmartTV" &&
                      SmartTV.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }


                      {/* printer */}
                      {
                      id==="Laser" &&
                      Laser.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="Thermal" &&
                      Thermal.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="Color" &&
                      color.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="MultiFunction" &&
                      Multifunction.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="DotMatrix" &&
                      DotMatrix.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }

                    
                      {/* Scanner */}
                      {
                      id==="Flatbed" &&
                      Flatbed.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="Vertical" &&
                      Vertical.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }

                    {/* InteractivePanel */}
                  {
                      id==="InteractivePanel65" &&
                      ip65.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="InteractivePanel75" &&
                      ip75.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {/*  UPS */}
                  {
                      id==="Inventor" &&
                      Inventor.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="OnlineUPS" &&
                      OnlineUPS.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    
                      {/*  WIFI */}
                  {
                      id==="AccessPointController" &&
                      AccessPointController .map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="Wifi-5" &&
                      WiFi5.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="Wifi-6" &&
                      WiFi6.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }

                     {/*  InterCom */}
                  {
                      id==="EPABX" &&
                      EPABX.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="IPPBX" &&
                      IPPBX.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="InterCom" &&
                      InterCom.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                     {/*  Pos */}
                  {
                      id==="KIOSK" &&
                      KIOSK.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                  {
                      id==="POS" &&
                      POS.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="BillingApps" &&
                      BillingApps.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                     {/*  InterCom */}
                  {/* {
                      id==="EPABX" &&       
                      EPABX.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    } */}
                    {/* {
                      id==="BillingApps" &&
                      IPPBX.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    } */}
                </div>
                </div>
            </div>
  )
}

export default ProductDetail