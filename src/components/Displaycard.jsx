const DisplayCard = ({ data, att }) => {
  return (
    <div className="col my-2 ">
      <div className="card rounded-4 ">
        <div className="card-header d-flex align-items-center flex-column ">
          <div className="card-subtitle ">{data.plan}</div>
          <div className="card-title ">
            <h2>{data.price}</h2>
          </div>
        </div>
        <div className="card-body">
          <ul className="list-display list-checkmarks">
            <li>{data.user} User</li>
            <li>{data.storage} Storage</li>
            <li>{data.publicProjects} Public projects</li>
            <li>{data.access} Access</li>
            <li>{data.privateProjects} Private projects</li>
            <li>{data.phoneSupport} Phone support</li>
            <li>{data.subdomain} subdomain</li>
            <li>{data.reports}</li>
          </ul>
          <div className="button d-grid gap-2">
            <button className="btn btn-primary btn-lg rounded-5 {att}">
              button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayCard;
