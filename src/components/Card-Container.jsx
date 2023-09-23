import React from "react";
import Card from "./Card";
import "./Card-Container.css";

const CardContainer = () => {
    return (
        <div className="card-container">
            <Card
                image="https://lh3.googleusercontent.com/p/AF1QipNV48qH4Xhr3HsGznZGQjMBAfFzpWxxWtXGwb_I=s1360-w1360-h1020"
                title="Soup Kitchen Volunteer"
                organization="Community Help in Park Slope (CHiPS)"
                description="Help with meal+snack preparation, and organize supplies and donations to help feed Brooklyn."
                link="https://chipsonline.org/volunteer/"
            />
            <Card
                image="https://www.guidestar.org/ViewEdoc.aspx?eDocId=8993266&approved=True"
                title="CoachArt Volunteer"
                organization="CoachArt"
                description="Teach arts and athletics to children with chronic illnesses, and help make a lasting impact on their lives."
                link="https://coachart.org/volunteer/"
            />
            <Card
                image="https://images.squarespace-cdn.com/content/v1/520a5333e4b0b43f79760bc9/1634741270093-6I0LX92S15FXF9F405ZP/P1900326.jpg?format=2500w"
                title="Pizza on the Pier Volunteer"
                organization="Slice Out Hunger Inc."
                description="Help serve pizza to hungry New Yorkers. Proceeds from this event will help raise money for hunger relief."
                link="https://sliceouthunger.org/volunteer"
            />
            <Card
                image="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F590670739%2F1363742114953%2F1%2Foriginal.20230905-182046?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C714%2C4032%2C2016&s=8017406becfb8ce01a3c514092ec9a3c"
                title="Tree Carer"
                organization="Gowanus Canal Conservancy"
                description="Take care of Brooklyn's trees by weeding and applying compost to local street trees. "
                link="https://www.eventbrite.com/e/gowanus-tree-care-event-tickets-713897074367?aff=oddtdtcreator"
            />
            <Card
                image="https://www.brooklynbridgepark.org/wp-content/uploads/2020/09/large-45.jpg"
                title="Coastal Cleanup Volunteer"
                organization="Brooklyn Bridge Park"
                description="Remove trash from Brooklyn Bridge Park's beaches, salt marshes and shoreline."
                link="https://www.brooklynbridgepark.org/series/coastal-cleanup/"
            />
            <Card
                image="https://images.squarespace-cdn.com/content/v1/59076c9b20099e374ac9b724/1494262552702-XF2YGHM48JZATWJO0P4T/sb_sean_casey_shelter.jpg"
                title="SCAR Volunteer"
                organization="Sean Casey Animal Rescue"
                description="Care for animals at SCAR, and play a key role in preparing them for their forever home."
                link="https://www.nyanimalrescue.org/volunteer"
            />
            <Card
                image="https://www.bklynlibrary.org/sites/default/files/images/support/Advocacy/Capital/KH-Teen-02.jpg"
                title="After-School Homework Helper"
                organization="Brooklyn Public Library"
                description="Give support, assistance, and encouragement to children in grades 1-8 with their homework, and make a difference in their lives."
                link="https://www.bklynlibrary.org/support/volunteer/after-school-homework"
            />
            <Card
                image="https://www.bklynlibrary.org/sites/default/files/styles/eventcal_medium_split/public/images/events/calendar/TUTR%202018-40_10.jpg"
                title="Reading Coach"
                organization="Brooklyn Public Library"
                description="Help children ages 5-11 years old, expand their vocabulary and strengthen their comprehension skills, so they may become strong confident readers."
                link="https://www.bklynlibrary.org/support/volunteer/reading-coach"
            />
            <Card
                image="https://www.cobblehilllifecare.org/wp-content/uploads/2020/10/IMG_6117.jpeg"
                title="Visit A Senior"
                organization="Cobble Hill Health Center"
                description="Visit a senior at Cobble Hill Health Center, and help brighten their day."
                link="https://www.cobblehilllifecare.org/cobblehill/volunteer/"
            />
            <Card
                image="https://static.wixstatic.com/media/be7cda_c23a2a45b18e4566888a38ccc802dd74~mv2.jpg/v1/crop/x_436,y_392,w_2033,h_1325/fill/w_560,h_428,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dfuns%202022-04-25%20163313_834_JPG.jpg"
                title="Pack Grocery Boxes in Brooklyn"
                organization="Wellfare"
                description="Help pack Better Boxes filled with premium, nutritious and convenient packaged groceries for food-insecure families at Wellfare's HQ in Brooklyn."
                link="https://www.wellfare.org/volunteer"
            />
        </div>
    )
}

export default CardContainer;