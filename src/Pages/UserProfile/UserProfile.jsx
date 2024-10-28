import React, { useState, useContext } from "react";
import NavWithSearchBar from "../../components/Navbar/NavWithSearchBar";
import { FooterMain } from "../../components/Footer/FooterMain";
import ProfileHeadUser from "../../components/Profile/ProfileHeadUser";
import ProfileOptionUser from "../../components/Profile/ProfileOptionUser";
import ProfileWork from "../../components/Profile/ProfileWork";
import ProfileLikes from "../../components/Profile/ProfileLikes";
import ProfileAbout from "../../components/Profile/ProfileAbout";
import { userProfileContext } from "../../App";

const UserProfile = () => {
  const [isShowWork, setIsShowWork] = useState(true);
  const [isShowLikes, setIsShowLikes] = useState(false);
  const [isShowAbout, setIsShowAbout] = useState(false);
  const { userProfile, setUserProfile } = useContext(userProfileContext);

  const handleIsShowWork = () => {
    setIsShowWork(true);
    setIsShowLikes(false);
    setIsShowAbout(false);
  };

  const handleIsShowLikes = () => {
    setIsShowLikes(true);
    setIsShowWork(false);
    setIsShowAbout(false);
  };

  const handleIsShowAbout = () => {
    setIsShowAbout(true);
    setIsShowLikes(false);
    setIsShowWork(false);
  };

  return (
    <div>
      <NavWithSearchBar />
      <ProfileHeadUser />
      <ProfileOptionUser
        isShowWork={isShowWork}
        isShowLikes={isShowLikes}
        isShowAbout={isShowAbout}
        handleIsShowWork={handleIsShowWork}
        handleIsShowLikes={handleIsShowLikes}
        handleIsShowAbout={handleIsShowAbout}
      />
      <div className=" px-5 sm:px-12 ">
        <ProfileWork profileWork={userProfile} isShowWork={isShowWork} />
        <ProfileLikes profileLikes={userProfile} isShowLikes={isShowLikes} />
        <ProfileAbout profileAbout={userProfile} isShowAbout={isShowAbout} />
        <FooterMain />
      </div>
    </div>
  );
};

export default UserProfile;
