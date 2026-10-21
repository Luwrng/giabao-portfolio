import { useContent } from "../language";

export function ProjectVisual({
  id,
  large = false,
}: {
  id: string;
  large?: boolean;
}) {
  const { language, t } = useContent();
  const vi = language === "vi";
  return (
    <div
      className={`project-visual visual-${id} ${large ? "visual-large" : ""}`}
      aria-hidden="true"
    >
      <div className="visual-topline">
        <span>
          <i />
          <i />
          <i />
        </span>
        <span>
          {id === "bridge"
            ? "BRIDGE / MONITOR"
            : id === "cleanfood"
              ? "CLEAN FOOD VIET"
              : id === "pregnancy"
                ? "GROWTH / TRACKING"
                : id === "pawtime"
                  ? "PAWTIME / CARE"
                  : "SRU / WORKSPACE"}
        </span>
        <span>↗</span>
      </div>
      {id === "bridge" ? (
        <div className="bridge-illustration">
          <div className="monitor-sidebar">
            <span className="mini-brand">B.</span>
            <i />
            <i />
            <i />
            <i />
            <div className="mini-status" />
          </div>
          <div className="monitor-body">
            <div className="monitor-heading">
              <span>{vi ? "Camera giám sát" : "Camera monitoring"}</span>
              <b>
                <i />
                RTSP
              </b>
            </div>
            <div className="camera-grid">
              {["A", "B", "C", "E"].map((gate, i) => (
                <div className={`camera-tile camera-${i}`} key={gate}>
                  <span>CAM {gate}</span>
                  <div className="road-line" />
                  <div className="vehicle">
                    <i />
                    <i />
                  </div>
                  <div className="plate-box" />
                  <small>LIVE</small>
                </div>
              ))}
            </div>
            <div className="monitor-flow">
              <span>RTSP</span>
              <i>→</i>
              <span>YOLO + OCR</span>
              <i>→</i>
              <span>SQL SERVER</span>
            </div>
          </div>
        </div>
      ) : id === "cleanfood" ? (
        <div className="food-illustration">
          <div className="food-nav">
            <strong>
              cleanfood<span>viet.</span>
            </strong>
            <span>☰</span>
          </div>
          <div className="food-heading">
            <span>{vi ? "Từ vườn đến bàn ăn." : "From garden to table."}</span>
            <div className="leaf-shape" />
          </div>
          <div className="food-products">
            {[0, 1, 2].map((i) => (
              <div key={i}>
                <span className={`food-product food-product-${i}`} />
                <i />
                <b />
              </div>
            ))}
          </div>
          <div className="mini-rule" />
        </div>
      ) : id === "pregnancy" ? (
        <div className="growth-illustration">
          <div className="growth-head">
            <span>♡</span>
            <div>
              <b>{vi ? "Hành trình thai kỳ" : "Your pregnancy journey"}</b>
              <small>
                {vi ? "Theo dõi cùng bạn" : "Following your progress"}
              </small>
            </div>
            <i>···</i>
          </div>
          <div className="growth-chart">
            <span>{vi ? "Biểu đồ chỉ số" : "Growth overview"}</span>
            <svg viewBox="0 0 400 120">
              <path
                d="M0 100H400M0 60H400M0 20H400"
                stroke="#ded4e6"
                fill="none"
              />
              <path
                d="M0 106C40 105 35 87 75 87S120 62 155 66S205 25 250 40S320 0 400 8"
                stroke="#8970aa"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M0 110C60 110 60 95 110 95S180 70 235 72S330 30 400 25"
                stroke="#d7a8af"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5 6"
              />
            </svg>
            <div>
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      ) : id === "pawtime" ? (
        <div className="paw-illustration">
          <div className="paw-nav">
            <strong>
              pawtime<span>✳</span>
            </strong>
            <span>☰</span>
          </div>
          <div className="paw-content">
            <p>
              Keep your
              <br />
              <em>pet happy.</em>
            </p>
            <svg viewBox="0 0 130 130">
              <ellipse cx="65" cy="83" rx="32" ry="25" fill="#ecb08d" />
              <ellipse
                cx="30"
                cy="48"
                rx="14"
                ry="20"
                transform="rotate(-30 30 48)"
                fill="#ecb08d"
              />
              <ellipse cx="59" cy="30" rx="13" ry="19" fill="#ecb08d" />
              <ellipse
                cx="89"
                cy="34"
                rx="13"
                ry="19"
                transform="rotate(15 89 34)"
                fill="#ecb08d"
              />
              <ellipse
                cx="110"
                cy="59"
                rx="13"
                ry="19"
                transform="rotate(35 110 59)"
                fill="#ecb08d"
              />
            </svg>
          </div>
          <div className="paw-pill">
            {vi
              ? "Chăm sóc · Yêu thương · Đồng hành"
              : "Care · Love · Companionship"}
          </div>
        </div>
      ) : (
        <div className="sru-illustration">
          <div className="sru-nav">
            <b>
              SRU<span> workspace</span>
            </b>
            <i>···</i>
          </div>
          <div className="sru-table">
            <div className="table-head">
              <span>{vi ? "Nhân sự" : "Team member"}</span>
              <span>{vi ? "Chấm công" : "Attendance"}</span>
            </div>
            {[0, 1, 2, 3].map((i) => (
              <div key={i}>
                <span>
                  <i className="avatar-dot" />
                  <b />
                </span>
                <em />
              </div>
            ))}
          </div>
        </div>
      )}
      <span className="visual-label">{t.projects.diagram}</span>
    </div>
  );
}
