import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const educationData = [
    {
      title: "Computer Technician",
      subtitle: "Military Preparation: Educandus - Brazil",
      date: "2017 - 2018",
    },
    {
      title: "Computer Science",
      subtitle: "Bachelor's Degree: Estácio - Brazil",
      date: "2019 - Present",
    },
  ];

  const experienceData = [
    {
      title: "IT Internship",
      subtitle: "Brazilian Navy",
      date: "2018 - 2019",
    },
    {
      title: "Fullstack Developer",
      subtitle: "Freelancer - Brazil",
      date: "2020 - 2021",
    },
    {
      title: "Mobile Developer",
      subtitle: "Calm Experts - Canada",
      date: "2021 - 2021",
    },
    {
      title: "Fullstack Developer",
      subtitle: "A&M Solutions - Brazil",
      date: "2021 - 2021",
    },
    {
      title: "Quality Assurance",
      subtitle: "Greenbelt - Brazil",
      date: "2021 - Present",
    },
    {
      title: "Fullstack Developer",
      subtitle: "Greenbelt - Brazil",
      date: "2021 - Present",
    },
  ];

  function QualificationComponent({ qualifications, toggleValue }) {
    return (
      <div
        className={
          toggleState === toggleValue
            ? "qualification__content qualification__content-active"
            : "qualification__content"
        }
      >
        {qualifications?.map((qualification, index) => {
          const isEvenIndex = index % 2 === 0;
          const { title, subtitle, date } = qualification;
          return (
            <div
              className={
                toggleState === toggleValue
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                {!isEvenIndex && (
                  <>
                    <div></div>

                    <div>
                      <span className="qualification__rounder"></span>
                      <span className="qualification__line"></span>
                    </div>
                  </>
                )}

                <div>
                  <h3 className="qualification__title">{title}</h3>
                  <span className="qualification__subtitle">{subtitle}</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> {date}
                  </div>
                </div>

                {isEvenIndex && (
                  <div>
                    <span className="qualification__rounder"></span>

                    <span className="qualification__line"></span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button__flex"
                : "qualification__button button__flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button__flex"
                : "qualification__button button__flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <QualificationComponent
            toggleValue={1}
            qualifications={educationData}
          />

          <QualificationComponent
            toggleValue={2}
            qualifications={experienceData}
          />
        </div>
      </div>
    </section>
  );
};

export default Qualification;
