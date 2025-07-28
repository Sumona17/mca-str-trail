import React from "react";
import BackgroundInfo from "../SubFeatures/BackgroundInfo";
import LoanTable from "pages/STRProductOffer/SubFeatures/LoanTable";

export const step_list = [
  {
    label: "Background Info 100%",
    content: <BackgroundInfo />,
    disabled: false,
  },
  {
    label: "Recordkeeping 90%",
    disabled: true,
    children: [
      {
        label: "Money Sources [50%]",
        content: <>Money Sources form content</>,
        disabled: true,
      },
      {
        label: "Enrollment [100%]",
        content: <>Enrollment form content</>,
        disabled: true,
      },
      {
        label: "Eligibility [100%]",
        content: <>Eligibility form content</>,
        disabled: true,
      },
      {
        label: "Contributions [100%]",
        content: <>Contributions form content</>,
        disabled: true,
      },
      {
        label: "Withdrawals [100%]",
        content: <>Withdrawals form content</>,
        disabled: true,
      },
      {
        label: "Loans [75%]",
        content: <LoanTable />,
        disabled: false,
      },
      {
        label: "Vesting [100%]",
        content: <>Vesting form content</>,
        disabled: true,
      },
    ],
  },
  {
    label: "Participant Svcs 100%",
    content: <>Participant Syncs</>,
    disabled: true,
  },
  {
    label: "Plan Services 100%",
    content: <>Plan Services form content</>,
    disabled: true,
  },
  {
    label: "Investments 24%",
    disabled: true,
    children: [
      {
        label: "Advisory[50%]",
        content: <>Advisory</>,
        disabled: true,
      },
      {
        label: "Lineup[20%]",
        content: <>Lineup</>,
        disabled: true,
      },
      {
        label: "Mapping[0%]",
        content: <>Eligibility form content</>,
        disabled: true,
      },
    ],
  },
  {
    label: "Pricing 100%",
    content: <>Pricing form content</>,
    disabled: true,
  },
];
