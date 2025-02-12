function PageTemplate({ nav, settings, mainElement }) {
  return (
    <div className="container-fluid d-flex flex-column vh-100">
      {nav}
      <div className="row flex-grow-1 overflow-hidden">
        <div className="col-3 d-flex flex-column border-end overflow-auto vh-100">
          {settings}
        </div>
        <div className="col d-flex flex-column overflow-auto p-3">
          {mainElement}
        </div>
      </div>
    </div>
  );
}

export default PageTemplate;
