import React, { useState, useContext } from "react";
import NavWithSearchBar from "../../components/Navbar/NavWithSearchBar";
import { FooterMain } from "../../components/Footer/FooterMain";
import ProfileWork from "../../components/Profile/ProfileWork";
import ProfileDraft from "../../components/Profile/ProfileDraft";
import ProfileSaves from "../../components/Profile/ProfileSaves";
import ProfileLikes from "../../components/Profile/ProfileLikes";
import ProfileAbout from "../../components/Profile/ProfileAbout";
import ProfileJobs from "../../components/Profile/ProfileJobs";
import ProfileStats from "../../components/Profile/ProfileStats";
import ProfileHeadDesigner from "../../components/Profile/ProfileHeadDesigner";
import ProfileOptionDesigner from "../../components/Profile/ProfileOptionDesigner";
import { userProfileContext } from "../../App";

const DesignerProfile = () => {
  const [isShowWork, setIsShowWork] = useState(true);
  const [isShowDraft, setIsShowDraft] = useState(false);
  const [isShowSaves, setIsShowSaves] = useState(false);
  const [isShowLikes, setIsShowLikes] = useState(false);
  const [isShowAbout, setIsShowAbout] = useState(false);
  const [isShowJob, setIsShowJob] = useState(false);
  const [isShowStats, setShowStats] = useState(false);
  const { userProfile, setUserProfile } = useContext(userProfileContext);

  const handleIsShowWork = () => {
    setIsShowWork(true);
    setIsShowDraft(false);
    setIsShowSaves(false);
    setIsShowLikes(false);
    setIsShowAbout(false);
    setIsShowJob(false);
    setShowStats(false);
  };

  const handleIsShowDraft = () => {
    setIsShowDraft(true);
    setIsShowWork(false);
    setIsShowSaves(false);
    setIsShowLikes(false);
    setIsShowAbout(false);
    setIsShowJob(false);
    setShowStats(false);
  };

  const handleIsShowSaves = () => {
    setIsShowSaves(true);
    setIsShowDraft(false);
    setIsShowWork(false);
    setIsShowLikes(false);
    setIsShowAbout(false);
    setIsShowJob(false);
    setShowStats(false);
  };

  const handleIsShowLikes = () => {
    setIsShowLikes(true);
    setIsShowSaves(false);
    setIsShowDraft(false);
    setIsShowWork(false);
    setIsShowAbout(false);
    setIsShowJob(false);
    setShowStats(false);
  };

  const handleIsShowAbout = () => {
    setIsShowAbout(true);
    setIsShowLikes(false);
    setIsShowSaves(false);
    setIsShowDraft(false);
    setIsShowWork(false);
    setIsShowJob(false);
    setShowStats(false);
  };

  const handleIsShowJob = () => {
    setIsShowJob(true);
    setIsShowAbout(false);
    setIsShowLikes(false);
    setIsShowSaves(false);
    setIsShowDraft(false);
    setIsShowWork(false);
    setShowStats(false);
  };

  const handleIsShowStats = () => {
    setShowStats(true);
    setIsShowAbout(false);
    setIsShowLikes(false);
    setIsShowSaves(false);
    setIsShowDraft(false);
    setIsShowWork(false);
    setIsShowJob(false);
    handleStatsAnimator();
  };

  console.log(userProfile);

  return (
    <div>
      <NavWithSearchBar />
      <ProfileHeadDesigner />
      <ProfileOptionDesigner
        isShowWork={isShowWork}
        isShowDraft={isShowDraft}
        isShowSaves={isShowSaves}
        isShowLikes={isShowLikes}
        isShowAbout={isShowAbout}
        isShowJob={isShowJob}
        isShowStats={isShowStats}
        handleIsShowWork={handleIsShowWork}
        handleIsShowDraft={handleIsShowDraft}
        handleIsShowSaves={handleIsShowSaves}
        handleIsShowLikes={handleIsShowLikes}
        handleIsShowAbout={handleIsShowAbout}
        handleIsShowJob={handleIsShowJob}
        handleIsShowStats={handleIsShowStats}
      />
      <div className=" px-5 sm:px-12 ">
        <ProfileWork profileWork={userProfile} isShowWork={isShowWork} />
        <ProfileDraft profileDraft={userProfile} isShowDraft={isShowDraft} />
        <ProfileSaves profileSaves={userProfile} isShowSaves={isShowSaves} />
        <ProfileLikes profileLikes={userProfile} isShowLikes={isShowLikes} />
        <ProfileAbout profileAbout={userProfile} isShowAbout={isShowAbout} />
        <ProfileJobs profileJobs={userProfile} isShowJob={isShowJob} />
        <ProfileStats profileStats={userProfile} isShowStats={isShowStats} />
        <FooterMain />
      </div>
    </div>
  );
};

export default DesignerProfile;
