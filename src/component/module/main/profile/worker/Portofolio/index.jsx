import React, { useState, useEffect } from "react";
import Input from "../../../../../base/Input";
import Button from "../../../../../base/Button";
import iconUpload from "../../../../../../assets/img/icons/cloud.png";
import iconRules1 from "../../../../../../assets/img/icons/high-res-img-rules.png";
import iconRules2 from "../../../../../../assets/img/icons/size-img-rules.png";
import api from "../../../../../../configs/api";

const Portofolio = () => {
  const [portofolio, setPortofolio] = useState({
    application_name: "",
    link_repository: "",
    application: "Aplikasi Mobile",
    image: "",
  });
  const [myPortofolio, setMyPortofolio] = useState([]);

  const getPortofolio = () => {
    api.get("/portfolio").then((res) => {
      const portofolios = res.data.data;
      console.log(portofolios);
      setMyPortofolio(portofolios);
    });
  };

  const handleAddPortofolio = () => {
    // console.log(
    //   `${portofolio.application} ${portofolio.application_name} ${portofolio.link_repository} ${portofolio.image}`
    // );
    api
      .post(`/portfolio`, {
        application_name: portofolio.application_name,
        link_repository: portofolio.link_repository,
        application: portofolio.application,
        image: portofolio.image,
      })
      .then(() => {
        alert("berhasil menambahkan data portofolio");
        setPortofolio({
          application_name: "",
          link_repository: "",
          application: "Aplikasi Mobile",
          image: "",
        });
        getPortofolio();
      })
      .catch((err) => {
        alert("gagal menambahkan portofolio");
        console.log(err.response);
      });
  };

  const getDataPortofolio = (id) => {
    setPortofolio({
      application_name: "",
      link_repository: "",
      application: "Aplikasi Mobile",
      image: "",
    });
    api.get("/portfolio").then((res) => {
      const dataExperience = res.data.data.filter((item) => item.id === id);
      dataExperience.map((value) => {
        setPortofolio({
          application_name: value.application_name,
          link_repository: value.link_repository,
          application: value.application,
          image: value.image,
        });
      });
    });
  };

  const handleUpdatePortofolio = (id) => {
    api
      .put(`/portfolio/${id}`, {
        application_name: portofolio.application_name,
        link_repository: portofolio.link_repository,
        application: portofolio.application,
        image: portofolio.image,
      })
      .then(() => {
        alert("berhasil mengubah portofolio!");
        setPortofolio({
          application_name: "",
          link_repository: "",
          application: "Aplikasi Mobile",
          image: "",
        });
        getPortofolio();
      })
      .catch((err) => {
        alert("gagal mengubah portofolio!");
        console.log(err.response);
      });
  };

  const deletePortofolio = (id) => {
    api.delete(`/portfolio/${id}`).then(() => {
      alert("berhasil menghapus portofolio");
      getPortofolio();
    });
  };

  const handleChange = (e) => {
    setPortofolio({
      ...portofolio,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    alert("'click only' still in development...");
    // setPortofolio({
    //   ...portofolio,
    //   image: e.target.files[0],
    // });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const dataTransfer = e.dataTransfer;

    // Handle dropped files
    if (dataTransfer.items) {
      for (let i = 0; i < dataTransfer.items.length; i++) {
        if (dataTransfer.items[i].kind === "file") {
          const file = dataTransfer.items[i].getAsFile();
          console.log(file);
          setPortofolio({
            ...portofolio,
            image: file,
          });
        }
      }
    }

    // Handle dropped URLs
    if (dataTransfer.types.includes("text/uri-list")) {
      const url = dataTransfer.getData("text/plain");
      console.log("Dropped URL:", url);
      setPortofolio({
        ...portofolio,
        image: url,
      });
      // Process the URL as needed
      // Example: You can use the URL to fetch the image and display it
      // fetch(url)
      //   .then(response => response.blob())
      //   .then(blob => {
      //     setPortofolio({
      //       ...portofolio,
      //       image: blob,
      //     });
      //   });
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    getPortofolio();
  }, []);

  return (
    <section className="w-full rounded-lg py-4 bg-hirejob-white">
      <div className="font-semibold text-[22px] border-b border-[#C4C4C4] px-9 py-[18px] text-hirejob-dark">
        <h1>Portofolio</h1>
      </div>
      <div className="py-4 px-9">
        <Input
          label={`Nama Aplikasi`}
          name={`application_name`}
          placeholder={`Masukan nama aplikasi`}
          value={portofolio.application_name}
          onChange={handleChange}
        />
        <Input
          label={`Link Repository`}
          name={`link_repository`}
          placeholder={`Masukan link repository`}
          value={portofolio.link_repository}
          onChange={handleChange}
        />
        <div className="flex flex-col flex-nowrap py-4">
          <span className="font-normal text-xs text-hirejob-gray mb-1">
            Type Portofolio
          </span>
          <div className="flex flex-wrap items-center justify-start gap-1">
            <div
              className={`flex items-center justify-center gap-3 p-[15.5px] ${
                portofolio.application === "Aplikasi Mobile" && `border`
              } border-hirejob-frost rounded h-[50px]`}
            >
              <input
                className="checked:accent-hirejob-purple-normal"
                type="radio"
                name="application"
                value={`Aplikasi Mobile`}
                checked={portofolio.application === "Aplikasi Mobile"}
                onChange={handleChange}
              />
              <span
                className={`text-sm ${
                  portofolio.application === "Aplikasi Mobile"
                    ? `font-semibold text-hirejob-slate`
                    : `font-normal text-hirejob-gray`
                }`}
              >{`Aplikasi Mobile`}</span>
            </div>
            <div
              className={`flex items-center justify-center gap-3 p-[15.5px] ${
                portofolio.application === "Aplikasi Web" && `border `
              } border-hirejob-frost rounded h-[50px]`}
            >
              <input
                className="checked:accent-hirejob-purple-normal"
                type="radio"
                name="application"
                value={`Aplikasi Web`}
                checked={portofolio.application === "Aplikasi Web"}
                onChange={handleChange}
              />
              <span
                className={`text-sm ${
                  portofolio.application === "Aplikasi Web"
                    ? `font-semibold text-hirejob-slate`
                    : `font-normal text-hirejob-gray`
                }`}
              >{`Aplikasi Web`}</span>
            </div>
          </div>
        </div>
        <div className="pt-4 pb-8 flex flex-col gap-1 text-hirejob-gray">
          <span className="font-normal text-xs">Upload gambar</span>
          <label
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            htmlFor="file-upload"
            className="border border-hirejob-gray border-dashed inline-block w-full mt-3 pt-[41px] pb-[72px] cursor-pointer"
          >
            <div className="text-hirejob-dark flex flex-nowrap flex-col align-center justify-center">
              <div className="flex align-center justify-center">
                <img className="max-w-[114px]" src={iconUpload} />
              </div>
              {!portofolio.image && (
                <>
                  <span className="px-5 xl:px-0 flex items-center justify-center text-sm text-center">
                    Drag & Drop untuk Upload Gambar{" "}
                    {portofolio.application === "Aplikasi Mobile"
                      ? `Aplikasi Mobile`
                      : `Aplikasi Web`}
                  </span>
                  <span className="px-5 md:px-0 flex items-center justify-center text-xs text-center mt-3">
                    Atau cari untuk mengupload file dari direktorimu.
                  </span>
                </>
              )}
              {portofolio.image && (
                <span className="px-10 xl:px-0 flex items-center justify-center text-base text-center mt-3">
                  File Uploaded
                </span>
              )}
              <div className="flex flex-col md:flex-row align-center justify-center mt-9 gap-[29px] md:gap-[58px]">
                <img className="px-20 md:px-0 md:h-5 xl:h-8" src={iconRules1} />
                <img className="px-20 md:px-0 md:h-5 xl:h-8" src={iconRules2} />
              </div>
            </div>
          </label>
          {/* <label
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            htmlFor="file-upload"
            className="border border-hirejob-gray border-dashed inline-block w-full mt-3 h-[333px] cursor-pointer"
          >
            <div className="text-hirejob-dark flex flex-nowrap flex-col align-center justify-center">
              <div className="flex align-center justify-center">
                <img className="w-full" src={portofolio.image} />
              </div>
            </div>
          </label> */}
          <input
            id="file-upload"
            type="file"
            name="image"
            onChange={handleFileChange}
          />
        </div>
        <div
          className={`pt-12 border-t ${
            myPortofolio && `pb-12 border-b`
          } border-hirejob-frost`}
        >
          <Button
            onClick={handleAddPortofolio}
            colorButton={`secondary`}
            isBorder={true}
            isOutline={true}
            extra={`p-[13.5px]`}
          >
            Tambah Portofolio
          </Button>
        </div>
        {myPortofolio && (
          <ul className="pt-8 pb-4 mt-[10px] flex flex-row justify-center md:justify-start flex-wrap text-hirejob-white">
            {myPortofolio.map((porfol) => (
              <li
                key={porfol.id}
                className="w-full lg:w-auto text-center lg:text-left px-4 py-1 my-[10px] mr-[10px] border rounded bg-[#fbb01799] border-hirejob-yellow-normal"
              >
                <div
                  className={`flex flex-col cursor-pointer`}
                  onClick={() => getDataPortofolio(porfol.id)}
                >
                  {porfol.application_name && (
                    <span className="font-bold text-base pb-1">
                      {porfol.application_name}
                    </span>
                  )}
                  {porfol.application && (
                    <span className="font-semibold text-sm pb-1">
                      {porfol.application}
                    </span>
                  )}
                  {porfol.link_repository && (
                    <span className="font-bold text-xs">
                      {porfol.link_repository
                        ? `Link: Ready`
                        : `Link: Not Ready`}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => handleUpdatePortofolio(porfol.id)}
                  className="w-full font-semibold text-xs mt-2 py-1 rounded bg-hirejob-white text-hirejob-yellow-normal hover:bg-hirejob-yellow-normal hover:text-hirejob-white transition duration-200"
                >
                  Edit
                </button>

                {deletePortofolio && (
                  <button
                    onClick={() => deletePortofolio(porfol.id)}
                    className="w-full font-semibold text-xs mt-1 py-1 rounded bg-hirejob-white text-hirejob-yellow-normal hover:bg-hirejob-yellow-normal hover:text-hirejob-white transition duration-200"
                  >
                    Hapus
                  </button>
                )}
              </li>
              // <TagExtra
              //   key={exp.id}
              //   date={`${exp.work_month} ${exp.work_year}`}
              //   position={exp.position}
              //   company={exp.company}
              //   // getClick={() => getDataExperience(exp.id)}
              //   // updateClick={() => handleUpdateExperience(exp.id)}
              //   deleteClick={() => deleteExperience(exp.id)}
              // />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Portofolio;
