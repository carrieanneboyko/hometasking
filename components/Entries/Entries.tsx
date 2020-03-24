import React, { Fragment } from "react";

interface EntriesProps {
  entries?: string[];
  tweets?: any;
}

const Entries: React.FC<EntriesProps> = ({ entries }) => {
  return (
    <Fragment>
      <p>
        Entries will go here, pending access to the Twitter API can be
        authorised.
      </p>
      {/* <h3>ENTRIES</h3>
      {JSON.stringify(entries)}
      <h3>END ENTRIES</h3> */}
    </Fragment>
  );
};

export default Entries;
