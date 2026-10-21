import type { Localized } from "./content";
export type Project = {
  id: string;
  title: string;
  type: "fullstack" | "frontend";
  period: string;
  role: Localized;
  description: Localized;
  contributions: Localized[];
  result?: Localized;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
};
export const projects: Project[] = [
  {
    id: "bridge",
    title: "BridgeTrafficDemo",
    type: "fullstack",
    period: "10/2026",
    role: {
      en: "Fullstack · Freelance · Built independently",
      vi: "Fullstack · Freelance · Tự thực hiện",
    },
    description: {
      en: "From a camera feed to a vehicle record. A web application for monitoring vehicle entry and exit with license plate recognition.",
      vi: "Từ hình ảnh camera đến hồ sơ xe. Ứng dụng web giám sát xe ra vào và tích hợp nhận diện biển số.",
    },
    contributions: [
      {
        en: "Built a multi-camera monitoring interface and record searches by plate, date, gate, and entry/exit status.",
        vi: "Phát triển giao diện giám sát nhiều camera và tra cứu hồ sơ theo biển số, thời gian, cổng, trạng thái vào–ra.",
      },
      {
        en: "Developed camera configuration and vehicle-record APIs, including editing, soft deletion, restoration, and manual exit confirmation.",
        vi: "Xây dựng API cấu hình camera, quản lý hồ sơ, chỉnh sửa, xóa mềm, khôi phục và xác nhận xe đã ra thủ công.",
      },
      {
        en: "Integrated YOLO and PaddleOCR to detect and read plates; saved full-frame images and plate crops as evidence.",
        vi: "Tích hợp YOLO và PaddleOCR để phát hiện, đọc biển số; lưu ảnh toàn cảnh và ảnh biển số làm bằng chứng.",
      },
      {
        en: "Designed SQL Server storage for visits, camera events, and adjustments; handled duplicate recognition and FIFO queues.",
        vi: "Thiết kế lưu trữ SQL Server cho lượt xe, sự kiện camera, lịch sử điều chỉnh; xử lý ghi nhận trùng và hàng chờ FIFO.",
      },
    ],
    result: {
      en: "Built in one week. Tested with real camera feeds.",
      vi: "Tự thực hiện trong một tuần. Đã chạy thử với camera thực tế.",
    },
    technologies: [
      "ASP.NET Core",
      "Python",
      "SQL Server",
      "YOLO",
      "PaddleOCR",
      "JavaScript",
    ],
    githubUrl: "https://github.com/Luwrng/BridgeTrafficDemo",
  },
  {
    id: "cleanfood",
    title: "Clean Food Viet",
    type: "frontend",
    period: "05–09/2025",
    role: {
      en: "Frontend · Graduation project",
      vi: "Frontend · Đồ án tốt nghiệp",
    },
    description: {
      en: "Customer and admin interfaces, reusable React components, and phone verification with Firebase Authentication.",
      vi: "Giao diện khách hàng và quản trị với component React dùng chung, tích hợp xác thực số điện thoại bằng Firebase.",
    },
    contributions: [
      {
        en: "Contributed to customer-facing and admin interfaces using React.",
        vi: "Tham gia phát triển giao diện khách hàng và trang quản trị bằng React.",
      },
      {
        en: "Built reusable components and integrated Firebase Authentication for phone-based OTP verification.",
        vi: "Xây dựng component tái sử dụng và tích hợp Firebase Authentication để gửi, xác minh OTP qua số điện thoại.",
      },
      {
        en: "Integrated Cloudinary to support image management.",
        vi: "Tích hợp Cloudinary để hỗ trợ quản lý hình ảnh.",
      },
    ],
    technologies: ["React", "Ant Design", "Firebase Auth", "Cloudinary"],
    githubUrl: "https://github.com/Luwrng/muse-ant-design-dashboard",
    liveUrl: "https://clean-food-viet.vercel.app/",
  },
  {
    id: "pregnancy",
    title: "Pregnancy Growth Tracking",
    type: "frontend",
    period: "01–03/2025",
    role: { en: "Frontend · Team of 5", vi: "Frontend · Nhóm 5 thành viên" },
    description: {
      en: "A pregnancy tracking website with health information, experience sharing, and service package registration.",
      vi: "Website theo dõi thai kỳ, chia sẻ kinh nghiệm và đăng ký gói dịch vụ.",
    },
    contributions: [
      {
        en: "Developed React interfaces for pregnancy health tracking pages.",
        vi: "Phát triển giao diện các trang theo dõi sức khỏe thai kỳ bằng React.",
      },
      {
        en: "Integrated APIs to retrieve and display data, working with teammates to complete features.",
        vi: "Tích hợp API để lấy, hiển thị dữ liệu và phối hợp với các thành viên để hoàn thiện chức năng.",
      },
    ],
    technologies: ["React", "JavaScript", "CSS", "REST APIs"],
    githubUrl: "https://github.com/trungne08/SWP391-Group4",
  },
  {
    id: "pawtime",
    title: "PawTime",
    type: "frontend",
    period: "09–12/2024",
    role: { en: "Frontend · Project", vi: "Frontend · Dự án" },
    description: {
      en: "A pet care services website focused on clear layouts, imagery, and service presentation.",
      vi: "Website giới thiệu dịch vụ chăm sóc thú cưng, tập trung vào bố cục, hình ảnh và nội dung dịch vụ.",
    },
    contributions: [
      {
        en: "Contributed to website layouts and pet care service interfaces.",
        vi: "Tham gia thiết kế bố cục và phát triển giao diện giới thiệu dịch vụ chăm sóc thú cưng.",
      },
      {
        en: "Refined images, typography, and content layouts.",
        vi: "Điều chỉnh hình ảnh, kiểu chữ và bố cục nội dung.",
      },
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Luwrng/PawTime",
  },
  {
    id: "sru",
    title: "SRU Management",
    type: "frontend",
    period: "09–12/2023",
    role: { en: "Frontend · Project", vi: "Frontend · Dự án" },
    description: {
      en: "Human resource management interfaces for attendance tracking and leave requests.",
      vi: "Giao diện quản lý nhân sự cho các chức năng chấm công và quản lý đơn xin nghỉ phép.",
    },
    contributions: [
      {
        en: "Designed attendance and leave request interfaces in Figma.",
        vi: "Thiết kế giao diện chấm công và quản lý đơn xin nghỉ phép bằng Figma.",
      },
      {
        en: "Developed frontend pages for attendance tracking and leave requests.",
        vi: "Phát triển giao diện các trang chấm công và quản lý đơn xin nghỉ phép.",
      },
    ],
    technologies: ["Figma", "Vite", "Postman"],
  },
];
