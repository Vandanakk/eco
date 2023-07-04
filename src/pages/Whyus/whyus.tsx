import { Link } from "react-router-dom";
import "./whyus.css";

import craftsmanship from "../../images/craftsmanship.jpg"
import ecofriendly from "../../images/ecofriendly.jpg"
import whoweare from "../../images/whoweare.jpg"
import ourstroy from "../../images/ourstroy.jpg"


import Footer from "../../component/Footer/footer";
import MyTeams from "../Myteams/myteams";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import whymainpage from "../../images/whymainpage.jpg"

const Whyus = () => {
  return (
    <>
      <div>

        <MDBCard className='mb-3'>
          <MDBCardImage position='top' height='700px' src={whymainpage} />
        </MDBCard>



        <MDBCard className="marginwhyuside" alignment='center'>
          <MDBRow  >

            <MDBCol md='6'>
              <MDBCardBody>
                <MDBCardTitle className="content-prod">Who We Are</MDBCardTitle>
                <MDBCardText className="main-hero-para">

                At Ecowoodies, we are proud to be specialists in the innovation and development of bamboo products. With over 40 years of experience, we have honed our skills in manufacturing furniture and handicrafts using various materials such as indoor/outdoor rattan, cane, sarkanda, and bamboo.
Our journey began with a vision to incorporate the talents of local artisans from villages, fostering a sense of community and collaboration. Today, we are renowned for our expertise in customizing products according to our clients' unique preferences and requirements. In fact, 80% of our portfolio consists of tailor-made creations, showcasing our dedication to personalized craftsmanship.
One of our core principles is a commitment to sustainability and environmental responsibility. We prioritize using waste and recyclable materials in our manufacturing process, ensuring that our products are not only beautifully designed but also eco-friendly and safe for the environment.
Through our dedication to quality, innovation, and sustainable practices, we have earned a reputation as a trusted provider of custom-made furniture and handicrafts. We take pride in our ability to transform ideas into tangible creations that reflect the individuality and style of our clients.
As we continue on our journey, we remain steadfast in our mission to deliver exceptional craftsmanship, foster local talent, and contribute to a greener future. Join us in exploring the world of bespoke bamboo products and discover the beauty of sustainable living.
                </MDBCardText>

              </MDBCardBody>
            </MDBCol>

            <MDBCol md='6'>
              <MDBCardImage src={whoweare} alt='...' fluid />
            </MDBCol>
          </MDBRow>
        </MDBCard>

        <MDBCard className="marginwhyuside" alignment='center'>
          <MDBRow  >

            <MDBCol md='6'>
              <MDBCardImage src={ourstroy} alt='...' fluid />
            </MDBCol>

            <MDBCol md='6'>
              <MDBCardBody>
                <MDBCardTitle className="content-prod">Our Story</MDBCardTitle>
                <MDBCardText className="main-hero-para">
                  Our family has been deeply rooted in the ratan and cane furniture business. This passion for crafting exquisite furniture has been passed down through generations, as our ancestors established a legacy in this industry. Initially, our focus was on selling our products locally through trusted agents, serving our community with quality and durable furniture.
                  However, with the advancement of technology and changing market dynamics, we recognized the need to expand our reach. Ten years ago, we embarked on a new chapter in our journey by embracing the digital era and venturing into online sales. This allowed us to connect with customers beyond geographical boundaries and showcase our craftsmanship to a wider audience.With the digital platform opening up global opportunities, we took the bold step of exporting our products overseas. This decision has not only expanded our business horizons but has also enabled us to share the beauty of rattan and cane furniture with customers from different countries. We take immense pride in our heritage and are thrilled to see our designs finding homes across the world.                  
                  As we continue to write the story of our family business, we are grateful for the trust and support of our customers who have journeyed with us. We look forward to sharing more timeless creations and providing exceptional service as we build a bridge between our rich legacy and the exciting future of the rattan and cane furniture industry.

                </MDBCardText>

              </MDBCardBody>
            </MDBCol>

          </MDBRow>
        </MDBCard>

        <MDBCard className="marginwhyuside" alignment='center'>
          <MDBRow  >

            <MDBCol md='6'>
              <MDBCardBody>
                <MDBCardTitle className="content-prod">Our Craftsmanship</MDBCardTitle>
                <MDBCardText className="main-hero-para">
                Ecowoodies is a mechanized stage for a part of the world's most prepared and most puzzling specialty structures. In order to preserve, showcase and share the talent of India’s artisans with the world.  We want to have the choice to raise the pride of the Indian expert in our own specific way and energize an interest and support for an amazing practice of specialty that crosses hundreds of years and spreads across the length and breadth of the land. It is our work to coordinate a clearly remarkable assurance of regular workmanship and craftsmanship changed over into an extent of wonderful, contemporary things.
                With a legacy of craft that spans millennia and some of the forms dating as far back as to the era of the Indus Valley civilisation, the fantastic world of India’s crafts people remains unsurpassed in its beauty and extent. "Craftsmanship in India turns out effectively for endless uneducated people weave dreams, legends and fundamental regular experiences into different sorts of creative mind that can change shape over time one day to another, yet stay aware of their consistency for a seriously prolonged stretch of time to upgrade their lives. There are many universes held inside the geological furthest reaches of India. The universe of its craftspeople, with their hand made product and materials, ranges hundreds of years and spreads across the length and breadth of the land. To hundreds and thousands of Indian craftsmans, blend of utility and style gets sorted out with practically no issues… "

                <span>
                  <p>
                    <h3>
                  "We believe that with beautiful products and fair wages, a wonderful world is possible"
                  </h3>
                  </p>
                </span>

                Throughout the long term, we have developed associations with more than 2500 craftsmans straightforwardly and through our partners. Our essential mission is to enable the Indian craftsman and lift up a local area of individuals who are commonly abandoned. By deciding to straightforwardly uphold craftsmans, make based associations and social causes, we assist with encouraging a pattern of interest that sustains trust, trust and long haul connections. 

                </MDBCardText>

              </MDBCardBody>
            </MDBCol>

            <MDBCol md='6'>
              <MDBCardImage src={craftsmanship} alt='...' fluid />
            </MDBCol>
          </MDBRow>
        </MDBCard>     

        <MDBCard className="marginwhyuside" alignment='center'>
          <MDBRow  >

            <MDBCol md='6'>
              <MDBCardImage src={ecofriendly} alt='...' fluid />
            </MDBCol>

            <MDBCol md='6'>
              <MDBCardBody>
                <MDBCardTitle className="content-prod">Encouraging Environmentally Conscious Decisions</MDBCardTitle>
                <MDBCardText className="main-hero-para">
                Making mindfulness for create is inseparably connected with advancing natural decisions with a couple of exemptions. The Indian artworks expert is maybe the best moderate who endeavors to live as one with his current circumstance. While, we give a valiant effort to elevate eco-accommodating decisions to the most ideal degree, there are a couple of exemptions where helping livelihoods might come first, essentially because of our obligation to assist each art with framing and each kind of craftsman from our hinterlands.
                At the core of our business philosophy is the utilization of waste and recyclable materials in our manufacturing process. We transform discarded materials that would otherwise have no purpose, breathing new life into them. By upcycling these materials, we not only create exquisite furniture but also contribute to a healthier planet.
Our sourcing practices reflect our commitment to environmental consciousness. We carefully select raw materials that align with our sustainability goals. By using waste materials as the foundation for our products, we reduce the demand for new resources and minimize our ecological impact.
In addition to utilizing eco-friendly materials, we adhere to stringent manufacturing practices that prioritize sustainability. Our state-of-the-art machinery and production processes are designed to minimize waste, conserve energy, and reduce carbon emissions. We believe that by embracing sustainable practices, we can create beautiful furniture without compromising the well-being of our planet.
Each piece of furniture we create is a testament to our dedication to craftsmanship and environmental stewardship. Our skilled artisans blend their expertise with the natural qualities of rattan and cane to craft stunning, durable, and comfortable pieces. 

                </MDBCardText>

              </MDBCardBody>
            </MDBCol>

          </MDBRow>
        </MDBCard>
        <MyTeams/>
        <Footer />
      </div>
    </>
  );
};

export default Whyus;