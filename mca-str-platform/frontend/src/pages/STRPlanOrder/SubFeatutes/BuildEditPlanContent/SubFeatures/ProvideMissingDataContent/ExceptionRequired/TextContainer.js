import React from "react";
import {
  MarginLessH4,
  MarginLessP,
  MissingDataContainerDiv,
} from "styles/pages/STRPlanOrder";

export default function TextContainer() {
  return (
    <MissingDataContainerDiv>
      <MarginLessH4>Exception Required</MarginLessH4>
      <MarginLessP>
        The selected offer recommends a maximum of 3 total loans, and the
        proposal requests 5. You may either change the election(s) or request an
        exception. If you would like to request an exception, use the Add
        Exception button to do so.
      </MarginLessP>
    </MissingDataContainerDiv>
  );
}
