import React from 'react';
import "../Community.css"
const Community = () => {
    return (
        <section className="expertise-certification expertise-team">
            <div className="container">
                <div className="expertise-certification-head">
                    <div className="content">
                        <h2>What Sets Us Apart</h2>
                        <h3>
                            We prioritize innovation and efficiency with dedicated teams for technology
                            and food safety. Our comprehensive expertise ensures that we deliver
                            top-notch solutions and services, all while prioritizing the well-being
                            of the people we work with.
                        </h3>
                    </div>
                </div>
                <div className="expertise-team-list">
                    {teamData.map((teamMember, index) => (
                        <div className="expertise-team-item" key={index}>
                            <div className="expertise-team-figure">
                                <img src={teamMember.image} alt={teamMember.name} />
                            </div>
                            <div className="expertise-team-content">
                                <h2>{teamMember.name}</h2>
                                <h3>{teamMember.title}</h3>
                                <p>{teamMember.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const teamData = [
    {
        name: 'Pawan Badak',
        title: 'President/CEO',
        image: 'https://cdn.prod.website-files.com/5fd2ba952bcd68835f2c8254/654553fedbede7976b97eaf5_Professional-5.remini-enhanced.webp',
        description:
            'Pawan is the President/CEO of Bowles Farming Company, the 6th generation in his family’s farming business. Cannon is a UC Berkeley graduate, and became the President and CEO in 2014, advocating for California agriculture and intelligent water policy. Environmental stewardship, ethical treatment of workers, and sustainable production are all extremely important to Cannon and the Bowles Farming Company team.',
    },
    {
        name: 'Dipak Pund',
        title: 'Executive Vice President',
        image: 'https://heroshotphotography.com/wp-content/uploads/2023/03/male-linkedin-corporate-headshot-on-white-square-1024x1024.jpg',
        description:
            'Dipak serves as the Executive Vice President of Bowles Farming Company, bringing 12 years of experience working as a business development representative for the world’s largest tomato processor. He joined in early 2017 after graduating from Kansas State University.',
    },
    {
        name: 'Rushikesh Jawale',
        title: 'CPA, Chief Financial Officer',
        image: 'https://i.pinimg.com/736x/f3/78/4a/f3784adc704a1bc9bcb2e494cd39caee.jpg',
        description:
            'Rushikesh is the Chief Financial Officer for Bowles Farming Company, with experience in public accounting, commercial banking and as VP of Finance for a large winery in the Central Valley. Brian holds a degree in Accounting from California State University, Fresno and earned his CPA license in 2003.',
    },
    {
        name: 'Mayur Kotkar',
        title: 'Branch Manager',
        image: 'https://i.pinimg.com/736x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg',
        description:
            'Mayur, the Branch Manager at Bowles Farming, previously spent 15 years on his grandfather’s ranch, 4 years as a custom spraying operator, and 2 years managing a ranch in the Firebaugh area. He joined Bowles in 2022.',
    },
    {
        name: 'Bhushan Bankar',
        title: 'Agronomist/Pest Management Advisor',
        image: 'https://cdn.openart.ai/stable_diffusion/20bf8d8b80ef5b05d76f4ce396d4b664467fddac_2000x2000.webp',
        description:
            'Bhushan is the company’s in-house Agronomist and Licensed Agricultural Pest Control Advisor. He oversees pest management and fertility decisions on the ranch, and he’s been with the company since 2016. Prior to joining the Bowles team, Wayne was an Independent Pest Management Specialist for 20 years.',
    },
    {
        name: 'Rahul Bade',
        title: 'Office Manager',
        image: 'https://lh4.googleusercontent.com/proxy/ZbC8BBfG0fiPuCCxkeSVTYwRgPTv483FUsy4MvI0iNW0_gv9RrHl1wnMOEnLuNBPvSWRY5eFRhzs2Y1rqSMjjX0yUk1I6qy6PHAiTAOT7mFmN-70wfY',
        description:
            'Rahul Bade is the Office Manager for Bowles Farming Company. Helen began working for Bowles Farming Company in 1978 part-time. In 1979 Helen started working full-time for BF Chemical as a chemical purchasing agent.',
    },
];

export default Community;
