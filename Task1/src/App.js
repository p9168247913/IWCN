import React, { useState, useEffect } from 'react';
import './App.css';

const menuItems = ['Onboarding Call', 'Google Search Console Access', 'Google Analytics Access', 'Website Access',
'Texhnical Audit', 'Anchor Text and Semantic Analysis', ' Competitor Analysis', 'Anchor Text/ URL mapping',
'Google Data Studio Report + Local Reporting Suit', 'Site Level Optimization', 'On Page Optimization',' Content Creation',
'Content Publishing', 'Premium Press Release','Review Management'
];

const dummyData = [
  'Row 1', 'Row 2', 'Row 3', 'Row 4', 'Row 5',
  'Row 6', 'Row 7', 'Row 8', 'Row 9', 'Row 10',
  'Row 11', 'Row 12', 'Row 13', 'Row 14', 'Row 15'
];

const defaultText = 'Default Text';

const App = () => {
  const [data, setData] = useState(dummyData.map((item, index) => ({
    menu: menuItems[index],
    value: item,
    col3: defaultText,
    col4: defaultText,
    col5: defaultText,
    isEditing: false
  })));

  const handleValueChange = (index, colName, event) => {
    const newData = [...data];
    newData[index][colName] = event.target.value;
    setData(newData);
  };

  const saveChanges = (index) => {
    const newData = [...data];
    newData[index].isEditing = false;
    setData(newData);
  };

  const postDataToAPI = () => {
    console.log('Data to be posted:', data);
  };

  return (
    <div>
      <div className="menu-column">Month 1</div>
      <div className="grid-container">
        <div className="menu-column">Menu</div>
        <div className="data-column menu-column">Column 1</div>
        <div className="data-column menu-column">Column 2</div>
        <div className="data-column menu-column">Column 3</div>
        <div className="data-column menu-column">Column 4</div>
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <div className="menu-column">{item.menu}</div>
            <div className="data-column">
              {item.isEditing ? (
                <input
                  type="text"
                  value={item.value}
                  onChange={(event) => handleValueChange(index, 'value', event)}
                  onBlur={() => saveChanges(index)}
                />
              ) : (
                <span onClick={() => setData(prevData => {
                  const updatedData = [...prevData];
                  updatedData[index].isEditing = true;
                  return updatedData;
                })}>{item.value}</span>
              )}
            </div>
            <div className="data-column">
              {item.isEditing ? (
                <input
                  type="text"
                  value={item.col3}
                  onChange={(event) => handleValueChange(index, 'col3', event)}
                  onBlur={() => saveChanges(index)}
                />
              ) : (
                <span onClick={() => setData(prevData => {
                  const updatedData = [...prevData];
                  updatedData[index].isEditing = true;
                  return updatedData;
                })}>{item.col3}</span>
              )}
            </div>
            <div className="data-column">
              {item.isEditing ? (
                <input
                  type="text"
                  value={item.col4}
                  onChange={(event) => handleValueChange(index, 'col4', event)}
                  onBlur={() => saveChanges(index)}
                />
              ) : (
                <span onClick={() => setData(prevData => {
                  const updatedData = [...prevData];
                  updatedData[index].isEditing = true;
                  return updatedData;
                })}>{item.col4}</span>
              )}
            </div>
            <div className="data-column">
              {item.isEditing ? (
                <input
                  type="text"
                  value={item.col5}
                  onChange={(event) => handleValueChange(index, 'col5', event)}
                  onBlur={() => saveChanges(index)}
                />
              ) : (
                <span onClick={() => setData(prevData => {
                  const updatedData = [...prevData];
                  updatedData[index].isEditing = true;
                  return updatedData;
                })}>{item.col5}</span>
              )}
            </div>
          </React.Fragment>
        ))}
      </div>
      <button onClick={postDataToAPI}>Post Data to API</button>
    </div>
  );
};

export default App;
