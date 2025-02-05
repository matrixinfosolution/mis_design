import React, { useEffect, useState } from 'react';
import { Container,Row,Col ,Form} from 'react-bootstrap';
import './route.css';
const Abstract1=()=>{
    const [isOpen, setIsOpen] = useState(false);  
    const [activeSection, setActiveSection] = useState("null");
    const toggleDropdown = () => {
        setIsOpen(prevState => !prevState);
      };
    const sections = [
        { id: "section-1", title: "Abstract" },
        { id: "section-2", title: "Introduction" },
        { id: "section-3", title: "Materials and Methods" },
        { id: "section-4", title: "Result" },
        {id:"section-5", title:"Discussion"},
        {id:"section-6",title:"Conclusion"},
    {id:"section-7",title:"References"}
      ];
      const handleScrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth',
          });
        }
      };
    
      // IntersectionObserver to track active section
      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
              }
            });
          },
          { threshold: 0.5 } // Trigger when 50% of the section is visible
        );
    
        // Observing each section
        sections.forEach((section) => {
          const element = document.getElementById(section.id);
          if (element) {
            observer.observe(element);
          }
        });
        return () => {
            observer.disconnect();
          };
        }, [sections]);
 return(
<Container fluid>
    <Row>
        <Col lg={12} className='tr-abstract'>
            
        {sections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            className="tr-section"
            style={{ padding: '60px 0', borderBottom: '1px solid #ddd' }}
          >
           <h2>{section.title}</h2>
           <div>
           { section.title === "Abstract"  &&(
           
           
            
            <p>Compact microstrip antennas are critical for 5G applications due to their ability to integrate easily into telecommunication devices, reduce power consumption, and simplify installation in urban environments. These features make them essential for efficient deployment in modern, densely populated areas. In this work, a small rectangular shaped slotted and partial grounded patch antenna has been designed and simulated at 3.5 GHz for 5G wireless applications. The antenna is created on a 30 × 20 mm2 size FR-4 lossy substrate having 0.8 mm thickness. A 50 Ω microstrip feed line is used for delivering power to the antenna. Key performance parameters are evaluated and the proposed antenna achieved return loss, gain, directivity, and bandwidth of −56 dB, 2.15 dB, 2.69 dBi, and 1040 MHz, respectively. The antenna design is optimized with the incorporation of slotting on the patch plane and partially removed ground plane structure to obtain minimum Voltage Standing Wave Ratio (VSWR) and return loss values while improving gain, directivity, and bandwidth. The comparative studies reveal that the designed antenna outperforms the previously published designs at 3.5 GHz and is suitable for applications in 5G wireless communication systems. The suggested antenna’s experimental prototype is built, and the return loss and VSWR measurements and simulation results agree quite well. The results of this study can be used for the development of compact, low-cost, and improved performance 5G antennas for various applications including mobile devices, Internet of Things network coverage, and small-cell deployments in dense urban areas in the future.</p>
            
           )}
           {section.title ===  "Introduction" &&(
           
           <div id="section-2">
        
            <p>Microstrip patch antennas, introduced in the 1970s, emerged in response to the shrinking size of electronic devices and have since become vital to modern communication systems. Known as the “eyes and ears” of communication technology, these antennas have revolutionized the field of antenna engineering. Especially in the age of miniaturization, microstrip antennas have widely used in various microwave systems, including radar, telemetry, biomedical devices, mobile and satellite communications, worldwide interoperability for microwave access (WiMAX), Global Positioning System, and more, due to their light weight, low profile, low cost, and ease of manufacture [1]. In a standard microstrip patch antenna, the metallic radiating patch rests on a dielectric substrate that is grounded, with rectangular patches being the most common design [2]. These antennas offer flexibility in feed lines, multiple frequency operations, and good bandwidth, making them suitable for demanding applications [3].</p>
<p>The growth of the fifth generation (5G) wireless network offers high-speed data transmission rates with the frequency range at the lower end 3-5 GHz and at the upper end 24-71 GHz [4]. High-gain and low-profile wideband antennas are crucial for maintaining high-speed wireless communication. Microstrip patch antennas are suitable for 5G communication applications. The effectiveness of the patch antenna depends on the thickness of the substrate, size of the patch, and feedline used [5]. In earlier studies, authors used different techniques to improve the antenna’s performance, like partial ground plane with slots [6-8], defective ground structures [9,10], and different substrate materials with different dielectric constant [11-14]. In Ridoy et al. [15], microstrip patch antennas were designed at 3.5 GHz applying three distinct substrates FR-4, RT-5880, and TLC-30 and compared their performance. A small rectangular 5G patch antenna was developed in Rana et al. [16] employing the amalgam method and achieved more than 1.2 GHz bandwidth, 2.50 dB peak gain, and 96.25% radiation efficiency.</p>
  <p>In Rana et al. [16], a patch antenna is designed to operate at 3.5 GHz for future wireless communications with improved gain and bandwidth. The designed antenna was fabricated to validate the simulation results. They designed and simulated another microstrip patch antenna operating at 3.5 GHz [17] using Rogger RT5880 as the substrate material with a dielectric constant of 4.3 for raising directivity gain and reducing return loss. In addition, the substrate material’s dielectric constant is 4.3. This antenna aims to get a standard Voltage Standing Wave Ratio (VSWR), raise its directivity gain, and give it an acceptable bandwidth. In addition, it should reduce its return loss. In addition, the antenna’s return loss will decrease. Cirik and Yildirim [18] designed a high-gain microstrip patch antenna for WiMAX application. They incorporated parasitic radiator and elevated ground plane to enhance gain of the antenna operating at 3.5 GHz. A microstrip patch antenna is constructed by Ramli et al. [13] using three different substrate materials that can function at 3.5 GHz using Computer Simulation Technology (CST) Microwave Studio. They simulated the antennas, analyzed and compared the performance of different antenna configurations. A novel 3.5 GHz rectangular patch antenna is designed by Hossain et al. [19] for applications in the S-band. They obtained lower return loss and a wider bandwidth compared to its performance at lower frequencies and the bandwidth is boosted by increasing the thickness of the substrate. In Prabha et al. [20] microstrip patch antennas were investigated, which are operating in the sub-6 GHz frequency region with a frequency of 3.55 GHz and suitable for use in WiMAX wireless communication applications. The reported rectangular patch antenna displayed superior gain and directivity performance.</p>
            <p>Although there are a lot of earlier works on antenna design at 3.5 GHz, most of them are simulation-based study and lack from experimental validation. The major limitations of these designed antennas are their large size and narrow bandwidths. The goal of the research is to design a rectangular slotted microstrip patch antenna at 3.5 GHz with a small size and improved performance characteristics required for 5G wireless communication applications. After the simulation, the second objective is to make an experimental prototype of the designed antenna and measure its performance parameters in the laboratories. </p>
            <p>The rest of the article is arranged as follows: it begins with an exploration of microstrip patch antenna design principles in the Introduction section. The Materials and Methods section outlines the design approach, which involves utilizing both simulation and experimental validation to realize the desired performance metrics such as gain, bandwidth, and efficiency. The Results section presents the outcomes of the antenna design efforts, highlighting key findings and their implications within the context of current research. This includes an analysis of the antenna’s performance characteristics and comparisons with existing designs or theoretical expectations. The Discussion section wraps up the study by summarizing the key takeaways from the simulation and experimental findings.</p>
            </div>
           )}
           {section.title === "Materials and Methods" &&(
            <div id="section-3">
         <p>Antenna design</p>   
         <p>Structure of the Antenna</p>   
         <p>The design employs a microstrip feed line to deliver power to the radiating patch element of the antenna, with its characteristic impedance matching the feed line to an impedance of 50 Ω. Among the common feeding methods (microstrip line, coaxial cable, proximity-coupled, and aperture-coupled feed) used for the development of microstrip patch antenna, the microstrip line feeding method is chosen for this design because of its smooth surface, lightweight, small volume, cost-effectiveness, and ease of doing fabrication.</p>
              <p>Figure 1 depicts the structure of the proposed antenna designed to resonate at 3.5 GHz. A 0.8 mm thick FR-4 lossy material whose dielectric constant 4.4 and loss tangent 0.025 is used as substrate. A slotted patch and partial ground structures are incorporated in the proposed design and the design parameters are optimized to obtain the antenna with improved performance. The optimized various parameter values of the proposed antenna are shown in Table 1. The patch is placed on the FR4 substrate’s upper surface. The size of the patch is 14 mm × 14.5 mm. The dimension of the FR4 substrate is 30 mm × 20 mm. The antenna comprises a right-angle triangular slot (p = q = 3 mm, r = 4.24 mm) and rectangular slots (Li1 = 8.75 mm, Wi1 = 2 mm, Wi2 = 1.5 mm, Li3 = 12.5 mm, Wi3 = 1 mm). A microstrip feedline having a dimension of 15 mm × 1.47 mm is used to excite the patch. A slotted patch and a partial ground construction are combined in the design for obtaining better performance. A partial ground plane of 20 mm × 14 mm is inserted on the rare side of the dielectric material. Partial grounding converts the patch antenna’s narrow band features into wide band properties. It also diminishes back lobe radiation and the energy stored in the substrate. Slots minimize the VSWR, return loss, along with the antenna’s overall dimensions. It improves the bandwidth and gain of the antenna. Figure 1a shows the designed antenna’s front view while the rear view is depicted in Figure 1b.</p> 
              <p>The microstrip patch antenna was designed, simulated, and analyzed using CST Studio, which is a software that specializes in analyzing 3D and multilayer configurations in various forms. CST is widely employed for designing different types of antennas and facilitates the calculation and visualization of several key performance parameters considered in the analysis.</p>
                </div>
           )}
           {section.title === "Result" &&(
            <div id="section-4">
                <p>Simulation results</p>
                <p>The simulated results of performance parameters of the proposed antenna are discussed here</p>
                <p>Return Loss (S11)</p>
                <p>Return loss is an important metric for evaluating how well signals are transferred from the source to the load, particularly if there is an issue with impedance matching or if the load does not receive all of the generated power [14]. It is essential for verifying that impedance matching requirements are satisfied. The S11 parameter, representing return loss, was computed for the antenna design and the results are depicted in Figure 2 as a function of frequency. As seen, the antenna operates at a resonant frequency of 3.5 GHz. The antenna’s return loss drops to a minimum of −56 dB at 3.5 GHz, showcasing effective impedance compatibility between the feed line and the patch that radiates. At this frequency, the antenna efficiently radiates maximum power and reflects minimal power. The return loss of −56 dB reflects a reduction of 56 dB in the power reflected compared to the incident power.

</p>
                </div>
                )}
                 </div>
           
           </div>
           ))}
           
               
        </Col>
    </Row>
</Container>
 ) ;  
}
export default Abstract1;