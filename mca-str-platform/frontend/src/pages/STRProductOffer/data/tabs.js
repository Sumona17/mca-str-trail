// pages/STRProductOffer/data/tabs.js
import React from "react";
import EditOfferLayout from "../SubFeatures/EditOfferLayout";
import PublishOffer from "../SubFeatures/Publish Offer/PublishOffer";
import ReviewIcon from "assets/svg/review.svg";
import PublishIcon from "assets/svg/publish.svg";
import OfferIcon from "assets/svg/offer.svg";
import BuildIcon from "assets/svg/build.svg";
import ActiveBuildIcon from "assets/svg/build-blue.svg";
import ActivePublish from "assets/svg/publish-blue.svg";

export const tab_list = (setActiveTab) => [
  {
    key: "0",
    label: "Build/Edit Offer",
    icon: (
      <img src={BuildIcon} alt="build" style={{ width: 25, marginRight: 6 }} />
    ),
    activeIcon: (
      <img
        src={ActiveBuildIcon}
        alt="build"
        style={{ width: 25, marginRight: 6 }}
      />
    ),
    content: <EditOfferLayout setActiveTab={setActiveTab} />,
  },
  {
    key: "1",
    label: "Review/Submit Offer",
    icon: (
      <img
        src={ReviewIcon}
        alt="review"
        style={{ width: 25, marginRight: 6 }}
      />
    ),
    activeIcon: (
      <img
        src={ReviewIcon}
        alt="review"
        style={{ width: 25, marginRight: 6 }}
      />
    ),
    content: "Review/Submit Offer Content",
    disabled: true,
    color:'rgb(155, 148, 148)'
  },
  {
    key: "2",
    label: "Publish Offer",
    icon: (
      <img
        src={PublishIcon}
        alt="publish"
        style={{ width: 25, marginRight: 6 }}
      />
    ),
    activeIcon: (
      <img
        src={ActivePublish}
        alt="review"
        style={{ width: 25, marginRight: 6 }}
      />
    ),
    content: <PublishOffer />,
  },
  {
    key: "3",
    label: "Offer Insights",
    icon: (
      <img
        src={OfferIcon}
        alt="publish"
        style={{ width: 25, marginRight: 6 }}
      />
    ),
    activeIcon: (
      <img src={OfferIcon} alt="review" style={{ width: 25, marginRight: 6 }} />
    ),
    content: "Offer Insights Content",
    disabled: true,
     color:'rgb(155, 148, 148)'
  },
];
