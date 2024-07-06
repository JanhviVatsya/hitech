import React, { useState } from 'react';
import styled from 'styled-components';
import searchIcon from '/images/search-icon.svg';

const JobsPage = () => {
    const [successMessageVisible, setSuccessMessageVisible] = useState(false);
    const [jobs, setJobs] = useState([
        {
            id: 1,
            companyLogo: '/images/company/dol.svg',
            jobTitle: 'Principal Oracle DBA',
            project: 'PHP',
            jobLocation: 'Noida, Uttar Pradesh, India (On-site)',
        },
        {
            id: 2,
            companyLogo: '/images/company/hp.png',
            jobTitle: 'Network Administrator',
            project: 'HP',
            jobLocation: 'Noida, Uttar Pradesh, India (Hybrid)',
        },
        {
            id: 3,
            companyLogo: '/images/company/terra.png',
            jobTitle: 'Database Administrator',
            project: 'Terraform',
            jobLocation: 'Lucknow, Uttar Pradesh, India (On-site)',
        },
        {
            id: 4,
            companyLogo: '/images/company/amazon.jpg',
            jobTitle: 'Frontend Developer',
            project: 'Amazon',
            jobLocation: 'Bangalore, India (Remote)',
        },
        {
            id: 5,
            companyLogo: '/images/company/boat.jpg',
            jobTitle: 'Backend Engineer',
            project: 'BOAT',
            jobLocation: 'Hyderbad India (On-site)',
        },
        {
            id: 6,
            companyLogo: '/images/company/flip.png',
            jobTitle: 'UI/UX Designer',
            project: 'Flipkart',
            jobLocation: 'Nagpur, India (Hybrid)',
        },
        {
            id: 7,
            companyLogo: '/images/company/cummins.png',
            jobTitle: 'Data Scientist',
            project: 'Cummins',
            jobLocation: 'Chennai, India (Remote)',
        },
        {
            id: 8,
            companyLogo: '/images/company/react.png',
            jobTitle: 'Software Engineer',
            project: 'React',
            jobLocation: 'Lucknow, Uttar Pradesh, India (On-site)',
        },
        {
            id: 9,
            companyLogo: '/images/company/google.jpg',
            jobTitle: 'Backend Developer',
            project: 'Google',
            jobLocation: 'Chennai, India (Remote)',
        },
        {
            id: 10,
            companyLogo: '/images/company/adit.png',
            jobTitle: 'Product Manager',
            project: 'Birla',
            jobLocation: 'Noida, Uttar Pradesh, India (Hybrid)',
        },
        {
            id: 11,
            companyLogo: '/images/company/cisco.png',
            jobTitle: 'Network Administrator',
            project: 'Cisco',
            jobLocation: 'Hyderabad, India (On-site)',
        },
        {
            id: 12,
            companyLogo: '/images/company/aws.png',
            jobTitle: 'DevOps Engineer',
            project: 'AWS',
            jobLocation: 'Chennai, India (Remote)',
        },
        {
            id: 13,
            companyLogo: '/images/company/at.png',
            jobTitle: 'ITIL Engineer',
            project: 'Atmos',
            jobLocation: 'Noida, Uttar Pradesh, India (Hybrid)',
        },
        {
            id: 14,
            companyLogo: '/images/company/len.jpg',
            jobTitle: 'Cybersecurity Specialist',
            project: 'Lenevo',
            jobLocation: 'Lucknow, Uttar Pradesh, India (Hybrid)',
        },
        {
            id: 15,
            companyLogo: '/images/company/mi.jpg',
            jobTitle: 'Exadata Administrator',
            project: 'Xiaomi',
            jobLocation: 'Banglore, India (Remote)',
        },
        {
            id: 16,
            companyLogo: '/images/company/dell.png',
            jobTitle: 'Windows Administrator',
            project: 'DELL',
            jobLocation: 'Nagpur, India (Hybrid)',
        },
        {
            id: 17,
            companyLogo: '/images/company/pepsi.svg',
            jobTitle: 'AI/ML Engineer',
            project: 'GL Pepsi',
            jobLocation: 'Chennai, India (On-site)',
        },
        {
            id: 18,
            companyLogo: '/images/company/disney.jpg',
            jobTitle: 'Quality Assurance Tester',
            project: 'Disney',
            jobLocation: 'Lucknow, Uttar Pradesh, India (Remote)',
        },
        {
            id: 19,
            companyLogo: '/images/company/mic.png',
            jobTitle: 'Unix Administrator',
            project: 'Microsoft',
            jobLocation: 'Hyderbad, India (Hybrid)',
        },
        {
            id: 20,
            companyLogo: '/images/company/pep.png',
            jobTitle: 'SD Desk Administrator',
            project: 'Pepsico',
            jobLocation: 'Banglore, India (On-site)',
        },
    ]);

    const applyJob = (id) => {
        const job = jobs.find(job => job.id === id);
        if (job) {
            const notification = `You have applied for ${job.jobTitle} role successfully. You will be notified.`;
            localStorage.setItem('notifications', JSON.stringify([...JSON.parse(localStorage.getItem('notifications') || '[]'), notification]));
        }

        setJobs(jobs.filter(job => job.id !== id));
        setSuccessMessageVisible(true);
        setTimeout(() => {
            setSuccessMessageVisible(false);
        }, 3000);
    };

    const searchJobs = (event) => {
        const filter = event.target.value.toLowerCase();
        const jobCards = document.getElementsByClassName('job-card');
        for (let i = 0; i < jobCards.length; i++) {
            const jobTitle = jobCards[i].getElementsByClassName('job-title')[0];
            if (jobTitle) {
                const txtValue = jobTitle.textContent || jobTitle.innerText;
                if (txtValue.toLowerCase().indexOf(filter) > -1) {
                    jobCards[i].style.display = '';
                } else {
                    jobCards[i].style.display = 'none';
                }
            }
        }
    };

    return (
        <Container>
            <Header>
                <Logo src="/images/logo.svg" alt="Logo" />
            </Header>
            <SearchContainer>
                <SearchBar
                    type="text"
                    placeholder="Search for Project Role"
                    onChange={searchJobs}
                />
            </SearchContainer>
            <SuccessMessage style={{ display: successMessageVisible ? 'block' : 'none' }}>
                Applied successfully
            </SuccessMessage>
            {jobs.map(job => (
                <JobCard key={job.id} className="job-card">
                    <JobInfo>
                        <JobImage src={job.companyLogo} alt="Company Logo" />
                        <JobDetails>
                            <p className="job-title">{job.jobTitle}</p>
                            <p className="job-project">{job.project}</p>
                            <p className="job-location">{job.jobLocation}</p>
                        </JobDetails>
                    </JobInfo>
                    <ApplyButton onClick={() => applyJob(job.id)}>Apply Now</ApplyButton>
                </JobCard>
            ))}
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    background-color: #fff;
    padding: 20px;

    &:before {
        content: "";
        position: absolute;
        height: 6500px;
        width: 2500px;
        top: -20%;
        right: 38%;
        transform: translateY(-50%);
        background-image: linear-gradient(-45deg, #4481eb 0%, #04befe 100%);
        transition: 1.8s ease-in-out;
        border-radius: 50%;
        z-index: 0;
    }
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1;
`;

const Logo = styled.img`
    height: 40px;
`;

const SearchContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
`;

const SuccessMessage = styled.div`
    display: none;
    position: fixed;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    z-index: 1;
`;

const SearchBar = styled.input`
    width: 300px;
    padding: 10px 35px 10px 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    background-image: url(${searchIcon});
    background-repeat: no-repeat;
    background-position: calc(100% - 15px) center;
    background-size: 20px 20px;
    margin-right: 20px;
`;

const JobCard = styled.div`
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    max-width: 1000px;
    margin: 20px auto;
`;

const JobInfo = styled.div`
    display: flex;
    align-items: center;
`;

const JobImage = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 10px;
`;

const JobDetails = styled.div`
    max-width: 70%;
`;

const ApplyButton = styled.button`
    background-color: #0073b1;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #005f90;
    }
`;

export default JobsPage;
