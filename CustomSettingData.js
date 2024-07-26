import React, { useEffect, useState } from 'react';
import { Collapse, Table, Spin, ConfigProvider } from 'antd';
import axios from 'axios';
import 'antd/dist/reset.css';

const { Panel } = Collapse;

const AccordionWithTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = 'https://event-tracker-23el.onrender.com/customsettings';
    axios.get(apiUrl)
      .then(response => {
        console.log('API response:', response.data); 
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const renderTable = (fields) => {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Value',
        dataIndex: 'value',
        key: 'value',
      },
      {
        title: 'Last Modified DateTime',
        dataIndex: 'lastModifiedDateTime',
        key: 'lastModifiedDateTime',
      },
      {
        title: 'Last Modified By',
        dataIndex: 'lastModifiedBy',
        key: 'lastModifiedBy',
      }
    ];

    return (
      <Table
        dataSource={fields}
        columns={columns}
        pagination={false}
        rowKey={(record, idx) => idx}
      />
    );
  };

  return (
    <div style={{ padding: '20px' }}>
      {loading ? (
        <Spin />
      ) : (
        <Collapse accordion>
          {data.map((org, orgIndex) => (
            <Panel header={org.orgId} key={orgIndex}>
              {org.events.customSettings.map((setting, settingIndex) => (
                <Collapse key={settingIndex} accordion>
                  <Panel header={setting.name} key={settingIndex}>
                    {renderTable(setting.fields)}
                  </Panel>
                </Collapse>
              ))}
            </Panel>
          ))}
        </Collapse>
      )}
    </div>
  );
};

const App = () => (
  <ConfigProvider>
    <AccordionWithTable />
  </ConfigProvider>
);

export default App;
