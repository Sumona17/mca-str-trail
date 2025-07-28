import React from "react";
import BuildEditPlanContent from "../SubFeatutes/BuildEditPlanContent";
import BuildEditPlanIcon from "assets/images/buileditplan.png";
import ApprovePlanIcon from "assets/images/approval.svg";
import ShareProposalIcon from "assets/images/shareproposal.png";

export const tab_list = [
  {
    key: "0",
    label: "Build/Edit Plan",
    icon: (
      <img
        src={BuildEditPlanIcon}
        alt="build"
        style={{ width: 25, marginRight: 6 }}
      />
    ),
    activeIcon: (
      <img
        src={BuildEditPlanIcon}
        alt="build"
        style={{ width: 25, marginRight: 6 }}
      />
    ),

    content: <BuildEditPlanContent />,
    disabled: false,
  },
  {
    key: "1",
    label: "Approve Plan",
    icon: (
      <img
        src={ApprovePlanIcon}
        alt="build"
        style={{ width: 25, marginRight: 6 }}
      />
    ),
    activeIcon: (
      <img
        src={ApprovePlanIcon}
        alt="build"
        style={{ width: 25, marginRight: 6 }}
      />
    ),

    content: "Approve Plan Content",
    disabled: true,
  },
  {
    key: "2",
    label: "Share Proposal",
    icon: (
      <img
        src={ShareProposalIcon}
        alt="build"
        style={{ width: 25, marginRight: 6 }}
      />
    ),
    activeIcon: (
      <img
        src={ShareProposalIcon}
        alt="build"
        style={{ width: 25, marginRight: 6 }}
      />
    ),

    content: "Share Proposal Content",
    disabled: true,
  },
];
