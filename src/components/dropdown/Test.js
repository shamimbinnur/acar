import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Downshift from "downshift";




const onChange = selectedBook => {
  alert(`your favourite book is ${selectedBook.name}`);
};

function Test({productsData}) {

    useEffect(() => {
        // const pp = productsData.data.map((item) => ({ name : item.name}))
        // console.log(pp)

        
    }, [])
    
    const data = productsData.data.map((item) =>  item.name );
    let unique = [...new Set(data)];
    const fixedObject = unique.map( item =>  ({ name: item }))
    const items = fixedObject;

    


  return (
    <Downshift
      onChange={onChange}
      itemToString={items => (items ? items.name : "")}
    >
      {({
        getInputProps,
        getItemProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
        highlightedItem,
        getLabelProps
      }) => (
        <div>
          <label
            style={{ marginTop: "1rem", display: "block" }}
            {...getLabelProps()}
          >
            Search here
          </label>{" "}
          <br />
          <input {...getInputProps({ placeholder: "Search items" })} />
          {isOpen ? (
            <div className="downshift-dropdown">
              {items
                .filter(
                  item =>
                    !inputValue ||
                    item.name.toLowerCase().includes(inputValue.toLowerCase())
                )
                .map((item, index) => (
                  <div
                    className="dropdown-item"
                    {...getItemProps({ key: item.name, index, item })}
                    style={{
                      backgroundColor:
                        highlightedIndex === index ? "lightgray" : "white",
                      fontWeight: selectedItem === item ? "bold" : "normal"
                    }}
                  >
                    {item.name}
                  </div>
                ))}
            </div>
          ) : null}
        </div>
      )}
    </Downshift>
  );
}

export default Test