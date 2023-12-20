
import React, { useState, useEffect } from 'react';
import { Table } from 'antd'; // Add 'Layout', 'Menu' here
import { MakeHttp } from './apis/restApis';






const App = () => {
  const [tableData, setTableData] = useState([]);

  const fetchDataAndSetTable = async () => {
    try {
      const res = await MakeHttp();
      if (res && res.length > 0) {
        setTableData(res.map(item => item.data.projectStatus));
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  const columns = [
    {
      title: (
        <div style={{"text-align":"center",fontWeight: 'bold',fontSize:"15px" }}>Repositories</div>
      ),
      dataIndex: 'respository',
      key: 'respository',
      width: 150,
      fixed: 'left',
      pagination: false,
    },
    {
      title: (
        <span style={{ fontWeight: 'bold',"text-align":"center",fontSize:"15px" }}>
          Reliability{' '}
        </span>
      ),
      children: [
        {
          title: (
            <span style={{ fontWeight: 'bold',textAlign:"center",fontSize:"15px" }}>
              Rating<br />
              <span style={{ color: 'orange',textAlign:"center" }}>
                ("A" - Desired)
              </span>
            </span>
          ),
          dataIndex: 'conditions[0].periodIndexValue',
          key:'Rating',
          width: 75,
          backgroundColor: '#3FBF3F',
          pagination: false,
          style: { backgroundColor: '#3FBF3F' },
          render: (text, record) => {
            const periodIndexValue = record.conditions[0]?.periodIndexValue;

            // Customize the conditions based on your requirements
            let backgroundColor = 'black'; // Default color

            if (periodIndexValue === 'A') {
              backgroundColor = '#3FBF3F'; // Set color to green if periodIndexValue is 'A'
            } else if (periodIndexValue === 'B') {
              backgroundColor = 'orange'; // Set color to orange if periodIndexValue is 'B'
            }
            else if (periodIndexValue === 'C') {
              backgroundColor = 'yellow'; // Set color to orange if periodIndexValue is 'C'
            }
            else if (periodIndexValue === 'D') {
              backgroundColor = 'orange'; // Set color to orange if periodIndexValue is 'D'
            }
            else if (periodIndexValue === 'E') {
              backgroundColor = 'red'; // Set color to orange if periodIndexValue is 'E'
            }
            else {
              backgroundColor = 'red'; // Set color to red for other values
            }
            return {
              props: {
                style: { background: backgroundColor }
              },
              children: <div style={{"text-align":"center"}}>{periodIndexValue}</div>
            };
          },
        },
        {
          title: (
            <span style={{ fontWeight: 'bold',fontSize:"15px" }} >
              Bugs<br />
              <span style={{ color: 'orange' }}>
                (Number Of Critical Bugs)
              </span>
            </span>
          ),
          dataIndex: 'conditions[1].actualValue',
          key: 'Bugs',
          pagination: false,
          width: 80,
          render: (text, record) => {
            const errorThresholdValue = record.conditions[1]?.actualValue;

            // Customize the conditions based on your requirements
            let backgroundColor = 'black'; // Default color

            if (errorThresholdValue === '0') {
              backgroundColor = '#3FBF3F'; // Set color to green if periodIndexValue is 'A'
            }
            else {
              backgroundColor = 'red'; // Set color to red for other values
            }


            return {
              props: {
                style: { background: backgroundColor }
              },
              children: <div style={{"text-align":"center"}}>{errorThresholdValue}</div>
            };
          },
        },
      ],
    },
    {
      title: (
        <span style={{ fontWeight: 'bold',fontSize:"15px" }}>
          Security{' '}
        </span>
      ),
      children: [
        {
          title: (
            <span style={{ fontWeight: 'bold',fontSize:"15px" }}>
              Rating<br />
              <span style={{ color: 'orange' }}>
                ("A" - Desired)
              </span>
            </span>
          ),
          dataIndex: 'conditions[2].periodIndexValue',
          key: 'Rating',
          width: 75,
          pagination: false,
          render: (text, record) => {
            const periodIndexValue = record.conditions[2]?.periodIndexValue;

            // Customize the conditions based on your requirements
            let backgroundColor = 'black'; // Default color

            if (periodIndexValue === 'A') {
              backgroundColor = '#3FBF3F'; // Set color to green if periodIndexValue is 'A'
            } else if (periodIndexValue === 'B') {
              backgroundColor = 'orange'; // Set color to orange if periodIndexValue is 'B'
            }
            else if (periodIndexValue === 'C') {
              backgroundColor = 'yellow'; // Set color to orange if periodIndexValue is 'C'
            }
            else if (periodIndexValue === 'D') {
              backgroundColor = 'orange'; // Set color to orange if periodIndexValue is 'D'
            }
            else if (periodIndexValue === 'E') {
              backgroundColor = 'red'; // Set color to orange if periodIndexValue is 'E'
            }
            else {
              backgroundColor = 'red'; // Set color to red for other values
            }


            return {
              props: {
                style: { background: backgroundColor }
              },
              children: <div style={{"text-align":"center"}}>{periodIndexValue}</div>
            };
          },
        },
        {
          title: (
            <span style={{ fontWeight: 'bold',fontSize:"15px" }}>
              Vulnerabilities<br />
              <span style={{ color: 'orange' }}>
                (Number Of Critical Vulnerabilities)
              </span>
            </span>
          ),
          dataIndex: 'conditions[3].actualValue',
          key: 'Vulnerabilities',
          width: 110,
          pagination: false,
          render: (text, record) => {
            const erroractualValue = record.conditions[3]?.actualValue;

            // Customize the conditions based on your requirements
            let backgroundColor = 'black'; // Default color

            if (erroractualValue === '0') {
              backgroundColor = '#3FBF3F'; // Set color to green if periodIndexValue is 'A'
            }
            else {
              backgroundColor = 'red'; // Set color to red for other values
            }


            return {
              props: {
                style: { background: backgroundColor }
              },
              children: <div style={{"text-align":"center"}}>{erroractualValue}</div>
            };
          },
        },
      ],
    },
    {
      title: (
        <span style={{ fontWeight: 'bold',fontSize:"15px" }}>
          Security Review{' '}
        </span>
      ),
      children: [
        {
          title: (
            <span style={{ fontWeight: 'bold',fontSize:"15px" }}>
              Rating<br />
              <span style={{ color: 'orange' }}>
                ("A" - Desired)
              </span>
            </span>
          ),
          dataIndex: 'conditions[12].periodIndexValue',
          key: 'Rating',
          width: 75,
          pagination: false,
          render: (text, record) => {
            const periodIndexValue = record.conditions[12]?.periodIndexValue;

            // Customize the conditions based on your requirements
            let backgroundColor = 'black'; // Default color

            if (periodIndexValue === 'A') {
              backgroundColor = '#3FBF3F'; // Set color to green if periodIndexValue is 'A'
            } else if (periodIndexValue === 'B') {
              backgroundColor = 'orange'; // Set color to orange if periodIndexValue is 'B'
            }
            else if (periodIndexValue === 'C') {
              backgroundColor = 'yellow'; // Set color to orange if periodIndexValue is 'C'
            }
            else if (periodIndexValue === 'D') {
              backgroundColor = 'orange'; // Set color to orange if periodIndexValue is 'D'
            }
            else if (periodIndexValue === 'E') {
              backgroundColor = 'red'; // Set color to orange if periodIndexValue is 'E'
            }
            else {
              backgroundColor = 'red'; // Set color to red for other values
            }

            return {
              props: {
                style: { background: backgroundColor }
              },
              children: <div style={{"text-align":"center"}}>{periodIndexValue}</div>
            };
          },
        },
        {
          title: (
            <span style={{ fontWeight: 'bold',fontSize:"15px" }}>
              Security Hotspots{' '}
              <span style={{ color: 'orange' }}>
              </span>
            </span>
          ),
          dataIndex: 'conditions[11].actualValue',
          key: 'Rating',
          width: 70,
          pagination: false,
          render: (text, record) => {
            const errorThresholdValue = record.conditions[11]?.actualValue;

            // Customize the conditions based on your requirements
            let backgroundColor = 'black'; // Default color

            if (errorThresholdValue === '0') {
              backgroundColor = '#3FBF3F'; // Set color to green if periodIndexValue is 'A'
            }
            else {
              backgroundColor = 'red'; // Set color to red for other values
            }


            return {
              props: {
                style: { background: backgroundColor }
              },
              children: <div style={{"text-align":"center"}}>{errorThresholdValue}</div>
            };
          },
        },
        {
          title: (
            <span style={{ fontWeight: 'bold',fontSize:"15px" }}>
              % Reviewed<br />
              <span style={{ color: 'orange' }}>
                ( {'>'}80% - Desired)
              </span>
            </span>
          ),
          dataIndex: 'conditions[16].actualValue',
          key: 'Review',
          width: 90,
          pagination: false,
          render: (text, record) => {
            const erroractualValue = record.conditions[16]?.actualValue;

            // Customize the conditions based on your requirements
            let backgroundColor = 'black'; // Default color

            if (erroractualValue === '0.0') {
              backgroundColor = 'red'; // Set color to green if periodIndexValue is 'A'
            }
            else {
              backgroundColor = 'white'; // Set color to red for other values
            }

            const displayValue = erroractualValue === '-' ? erroractualValue : `${erroractualValue}%`;

            return {
              props: {
                style: { background: backgroundColor }
              },
              children: <div style={{"text-align":"center"}}>{displayValue}</div>
            };
          },
        },
      ],
    },
    {
      title: (
        <span style={{ fontWeight: 'bold',fontSize:"15px" }}>
          Maintainablity{' '}
        </span>
      ),
      children: [
        {
          title: (
            <span style={{ fontWeight: 'bold',fontSize:"15px" }}>
              Rating<br />
              <span style={{ color: 'orange' }}>
                ("A" - Desired)
              </span>
            </span>
          ),
          dataIndex: 'conditions[5].periodIndexValue',
          key: 'Rating',
          width: 75,
          pagination: false,
          render: (text, record) => {
            const periodIndexValue = record.conditions[5]?.periodIndexValue;

            // Customize the conditions based on your requirements
            let backgroundColor = 'black'; // Default color

            if (periodIndexValue === 'A') {
              backgroundColor = '#3FBF3F'; // Set color to green if periodIndexValue is 'A'
            } else if (periodIndexValue === 'B') {
              backgroundColor = 'orange'; // Set color to orange if periodIndexValue is 'B'
            }
            else if (periodIndexValue === 'C') {
              backgroundColor = 'yellow'; // Set color to orange if periodIndexValue is 'C'
            }
            else if (periodIndexValue === 'D') {
              backgroundColor = 'orange'; // Set color to orange if periodIndexValue is 'D'
            }
            else if (periodIndexValue === 'E') {
              backgroundColor = 'red'; // Set color to orange if periodIndexValue is 'E'
            }
            else {
              backgroundColor = 'red'; // Set color to red for other values
            }


            return {
              props: {
                style: { background: backgroundColor }
              },
              children: <div style={{"text-align":"center"}}>{periodIndexValue}</div>
            };
          },
        },
        {
          title: (
            <span style={{ fontWeight: 'bold',fontSize:"15px" }}>
              Technical Debt{' '}
            </span>
          ),
          dataIndex: 'conditions[6].actualValue',
          key: 'technicaldebt',
          width: 90,
          pagination: false,
          render: (text, record) => {
            const errorThresholdValue = record.conditions[6]?.actualValue;

            // Customize the conditions based on your requirements
            let backgroundColor = 'white'; // Default color

            return {
              props: {
                style: { background: backgroundColor }
              },
              children: <div style={{"text-align":"center"}}>{errorThresholdValue}</div>
            };
          },
        },
        {
          title:(
            <span style={{ fontWeight: 'bold',fontSize:"15px" }}>
              Code Smells{' '}
            </span>
          ),
          dataIndex: 'conditions[7].actualValue',
          key: 'codeSmells',
          width: 90,
          pagination: false,
          render: (text, record) => {
            const actualValueData = record.conditions[7]?.actualValue;

            // Customize the conditions based on your requirements
            let backgroundColor = 'white'; // Default color

            return {
              props: {
                style: { background: backgroundColor }
              },
              children: <div style={{"text-align":"center"}}>{actualValueData}</div>
            };
          },
        },
      ],
    },
    {
      title: (
        <span style={{ fontWeight: 'bold',fontSize:"15px" }}>
          Code Coverage % <br />
          <span style={{ color: 'orange' }}>
            ( {'>'}80% - Desired)
          </span>
        </span>
      ),
      dataIndex: 'conditions[8].actualValue',
      key: 'codeCoverage',
      width:120,
      pagination: false,
      render: (text, record) => {
        const erroractualValue = record.conditions[8]?.actualValue;

        // Customize the conditions based on your requirements
        let backgroundColor = 'black'; // Default color

        const numericValue = parseFloat(erroractualValue);

        if (numericValue > 80) {
          backgroundColor = '#3FBF3F'; 
        }
        else {
          backgroundColor = 'red'; // Set color to red for other values
        }


        return {
          props: {
            style: { background: backgroundColor }
          },
          children: <div style={{"text-align":"center"}}>{erroractualValue}{' %'}</div>
        };
      },
    },
    {
      title: (
        <span style={{ fontWeight: 'bold' }}>
          Duplications{' '}
        </span>
      ),
      children: [
        {
          title: (
            <span style={{ fontWeight: 'bold',fontSize:"15px" }}>
              % Duplicates<br />
              <span style={{ color: 'orange' }}>
                ({'<'} 3% - Desired)
              </span>
            </span>
          ),
          dataIndex: 'conditions[9].actualValue',
          key: 'duplications',
          width: 90,
          pagination: false,
          render: (text, record) => {
            const erroractualValue = record.conditions[9]?.actualValue;

             // Convert the string to a number for comparison
            const numericValue = parseFloat(erroractualValue);

            // Customize the conditions based on your requirements
            let backgroundColor = 'black'; // Default color

            if (numericValue < 3) {
              backgroundColor = '#3FBF3F'; // Set color to green if periodIndexValue is 'A'
            }
            else {
              backgroundColor = 'red'; // Set color to red for other values
            }


            return {
              props: {
                style: { background: backgroundColor }
              },
              children: <div style={{"text-align":"center"}}>{erroractualValue}{' %'}</div>
            };
          },
        },
        {
          title: (
            <span style={{ fontWeight: 'bold',fontSize:"15px" }}>
              Duplicate Blocks{' '}
            </span>
          ),
          dataIndex: 'conditions[15].actualValue',
          key: 'duplicateBlocks',
          width: 90,
          pagination: false,
          render: (text, record) => {
            const erroractualValue = record.conditions[15]?.actualValue;

            // Customize the conditions based on your requirements
            let backgroundColor = 'black'; // Default color

            if (erroractualValue === '0') {
              backgroundColor = '#3FBF3F'; // Set color to green if periodIndexValue is 'A'
            }
            else {
              backgroundColor = 'red'; // Set color to red for other values
            }


            return {
              props: {
                style: { background: backgroundColor }
              },
              children: <div style={{"text-align":"center"}}>{erroractualValue}</div>
            };
          },
        },
        {
          title: (
            <span style={{ fontWeight: 'bold',fontSize:"15px" }}>
              Number of Lines{' '}
            </span>
          ),
          dataIndex: 'conditions[10].actualValue',
          key: 'lines',
          width: 90,
          pagination: false,
          render: (text, record) => {
            const errorThresholdValue = record.conditions[10]?.actualValue;

            // Customize the conditions based on your requirements
            let backgroundColor = 'white'; // Default color

            return {
              props: {
                style: { background: backgroundColor }
              },
              children: <div style={{"text-align":"center"}}>{errorThresholdValue}</div>
            };
          },
        },
      ],
    },
  ];

  useEffect(() => {
    fetchDataAndSetTable();
  }, []); // Empty dependency array means it runs only once when the component mounts



  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', margin: '50px', backgroundColor: 'blue', }}>
      <div style={{ fontWeight: 'bold', fontSize: '30px', marginBottom: '20px',textAlign:'center', color: 'white' }}>
      Static Code Quality Dashboard
      </div>
      <Table
        columns={columns}
        dataSource={tableData}
        rowClassName={() => 'table-row-highlight'}
        bordered
        size="middle"
        scroll={false}
        pagination={false}
      />
    </div>
  );
};

export default App;
