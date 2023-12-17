const Program = ({
  index,
  time,
  title,
  type,
  duration,
  image,
  isUnseen,
  direct,
}) => {
  return (
    <li key={index}>
      <p>{time}</p>
      <img src={image} alt="image program" />
      <div className="description">
        <h2>{title}</h2>
        <div>
          <p className="type">{type}</p>
          {!isUnseen ? (
            <p>
              <span className="duration">{duration}</span>{" "}
              <span className="red">{direct && "Direct"}</span>
            </p>
          ) : (
            <p>
              <span className="duration">{duration}</span>{" "}
              <span className="red">
                <i class="fa-solid fa-circle"></i> Inédit
              </span>
            </p>
          )}
        </div>
      </div>
    </li>
  );
};

export default Program;
