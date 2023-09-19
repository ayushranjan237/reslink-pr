import SizemdStatusIconFalseSt from "../components/SizemdStatusIconFalseSt";
import SizesmHierarchyTertiaryGr from "../components/SizesmHierarchyTertiaryGr";
import StateDefaultTypeSearchI from "../components/StateDefaultTypeSearchI";
import WelcomeBackHeaderSectionContai from "../components/WelcomeBackHeaderSectionContai";
import SizemdHierarchyPrimaryIc from "../components/SizemdHierarchyPrimaryIc";
import MetricItemContainer from "../components/MetricItemContainer";
import MetricItemContainer1 from "../components/MetricItemContainer1";
import RecentActivitiesCard from "../components/RecentActivitiesCard";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="divhero-blur-bg" />
      <div className="sidebar-navigation">
        <div className="content">
          <div className="nav">
            <div className="header">
              <img className="logo-icon" alt="" src="/logo1.svg" />
            </div>
            <div className="navigation">
              <div className="nav-item-base">
                <div className="content1">
                  <img
                    className="bar-chart-2-icon"
                    alt=""
                    src="/barchart2.svg"
                  />
                  <div className="text4">Dashboard</div>
                </div>
              </div>
              <div className="nav-item-base1">
                <div className="content1">
                  <img className="bar-chart-2-icon" alt="" src="/3layers.svg" />
                  <div className="text4">Projects</div>
                </div>
              </div>
              <div className="nav-item-base1">
                <div className="content1">
                  <img className="bar-chart-2-icon" alt="" src="/users.svg" />
                  <div className="text4">Staffing</div>
                </div>
              </div>
              <div className="nav-item-base1">
                <div className="content1">
                  <img
                    className="bar-chart-2-icon"
                    alt=""
                    src="/solarchatlinebroken.svg"
                  />
                  <div className="text4">Messages</div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-parent">
            <div className="footer">
              <div className="navigation1">
                <div className="nav-item-base4">
                  <div className="content1">
                    <img
                      className="bar-chart-2-icon"
                      alt=""
                      src="/barchart2.svg"
                    />
                    <div className="text4">Support</div>
                  </div>
                </div>
                <div className="nav-item-base4">
                  <div className="content1">
                    <img
                      className="bar-chart-2-icon"
                      alt=""
                      src="/settings.svg"
                    />
                    <div className="text4">Settings</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer1">
              <img className="divider-icon" alt="" src="/divider.svg" />
              <div className="account">
                <SizemdStatusIconFalseSt
                  textFontFamily="Poppins"
                  textColor="#fefefe"
                  supportingTextFontFamily="Poppins"
                  supportingTextColor="#f2f4f7"
                />
                <div className="icon">
                  <SizesmHierarchyTertiaryGr
                    circle="/logout.svg"
                    sizesmHierarchyTertiaryGrPosition="absolute"
                    sizesmHierarchyTertiaryGrTop="calc(50% - 18px)"
                    sizesmHierarchyTertiaryGrLeft="calc(50% - 18px)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divhero-blur-bg1" />
      <StateDefaultTypeSearchI
        searchIcon="/search-icon1.svg"
        stateDefaultTypeSearchIWidth="341px"
        stateDefaultTypeSearchIPosition="absolute"
        stateDefaultTypeSearchITop="calc(50% - 448px)"
        stateDefaultTypeSearchILeft="332px"
        rectangleDivBorderRadius="26px"
        rectangleDivBackgroundColor="#101215"
        textWidth="48px"
        searchFontFamily="Poppins"
        searchColor="#fefefe"
        searchOpacity="0.8"
      />
      <div className="vuesaxlinearnotification-wrapper">
        <img
          className="vuesaxlinearnotification-icon1"
          alt=""
          src="/vuesaxlinearnotification1.svg"
        />
      </div>
      <div className="footer2">
        <div className="footer-child" />
        <div className="copyright-2023-reslink-all-wrapper">
          <div className="copyright-2023">
            Copyright © 2023. Reslink. All rights reserved.
          </div>
        </div>
      </div>
      <WelcomeBackHeaderSectionContai />
      <SizemdHierarchyPrimaryIc
        circle="/plus.svg"
        text="Create New Project"
        sizemdHierarchyPrimaryIcPosition="absolute"
        sizemdHierarchyPrimaryIcTop="32px"
        sizemdHierarchyPrimaryIcRight="53px"
        buttonBaseBorderRadius="25px"
        buttonBaseBackgroundColor="#3fa268"
        buttonBaseBorder="1px solid var(--primary-green)"
        buttonBasePadding="13px var(--padding-xl)"
        textFontFamily="Poppins"
        textColor="#fefefe"
      />
      <section className="metric-group">
        <MetricItemContainer
          projectNumber="07"
          listIcon="Active Projects"
          imageIconUrl="/frame-1261152735.svg"
        />
        <MetricItemContainer
          projectNumber="04"
          listIcon="Proposals"
          imageIconUrl="/frame-12611527351.svg"
        />
        <MetricItemContainer
          projectNumber="03"
          listIcon="Active Jobs"
          imageIconUrl="/frame-12611527352.svg"
        />
        <MetricItemContainer
          projectNumber="240"
          listIcon="Application"
          imageIconUrl="/frame-12611527353.svg"
        />
      </section>
      <section className="metric-item-parent">
        <MetricItemContainer1 />
        <RecentActivitiesCard />
      </section>
    </div>
  );
};

export default Dashboard;
