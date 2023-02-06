import React, { useState } from 'react';
import {
  getMockTableColumns,
  mockOrderStatusTableRowsV2,
} from "@vista/shared-components/lib/components/TableV2New/__mocks__/mockTableData";
import './App.css';
import TableV2New from '@vista/shared-components/lib/components/TableV2New';
import { MockTableRowV2 } from "@vista/shared-components/lib/components/TableV2New/types";
import { getTableRowsInGroup } from "@vista/shared-components/lib/components/TableV2New/utils/getTableRowsInGroup";

import themeCommon, {
  ThemeProvider,
  ThemeHEALTH,
  ThemePOSB,
  ThemeBronze,
  getThemeToken
} from "@health/theme-common";
import Button from '@health/buttons';
function App() {
  const [isLastPage, setIsLastPage] = useState(false);
  const mockTableColumns = getMockTableColumns();
  const [rowsData, setRowsData] = useState(
    mockOrderStatusTableRowsV2.slice(0, 4)
  );
  let timeout: NodeJS.Timeout;
  const [fetching, setFetching] = useState(false);
  
  const onScrollToBottom = () => {
    if (!isLastPage) {
      setFetching(true);
      timeout = setTimeout(() => {
        setFetching(false);
        setIsLastPage(true);
        setRowsData(mockOrderStatusTableRowsV2);
      }, 2000);
      // setRowsData(mockOrderStatusTableRowsV2);
    }
  };



  return (
    <div className="App">
      <ThemeProvider theme={{ ...themeCommon(), ...ThemeHEALTH }}>
        <Button kind="primary" size="small">dasdd</Button>
        <TableV2New
          columns={mockTableColumns}
          rowsData={rowsData}
          displayLoadingAnimation={fetching}
          renderCustomRows={getTableRowsInGroup}
          onRowClick={() => { }}
          onScrollToBottom={onScrollToBottom}
          maxHeight={"300px"}
          // displayLoadingAnimation={false}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
