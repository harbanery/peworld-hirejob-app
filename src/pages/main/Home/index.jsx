import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getWorkers,
  sortWorkers,
  searchWorker,
  prevPagination,
  nextPagination,
  resetWorkers,
  selectPagination,
} from "../../../configs/redux/action/workerAction";
import style from "./home.module.css";
import iconSearch from "../../../assets/img/icons/search.png";
import arrowIconLeft from "../../../assets/img/icons/prev.png";
import arrowIconRight from "../../../assets/img/icons/next.png";
import arrowDown from "../../../assets/img/icons/chevron-alt.png";
import CardUser from "../../../component/module/main/home/CardUser";
import Button from "../../../component/base/Button";
import Loading from "../../../component/base/Loading";
import api from "../../../configs/api";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [popoverVisible, setPopoverVisible] = useState(false);
  const { data, params, totalPage, loading, response } = useSelector(
    (state) => state.main
  );

  // const [workers, setWorkers] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [totalPage, setTotalPage] = useState(1);
  // const [params, setParams] = useState({
  //   limit: 10,
  //   search: "",
  //   sort: "created_at",
  //   sortBy: "DESC",
  //   page: 1,
  // });

  // const getDataWorkers = () => {
  // dispatch(getWorkers(params));
  // setLoading(true);
  // api
  //   .get("/workers", {
  //     params: {
  //       limit: params.limit,
  //       page: params.page,
  //       ...(params.search ? { search: params.search } : {}),
  //       sort: params.sort,
  //       sortBy: params.sortBy,
  //     },
  //   })
  //   .then((res) => {
  //     setTotalPage(res.data.pagination.totalPage);
  //     const workers = res.data.data;
  //     // console.log(workers);
  //     setLoading(false);
  //     setWorkers(workers);
  //   })
  //   .catch(() => {
  //     setLoading(false);
  //     alert(`Please try again.`);
  //   });
  // };

  const getSortNameWorkers = () => {
    setPopoverVisible(false);
    dispatch(sortWorkers("name", "ASC"));
    // setParams({
    //   ...params,
    //   sort: "name",
    //   sortBy: "ASC",
    // });
    // api.get("/workers/?limit=10&page=1").then((res) => {
    //   const workers = res.data.data;
    //   // Sort workers based on their names
    //   const sortedWorkers = workers.sort((a, b) => {
    //     const nameA = a.name ? a.name.toUpperCase() : "Unknown"; // Convert names to uppercase for case-insensitive sorting
    //     const nameB = b.name ? b.name.toUpperCase() : "Unknown";
    //     if (nameA < nameB) {
    //       return -1;
    //     }
    //     if (nameA > nameB) {
    //       return 1;
    //     }
    //     return 0; // If names are equal
    //   });
    //   setWorkers(sortedWorkers);
    // });
  };

  // const getSortSkillsWorkers = () => {
  //   setPopoverVisible(false);
  //   setParams({
  //     ...params,
  //     sort: "skills",
  //   });
  // api.get("/workers/?limit=10&page=1").then((res) => {
  //   const workers = res.data.data;
  //   // Sort workers based on their names
  //   const sortedWorkers = workers.sort((a, b) => {
  //     const lenA = a.skills.length;
  //     const lenB = b.skills.length;
  //     if (lenA > lenB) {
  //       return -1;
  //     }
  //     if (lenA < lenB) {
  //       return 1;
  //     }
  //     return 0;
  //   });
  //   // console.log(sortedWorkers);
  //   setWorkers(sortedWorkers);
  // });
  // };

  const getSortLocationWorkers = () => {
    setPopoverVisible(false);
    dispatch(sortWorkers("domicile", "ASC"));
    // setParams({
    //   ...params,
    //   sort: "domicile",
    //   sortBy: "ASC",
    // });
    // api.get("/workers/?limit=10&page=1").then((res) => {
    //   const workers = res.data.data;
    //   // Sort workers based on their names
    //   const sortedWorkers = workers.sort((a, b) => {
    //     const domA = a.domicile ? a.domicile.toUpperCase() : "Somewhere"; // Convert names to uppercase for case-insensitive sorting
    //     const domB = b.domicile ? b.domicile.toUpperCase() : "Somewhere";
    //     if (domA < domB) {
    //       return -1;
    //     }
    //     if (domA > domB) {
    //       return 1;
    //     }
    //     return 0; // If names are equal
    //   });
    //   setWorkers(sortedWorkers);
    // });
  };

  const getSortLatestWorkers = () => {
    setPopoverVisible(false);
    dispatch(sortWorkers("created_at", "DESC"));
  };

  const handleNavigate = (id) => {
    dispatch(resetWorkers());
    navigate(`/main/profile/${id}`);
  };

  const handleSearch = (e) => {
    const word = e.target.value;
    setSearchValue(word);
  };

  const submitSearch = () => {
    dispatch(searchWorker(searchValue));

    // setParams({
    //   ...params,
    //   search: searchValue,
    // });
    // if (!search) {
    //   getWorkers();
    // } else {
    //   const searchFound = workers.filter((worker) =>
    //     worker.skills.some((skill) =>
    //       skill.toLowerCase().includes(search.toLowerCase())
    //     )
    //   );
    //   // console.log(searchFound);
    //   setWorkers(searchFound);
    // }
  };

  const togglePopover = () => {
    setPopoverVisible((prev) => !prev);
  };

  const closePopover = () => {
    setPopoverVisible(false);
  };

  const handleOutsideClick = (event) => {
    // Close popover if clicked outside
    if (!event.target.closest("#popover-content") && popoverVisible) {
      closePopover();
    }
  };

  const handlePrev = () => {
    if (params.page > 1) {
      dispatch(prevPagination());
    }
  };

  const handleNext = () => {
    if (params.page < totalPage) {
      dispatch(nextPagination());
    }
  };

  const handleSelectPage = (pageNumber) => {
    dispatch(selectPagination(pageNumber));
  };

  useEffect(() => {
    dispatch(getWorkers(params));
  }, [params]);

  const paginationNumbers = [];
  const maxPagesToShow = 3;

  let startPage = Math.max(1, params.page - Math.floor(maxPagesToShow / 2));
  let endPage = Math.min(totalPage, startPage + maxPagesToShow - 1);

  if (endPage - startPage + 1 < maxPagesToShow) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  for (let pageNum = startPage; pageNum <= endPage; pageNum++) {
    paginationNumbers.push(
      <Button
        key={pageNum}
        onClick={() => handleSelectPage(pageNum)}
        colorButton={`primary`}
        isOutline={params.page === pageNum ? false : true}
        isBorder={true}
        isWidthFull={false}
        extra={`${
          params.page !== pageNum && `font-normal hover:font-bold`
        } text-lg w-[58px] h-[58px] flex justify-center items-center bg-hirejob-white border-hirejob-frost`}
      >
        {pageNum}
      </Button>
    );
  }

  return (
    <div onClick={handleOutsideClick}>
      <header className="px-4 md:px-16 lg:px-[150px] py-[30px] bg-hirejob-purple-normal text-hirejob-white">
        <h1 className="text-center md:text-left font-bold text-[28px]">
          Top Jobs
        </h1>
      </header>

      <main className="bg-hirejob-light">
        <div className="px-4 md:px-16 lg:px-[150px] pt-[50px] pb-[70px]">
          <div className="w-full h-auto md:h-[70px] rounded-lg p-2 flex flex-col md:flex-row justify-between items-center shadow-sm bg-hirejob-white">
            <div className="w-full md:w-2/3 xl:w-4/5 h-full p-3 flex justify-between items-center border-b md:border-b-0 md:border-r border-hirejob-gray">
              <input
                className="w-full h-full font-['Open Sans'] text-sm text-hirejob-gray"
                type="text"
                name="search"
                value={searchValue}
                placeholder="Search for worker"
                onChange={handleSearch}
              />
              {!loading.search ? (
                <img className="w-auto h-auto" src={iconSearch} />
              ) : (
                <div className={`${style.loaderSpinning}`}></div>
              )}
            </div>
            <div className="w-full md:w-1/3 xl:w-1/5 h-full flex justify-between items-center mt-3 md:mt-0 relative">
              {!popoverVisible ? (
                <span
                  className="w-1/2 font-semibold text-base p-[15px] text-hirejob-gray cursor-pointer"
                  onClick={togglePopover}
                >
                  Category
                </span>
              ) : (
                <div
                  className="w-1/2 font-semibold text-base p-[15px] text-hirejob-gray cursor-pointer flex justify-start items-center gap-1"
                  onClick={togglePopover}
                >
                  <img src={arrowDown} />
                  <span>Sort</span>
                </div>
              )}
              {popoverVisible && (
                <div
                  id="popover-content"
                  className={`block absolute w-full top-14 bg-hirejob-white border border-hirejob-frost rounded-md shadow-lg transition duration-500`}
                >
                  <div
                    onClick={getSortLatestWorkers}
                    className="w-full p-[25px] border-y border-hirejob-ice cursor-pointer"
                  >
                    <span className="font-normal text-sm text-hirejob-dark">
                      Sort by Latest
                    </span>
                  </div>
                  <div
                    onClick={getSortNameWorkers}
                    className="w-full p-[25px] border-y border-hirejob-ice cursor-pointer"
                  >
                    <span className="font-normal text-sm text-hirejob-dark">
                      Sort by Name
                    </span>
                  </div>
                  {/* <div
                    onClick={getSortSkillsWorkers}
                    className="w-full p-[25px] border-y border-hirejob-ice"
                  >
                    <span className="font-normal text-sm text-hirejob-dark">
                      Sort by Skill
                    </span>
                  </div> */}
                  <div
                    onClick={getSortLocationWorkers}
                    className="w-full p-[25px] border-y border-hirejob-ice cursor-pointer"
                  >
                    <span className="font-normal text-sm text-hirejob-dark">
                      Sort by Location
                    </span>
                  </div>
                  {/* <div className="w-full p-[25px] border-y border-hirejob-ice">
                    <span className="font-normal text-sm text-hirejob-dark">
                      Sort by Freelance
                    </span>
                  </div> */}
                  {/* <div className="w-full p-[25px] border-y border-hirejob-ice">
                    <span className="font-normal text-sm text-hirejob-dark">
                      Sortir berdasarkan Fulltime
                    </span>
                  </div> */}
                </div>
              )}
              <div className="w-1/2">
                <Button
                  size={`font-semibold`}
                  colorButton={`primary`}
                  extra={`p-[15px]`}
                  onClick={submitSearch}
                  isDisabled={loading.data}
                >
                  Search
                </Button>
              </div>
            </div>
          </div>

          {response.error && (
            <section className="w-full rounded-lg my-[100px]">
              <div className="flex justify-center items-center gap-5">
                <h1 className="font-semibold text-2xl text-hirejob-danger-normal">
                  Please Wait or Try Refreshing Page!
                </h1>
              </div>
            </section>
          )}

          {loading.data ? (
            <Loading />
          ) : (
            <section className="w-full rounded-lg mt-[60px] mb-[100px] shadow-md bg-hirejob-white">
              {data.map((worker) => (
                <CardUser
                  key={worker.id}
                  onClick={() => handleNavigate(worker.id)}
                  image={worker.photo}
                  name={worker.name}
                  job_desk={worker.job_desk}
                  domicile={worker.domicile}
                  skills={worker.skills}
                />
              ))}
            </section>
          )}

          <div className="w-full flex justify-center items-center gap-[14px]">
            <Button
              onClick={handlePrev}
              colorButton={`primary`}
              isOutline={true}
              isBorder={true}
              isWidthFull={false}
              extra={`w-[58px] h-[58px] flex justify-center items-center bg-hirejob-white border-hirejob-frost`}
            >
              <img src={arrowIconLeft} />
            </Button>
            {/* <ul className="flex justify-center items-center gap-[14px]">
              <li className="font-bold text-lg w-[58px] h-[58px] flex justify-center items-center bg-hirejob-purple-normal text-hirejob-white border rounded border-hirejob-frost">
                {isNaN(params.page) ? 1 : params.page}
              </li>
              <li className="font-normal text-lg w-[58px] h-[58px] flex justify-center items-center bg-hirejob-white text-hirejob-gray border rounded border-hirejob-frost">
                2
              </li>
              <li className="font-normal text-lg w-[58px] h-[58px] hidden sm:flex justify-center items-center bg-hirejob-white text-hirejob-gray border rounded border-hirejob-frost">
                3
              </li>
              <li className="font-normal text-lg w-[58px] h-[58px] hidden sm:flex justify-center items-center bg-hirejob-white text-hirejob-gray border rounded border-hirejob-frost">
                4
              </li>
              <li className="font-normal text-lg w-[58px] h-[58px] hidden sm:flex justify-center items-center bg-hirejob-white text-hirejob-gray border rounded border-hirejob-frost">
                5
              </li>
              <li className="font-normal text-lg w-[58px] h-[58px] hidden sm:flex justify-center items-center bg-hirejob-white text-hirejob-gray border rounded border-hirejob-frost">
                6
              </li>
            </ul> */}
            <ul className="flex justify-center items-center gap-[14px]">
              {paginationNumbers}
            </ul>
            <Button
              onClick={handleNext}
              colorButton={`primary`}
              isOutline={true}
              isBorder={true}
              isWidthFull={false}
              extra={`w-[58px] h-[58px] flex justify-center items-center bg-hirejob-white border-hirejob-frost`}
            >
              <img src={arrowIconRight} />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
