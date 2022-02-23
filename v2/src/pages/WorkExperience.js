import React, { Component, Fragment } from "react";

export default class WorkExperience extends Component {
  render() {
    const workExperience = this.props.workExperience;
    let workExperienceContent = workExperience.map((e, i) => (
      <div
        key={i}
        className={
          e.isConsultant
            ? "work-experience-section work-sub"
            : "work-experience-section"
        }
      >
        <h3 className="work-experience-header">{e.companyName}</h3>
        <span className="etiket kart__etiket">
          {e.startDate} - {e.dueDate}
        </span>
        <h5 className="work-experience-profession">{e.profession}</h5>
        <a
          className="work-experience-link"
          href={e.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {e.link.replace("http://www.", "")}
        </a>
        <p dangerouslySetInnerHTML={{ __html: e.description }} />
      </div>
    ));
    return (
      <Fragment>
        <section id="work-experience">
          <h1 className="section__heading spans">
            <span>İş</span>
            <span> Tecrübelerim</span>
          </h1>
          <div className="container">
            <div className="row">
              <div className="ck12 b6">
                <div className="work-experience">{workExperienceContent}</div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
