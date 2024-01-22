import "./Info.css";

const Info = (props) => {
  console.log("Props din INFO: ", props);
  const getData = (data) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[data.getDay()];
    let month = months[data.getMonth()];
    let date = data.getDate();
    let year = data.getFullYear();

    return `${day} ${date} ${month} ${year} `;
  };

  return (
    <>
      {props.infoData.name ? (
        <p className="country">
          {props?.infoData?.name}, {props?.infoData?.sys?.country}
        </p>
      ) : (
        <p className="country no-country">No country founded</p>
      )}
      <p className="date">{getData(new Date())}</p>
    </>
  );
};

export default Info;
