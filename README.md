# Gia Bao — Fullstack Developer Portfolio

Portfolio song ngữ Việt / Anh, xây dựng bằng React 19, TypeScript và Vite. Nội dung được cập nhật theo CV và các thông tin đã xác nhận ngày 21/10/2026.

## Chạy trên máy

Yêu cầu Node.js 22.12+ hoặc Node.js 24.

```sh
npm ci
npm run dev
```

Mở địa chỉ Vite hiển thị trong terminal. Để tạo và xem bản production:

```sh
npm run build
npm run preview
```

Chạy kiểm tra mã:

```sh
npm run lint
```

## Nội dung và chức năng

- Giao diện responsive, không khóa cuộn theo màn hình.
- Chuyển Việt / Anh và ghi nhớ ngôn ngữ trên trình duyệt.
- Năm dự án theo thứ tự mới nhất trước; BridgeTrafficDemo được đặt nổi bật.
- Bộ lọc All / Fullstack / Frontend.
- Chi tiết dự án sử dụng dialog chuẩn: Escape để đóng, giới hạn focus trong dialog, khôi phục focus khi đóng.
- Link mã nguồn và demo chỉ hiển thị nếu có địa chỉ tương ứng. SRU chưa có link repo được xác minh nên không gắn link giả.
- CV Việt / Anh tải trực tiếp từ public/cv. Đây là hai bản PDF đã tạo trong cuộc trò chuyện; phần freelance mới được cập nhật trên website.
- Email, số điện thoại, GitHub và chức năng sao chép email có thông báo kết quả.
- Không cần backend, API key hoặc biến môi trường cho portfolio.

## Chỉnh sửa

| Nội dung                                              | File                             |
| ----------------------------------------------------- | -------------------------------- |
| Giới thiệu, kỹ năng, kinh nghiệm, liên hệ và bản dịch | src/data/content.ts              |
| Dự án, đóng góp cá nhân, công nghệ và link            | src/data/projects.ts             |
| Bố cục, màu sắc, responsive                           | src/App.css và src/index.css     |
| Minh họa dự án                                        | src/components/ProjectVisual.tsx |
| Chân dung                                             | src/assets/HomePic.jpg           |
| CV                                                    | public/cv/                       |

Minh họa dự án được vẽ bằng HTML/CSS/SVG và ghi nhãn minh họa. Đây không phải ảnh chụp ứng dụng, camera trực tiếp hoặc dữ liệu vận hành.

## Triển khai

Build command: npm run build. Output directory: dist. Có thể triển khai dist lên dịch vụ static hosting có HTTPS. Mở trực tiếp dist/index.html bằng file:// không phải cách chạy được hỗ trợ. Website được triển khai riêng từ bước lưu mã nguồn lên GitHub.

## Kiểm tra

- Production build bằng TypeScript + Vite.
- Oxlint.
- Kiểm tra trình duyệt: chuyển ngôn ngữ, bộ lọc dự án, mở/đóng chi tiết bằng chuột và Escape, menu mobile, layout 390px.
- HTTP 200 và application/pdf cho cả hai bản CV.

Dự án giữ nguyên công nghệ khai báo trong CV, không thêm phần trăm thành thạo, số người dùng hoặc kết quả hiệu suất chưa được xác minh.
