import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Profile = (props) => {
  return (
    <Container>
      <ProfileHeader>
        <Background>
        <img
          src={props.user && props.user.photoURL ? props.user.photoURL : "/images/photo.svg"}
          alt="Profile Picture"
        />
      </Background>
        <h1>{props.user ? props.user.displayName : "Your Name"}</h1>
        <p>OCI Certified | Senior Analyst at HCLTech | Exadata | Oracle Database | Cloud</p>
        <p>Uttar Pradesh, India</p>
      </ProfileHeader>
      <ProfileContent>
        <ProfileSection>
          <h2>About <EditIcon>✎</EditIcon></h2>
          <p>
            Dedicated professional with a keen proclivity for databases, specifically in complex technologies like Exadata, Oracle RAC, RMAN, etc. Recognized for a swift learning aptitude and an innate ability to seamlessly adapt to dynamic environments. I derive immense satisfaction from confronting fresh challenges and ensuring uninterrupted operations in critical database environments. Committed to driving excellence through continuous learning and innovation.
          </p>
        </ProfileSection>
        <ProfileSection>
          <h2>Education <EditIcon>✎</EditIcon></h2>
          <EducationItem>
            <img src="/images/bits.svg" alt="BITS Pilani" />
            <div>
              <div className="institution">BITS Pilani Work Integrated Learning Programmes</div>
              <div className="degree">B.Sc in Design and Computing</div>
              <div className="dates">Nov 2020 - Nov 2024</div>
            </div>
          </EducationItem>
          <EducationItem>
            <img src="/images/ca.png" alt="Central Academy Schools" />
            <div>
              <div className="institution">Central Academy Schools</div>
              <div className="degree">Intermediate</div>
              <div className="dates">Apr 2018 - Mar 2019</div>
            </div>
          </EducationItem>
        </ProfileSection>
        <ProfileSection>
          <h2>Skills <EditIcon>✎</EditIcon></h2>
          <SkillsList>
            <div className="skill">Oracle Database</div>
            <div className="skill">Exadata</div>
            <div className="skill">Oracle RAC</div>
            <div className="skill">RMAN</div>
            <div className="skill">Cloud</div>
            <div className="skill">Database Administration</div>
            <div className="skill">Database Design</div>
            <div className="skill">SQL</div>
            <div className="skill">Performance Tuning</div>
          </SkillsList>
        </ProfileSection>
      </ProfileContent>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  /* background-image: url("/images/back.png"); */
  justify-content: center;
`;

const ProfileHeader = styled.div`
  width: 1000px;
  padding: 30px;
  text-align: center;
  background-image: url("/images/back.png");
  background-size: cover;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
 
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px solid white;
  }

  h1 {
    margin: 10px 0;
    font-size: 24px;
  }

  p {
    margin: 5px 0;
    color: #080000;
  }
`;

const Background= styled.div`
            background: url("/images/oracle.jpg");
            background-size: contain;
            height:200px;
            display: flex;
            justify-content: center;
            align-items: center;
        
`;

const ButtonGroup = styled.div`
  margin-top: 15px;

  button {
    margin: 5px;
    padding: 10px 15px;
    background-color: #0073b1;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #005582;
    }
  }
`;

const ProfileContent = styled.div`
  width: 800px;
  padding: 30px;
  background-color: #fff;
  background-image: url("/images/back.png");
  background-size: cover;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const ProfileSection = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  h2 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  p {
    margin: 5px 0;
    color: #666;
  }
`;

const EditIcon = styled.span`
  float: right;
  cursor: pointer;
`;

const EducationItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  img {
    width: 50px;
    height: 50px;
    margin-right: 15px;
  }

  .institution {
    font-weight: bold;
  }

  .degree {
    color: #666;
  }
`;

const ShowMore = styled.a`
  color: #0073b1;
  cursor: pointer;
  text-align: right;
  display: block;
  margin-top: 10px;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;

  .skill {
    background-color: #eef3f8;
    color: #333;
    padding: 5px 10px;
    border-radius: 5px;
    margin: 5px;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(Profile);
