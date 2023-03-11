import React from "react";
import CrewCard from "@/components/cards/crewCard/CrewCard";
import crewData from "@/components/cards/crewCard/data";
import styles from "./crew.module.css";

const Crew = () => {
  return (
    <>
      <div className={styles["cards-container"]}>
        {crewData.map((value) => {
          return (
            <CrewCard
              key={value.id}
              imageSrc={value.img}
              name={value.name}
              role={value.role}
              about={value.about}
            />
          );
        })}
      </div>
    </>
  );
};

export default Crew;
