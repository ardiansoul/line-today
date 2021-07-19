import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Category, CategoryList } from "../../components";
import { AppContext } from "../../context/AppContext";

export default function Homepage() {
  const [isLoading, setisLoading] = useState(true);
  const [state] = useContext(AppContext);
  const [selectedData, setSelectedData] = useState();

  useEffect(() => {
    state.isLoading === false && setisLoading(state.isLoading);
    changeActive();
  }, [state.isLoading]);

  const changeActive = (id) => {
    setisLoading(true);
    if (id) {
      const data = state.data.categories.find((item) => item.id === id);
      if (data) {
        setSelectedData(data);
      }
    } else {
      if (state.data.categories) {
        setSelectedData(state?.data?.categories[0]);
      }
    }
    setTimeout(() => {
      setisLoading(false);
    }, 500);
  };

  return (
    <div>
      {isLoading ? (
        <div className="w-full h-full flex justify-center items-center">
          <FontAwesomeIcon icon={faCircleNotch} spin size="lg" />
        </div>
      ) : !isLoading && state.isError ? (
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-60 h-36 flex justify-center bg-white border-2 rounded border-red-600 items-center">
            <h3 className="font-lg font-bold text-red-600">Error connection</h3>
          </div>
        </div>
      ) : (
        <div className="">
          <CategoryList
            data={state.categories}
            isActive={(id) => changeActive(id)}
          />
          {selectedData && <Category data={selectedData} />}
          {/* {state.data.categories.map((item) => {
              return <Category data={item} />;
            })} */}
        </div>
      )}
    </div>
  );
}
