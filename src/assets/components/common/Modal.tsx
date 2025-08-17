export default function CvModal() {
  return (
    <div
      className="modal fade"
      id="cvModal"
      tabIndex={-1}
      aria-labelledby="cvModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title" id="cvModalLabel">
              <i className="fas fa-file-alt me-2"></i> MY CV
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>

          {/* Body */}
          <div className="modal-body">
            {/* Tabs */}
            <ul className="nav nav-tabs" id="cvTabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active fw-bold"
                  id="cv-vn-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#cv-vn"
                  type="button"
                  role="tab"
                  aria-controls="cv-vn"
                  aria-selected="true"
                >
                  <i className="fas fa-language me-2"></i> CV Tiếng Việt
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link fw-bold"
                  id="cv-en-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#cv-en"
                  type="button"
                  role="tab"
                  aria-controls="cv-en"
                  aria-selected="false"
                >
                  <i className="fas fa-globe me-2"></i> CV English
                </button>
              </li>
            </ul>

            {/* Tab content */}
            <div className="tab-content mt-3" id="cvTabsContent">
              <div
                className="tab-pane fade show active"
                id="cv-vn"
                role="tabpanel"
                aria-labelledby="cv-vn-tab"
              >
                <iframe
                  src="/cv-english.pdf"
                  width="100%"
                  height="600px"
                  style={{ border: "none" }}
                  title="cv-vietnamese"
                ></iframe>
              </div>
              <div
                className="tab-pane fade"
                id="cv-en"
                role="tabpanel"
                aria-labelledby="cv-en-tab"
              >
                <iframe
                  src="/cv-vietnam.pdf"
                  width="100%"
                  height="600px"
                  style={{ border: "none" }}
                  title="cv-english"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
