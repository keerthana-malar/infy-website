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
                      GamingDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="Switch" &&
                      GamingDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="Router" &&
                      GamingDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="Firewall" &&
                      GamingDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="EndPointSecurity" &&
                      GamingDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="Fiber" &&
                      GamingDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
            
                    {/* Cctv */}
                    {
                      id==="Analog" &&
                      GamingDesktop.map((value,index) => (
                        <>
                         <ProductContent value={value}/>
                        </>
                      ))
                    }
                    {
                      id==="IP" &&
                      GamingDesktop.map((value,index) => (
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

                </div>
                </div>
            </div>
  )
}

export default ProductDetail