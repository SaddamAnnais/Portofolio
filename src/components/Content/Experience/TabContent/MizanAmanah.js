const { TabPanel } = require("./TabPanel");

export const MizanAmanah = ({value}) => {
  return (
    <TabPanel
      value={value}
      index={1}
      title="Data Analyst Intern at Mizan Amanah"
      duration="Dec 2021 - Jan 2022"
    >
      • Analyzed over 90.000 data transactions to identify trends, patterns and
      insights that guided marketing and product development strategies. 
      <br />
      <br />
      • Built dashboards using Looker Studio/Google Data Studio to
      visualize insights and improve data-driven decision making
    </TabPanel>
  );
};
