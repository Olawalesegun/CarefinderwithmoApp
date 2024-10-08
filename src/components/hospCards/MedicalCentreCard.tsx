import { IoLocationSharp } from "react-icons/io5";
import { useRouter } from "next/router";

interface MedicalCentreCardProps {
  details: {
    image: string;
    hospital: string;
    location: string;
    distance: string;
    specialists: number;
    id: string;
  };
  width: number;
  height: number;
  shadow?: boolean;
}

export default function MedicalCentreCard({
  details,
  width,
  height,
  shadow = false,
}: MedicalCentreCardProps) {
  const router = useRouter();

  if (!details) {
    return "No data Found";
  }

  const { image, hospital, location, distance, specialists, id } = details;

  return (
    <div
      onClick={() => router.push(`./medical_center/${id}`)}
      className="Medical-card-cont"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: "white",
        borderRadius: "10px 10px",
        overflow: "hidden",
        fontSize: "0.9rem",
        position: "relative",
        boxShadow: shadow ? "0px 4px 4px rgba(0, 0, 0, 0.25)" : "none",
        cursor: "pointer",
        marginBottom: "1em",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          backgroundColor: "black",
          color: "white",
          padding: "5px 10px",
          borderRadius: "50px",
          fontSize: "0.7rem",
        }}
      >
        {specialists} Specialists Available
      </div>

      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "170px",
          width: "100%",
        }}
      ></div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: "15px 20px",
        }}
      >
        <div style={{ fontSize: "0.7rem", maxWidth: "60%" }}>
          <h1
            style={{
              fontSize: "0.9rem",
              marginBottom: "5px",
              color: "#003963",
            }}
          >
            {hospital}
          </h1>

          <span>{location}</span>
        </div>

        <div style={{ fontSize: "0.7rem" }}>
          <IoLocationSharp />
          <span>{distance}</span>
        </div>
      </div>
    </div>
  );
};
